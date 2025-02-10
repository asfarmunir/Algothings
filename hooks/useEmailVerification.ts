'use client';
import { useState } from "react";

export default function useEmailVerification() {
  const [isChecked, setIsChecked] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  const handleOtpChange = (value: string, index: number) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      // Automatically move to the next input field
      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
        nextInput?.focus();
      }
    }
  };

  const verifyOtp = () => {
    // Simulate OTP verification logic
    const otpString = otp.join("");
    if (otpString === "123456") {
      console.log("OTP Verified Successfully");
    } else {
      console.log("Invalid OTP");
    }
  };

  const resendOtp = () => {
    // Simulate OTP resend logic
    console.log("OTP Resent");
  };

  return {
    isChecked,
    handleCheckboxChange,
    otp,
    handleOtpChange,
    verifyOtp,
    resendOtp,
  };
}
