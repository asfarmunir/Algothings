import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";

interface BillingDetailsForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  zip: string;
  address: string;
}

const useBillingDetails = () => {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState<BillingDetailsForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isInitialized = useRef(false);

  // Initialize formData with session data when session is available
  useEffect(() => {
    if (status === "authenticated" && session?.user && !isInitialized.current) {
      setFormData({
        firstName: session.user.firstName || "",
        lastName: session.user.lastName || "",
        email: session.user.email || "",
        phone: session.user.mobile || "",
        country: session.user.country || "",
        state: "",
        city: "",
        zip: "",
        address: "",
      });
      isInitialized.current = true;
    }
  }, [session, status]);

  const handleInputChange = (field: keyof BillingDetailsForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      console.log("Submitting formData:", formData);
      const response = await fetch("/api/billing-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit billing details.");
      }

      const data = await response.json();
      console.log("Billing details submitted:", data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    error,
    handleInputChange,
    handleSubmit,
  };
};

export default useBillingDetails;