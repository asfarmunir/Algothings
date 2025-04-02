"use server"

import { ProfileUpdated } from "@/lib/mailgun";
import { connectToDatabase } from ".."
import User from "../user.modal";
import bcrypt from "bcryptjs";

export const updateUser = async (updatedData: any) => {
  try {
    connectToDatabase();
    
    // Get the current user data first
    const currentUser = await User.findOne({ email: updatedData.email });
    if (!currentUser) {
      throw new Error('User not found');
    }

    // Update the user
    const updatedUser = await User.findOneAndUpdate(
      { email: updatedData.email }, 
      updatedData, 
      { new: true }
    );

    // Get the changes description
    const changesDescription = getProfileChanges(currentUser, updatedData);
    
    // Send profile updated email with changes
    await ProfileUpdated(
      updatedUser.email, 
      updatedUser.firstName,
      changesDescription
    );
    
    return JSON.parse(JSON.stringify(
      { status: "success", user: updatedUser }
    ));
  } catch (error) {
    console.error("Error updating user profile", error);
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


function getProfileChanges(oldUser: any, newData: any): string {
  const changes: string[] = [];
  
  // Compare each field
  const fieldsToCheck = ['firstName', 'lastName', 'username', 'email', 'country'];
  
  fieldsToCheck.forEach(field => {
    if (oldUser[field] !== newData[field]) {
      changes.push(`${field} changed from "${oldUser[field]}" to "${newData[field]}"`);
    }
  });

  return changes.length > 0 
    ? changes.join('\n• ')
    : 'No significant fields changed';
}