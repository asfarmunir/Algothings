"use client";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/InputField";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { LuUserPlus } from "react-icons/lu";
import { LuCircleUserRound } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { GoLock } from "react-icons/go";
import { FaSquarePhone } from "react-icons/fa6";
import { flags } from "@/lib/constants";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import Dropdown from "@/components/ui/Dropdown";
import Checkbox from "@/components/ui/Checkbox";
import { DashboardLogin } from "@/components/ui/DashboardLogin";
import useRegisterForm from "@/hooks/useRegisterForm";
import { BeatLoader } from "react-spinners";
import codes from "country-calling-code";
import InputField from "@/components/ui/InputField";

export default function Register() {
  const {
    showPassword,
    togglePasswordVisibility,
    selectedCountry,
    handleSelectCountry,
    isChecked,
    handleCheckboxChange,
    formData,
    handleInputChange,
    handleSubmit,
    loading,
    error,
    success,
    countryCode,
    setCountryCode,
  } = useRegisterForm();

  return (
    <>
      <main className="px-4 md:px-10 py-5 gradient-corners h-screen lg:h-screen gradient-bg flex flex-row gap-8 ">
        {/* Left Section */}

        <div className="w-full lg:block hidden">
          <DashboardLogin error={error} success={success} />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-3/4 md:mx-6 lg:mx-20 flex justify-center items-center lg:items-start xl:items-start overflow-y-auto scrollbar-none">
          <div className="rounded-xl bg-customcard border border-[#FFFFFF00] px-6 2xl:px-8 py-10 md:py-6">
            <h1 className="text-[20px] md:text-[32px] font-bold mt-8 md:mt-0 mb-5">
              Create an account.
            </h1>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input
                  label="First Name"
                  icon={<LuUserPlus className="" />}
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  labelClass="text-white text-[16px]"
                  inputClass="bg-[#FFFFFF05] w-full py-3 px-4"
                />
                <Input
                  label="Last Name"
                  icon={<LuUserPlus />}
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  labelClass="text-white"
                  inputClass="bg-[#FFFFFF05] w-full py-3 px-4"
                />
              </div>

              <Input
                label="Username"
                icon={<LuCircleUserRound />}
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                labelClass="text-white"
                inputClass="bg-[#FFFFFF05] w-full py-3 px-4"
              />

              <Input
                label="Email"
                icon={<CiMail />}
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                labelClass="text-white"
                inputClass="bg-[#FFFFFF05] w-full py-3 px-4"
              />

              <div className="w-full">
                <label className="block text-sm mb-2">Mobile</label>
                <div className="w-full flex items-center gap-2">
                  {/* <Input
                    icon={<FaSquarePhone />}
                    placeholder="International Phone no."
                    type="number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    inputClass="bg-[#FFFFFF05] w-full py-3 px-4"
                    labelClass="text-white"
                  /> */}
                  <div className="flex px-3 items-center  gap-3 bg-[#FFFFFF05] w-full text-white placeholder:text-customgray text-[14px] py-1 rounded-md border border-[#FFFFFF0F] ">
                    <FaSquarePhone className="text-[1.1rem]" />
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="border-none  bg-transparent focus:ring-0 outline-offset-1
                         shadow  focus:border mr-0  rounded-lg focus:outline-none
                          px-2 leading-tight truncate w-16 md:w-24 
                          "
                    >
                      {codes.map((code, index) => (
                        <option
                          key={index}
                          className="text-black"
                          value={code.countryCodes[0]}
                        >
                          {code.isoCode2} +{code.countryCodes[0]}
                        </option>
                      ))}
                    </select>
                    <InputField
                      placeholder=" 456-9878"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      customClass="flex-1 "
                      inputClass="bg-[#FFFFFF05] w-full text-white placeholder:text-customgray text-[14px]  border-none bg-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="relative w-full">
                <Input
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  labelClass="text-white"
                  inputClass="bg-[#FFFFFF05] w-full py-3 px-4"
                  icon={<GoLock />}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-2/3 transform -translate-y-1/2"
                >
                  {showPassword ? <BiHide /> : <BiShow />}
                </button>
              </div>
              <div className="relative w-full">
                <Input
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  labelClass="text-white"
                  inputClass="bg-[#FFFFFF05] w-full py-3 px-4"
                  icon={<GoLock />}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-2/3 transform -translate-y-1/2"
                >
                  {showPassword ? <BiHide /> : <BiShow />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  checkboxClassName="bg-black"
                  labelClassName="text-xl text-green-700"
                />
                <p className="text-[14px] leading-4 text-white">
                  By creating an account, you agree to the{" "}
                  <a href="#" className="text-[#00FF7F] underline">
                    Terms of Service
                  </a>
                  . We'll occasionally send you account-related emails.
                </p>
              </div>

              <Button
                type="submit"
                className="w-full py-[12px] text-[16px] bg-gradient-to-r from-customgreen to-customblue text-black rounded-md"
                label={
                  loading ? <BeatLoader color="#000" size={6} /> : "Sign Up"
                }
              />

              <div className="flex items-center justify-between gap-2">
                <hr className="w-full h-px bg-[#FFFFFF33] border-0 " />
                <p>Or</p>
                <hr className="w-full h-px bg-[#FFFFFF33] border-0 " />
              </div>

              <div className="flex flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  className="bg-[#FFFFFF1A] flex items-center justify-center rounded-md w-[50px] h-[50px]"
                >
                  <FcGoogle className="text-3xl" />
                </button>
                <button
                  type="button"
                  className="bg-[#FFFFFF1A] flex items-center justify-center rounded-md w-[50px] h-[50px]"
                >
                  <FaFacebook className="text-2xl text-customgreen" />
                </button>
                {/* <button
                  type="button"
                  className="bg-[#FFFFFF1A] flex items-center justify-center rounded-md w-[50px] h-[50px]"
                >
                  <FaXTwitter className="text-2xl " />
                </button> */}
              </div>
              <p className="text-center text-[14px] text-white">
                Have an account?{" "}
                <a href="/login" className="text-[#00FF7F]">
                  Log in
                </a>
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
