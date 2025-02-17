"use client";
import Image from "next/image";
// import { Navbar_links } from "@/lib/constants";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import Button from "../ui/Button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Update the active section on scroll
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll("section");
  //     let currentSection = "";

  //     sections.forEach((section) => {
  //       const sectionTop = section.offsetTop - 100; // Offset for navbar height
  //       const sectionBottom = sectionTop + section.offsetHeight;

  //       if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
  //         currentSection = section.getAttribute("id") || "";
  //       }
  //     });

  //     setActiveSection(currentSection);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const Navbar_links = [
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "About",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contact Us",
      href: "/contact-us",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }} // Start above the viewport
        animate={{ y: 0, opacity: 1 }} // Slide into the viewport
        transition={{ type: "spring", stiffness: 120, damping: 100 }} // Smooth spring animation
        className="sticky top-0 bg-black z-50 shadow-lg mx-5 py-4 md:px-12  2xl:px-[110px] flex flex-row justify-between my-4"
      >
        <Link href={"/"}>
          <img
            src="/images/logo.svg"
            className="
            w-[150px]
            
            md:w-[180px] xl:w-[200px]"
            alt="logo image"
          />
        </Link>

        <div className="  hidden animate-slide-down md:flex gap-4 mx-2 max-w-[490px] items-center justify-between bg-customcard  border border-[#FFFFFF33]  px-3 py-2 rounded-full">
          {pathname === "/" && (
            <button
              onClick={(e) => {
                e.preventDefault();
                const targetSection = document.querySelector("#price");
                targetSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`${
                // activeSection === "pricing"
                false ? "shadow-green-inner rounded-full py-2 px-6" : ""
              }  hover:text-customgreen uppercase text-xs 2xl:text-sm  px-2  `}
            >
              Pricing
            </button>
          )}

          {Navbar_links.map((items, index) => {
            if (index === 1 && pathname === "/") {
              return (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const targetSection = document.querySelector("#about");
                    targetSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`${
                    // activeSection === "about"
                    false ? "shadow-green-inner rounded-full py-2 px-6" : ""
                  }  hover:text-customgreen uppercase text-xs 2xl:text-sm  px-2  `}
                >
                  About
                </button>
              );
            }
            return (
              // <nav key={index + 1} className=" md:flex flex-row gap-3">
              //   <Link
              //     href={items.href}
              //     onClick={(e) => {
              //       e.preventDefault();
              //       const targetSection = document.querySelector(items.href);
              //       targetSection?.scrollIntoView({ behavior: "smooth" });
              //     }}
              //     className={`${
              //       activeSection === items.href.substring(1)
              //         ? "shadow-green-inner rounded-full py-2 px-6"
              //         : ""
              //     }  hover:text-customgreen uppercase text-xs 2xl:text-sm  px-2  `}
              //   >
              //     {items.label}
              //   </Link>
              // </nav>
              <nav key={index + 1} className="  md:flex flex-row gap-3">
                <Link
                  href={items.href}
                  className={`${
                    // pathname === items.href
                    false ? "shadow-green-inner rounded-full py-2 px-6" : ""
                  }  hover:text-customgreen uppercase text-xs 2xl:text-sm  px-2 cursor-pointer  `}
                >
                  {items.label}
                </Link>
              </nav>
            );
          })}
        </div>

        <div className="hidden  md:flex flex-row gap-3">
          <button
            className=" border-0 uppercase text-xs 2xl:text-sm cursor-pointer hover:text-green-500 px-4 inline-flex items-center gap-1.5   transition-all  "
            onClick={() => router.push("/login")}
          >
            Login
            <FaAngleRight />
          </button>
          <Button
            label="Get Started"
            onClick={() => router.push("/register")}
            className="shadow-green-inner uppercase text-xs 2xl:text-sm rounded-full border-0 py-0 px-6  text-white hover:bg-green-600/20 active:bg-green-700/10 focus:ring-2 focus:ring-green-500/50 transition-all duration-200 ease-in-out"
          />
        </div>

        {/* Burger Menu for md and smaller screens */}
        <div className=" md:hidden flex items-center bg-black">
          <button
            onClick={toggleMenu}
            className="text-secondaryText focus:outline-none"
          >
            {isMenuOpen ? (
              <HiMenuAlt3 className="btn-shadow text-3xl" />
            ) : (
              <HiMenuAlt3 className="btn-shadow text-3xl" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute bg-black z-20 right-6 top-10 top w-2/3 px-3 py-6 border border-[#FFFFFF33] rounded-2xl rounded-tr-none">
            {/* Desktop Navigation Links in Center */}
            {Navbar_links.map((items, index) => (
              // <nav key={index} className="flex flex-col gap-3 py-3">
              //   <Link
              //     href={items.href}
              //     onClick={(e) => {
              //       e.preventDefault();
              //       const targetSection = document.querySelector(items.href);
              //       targetSection?.scrollIntoView({ behavior: "smooth" });
              //       setIsMenuOpen(false);
              //     }}
              //     className={`hover:text-customgreen ${
              //       activeSection === items.href.substring(1)
              //         ? "shadow-green-inner rounded-full py-1 px-4"
              //         : "text-white"
              //     }`}
              //   >
              //     {items.label}
              //   </Link>
              // </nav>
              <nav
                key={index + 1}
                className=" flex justify-end  py-3 flex-row gap-3"
              >
                <Link
                  href={items.href}
                  className={`${
                    // pathname === items.href
                    false ? "shadow-green-inner rounded-full py-2 px-6" : ""
                  }  hover:text-customgreen  px-2 text-end   `}
                >
                  {items.label}
                </Link>
              </nav>
            ))}

            <div className="flex flex-col gap-3 py-4 ">
              <Button
                label="Login"
                className=" border-0 bg-customcard rounded-full hover:cursor-pointer"
                onClick={() => router.push("/login")}
              />
              <Button
                label="Get Started"
                onClick={() => router.push("/register")}
                className="shadow-green-inner rounded-full border-0 py-2 px-6"
              />
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}
