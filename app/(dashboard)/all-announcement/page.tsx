"use client";
import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/shared/Sidebar";
import DashboardNavbar from "@/components/shared/DashboardNavbar";

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

  const handleAnnouncementClick = (announcement) => {
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
              {announcements.map((announcement) => (
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
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedAnnouncement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-green-950 px-8 py-6 rounded-lg max-w-2xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                {selectedAnnouncement.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-100 hover:text-gray-700"
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
            <p className="text-sm text-gray-100 mb-2">
              {selectedAnnouncement.date} at {selectedAnnouncement.time}
            </p>
            <p className="text-gray-100 text-base">
              {selectedAnnouncement.content}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
