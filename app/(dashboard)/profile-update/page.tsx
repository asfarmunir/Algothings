"use client";

import React, { useState } from "react";
import Sidebar from "@/components/shared/Sidebar";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import { BsInfoCircle } from "react-icons/bs";
import {
  RiLockPasswordLine,
  RiUserReceivedLine,
  RiUserSharedLine,
} from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import {
  MdOutlineMailOutline,
  MdOutlineUploadFile,
  MdPassword,
} from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import InputField from "@/components/ui/InputField";
import Dropdown from "@/components/ui/Dropdown";
import ReactFlagsSelect from "react-flags-select";
import { LuUserPlus } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { TbCancel } from "react-icons/tb";
import Image from "next/image";
import useProfileUpdate from "@/hooks/useProfileUpdate";
import Table from "@/components/ui/Table";
import { invoicedata } from "@/lib/constants";
import codes from "country-calling-code";
import { useSession } from "next-auth/react";
import { updatePassword } from "@/lib/database/actions/user.actions";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
const tableTitle = [
  "Date",
  "Invoice Number",
  "Amount",
  "Product Name",
  // "Status",
  // "Cancellation",
  "Download Invoice",
];

const Profile: React.FC = () => {
  const session = useSession();
  const {
    profile,
    setProfile,
    updateProfile,
    loading,
    error,
    passwordData,
    setPasswordData,
  } = useProfileUpdate();
  const [activebtn, setActivebtn] = useState("personal");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDropdownChange = (value: string) => {
    setProfile((prev) => ({ ...prev, accountType: value }));
  };

  const handleCountryChange = (code: string) => {
    console.log("🚀 ~ handleCountryChange ~ code:", code);
    setProfile((prev) => ({ ...prev, country: code }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    //@ts-ignore
    setProfile((prev) => ({ ...prev, avatar: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile(profile);
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await updatePassword(
        profile.email,
        passwordData.currentPassword,
        passwordData.newPassword
      );
      if (res.error) {
        toast.error(res.error);
        return;
      }
      toast.success("Password updated successfully.");
      console.log("🚀 ~ handlePasswordSubmit ~ res:", res);
      setPasswordData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
      }));
    } catch (error) {
      toast.error("Failed to update password.");
    }
  };

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const showTooltip = () => setIsTooltipVisible(true);
  const hideTooltip = () => setIsTooltipVisible(false);

  const handleDropdownSelect = (value: string) => {
    console.log("Selected Account Type:", value);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col">
        {/* Navbar */}
        <DashboardNavbar />

        {/* Page Content */}
        <div className="flex-grow max-w-[100rem]  p-6 overflow-y-auto scrollbar-thin scrollbar-track-customcard scrollbar-thumb-customgreen">
          <div className="bg-customcard p-5 2xl:p-8 rounded-lg border border-[#FFFFFF33]">
            <div className="relative w-fit">
              <Image
                src="/images/profile.png"
                width={100}
                height={100}
                className="rounded-full bg-[#FFFFFF0A] 2xl:w-[120px] 2xl:h-[120px]"
                alt="Avatar"
              />
              <button className=" absolute -right-2 -bottom-2">
                <MdOutlineUploadFile className="text-4xl bg-[#ffffff75] rounded-full p-2" />
              </button>
            </div>
            <div className="flex flex-row justify-between">
              <div className="space-y-1 mt-4">
                <h3 className="text-md font-gilroy">Ali Riaz</h3>
                <p className="text-xs 2xl:text-sm tracking-wider">
                  aliriaz@gmail.com
                </p>
              </div>

              {/* <div
                className="relative"
                onMouseEnter={showTooltip}
                onMouseLeave={hideTooltip}
              >
                <button
                  type="button"
                  onMouseEnter={showTooltip}
                  onMouseLeave={hideTooltip}
                >
                  <BsInfoCircle className="bg-[#FFFFFF0F] text-3xl p-1 rounded-full" />
                </button>

                {isTooltipVisible && (
                  <div
                    id="tooltip-left"
                    role="tooltip"
                    className="absolute w-[260px] z-10 inline-block px-3 border border-[#FFFFFF1A] p-3 text-xs text-white bg-[#FFFFFF0F] rounded-lg shadow-sm opacity-100 tooltip "
                    style={{
                      left: "-900%",
                      top: "25%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    Tooltips display informative text when users hover over,
                    focus on, or tap an element.
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                )}
              </div> */}
            </div>

            <hr className="my-3 border-[#FFFFFF1A]" />

            <div>
              <div className="flex gap-3 py-2">
                <button
                  className={
                    activebtn === "personal"
                      ? "bg-[#FFFFFF33] rounded-full py-1 px-5"
                      : "py-1 px-4"
                  }
                  onClick={() => setActivebtn("personal")}
                >
                  Personal Info
                </button>
                <button
                  className={
                    activebtn === "billing"
                      ? "bg-[#FFFFFF33] rounded-full py-1 px-5"
                      : "py-1 px-3"
                  }
                  onClick={() => setActivebtn("billing")}
                >
                  Billing History
                </button>
                <button
                  className={
                    activebtn === "billingDetails"
                      ? "bg-[#FFFFFF33] rounded-full py-1 px-5"
                      : "py-1 px-3"
                  }
                  onClick={() => setActivebtn("billingDetails")}
                >
                  Billing Details
                </button>
                <button
                  className={
                    activebtn === "subscriptions"
                      ? "bg-[#FFFFFF33] rounded-full py-1 px-5"
                      : "py-1 px-3"
                  }
                  onClick={() => setActivebtn("subscriptions")}
                >
                  Active Subscriptions
                </button>
              </div>

              {activebtn === "personal" && (
                <div className="flex justify-center items-center w-full">
                  {session.status === "authenticated" && (
                    <div className="py-4 space-y-4 w-full">
                      <form
                        action=""
                        className="space-y-4"
                        onSubmit={handleSubmit}
                      >
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                          {/* First Name Field */}
                          <InputField
                            required
                            label="First Name"
                            placeholder="First Name"
                            name="firstName"
                            icon={<LuUserPlus />}
                            value={profile.firstName}
                            onChange={handleInputChange}
                            customClass="w-full"
                            labelClass="text-white"
                            inputClass="bg-[#FFFFFF05] w-full py-3 text-white placeholder:text-customgray text-[14[px] border border-[#FFFFFF0F]"
                          />

                          {/* Last Name Field */}
                          <InputField
                            required
                            label="Last Name"
                            placeholder="Last Name"
                            name="lastName"
                            icon={<LuUserPlus />}
                            value={profile.lastName}
                            onChange={handleInputChange}
                            labelClass="text-white"
                            customClass="w-full"
                            inputClass="bg-[#FFFFFF05] w-full text-white placeholder:text-customgray text-[14px] py-3 border border-[#FFFFFF0F]"
                          />
                        </div>

                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                          {/* Username Field */}
                          <InputField
                            required
                            label="Username"
                            placeholder="Username"
                            name="username"
                            icon={<FaRegUserCircle />}
                            value={profile.username}
                            onChange={handleInputChange}
                            labelClass="text-white"
                            customClass="w-full"
                            inputClass="bg-[#FFFFFF05] w-full text-white placeholder:text-customgray text-[14px] py-3 border border-[#FFFFFF0F]"
                          />

                          {/* Phone Number Field */}
                          <div className="w-full">
                            <label className="font-gilroy font-light block mb-1 text-sm text-white">
                              Phone Number
                            </label>
                            {/* <div className="flex flex-row">
                        <ReactFlagsSelect
                          selected={profile.country}
                          onSelect={handleCountryChange}
                          countries={["GB", "US", "CA", "IN", "PK"]}
                          customLabels={{ GB: "", US: "", CA: "", IN: "91" }}
                          showSelectedLabel={false}
                          showOptionLabel={false}
                          className="bg-[#FFFFFF05]"
                        />
                        <InputField
                          required
                          placeholder="+44 (123) 456-9878"
                          name="phoneNumber"
                          value={profile.phoneNumber}
                          onChange={handleInputChange}
                          customClass="flex-1 px-2"
                          inputClass="bg-[#FFFFFF05] w-full text-white placeholder:text-customgray text-[14px] py-3 border border-[#FFFFFF0F]"
                        />
                      </div> */}
                            <div className="flex items-center  gap-3 bg-[#FFFFFF05] w-full text-white placeholder:text-customgray text-[14px] py-1 rounded-md border border-[#FFFFFF0F] ">
                              {/* <select
                              // value={countryCode}
                              // onChange={(e) => setCountryCode(e.target.value)}
                              className="border-none  bg-transparent focus:ring-1 outline-offset-1
                         shadow  focus:border mr-0  rounded-lg
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
                            </select> */}
                              <InputField
                                required
                                placeholder=" 456-9878"
                                name="phoneNumber"
                                value={profile.phoneNumber}
                                onChange={handleInputChange}
                                customClass="flex-1 px-2"
                                inputClass="bg-[#FFFFFF05] w-full text-white placeholder:text-customgray text-[14px]  border-none bg-transparent"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:pr-4">
                          {/* Email Field */}
                          <InputField
                            required
                            label="Email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            icon={<CiMail />}
                            disabled
                            value={profile.email}
                            onChange={handleInputChange}
                            labelClass="text-white"
                            customClass="w-full"
                            inputClass="bg-[#FFFFFF05] w-full sm:w-1/2 text-white placeholder:text-customgray text-[14px] py-3 border border-[#FFFFFF0F]"
                          />

                          {/* Account Type Dropdown */}
                          {/* <div className="w-full pt-1">
                      <label
                        htmlFor="accountType"
                        className="font-gilroy font-light block mb-1 text-sm text-white"
                      >
                        Account Type
                      </label>
                      <Dropdown
                        options={["Regular", "Premium", "Admin"]}
                        onSelect={handleDropdownChange}
                        placeholder="Select Account Type"
                        className="bg-[#FFFFFF05] py-2 w-full text-white placeholder:text-customgray text-[14px] py-3 border border-[#FFFFFF0F]"
                        dropdownClass="w-full"
                        value={profile.accountType}
                      />
                    </div> */}
                        </div>

                        <div className="flex flex-row mt-5 pb-4 md:mt-0 justify-center md:justify-end gap-2">
                          <button
                            type="button"
                            className="flex flex-row w-full md:w-fit font-semibold items-center justify-center gap-2 md:px-5 py-2.5 text-[14px] bg-transparent border border-white rounded-md"
                          >
                            Cancel <RxCross2 className="text-lg" />
                          </button>
                          <button
                            disabled={loading}
                            type="submit"
                            className="flex bg-gradient-to-r  w-full md:w-fit font-semibold from-customgreen to-customblue text-black flex-row items-center justify-center gap-2 md:px-8 py-2.5 text-[14px] bg-gradient-custom rounded-md"
                          >
                            Save Changes{" "}
                            <TiTick className="font-light text-lg" />
                          </button>
                        </div>
                      </form>

                      <hr className="border border-[#FFFFFF1A]  my-4 " />

                      <div>
                        <h3 className="font-gilroy font-medium text-xl 2xl:text-2xl pt-4">
                          Update Password
                        </h3>
                        <p className="text-customlight text-sm 2xl:text-base py-2">
                          Here you can update your password if you have lost or
                          forgotten your current one.
                        </p>
                        <form onSubmit={handlePasswordSubmit}>
                          <div className="flex flex-col  py-4 gap-4 ">
                            <InputField
                              required
                              label="Current Password"
                              type="text"
                              placeholder="Current Password"
                              name="currentPassword"
                              icon={<RiLockPasswordLine />}
                              value={passwordData.currentPassword}
                              onChange={handlePasswordChange}
                              labelClass="text-white"
                              customClass="w-full"
                              inputClass="bg-[#FFFFFF05] w-full sm:w-1/2 text-white placeholder:text-customgray text-[14px] py-3 border border-[#FFFFFF0F]"
                            />

                            <InputField
                              required
                              label="New Password"
                              type="text"
                              placeholder="New Password"
                              name="newPassword"
                              icon={<RiLockPasswordLine />}
                              value={passwordData.newPassword}
                              onChange={handlePasswordChange}
                              labelClass="text-white"
                              inputClass="bg-[#FFFFFF05] w-full sm:w-1/2 text-white placeholder:text-customgray text-[14px] py-3 border border-[#FFFFFF0F]"
                            />

                            {/* <div>
                        <Image
                          src="/images/profile.png"
                          className=" bg-[#FFFFFF0A] rounded-full"
                          width={80}
                          height={80}
                          alt="avatar"
                        />
                      </div>

                      <div className="flex items-center justify-center">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-36 bg-[#FFFFFF0F] border-2 border-[#FFFFFF33] border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:hover:border-gray-500"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6 px-5">
                            <MdOutlineUploadFile className="text-4xl bg-[#FFFFFF0F] rounded-full p-2" />
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-gilroy">
                              <span className="font-semibold text-white">
                                Click here{" "}
                              </span>
                              to upload your file or drag.
                            </p>
                            <p className="text-xs text-white">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </div>
                          <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                      </div> */}
                          </div>

                          <div className="flex flex-row mt-5 md:mt-0 justify-center md:justify-end gap-2">
                            <button
                              disabled={loading}
                              type="submit"
                              className="flex bg-gradient-to-r  w-full md:w-fit font-semibold from-customgreen to-customblue text-black flex-row items-center justify-center gap-2 md:px-8 py-2.5 text-[14px] bg-gradient-custom rounded-md"
                            >
                              Update Password{" "}
                              <TiTick className="font-light text-lg" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                  {session.status === "loading" && (
                    <div className="flex items-center flex-col animate-pulse gap-4 justify-center h-40">
                      <Image
                        alt="heeh"
                        src="/logo.svg"
                        width={50}
                        height={50}
                        className=""
                      />
                      <p className="text-customgreen font-bold tracking-wide capitalize">
                        Getting things ready
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activebtn === "billing" && (
                <div className="overflow-x-auto">
                  <Table columns={tableTitle} data={invoicedata} />
                </div>
              )}

              {activebtn === "subscriptions" && (
                <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mt-4 p-2 2xl:p-4">
                  {Array.from({ length: 1 }).map((_, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-[#45F1751A] to-[#00C3CE1A] p-[20px] rounded-[20px]"
                    >
                      <div className="flex flex-row items-center justify-between gap-1">
                        <div className="flex flex-row items-center gap-3">
                          <Image
                            src="/images/logo1.svg"
                            width={30}
                            height={20}
                            className="
                                               2xl:w-[40px] 2xl:h-[40px]
                                              "
                            alt="Logo"
                          />

                          <h1 className="text-sm md:text-sm uppercase font-semibold">
                            Trend Hunter
                          </h1>
                          <h3 className="bg-gradient-to-r from-[#45F175] to-[#00C3CE]  text-black px-6 py-1 rounded-full">
                            Active
                          </h3>
                        </div>
                        <button className="bg-red-700/40  bg-clip-border p-[1px] text-red-500 px-6 py-1 rounded-full inline-flex items-center gap-2 ">
                          <TbCancel />
                          Unsubscribe
                        </button>
                      </div>
                      <div className="flex flex-row gap-3 mt-8">
                        <p className="w-full bg-[#FFFFFF1A] py-3 text-center rounded-full text-sm">
                          <span className="text-[#FFFFFF80]">Start Date:</span>{" "}
                          00/00/0000
                        </p>
                        <p className="w-full bg-[#FFFFFF1A] py-3 rounded-full text-center text-sm">
                          <span className="text-[#FFFFFF80]">End Date:</span>{" "}
                          00/00/0000
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {activebtn === "billingDetails" && (
                <div className="">
                  <h3 className="font-gilroy font-medium text-xl 2xl:text-2xl pt-6">
                    Billing Details
                  </h3>
                  <p className="text-customlight text-sm 2xl:text-base py-2">
                    Update your billing address and other related details here.
                  </p>

                  <form className="space-y-4 pt-6">
                    {/* Billing Address Field */}
                    <InputField
                      required
                      label="Card Holder Name"
                      placeholder="Enter your card holder name"
                      name="billingAddress"
                      icon={<RiUserSharedLine />}
                      // value={profile.billingAddress || ""}
                      // onChange={handleInputChange}
                      labelClass="text-white"
                      customClass="w-full"
                      inputClass="bg-[#FFFFFF05] w-full text-white placeholder:text-customgray text-[14px] py-3 border border-[#FFFFFF0F]"
                    />

                    {/* City Field */}
                    <InputField
                      required
                      label="Card Number"
                      placeholder="Enter your card number"
                      name="city"
                      icon={<RiUserSharedLine />}
                      // value={profile.city || ""}
                      // onChange={handleInputChange}
                      labelClass="text-white"
                      customClass="w-full"
                      inputClass="bg-[#FFFFFF05] w-full text-white placeholder:text-customgray text-[14px] py-3 border border-[#FFFFFF0F]"
                    />

                    {/* State Field */}
                    <InputField
                      required
                      label="Card Expiry Date"
                      placeholder="Enter your card expiry date"
                      name="state"
                      icon={<RiUserSharedLine />}
                      // value={profile.state || ""}
                      // onChange={handleInputChange}
                      labelClass="text-white"
                      customClass="w-full"
                      inputClass="bg-[#FFFFFF05] w-full text-white placeholder:text-customgray text-[14px] py-3 border border-[#FFFFFF0F]"
                    />

                    {/* Postal Code Field */}
                    <InputField
                      required
                      label="Card CVV"
                      placeholder="Enter your card CVV"
                      name="postalCode"
                      icon={<RiUserSharedLine />}
                      // value={profile.postalCode || ""}
                      // onChange={handleInputChange}
                      labelClass="text-white"
                      customClass="w-full"
                      inputClass="bg-[#FFFFFF05] w-full text-white placeholder:text-customgray text-[14px] py-3 border border-[#FFFFFF0F]"
                    />

                    {/* Country Field */}
                    {/* <div className="w-full">
                      <label className="font-gilroy font-light block mb-1 text-sm text-white">
                        Country
                      </label>
                     
                      <PhoneInput
                        placeholder="Enter phone number"
                        // value={phoneNumber}
                        onChange={(value) => console.log(value)}
                        defaultCountry="US"
                        className="bg-[#FFFFFF05] w-full text-white placeholder:text-customgray text-[14px] py-3 border border-[#FFFFFF0F]"
                        inputClassName="bg-transparent text-white placeholder:text-customgray outline-none"
                        countrySelectClassName="bg-transparent text-white"
                        dropdownClassName="bg-[#FFFFFF05] text-white"
                      />
                    </div> */}

                    {/* Save Changes Button */}
                    <div className="flex flex-row mt-5 pb-4 md:mt-0 justify-center md:justify-end gap-2">
                      <button
                        type="button"
                        className="flex flex-row w-full md:w-fit font-semibold items-center justify-center gap-2 md:px-5 py-2.5 text-[14px] bg-transparent border border-white rounded-md"
                      >
                        Cancel <RxCross2 className="text-lg" />
                      </button>
                      <button
                        disabled={loading}
                        type="submit"
                        className="flex bg-gradient-to-r  w-full md:w-fit font-semibold from-customgreen to-customblue text-black flex-row items-center justify-center gap-2 md:px-8 py-2.5 text-[14px] bg-gradient-custom rounded-md"
                      >
                        Save Changes <TiTick className="font-light text-lg" />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
