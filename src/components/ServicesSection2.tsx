import { ArrowRight, MoveLeft, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import serviceBg from '@/assets/service-bg-2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import MarqueeSection from "./MarqueeSection";
import {
    Receipt,
    BookOpen,
    Wallet,
    LineChart,
} from "lucide-react";
import MarqueeSection2 from "./MarqueeSection2";

const services = [
    {
        title: "Bookkeeping & Reconciliations",
        description: "Complete bookkeeping with reconciliation, bank matching, and accurate record-keeping every month.",
        icon: Receipt,
    },
    {
        title: "Payroll & Contractor Payments",
        description: "Full payroll processing, tax withholding, and contractor payment handling with compliance.",
        icon: Receipt,
    },
    {
        title: "Invoicing & Billing",
        description: "Streamlined managing of payables and receivables to keep cash flow positive.",
        icon: Wallet,
    },
    {
        title: "Profit & Loss Reporting",
        description: "Detailed monthly profit and loss reports to track your business performance.",
        icon: BookOpen,
    },
    {
        title: "Budgeting & Cash Flow",
        description: "Forecasting and budgeting to help you plan for the future with confidence.",
        icon: Wallet,
    },
    {
        title: "Financial Performance Analysis",
        description: "Deep dive analysis into your financials to identify trends and opportunities.",
        icon: LineChart,
    },
    {
        title: "VAT Filing",
        description: "Accurate and timely VAT return filings to ensure compliance with tax authorities.",
        icon: BookOpen,
    },
    {
        title: "HMRC & Companies House Filings",
        description: "Handling all necessary statutory filings for UK businesses.",
        icon: BookOpen,
    },
    {
        title: "Chart of Accounts Setup",
        description: "Customized setup of your chart of accounts for better financial tracking.",
        icon: LineChart,
    },
    {
        title: "Ongoing Strategic Advice",
        description: "Continuous financial advice to help you make informed strategic decisions.",
        icon: Wallet,
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
                            Our SERVICES
                        </small>   Complete finance solutions, backed by CFO<br />expertise and AI-powered insights for growth.
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
                                                    <topService.icon className="w-[50px] h-[50px] text-[#91d089]" strokeWidth={2} />
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
