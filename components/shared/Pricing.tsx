"use client";
import { Intermediate, master } from "@/lib/constants";
import React, { useState } from "react";
import Image from "next/image";
import { Plans } from "./plans";
import Button from "../ui/Button";
import { RiCheckboxCircleFill } from "react-icons/ri";
import CardAnimation from "@/lib/CardAnimations";
import FadeInSection from "@/lib/FadeInAnimation";
import Checkbox from "../ui/Checkbox";
import { BsInfoCircle } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
export default function Pricing() {
  const [activePlan, setActivePlan] = useState("Annual");
  const pathname = usePathname();
  const handlePlanChange = (plan: string) => {
    setActivePlan(plan);
  };
  const router = useRouter();
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const showTooltip = () => setIsTooltipVisible(true);
  const hideTooltip = () => setIsTooltipVisible(false);

  return (
    <>
      <section id="price">
        <div className="mb-4 mt-12 flex flex-col items-center">
          <div className="inline-flex   flex-row gap-3 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#45F17533] to-[#00C3CE33]">
            <Image
              src="/images/welcomestar.svg"
              width={20}
              height={30}
              alt="welcome star"
            />
            <p className="text-sm 2xl:text-[16px] uppercase gap-4 bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent">
              Pricing
            </p>
          </div>

          {pathname === "/subscription" && (
            <div className="hidden xl:flex items-start justify-center w-full py-12 gap-1 ">
              <div className="flex flex-col items-center ">
                <div className="w-12 2xl:w-16 h-12 2xl:h-16  mb-4 rounded-full bg-gradient-to-l flex items-center justify-center from-[#00C88C] to-[#0C7C33]">
                  <div className="w-6 2xl:w-8 h-6 2xl:h-8 bg-black rounded-full"></div>
                </div>
                <h2 className="text-lg font-bold text-white">
                  Choose Your Plan{" "}
                </h2>
                {/* <p className="text-[14px] text-customlightgray">$10,000</p> */}
              </div>
              <div className="w-28 2xl:w-48 h-1 mt-5 2xl:mt-8 rounded-full bg-gradient-to-l from-[#00C88C] to-[#0C7C33]"></div>
              <div className="flex flex-col items-center ">
                <div className="w-12 2xl:w-16 h-12 2xl:h-16  mb-4 rounded-full flex items-center justify-center">
                  <div className="w-6 2xl:w-8 h-6 2xl:h-8  bg-gradient-to-l from-[#00C88C] to-[#0C7C33] rounded-full"></div>
                </div>
                <h2 className="text-lg text-center font-bold text-white">
                  Choose Your Strategy
                </h2>
                {/* <p className="text-[14px] text-customlightgray">Volumetrica</p> */}
              </div>
              <div className="w-28 2xl:w-48 h-1 mt-5 2xl:mt-8 rounded-full bg-gradient-to-l from-[#00C88C] to-[#0C7C33]"></div>
              <div className="flex flex-col items-center ">
                <div className="w-12 2xl:w-16 h-12 2xl:h-16  mb-4 rounded-full flex items-center justify-center">
                  <div className="w-6 2xl:w-8 h-6 2xl:h-8  bg-gradient-to-l from-[#00C88C] to-[#0C7C33] rounded-full"></div>
                </div>
                <h2 className="text-lg font-bold text-white">
                  Billing Details
                </h2>
                {/* <p className="text-[14px] text-customlightgray">Not Signed</p> */}
              </div>
              <div className="w-28 2xl:w-48 h-1 mt-5 2xl:mt-8 rounded-full bg-gradient-to-l from-[#00C88C] to-[#0C7C33]"></div>
              <div className="flex flex-col items-center ">
                <div className="w-12 2xl:w-16 h-12 2xl:h-16  mb-4 rounded-full flex items-center justify-center">
                  <div className="w-6 2xl:w-8 h-6 2xl:h-8  bg-gradient-to-l from-[#00C88C] to-[#0C7C33] rounded-full"></div>
                </div>
                <h2 className="text-lg font-bold text-white">Payment</h2>
                {/* <p className="text-[14px] text-customlightgray">
                  Payment Details
                </p> */}
              </div>
            </div>
          )}

          <h1 className="py-1 px-2 text-6 text-[40px] md:text-[44px] lexend  leading-[64px] mb-3.5 mt-6">
            Choose the
            <span className="bg-gradient-to-r px-1.5 from-customgreen to-customblue bg-clip-text text-transparent">
              Perfect Plan
            </span>
            for Your Need
          </h1>
          <p className="text-customlight max-w-4xl px-4 text-sm md:text-base 2xl:text-lg text-center mb-12">
            Explore our flexible pricing options designed to cater to every
            requirement. Whether you're just getting started or looking to
            expand, we've got a plan that fits your needs.
          </p>

          <div className="px-6 md:px-8">
            <FadeInSection>
              <div className="flex flex-row gap-3 lexend items-center justify-center my-3">
                <Button
                  label="Monthly"
                  className={`
                        ${
                          activePlan === "Monthly"
                            ? "text-black bg-gradient-to-b from-customgreen to-customblue    "
                            : "bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent bg-customcard border border-[#FFFFFF1A] "
                        }
                       rounded-md text-sm px-6 md:px-12 py-4`}
                  onClick={() => handlePlanChange("Monthly")}
                />
                <button
                  className={`
                        ${
                          activePlan === "Annual"
                            ? "  opacity-100 bg-gradient-to-b text-black  from-customgreen to-customblue  "
                            : "opacity-70 bg-customgray/40 text-white"
                        }   
                    rounded-md text-sm px-6 md:px-8 py-4`}
                  onClick={() => handlePlanChange("Annual")}
                >
                  Annual
                  <span className="text-xs ml-3 bg-black text-white px-2 py-1 rounded-md">
                    -10%
                  </span>
                </button>
              </div>
            </FadeInSection>

            <div className="flex  flex-col md:flex-row gap-5 md:gap-3 lexend mt-2 mb-6 justify-center ">
              <div
                className={` ${
                  false
                    ? " bg-gradient-to-r from-customgreen to-customblue "
                    : "bg-gradient-to-b from-[#0A0A0AE5] to-[#040404]  "
                } 
                    border p-8  border-[#FFFFFF1A] rounded-2xl text-start md:w-[420px] 2xl:w-[490px]`}
              >
                <h1 className="text-[24px] font-bold">Starter</h1>

                {activePlan === "Monthly" ? (
                  <div className="mt-6 text-start">
                    {/* <p className="text-sm text-[#999F9F]">Start From ...</p> */}
                    <span
                      className={` ${
                        false ? "  text-black" : ""
                      } text-[32px] font-bold 2xl:text-[32px]`}
                    >
                      €98/mo
                    </span>
                    {/* <span className="text-sm text-customlightgray">
                        /per month
                      </span> */}
                  </div>
                ) : (
                  <div className="mt-6 mb-3 text-start">
                    <span
                      className={` 
                         text-[32px] font-bold 2xl:text-[32px] text-[#999F9F] line-through pl-2`}
                    >
                      €98
                    </span>
                    <span
                      className={` font-bold pl-2 pr-1  text-[32px] 2xl:text-[32px]`}
                    >
                      €89/mo
                    </span>
                    {/* <span className="text-sm  text-customlightgray">
                        /per month
                      </span> */}
                  </div>
                )}
                {activePlan === "Annual" && (
                  <>
                    <p
                      className={`text-white
                    text-lg  2xl:text-xl w-full text-start -mt-2 pb-5`}
                    >
                      Billed anually{" "}
                      <span className=" px-1  text-white">
                        (Save €117.60/year)
                      </span>
                    </p>
                  </>
                )}
                <p className="text-xs 2xl:text-[15px] my-4 mb-7">
                  Ideal for: Traders beginning their automation journey
                </p>

                <Button
                  onClick={
                    pathname === "/subscription"
                      ? () => router.push("/algo-strategies")
                      : () => router.push("/signup")
                  }
                  label="Choose Plan"
                  className={` ${
                    false
                      ? "bg-gradient-to-r from-[#00C88C] to-[#0C7C33] text-white  "
                      : "bg-white text-black "
                  } w-full py-[14px] text-[14px]   rounded-md`}
                />

                <div className="mt-10">
                  {Intermediate.map((items, index) => (
                    <div
                      className="flex  flex-row gap-2 items-center py-2.5"
                      key={index + 10}
                    >
                      {/* <RiCheckboxCircleFill className=' bg-customlightgray text-black rounded-full' /> */}
                      <Image
                        src="/images/p1.svg"
                        width={25}
                        height={25}
                        alt="check 1"
                      />
                      <p
                        className={` ${
                          false ? " text-black" : "text-white"
                        } text-[14px]`}
                      >
                        {items}
                      </p>
                    </div>
                  ))}
                </div>
                {/* <div className="flex items-center justify-between pt-6 gap-3">
                    <Checkbox
                      label="TradeCloud"
                      labelClassName="text-[18px] space-x-3 2xl:text-[20px] text-white"
                      checkboxClassName="bg-customgreen w-5 h-5"
                      onChange={() => {}}
                    />
                    <div
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
                          className="absolute w-[260px] 2xl:w-[300px] text-center 2xl:text-sm z-10 inline-block px-3 border border-[#FFFFFF1A] p-3 text-xs text-white bg-[black] rounded-lg shadow-sm opacity-100 tooltip "
                          style={{
                            left: "-400%",
                            top: "-160%",
                            transform: "translateY(-50%)",
                          }}
                        >
                          A VPS built for automated trading, ensuring 24/7
                          uptime, ultra-low latency, and zero interruptions.
                          Reliable, secure, and always on.
                          <div
                            className="tooltip-arrow"
                            data-popper-arrow
                          ></div>
                        </div>
                      )}
                    </div>
                  </div> */}
              </div>

              <div
                className={` ${
                  false
                    ? "  bg-gradient-to-b from-[#0A0A0AE5] to-[#040404] "
                    : " bg-gradient-to-b from-[#0A0A0AE5] to-[#040404] rounded-2xl "
                } border p-8  border-[#FFFFFF1A] text-start relative md:w-[420px] 2xl:w-[490px]`}
              >
                <div className="flex flex-row items-center justify-between">
                  <h1 className="text-[24px] font-bold">Master</h1>
                  <p
                    className={`${
                      activePlan === "Monthly"
                        ? "bg-[#04110D]"
                        : " bg-gradient-to-l from-[#00C88C] to-[#0C7C33] text-white"
                    } py-[12px] uppercase px-[20px] text-[11px] rounded-[10px]`}
                  >
                    Most Popular
                  </p>
                </div>

                {activePlan === "Monthly" ? (
                  <div className="mt-5 text-start">
                    <p className="mt-3">
                      <span className="text-[32px] font-semibold 2xl:text-[32px]  text-slate-200 pr-2 line-through">
                        €998
                      </span>
                      <span
                        className={`${
                          false ? " text-black" : "text-white"
                        } text-[32px] 2xl:text-[32px] font-bold`}
                      >
                        €698/mo
                      </span>
                    </p>
                  </div>
                ) : (
                  <div className="mt-5 text-black mb-3 text-start">
                    <span
                      className={` 
                         text-[32px] font-bold 2xl:text-[32px] text-customlightgray line-through pr-2`}
                    >
                      €698
                    </span>
                    <span
                      className={` font-bold text-white text-[32px] 2xl:text-[32px]`}
                    >
                      €629/mo
                    </span>
                    {/* <span className="text-sm px-0.5 text-white">
                        /per month
                      </span> */}
                  </div>
                )}

                {
                  activePlan === "Annual" ? (
                    <>
                      <p
                        className={`text-white 
                    text-lg  2xl:text-xl w-full text-start -mt-2 pb-5`}
                      >
                        Billed anually{" "}
                        <span className=" px-1  text-white">
                          (Save €837.60/year)
                        </span>
                      </p>
                    </>
                  ) : null
                  // <p>
                  //   {" "}
                  //   <span
                  //     className={`${
                  //       false ? " text-black " : "text-white "
                  //     } text-sm -mt-2`}
                  //   >
                  //     Billed monthly
                  //   </span>
                  // </p>
                }
                <p className="text-xs 2xl:text-[15px] my-4 mb-7">
                  Ideal for: Traders seeking a proven, high-growth portfolio.
                </p>

                <Button
                  label="Choose Plan"
                  onClick={
                    pathname === "/subscription"
                      ? () => router.push("/portfolio")
                      : () => router.push("/signup")
                  }
                  className={` ${
                    activePlan === "Annual"
                      ? "bg-gradient-to-l from-[#00C88C] to-[#0C7C33] text-white  "
                      : "bg-customgray/40 text-black "
                  } w-full py-[14px] text-[14px] rounded-md`}
                />
                <div className="mt-10">
                  {master.map((items, index) => (
                    <div
                      className="flex flex-row text-white gap-2 items-center py-2"
                      key={index + 1}
                    >
                      {/* <RiCheckboxCircleFill className=' bg-customlightgray text-black rounded-full' /> */}
                      <Image
                        src="/images/p1.svg"
                        width={21}
                        height={21}
                        alt="check 1"
                      />
                      <p
                        className={` ${false ? " text-black" : ""} text-[14px]`}
                      >
                        {items}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {pathname === "/subscription" && (
            <div className="hidden md:flex items-center justify-center w-full gap-7 pt-8 pb-4">
              <h1 className="text-lg font-bold text-white">We accept</h1>
              <Image src="/visa.svg" width={40} height={40} alt="line" />
              <Image src="/master.svg" width={40} height={40} alt="line" />
              <Image src="/american.svg" width={40} height={40} alt="line" />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
