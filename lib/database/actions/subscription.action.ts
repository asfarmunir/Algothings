"use server";
import Subscription from "../subscription.model";
import { connectToDatabase } from "..";

export const getUserSubscriptions = async (userId: string) => {
    try {
        
        await connectToDatabase();
        const subscriptions = await Subscription.find({ userId });
        
        return JSON.parse(JSON.stringify(subscriptions));

    } catch (error) {
        
        console.error("❌ Error fetching user subscriptions:", error);
        return null;
        
    }
    
    }
