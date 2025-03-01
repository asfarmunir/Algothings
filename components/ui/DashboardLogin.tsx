import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Dropdown from "./Dropdown";
import Link from "next/link";

export const DashboardLogin = () => {
  const handleSelect = () => {
    console.log("");
  };
  return (
    <div className="">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          width={140}
          height={100}
          className=" absolute top-6 left-6"
          alt="logo image"
        />
      </Link>
      <div className="w-full  p-16  ">
        <div className="flex items-center gap-2 ">
          <div
            className="w-6 h-6 bg-[#45F1753D] rounded-full flex items-center justify-center font-semibold "
            style={{
              boxShadow: `
                                0px 4px 8px 1px rgba(69, 241, 117, 0.24), 
                                0px 6px 12px 0px rgba(69, 241, 117, 0.35) inset, 
                                0px -6px 12px 0px rgba(69, 241, 117, 0.35) inset
                            `,
            }}
          >
            1
          </div>
          <span className="text-sm 2xl:text-base font-semibold">
            REGISTRATION
          </span>
        </div>

        <p className="text-xs 2xl:text-sm  pl-8">
          Everything you need to become a ALGOS Field Trader
        </p>

        <div className="flex flex-row    mx-auto  justify-center items-center w-[60%]">
          <Image
            width={500}
            height={500}
            priority
            src="/assets/animations/login.gif"
            className=" w-full h-full  object-contain object-center"
            alt="Dashboard"
          />
        </div>

        <div className="  flex items-center gap-6 text-xs 2xl:text-sm font-bold text-gray-200">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          {/* <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Docs
          </a>
          <a href="#" className="hover:text-white">
            Help
          </a>

          <div className="ml-auto flex items-center gap-2">
            <Dropdown
              onSelect={handleSelect}
              options={["German", "English", "French"]}
              placeholder="English"
              className="bg-transparent w-20"
              dropdownClass="w-20"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};
