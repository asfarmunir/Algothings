"use client";

import DashboardNavbar from "@/components/shared/DashboardNavbar";
import { Plans } from "@/components/shared/plans";
import Sidebar from "@/components/shared/Sidebar";
import Dropdown from "@/components/ui/Dropdown";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import FadeInSection from "@/lib/FadeInAnimation";
import CardAnimation from "@/lib/CardAnimations";
import { Intermediate, master } from "@/lib/constants";
import { BsInfoCircle } from "react-icons/bs";
import Checkbox from "@/components/ui/Checkbox";
import { useRouter } from "next/navigation";
import Pricing from "@/components/shared/Pricing";
export default function Algorithm() {
  const [activePlan, setActivePlan] = useState("Annual");
  const router = useRouter();
  const handlePlanChange = (plan: string) => {
    setActivePlan(plan);
  };
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const showTooltip = () => setIsTooltipVisible(true);
  const hideTooltip = () => setIsTooltipVisible(false);

  return (
    <>
      <div className="flex h-screen">
        {" "}
        {/* Prevent horizontal scrolling */}
        {/* Sidebar */}
        <div className="">
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="flex-grow flex flex-col">
          {/* Dashboard Navbar */}
          <DashboardNavbar />

          {/* Content Section */}
          <Pricing />
        </div>
      </div>
    </>
  );
}
