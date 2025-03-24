"use client";

import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import { DashboardLogin } from "@/components/ui/DashboardLogin";
import InputField from "@/components/ui/InputField";
import useEmailVerification from "@/hooks/useEmailVerification";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function EmailVerification() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        // "https://app.vantagepicks.com/api/auth/reset-password",
        "/api/reset-password",
        {
          email,
        }
      );
      if (response.status === 200) {
        toast.success("Reset link has been sent to your email!", {
          icon: "📧",
        });
      }
    } catch (error) {
      toast.error("Error: User not found or issue sending email.");
    }
    setLoading(false);
  };

  return (
    <>
      <main className="px-5 md:px-10 py-5 gradient-corners h-screen  flex flex-row  gap-8 ">
        {/* Left Section */}
        <div className="w-full lg:block hidden">
          <DashboardLogin />
        </div>

        {/* Right Section */}

        <div className=" w-full flex flex-col items-center justify-center">
          <div className=" mx-4">
            <div className="w-full bg-customcard lg:w-[584px] 2xl:w-[650px] border border-[#FFFFFF33] p-10 rounded-lg shadow-md  max-w-md 2xl:max-w-xl overflow-y-auto ">
              <div className="flex flex-col items-center w-full ">
                <Image
                  src="/images/logo.svg"
                  width={140}
                  height={100}
                  alt="logo image"
                />

                <div className="text-center py-4 w-full px-10   ">
                  <h1 className="text-[24px] leading-[40px] font-semibold">
                    Forget Password
                  </h1>
                  <p className="uppercase text-white  text-[16px] py-4">
                    Please enter registered email
                  </p>
                  <form onSubmit={handleSubmit}>
                    <InputField
                      placeholder="Enter emain"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      labelClass="text-white 2xl:text-lg"
                      inputClass="bg-[#FFFFFF14] px-4 w-full inner-glow2 placeholder:text-[#FFFFFF99] w-full py-[14px] text-[16px]"
                    />

                    <Button
                      disabled={loading}
                      className="bg-gradient-to-r disabled:opacity-40 mt-4 from-customgreen to-customblue text-black rounded-md my-2 py-[12px] text-[14px] w-full"
                      label={loading ? "Sending Email..." : "Submit"}
                      type="submit"
                    />
                    <p className="uppercase text-white  text-[12px] py-4">
                      You will receive reset link on your registered email
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
