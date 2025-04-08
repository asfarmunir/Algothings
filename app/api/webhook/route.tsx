import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import Subscription from "@/lib/database/subscription.model";
import {
  sendLicenseKeyEmail,
  subscriptionConfirmation,
  subscriptionReciept,
} from "@/lib/mailgun";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
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
    const rawBody = await req.text();
    event = stripe.webhooks.constructEvent(rawBody, signature, endpointSecret);
  } catch (err: any) {
    console.error("❌ Webhook verification failed:", err.message);
    return NextResponse.json({ error: "Invalid webhook" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      console.log("✅ Checkout session completed:", event.data.object);
      const session = event.data.object;

      if (!session.metadata || !session.metadata.products) {
        console.error("❌ Missing product metadata.");
        return NextResponse.json(
          { error: "Metadata missing" },
          { status: 400 }
        );
      }

      const subscriptionId = session.subscription as string; // Stripe Subscription ID

      if (!subscriptionId) {
        console.error("❌ Subscription ID not found in session.");
        return NextResponse.json(
          { error: "Missing subscription ID" },
          { status: 400 }
        );
      }

      try {
        // Retrieve subscription details from Stripe
        const stripeSubscription = await stripe.subscriptions.retrieve(
          subscriptionId
        );

        // Map each item to store subscription item ID
        const productList = session.metadata.products
          .split(", ")
          .map((entry, index) => {
            const parts = entry.split(": ");
            if (parts.length < 2) return null;

            const productDetails = parts[1].split("|");
            const productId = productDetails[0].trim();
            const productPrice = parseFloat(productDetails.pop()!.trim());

            if (isNaN(productPrice)) {
              console.error("❌ Invalid price for product:", productDetails);
              return null;
            }

            const productName = productDetails.slice(1).join(" ").trim();

            // Get subscription item ID for this product
            const subscriptionItem = stripeSubscription.items.data[index];
            const subscribedItemId = subscriptionItem?.id || null;

            return { productId, productName, productPrice, subscribedItemId };
          })
          .filter(Boolean);

        for (const product of productList) {
          const newSubscription = new Subscription({
            subscriptionId, // Store Stripe Subscription ID
            subscribedItemId: product!.subscribedItemId, // Store Stripe Subscription Item ID
            productName: product!.productName,
            productId: product!.productId,
            startDate: new Date(),
            endDate:
              session.metadata.type === "monthly"
                ? new Date(new Date().setMonth(new Date().getMonth() + 1))
                : new Date(
                    new Date().setFullYear(new Date().getFullYear() + 1)
                  ),
            userId: session.metadata.userId,
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

          await subscriptionConfirmation(
            session.metadata.email,
            product!.productName,
            session.metadata.firstName
          );
          await subscriptionReciept(
            session.metadata.email,
            product!.productName,
            session.metadata.firstName,
            product!.productPrice,
            new Date().toLocaleDateString("en-US"),
            subscriptionId
          );
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
      console.log("🔄 Subscription updated:", updatedSubscription);

      if (updatedSubscription.metadata?.license_keys) {
        try {
          const licenseKeys = JSON.parse(
            updatedSubscription.metadata.license_keys
          );

          const subscriptions = await Subscription.find({
            subscriptionId: updatedSubscription.id,
          });

          if (subscriptions.length > 0) {
            const firstSubscription = subscriptions[0];
            const userEmail = firstSubscription.userInfo.email;
            const userName = firstSubscription.userInfo.firstName;
            const dashLink = `${process.env.APP_URL}/dashboard`;

            const licenseInfo = Object.entries(licenseKeys).map(
              ([product, keys]) => ({
                productName: product,
                licenseKey: Array.isArray(keys) ? keys[0] : keys,
              })
            );

            console.log("License keys extracted:", licenseInfo);
            const productsWithNames = licenseInfo.map((license) => {
              const sub = subscriptions.find((s) =>
                s.productId
                  .toLowerCase()
                  .includes(license.productName.toLowerCase())
              );

              if (!sub) {
                console.warn(
                  "No matching product found for:",
                  license.productName
                );
              }

              return {
                ...license,
                productName: sub?.productName || license.productName,
              };
            });

            console.log("Products with names:", productsWithNames);
            if (productsWithNames.length > 0) {
              try {
                await sendLicenseKeyEmail(
                  userEmail,
                  userName,
                  productsWithNames,
                  dashLink
                );
                console.log(
                  `✅ License key email successfully sent to ${userEmail}`
                );
              } catch (emailError) {
                console.error("Failed to send license email:", emailError);
              }
            } else {
              console.warn("No valid license keys to send");
            }
          } else {
            console.log("No subscriptions found for:", updatedSubscription.id);
          }
        } catch (err) {
          console.error("Error processing license keys:", err);
        }
      } else {
        console.log("No license keys found in subscription metadata");
      }
      break;
    case "customer.subscription.deleted":
      const deletedSubscription = event.data.object;
      console.log("🗑️ Subscription canceled:", deletedSubscription);
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
