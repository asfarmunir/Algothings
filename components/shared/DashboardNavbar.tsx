"use client";
import React, { useState } from "react";
import Dropdown from "../ui/Dropdown";
import Image from "next/image";
import Sidebar from "./Sidebar";

const DashboardNavbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleSidebarClose = () => {
    setSidebarVisible(false); // This function will be passed as onClose
  };
  const handleSelect = () => {
    console.log("heelo");
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`lg:hidden ${
          sidebarVisible ? "block" : "hidden"
        } fixed w-60 inset-0 lg:relative z-50 bg-black`}
      >
        <Sidebar
          visible={sidebarVisible}
          onClose={handleSidebarClose} // Pass the function here
        />
      </div>

      {/* Navbar */}
      <div className="bg-transparent shadow-md py-4 px-3 flex flex-row justify-between items-center border border-[#FFFFFF1A]">
        <div>
          <button
            className="text-white text-2xl md:hidden"
            onClick={handleSidebarToggle}
          >
            ☰
          </button>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center">
            <Image
              src="/images/profile.png"
              width={35}
              height={35}
              className="rounded-full"
              alt="profile"
            />
            <div>
              <Dropdown
                options={["Billing and Accounts", "Logout"]}
                placeholder="Ali Hassan"
                className="w-28 text-xs 2xl:text-sm bg-transparent "
                onSelect={handleSelect}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
