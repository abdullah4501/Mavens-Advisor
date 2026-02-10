import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from 'lucide-react';
import check from "@/assets/check.svg";
import image from '@/assets/team-banner.jpg';
import image1 from '@/assets/service-1.jpg';
import image2 from '@/assets/service-2.jpg';
import image3 from '@/assets/service-3.jpg';
import image4 from '@/assets/service-4.jpg';
import image5 from '@/assets/service-5.jpg';
import image6 from '@/assets/service-6.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedHeading from '@/components/AnimatedHeading';


const services = [
    {
        title: "Bookkeeping & Reconciliations",
        img: image1,
        items: [
            "Monthly bank reconciliations",
            "Credit card matching",
            "Ledger maintenance",
        ],
    },
    {
        title: "Payroll & Contractor Payments",
        img: image2,
        items: [
            "Weekly/Monthly payroll",
            "Contractor settlements",
            "Tax withholding management",
        ],
    },
    {
        title: "Invoicing & Billing",
        img: image3,
        items: [
            "Automated invoicing",
            "Accounts payable",
            "Receivables tracking",
        ],
    },
    {
        title: "Profit & Loss Reporting",
        img: image4,
        items: [
            "Monthly P&L",
            "Revenue analysis",
            "Expense breakdown",
        ],
    },
    {
        title: "Budgeting & Cash Flow",
        img: image5,
        items: [
            "Cash flow forecasts",
            "Budget planning",
            "Variance analysis",
        ],
    },
    {
        title: "Financial Performance Analysis",
        img: image6,
        items: [
            "KPI tracking",
            "Ratio analysis",
            "Trend identification",
        ],
    },
    {
        title: "VAT Filing",
        img: image1,
        items: [
            "VAT returns",
            "Compliance checks",
            "Filing deadlines",
        ],
    },
    {
        title: "HMRC & Companies House Filings",
        img: image2,
        items: [
            "Statutory accounts",
            "Confirmation statements",
            "Regulatory compliance",
        ],
    },
    {
        title: "Chart of Accounts Setup",
        img: image3,
        items: [
            "Optimized structure",
            "Departmental codes",
            "Scalable design",
        ],
    },
    {
        title: "Ongoing Strategic Advice",
        img: image4,
        items: [
            "CFO-level guidance",
            "Growth strategies",
            "Financial reviews",
        ],
    },
];

const Services = ({ breadcrumb }) => {
    const imageVariants: Variants = {
        initial: {
            filter: "blur(0px)",
        },
        hover: {
            filter: ["blur(0px)", "blur(8px)", "blur(3px)", "blur(0px)"],
            transition: {
                duration: 0.65, // slightly faster than 0.9
                ease: [0.4, 0, 0.2, 1], // proper easeInOut
                times: [0, 0.3, 0.65, 1],
            },
        },
    };



    const blurFlashVariants: Variants = {
        initial: { opacity: 0 },
        hover: {
            opacity: [0, 0.75, 0],
            transition: {
                duration: 0.65,
                ease: [0.4, 0, 0.2, 1],
                times: [0, 0.5, 1],
            },
        },
    };

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
            <section className="py-12 ">
                <div className="container">

                    {/* Heading */}
                    <div className="relative z-10 max-w-6xl mx-auto px-6 mb-20 text-center">
                        <span className="inline-block bg-muted text-[#7c898d] font-semibold px-4 py-1.5 text-[14px] uppercase rounded mb-6">
                            Our Top Services
                        </span>
                        <AnimatedHeading
                            text="How We Helped Clients Overcome Challenges and Achieve Remarkable Results"
                            className="text-4xl md:text-5xl font-[700] text-navy leading-tight"
                            duration={0.6}
                            stagger={0.01}
                            startDelay={0.3}
                            center={true}
                        />
                    </div>

                    {/* Services Cards */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-5 gap-y-16">

                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card-new relative bg-white rounded-[20px] flex flex-col h-full w-full group"
                                initial="initial"
                                whileHover="hover"
                            >
                                {/* Image wrapper */}
                                <div className="mb-8 relative overflow-hidden rounded-t-[20px]">
                                    <motion.img
                                        src={service.img}
                                        alt={service.title}
                                        className="rounded-t-[20px] w-full"
                                        variants={imageVariants}
                                    />


                                    {/* Strong blur + sharpness flash */}
                                    <motion.div
                                        className="absolute inset-0 backdrop-blur-[10px]"
                                        variants={blurFlashVariants}
                                    />
                                </div>

                                <div className="md:px-[50px] md:pt-[25px] md:pb-[50px] p-[25px]">
                                    {/* Title */}
                                    <h3 className="text-[24px] service-title font-bold text-navy mb-6">
                                        <Link to="" className="transition">
                                            {service.title}
                                        </Link>
                                    </h3>

                                    {/* List */}
                                    <ul className="space-y-4 mb-10">
                                        {service.items.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-3 text-[18px] font-medium text-gray-600"
                                            >
                                                <span className="text-green-500">
                                                    <img src={check} alt="" />
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <div className="mt-auto flex">
                                        <Link to="/calculator" className="group flex items-center bg-gold rounded-full pl-6 pr-4 py-3 gap-4 hover:scale-105 transition relative z-[1]">
                                            <span className="text-[15px] font-semibold text-white">
                                                Get Quotation
                                            </span>
                                            <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                                                <ArrowRight size={18} />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>

                        ))}

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Services;