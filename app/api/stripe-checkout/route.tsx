import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const YOUR_DOMAIN = process.env.APP_URL || "http://localhost:3000";

export async function POST(req: Request) {
  try {
    const { cart, metadata } = await req.json();

    console.log("🚀 ~ POST ~ metadata:", metadata);
    console.log("🚀 ~ POST ~ cart:", cart);
    if (!cart || cart.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // Convert cart into Stripe line_items
    const line_items = cart.map((product: { priceId: string }) => ({
      price: product.priceId, // Ensure it's a valid Stripe price ID
      quantity: 1, // Adjust if needed
    }));

    const productMetadata = cart
      .map(
        (product: any, index: number) =>
          `product_${index + 1}: ${product.id}|${product.name}|${product.price}`
      )
      .join(", ");

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      billing_address_collection: "auto",
      line_items,
      customer_email: metadata.email,
      metadata: {
        ...metadata, // User info
        products: productMetadata, // Store all product info as a single key
      },
      mode: "subscription",
      success_url: `${YOUR_DOMAIN}/dashboard?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}/?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
