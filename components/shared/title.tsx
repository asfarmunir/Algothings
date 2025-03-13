import React from "react";
import Image from "next/image";
import FadeInSection from "@/lib/FadeInAnimation";

export const Title = () => {
  return (
    <FadeInSection className="">
      <div className="max-w-screen-xl  mx-auto  ">
        <div className="flex sm:px-10 md:px-20 lg:px-28 xl:px md:flex-row justify-center flex-col-reverse  ">
          {/* <div className="flex-1 px-6 bg-transparent rounded-none w-full lg:block hidden mt-8">
            <h3 className="font-bold text-start text-white text-[28px] mb-8 ">
              Features
            </h3>
            <hr className="border-[#1B211F] " />
            <p className="my-3 text-start text-[#FFFFFFCC] text-base 2xl:text-[20px]">
              Time Commitment
            </p>
            <hr className="border-[#1B211F]" />
            <p className="mt-4 mb-4 text-start text-[#FFFFFFCC] text-base 2xl:text-[20px]">
              Experience Needed
            </p>
            <hr className="border-[#1B211F]" />
            <p className="mt-4 mb-4  text-start text-[#FFFFFFCC] text-base 2xl:text-[20px]">
              Automation
            </p>
            <hr className="border-[#1B211F]" />
            <p className="mt-4 mb-5  text-start text-[#FFFFFFCC] text-base 2xl:text-[20px]">
              Decision-Making
            </p>
            <hr className="border-[#1B211F]" />
            <p className="mt-4 mb-5  text-start text-[#FFFFFFCC] text-base 2xl:text-[20px]">
              Proven Strategies
            </p>
            <hr className="border-[#1B211F]" />
            <p className="mt-4 mb-5  text-start text-[#FFFFFFCC] text-base 2xl:text-[20px]">
              Performance Consistency
            </p>
            <hr className="border-[#1B211F]" />
            <p className="mt-4 mb-5  text-start text-[#FFFFFFCC] text-base 2xl:text-[20px]">
              Risk Management
            </p>
            <hr className="border-[#1B211F]" />
          </div> */}

          <div className="  px-5 sm:min-w-[26rem]  w-full sm:w-fit mt-5 md:mt-12">
            <h3 className="font-bold bg-gradient-to-r pb-2 from-customgreen to-customblue bg-clip-text text-transparent  text-2xl text-[28px] leading-[36px] ">
              The Algos Field
            </h3>
            <div className="bg-gradient-to-b from-customgreen to-customblue p-[6px] rounded-[44px]">
              <div className="bg-black px-8 py-6 rounded-[44px] text-base 2xl:text-[20px]">
                <div className="flex gap-8 2xl:gap-10 text-start my-3 w-full ">
                  <Image
                    src="/images/gradienttick.svg"
                    alt="Gradient Tick"
                    width={25}
                    height={25}
                  />
                  <div className="w-full py-2 2xl:py-3">
                    <p className="leading-5 bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                      10 minutes/day <br /> to enable/disable the bot
                    </p>
                    <hr className="mt-2 border-[#1B211F] w-full" />
                  </div>
                </div>

                <div className="flex gap-8 2xl:gap-10 text-start my-3">
                  <Image
                    src="/images/gradienttick.svg"
                    alt="Gradient Tick"
                    width={25}
                    height={25}
                  />
                  <div className="w-full py-2 2xl:py-3">
                    <p className="leading-5 bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                      No trading <br /> experience required
                    </p>
                    <hr className="mt-2 border-[#1B211F] w-full" />
                  </div>
                </div>

                <div className="flex gap-8 2xl:gap-10 text-start my-3">
                  <Image
                    src="/images/gradienttick.svg"
                    alt="Gradient Tick"
                    width={25}
                    height={25}
                  />
                  <div className="w-full py-2 2xl:py-3">
                    <p className="leading-5 bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                      100% hands-free <br /> execution
                    </p>
                    <hr className="mt-2 border-[#1B211F] w-full" />
                  </div>
                </div>

                <div className="flex gap-8 2xl:gap-10 text-start my-3  w-full">
                  <Image
                    src="/images/gradienttick.svg"
                    alt="Gradient Tick"
                    width={25}
                    height={25}
                  />
                  <div className="w-full py-2 2xl:py-3">
                    <p className="leading-5 bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                      Data-driven
                      <br /> strategies
                    </p>
                    <hr className="mt-2 border-[#1B211F] " />
                  </div>
                </div>

                <div className="flex gap-8 2xl:gap-10 text-start my-3">
                  <Image
                    src="/images/gradienttick.svg"
                    alt="Gradient Tick"
                    width={25}
                    height={25}
                  />
                  <div className="w-full py-2 2xl:py-3">
                    <p className="leading-5 bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                      3+ years of proven
                      <br /> success
                    </p>
                    <hr className="mt-2 border-[#1B211F] w-full" />
                  </div>
                </div>

                <div className="flex gap-8 2xl:gap-10 text-start my-3">
                  <Image
                    src="/images/gradienttick.svg"
                    alt="Gradient Tick"
                    width={25}
                    height={25}
                  />
                  <div className="w-full py-2 2xl:py-3">
                    <p className="leading-5 bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                      80%+ win rate over 3 <br /> years
                    </p>
                    <hr className="mt-2 border-[#1B211F] w-full" />
                  </div>
                </div>

                <div className="flex gap-8 2xl:gap-10 text-start my-3">
                  <Image
                    src="/images/gradienttick.svg"
                    alt="Gradient Tick"
                    width={25}
                    height={25}
                  />
                  <div className="w-full py-2 2xl:py-3">
                    <p className="leading-5 bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                      Advanced risk
                      <br /> controls included
                    </p>
                    <hr className="mt-2 border-[#1B211F] w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" px-5 sm:min-w-[26rem] w-full sm:w-fit  mt-5 md:mt-12">
            <h3 className="text-center font-bold mb-2 text-3xl text-[28px]">
              Trading Yourself
            </h3>
            <div className="border px-8 py-6 rounded-[44px] text-base 2xl:text-[20px]">
              <div className="flex gap-8 2xl:gap-12 text-start my-3">
                <Image
                  src="/images/redtick.svg"
                  alt="Red Tick"
                  width={20}
                  height={20}
                />
                <div className="w-full py-2 2xl:py-3">
                  <p className=" leading-5 ">
                    Requires 40+ hours/
                    <br /> week of monitoring
                  </p>
                  <hr className="mt-2 border-[#1B211F] w-full" />
                </div>
              </div>

              <div className="flex gap-8 2xl:gap-12 text-start my-3">
                <Image
                  src="/images/redtick.svg"
                  alt="Red Tick"
                  width={20}
                  height={20}
                />
                <div className="w-full py-2 2xl:py-3">
                  <p className=" leading-5 ">
                    Requires years of
                    <br /> learning
                  </p>
                  <hr className="mt-2 border-[#1B211F] w-full" />
                </div>
              </div>

              <div className="flex gap-8 2xl:gap-12 text-start my-3">
                <Image
                  src="/images/redtick.svg"
                  alt="Red Tick"
                  width={20}
                  height={20}
                />
                <div className="w-full py-2 2xl:py-3">
                  <p className=" leading-5 ">
                    Manual execution and
                    <br /> monitoring
                  </p>
                  <hr className="mt-2 border-[#1B211F] w-full" />
                </div>
              </div>

              <div className="flex gap-8 2xl:gap-12 text-start my-3">
                <Image
                  src="/images/redtick.svg"
                  alt="Red Tick"
                  width={20}
                  height={20}
                />
                <div className="w-full py-2 2xl:py-3">
                  <p className=" leading-5 ">
                    Emotional bias and
                    <br /> guesswork
                  </p>
                  <hr className="mt-2 border-[#1B211F] w-full" />
                </div>
              </div>

              <div className="flex gap-8 2xl:gap-12 text-start my-3">
                <Image
                  src="/images/redtick.svg"
                  alt="Red Tick"
                  width={20}
                  height={20}
                />
                <div className="w-full py-2 2xl:py-3">
                  <p className=" leading-5 ">
                    Unproven, inconsistent
                    <br /> strategies
                  </p>
                  <hr className="mt-2 border-[#1B211F] w-full" />
                </div>
              </div>

              <div className="flex gap-8 2xl:gap-12 text-start my-3">
                <Image
                  src="/images/redtick.svg"
                  alt="Red Tick"
                  width={20}
                  height={20}
                />

                <div className="w-full">
                  <p className=" leading-5  py-2 2xl:py-3">
                    Inconsistent and no
                    <br /> guaranteed success
                  </p>
                  <hr className="mt-2 border-[#1B211F] w-full" />
                </div>
              </div>

              <div className="flex gap-8 2xl:gap-12 text-start my-3 ">
                <Image
                  src="/images/redtick.svg"
                  alt="Red Tick"
                  width={20}
                  height={20}
                />
                <div className="w-full py-2 2xl:py-3">
                  <p className=" leading-5 ">
                    Requires manual risk
                    <br /> management
                  </p>
                  <hr className="mt-2 border-[#1B211F] w-full " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};
