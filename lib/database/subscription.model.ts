import { Schema, model, models } from "mongoose";

export interface SubscriptionProps {
  productName: string;
  productId: string;
  price: number;
  platform: string;
  type: "monthly" | "annual";
  startDate: Date;
  endDate: Date;
  userId: string;
  userInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    state: string;
    city: string;
    zip: string;
    address: string;
  };
  status: string;
  subscriptionId: string;
  subscribedItemId: string;
}


const userInfoSchema = new Schema({
  firstName: { type: String,  trim: true },
  lastName: { type: String,  trim: true },
  email: { type: String,  trim: true },
  phone: { type: String,  trim: true },
  country: { type: String,  trim: true },
  state: { type: String,  trim: true },
  city: { type: String,  trim: true },
  zip: { type: String,  trim: true },
  address: { type: String,  trim: true },
});


const SubscriptionSchema = new Schema(
  {
    productName: { type: String, required: true, trim: true },
    productId: { type: String, required: true, trim: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    price: { type: Number, required: true },
    platform: { type: String, required: true },
    type: { type: String, required: true },
    userInfo: { type: userInfoSchema, required: true }, // Add userInfo as a sub-schema
    status: { type: String, default: "active" },
    subscriptionId: { type: String, trim: true },
    subscribedItemId: { type: String, trim: true },
  },
  { timestamps: true }
);

const Subscription = models.Subscription || model("Subscription", SubscriptionSchema);

export default Subscription;
