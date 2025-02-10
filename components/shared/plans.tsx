'use client';
import React, { useState } from 'react'
import Button from '../ui/Button'
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Intermediate, master } from '@/lib/constants';

export const Plans = () => {
    const [activePlan, setActivePlan] = useState('Annual');

    const handlePlanChange = (plan: string) => {
        setActivePlan(plan);
    }
    return (
        <>

            <div className='px-6 md:px-10 lg:px-20'>
                <div className='flex flex-row gap-3 items-center justify-center my-3'>
                    <Button label='Monthly' className={`
                        ${activePlan === "Monthly" ? "text-black bg-gradient-to-b from-customgreen to-customblue " : "bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent bg-customcard border border-[#FFFFFF1A] "}
                       rounded-md text-[14px] py-[16px] px-[33px]
`} onClick={() => handlePlanChange("Monthly")} />
                    <Button label='Annual' className={`
                        ${activePlan === "Annual" ? " text-black bg-gradient-to-b from-customgreen to-customblue " : "bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent bg-customcard border border-[#FFFFFF1A] "}
                    rounded-md text-[14px] py-[16px] px-[33px]
`} onClick={() => handlePlanChange("Annual")} />
                </div>


                <div className='flex  flex-col md:flex-row gap-3 lexend  mb-6 justify-center '>
                    <div className={` ${activePlan === "Monthly" ? ' bg-gradient-to-r from-customgreen to-customblue ' : 'bg-gradient-to-b from-[#0A0A0AE5] to-[#040404]  '} 
                    border p-5 lg:p-8  border-[#FFFFFF1A] rounded-2xl`}>
                        <h1 className='text-[22px]'>Intermediate</h1>

                        <p className='mt-3'>
                            <p className='text-xs text-[#999F9F] -mb-2'>Start From...</p>
                            <span className={` ${activePlan === "Monthly" ? ' font-semibold text-black' : ''} text-[40px]`}>$97</span>
                            <span className='text-xs text-customlightgray'>/per month</span></p>
                        <p className='text-[14px] my-4'>Ideal for: Traders beginning their automation journey</p>

                        <Button label='Choose Plan' className={` ${activePlan === "Monthly" ? "bg-gradient-to-r from-[#00C88C] to-[#0C7C33] text-white  " : "bg-white text-black "} w-full text-[14px] py-[14px]  rounded-md`} />

                        <div className='mt-4'>
                            {Intermediate.map((items) => (
                                <div className='flex  flex-row gap-2 items-center py-2.5' key={items}>
                                    <RiCheckboxCircleFill className=' bg-customlightgray text-black rounded-full' />
                                    <p className={` ${activePlan === 'Monthly' ? ' text-black' : 'text-white'} text-[14px]`}>{items}</p>
                                </div>

                            ))}
                        </div>


                    </div>

                    <div className={` ${activePlan === "Annual" ? '  bg-gradient-to-r from-customgreen rounded-2xl to-customblue ' : ' bg-gradient-to-b from-[#0A0A0AE5] to-[#040404] rounded-2xl '} border p-5 lg:p-8  border-[#FFFFFF1A] `}>
                        <div className='flex flex-row justify-between'>
                            <h1 className='text-[24px]'>Master</h1>
                            <p className={`${activePlan === 'Annual' ? "bg-[#04110D]" : " text-black bg-white"} py-[14px] px-[20px] text-[12px] rounded-[10px]`}>Most Popular</p>
                        </div>

                        <p className='mt-3'>
                            <span className={`${activePlan === 'Annual' ? ' text-black' : ''} text-[40px] font-semibold`}>$697</span>
                            <span className='text-[28px] text-[#04110D99] font-semibold line-through'> $997</span></p>
                        <p> <span className={`${activePlan === 'Annual' ? ' text-black ' : 'text-white '} text-[14px] -pt-4 `}>billed yearly</span></p>
                        <p className='text-[14px] my-4'>Ideal for: Traders seeking a powerful, all-in-one portfolio</p>

                        <Button label='Choose Plan' className={` ${activePlan === "Annual" ? "bg-gradient-to-r from-[#00C88C] to-[#0C7C33] text-white  " : "bg-white text-black "} w-full text-[14px] rounded-md py-[14px]`} />

                        {master.map((items) => (
                            <div className='flex flex-row gap-2 items-center py-2' key={items}>
                                <RiCheckboxCircleFill className=' bg-customlightgray text-black rounded-full' />
                                <p className={` ${activePlan === 'Annual' ? ' text-black' : ''} text-[14px]`}>{items}</p>
                            </div>

                        ))}


                    </div>
                </div>
            </div>
        </>
    )
}
