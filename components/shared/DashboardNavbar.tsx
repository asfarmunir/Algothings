"use client";
import React, { useState } from "react";
import Dropdown from "../ui/Dropdown";
import Image from "next/image";
import Sidebar from "./Sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const DashboardNavbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const router = useRouter();
  const handleSidebarToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleSidebarClose = () => {
    setSidebarVisible(false); // This function will be passed as onClose
  };
  const handleSelect = () => {
    console.log("heelo");
  };
  const signOutUser = async () => {
    await signOut({
      redirect: false,
      callbackUrl: "/login",
    });
    toast.success("Signed out successfully");
    router.refresh();
    router.replace("/login");
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
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 px-4">
                  Ali Hassan
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" border-none bg-green-800 mt-4 mr-4">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuItem>Billing and Accounts</DropdownMenuItem>
                  <DropdownMenuItem>Join Community</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOutUser}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
