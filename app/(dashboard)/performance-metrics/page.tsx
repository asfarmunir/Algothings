"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Sidebar from "@/components/shared/Sidebar";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Dropdown from "@/components/ui/Dropdown";
import { GoArrowUpRight } from "react-icons/go";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import products from "@/lib/products";
export default function AllProduct({ searchParams }: { searchParams: any }) {
  const unwrappedSearchParams = React.use(searchParams);
  //@ts-ignore
  const type = unwrappedSearchParams.key || "INDIVIDUALS";
  const [activeButton, setActiveButton] = useState(type);
  const router = useRouter();
  return (
    <>
      <div className="flex flex-row h-screen">
        {/* Sidebar: Static and non-scrollable */}
        <div className="flex-shrink-0">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full h-full">
          {/* Dashboard Navbar: Static and non-scrollable */}
          <DashboardNavbar />
          {/* Details Section: Scrollable */}
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

            {activeButton === "PORTFOLIO" ? (
              <div className="py-10 pb-12  gap-6 2xl:gap-8 md:px-4 2xl:px-10">
                {Array.from({ length: 1 }).map((_, index) => (
                  <div
                    key={index}
                    className=" bg-gradient-to-b max-w-4xl mx-auto from-customgreen to-customblue bg-clip-border p-[4px] rounded-[20px]"
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
                            {/* <Link
                              href={"/login"}
                              className="bg-gradient-to-r py-2 px-5 font-semibold text-nowrap uppercase text-xs from-customgreen to-customblue text-black rounded-md "
                            >
                              Get Started
                            </Link>
                            <button className="flex flex-row gap-2 items-center uppercase text-nowrap p-0 text-sm">
                              <GoArrowUpRight className="text-lg" />
                              <span>LEARN MORE</span>
                            </button> */}
                            <div className="sm:mt-4 w-full  flex flex-row gap-8 md:gap-2 items-center">
                              <Button
                                onClick={() =>
                                  router.push("/performance-summary")
                                }
                                label="Performance Metrics"
                                className="bg-gradient-to-r py-2 md:py-4 text-nowrap uppercase text-[0.7rem] sm:text-xs md:text-sm 2xl:text-base w-full from-customgreen to-customblue text-black rounded-md "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-3 mt-5">
                {products.map((prod, index) => (
                  <div
                    key={index}
                    className="bg-[#04110D80] py-3 px-3 rounded-lg  "
                  >
                    <div className="flex flex-row gap-1">
                      <Image
                        src="/images/logo1.svg"
                        width={30}
                        height={20}
                        alt="Logo"
                      />
                      <div>
                        <h1 className="text-sm md:text-[10px] uppercase font-semibold">
                          {prod.title}
                        </h1>
                        <p className="text-customgray text-xs md:text-[10px]">
                          {prod.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="mx-8 md:mx-2 flex flex-row justify-start gap-4 pt-4">
                      <Image
                        src={`/products/${prod.id}.webp`}
                        width={100}
                        height={140}
                        alt="card image"
                      />

                      <div className="flex flex-col gap-4 justify-end">
                        <div>
                          <p className="text-customgray text-xs 2xl:text-sm  font-semibold">
                            Profit last month
                          </p>
                          <p className="text-customgreen 2xl:text-2xl font-semibold text-lg md:mt:0 md:text-xl">
                            +3.89%
                          </p>
                        </div>
                        <div className="sm:mt-4 flex flex-row gap-8 md:gap-2 items-center">
                          <Button
                            onClick={() =>
                              router.push(`/performance-summary/${prod.id}`)
                            }
                            label="Performance Metrics"
                            className="bg-gradient-to-r py-2 text-nowrap uppercase text-[0.7rem] sm:text-xs from-customgreen to-customblue text-black rounded-md "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
