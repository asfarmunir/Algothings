"use client";
import React, { useState } from "react";
import Sidebar from "@/components/shared/Sidebar";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import { MdOutlineFileDownload } from "react-icons/md";
import Button from "@/components/ui/Button"; // Importing the reusable Button
import Dropdown from "@/components/ui/Dropdown"; // Importing the reusable Dropdown
import InputField from "@/components/ui/InputField"; // Importing the reusable InputField
import useCustomerSupport from "@/hooks/useCustomerSupport";
import { FaRegUserCircle } from "react-icons/fa";

const CustomerSupport = () => {
  const {
    subject,
    message,
    file,
    selectedAccount,
    accountOption,
    subjectOption,
    handleSubjectSelect,
    handleMessageChange,
    handleFileChange,
    handleAccountSelect,
    handleSubmit,
  } = useCustomerSupport();

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
        <div className="flex-grow py-6 px-10 gradient-corners-main font-gilroy">
          <div className="flex flex-row justify-between items-start mb-5">
            <h2 className="text-2xl lg:text-4xl font-bold font-gilroy leading-10  w-2/3 md:w-1/2">
              Customer Support
            </h2>
          </div>

          {/* Contact Form */}
          <div className="bg-customcard border border-[#FFFFFF33] w-full rounded-md p-5">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-0 md:gap-5">
                {/* Username or Email Field */}
                <div className="mb-5 w-full">
                  <InputField
                    label="Username or email"
                    placeholder="Username or email"
                    type="email"
                    icon={<FaRegUserCircle />}
                    labelClass="text-white"
                    inputClass="bg-[#FFFFFF14] placeholder:text-[#FFFFFF99] w-full py-[14px] text-[16px]"
                  />
                </div>

                {/* Subject Dropdown */}
                <div className="mb-5 w-full">
                  <InputField
                    label="Subject"
                    placeholder="Enter Subject"
                    type="email"
                    icon={""}
                    labelClass="text-white"
                    inputClass="bg-[#FFFFFF14] placeholder:text-[#FFFFFF99] w-full py-[14px] text-[16px]"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-normal tracking-wider text-white font-gilroy"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="bg-[#FFFFFF14] focus:outline-none border border-[#FFFFFF0F] text-sm rounded-md block w-full p-2.5 dark:placeholder-[#FFFFFF99] dark:text-white"
                  placeholder="Enter your Message here..."
                  value={message}
                  onChange={handleMessageChange}
                />
              </div>

              {/* File Upload Section */}
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="w-full border border-[#FFFFFF33] rounded-md cursor-pointer bg-[#FFFFFF05] py-3 px-2"
                  >
                    <div className="flex flex-row items-center justify-center gap-2">
                      <p className=" text-sm text-center">Upload Attachment</p>
                      <MdOutlineFileDownload className="text-2xl" />
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>

                {/* Send Message Button */}
                <div className="w-full">
                  <Button
                    label="Send Ticket"
                    type="submit"
                    className="bg-gradient-to-r from-customgreen to-customblue text-black   px-8 py-3 w-full rounded-md"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
