import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from 'lucide-react';
import check from "@/assets/check.svg";
import image from '@/assets/team-banner.jpg';
import icon1 from "@/assets/account-maintenance.svg";
import icon2 from "@/assets/online-tax.svg";
import icon3 from "@/assets/audit.svg";
import icon4 from "@/assets/consultant.svg";
import icon5 from "@/assets/monthly-bk.svg";
import icon6 from "@/assets/payroll.svg";
import icon7 from "@/assets/invoicing.svg";
import icon8 from "@/assets/accounts-payable.svg";
import icon9 from "@/assets/P&L-reporting.svg";
import icon10 from "@/assets/budgeting.svg";
import icon11 from "@/assets/vat.svg";
import icon12 from "@/assets/chart-acc.svg";
import icon13 from "@/assets/AI-powered.svg";
import icon14 from "@/assets/cfo-level.svg";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedHeading from '@/components/AnimatedHeading';


const services = [
    {
        title: "Capital Raising Advisory (Equity)",
        icon: icon4,
        items: [
            "Seed, Series A & Growth Fundraising",
            "Investor Pitch Decks & IMs",
            "Deal Structuring & Negotiation",
        ],
    },
    {
        title: "Debt Advisory & Financing",
        icon: icon1,
        items: [
            "Working Capital & Term Loans",
            "Structured & Syndicated Financing",
            "Trade & Project Finance",
        ],
    },
    {
        title: "Corporate Finance Advisory",
        icon: icon2,
        items: [
            "Mergers & Acquisitions (M&A)",
            "Business Valuation & Modeling",
            "Feasibility & IPO Readiness",
        ],
    },
    {
        title: "Startup & Growth Advisory",
        icon: icon3,
        items: [
            "Investment Readiness Assessment",
            "Market & Competitive Analysis",
            "Due Diligence Preparation",
        ],
    },
    {
        title: "Virtual CFO Services",
        icon: icon4,
        items: [
            "Strategic Financial Planning",
            "Cash Flow & KPI Dashboards",
            "Fundraising & Accounting Support",
        ],
    },
    {
        title: "Monthly Bookkeeping",
        icon: icon5,
        items: [
            "Clean monthly closes you can rely on",
            "Bank and credit card reconciliations",
            "Ledger maintenance and accuracy checks",
            "Month-end journal entries",
            "Accruals and prepayments management",
        ],
        mav: true
    },

    {
        title: "Monthly Payroll Management",
        icon: icon6,
        items: [
            "Weekly/monthly payroll processing",
            "Contractor payments and 1099 management",
            "Tax withholding and compliance",
            "Benefits administration support",
            "Payroll tax filing and reporting",
        ],
        mav: true
    },

    {
        title: "Monthly Invoicing",
        icon: icon7,
        items: [
            "Automated invoicing and billing",
            "Accounts receivable tracking",
            "Collections management",
            "Payment processing and reconciliation",
            "Customer aging reports",
        ],
        mav: true
    },

    {
        title: "Accounts Payable Management",
        icon: icon8,
        items: [
            "Vendor bill processing and approval",
            "Payment scheduling and execution",
            "Cash flow optimization",
            "Vendor relationship management",
            "Expense categorization and tracking",
        ],
        mav: true
    },

    {
        title: "Monthly Profit & Loss Reporting",
        icon: icon9,
        items: [
            "Monthly profit & loss statements",
            "Revenue and expense analysis",
            "Performance vs. budget comparisons",
            "CFO-level insights and explanations",
            "Actionable recommendations for improvement",
        ],
        mav: true
    },

    {
        title: "Monthly Budgeting",
        icon: icon10,
        items: [
            "12-month rolling cash flow forecasts",
            "Annual budget development",
            "Variance analysis and adjustments",
            "Scenario planning for growth",
            "Capital expenditure planning",
        ],
        mav: true
    },

    {
        title: "VAT Filing",
        icon: icon11,
        items: [
            "VAT returns and submissions",
            "HMRC compliance and deadlines",
            "Companies House annual filings",
            "Statutory accounts preparation",
            "Confirmation statements and updates",
        ],
        mav: true
    },

    {
        title: "Chart of Accounts Setup",
        icon: icon12,
        items: [
            "Optimized chart of accounts structure",
            "Accounting system implementation",
            "Departmental and project coding",
            "Integration with business tools",
            "Scalable design for growth",
        ],
        mav: true
    },

    {
        title: "Strategic Financial Advice",
        icon: icon13,
        items: [
            "Custom analytics portal for your business",
            "Real-time KPI tracking and dashboards",
            "Tax savings opportunity identification",
            "AI assistant for financial questions",
            "Predictive analytics and trend analysis",
        ],
        mav: true
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
                                    Specializing in equity and debt investment solutions, structuring investments, and executing financial strategies aligned with long-term growth objectives.
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
                            text="Complete Finance Solutions Backed by CFO Expertise"
                            className="text-4xl md:text-5xl font-[700] text-navy leading-tight"
                            duration={0.6}
                            stagger={0.01}
                            startDelay={0.3}
                            center={true}
                        />
                    </div>

                    {/* Services Cards */}
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card-new relative bg-white rounded-[20px] px-[30px] pt-[50px] pb-[30px] flex flex-col h-full "
                                initial="initial"
                                whileHover="hover"
                            >
                                {/* Icon */}
                                <div className="mb-8">
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-[24px] service-title font-bold text-navy mb-6 mt-[70px]">
                                    <Link to="/services" className="transition"> {service.title} </Link>
                                </h3>

                                {/* List */}
                                <ul className="space-y-4 mb-10">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[18px] font-medium text-gray-600">
                                            <span className="text-green-500">
                                                <img src={check} alt="" />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <div className="mt-auto flex">
                                    <Link to={`${service.mav ? 'https://new.mavensadvisor.com/contact' : '/contact'}`} className="group flex items-center bg-gold rounded-full pl-6 pr-4 py-3 gap-4 hover:scale-105 transition relative z-[1]">
                                        <span className="text-[15px] font-semibold text-white">
                                            Discover More
                                        </span>
                                        <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                                            <ArrowRight size={18} />
                                        </span>
                                    </Link>
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