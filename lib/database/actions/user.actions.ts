"use server"

import { connectToDatabase } from ".."
import User from "../user.modal";
import bcrypt from "bcryptjs";
export const updateUser = async (updatedData: any) => {
    try {

        connectToDatabase();
        const user = await User.findOneAndUpdate
        ({ email: updatedData.email }, updatedData, { new: true });
        return JSON.parse(JSON.stringify(
            {status : "success", user: user}
        ));

        
    } catch (error) {

        console.log("🚀 ~ error updating user profile", error)
        
        return { error: "Failed to update user profile." };

    }
}

export const updatePassword = async (
  email: string,
  currentPassword: string,
  password: string,
) => {
  try {
    await connectToDatabase();
    const user = await User.findOne({ email });

    if (!user) {
      return { error: "User not found." };
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) {
      return { error: "Current password is incorrect." };
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    return JSON.parse(JSON.stringify({ status: "success", user }));
  } catch (error) {
    console.error("Error updating user password:", error);
    return { error: "Failed to update user password." };
  }
};