import React from "react";
import AnimatedHeading from "./AnimatedHeading";
import { ArrowRight, Check } from "lucide-react";
import icon1 from "@/assets/account-maintenance.svg";
import icon2 from "@/assets/online-tax.svg";
import icon3 from "@/assets/audit.svg";
import icon4 from "@/assets/consultant.svg";
import check from "@/assets/check.svg";
import { Link } from "react-router-dom";

const services = [
    {
        title: "Bookkeeping & Reconciliations",
        icon: icon1,
        items: [
            "Monthly reconciliations",
            "Invoice & expense tracking",
            "Bank account matching",
        ],
    },
    {
        title: "Tax Planning & Compliance",
        icon: icon2,
        items: [
            "VAT filing & returns",
            "HMRC compliance",
            "Tax optimization",
        ],
    },
    {
        title: "Financial Reporting & Analysis",
        icon: icon3,
        items: [
            "Monthly P&L statements",
            "Cash flow forecasts",
            "Performance dashboards",
        ],
    },
    {
        title: "Strategic Advisory",
        icon: icon4,
        items: [
            "Quarterly reviews",
            "CFO-level guidance",
            "Growth strategy support",
        ],
    },
];

const ServicesSection4 = () => {
    return (
        <section className="py-12 ">
            <div className="container">

                {/* Heading */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 mb-20 text-center">
                    <AnimatedHeading
                        text="From calculation to scaling, everything your finance needs covered"
                        className="text-4xl md:text-5xl font-[700] text-navy leading-tight"
                        duration={0.6}
                        stagger={0.01}
                        startDelay={0.3}
                        center={true}
                    />
                </div>

                {/* Services Cards */}
                <div className="flex flex-wrap justify-center gap-5">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card-new relative bg-white rounded-[20px] px-[30px] pt-[50px] pb-[30px] flex flex-col h-full w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)]"
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
                            <div className="mt-auto">
                                <Link to="/services" className="group flex items-center bg-gold rounded-full pl-6 pr-4 py-3 gap-4 hover:scale-105 transition">
                                    <span className="text-[15px] font-semibold text-white">
                                        Discover More
                                    </span>
                                    <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                                        <ArrowRight size={18} />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ServicesSection4;
