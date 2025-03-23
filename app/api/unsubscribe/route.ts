import Subscription from "@/lib/database/subscription.model";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { revalidatePath } from "next/cache";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const { subscriptionId, subscribedItemId } = await req.json();

    if (!subscriptionId || !subscribedItemId) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    // Retrieve subscription from Stripe
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    if (!subscription) {
      return NextResponse.json(
        { error: "Subscription not found" },
        { status: 404 }
      );
    }

    if (subscription.items.data.length > 1) {
      await stripe.subscriptionItems.del(subscribedItemId);
      await Subscription.findOneAndDelete({ subscribedItemId });
       revalidatePath("/profile-update");
      return NextResponse.json({
        message: "Subscription canceled successfully",
      });
    } else {
      await stripe.subscriptions.cancel(subscriptionId);
      await Subscription.deleteMany({ subscriptionId });
       revalidatePath("/profile-update");
      return NextResponse.json({
        message: "Subscription canceled successfully",
      });
    }
  } catch (error: any) {
    console.error("❌ Error unsubscribing:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
