"use client";

import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import { DashboardLogin } from "@/components/ui/DashboardLogin";
import InputField from "@/components/ui/InputField";
import useEmailVerification from "@/hooks/useEmailVerification";
import Image from "next/image";
import { useState } from "react";

export default function EmailVerification() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
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
