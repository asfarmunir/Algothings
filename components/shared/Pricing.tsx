"use client";
import { Intermediate, master } from "@/lib/constants";
import React, { useState } from "react";
import Image from "next/image";
import { Plans } from "./plans";
import Button from "../ui/Button";
import { RiCheckboxCircleFill } from "react-icons/ri";
import CardAnimation from "@/lib/CardAnimations";
import FadeInSection from "@/lib/FadeInAnimation";

export default function Pricing() {
  const [activePlan, setActivePlan] = useState("Annual");

  const handlePlanChange = (plan: string) => {
    setActivePlan(plan);
  };
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
                            ? "text-black bg-gradient-to-b from-customgreen to-customblue "
                            : "bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent bg-customcard border border-[#FFFFFF1A] "
                        }
                       rounded-md text-sm px-6 py-3
`}
                  onClick={() => handlePlanChange("Monthly")}
                />
                <Button
                  label="Annual"
                  className={`
                        ${
                          activePlan === "Annual"
                            ? " text-black bg-gradient-to-b from-customgreen to-customblue "
                            : "bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent bg-customcard border border-[#FFFFFF1A] "
                        }
                    rounded-md text-sm px-6 py-3
`}
                  onClick={() => handlePlanChange("Annual")}
                />
              </div>
            </FadeInSection>

            <div className="flex  flex-col md:flex-row gap-5 md:gap-3 lexend mt-2 mb-6 justify-center ">
              <CardAnimation direction="left" delay={0.5}>
                <div
                  className={` ${
                    activePlan === "Monthly"
                      ? " bg-gradient-to-r from-customgreen to-customblue "
                      : "bg-gradient-to-b from-[#0A0A0AE5] to-[#040404]  "
                  } 
                    border p-8  border-[#FFFFFF1A] rounded-2xl text-start md:w-[400px] lg:w-[490px]`}
                >
                  <h1 className="text-[24px]">Intermediate</h1>

                  <div className="mt-6 text-start">
                    <p className="text-sm text-[#999F9F]">Start From ...</p>
                    <span
                      className={` ${
                        activePlan === "Monthly"
                          ? " font-semibold text-black"
                          : ""
                      } text-[36px]`}
                    >
                      $97
                    </span>
                    <span className="text-sm text-customlightgray">
                      /per month
                    </span>
                  </div>
                  <p className="text-[14px] my-4">
                    Ideal for: Traders beginning their automation journey
                  </p>

                  <Button
                    label="Choose Plan"
                    className={` ${
                      activePlan === "Monthly"
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
                            activePlan === "Monthly"
                              ? " text-black"
                              : "text-white"
                          } text-[14px]`}
                        >
                          {items}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardAnimation>

              <CardAnimation direction="right" delay={0.5}>
                <div
                  className={` ${
                    activePlan === "Annual"
                      ? "  bg-gradient-to-r from-customgreen rounded-2xl to-customblue "
                      : " bg-gradient-to-b from-[#0A0A0AE5] to-[#040404] rounded-2xl "
                  } border p-8  border-[#FFFFFF1A] text-start relative md:w-[400px] lg:w-[490px]`}
                >
                  <div className="flex flex-row justify-between">
                    <h1 className="text-[24px]">Master</h1>
                    <p
                      className={`${
                        activePlan === "Annual"
                          ? "bg-[#04110D]"
                          : " text-black bg-white"
                      } py-[14px] px-[20px] text-[12px] rounded-[10px]`}
                    >
                      Most Popular
                    </p>
                  </div>

                  <p className="mt-3">
                    <span
                      className={`${
                        activePlan === "Annual" ? " text-black" : ""
                      } text-[36px] font-semibold`}
                    >
                      $697
                    </span>
                    <span className="text-3xl text-slate-700 px-1 line-through">
                      $997
                    </span>
                  </p>
                  <p>
                    {" "}
                    <span
                      className={`${
                        activePlan === "Annual" ? " text-black " : "text-white "
                      } text-sm -mt-2`}
                    >
                      billed monthly
                    </span>
                  </p>
                  <p className="text-[14px] my-4">
                    Ideal for: Traders seeking a powerful, all-in-one portfolio
                  </p>

                  <Button
                    label="Choose Plan"
                    className={` ${
                      activePlan === "Annual"
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
                            activePlan === "Annual" ? " text-black" : ""
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
