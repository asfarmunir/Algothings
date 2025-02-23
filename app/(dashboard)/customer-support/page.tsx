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
import FadeInSection from "@/lib/FadeInAnimation";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

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
          <div className="flex flex-row justify-center  items-start mt-5 mb-9">
            <h2 className="text-2xl lg:text-4xl font-bold font-gilroy leading-10  ">
              Customer Support
            </h2>
          </div>

          {/* Contact Form */}
          <FadeInSection>
            <div className="p-4 md:px-12 2xl:20 md:py-6 overflow-y-auto flex-col md:flex-row  flex items-center sm:items-start  justify-center gap-12 scrollbar-thin scrollbar-track-customcard scrollbar-thumb-customgreen">
              <div className=" w-full md:w-1/2 flex flex-col">
                <h2 className="text-3xl 2xl:text-4xl font-bold font-spaceGrotesk">
                  Get in touch
                </h2>
                <p className=" md:leading-loose 2xl:text-xl mt-4 mb-4 2xl:leading-loose font-light max-w-lg">
                  Have questions about our services, plans, or need technical
                  support? Our team is ready to assist you. Feel free to reach
                  out to us through any of the methods below.
                </p>
                <h2 className="text-3xl 2xl:text-4xl font-bold font-spaceGrotesk">
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
                <p className="  inline-flex items-center gap-3 2xl:text-lg  mb-2  font-light max-w-lg">
                  <Image
                    src="/images/phone.svg"
                    width={20}
                    height={20}
                    alt="email"
                  />
                  020 3666 0459
                </p>
                <p className="  inline-flex items-center gap-3 2xl:text-lg  mb-2  font-light max-w-lg">
                  <Image
                    src="/images/map.svg"
                    width={20}
                    height={20}
                    alt="email"
                  />
                  7 Gower Street, London WC1E 6HA​
                </p>
              </div>

              <div className="bg-customcard border border-[#FFFFFF33]  inner-glow  w-full md:w-1/2 rounded-xl p-6 2xl:p-8">
                <form>
                  <div className="flex flex-col md:flex-row gap-0 md:gap-5">
                    {/* Username or Email Field */}
                    <div className="mb-5 w-full">
                      <InputField
                        label="Firstname"
                        placeholder="name"
                        type="text"
                        icon={""}
                        labelClass="text-white 2xl:text-lg"
                        inputClass="bg-[#FFFFFF14] inner-glow2 placeholder:text-[#FFFFFF99] w-full py-[14px] text-[16px]"
                      />
                    </div>

                    {/* Subject Dropdown */}
                    <div className="mb-5 w-full">
                      <InputField
                        label="Lastname"
                        placeholder="name"
                        type="text"
                        icon={""}
                        labelClass="text-white 2xl:text-lg"
                        inputClass="bg-[#FFFFFF14] inner-glow2 placeholder:text-[#FFFFFF99] w-full py-[14px] text-[16px]"
                      />
                    </div>
                  </div>
                  <div className="mb-5 w-full">
                    <InputField
                      label="Email"
                      placeholder="email"
                      type="email"
                      icon={""}
                      labelClass="text-white 2xl:text-lg"
                      inputClass="bg-[#FFFFFF14] inner-glow2 placeholder:text-[#FFFFFF99] w-full py-[14px] text-[16px]"
                    />
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
                      className="bg-[#FFFFFF14] min-h-60 inner-glow2 focus:outline-none border border-[#FFFFFF0F] text-sm rounded-md block w-full p-2.5 dark:placeholder-[#FFFFFF99] dark:text-white"
                      placeholder="Enter your Message here..."
                    />
                  </div>

                  {/* File Upload Section */}
                  <div className="flex flex-col md:flex-row gap-5">
                    {/* Send Message Button */}
                    <div className="w-full">
                      <button className="bg-gradient-to-r inline-flex items-center justify-center gap-4 from-customgreen to-customblue text-black   px-8 py-3 w-full rounded-md">
                        Send Message
                        <FaArrowRight className="text-lg" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;

//  <div className="bg-customcard border border-[#FFFFFF33] w-full rounded-md p-5">
//    <form onSubmit={handleSubmit}>
//      <div className="flex flex-col md:flex-row gap-0 md:gap-5">
//        <div className="mb-5 w-full">
//          <InputField
//            label="Username or email"
//            placeholder="Username or email"
//            type="email"
//            icon={<FaRegUserCircle />}
//            labelClass="text-white"
//            inputClass="bg-[#FFFFFF14] placeholder:text-[#FFFFFF99] w-full py-[14px] text-[16px]"
//          />
//        </div>

//        <div className="mb-5 w-full">
//          <InputField
//            label="Subject"
//            placeholder="Enter Subject"
//            type="email"
//            icon={""}
//            labelClass="text-white"
//            inputClass="bg-[#FFFFFF14] placeholder:text-[#FFFFFF99] w-full py-[14px] text-[16px]"
//          />
//        </div>
//      </div>

//      <div className="mb-5">
//        <label
//          htmlFor="message"
//          className="block mb-2 text-sm font-normal tracking-wider text-white font-gilroy"
//        >
//          Message
//        </label>
//        <textarea
//          id="message"
//          rows={6}
//          className="bg-[#FFFFFF14] focus:outline-none border border-[#FFFFFF0F] text-sm rounded-md block w-full p-2.5 dark:placeholder-[#FFFFFF99] dark:text-white"
//          placeholder="Enter your Message here..."
//          value={message}
//          onChange={handleMessageChange}
//        />
//      </div>

//      {/* File Upload Section */}
//      <div className="flex flex-col md:flex-row gap-5">
//        <div className="flex items-center justify-center w-full">
//          <label
//            htmlFor="dropzone-file"
//            className="w-full border border-[#FFFFFF33] rounded-md cursor-pointer bg-[#FFFFFF05] py-3 px-2"
//          >
//            <div className="flex flex-row items-center justify-center gap-2">
//              <p className=" text-sm text-center">Upload Attachment</p>
//              <MdOutlineFileDownload className="text-2xl" />
//            </div>
//            <input
//              id="dropzone-file"
//              type="file"
//              className="hidden"
//              onChange={handleFileChange}
//            />
//          </label>
//        </div>

//        {/* Send Message Button */}
//        <div className="w-full">
//          <Button
//            label="Send Ticket"
//            type="submit"
//            className="bg-gradient-to-r from-customgreen to-customblue text-black   px-8 py-3 w-full rounded-md"
//          />
//        </div>
//      </div>
//    </form>
//  </div>;
