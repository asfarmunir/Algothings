'use client';

import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import { DashboardLogin } from "@/components/ui/DashboardLogin";
import InputField from "@/components/ui/InputField";
import useGoogleAuth from "@/hooks/useGoogleAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GoogleAuth() {
  const {
    qrCode,
    secret,
    otp,
    verificationResult,
    generateQrCode,
   
    verifyOtp,
  } = useGoogleAuth();
  const [src, setSrc] = useState('jfkdfj');
  const router =useRouter();




  return (
    <>
      <main className="px-3 md:px-10 gradient-corners py-5 h-screen  flex flex-row gap-8 ">
      {/* Left Section */}
      <div className='w-full lg:block hidden'>
       <DashboardLogin />
       </div>


      {/* Right Section */}
      <div className='w-full  md:mx-6 lg:mx-20 flex flex-row justify-center items-center overflow-y-auto'>
        <div className="bg-customcard w-full lg:w-[584px] border border-[#FFFFFF33] p-10 rounded-lg shadow-md  max-w-md overflow-y-auto scrollbar-thin scrollbar-track-[#45F17533] scrollbar-thumb-customgreen">
          <div className="flex flex-col items-center">
            <Image src="/images/logo.svg" width={150} height={100} alt="logo image" />

            <div className="text-center py-4">
              <h1 className="text-[26px] font-semibold ">Google Authentication</h1>
              <p className="uppercase font-light text-[16px] py-3">
                Please scan the QR code with your <br /> authenticator app
              </p>

              <form>
                {!qrCode ? (
                  <button
                    type="button"
                    onClick={generateQrCode}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Generate QR Code
                  </button>
                ) : (
                  <div>
                    <img src={qrCode} alt="QR Code" className="mx-auto mb-4" />
                    <p className="text-gray-600">
                      Scan this QR Code using Google Authenticator.
                    </p>
                  </div>
                )}

                {secret && (
                  <div className="mt-4">
                    <button
                      type="button"
                    
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Generate OTP
                    </button>
                    {otp && <p className="mt-2 text-lg font-bold">Your OTP: {otp}</p>}
                  </div>
                )}

                {otp && (
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={verifyOtp}
                      className="px-4 py-4 bg-gradient-to-r from-customgreen to-customblue text-black"
                    >
                      Verify OTP
                    </button>
                    {verificationResult && (
                      <p className="mt-2 text-gray-800">{verificationResult}</p>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}