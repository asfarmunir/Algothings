"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Sidebar from "@/components/shared/Sidebar";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import FadeInSection from "@/lib/FadeInAnimation";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";
import InputField from "@/components/ui/InputField";
import { FaRegUserCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Footer } from "@/components/shared/Footer";
import { DiscordCommunity } from "@/components/shared/Discord";
export default function AllProduct() {
  const [activeButton, setActiveButton] = useState("INDIVIDUALS");

  return (
    <div className="flex flex-col w-full pb-12 sm:pb-6 h-full">
      {/* Dashboard Navbar: Static and non-scrollable */}
      <Navbar />
      {/* Details Section: Scrollable */}
      <h2 className="text-4xl sm:text-6xl mx-auto pt-8 mb-7 2xl:mb-10 2xl:text-7xl font-bold uppercase bg-gradient-to-r text-transparent  from-[#45F175] to-[#00C3CE] bg-clip-text">
        Contact Us
      </h2>
      <FadeInSection>
        <div className="p-4 md:px-12 2xl:px-32 md:py-6 overflow-y-auto flex-col md:flex-row  flex items-center sm:items-start  justify-center gap-12 scrollbar-thin scrollbar-track-customcard scrollbar-thumb-customgreen">
          <div className=" w-full md:w-1/2 flex flex-col">
            <h2 className="text-3xl 2xl:text-4xl font-bold font-spaceGrotesk">
              Get in touch
            </h2>
            <p className=" md:leading-loose 2xl:text-xl mt-4 mb-4 2xl:leading-loose font-light max-w-lg">
              Have questions about our services, plans, or need technical
              support? Our team is ready to assist you. Feel free to reach out
              to us through any of the methods below.
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
              <Image src="/images/map.svg" width={20} height={20} alt="email" />
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
      <DiscordCommunity />
      <Footer />
    </div>
  );
}
