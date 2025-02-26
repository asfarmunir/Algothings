"use client";
import React, { useState, useEffect, useRef } from "react";
import { RxDashboard } from "react-icons/rx";
import { PiCertificate } from "react-icons/pi";
import { MdSupportAgent, MdOutlineReviews } from "react-icons/md";
import Image from "next/image";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaShareAlt, FaStar, FaQuestionCircle } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";
const Sidebar = ({
  visible,
  onClose,
}: {
  visible?: boolean;
  onClose?: () => void;
}) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const sidebarRef = useRef(null);

  const menuItems = [
    {
      href: "/dashboard",
      icon: <RxDashboard />,
      label: "Dashboard",
      img: "dashboard",
    },
    {
      href: "/subscription",
      icon: <RxDashboard />,
      label: "Subscription",
      img: "dashboard",
    },
    // { href: '/Subscription', icon: <RxDashboard />, label: 'Subscription' },
    {
      href: "/all-announcement",
      icon: <CiWallet />,
      label: "Announcements",
      img: "announcements",
    },
    {
      label: "Performance Metrics",
      icon: <FaShareAlt />,
      href: "/performance-metrics ",

      // subItems: [
      //   { href: "/performance-metrics ?key=INDIVIDUALS", label: "Individual Algos" },
      //   { href: "/performance-metrics ?key=PORTFOLIO", label: "Portfolio" },
      // ],
      img: "performance",
    },
    {
      label: "Guide",
      icon: <BsGrid1X2Fill />,
      subItems: [
        { href: "/guide", label: "Guide : 1" },
        { href: "#", label: "Guide : 2" },
        { href: "#", label: "Guide : 3" },
      ],
      img: "guide",
    },

    {
      label: "Billings and Accounts",
      icon: <PiCertificate />,
      href: "/profile-update",

      // subItems: [
      //   { href: "/profile-update", label: "Personal Info" },
      //   { href: "/billings", label: "Billing History" },
      // ],
      img: "billings",
    },

    {
      href: "/customer-support",
      icon: <MdSupportAgent />,
      label: "Customer Support",
      img: "support",
    },
    {
      icon: <FaQuestionCircle />,
      label: "FAQs",
      href: "/faq",
      // subItems: [
      //   { href: "/faq", label: "FAQ 1" },
      //   { href: "/faq", label: "FAQ 2" },
      // ],
      img: "faqs",
    },
  ];

  const handleToggle = (label: any) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        sidebarRef.current && // Ensure the ref is defined
        !sidebarRef.current.contains(event.target) // Click is outside sidebar
      ) {
        if (onClose) onClose(); // Call the onClose prop
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const pathname = usePathname();

  return (
    <div
      ref={sidebarRef}
      className={`h-screen relative w-56 2xl:w-60 px-2  bg-transparent text-white border border-[#FFFFFF1A] flex-col overflow-y-auto scrollbar-none ${
        visible ? "block" : "hidden"
      } md:block`} // Hide on small screens unless visible is true
    >
      {/* Logo */}
      <Link
        href={"/"}
        className="flex flex-row items-center justify-center py-5"
      >
        <Image
          src="/images/logo.svg"
          width={140}
          height={100}
          alt="logo image"
        />
      </Link>

      {/* Menu Links */}
      <nav className="flex-grow">
        <ul className="space-y-2 2xl:space-y-4 font-medium font-gilroy my-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <div>
                <Link
                  href={item.href || "#"}
                  onClick={(e) => {
                    if (item.subItems) {
                      e.preventDefault();
                      handleToggle(item.label);
                    }
                  }}
                  className={`flex text-base items-center p-2 px-3  rounded-lg  hover:bg-customcard group
                    ${
                      pathname === item.href
                        ? "bg-gradient-to-br from-customblue to-customgreen text-black font-semibold"
                        : "text-white"
                    }
                    `}
                >
                  <Image
                    src={`/icons/${item.img}.svg`}
                    width={20}
                    height={20}
                    className={`
                    ${pathname === item.href ? "invert" : ""}
                      `}
                    alt={item.label}
                  />
                  <span className="ms-3 text-xs 2xl:text-base">
                    {item.label}
                  </span>
                </Link>
                {/* Sub-items */}
                {item.subItems && activeMenu === item.label && (
                  <ul className="ml-6 mt-2 space-y-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          className="text-sm text-white pl-4 inline-flex items-center 
                           gap-2 hover:text-white"
                        >
                          <FaChevronRight className="text-xs 2xl:text-sm  text-slate-50" />

                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <Link
        href={"/"}
        className=" absolute bottom-5 text-sm 2xl:text-base mt-auto bg-gradient-to-r w-[95%] gap-4 from-[#45F175]/50 to-[#00C3CE]/50 inline-flex items-center justify-center  text-white text-center  rounded-lg  py-3 2xl:py-4"
      >
        <Image
          src="/images/discord3.svg"
          width={28}
          height={28}
          alt="discord"
        />
        Discord Community
      </Link>
    </div>
  );
};

export default Sidebar;
