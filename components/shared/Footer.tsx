import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaInstagram, FaDiscord, FaXTwitter } from "react-icons/fa6";
import { About_us, quick_links } from "@/lib/constants";
import Link from "next/link";
import FadeInSection from "@/lib/FadeInAnimation";

export const Footer = () => {
  return (
    <>
      <FadeInSection>
        <div>
          <div className="flex  items-center flex-row gap-4 p-8 mt-6">
            <div className="w-full md:block hidden md:w-1/4  lg:flex items-center justify-center">
              <div className="">
                <Image
                  src="/images/logo.svg"
                  width={140}
                  height={40}
                  alt="logo image"
                />
                <div className="text-start">
                  <p className="text-sm 2xl:text-base pt-4 font-thin ">
                    Monday-Fridat 24h
                  </p>

                  <p className="py-4 text-sm 2xl:text-base font-thin ">
                    support@syndicatefunded.com
                  </p>
                  <p className="py-2 text-sm 2xl:text-base font-thin ">
                    The Meydan Hotel, Grandstand, 6th floor, Meydan Road, Nad Al
                    Sheba, Dubai, U.A.E
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-1/2">
              <h1 className="text-2xl 2xl:text-4xl font-bold tracking-wider ">
                Join{" "}
                <span className="bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                  THE ALGOS FIELD
                </span>{" "}
                <br /> NewsLetter
              </h1>

              <div className="inline-flex rounded-full pl-3 pr-2 md:min-w-80 items-center justify-between py-2 mt-5 border border-[#FFFFFF33] bg-[#03100C]">
                <input
                  type="email"
                  className="bg-transparent text-customlightgray text-sm focus:outline-none placeholder:text-customlightgray "
                  placeholder="Enter Your Email"
                />
                <button className="submit-btn flex gap-2 items-center text-sm py-2 px-5 rounded-full">
                  Submit <ArrowRight className="w-4 h-4" />{" "}
                </button>
              </div>

              <div className="flex  flex-row gap-2 items-center justify-center my-4">
                <FaInstagram className="icon-inner p-2 w-8 h-8 cursor-pointer rounded-full" />
                <FaDiscord className="icon-inner p-2 w-8 h-8 rounded-full cursor-pointer" />
                <FaXTwitter className="icon-inner p-2 w-8 h-8 rounded-full cursor-pointer" />
              </div>
            </div>
            <div className=" md:block hidden md:w-1/4 ">
              <div className="flex flex-row gap-6 justify-between">
                <div className="">
                  <h1 className="text-lg font-semibold text-start">
                    Quick Links
                  </h1>
                  {quick_links.map((items) => (
                    <div className="mt-2 text-start" key={items.href}>
                      <Link href={items.href} className="text-sm  font-light">
                        {items.label}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="col-span-1">
                  <h1 className="text-lg text-start font-semibold">About Us</h1>
                  {About_us.map((items) => (
                    <div className="mt-2 text-start" key={items.href}>
                      <Link href={items.href} className="text-sm font-light ">
                        {items.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pb-5">
            <p className="text-sm 2xl:text-base">
              <span className="font-thin">Copyright</span> © THe ALGOS FIELD
            </p>
          </div>
        </div>
      </FadeInSection>
    </>
  );
};
