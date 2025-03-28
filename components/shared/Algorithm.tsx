"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { GoArrowUpRight } from "react-icons/go";
import FadeInSection from "@/lib/FadeInAnimation";
import { useRouter } from "next/navigation";

export const Algorithm = () => {
  const router = useRouter();
  return (
    <>
      <section id="shop">
        <div className="my-10 max-w-[90rem] mx-auto px-2 sm:px-6  md:px-10 lg:px-24 xl:px-[98px]">
          <FadeInSection>
            <div className="inline-flex flex-row gap-3 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#45F17533] to-[#00C3CE33]">
              <Image
                src="/images/welcomestar.svg"
                width={20}
                height={30}
                alt="welcome star"
              />
              <p className="text-sm 2xl:text-[16px] gap-4 bg-gradient-to-b from-customgreen to-customblue bg-clip-text uppercase text-transparent">
                Algorithms
              </p>
            </div>

            <h1 className="py-8 lexend  text-[28px] sm:text-[36px] md:text-[44px]  lg:text-[52px] leading-[32px] sm:leading-[36px] md:leading-[44px] my-3">
              <span className="bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                The Algos Field
              </span>{" "}
              Trading Solutions
            </h1>
          </FadeInSection>
          <FadeInSection>
            <div className="px-2 sm:px-4 grid grid-cols-1 max-w-4xl mx-auto  open-sans gap-6">
              <div className="lg:col-span-2">
                {Array.from({ length: 1 }).map((_, index) => (
                  <div
                    key={index}
                    className=" bg-gradient-to-b from-customgreen to-customblue bg-clip-border p-[4px] rounded-[20px]"
                  >
                    <div className="bg-[#04110D] py-8  px-[30px] md:px-[40px] rounded-[20px] h-auto ">
                      <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="flex flex-row gap-2">
                          <Image
                            src="/images/logo1.svg"
                            width={40}
                            height={20}
                            alt="Logo"
                          />
                          <div className="text-start">
                            <h1 className="text-[16px] text-start  tracking-wide capitalize font-semibold">
                              TAF Genesis
                            </h1>
                            <p className="text-customgray text-[12px]">
                              The Ultimate Strategy Trading Portfolio
                            </p>
                          </div>
                        </div>
                        <div className="w-full sm:w-auto bg-gradient-to-r from-customgreen to-customblue bg-clip-border p-[3px] rounded-lg">
                          <Button
                            className="rounded-lg uppercase text-sm px-6 md:px-12 w-full sm:w-auto py-3 bg-[#04110D]"
                            label="Most Popular"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-4 relative">
                        <div className="w-full">
                          <img
                            src="/images/portfolio.webp"
                            alt="card image"
                            className="w-full h-[200px] sm:w-auto"
                          />
                        </div>
                        <div className="ml-0 sm:ml-4 w-full lg:w-2/3 flex flex-col justify-between">
                          <div className=" md:mt-6 md:text-start w-full md:pl-6">
                            <p className="text-customgray text-[12px]  font-semibold">
                              Profit last month
                            </p>
                            <p className="text-customgreen tracking-wider  text-3xl sm:text-4xl md:text-[45px] 2xl:text-[55px] font-semibold py-6 ">
                              +3.89%
                            </p>
                          </div>
                          <div className="w-full flex flex-row gap-4 items-center">
                            <Button
                              label="Get Started"
                              onClick={() => router.push("/register")}
                              className="bg-gradient-to-r text-nowrap font-semibold py-[8px] px-[20px] md:px-[30px]  uppercase text-sm from-customgreen to-customblue text-black rounded-lg"
                            />
                            <button
                              onClick={() =>
                                router.push("/products?tab=PORTFOLIO")
                              }
                              className="flex flex-row gap-2 items-center uppercase text-nowrap p-0 text-sm"
                            >
                              <GoArrowUpRight className="text-lg" />
                              <span>LEARN MORE</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="px-2 sm:px-4 mt-5 max-w-4xl mx-auto ">
              <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
                <div className="bg-[#04110D80] px-4 py-4 rounded-[20px]">
                  <div className="flex flex-row gap-2">
                    <Image
                      src="/images/logo1.svg"
                      width={40}
                      height={20}
                      alt="Logo"
                    />
                    <div>
                      <h1 className="text-[16px] text-start capitalize font-semibold">
                        Flash Break
                      </h1>
                      <p className="text-customgray text-[12px]">
                        High-Speed Scalping for Precision Breakouts {" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 pt-3 mx-2">
                    <Image
                      src="/products/flash-break.webp"
                      width={120}
                      height={160}
                      alt="card image"
                    />
                    <div className="flex flex-col justify-end items-start w-full">
                      <div>
                        <p className="text-customgray text-[14px] font-semibold">
                          Profit last month
                        </p>
                        <p className="text-customgreen text-[34px]">+3.89%</p>
                      </div>
                      <div className="mt-4 flex gap-4 items-center">
                        <Button
                          label="Get Started"
                          onClick={() => router.push("/register")}
                          className="bg-gradient-to-r text-nowrap font-semibold py-[8px] px-[20px] text-xs   uppercase 2xl:text-sm from-customgreen to-customblue text-black rounded-lg"
                        />
                        <button
                          onClick={() =>
                            router.push("/products/flash-break/details")
                          }
                          className="flex flex-row gap-2 items-center uppercase text-nowrap p-0 text-xs 2xl:text-sm"
                        >
                          <GoArrowUpRight className="text-lg" />
                          <span>LEARN MORE</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#04110D80] px-4 py-4 rounded-[20px]">
                  <div className="flex flex-row gap-2">
                    <Image
                      src="/images/logo1.svg"
                      width={40}
                      height={20}
                      alt="Logo"
                    />
                    <div>
                      <h1 className="text-[16px] text-start capitalize font-semibold">
                        Momentum Snap
                      </h1>
                      <p className="text-customgray text-[12px]">
                        Ride Explosive Market Moves with Precision
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 pt-3 mx-2">
                    <Image
                      src="/products/momentum-snap.webp"
                      width={120}
                      height={160}
                      alt="card image"
                    />
                    <div className="flex flex-col justify-end items-start w-full">
                      <div>
                        <p className="text-customgray text-[14px] font-semibold">
                          Profit last month
                        </p>
                        <p className="text-customgreen text-[34px]">+3.89%</p>
                      </div>
                      <div className="mt-4 flex gap-4 items-center">
                        <Button
                          label="Get Started"
                          onClick={() => router.push("/register")}
                          className="bg-gradient-to-r text-nowrap font-semibold py-[8px] px-[20px] text-xs   uppercase 2xl:text-sm from-customgreen to-customblue text-black rounded-lg"
                        />
                        <button
                          onClick={() =>
                            router.push("/products/momentum-snap/details")
                          }
                          className="flex flex-row gap-2 items-center uppercase text-nowrap p-0 text-xs 2xl:text-sm"
                        >
                          <GoArrowUpRight className="text-lg" />
                          <span>LEARN MORE</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-12">
                {/* <Button
                  label="View All"
                  className="w-44 btn-shadow font-thin rounded-full py-2 text-lg border border-[#FFFFFF66]"
                  onClick={() => router.push("/products")}
                /> */}
                <div className="  bg-gradient-to-r text-lg w-44 font-semibold from-customgreen to-customblue bg-clip-border p-[2px] rounded-xl">
                  <Button
                    onClick={() => router.push("/products")}
                    className="rounded-xl text-sm px-6 md:px-12 w-full py-3 bg-[#04110D]"
                    label="View All"
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
