import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineFileDownload } from "react-icons/md";
import Pagination from "./Pagination"; // Import the Pagination component

interface TableProps {
  columns: string[];
  data: {
    date: string;
    invoiceNumber: string;
    amount: string;
    productName: string;
    status: string;
    cancellation: string;
    downloadInvoice: string;
  }[];
}

const ROWS_PER_PAGE = 8;

export default function Table({ columns, data }: TableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ROWS_PER_PAGE);

  // Slice data to only show the current page's rows
  const paginatedData = data.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );

  return (
    <div className="bg-[#131F1B] mt-4 min-w-full rounded-lg overflow-x-auto p-4">
      <table className="w-full border-collapse text-sm text-center">
        {/* Table Header */}
        <thead>
          <tr className="border-b border-[#FFFFFF33]">
            {columns.map((col, index) => (
              <th key={index} className="py-4 px-4">{col}</th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-[#FFFFFF33]">
              <td className="py-4 px-4">{row.date}</td>
              <td className="py-4 px-4">{row.invoiceNumber}</td>
              <td className="py-4 px-4">{row.amount}</td>
              <td className="py-4 px-4 bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">{row.productName}</td>
              <td className="py-4 px-4">
                <span className={`${row.status === 'Active' ? 'inline-block bg-gradient-to-b from-customgreen to-customblue bg-clip-border px-[1.5px] py-2 rounded-full' : 'text-red-500'}`}>
                  <span className="bg-[#131F1B] rounded-full py-2 px-4">{row.status}</span>
                </span>
              </td>
              <td className="py-4 px-4">
                <button className="text-red-500 flex items-center justify-center gap-1 cursor-pointer">
                  <RxCross2 /> {row.cancellation}
                </button>
              </td>
              <td className="py-4 px-4">
                <button className="text-blue-500 flex items-center justify-center gap-1 cursor-pointer">
                  <MdOutlineFileDownload className="text-xl" /> {row.downloadInvoice}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Component */}
      <div className="mt-4 flex justify-end">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
