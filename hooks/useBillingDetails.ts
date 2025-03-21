import { useState } from "react";

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
  const [formData, setFormData] = useState<BillingDetailsForm>({
    firstName: "Asfar",
    lastName: "Munir",
    email: "asfarma2815@gmail.com",
    phone: "2323232323",
    country: "pakistan",
    state: "islamabad",
    city: "islamabad",
    zip: "22222",
    address: "22 street",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: keyof BillingDetailsForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
        console.log(formData);
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
