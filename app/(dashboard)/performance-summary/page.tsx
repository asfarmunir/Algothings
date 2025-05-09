"use client";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Sidebar from "@/components/shared/Sidebar";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import InputField from "@/components/ui/InputField";
import { CiSearch } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineCandlestickChart } from "react-icons/md";

export default function FlashBreak() {
  const handleSelect = () => {};

  const handleDownload = (fileName: any) => {
    const fileUrl = `/resources/${fileName}`; // Adjust path based on your folder structure
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName; // Suggested file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <div className="flex-grow p-4 overflow-y-auto scrollbar-thin scrollbar-track-customcard scrollbar-thumb-customgreen">
            <div>
              <h2 className="text-2xl font-semibold ">TAF Genesis</h2>

              {/* <div className="flex flex-row gap-4 my-3">
                                <div className="flex flex-row px-2 py-1 items-center text-black border border-[#C9FDFF1A] rounded-full">
                                    <CiSearch className="text-[#EAEAEA] text-lg" />
                                    <InputField
                                        inputClass="border-0 py-0 text-[#EAEAEA] bg-transparent text-sm placeholder:text-sm"
                                        placeholder="Search"
                                    />
                                </div>

                                <div className="inline-flex w-36 flex-row px-2 py-1 items-center text-black border border-[#C9FDFF1A] rounded-lg">
                                    <IoTimeOutline className="text-[#EAEAEA] text-3xl" />
                                    <Dropdown
                                        options={["option 1", "option 2", "option 3"]}
                                        placeholder="Date Range"
                                        onSelect={handleSelect}
                                        className="text-white text-xs w-28 bg-transparent"
                                        textclassName="text-white"
                                        dropdownClass="w-full"
                                    />
                                </div>

                                <div className="inline-flex w-20 flex-row px-1 py-1 items-center text-black border border-[#C9FDFF1A] rounded-lg">
                                    <MdOutlineCandlestickChart className="text-[#EAEAEA] text-3xl" />
                                    <Button label="Sort" className="text-white px-0 py-0 m-0 text-xs" />
                                </div>
                            </div> */}
            </div>

            <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
              {Array.from({ length: 1 }).map((_, index) => {
                const fileName = `report-${index + 1}.pdf`; // Example file name for each resource
                return (
                  <div
                    key={index}
                    className=" border border-[#FFFFFF33] rounded-lg p-3"
                  >
                    {/* <Image
                      src="/images/flash-break.png"
                      width={1024}
                      height={40}
                      alt="Image"
                      className="border border-[#FFFFFF33] bg-[#1D1D1E] rounded-lg px-5 py-5"
                    /> */}
                    <div className="border border-[#FFFFFF33] bg-[#1D1D1E]  font-bold text-customgreen text-center rounded-lg  py-12">
                      <p className=" text-3xl 2xl:text-4xl ">TAF Genesis</p>
                    </div>
                    <p className="text-sm lexend py-2">
                      Performance Summary Report January 2024
                    </p>

                    <Button
                      label="DOWNLOAD"
                      className="bg-gradient-to-r from-customgreen py-2 to-customblue text-black rounded-lg text-sm font-light w-full"
                      onClick={() => handleDownload(fileName)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
