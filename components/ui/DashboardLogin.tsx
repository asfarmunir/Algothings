import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Dropdown from "./Dropdown";

export const DashboardLogin = () => {

    const handleSelect=()=>{
        console.log('');
    }
    return (
        <>
            <div className="w-full ">
                <div className=" flex items-center gap-3 mb-8">
                    <Image src="/images/logo.svg" width={140} height={100} alt="logo image" />
                </div>

                <div className="flex items-center gap-2 ">
                    <div
                        className="w-6 h-6 bg-[#45F1753D] rounded-full flex items-center justify-center font-semibold "
                        style={{
                            boxShadow: `
                                0px 4px 8px 1px rgba(69, 241, 117, 0.24), 
                                0px 6px 12px 0px rgba(69, 241, 117, 0.35) inset, 
                                0px -6px 12px 0px rgba(69, 241, 117, 0.35) inset
                            `
                        }}
                    >
                        1
                    </div>
                    <span className="font-semibold">REGISTRATION</span>
                </div>

                <p className="text-sm  pl-3">
                    Everything you need to become a ALGOS Field Trader
                </p>

                <div className='flex flex-row items-center w-[80%]'>
                    <img src="/images/dashboard.svg" className="" alt='Dashboard' />
                </div>

                <div className="  flex items-center gap-6 text-sm text-gray-400">
                    <a href="#" className="hover:text-white">Terms</a>
                    <a href="#" className="hover:text-white">Privacy</a>
                    <a href="#" className="hover:text-white">Docs</a>
                    <a href="#" className="hover:text-white">Help</a>

                    <div className="ml-auto flex items-center gap-2">
                        
                        <Dropdown onSelect={handleSelect} options={['German', 'English', 'French']}
                        placeholder="English" className="bg-transparent w-20" dropdownClass="w-20"  />
                       
                    </div>
                </div>
            </div>





        </>
    )
}
