"use client";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import { Plans } from "@/components/shared/plans";
import Sidebar from "@/components/shared/Sidebar";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

import { GrAnnounce } from "react-icons/gr";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { SubscriptionProps } from "@/lib/database/subscription.model";

export default function Dashboard({
  userSubscriptions,
}: {
  userSubscriptions: SubscriptionProps[];
}) {
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
          <div className="p-6 overflow-y-auto max-w-[100rem] scrollbar-thin scrollbar-track-customcard scrollbar-thumb-customgreen">
            <div className="flex-grow ">
              <div className=" bg-gradient-to-r from-customgreen to-customblue bg-clip-border p-[1px] rounded-md">
                <div className="bg-[#04110D] rounded-md p-3 flex flex-row gap-5 items-center justify-between">
                  <p className="flex flex-row gap-3 text-sm lg:text-base items-center bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                    <GrAnnounce className="text-customgreen" />
                    Limited-Time Offer: 1 Month Free! Register by April 30th and
                    get 1 month of free access.
                    <Link
                      href={"/all-announcement"}
                      className=" hidden sm:block underline border-b border-customblue font-bold "
                    >
                      Learn more
                    </Link>
                  </p>
                  <RxCross2 className="text-customblue" />
                </div>
              </div>

              <h1 className="font-bold text-2xl 2xl:text-3xl my-5">
                Welcome Back!
              </h1>

              <div className="w-full flex flex-col lg:flex-row h-auto gap-6">
                <div className=" w-full lg:w-2/3 relative">
                  <div className="absolute inset-0 rounded-2xl z-0 bg-[#04110DD9]">
                    <Image
                      src="/images/hero.svg"
                      layout="fill" // Ensures the image covers the container
                      objectFit="cover" // Keeps the aspect ratio and fills the area
                      alt="background image"
                      className="rounded-2xl"
                    />
                  </div>

                  <div className="relative z-10 p-6 2xl:p-9">
                    <h1 className="bg-gradient-to-r text-4xl tracking-wide font-semibold from-[#45F175CC] to-[#00C3CECC] bg-clip-text text-transparent">
                      Trade Smarter, Not Harder{" "}
                    </h1>
                    <p className="py-3 font-light">
                      Unleash your trading potential with cutting-edge
                      automation, risk control, and performance-driven
                      strategies designed to grow your wealth.{" "}
                      <strong>—100% hands-free.</strong>
                    </p>
                    <div className="flex flex-row gap-4">
                      <Button
                        onClick={() =>
                          router.push("https://discord.gg/TJnaMHpw")
                        }
                        label="Join our Discord"
                        className="bg-gradient-to-r from-customgreen to-customblue text-black rounded-lg"
                      />

                      <div className="inline-flex flex-row items-center p-[1px] bg-gradient-to-r from-customgreen to-customblue bg-clip-border  rounded-lg">
                        <div className="inline-flex flex-row items-center bg-black rounded-lg gap-1 pr-3 py-1">
                          <Button
                            label="Choose Plan"
                            onClick={() => router.push("/getting-started")}
                            className="bg-gradient-to-b px-0 from-customgreen to-customblue bg-clip-text text-transparent py-1"
                          />
                          <Image
                            src="/images/arrow.svg"
                            width={16}
                            height={16}
                            alt="arrow icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" w-full lg:w-1/3">
                  <div className="bg-gradient-to-b from-[#00C3CE]/50 to-black h-full rounded-2xl p-5 w-full flex flex-col items-center">
                    <Image
                      src="/images/logo1.svg"
                      alt="logo"
                      width={30}
                      height={30}
                    />

                    <h3 className="text-xl py-3 font-semibold">
                      €300 Discount!!!
                    </h3>
                    <p className="text-center uppercase bg-gradient-to-r from-customgreen to-customblue bg-clip-text font-semibold text-transparent text-xs">
                      Get access to all{" "}
                      <strong>
                        {" "}
                        10 algorithms in a single, powerful strategy{" "}
                      </strong>{" "}
                      and start trading like a pro.
                    </p>

                    <Button
                      onClick={() => router.push("/products?tab=PORTFOLIO")}
                      label="Get Started!!!"
                      className="lexend bg-gradient-to-r from-customgreen to-customblue text-black rounded-md my-4"
                    />
                  </div>
                </div>
              </div>

              <div className="my-5">
                <h1 className="text-2xl 2xl:text-3xl font-bold">My Algos</h1>
                {/* <div className="mt-3 flex flex-row gap-3 text-sm">
                  <button>All</button>
                  <button>Active</button>
                  <button>History</button>
                </div> */}

                {!userSubscriptions.length && (
                  <div className="flex py-10 2xl:py-16 items-center flex-col justify-center">
                    <Image
                      src="/logo.svg"
                      alt="logo"
                      width={100}
                      height={100}
                      className="
                      w-[80px] h-[80px]
                      2xl:w-[100px] 2xl:h-[100px]
                      "
                    />
                    <h1 className="text-xl">No Active Subscriptions</h1>
                  </div>
                )}

                <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mt-4 p-2 2xl:p-4">
                  {userSubscriptions.map((subscription, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-[#45F1751A] to-[#00C3CE1A] p-[20px] rounded-[20px]"
                    >
                      <div className="flex flex-row items-center justify-between gap-1">
                        <div className="flex flex-row items-center gap-3">
                          <Image
                            src="/images/logo1.svg"
                            width={30}
                            height={20}
                            className="
                             2xl:w-[40px] 2xl:h-[40px]
                            "
                            alt="Logo"
                          />

                          <h1 className="text-sm md:text-sm uppercase font-semibold">
                            {subscription.productName}
                          </h1>
                        </div>
                        <div className="bg-gradient-to-b from-[#45F175] to-[#00C3CE] bg-clip-border p-[1px]  rounded-full ">
                          <h3 className="bg-gradient-to-r from-[#45F175] to-[#00C3CE]  text-black px-6 py-1 rounded-full">
                            Active
                          </h3>
                        </div>
                      </div>
                      <div className="flex flex-row gap-3 mt-8">
                        <div className="w-full bg-[#FFFFFF1A] py-3 rounded-full flex gap-1 justify-center flex-col xl:flex-row text-center text-sm">
                          <p className="text-[#FFFFFF80] pr-1">Start Date:</p>{" "}
                          <p className="text-[#FFFFFF] pr-1">
                            {subscription.startDate.toString().split("T")[0]}
                          </p>
                        </div>
                        <div className="w-full bg-[#FFFFFF1A] py-3 rounded-full flex gap-1 justify-center flex-col xl:flex-row text-center text-sm">
                          <p className="text-[#FFFFFF80] pr-1">End Date:</p>{" "}
                          <p className="text-[#FFFFFF] pr-1">
                            {subscription.endDate.toString().split("T")[0]}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* {Array.from({ length: 3 }).map((_, index) => (
                                    <div key={index} className="flex mt-2 flex-row gap-4 py-2">


                                        <div className="text-xs ">
                                            <p className="bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent">Today</p>
                                            <p className="bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent">3:00pm</p>
                                        </div>

                                        <div className="border-l pl-4  lg:pr-16 border-[#7C7C7C]">
                                            <h1 className="text-base font-semibold">Welcome to the Era od Zero</h1>
                                            <p className="text-sm font-light">Welcome to the Era od ZeroWelcome to the Era od ZeroWelcome to the Era od ZeroWelcome to the Era od ZeroWelcome to the Era od Zero Welcome to the Era od Zero</p>
                                        </div>
                                    </div>
                                    ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
