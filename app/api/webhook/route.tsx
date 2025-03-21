import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import Subscription from "@/lib/database/subscription.model";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// Your Stripe webhook secret from the Stripe Dashboard
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(req: NextRequest) {
  let event;

  const signature = req.headers.get("stripe-signature") as string;

  if (!signature) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 }
    );
  }

  try {
    const rawBody = await req.text(); // Read raw body
    event = stripe.webhooks.constructEvent(rawBody, signature, endpointSecret);
  } catch (err: any) {
    console.error("❌ Error verifying webhook signature:", err.message);
    return NextResponse.json(
      { error: "Webhook verification failed" },
      { status: 400 }
    );
  }

  // Handle Stripe webhook events
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;

      if (!session.metadata || !session.metadata.products) {
        console.error("❌ Missing product metadata in session.");
        return NextResponse.json(
          { error: "Missing metadata" },
          { status: 400 }
        );
      }

      const productList = session.metadata.products
        .split(", ")
        .map((entry) => {
          const parts = entry.split(": "); // Splitting key-value pair

          if (parts.length < 2) return null; // Skip invalid entries

          const productDetails = parts[1].split("|"); // Use '|' instead of '-'
          const productId = productDetails[0].trim(); // First part is product ID
          const productPrice = parseFloat(productDetails.pop()!.trim()); // Last part is price

          if (isNaN(productPrice)) {
            console.error("❌ Invalid price for product:", productDetails);
            return null;
          }

          const productName = productDetails.slice(1).join(" ").trim(); // Join remaining as name

          return { productId, productName, productPrice };
        })
        .filter(Boolean); // Remove null values

      try {
        for (const product of productList) {
          const newSubscription = new Subscription({
            productName: product!.productName,
            productId: product!.productId,
            startDate: new Date(),
            endDate:
              session.metadata.type === "monthly"
                ? new Date(new Date().setMonth(new Date().getMonth() + 1)) // 1-month subscription
                : new Date(
                    new Date().setFullYear(new Date().getFullYear() + 1)
                  ), // 1-year subscription
            userId: session.metadata.userId, // Stripe customer ID
            price: product!.productPrice,
            platform: session.metadata.platform,
            type: session.metadata.type,
            userInfo: {
              firstName: session.metadata.firstName,
              lastName: session.metadata.lastName,
              email: session.metadata.email,
              phone: session.metadata.phone,
              country: session.metadata.country,
              state: session.metadata.state,
              city: session.metadata.city,
              zip: session.metadata.zip,
              address: session.metadata.address,
            },
          });

          await newSubscription.save();
          console.log("✅ Subscription saved:", newSubscription);
        }
      } catch (err) {
        console.error("❌ Error saving subscription:", err);
      }
      break;

    case "customer.subscription.created":
      const newSubscription = event.data.object;
      // console.log("✅ New subscription created:", newSubscription);
      break;

    case "customer.subscription.updated":
      const updatedSubscription = event.data.object;
      // console.log("🔄 Subscription updated:", updatedSubscription);
      break;

    case "customer.subscription.deleted":
      const deletedSubscription = event.data.object;
      // console.log("🗑️ Subscription canceled:", deletedSubscription);
      break;

    case "invoice.payment_succeeded":
      const invoice = event.data.object;
      // console.log("💰 Payment succeeded for invoice:", invoice);
      break;

    case "invoice.payment_failed":
      const failedInvoice = event.data.object;
      // console.log("❌ Payment failed:", failedInvoice);
      break;

    default:
      console.log(`⚠️ Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
