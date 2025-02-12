import React from "react";
import Link from "next/link";
import Sidebar from "@/components/shared/Sidebar";
import DashboardNavbar from "@/components/shared/DashboardNavbar";

export default function AllAnnouncement() {
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
          <div className="flex-grow px-8 py-4 gradient-corners-main overflow-y-auto scrollbar-thin scrollbar-track-customcard scrollbar-thumb-customgreen">
            <div className="my-5">
              <h1 className="text-2xl font-bold">Announcement</h1>
              <div className="my-5">
                <Link href={""}>All</Link>
              </div>
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="flex mt-2 flex-row gap-4 2xl:gap-6 py-2"
                >
                  <div className="text-xs 2xl:text-sm ">
                    <p className="bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent">
                      Today
                    </p>
                    <p className="bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent">
                      3:00pm
                    </p>
                  </div>

                  <div className="border-l pl-4 2xl:pl-8 pr-4 md:pr-16 border-[#7C7C7C]">
                    <h1 className="text-lg 2xl:text-xl font-semibold">
                      Welcome to the Era od Zero
                    </h1>
                    <p className="text-sm 2xl:text-base font-light">
                      Welcome to the Era od ZeroWelcome to the Era od
                      ZeroWelcome to the Era od ZeroWelcome to the Era od
                      ZeroWelcome to the Era od Zero Welcome to the Era od Zero
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
