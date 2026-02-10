import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from "react-router-dom";
import { ChevronRight } from 'lucide-react';
import image from '@/assets/team-banner.jpg';
import { Users, Award, Briefcase, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamSection2 from '@/components/TeamSection2';
import StrategiesSection from '@/components/StrategiesSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import ServicesSection4 from '@/components/ServicesSection4';
import StatisticsSection from '@/components/StatisticsSection';

const stats = [
    { icon: Users, value: '500+', label: 'Companies Growing' },
    { icon: Award, value: '25+', label: 'Years Combined Expertise' },
    { icon: Briefcase, value: '3000+', label: 'Financial Functions Managed' },
    { icon: TrendingUp, value: '99%', label: 'Client Retention Rate' },
];
const About = ({ breadcrumb }) => {
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
                                    Mavens Advisor is a Virtual CFO firm delivering complete finance departments with CFO-level leadership, AI-powered analytics, and evergreen support for every stage of growth.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className='border-b border-[#E4E4E4] shadow-[0_20px_60px_0_rgba(0,0,0,0.08)]'
            >
                <div className="container ">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="flex items-center gap-4 py-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                            >
                                <stat.icon className="w-8 h-8 text-gold" />
                                <div>
                                    <span className="block text-2xl font-bold text-navy-light">{stat.value}</span>
                                    <span className="text-navy-light text-sm">{stat.label}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <StatisticsSection subTitle={"About Us"} />
            <ServicesSection4 />
            <div className='section-padding'>
                <div className='container'>
                    <div className="grid grid-cols-12 gap-y-8 mb-16">
                        {/* Left side - Badge and Title */}
                        <div className='col-span-10 lg:col-span-5 md:col-span-6'>
                            <span className="inline-block bg-muted text-[#7c898d] font-semibold px-4 py-1.5 text-xs uppercase rounded mb-6">
                                Our Experts
                            </span>
                            <AnimatedHeading
                                text="Expert CFO leadership for your finance function"
                                className="text-4xl md:text-5xl font-[700] text-navy leading-tight"
                                duration={0.6}
                                stagger={0.01}
                                startDelay={0.3}
                            />
                        </div>

                        {/* Right side - Description */}
                        <div className="flex items-end lg:pl-12 col-span-12 md:col-span-6">
                            <p className="text-navy-light/50 font-semibold ">
                                Our CFO-led team brings decades of combined finance expertise to help you build, scale, and lead your finance function with confidence—from startup to scale-up and beyond.
                            </p>
                        </div>
                    </div>
                </div>
                <TeamSection2 limit={3} />
            </div>
            <Footer />
        </>
    );
};

export default About;
