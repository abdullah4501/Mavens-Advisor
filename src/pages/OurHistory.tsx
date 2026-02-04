import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { ChevronRight } from 'lucide-react';
import image from '@/assets/team-banner.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StrategiesSection from '@/components/StrategiesSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import timeline2017Left from "@/assets/history-img-01.jpg";
import timeline2015 from "@/assets/history-img-02.jpg";
import timeline2019Center from "@/assets/history-img-03.jpg";
import timeline2019Right from "@/assets/history-img-04.jpg";
import TestimonialsSection from '@/components/TestimonialsSection';
import HistorySlider from '@/components/HistorySlider';

interface TimelineItem {
    year: string;
    title: string;
    description: string;
    image?: string;
    position: "above" | "below";
    imagePosition?: "left" | "center" | "right";
}

const OurHistory = ({ breadcrumb }) => {
    return (
        <>
            <Header />
            <section className="relative min-h-[550px] overflow-hidden flex flex-col justify-end items-center">
                {/* Background Images with Fade */}
                <div
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                >
                    <img
                        src={image}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Container */}
                <div className='container pt-[150px] pb-[30px] flex items-end'>
                    <div className='grid grid-cols-12 relative items-center'>
                        <div className="relative col-span-12 lg:col-span-7">
                            <div className="">
                                {/* Main Heading with fade animation */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        initial={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
                                        animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                                        exit={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
                                        transition={{ duration: 1, ease: [0.5, 0.5, 0, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div
                                            className="mb-5 flex text-white text-[16px] items-center leading-[30px] font-[500]"
                                        >
                                            <span>
                                                <Link to={'/'}>Home</Link>
                                            </span>
                                            <span>
                                                <ChevronRight size={20} className='mx-1' />
                                            </span>
                                            <span>
                                                {breadcrumb}
                                            </span>
                                        </div>
                                        <h1 className="text-[45px] md:text-[55px] lg:text-[70px] font-bold text-white leading-tight lg:mb-12 mb-6">
                                            {breadcrumb}
                                        </h1>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Description */}
                        <div className='col-span-12 lg:col-span-5'>
                            <div className='lg:mt-[30px] lg:ml-[125px] mb-[25px]'>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    className="text-white text-[16px] lg:text-[18px] lg:leading-[30px] font-[500] z-10 self-end"
                                >
                                    With years of experience and a results-focused approach, we empower businesses to navigate complexity and achieve their goals.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <StrategiesSection subTitle={'About Us'} />
            <HistorySlider />
            <TestimonialsSection />

            <Footer />
        </>
    );
};

export default OurHistory;
