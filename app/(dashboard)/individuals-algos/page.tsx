"use client";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import { Plans } from "@/components/shared/plans";
import Sidebar from "@/components/shared/Sidebar";
import Dropdown from "@/components/ui/Dropdown";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdRemoveCircle, IoMdRemoveCircleOutline } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Algorithm() {
  const [activeButton, setActiveButton] = useState("Monthly");

  const handleSelect = (plan: string) => {
    console.log("values is", plan);
  };
  const router = useRouter();

  const handleplan = (plan: string) => {
    console.log("select filter", plan);
  };
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar: Static and non-scrollable */}
        <div className="">
          <Sidebar />
        </div>
        <div className="flex-grow flex flex-col">
          {/* Dashboard Navbar: Static and non-scrollable */}

          <DashboardNavbar />

          {/* Details Section: Scrollable */}
          <div className="flex-grow  overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-customcard scrollbar-thumb-customgreen">
            <div className="p-5 mt-4 flex flex-col-reverse lg:flex-row gap-12 lg:gap-4 mb-2 ">
              <div className="w-full lg:w-[70%] ">
                <h1 className="text-[24px] font-semibold">
                  <span className="bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                    Individual Algorithms
                  </span>{" "}
                  : Select Your Preferred Strategies
                </h1>
                <div className="grid  grid-cols-1 md:grid-cols-2  gap-3 md:gap-6 lg:gap-3 mt-5">
                  {Array.from({ length: 15 }).map((_, index) => (
                    <div
                      key={index}
                      className="bg-[#04110D80] py-3 px-4 rounded-lg"
                    >
                      <div className="flex flex-row gap-1">
                        <Image
                          src="/images/logo1.svg"
                          width={30}
                          height={30}
                          alt="Logo"
                        />
                        <div>
                          <h1 className="text-sm md:text-[10px] uppercase font-semibold">
                            Trend Hunters
                          </h1>
                          <p className="text-customgray text-xs md:text-[9px]">
                            For E-mini (NQ) and Micro (MNQ) Nasdaq 100 index
                          </p>
                        </div>
                      </div>
                      <div className="mx-8 md:mx-0 flex flex-row justify-evenly gap-4 pt-4">
                        <Image
                          src="/images/book.webp"
                          width={100}
                          height={140}
                          alt="card image"
                        />

                        <div className="flex flex-col  justify-end">
                          <div>
                            <p className="text-customgray text-sm sm:text-md  font-semibold">
                              Profit last month
                            </p>
                            <p className="text-customgreen text-xl md:text-2xl   md:mt:0 ">
                              +3.89%
                            </p>
                          </div>
                          <div className="mt-5 flex flex-col-reverse sm:flex-row gap-2 md:gap-4 sm:items-center">
                            <Link
                              href={"/login"}
                              className="bg-gradient-to-r py-2 px-3 font-semibold text-nowrap uppercase text-[10px] 2xl:text-xs from-customgreen to-customblue text-black rounded-md "
                            >
                              Add to cart
                            </Link>

                            <Link
                              href={"/products/1/details"}
                              className="flex flex-row gap-1 2xl:gap-2 items-center uppercase text-nowrap p-0 text-[10px]  2xl:text-sm"
                            >
                              <GoArrowUpRight className="text-lg" />
                              <span>LEARN MORE</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className=" w-full lg:w-[30%] max-w-xl">
                <h1 className="text-3xl lg:text-2xl font-semibold">Cart</h1>
                <div className="py-1">
                  <p className="text-sm py-2">Choose Trading Platform</p>
                  <div className=" w-80">
                    <Dropdown
                      options={["Select 1", "Select 2", "Select 3"]}
                      onSelect={handleSelect}
                      placeholder="Select Platform"
                      className="bg-[#03100C] py-2  text-sm w-full"
                      textclassName=""
                      dropdownClass=" w-60 lg:w-44"
                    />
                  </div>
                  <div className="text-end my-2">
                    <Link
                      href={""}
                      className="text-xs 2xl:text-sm hover:underline"
                    >
                      Remove All
                    </Link>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Item 1 */}
                    {Array.from({ length: 2 }).map((_, item) => (
                      <div
                        key={item}
                        className="bg-[#03100C] py-2 px-4 lg:px-2 rounded-lg flex flex-row gap-3"
                      >
                        <Image
                          src="/images/logo1.svg"
                          width={35}
                          height={20}
                          alt="Logo"
                        />
                        <div className="w-full flex flex-col gap-2">
                          <div className="flex flex-row justify-between  ">
                            <p className="truncate text-sm lg:text-xs">
                              Asuras Dragonair Bot
                            </p>
                            <p className="text-sm lg:text-xs">$148</p>
                          </div>
                          <div className="w-full flex flex-row justify-between gap-16 items-center">
                            <p className="text-customgray text-nowrap text-sm lg:text-[10px]">
                              Profit Target
                            </p>
                            <div>
                              {/* <Dropdown
                                options={["0", "1", "2", "3"]}
                                onSelect={handleSelect}
                                placeholder="1"
                                className="bg-[#D9D9D91A] text-sm lg:text-xs w-[50px] border border-black text-center"
                              /> */}
                              <button>
                                <IoMdRemoveCircleOutline className="text-xl text-customgreen" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="flex justify-center items-center">
                      <div className="inline-flex bg-gradient-to-r from-customgreen to-customblue p-[1px] rounded-xl">
                        <div className="bg-black rounded-xl p-1 flex">
                          <button
                            onClick={() => setActiveButton("Monthly")}
                            className={`${
                              activeButton === "Monthly"
                                ? "bg-gradient-to-r from-customgreen to-customblue text-black"
                                : "bg-black text-white"
                            } rounded-md px-4 py-1 `}
                          >
                            Monthly
                          </button>
                          <button
                            onClick={() => setActiveButton("Annually")}
                            className={`${
                              activeButton === "Annually"
                                ? "bg-gradient-to-r from-customgreen to-customblue text-black"
                                : "bg-black text-white"
                            } rounded-md px-4 py-1 text-[14px]`}
                          >
                            Annually(-10%)
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* details */}
                    <p className="uppercase  text-sm md:text-[10px] leading-tight bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent text-center">
                      Want access to all 10 algorithms in a <br />
                      single, powerful strategy?
                    </p>

                    <div className="bg-gradient-to-r from-customgreen to-customblue p-2 rounded-lg">
                      <h1 className="text-sm uppercase text-center font-semibold tracking-wider mb-1 ">
                        BEST Deal
                      </h1>
                      <div className="bg-[#04110D] rounded-lg p-2 flex flex-row items-center justify-between">
                        <div>
                          <p className=" line-through text-customgreen text-sm">
                            $997
                          </p>
                          <p>
                            <span className=" bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent text-base font-bold ">
                              $697
                            </span>{" "}
                            <span className=" bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent text-xs">
                              /month
                            </span>
                          </p>
                        </div>

                        <div className="">
                          <Button
                            label="Switch Plan"
                            className="bg-gradient-to-b  p-2 rounded-lg text-black text-xs lexend from-customgreen to-customblue"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex flex-row justify-between gap-5">
                        <p className="text-customlightgray">Subtotal</p>
                        <p>$200</p>
                      </div>
                      <div className="flex flex-row justify-between gap-5">
                        <p className="text-customlightgray">Tax</p>
                        <p>$0.00</p>
                      </div>
                      <div className="flex flex-row justify-between gap-5">
                        <p className="text-customlightgray">Total</p>
                        <p className="font-semibold">$208</p>
                      </div>
                    </div>

                    <div className="flex justify-center items-center w-full border-b border-customgray pb-5">
                      <div className="inline-flex bg-gradient-to-r w-full from-customgreen to-customblue p-[1px] rounded-xl">
                        <input
                          type="text"
                          placeholder="Coupon Code"
                          className="rounded-tl-xl rounded-bl-xl bg-black text-sm lg:text-xs w-full  text-center focus:outline-none"
                        />

                        <div className="bg-black rounded-tr-xl rounded-br-xl p-1 flex">
                          <button
                            className={`bg-gradient-to-r text-xs 2xl:text-sm from-customgreen to-customblue text-black
                               rounded-md px-6 hover:px-8 transition-all py-2 `}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>

                    <Button
                      label="Checkout"
                      onClick={() => router.push("/billings")}
                      className="bg-gradient-to-r  from-customgreen to-customblue py-2 2xl:py-3 text-sm  2xl:text-base text-black font-semibold rounded-md w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
