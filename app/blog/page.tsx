"use client";
import Navbar from "@/components/shared/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import Pagination from "@/components/ui/Pagination";
import { Footer } from "@/components/shared/Footer";
import { FaFacebookF, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { useBlogs } from "@/hooks/useBlog";
import FadeInSection from "@/lib/FadeInAnimation";
import { DiscordCommunity } from "@/components/shared/Discord";
import Link from "next/link";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { cards } from "@/lib/constants";

const ITEMS_PER_PAGE = 9; // Number of items per page

export default function Blog() {
  const { blog, error } = useBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);

  // Calculate items for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = cards.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="">
        <div>
          <Navbar />
        </div>

        <div className="mx-4 md:mx-12 lg:mx-[100px]">
          <FadeInSection>
            <h1 className="text-[52px] sm:text-[60px] py-8 leading-[60px] bg-gradient-to-r from-[#45F175] to-[#00C3CE] bg-clip-text text-transparent text-center">
              The Traders’ Playbook
            </h1>
          </FadeInSection>
          {/* Product Grid */}
          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-6 mt-8">
              {currentItems.map((card, index) => (
                <div
                  key={startIndex + index}
                  className="border border-[#FFFFFF33] p-6 rounded-[14px]"
                >
                  <Image
                    src="/images/blog.png"
                    alt="blog image"
                    width={500}
                    height={300}
                    className="w-full h-50 object-cover rounded-lg"
                  />

                  <div className="mt-4">
                    <p className="text-[12px] 2xl:text-[14px] text-gray-300 mb-2 ">
                      12th August 2021
                    </p>
                    <h1 className="text-[19px] 2xl:text-[22px] font-bold ">
                      {card.title}
                    </h1>
                    <p className="text-[16px] mt-2 leading-[30px]">
                      {card.description}
                    </p>
                  </div>

                  <Link
                    href={"/blog/blogdetails"}
                    className="flex flex-row font-semibold gap-2 mt-4 items-center  text-nowrap p-0 text-sm 2xl:text-base"
                  >
                    <span>Read More</span>
                    <GoArrowRight className="text-lg 2xl:text-xl" />
                  </Link>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Pagination Component */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-12  justify-end">
            {/* <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            /> */}
            <div className="flex flex-row gap-4">
              <FaFacebookF
                className="text-xl cursor-pointer"
                onClick={() => alert("hello")}
              />
              <FaDiscord
                className="text-xl cursor-pointer"
                onClick={() => alert("hello")}
              />
              <FaXTwitter
                className="text-xl cursor-pointer"
                onClick={() => alert("hello")}
              />
              <RiInstagramFill
                className="text-xl cursor-pointer"
                onClick={() => alert("hello")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <DiscordCommunity />
        <Footer />{" "}
      </div>
    </>
  );
}
