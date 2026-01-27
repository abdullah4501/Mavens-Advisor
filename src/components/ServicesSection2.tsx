import { ArrowRight, MoveLeft, MoveRight } from "lucide-react";
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

const services = [
    {
        title: "Tax Planning & Compliance",
        description: "Minimize liabilities and meet deadlines with our strategic tax support for individuals and businesses.",
        icon: Receipt,
    },
    {
        title: "Bookkeeping & Financial Reporting",
        description: "Accurate record-keeping and insightful financial reporting to keep your business on track.",
        icon: BookOpen,

    },
    {
        title: "Payroll Services",
        description: "Streamlined payroll processing with compliance and tax management.",
        icon: Wallet,
    },
    {
        title: "Business Advisory",
        description: "Strategic guidance to help you navigate challenges and seize opportunities.",
        icon: LineChart,
    },
];

const ServiceSection2 = () => {
    return (
        <section className="section-padding">
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


                    <h1 className="text-white font-semibold text-start leading-tight mx-auto max-w-4xl text-[24px] md:text-[28px] lg:text-[32px]">
                        <small className="text-white text-xs uppercase tracking-[0.25em] mb-6 opacity-90 mx-[70px]">
                            Our SERVICES
                        </small>   Expert accounting and management advice, all in one place. Custom-crafted for the way your business works.
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
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col gap-6">
                                    <div className="service-2-card-top group flex flex-col items-start w-full h-full min-h-auto min-h-auto md:min-h-[535px]">
                                        <div className="mb-4 text-gold px-4 py-3 bg-white/70 rounded-full">
                                            <service.icon className="w-[40px] h-[50px]" strokeWidth={2} />
                                        </div>

                                        <h3 className="font-bold text-white text-[20px] -translate-y-[90px] group-hover:translate-y-0 transition-transform duration-500">
                                            {service.title}
                                        </h3>

                                        <p className="text-sm text-white/90 font-medium mb-[15px]">
                                            {service.description}
                                        </p>

                                        <a
                                            href="#"
                                            className="mt-auto inline-flex items-center gap-3 bg-gold text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
                                        >
                                            Discover More
                                            <span className="bg-white text-black w-7 h-7 rounded-full flex items-center justify-center">
                                                <ArrowRight size={18} />
                                            </span>
                                        </a>
                                    </div>
                                    <div className="service-2-card group flex flex-col items-start w-full h-full min-h-auto md:min-h-[535px]">
                                        <div className="mb-4 text-gold px-4 py-3 bg-white/70 rounded-full">
                                            <service.icon className="w-[40px] h-[50px]" strokeWidth={2} />
                                        </div>

                                        <h3 className="font-bold text-white text-[20px] -translate-y-[90px] group-hover:translate-y-0 transition-transform duration-500">
                                            {service.title}
                                        </h3>

                                        <p className="text-sm text-white/90 font-medium mb-[45px]">
                                            {service.description}
                                        </p>

                                        <a
                                            href="#"
                                            className="mt-auto inline-flex items-center gap-3 bg-gold text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
                                        >
                                            Discover More
                                            <span className="bg-white text-black w-7 h-7 rounded-full flex items-center justify-center">
                                                <ArrowRight size={18} />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

                {/* Bottom green strip */}
            </div>
            <MarqueeSection />
        </section>
    );
};

export default ServiceSection2;
