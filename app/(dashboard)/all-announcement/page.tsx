"use client";
import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/shared/Sidebar";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Button from "@/components/ui/Button";

export default function AllAnnouncement() {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const announcements = Array.from({ length: 8 }).map((_, index) => ({
    id: index,
    title: "Welcome to the Era of Zero",
    content:
      "Welcome to the Era of ZeroWelcome to the Era of ZeroWelcome to the Era of ZeroWelcome to the Era of ZeroWelcome to the Era of Zero Welcome to the Era of Zero",
    date: "Today",
    time: "3:00pm",
  }));

  const handleAnnouncementClick = (announcement: any) => {
    setSelectedAnnouncement(announcement);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAnnouncement(null);
  };

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
              {/* {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="flex mt-2 flex-row gap-4 2xl:gap-6 py-2 cursor-pointer"
                  onClick={() => handleAnnouncementClick(announcement)}
                >
                  <div className="text-xs 2xl:text-sm ">
                    <p className="bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent">
                      {announcement.date}
                    </p>
                    <p className="bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent">
                      {announcement.time}
                    </p>
                  </div>

                  <div className="border-l pl-4 2xl:pl-8 pr-4 md:pr-16 border-[#7C7C7C]">
                    <h1 className="text-lg 2xl:text-xl font-semibold">
                      {announcement.title}
                    </h1>
                    <p className="text-sm 2xl:text-base font-light">
                      {announcement.content}
                    </p>
                  </div>
                </div>
              ))} */}
              <div
                className="flex mt-2 flex-row gap-4 2xl:gap-6 py-2 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
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
                    Limited-Time Offer: 1 Month Free Access!
                  </h1>
                  <p className="text-sm 2xl:text-base font-light">
                    To celebrate the launch of The Algos Field, we’re offering 1
                    month of full access completely free to all members who
                    register before April 30th.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-green-950 px-8 py-6 rounded-lg max-w-2xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                {/* {selectedAnnouncement.title} */}
                Limited-Time Offer: 1 Month Free Access!
              </h2>
              <button
                onClick={closeModal}
                className=" text-customlight hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm  text-customlight mb-2">
              {/* {selectedAnnouncement.date} at {selectedAnnouncement.time} */}
              Today at 3:00pm
            </p>
            <p className=" text-customlight text-base">
              {/* {selectedAnnouncement.content} */}
              To celebrate the launch of The Algos Field, we’re offering 1 month
              of full access completely free to all members who register before
              April 30th.
            </p>
            <div className=" py-6 rounded-lg shadow-lg text-start">
              <h2 className="text-xl font-bold text-customlight">
                What This Means for You:
              </h2>
              <ul className="mt-4 space-y-2 text-white">
                <li className="flex items-center justify-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>Sign up anytime in April</span>
                </li>
                <li className="flex items-center justify-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>
                    Get 1 month of free access to your preferred trading
                    strategy
                  </span>
                </li>
                <li className="flex items-center justify-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <span>
                    No commitments, no hidden fees—just plug in and start
                    trading
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-customgreen font-semibold">
                This exclusive offer is only available until the end of April,
                so don’t miss out on risk-free access to fully automated
                trading!
              </p>
              <Link href={"/subscription"}>
                <Button
                  label="Get Started!!!"
                  className="lexend bg-gradient-to-r from-customgreen py-2  px-6 to-customblue text-black rounded-md mt-4"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
