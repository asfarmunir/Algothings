"use client";
import React from "react";
import Image from "next/image";
import { Slider } from "../ui/Slider";
import { FaArrowRightLong } from "react-icons/fa6";

import { useState } from "react";
import { Title } from "./title";
import FadeInSection from "@/lib/FadeInAnimation";
export default function Comparsion() {
  // State for sliders
  const [accountSize, setAccountSize] = useState(1000); // Default value
  const [profitRate, setProfitRate] = useState(8); // Default value in %

  // Calculate monthly profit
  const monthlyProfit = (accountSize * profitRate) / 100;

  return (
    <>
      <section id="">
        <div className="mb-4 mt-16  ">
          <FadeInSection>
            <div className="inline-flex flex-row gap-3 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#45F17533] to-[#00C3CE33]">
              <Image
                src="/images/welcomestar.svg"
                width={20}
                height={30}
                alt="welcome star"
              />
              <p className="text-start 2xl:text-[16px] uppercase gap-4 bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent">
                Comparisons
              </p>
            </div>

            <h1 className="px-4 pt-4 text-[36px] lg:text-[52px] font-semibold leading-[60px] my-6">
              Trading With{" "}
              <span className="bg-gradient-to-r from-customgreen to-customblue  bg-clip-text text-transparent">
                The Algos Field
              </span>{" "}
              Vs. <br className="md:block hidden" />
              Trading Yourself
            </h1>

            <Title />
          </FadeInSection>

          <section className="text-center">
            <FadeInSection>
              <h1 className="py-4  px-4 text-[36px] lg:text-[52px] font-semibold leading-[44px] lg:leading-[52px] my-3">
                How Much You Can Earn Using{" "}
                <span className="bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                  The <br className="md:block hidden" /> Algos Field
                </span>{" "}
                Trading Solutions?
              </h1>

              <p className="text-[16px] px-6 py-8">
                On average our members have a monthly profit of 8% using our
                advanced portfolio strategy.
              </p>
            </FadeInSection>
            <FadeInSection>
              <div className="border border-[#FFFFFF1A] lexend rounded-xl p-[15px] lg:p-[20px] mx-6 lg:mx-[115px] mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto lg:h-[500px]">
                  <div className="bg-gradient-to-b from-[#04110DE5] to-[#04110D] border border-[#FFFFFF1A] p-[30px] lg:p-[50px] rounded-xl space-y-6">
                    <h3 className="text-xl lg:text-[32px] font-semibold text-left">
                      How much can you get?
                    </h3>

                    <div className="space-y-4 mt-4 lg:mt-6">
                      {/* Account Size Slider */}
                      <div className="space-y-5">
                        <div className="flex justify-between text-[16px] leading-6">
                          <span>Account Size</span>
                          <span>${accountSize.toLocaleString()}</span>
                        </div>
                        <Slider
                          value={[accountSize]}
                          onValueChange={(value) => setAccountSize(value[0])}
                          max={300000}
                          min={1000}
                          step={1000}
                          className="w-full"
                        />
                      </div>

                      {/* Profit Rate Slider */}
                      <div className="space-y-5 mt-4 lg:pt-8">
                        <div className="flex justify-between">
                          <span>Profit Rate</span>
                          <span>{profitRate}%</span>
                        </div>
                        <Slider
                          value={[profitRate]}
                          onValueChange={(value) => setProfitRate(value[0])}
                          max={15}
                          min={1}
                          step={0.1}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <p className="text-[12px] pt-3 lg:pt-4 text-start">
                      Especially with our Axis Trading
                    </p>

                    <div className="w-full pt-6 lg:pt-12">
                      <button className="w-full flex flex-row justify-between items-center lexend bg-gradient-to-r  from-customgreen to-customblue text-black font-semibold py-3 px-6 rounded-lg transition-colors">
                        <p>Get Started</p>
                        <FaArrowRightLong />
                      </button>
                    </div>
                  </div>

                  {/* Monthly Profit Display */}
                  <div
                    className="bg-[#04110DE5] py-4 border border-[#FFFFFF1A] rounded-xl flex flex-col justify-center items-center"
                    style={{
                      backgroundImage: "url(/images/bggradient.svg)",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="w-[80%] h-auto md:h-[132px] rounded-xl bg-gradient-to-b from-customgreen to-customblue">
                      <div className="flex flex-col items-center justify-center py-2 md:mt-6">
                        <div className="text-black font-semibold lexend text-[14px] leading-[20px] ">
                          Take <br /> Home
                        </div>
                        <div className="text-[24px] md:text-[30px] leading-10 font-semibold text-black">
                          ${parseInt(monthlyProfit).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </section>
        </div>
      </section>
    </>
  );
}
