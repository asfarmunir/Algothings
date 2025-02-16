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

export default function Pricing() {
  const [activePlan, setActivePlan] = useState("Annual");

  const handlePlanChange = (plan: string) => {
    setActivePlan(plan);
  };
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const showTooltip = () => setIsTooltipVisible(true);
  const hideTooltip = () => setIsTooltipVisible(false);

  return (
    <>
      <section id="price">
        <div className="mb-4 mt-12">
          <FadeInSection>
            <div className="inline-flex flex-row gap-3 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#45F17533] to-[#00C3CE33]">
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

            <h1 className="py-1 px-2 text-6 text-[44px] lexend  leading-[44px] my-3">
              Choose{" "}
              <span className="bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                Your Plan
              </span>
            </h1>
          </FadeInSection>

          <div className="px-6 md:px-20">
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
                            ? "  opacity-100 "
                            : "opacity-70"
                        }   text-black bg-gradient-to-b from-customgreen to-customblue   
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
              <CardAnimation direction="left" delay={0.5}>
                <div
                  className={` ${
                    false
                      ? " bg-gradient-to-r from-customgreen to-customblue "
                      : "bg-gradient-to-b from-[#0A0A0AE5] to-[#040404]  "
                  } 
                    border p-8  border-[#FFFFFF1A] rounded-2xl text-start md:w-[400px] lg:w-[490px]`}
                >
                  <h1 className="text-[24px]">Intermediate</h1>

                  {activePlan === "Monthly" ? (
                    <div className="mt-6 text-start">
                      <p className="text-sm text-[#999F9F]">Start From ...</p>
                      <span
                        className={` ${
                          false ? " font-semibold text-black" : ""
                        } text-[36px] 2xl:text-[40px]`}
                      >
                        $97
                      </span>
                      <span className="text-sm text-customlightgray">
                        /per month
                      </span>
                    </div>
                  ) : (
                    <div className="mt-6 mb-3 text-center">
                      <span
                        className={` font-bold  text-[36px] 2xl:text-[40px]`}
                      >
                        $87.3
                      </span>
                      <span className="text-sm px-0.5 text-customlightgray">
                        /per month
                      </span>
                      <span
                        className={` 
                         text-[36px] font-bold 2xl:text-[40px] text-[#999F9F] line-through pl-2`}
                      >
                        $97
                      </span>
                    </div>
                  )}
                  {activePlan === "Annual" && (
                    <>
                      <p
                        className={`text-[#999F9F] 
                    text-sm w-full text-center -mt-2 pb-5`}
                      >
                        billed anually{" "}
                        <span className="text-xl px-1  2xl:text-2xl text-white">
                          (Save $116.40/year)
                        </span>
                      </p>
                    </>
                  )}
                  <p className="text-[14px] my-4 mb-7">
                    Ideal for: Traders beginning their automation journey
                  </p>

                  <Button
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
                  <div className="flex items-center justify-between pt-6 gap-3">
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

                      {/* Tooltip element */}
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
                  </div>
                </div>
              </CardAnimation>

              <CardAnimation direction="right" delay={0.5}>
                <div
                  className={` ${
                    true
                      ? "  bg-gradient-to-r from-customgreen rounded-2xl to-customblue "
                      : " bg-gradient-to-b from-[#0A0A0AE5] to-[#040404] rounded-2xl "
                  } border p-8  border-[#FFFFFF1A] text-start relative md:w-[400px] lg:w-[490px]`}
                >
                  <div className="flex flex-row items-center justify-between">
                    <h1 className="text-[24px]">Master</h1>
                    <p
                      className={`${
                        true ? "bg-[#04110D]" : " text-black bg-white"
                      } py-[14px] px-[20px] text-[12px] rounded-[10px]`}
                    >
                      Most Popular
                    </p>
                  </div>

                  {activePlan === "Monthly" ? (
                    <div className="mt-3 text-start">
                      <p className="mt-3">
                        <span
                          className={`${
                            true ? " text-black" : ""
                          } text-[36px] 2xl:text-[40px] font-semibold`}
                        >
                          $697
                        </span>
                        <span className="text-3xl text-slate-700 px-1 line-through">
                          $997
                        </span>
                      </p>
                    </div>
                  ) : (
                    <div className="mt-3 text-black mb-3 text-center">
                      <span
                        className={` font-bold  text-[36px] 2xl:text-[40px]`}
                      >
                        $627.3
                      </span>
                      <span className="text-sm px-0.5 text-[#04110D99]">
                        /per month
                      </span>
                      <span
                        className={` 
                         text-[36px] font-bold 2xl:text-[40px] text-[#04110D99] line-through pl-2`}
                      >
                        $997
                      </span>
                    </div>
                  )}

                  {activePlan === "Annual" ? (
                    <>
                      <p
                        className={`text-[#04110D99] 
                    text-sm w-full text-center -mt-2 pb-5`}
                      >
                        billed anually{" "}
                        <span className="text-xl px-1  2xl:text-2xl text-black">
                          (Save $846.40/year)
                        </span>
                      </p>
                    </>
                  ) : (
                    <p>
                      {" "}
                      <span
                        className={`${
                          true ? " text-black " : "text-white "
                        } text-sm -mt-2`}
                      >
                        billed monthly
                      </span>
                    </p>
                  )}
                  <p className="text-[14px] my-4 mb-7">
                    Ideal for: Traders seeking a powerful, all-in-one portfolio
                  </p>

                  <Button
                    label="Choose Plan"
                    className={` ${
                      true
                        ? "bg-gradient-to-r from-[#00C88C] to-[#0C7C33] text-white  "
                        : "bg-white text-black "
                    } w-full py-[14px] text-[14px] rounded-md`}
                  />
                  <div className="mt-10">
                    {master.map((items, index) => (
                      <div
                        className="flex flex-row gap-2 items-center py-2"
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
                          className={` ${
                            true ? " text-black" : ""
                          } text-[14px]`}
                        >
                          {items}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
