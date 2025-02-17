"use client";
import React from "react";
import Button from "../ui/Button";
import FadeInSection from "@/lib/FadeInAnimation";
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";
import { BsDiscord } from "react-icons/bs";

export function DiscordCommunity() {
  const router = useRouter();
  return (
    <>
      <section id="contact-us" className="my-5 2xl:my-10">
        <FadeInSection>
          <div
            className="px-4 sm:px-8  py-12 mx-4 md:mx-12 lg:mx-[98px]  h-auto lg:h-[420px] rounded-3xl border border-[#FFFFFF33] flex justify-center items-center discord-border relative overflow-hidden"
            // style={{
            //   backgroundImage:
            //     "linear-gradient(rgba(0, 0, 0, 0.9), rgba(1, 10, 10, 0.9)), url(/images/discord-bg.png)",
            //   backgroundSize: "contain",
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            // }}
          >
            {/* Text container */}
            {/* <div style={{ zIndex: 1, position: "relative" }} className="">
              <h1 className="text-[30px] font-outfit md:text-[40px] lg:text-[60px] xl:text-[60px] md:leading-[80px] font-semibold text-center">
                Discord Our Community
              </h1>
              <p className="py-3 text-[16px] font-outfit text-white capitalize font-thin text-center">
                Talk with thousands of other like-minded individuals all looking
                to succeed.
              </p>
              <div className="flex justify-center">
                <Button
                  label="Join Our Discord"
                  className=" text-[16px] font-outfit md:text-[20px] discord-btn rounded-full py-[16px] px-[40px]"
                />
              </div>
            </div> */}
            <div style={{ zIndex: 1, position: "relative" }} className="">
              <h1 className="text-3xl 2xl:text-5xl  font-spaceGrotesk font-semibold  tracking-wide bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent h-16 ">
                Smarter Trading, Right in Your Inbox
              </h1>
              <p className="text-sm 2xl:text-base pt-2 font-light ">
                Stay in the loop with algo insights, updates, and strategies. No
                spam, just the good stuff.
              </p>

              <div className="inline-flex rounded-full w-full sm:w-3/4 px-1 py-1  md:min-w-80 items-center justify-between mt-6 border border-[#FFFFFF33] bg-[#03100C]">
                <input
                  type="email"
                  className="bg-transparent text-customlightgray px-4 w-full text-xs sm:text-sm focus:outline-none placeholder:text-customlightgray "
                  placeholder="Enter Your Email To Stay Ahead"
                />
                <button className="submit-btn flex gap-2 items-center text-xs sm:text-sm py-3  px-5 sm:px-8 rounded-full">
                  Submit <ArrowRight className="w-4 h-4" />{" "}
                </button>
              </div>
              <div className="mt-6 flex justify-center flex-row gap-6 items-center">
                <Button
                  label="Get Started"
                  onClick={() => router.push("/register")}
                  className="bg-gradient-to-r text-nowrap font-semibold py-[8px] px-[20px] md:px-[30px]  uppercase text-sm from-customgreen to-customblue text-black rounded-lg"
                />
                <button
                  onClick={() => router.push("/")}
                  className="flex flex-row gap-2 items-center uppercase text-nowrap p-0 text-sm"
                >
                  <BsDiscord className="text-lg" />
                  <span>Discord</span>
                </button>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
