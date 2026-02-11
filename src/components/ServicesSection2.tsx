import { ArrowRight, HandCoins, MoveLeft, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import serviceBg from '@/assets/service-bg-2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import MarqueeSection from "./MarqueeSection";
import {
    BookOpen,
    Wallet,
    LineChart,
    Users,
    CreditCard,
    TrendingUp,
    Settings,
    Target,
    Calculator,
    FileText,
    PiggyBank,
    BarChart3,
    FileCheck,
    Building2,
    Layers,
    Compass,
    Rocket,
    Lightbulb,
} from "lucide-react";
import MarqueeSection2 from "./MarqueeSection2";

const services = [
    {
        title: "Monthly Bookkeeping",
        description: "Clean monthly closes you can rely on—bank reconciliations, ledger maintenance, and accurate month-end reporting.",
        icon: Calculator,
    },
    {
        title: "Payroll & Contractor Management",
        description: "Weekly or monthly payroll processing, contractor payments, tax deductions, compliance, and benefits administration.",
        icon: Users,
    },
    {
        title: "Invoicing & Billing",
        description: "Automated invoicing, recurring billing setup, accounts receivable tracking, collections management, and payment processing.",
        icon: FileText,
    },
    {
        title: "Accounts Payable & Receivable",
        description: "Vendor bill processing, payment scheduling, receivables monitoring, cash flow tracking, and expense management.",
        icon: CreditCard,
    },
    {
        title: "Monthly Profit & Loss Reports",
        description: "Clear monthly P&L statements with revenue breakdowns, expense insights, margin analysis, and actionable recommendations.",
        icon: LineChart,
    },
    {
        title: "Budgeting & Forecasting",
        description: "Annual budget development, variance analysis, scenario planning, and structured financial forecasting for sustainable growth.",
        icon: Target,
    },
    {
        title: "Cash Flow Forecasting",
        description: "12-month rolling cash flow forecasts, liquidity planning, runway analysis, and proactive cash management strategies.",
        icon: HandCoins,
    },
    {
        title: "Financial Performance Analysis",
        description: "Deep analysis of KPIs, profitability trends, cost structures, and operational efficiency to improve financial performance.",
        icon: BarChart3,
    },
    {
        title: "VAT Filing",
        description: "Accurate VAT return preparation, submission, compliance checks, and regulatory deadline management.",
        icon: FileCheck,
    },
    {
        title: "HMRC & Companies House Joint Filing (UK)",
        description: "HMRC submissions, Companies House filings, statutory accounts preparation, and full UK regulatory compliance.",
        icon: Building2,
    },
    {
        title: "Chart of Accounts & Setup (for new books)",
        description: "Custom chart of accounts design, accounting software setup, system structuring, and scalable financial architecture.",
        icon: Layers,
    },
    {
        title: "CFO-Level Strategic Advice",
        description: "Executive-level financial strategy, modeling, capital planning, fundraising support, and long-term value creation.",
        icon: Compass,
    },
    {
        title: "Growth Planning & Cash Discipline",
        description: "Structured growth planning, disciplined cash management frameworks, financial controls, and capital allocation strategy.",
        icon: Rocket,
    },
    {
        title: "Decision Support When It Actually Matters",
        description: "On-demand financial insights for critical decisions including hiring, expansion, pricing strategy, investments, and risk management.",
        icon: Lightbulb,
    },
];


const ServiceSection2 = () => {
    return (
        <section className="">
            <div className="relative w-full overflow-hidden">
                {/* Background image */}
                <img
                    src={serviceBg}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt=""
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#00162c99]" />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 text-center">
                    <h1 className="text-white font-semibold text-start leading-tight text-[24px] md:text-[28px] lg:text-[40px]">
                        <small className="text-white text-[18px] uppercase tracking-[0.05em] mb-6 font-medium mx-[70px]">
                            Our Services
                        </small>
                        Complete finance solutions, backed by CFO expertise and AI-powered insights for growth.
                    </h1>
                </div>

                {/* Services cards */}
                <div className="relative w-full z-20 group/slider">
                    <button
                        className="opacity-100 md:opacity-0 transition transition-all duration-500 flex service-prev absolute left-0 bottom-24 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-navy-light backdrop-blur items-center justify-center hover:bg-gold "
                    >
                        <MoveLeft className=" text-white" size={12} />
                    </button>

                    <button
                        className="opacity-100 md:opacity-0 transition transition-all duration-500 flex service-next absolute right-0 bottom-24 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-navy-light backdrop-blur items-center justify-center hover:bg-gold "
                    >
                        <MoveRight className="text-white" size={12} />
                    </button>
                    <Swiper
                        modules={[Navigation]}
                        speed={900}
                        navigation={{
                            prevEl: ".service-prev",
                            nextEl: ".service-next",
                        }}
                        className="service-2-swiper"
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {services.map((_, index) => {
                            if (index % 2 !== 0) return null

                            const topService = services[index];
                            const bottomService = services[index + 1];

                            return (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col max-h-[650px]">

                                        {/* TOP CARD */}
                                        <div className="service-2-card-top group flex flex-col items-start w-full md:min-h-[455px]">
                                            <div className=" mb-4">
                                                <topService.icon className=" text-[#91d089]" size={50} strokeWidth={2} />
                                            </div>

                                            <h3 className="font-bold text-white text-[24px] -translate-y-[60px] group-hover:translate-y-0 transition-transform duration-500">
                                                {topService.title}
                                            </h3>

                                            <p className="text-[18px] text-white/90 font-medium mb-[15px] pr-[30px]">
                                                {topService.description}
                                            </p>

                                            <Link to="/services" className="mt-auto inline-flex items-center gap-3 bg-gold text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition">
                                                Discover More
                                                <span className="bg-white text-black w-7 h-7 rounded-full flex items-center justify-center">
                                                    <ArrowRight size={18} />
                                                </span>
                                            </Link>
                                        </div>

                                        {/* BOTTOM CARD */}
                                        {bottomService && (
                                            <div className="service-2-card group flex flex-col items-start w-full md:min-h-[455px]">
                                                <div className=" mb-4">
                                                    <bottomService.icon className="w-[50px] h-[50px] text-[#91d089]" strokeWidth={2} />
                                                </div>

                                                <h3 className="font-bold text-white text-[24px] -translate-y-[60px] group-hover:translate-y-0 transition-transform duration-500">
                                                    {bottomService.title}
                                                </h3>

                                                <p className="text-[18px] text-white/90 font-medium mb-[45px] pr-[30px]">
                                                    {bottomService.description}
                                                </p>

                                                <Link to="/services" className="mt-auto inline-flex items-center gap-3 bg-gold text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition">
                                                    Discover More
                                                    <span className="bg-white text-black w-7 h-7 rounded-full flex items-center justify-center">
                                                        <ArrowRight size={18} />
                                                    </span>
                                                </Link>
                                            </div>
                                        )}

                                    </div>
                                </SwiperSlide>
                            );
                        })}

                    </Swiper>

                </div>

                {/* Bottom green strip */}
            </div>
            <MarqueeSection2 />
        </section>
    );
};

export default ServiceSection2;
