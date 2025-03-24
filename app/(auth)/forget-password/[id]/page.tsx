"use client";

import Button from "@/components/ui/Button";
import { DashboardLogin } from "@/components/ui/DashboardLogin";
import InputField from "@/components/ui/InputField";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

interface props {
  params: {
    id: string;
  };
  searchParams: {
    token: string;
  };
}
export default function EmailVerification({
  params: { id },
  searchParams: { token },
}: props) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      setValidationError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.patch(
        `/api/auth/reset-password/${id}?token=${token}`,
        {
          password: password,
          confirmPassword: confirmPassword,
          token,
        }
      );

      if (response.status === 200) {
        toast.success("Password reset successfully");
        router.push("/login");
      }
    } catch (error) {
      toast.error("An error occurred during the password reset");
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
                    Reset Password
                  </h1>

                  <form onSubmit={handleSubmit} className="pt-4">
                    <p className=" text-start text-white  text-[14px] pb-2">
                      Please enter your new password
                    </p>
                    <InputField
                      placeholder="Enter new password"
                      name="password"
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      labelClass="text-white 2xl:text-lg"
                      inputClass="bg-[#FFFFFF14] px-4 w-full inner-glow2 placeholder:text-[#FFFFFF99] w-full py-[14px] text-[16px]"
                    />
                    <p className=" text-start text-white  text-[14px] pt-4 pb-2">
                      Confirm your password
                    </p>
                    <InputField
                      placeholder="verify password"
                      name="password"
                      type="text"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      labelClass="text-white 2xl:text-lg"
                      inputClass="bg-[#FFFFFF14] px-4  w-full inner-glow2 placeholder:text-[#FFFFFF99] w-full py-[14px] text-[16px]"
                    />
                    {validationError && (
                      <p className="text-red-500 text-sm">{validationError}</p>
                    )}
                    <Button
                      className="bg-gradient-to-r mt-4 font-semibold from-customgreen to-customblue text-black rounded-md my-2 py-[12px] text-[14px] w-full"
                      label="Update Password"
                      type="submit"
                    />
                    <p className="uppercase text-white  text-[12px] py-3">
                      You will be redirected to login page!
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
