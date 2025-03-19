"use client";
import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";

interface Slide {
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface CarouselProps {
  items: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const router = useRouter();
  const [openBlog, setOpenBlog] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Slide | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1); // Default for SSR

  // Define visible items count based on screen size
  const visibleItemsCount = {
    lg: 4, // Large screen: 4 cards
    md: 3, // Medium screen: 3 cards
    sm: 2, // Small screen: 2 cards
    xs: 1, // Extra small screen: 1 card
  };

  // Dynamically calculate visible count (client-side only)
  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return visibleItemsCount.lg;
    if (window.innerWidth >= 768) return visibleItemsCount.md;
    if (window.innerWidth >= 640) return visibleItemsCount.sm;
    return visibleItemsCount.xs;
  };

  // Initialize visible count on mount and update on window resize
  useEffect(() => {
    setVisibleCount(getVisibleCount());
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openBlogDetails = (blog: Slide) => {
    setSelectedBlog(blog);
    setOpenBlog(true);
    router.push("/blog/blogdetails");
  };

  const closeBlogDetails = () => {
    setSelectedBlog(null);
    setOpenBlog(false);
  };

  const goToPrevious = () => {
    if (items.length <= visibleCount) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - visibleCount : prevIndex - 1
    );
  };

  const goToNext = () => {
    if (items.length <= visibleCount) return;
    setCurrentIndex((prevIndex) =>
      prevIndex >= items.length - visibleCount ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="w-full relative">
        {/* Left Arrow */}
        <div className="absolute -top-10 right-16">
          <button
            onClick={goToPrevious}
            aria-label="Previous Slide"
            className="text-white border-customgreen border p-2 rounded-full"
          >
            <FiChevronLeft className="text-md font-light" />
          </button>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 gap-4"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-4 border cursor-pointer border-[#FFFFFF33] rounded-xl"
                style={{
                  width: `calc(100% / ${visibleCount} - 16px)`, // Subtract gap
                }}
                onClick={() => openBlogDetails(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-50 object-cover rounded-lg"
                />
                <h3 className="text-[20px] my-3 text-start">{item.title}</h3>
                <p className="text-[14px] text-start">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <div className="absolute -top-10 right-6">
          <button
            onClick={goToNext}
            aria-label="Next Slide"
            className="text-black bg-gradient-to-r from-customgreen to-customblue p-2 rounded-full"
          >
            <FiChevronRight className="text-md font-light" />
          </button>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex items-center justify-center my-5">
        <div
          onClick={() => router.push("/blog")}
          className="  bg-gradient-to-r text-lg w-44 font-semibold from-customgreen to-customblue bg-clip-border p-[2px] rounded-xl"
        >
          <Button
            className="rounded-xl text-sm px-6 md:px-12 w-full py-3 bg-[#04110D]"
            label="View All"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
