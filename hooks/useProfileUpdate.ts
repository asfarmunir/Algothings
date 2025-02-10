// hooks/useProfileUpdate.ts
import { useState, useEffect } from "react";
import axios from "axios";

const useProfileUpdate = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    accountType: "",
    country: "GB",
    avatar: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    setLoading(true);
    try {
      const formData = new FormData();
      for (const key in updatedData) {
        formData.append(key, updatedData[key as keyof typeof profile] as any);
      }
       
       console.log(formData);

      await axios.put("/api/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (err) {
      setError("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return { profile, setProfile, updateProfile, loading, error };
};

export default useProfileUpdate;
