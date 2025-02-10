"use client";

import { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';
import { FcGoogle } from "react-icons/fc"
import { FaXTwitter } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

import { CiLock } from "react-icons/ci";


import { flags } from '@/lib/constants';
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import Dropdown from '@/components/ui/Dropdown';
import Checkbox from '@/components/ui/Checkbox';
import Link from 'next/link';
import { DashboardLogin } from '@/components/ui/DashboardLogin';
import useLoginForm from '@/hooks/useLoginForm';

export default function Login() {
    const {
        showPassword,
        togglePasswordVisibility,
        isChecked,
        handleCheckboxChange,
        formData,
        handleInputChange,
        handleSubmit,
    } = useLoginForm();


    return (
        <main className="px-4 md:px-10 py-5 h-screen gradient-corners flex flex-row gap-8 ">
            {/* Left Section */}

            <div className='w-full lg:block hidden'>
                <DashboardLogin />
            </div>

            



            {/* Right Section */}
            <div className=' mx-2 w-full  md:mx-6 lg:mx-20 flex justify-center items-center '>
                
                <div className="w-full  md:w-[600px] lg:w-[500px] bg-customcard border border-[#FFFFFF33] rounded-xl px-6 py-6  ">
                <div className='lg:hidden flex items-center justify-center pt-4 pb-8'><Image src="/images/logo.svg" width={250} height={80} alt='logo' /></div>
                    <h1 className="text-[26px] font-bold mb-5">Log in to your account</h1>

                    <form className="space-y-4 w-full" onSubmit={handleSubmit}>


                        <InputField
                            label="Username"
                            icon={<FaRegUserCircle />}
                            placeholder="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            labelClass="text-white"
                            inputClass="bg-[#FFFFFF05] w-full py-[12px] px-[16px]"
                        />



                        <div className="relative">
                            <Link href="" className="text-[14px] text-[#01C0F9] absolute right-0 top-1">
                                Forgot Password?
                            </Link>
                            <InputField
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                labelClass="text-white"
                                inputClass="bg-[#FFFFFF05] w-full py-[12px] px-[16px]"
                                icon={<CiLock />}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-2 top-2/3 transform -translate-y-1/2"
                            >
                                {showPassword ? <BiHide /> : <BiShow />}
                            </button>
                        </div>

                        <div className="flex items-center gap-1">
                            <Checkbox
                                label=''
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                checkboxClassName="bg-black"
                                labelClassName="text-lg text-blue-700"
                            />
                            <p className="text-[16px] text-gray-400">Remember Me</p>
                        </div>

                        <Button type="submit" className='w-full bg-gradient-to-r from-customgreen to-customblue text-black rounded-md py-[12px] px-[40]' label="Log in" />

                        <div className="flex items-center justify-between gap-2">
                            <hr className="w-full h-px bg-[#FFFFFF33] border-0 " />
                            <p>Or</p>
                            <hr className="w-full h-px bg-[#FFFFFF33] border-0 " />
                        </div>


                        <div className='flex flex-row items-center justify-center gap-4'>
                            <button type='button' className='bg-[#FFFFFF1A] flex items-center justify-center rounded-md w-[40px] h-[40px]'>
                                <FcGoogle className='text-2xl' />
                            </button>
                            <button type='button' className='bg-[#FFFFFF1A] flex items-center justify-center rounded-md w-[40px] h-[40px]'>
                                <FaFacebook className='text-2xl text-blue-600' />
                            </button>
                            <button type='button' className='bg-[#FFFFFF1A] flex items-center justify-center rounded-md w-[40px] h-[40px]'>
                                <FaXTwitter className='text-xl ' />
                            </button>

                        </div>

                        <p className="text-center text-[14px] text-gray-400 ">
                            Don't have an account?{' '}
                            <a href="/register" className="text-[#00FF7F] underline">Sign Up</a>
                        </p>
                    </form>
                </div>
            </div>
        </main>
    );
}
