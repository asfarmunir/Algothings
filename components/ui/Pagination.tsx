'use client';
import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  const handlePageClick = (page: number) => {
    if (page !== currentPage && page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            currentPage === i
              ? "bg-customgreen rounded-full text-black"
              : " text-white "
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-start space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={isPrevDisabled}
        className={`px-4 py-2 rounded-lg font-medium ${
          isPrevDisabled
            ? " text-[#FFFFFF66] cursor-not-allowed"
            : " text-white"
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex space-x-1">{renderPageNumbers()}</div>

      {/* Next Button */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={isNextDisabled}
        className={`px-4 py-2 rounded-lg font-medium ${
          isNextDisabled
            ? " text-[#FFFFFF66] cursor-not-allowed"
            : " text-white "
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
