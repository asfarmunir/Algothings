"use client";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Sidebar from "@/components/shared/Sidebar";
import Dropdown from "@/components/ui/Dropdown";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Image from "next/image";
import InputField from "@/components/ui/InputField";
import useBillingDetails from "@/hooks/useBillingDetails";

export default function BillingDetails() {
  const { formData, isSubmitting, error, handleInputChange, handleSubmit } =
    useBillingDetails();

  const handleSelectCountry = (value: string) => {
    handleInputChange("country", value);
  };

  return (
    <>
      <div className="flex flex-row h-screen">
        {/* Sidebar: Static and non-scrollable */}
        <div className="">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full  h-full">
          {/* BillingDetails Navbar: Static and non-scrollable */}
          <DashboardNavbar />
          {/* Details Section: Scrollable */}
          <div className="flex-grow px-8 md:px-4 py-10 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-customcard scrollbar-thumb-customgreen">
            <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-4">
              <div className="w-full lg:w-2/3">
                <h1 className="text-2xl 2xl:text-3xl font-bold">
                  Billing Details
                </h1>

                <div className="mt-4">
                  <form
                    className=" space-y-4"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="flex w-full flex-col gap-4 md:flex-row">
                      <div className="w-full">
                        <InputField
                          type="text"
                          label="First Name"
                          placeholder="Enter Your First Name"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          labelClass="text-white text-sm"
                          inputClass="bg-[#101C18] border-0 text-white placeholder:text-customgray text-[14px] py-3 placeholder:text-[14px] w-full"
                        />
                      </div>
                      <div className="w-full">
                        <InputField
                          type="text"
                          label="Last Name"
                          placeholder="Enter Your Last Name"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          labelClass="text-white text-sm"
                          inputClass="bg-[#101C18] border-0 text-white placeholder:text-customgray text-[14px] py-3 placeholder:text-[14px] w-full"
                        />{" "}
                      </div>
                    </div>

                    <div className="flex w-full flex-col gap-4 md:flex-row">
                      <div className="w-full">
                        <InputField
                          type="email"
                          label="Email"
                          placeholder="email@gmail.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          labelClass="text-white text-sm"
                          inputClass="bg-[#101C18] border-0 text-white placeholder:text-customgray text-[14px] py-3 placeholder:text-[14px] w-full"
                        />{" "}
                      </div>
                      <div className="w-full">
                        <InputField
                          type="text"
                          label="Phone"
                          placeholder="+03847584523"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          labelClass="text-white text-sm"
                          inputClass="bg-[#101C18] border-0 text-white placeholder:text-customgray text-[14px] py-3 placeholder:text-[14px] w-full"
                        />{" "}
                      </div>{" "}
                    </div>

                    <div className="flex w-full flex-col gap-4 md:flex-row">
                      <div className="w-full">
                        <div className="flex flex-col">
                          <label className="text-sm text-white pb-2">
                            Country
                          </label>
                          <Dropdown
                            options={[
                              "Pakistan",
                              "Australia",
                              "Canada",
                              "US",
                              "UK",
                            ]}
                            onSelect={handleSelectCountry}
                            placeholder="Select Country"
                            className="py-3 w-full text-[14px] placeholder:text-white text-white"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <InputField
                          type="text"
                          label="State/Country"
                          placeholder="Enter Your State"
                          value={formData.state}
                          onChange={(e) =>
                            handleInputChange("state", e.target.value)
                          }
                          labelClass="text-white text-sm"
                          inputClass="bg-[#101C18] border-0 text-white placeholder:text-white text-[14px] py-3 placeholder:text-[14px] w-full"
                        />{" "}
                      </div>
                    </div>

                    <div className="flex w-full flex-col gap-4 md:flex-row">
                      <div className="w-full">
                        <InputField
                          type="text"
                          label="Town/City"
                          placeholder="Enter town"
                          value={formData.city}
                          onChange={(e) =>
                            handleInputChange("city", e.target.value)
                          }
                          labelClass="text-white text-sm"
                          inputClass="bg-[#101C18] border-0 text-white placeholder:text-customgray text-[14px] py-3 placeholder:text-[14px] w-full"
                        />
                      </div>
                      <div className="w-full">
                        <InputField
                          type="text"
                          label="Postcode/ZIP"
                          placeholder="494843"
                          value={formData.zip}
                          onChange={(e) =>
                            handleInputChange("zip", e.target.value)
                          }
                          labelClass="text-white text-sm"
                          inputClass="bg-[#101C18] border-0 text-white placeholder:text-customgray text-[14px] py-3 placeholder:text-[14px] w-full"
                        />
                      </div>{" "}
                    </div>
                    <div className="w-full">
                      <InputField
                        type="text"
                        label="Street Address"
                        placeholder="Enter Address"
                        value={formData.address}
                        onChange={(e) =>
                          handleInputChange("address", e.target.value)
                        }
                        labelClass="text-white text-sm"
                        inputClass="bg-[#101C18] border-0 text-white placeholder:text-customgray text-[14px] py-3 placeholder:text-[14px] w-full"
                      />
                    </div>

                    <p className="text-[12px] text-[#848BAC]">
                      By providing your information, you allow Pickshero to
                      charge your card for future payments in accordance with
                      their terms.
                    </p>

                    <div className="flex flex-row gap-3">
                      <Button
                        label="BACK"
                        className="bg-[#03100C] rounded-lg back-btn py-[10px] text-sm"
                      />

                      <Button
                        label={isSubmitting ? "Submitting..." : "NEXT"}
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="bg-[#45F1753D] w-full border border-[#45F175] py-[10px] rounded-md text-sm text-[#45F175]"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <h1 className="text-3xl lg:text-2xl font-semibold">Cart</h1>
                <div className="py-1">
                  <p className="text-sm py-2">Choose Trading Platform</p>
                  <div className=" w-80">
                    <Dropdown
                      options={["Select 1", "Select 2", "Select 3"]}
                      onSelect={handleSelectCountry}
                      placeholder="Select Platform"
                      className="bg-[#03100C] py-2  text-sm w-full"
                      textclassName=""
                      dropdownClass=" w-60 lg:w-44"
                    />
                  </div>
                  <div className="text-end mt-1">
                    <Link href={""} className="text-sm hover:underline">
                      Remove All
                    </Link>
                  </div>

                  <div className="flex flex-col gap-4 mt-2">
                    {Array.from({ length: 1 }).map((_, item) => (
                      <div
                        key={item}
                        className="bg-[#03100C]  py-2 px-4 rounded-lg flex flex-row gap-3"
                      >
                        <Image
                          src="/images/logo1.svg"
                          width={35}
                          height={20}
                          alt="Logo"
                        />
                        <div className="w-full flex flex-col gap-4">
                          <div className="flex flex-row justify-between items-center  gap-12">
                            <p className="truncate text-sm lg:text-xs">
                              Asuras Dragonair Bot #169
                            </p>
                            <p className="text-sm lg:text-xs">$148</p>
                          </div>
                          <div className="w-full flex flex-row  gap-36 items-center justify-between">
                            <p className="text-customgray text-nowrap text-sm lg:text-[10px]">
                              Profit Target
                            </p>
                            <div>
                              <Dropdown
                                options={["1", "2", "3"]}
                                onSelect={handleSelectCountry}
                                placeholder="1"
                                className="bg-[#D9D9D91A] text-xs w-[50px] border border-black text-center"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex flex-row justify-between gap-5">
                        <p className="text-customlightgray">Subtotal</p>
                        <p>$200</p>
                      </div>
                      <div className="flex flex-row justify-between gap-5">
                        <p className="text-customlightgray">Tax</p>
                        <p>$0.00</p>
                      </div>
                      <div className="flex flex-row justify-between gap-5">
                        <p className="text-customlightgray">Total</p>
                        <p className="font-semibold">$208</p>
                      </div>
                    </div>

                    <Button
                      label="Next"
                      className="bg-gradient-to-r  from-customgreen to-customblue py-3 text-sm text-white rounded-md w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
