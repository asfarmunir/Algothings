"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Sidebar from "@/components/shared/Sidebar";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import React, { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import FadeInSection from "@/lib/FadeInAnimation";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
export default function AllProduct({ searchParams }: { searchParams: any }) {
  const unwrappedSearchParams = React.use(searchParams);
  //@ts-ignore
  const tab = unwrappedSearchParams.tab || "INDIVIDUALS";
  const [activeButton, setActiveButton] = useState(tab || "INDIVIDUALS");

  return (
    <div className="flex flex-col w-full h-full">
      {/* Dashboard Navbar: Static and non-scrollable */}
      <Navbar />
      {/* Details Section: Scrollable */}
      <FadeInSection>
        <div className="p-4 overflow-y-auto scrollbar-thin scrollbar-track-customcard scrollbar-thumb-customgreen">
          <div className="flex justify-center items-center">
            <div className="inline-flex bg-gradient-to-r from-customgreen to-customblue p-[1px] rounded-xl">
              <div className="bg-black rounded-xl p-1 flex">
                <button
                  onClick={() => setActiveButton("INDIVIDUALS")}
                  className={`${
                    activeButton === "INDIVIDUALS"
                      ? "bg-gradient-to-r from-customgreen to-customblue text-black"
                      : "bg-black text-white"
                  } rounded-md px-4 py-2 `}
                >
                  INDIVIDUALS
                </button>
                <button
                  onClick={() => setActiveButton("PORTFOLIO")}
                  className={`${
                    activeButton === "PORTFOLIO"
                      ? "bg-gradient-to-r from-customgreen to-customblue text-black"
                      : "bg-black text-white"
                  } rounded-md px-4 py-2 text-[16px]`}
                >
                  PORTFOLIO
                </button>
              </div>
            </div>
          </div>
          {activeButton === "INDIVIDUALS" ? (
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 pb-12 mt-6 md:px-4 2xl:px-10 2xl:mt-8">
              {Array.from({ length: 15 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-[#04110D80] py-3 px-5 rounded-lg  "
                >
                  <div className="flex flex-row gap-1">
                    <Image
                      src="/images/logo1.svg"
                      width={30}
                      height={20}
                      alt="Logo"
                      className="
                  2xl:w-20 2xl:h-14"
                    />
                    <div>
                      <h1 className="text-sm md:text-[10px] 2xl:text-base uppercase font-semibold">
                        Momentum Snap
                      </h1>
                      <p className="text-customgray text-xs md:text-[10px] 2xl:text-sm">
                        For E-mini (NQ) and Micro (MNQ) Nasdaq 100 index
                      </p>
                    </div>
                  </div>
                  <div className="mx-8 md:mx-2 flex flex-row justify-between gap-4 pt-4">
                    <Image
                      src="/images/book.webp"
                      width={100}
                      height={140}
                      alt="card image"
                    />

                    <div className="flex flex-col justify-center">
                      <p className="text-customgray text-md  font-semibold">
                        Profit last month
                      </p>
                      <p className="text-customgreen text-2xl 2xl:text-4xl  md:mt:0 md:text-base">
                        +3.89%
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 md:mt-4 flex flex-row gap-8 md:gap-4 items-center">
                    <Link
                      href={"/login"}
                      className="bg-gradient-to-r py-2 px-5 font-semibold text-nowrap uppercase text-xs from-customgreen to-customblue text-black rounded-md "
                    >
                      Get Started
                    </Link>

                    <Link
                      href={"/products/1/details"}
                      className="flex flex-row gap-2 items-center uppercase text-nowrap p-0 text-sm"
                    >
                      <GoArrowUpRight className="text-lg" />
                      <span>LEARN MORE</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-10 grid grid-cols-1 pb-12 md:grid-cols-2 gap-6 2xl:gap-8 md:px-4 2xl:px-10">
              {Array.from({ length: 4 }).map((_, index) => (
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
                            Portfolio Strategy
                          </h1>
                          <p className="text-customgray text-[12px]">
                            This portfolio integrates all 10 strategies,
                            delivering a range
                          </p>
                        </div>
                      </div>
                      <div className="w-full sm:w-auto bg-gradient-to-r from-customgreen to-customblue bg-clip-border p-[1px] rounded-lg">
                        <Button
                          className="rounded-lg text-sm px-6 md:px-12 w-full sm:w-auto py-3 bg-[#04110D]"
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
                          <Link
                            href={"/login"}
                            className="bg-gradient-to-r py-2 px-5 font-semibold text-nowrap uppercase text-xs from-customgreen to-customblue text-black rounded-md "
                          >
                            Get Started
                          </Link>
                          <button className="flex flex-row gap-2 items-center uppercase text-nowrap p-0 text-sm">
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
          )}
        </div>
      </FadeInSection>
    </div>
  );
}
