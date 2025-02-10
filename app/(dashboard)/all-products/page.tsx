'use client';
import Image from "next/image"
import Button from "@/components/ui/Button";
import Sidebar from "@/components/shared/Sidebar";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Dropdown from "@/components/ui/Dropdown";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
export default function AllProduct() {
    const [activeButton, setActiveButton] = useState("INDIVIDUALS");

    const handleSelect = (plan: string) => {
        console.log('select filter', plan);
    }
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
                                        className={`${activeButton === "INDIVIDUALS"
                                                ? "bg-gradient-to-r from-customgreen to-customblue text-black"
                                                : "bg-black text-white"
                                            } rounded-md px-4 py-2 `}
                                    >
                                        INDIVIDUALS
                                    </button>
                                    <button
                                        onClick={() => setActiveButton("PORTFOLIO")}
                                        className={`${activeButton === "PORTFOLIO"
                                                ? "bg-gradient-to-r from-customgreen to-customblue text-black"
                                                : "bg-black text-white"
                                            } rounded-md px-4 py-2 text-[16px]`}
                                    >
                                        PORTFOLIO
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-3 mt-5">
                            {Array.from({ length: 15 }).map((_, index) =>
                                <div key={index} className="bg-[#04110D80] py-3 px-5 rounded-lg  ">
                                    <div className="flex flex-row gap-1">
                                        <Image src="/images/logo1.svg" width={30} height={20} alt="Logo" />
                                        <div>
                                            <h1 className="text-sm md:text-[10px] uppercase font-semibold">Momentum Snap</h1>
                                            <p className="text-customgray text-xs md:text-[10px]">For E-mini (NQ) and Micro (MNQ) Nasdaq 100 index</p>
                                        </div>
                                    </div>
                                    <div className="mx-8 md:mx-2 flex flex-row justify-between gap-4 pt-4">
                                        <Image src="/images/book.svg" width={100} height={140} alt="card image" />

                                        <div className="flex flex-col justify-center">
                                            <p className="text-customgray text-md md:text-xs font-semibold">Profit last month</p>
                                            <p className="text-customgreen text-2xl  md:mt:0 md:text-base">+3.89%</p>
                                        </div>
                                    </div>
                                    <div className="mt-8 md:mt-4 flex flex-row gap-8 md:gap-2 items-center">
                                        <Button label="Performance Metrics" className="bg-gradient-to-r py-2 text-nowrap uppercase text-xs from-customgreen to-customblue text-black rounded-md " />


                                    </div>

                                </div>)}
                        </div>

                    </div>
                </div>
            </div>





        </>
    )
}