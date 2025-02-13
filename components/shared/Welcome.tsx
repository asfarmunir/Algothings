"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import InputField from "../ui/InputField";
import Button from "../ui/Button";
import { stepContent, tickets } from "@/lib/constants";
import { motion } from "framer-motion";
import FadeInSection from "@/lib/FadeInAnimation";

export const Welcome = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <>
      <section id="home">
        <div className="py-3 px-2">
          {/* Welcome Section */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 50 }}
          >
            <div className="inline-flex flex-row gap-3 mt-4 mb-6 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#45F17533] to-[#00C3CE33]">
              <Image
                src="/images/welcomestar.svg"
                width={20}
                height={30}
                alt="welcome star"
              />
              <p className="text-sm 2xl:text-[16px] gap-4 bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent">
                Welcome to ALGOSFIELD
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="px-4 text-[30px] md:text-[38px] xl:text-[56px]  tracking-wide  font-sans md:leading-[48px] lg:leading-[50px] xl:leading-[48px] my-4 font-semibold">
              Trade Smarter, Not Harder with <br className="sm:block hidden" />
              <span className="bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                The Algos Field.
              </span>
            </h1>

            {/* Description */}
            <p className="text-customlight  sm:px-6  md:px-20 leading-6 md:leading-7 my-7 text-sm  md:text-[16px] xl:text-[20px]">
              Say goodbye to outdated trading methods. With decades of expertise
              packed into our <br className="lg:block hidden" /> powerful
              algorithms, there’s no need for guesswork, programming, or
              constant <br className="lg:block hidden" /> monitoring. Just plug,
              play, and let our strategies work for you 100% hands-free.
            </p>

            {/* Email Input and Button */}
            <div className="space-y-4 mb-4 sm:space-y-2 space-x-2 lg:space-x-4">
              <Button
                label="Join our Discord"
                className="bg-gradient-to-r py-3.5 px-5 from-customgreen to-customblue rounded-[6px] text-black  sm:w-auto"
              />

              <div className="inline-flex flex-col sm:flex-row items-center p-[1px] bg-gradient-to-r from-customgreen to-customblue bg-clip-border rounded-lg">
                <button
                  className="inline-flex flex-row items-center bg-black rounded-lg gap-3 px-6  py-2.5"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("clicked");
                    const targetSection = document.querySelector("#price");
                    targetSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <p className="bg-gradient-to-b px-0 hover:pr-4 transition-all duration-150 from-customgreen to-customblue bg-clip-text text-transparent py-1">
                    Choose Plan
                  </p>
                  <Image
                    src="/images/arrow.svg"
                    width={16}
                    height={16}
                    alt="arrow icon"
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Welcome Image */}
          <FadeInSection>
            <div className=" py-10 sm:px-6 md:px-20 xl:px-[98px] w-full flex flex-row justify-center items-center">
              <Image
                src="/images/wel.png"
                width={0}
                height={0}
                layout="responsive"
                alt="image"
                className="w-full sm:w-auto"
              />
            </div>
          </FadeInSection>

          {/* Who We Are Section */}

          <div className=" py-4">
            <FadeInSection>
              <div className="inline-flex flex-row gap-3 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#45F17533] to-[#00C3CE33]">
                <Image
                  src="/images/welcomestar.svg"
                  width={20}
                  height={30}
                  alt="welcome star"
                />
                <p className="text-sm 2xl:text-[16px] gap-4 bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent">
                  WHO WE ARE
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <h1 className="py-8 2xl:py-12 text-[28px] sm:text-[28px] md:text-[44px] xl:text-[52px] font-semibold md:leading-[36px] sm:leading-[44px] xl:leading-[54px]">
                <span className="bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                  Meet our Company
                </span>{" "}
                Unless Miss the <br className="hidden lg:block" /> Opportunity
              </h1>

              <p className="px-4 sm:px-6 md:px-20 xl:px-[103px] pb-8 text-center text-sm md:text-base xl:text-[18px] leading-7">
                The Algos Field (TAF) is an innovative algorithmic trading
                solutions company built on 15+ years of combined team experience
                in developing and optimizing trading strategies. Over the past
                3+ years, our proven algorithms have consistently delivered an
                impressive 80%+ monthly win rate, helping traders achieve
                reliable, hands-free success. Whether you trade futures, stocks,
                crypto, indices, or commodities, our advanced algorithms are
                designed to deliver consistent performance, risk minimization,
                and wealth maximization. Our tailored solutions include 10
                individual trading algorithms for focused strategies, an
                all-in-one diversified portfolio for balanced growth, and a
                premium fully managed service for seamless account optimization.
                Backed by transparency, innovation, and continuous updates, The
                Algos Field empowers you to trade smarter, minimize risk, and
                stay ahead of the market, without guesswork, programming, or
                constant monitoring.
              </p>
            </FadeInSection>

            <FadeInSection>
              <div className="  mt-6 2xl:mt-10 mb-2 mx-4 md:mx-8 lg:mx-10 md:h-[300px] lg:h-[630px] md:px-10">
                <img
                  src="/images/visual.svg"
                  alt="image"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </FadeInSection>
          </div>

          {/* Steps Section */}
          <FadeInSection>
            <div className="px-2 my-16 md:px-8 lg:px-24 xl:px-[98px]">
              <div className="inline-flex flex-row gap-3 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#45F17533] to-[#00C3CE33]">
                <Image
                  src="/images/welcomestar.svg"
                  width={20}
                  height={30}
                  alt="welcome star"
                />
                <p className="text-sm 2xl:text-[16px] gap-4 bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent">
                  STEPS
                </p>
              </div>

              <h1 className="py-12 2xl:py-16 text-[28px] sm:text-[32px] md:text-[44px] xl:text-[56px] lexend leading-[36px] sm:leading-[44px] xl:leading-[54px]">
                <span className="bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                  Start Your Career
                </span>{" "}
                with Us in 4 Simple <br className="hidden lg:block" /> Steps
              </h1>

              {/* Steps plan cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  2xl:gap-7 w-full py-3 px-2">
                {["Step 1", "Step 2", "Step 3", "Step 4"].map((item, index) => (
                  <div
                    key={index}
                    className="w-full bg-gradient-to-r from-customgreen to-customblue bg-clip-border p-[1px] rounded-md"
                  >
                    <button
                      onClick={() => setActiveStep(index + 1)}
                      className={` py-[10px] w-full rounded-md transition duration-300 uppercase ${
                        activeStep === index + 1
                          ? "bg-gradient-to-r from-customgreen text-black to-customblue"
                          : "bg-black text-customgreen "
                      } text-[23px]  tracking-wider`}
                    >
                      <span
                        className={`${
                          activeStep === index + 1
                            ? "text-black"
                            : "bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent"
                        }`}
                      >
                        {item}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Step Details */}
          <FadeInSection>
            <div className="px-2 md:px-8 lg:px-24 xl:px-[98px]">
              <div className="h-auto lg:h-[520px] flex md:flex-row flex-col-reverse justify-between bg-gradient-to-b from-[#45F175B2] via-[#00C3CEB2] to-[#020907B2] px-3 md:px-6 py-5 md:py-10 rounded-[50px] text-black">
                <div className="w-full flex flex-col justify-center px-2 md:px-6 lexend">
                  <div className="text-start leading-[28px]">
                    <h1 className="font-semibold leading-10 text-[32px] pt-2">
                      {stepContent[activeStep - 1].title}
                    </h1>
                    <p className="text-[16px] py-2">
                      {stepContent[activeStep - 1].description}
                    </p>
                    <ul className="space-y-1 list-disc pl-5 text-[16px]">
                      {stepContent[activeStep - 1].points?.map(
                        (point, index) => (
                          <li className="" key={index}>
                            {point}
                          </li>
                        )
                      )}
                    </ul>

                    <p className="text-sm py-2">
                      {stepContent[activeStep - 1].endDescription}
                    </p>

                    <div className="mt-4 ">
                      <Button
                        label={stepContent[activeStep - 1].btntitle}
                        className="bg-gradient-to-r text-sm from-customgreen to-customblue py-[16px] px-[36px] rounded-[8px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <img
                    src="/images/plan.png"
                    alt="plan image"
                    className="bg-[#02090780] w-full h-[420px] rounded-[50px] border-none"
                  />
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};
