'use client';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import FadeInSection from '@/lib/FadeInAnimation'
import ScrollingAnimation from '@/lib/ScrollAnimations';
import { testimonials } from '@/lib/constants'

export default function ChooseUs() {
    const [columns, setColumns] = useState(3);

    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth < 640) {
                setColumns(1);
            } else if (window.innerWidth < 1024) {
                setColumns(2);
            } else {
                setColumns(3);
            }
        };

        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    const testimonialsPerColumn = Math.ceil(testimonials.length / columns);
    const columnsData = Array.from({ length: columns }).map((_, colIndex) =>
        testimonials.slice(
            colIndex * testimonialsPerColumn,
            (colIndex + 1) * testimonialsPerColumn
        )
    );

    const baseDurations = [10, 20, 15];

    return (
        <section>
           
                <div className="mb-4 mt-7 mx-8">
                    <FadeInSection>
                    <div className="inline-flex flex-row gap-3 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#45F17533] to-[#00C3CE33]">
                        <Image src="/images/welcomestar.svg" width={20} height={30} alt="welcome star" />
                        <p className="text-[16px] bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent">
                            Why Choose Us?
                        </p>
                    </div>

                    <h1 className='py-4 text-[30px] md:text-[44px] lg:text-[54px] font-semibold leading-[44px] my-3'>
                        Why Choose <span className='bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent'>The Algos Field?</span>
                    </h1>

                    <p className='text-[#FFFFFFCC] text-[18px] lg:text-[23px] mb-6'>
                        Discover the unmatched advantages of choosing our advanced algorithmic trading solutions.
                    </p>
                    </FadeInSection>
                    <FadeInSection>
                    <div className='md:mx-6 lg:mx-[98px] mt-12 bg-gradient-to-b from-customgreen to-customblue p-[4px] rounded-[40px]'>
                        <div className='flex h-auto md:h-[494px] flex-col-reverse md:flex-row gap-5 bg-black p-4 md:p-8 rounded-[40px]'>
                            <div className='w-full flex flex-col justify-between'>
                                {['Simplified Trading Process', 'Fully Diversified Strategies', 'Dedicated Premium Support', 'Continuous Innovation']
                                    .map((items) => (
                                        <div key={items} className='mb-4 rounded-[10px] border border-[#FFFFFF33] bg-[#030D0A80] flex flex-row items-center justify-between px-[24px] py-[20px]'>
                                            <h1 className='text-[15px] md:text-[20px] leading-7'>{items}</h1>
                                            <Image src="/images/plus.svg" width={20} height={10} alt='plus' />
                                        </div>
                                    ))}
                            </div>

                            <div className='border w-full border-[#636363] rounded-[50px] p-8 bg-[#030D0A80] '>
                                <Image src="/images/graph.svg" width={40} height={30} alt='graph' />
                                <p className='mt-4 font-bold bg-gradient-to-r from-customgreen to-customblue inline-block bg-clip-text text-transparent text-[24px] md:text-[32px]'>Trading Yourself</p>
                                <p className='text-[#FFFFFFCC] pt-5 text-[18px] md:text-[23px]'>
                                    No programming, no guesswork, no constant monitoring—our algorithms automate the entire trading journey for you.
                                </p>
                            </div>
                        </div>
                    </div>
                    </FadeInSection>
                </div>
          

            <FadeInSection>
                <div className="mb-4 mt-7">
                    <div className="inline-flex flex-row gap-3 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#45F17533] to-[#00C3CE33]">
                        <Image src="/images/welcomestar.svg" width={20} height={30} alt="welcome star" />
                        <p className="text-[16px] bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent">
                            Testimonials
                        </p>
                    </div>

                    <h1 className='mx-4 py-6 text-[28px] md:text-[44px] font-semibold leading-[44px] my-3'>
                        What Clients Say About Us
                    </h1>

                    {/* Responsive Testimonials Layout */}
                    <div className={`mx-4 md:mx-[80px] h-screen lg:mx-[130px] grid gap-[20px] 
                        ${columns === 3 ? "lg:grid-cols-3 md:grid-cols-2 grid-cols-1" : ""}
                        ${columns === 2 ? "md:grid-cols-2 grid-cols-1" : ""}
                        ${columns === 1 ? "grid-cols-1" : ""}`}>

                        {columnsData.map((columnTestimonials, colIndex) => (
                            <ScrollingAnimation
                                key={colIndex}
                                className="relative overflow-hidden"
                                baseDuration={baseDurations[colIndex % baseDurations.length]}>
                                <div className="flex flex-col space-y-8">
                                    {[...columnTestimonials, ...columnTestimonials].map((testimonial, index) => (
                                        <div key={index} className="bg-[#04110D80] h-[250px] p-[25px] border border-[#FFFFFF1A] rounded-xl">
                                            <div className="border border-[#FFFFFF1A] flex flex-row gap-4 px-[21px] items-center rounded-lg py-[17px]">
                                                <p className="bg-gradient-to-r from-customgreen to-customblue rounded-full text-xs inline-block p-1">
                                                    {testimonial.initials}
                                                </p>
                                                <h1 className="text-[16px]">{testimonial.name}</h1>
                                            </div>
                                            <p className="text-[16px] leading-[32px] text-start py-2">
                                                {testimonial.testimonial}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </ScrollingAnimation>
                        ))}
                    </div>

                </div>
            </FadeInSection>
        </section>
    );
}
