// hooks/useProfileUpdate.ts
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { updateUser } from "@/lib/database/actions/user.actions";
import toast from "react-hot-toast";

const useProfileUpdate = () => {
  const session = useSession();
  const [profile, setProfile] = useState({
    firstName: session?.data?.user?.firstName || "",
    lastName:   session?.data?.user?.lastName || "",
    username:  session?.data?.user?.username || "",
    email: session?.data?.user?.email || "",
    phoneNumber:  session?.data?.user?.mobile || "",
    accountType: "",
    country:  session?.data?.user?.country || "",
    avatar: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
    const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    });
  const fetchProfile = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/profile"); // Replace with your API endpoint
      setProfile(response.data);
    } catch (err) {
      setError("Failed to fetch profile data.");
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updatedData: typeof profile) => {
    console.log("🚀 ~ updateProfile ~ updatedData:", updatedData)
    try {
      toast.loading("Updating profile...");
      await updateUser(updatedData);
      toast.dismiss();
      toast.success("Profile updated successfully.");

    } catch (error) {
      toast.dismiss();
      toast.error("Failed to update profile.");
      console.log("🚀 ~ error updating user profile", error)
      return { error: "Failed to update user profile." };
      
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return { profile, setProfile, updateProfile, loading, error, passwordData, setPasswordData };
};

export default useProfileUpdate;
