"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import InputField from "../ui/InputField";
import Button from "../ui/Button";
import { stepContent, tickets } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import FadeInSection from "@/lib/FadeInAnimation";
import { FaAngleRight } from "react-icons/fa6";
import AnimationSection from "../ui/AnimationSection";
import { useRouter } from "next/navigation";

export const Welcome = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [openItem, setOpenItem] = useState(null);
  const router = useRouter();

  const handleToggle = (id: any) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === id ? null : id));
  };

  // Animation variants for Framer Motion
  const accordionVariants = {
    collapsed: { height: 0, opacity: 0, transition: { duration: 0.6 } },
    expanded: { height: "auto", opacity: 1, transition: { duration: 0.6 } },
  };
  return (
    <>
      <section id="home">
        <div className="py-3 px-2">
          {/* Welcome Section */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 50 }}
            className=""
          >
            <div className="inline-flex flex-row gap-3 mt-4 mb-6 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#45F17533] to-[#00C3CE33]">
              <Image
                src="/images/welcomestar.svg"
                width={20}
                height={30}
                alt="welcome star"
              />
              <p className="text-sm 2xl:text-[16px] gap-4 bg-gradient-to-b from-customgreen to-customblue bg-clip-text uppercase text-transparent">
                Welcome to ALGOSFIELD
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="px-4 text-[28px] sm:text-[30px] md:text-[38px] xl:text-[56px]  tracking-wide  font-sans md:leading-[48px] lg:leading-[50px] xl:leading-[48px] my-4 font-semibold">
              Trade Smarter, Not Harder with <br className="sm:block hidden" />
              <span className="bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                The Algos Field.
              </span>
            </h1>

            {/* Description */}
            <p className="text-customlight  px-2 sm:px-6  md:px-20 leading-6 md:leading-7 my-7 text-[12px] sm:text-sm  md:text-[16px] xl:text-[20px]">
              Say goodbye to outdated trading methods. With decades of expertise
              packed into our <br className="lg:block hidden" /> powerful
              algorithms, there’s no need for guesswork, programming, or
              constant <br className="lg:block hidden" /> monitoring. Just plug,
              play, and let our strategies work for you 100% hands-free.
            </p>

            {/* Email Input and Button */}
            <div className="space-y-4 mb-4  sm:space-y-2 space-x-3 lg:space-x-4">
              <div className="inline-flex text-[14px]  sm:text-base flex-col sm:flex-row items-center p-[1px] bg-gradient-to-r from-customgreen to-customblue bg-clip-border rounded-lg">
                <button
                  className="inline-flex z-50 flex-row items-center bg-black rounded-lg gap-3 px-6  py-2.5"
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
              <Button
                label="Join our Discord"
                className="bg-gradient-to-r  text-[14px] sm:text-base py-3.5 px-5 font-semibold from-customgreen to-customblue rounded-[6px] text-black  sm:w-auto"
              />
            </div>
          </motion.div>

          {/* Welcome Image */}
          <FadeInSection>
            <div className="  max-w-7xl   -mt-8 mb-10 sm:-mt-20 mx-auto  w-full flex flex-row justify-center items-center">
              <Image
                src="/assets/hero.webp"
                width={1200}
                height={1200}
                alt="image"
                className=" w-full "
              />
            </div>
          </FadeInSection>

          {/* Who We Are Section */}

          <div className=" py-4 -mt-20" id="about">
            <FadeInSection>
              <div className="inline-flex flex-row gap-3 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#45F17533] to-[#00C3CE33]">
                <Image
                  src="/images/welcomestar.svg"
                  width={20}
                  height={30}
                  alt="welcome star"
                />
                <p className="text-sm 2xl:text-[16px] gap-4 bg-gradient-to-b from-customgreen to-customblue bg-clip-text uppercase text-transparent">
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
              <div className="   mb-2 mx-4 md:mx-8 lg:mx-10 md:h-[300px] lg:h-[630px] md:px-10">
                <img
                  src="/assets/animations/Website.gif"
                  alt="image"
                  loading="lazy"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </FadeInSection>
          </div>

          {/* Steps Section */}
          <FadeInSection>
            <div className="px-2 max-w-[90rem] mx-auto my-6 md:px-8 lg:px-24 xl:px-[128px]">
              <div className="inline-flex flex-row gap-3 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#45F17533] to-[#00C3CE33]">
                <Image
                  src="/images/welcomestar.svg"
                  width={20}
                  height={30}
                  alt="welcome star"
                />
                <p className="text-sm 2xl:text-[16px] gap-4 bg-gradient-to-b from-customgreen to-customblue bg-clip-text uppercase text-transparent">
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
              <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  2xl:gap-6 w-full pt-3 ">
                {["Step 1", "Step 2", "Step 3", "Step 4"].map((item, index) => (
                  <div className=" p-1.5 rounded-2xl border border-gray-700">
                    <div
                      key={index}
                      className="w-full bg-gradient-to-r from-customgreen to-customblue bg-clip-border p-[2.5px] rounded-xl"
                    >
                      <button
                        onClick={() => setActiveStep(index + 1)}
                        className={` py-[10px] w-full rounded-xl transition duration-300 uppercase ${
                          activeStep === index + 1
                            ? "bg-gradient-to-r from-customgreen  to-customblue"
                            : "bg-black text-customgreen "
                        } text-[18px] font-semibold hover:bg-gradient-to-r hover:from-customgreen/30  hover:to-customblue/30  tracking-wider`}
                      >
                        <span
                          className={`${
                            activeStep === index + 1
                              ? "text-black "
                              : "bg-gradient-to-b  from-customgreen to-customblue bg-clip-text text-transparent"
                          }`}
                        >
                          {item}
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Step Details */}
          <FadeInSection>
            <div className="hidden max-w-[90rem] mx-auto sm:block px-2 md:px-8 lg:px-24 xl:px-[128px]">
              <div className="h-auto lg:h-[430px] xl:h-[500px] 2xl:h-[600px] flex md:flex-row flex-col-reverse justify-between bg-gradient-to-b   from-[#45F175B2] via-[#00C3CEB2] to-[#020907B2] px-5 md:px-6 py-5 md:py-5 rounded-2xl text-black">
                <div className="w-full  flex flex-col justify-center px-2 md:px-6 lexend">
                  <div className="text-start leading-[28px]">
                    <p className="bg-gradient-to-r uppercase  from-customgreen to-customblue font-semibold px-4 py-1.5 w-fit rounded-full text-xs 2xl:text-sm">
                      Step {activeStep}
                    </p>
                    <h1 className="font-bold leading-10 text-[32px] py-4">
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

                    <div className="mt-4 flex items-center gap-3 ">
                      <Button
                        onClick={() => {
                          router.push("/register");
                        }}
                        // label={stepContent[activeStep - 1].btntitle}
                        label="Get Started"
                        className="bg-gradient-to-r uppercase text-sm from-customgreen to-customblue font-semibold py-[12px] px-[36px] rounded-[8px]"
                      />
                      {/* <button className=" text-white border-0 uppercase text-xs 2xl:text-sm cursor-pointer hover:text-green-500 px-4 inline-flex items-center gap-1.5   transition-all  ">
                        Choose Plan
                        <FaAngleRight />
                      </button> */}
                    </div>
                  </div>
                </div>

                <div className=" bg-[#02090780] w-full p-8  rounded-2xl border-none">
                  <Image
                    src={`/assets/steps/${activeStep}.png`}
                    alt="plan image"
                    width={800}
                    height={800}
                    className=" w-full h-full object-contain object-center"
                  />
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Mobile version Details */}
          <div className="flex flex-col sm:hidden  gap-4">
            {stepContent.map((step, index) => (
              <FadeInSection key={index}>
                <div className="px-4 md:px-8 lg:px-24 xl:px-[98px]">
                  <div className="h-auto lg:h-[520px] flex md:flex-row flex-col-reverse  justify-between bg-gradient-to-b from-[#45F175B2] via-[#00C3CEB2] to-[#45F175B2] px-3 md:px-6 py-3 md:py-10 rounded-[10px] text-black">
                    <div className="w-full flex flex-col justify-center px-2 md:px-6 lexend">
                      <div className="text-start leading-[28px]">
                        <p className="bg-gradient-to-r mt-6 uppercase  from-customgreen to-customblue font-semibold px-4 py-1.5 w-fit rounded-full text-xs ">
                          Step {activeStep}
                        </p>
                        <h1 className="font-semibold text-start leading-10 text-[28px] pt-2">
                          {step.title}
                        </h1>
                        <p className="text-[14px] py-1">{step.description}</p>
                        <ul className="space-y-1 list-disc pl-5 text-[16px]">
                          {step.points?.map((point, index) => (
                            <li className="" key={index}>
                              {point}
                            </li>
                          ))}
                        </ul>

                        <p className="text-sm py-2">{step.endDescription}</p>

                        <div className="my-4 flex items-center justify-center gap-3 ">
                          <Button
                            // label={step.btntitle}
                            onClick={() => {
                              router.push("/register");
                            }}
                            label="Get Started"
                            className="bg-gradient-to-r w-full uppercase text-sm from-customgreen to-customblue font-semibold py-[12px] px-[36px] rounded-[8px]"
                          />
                          {/* <button className=" text-white border-0 uppercase text-xs 2xl:text-sm cursor-pointer hover:text-green-500 px-4 inline-flex items-center gap-1.5   transition-all  ">
                            Choose Plan
                            <FaAngleRight />
                          </button> */}
                        </div>
                      </div>
                    </div>

                    <div className=" bg-[#02090780] w-full p-8 h-[320px] rounded-[10px] border-none">
                      <Image
                        src={`/assets/steps/${index + 1}.png`}
                        alt="plan image"
                        width={400}
                        height={400}
                        className=" w-full h-full object-contain object-center"
                      />
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
