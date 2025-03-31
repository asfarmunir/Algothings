"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Sidebar from "@/components/shared/Sidebar";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import FadeInSection from "@/lib/FadeInAnimation";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";
import InputField from "@/components/ui/InputField";
import { FaRegUserCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Footer } from "@/components/shared/Footer";
import { DiscordCommunity } from "@/components/shared/Discord";
import axios from "axios";
import toast from "react-hot-toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

export default function AllProduct() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const response = await axios.post("/api/customer-support", formData);

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full pb-12 sm:pb-6 h-full">
      {/* Dashboard Navbar: Static and non-scrollable */}
      <Navbar />
      {/* Details Section: Scrollable */}
      <h2 className="text-4xl sm:text-6xl mx-auto pt-8 mb-4 2xl:text-7xl font-bold uppercase bg-gradient-to-r text-transparent  from-[#45F175] to-[#00C3CE] bg-clip-text">
        Contact Us
      </h2>
      <FadeInSection>
        <div className="p-4 md:px-12 2xl:px-32 md:py-6 overflow-y-auto flex-col md:flex-row  flex items-center sm:items-start  justify-center gap-12 scrollbar-thin scrollbar-track-customcard scrollbar-thumb-customgreen">
          <div className=" w-full md:w-1/2 flex flex-col">
            <h2 className="text-3xl 2xl:text-4xl font-bold font-spaceGrotesk">
              Get in touch
            </h2>
            <p className=" md:leading-loose 2xl:text-xl mt-4 mb-4 2xl:leading-loose font-light max-w-lg">
              Have questions about our services, plans, or need technical
              support? Our team is here to assist you. Feel free to reach out
              via email, and we’ll get back to you as soon as possible.
            </p>
            <h2 className="text-3xl mt-4 2xl:text-4xl font-bold font-spaceGrotesk">
              Email Support:
            </h2>
            <p className="  inline-flex items-center gap-3 2xl:text-lg mt-4 mb-2  font-light max-w-lg">
              <Image
                src="/images/email.svg"
                width={20}
                height={20}
                alt="email"
              />
              info@algosfield.com
            </p>
          </div>

          <div className="bg-customcard border border-[#FFFFFF33]  inner-glow  w-full md:w-1/2 rounded-xl p-6 2xl:p-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-0 md:gap-5">
                {/* First Name Field */}
                <div className="mb-5 w-full">
                  <InputField
                    label="First Name"
                    name="firstName"
                    placeholder="Enter your first name"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    icon={""}
                    labelClass="text-white 2xl:text-lg"
                    inputClass="bg-[#FFFFFF14] inner-glow2 placeholder:text-[#FFFFFF99] w-full py-[14px] text-[16px]"
                  />
                </div>

                {/* Last Name Field */}
                <div className="mb-5 w-full">
                  <InputField
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter your last name"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    icon={""}
                    labelClass="text-white 2xl:text-lg"
                    inputClass="bg-[#FFFFFF14] inner-glow2 placeholder:text-[#FFFFFF99] w-full py-[14px] text-[16px]"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-5 w-full">
                <InputField
                  label="Email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  icon={""}
                  labelClass="text-white 2xl:text-lg"
                  inputClass="bg-[#FFFFFF14] inner-glow2 placeholder:text-[#FFFFFF99] w-full py-[14px] text-[16px]"
                />
              </div>

              {/* Message Textarea */}
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm 2xl:text-lg font-normal tracking-wider text-white font-gilroy"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-[#FFFFFF14] min-h-60 inner-glow2 focus:outline-none border ${
                    errors.message ? "border-red-500" : "border-[#FFFFFF0F]"
                  } text-sm rounded-md block w-full p-2.5 dark:placeholder-[#FFFFFF99] dark:text-white`}
                  placeholder="Enter your Message here..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r inline-flex items-center justify-center gap-4 from-customgreen to-customblue text-black px-8 py-3 w-full rounded-md disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <FaArrowRight className="text-lg" />}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </FadeInSection>
      <DiscordCommunity />
      <Footer />
    </div>
  );
}
