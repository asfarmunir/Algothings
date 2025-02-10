'use client';

import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import { DashboardLogin } from "@/components/ui/DashboardLogin";
import InputField from "@/components/ui/InputField";
import useEmailVerification from "@/hooks/useEmailVerification";
import Image from "next/image";
import { useState } from "react";

export default function EmailVerification() {
  const {
    isChecked,
    handleCheckboxChange,
    otp,
    handleOtpChange,
    verifyOtp,
    resendOtp,
  } = useEmailVerification();


  return (
    <>
     <main className="px-5 md:px-10 py-5 gradient-corners h-screen  flex flex-row  gap-8 ">
        {/* Left Section */}
        <div className='w-full lg:block hidden'>
       <DashboardLogin />
       </div>

        {/* Right Section */}

        <div className=" w-full flex flex-col items-center justify-center">
        <div className=" mx-4">
          <div className="w-full bg-customcard lg:w-[584px] border border-[#FFFFFF33] p-10 rounded-lg shadow-md  max-w-md overflow-y-auto ">
            <div className="flex flex-col items-center">
              <Image src="/images/logo.svg" width={140} height={100} alt="logo image" />

              <div className="text-center py-4">
                <h1 className="text-[24px] leading-[40px] font-semibold">Verify Your Email</h1>
                <p className="uppercase font-thin text-[18px] py-3">
                  Please verify your OTP to continue <br /> with 2FA setup
                </p>
                <form onSubmit={(e)=> {
                  e.preventDefault();
                  verifyOtp();
                }}>
                  <div className="flex flex-row gap-2">
                    {otp.map((digit, index) => (
                      <InputField
                      key={index}
                      id={`otp-${index}`}
                      inputClass="w-[50px] h-[50px] border border-[#FFFFFF0F] bg-[#FFFFFF05] text-center"
                      type="text"
                      value={digit}
                      maxLength={1}
                      onChange={(e) => handleOtpChange(e.target.value, index)}
                    />
                    ))}
                  </div>

                  {/* <div className="flex items-center gap-1 my-4">
                  <Checkbox
                  
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    checkboxClassName="bg-black"
                    labelClassName="text-lg text-blue-700"
                  />
                    <p className="text-sm text-gray-400">Remember Me</p>
                  </div> */}
                 <div className="my-4">
                 <Checkbox
                    label="Remember Me"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  checkboxClassName="bg-black"
                  labelClassName="text-[16px] text-white"
                />
                 </div>

                  <Button
                    className="bg-gradient-to-r from-customgreen to-customblue text-black rounded-md my-2 py-[12px] text-[12px] w-full"
                    label="Verify OTP"
                    type="submit"
                  />
                  <Button
                    className="bg-[#091612] text-white border border-[#FFFFFF0F] rounded-md w-full mt-2 py-[12px] text-[12px]"
                    label="Resend OTP"
                    onClick={resendOtp}
                  />
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
