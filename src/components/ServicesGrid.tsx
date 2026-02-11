import { useState } from "react";
import { Wallet } from "lucide-react";

import img1 from "@/assets/static-box-01.jpg";
import img2 from "@/assets/static-box-02.jpg";
import img3 from "@/assets/static-box-03.jpg";

const services = [
    {
        image: img1,
        icon: <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Calculator/Bookkeeping Icon */}
            <rect x="20" y="15" width="60" height="70" rx="5" fill="#628fff" opacity="0.3"></rect>
            <rect x="25" y="20" width="50" height="20" rx="3" fill="#628fff"></rect>
            <rect x="25" y="48" width="14" height="10" rx="2" fill="#0f1729"></rect>
            <rect x="43" y="48" width="14" height="10" rx="2" fill="#0f1729"></rect>
            <rect x="61" y="48" width="14" height="10" rx="2" fill="#0f1729"></rect>
            <rect x="25" y="62" width="14" height="10" rx="2" fill="#0f1729"></rect>
            <rect x="43" y="62" width="14" height="10" rx="2" fill="#0f1729"></rect>
            <rect x="61" y="62" width="14" height="10" rx="2" fill="#628fff"></rect>
        </svg>,
        title: "Monthly Bookkeeping",
        description: "Clean monthly closes you can rely on—bank reconciliations, ledger maintenance, and accurate month-end reporting.",
    },
    {
        image: img2,
        icon: <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Users/Payroll Icon */}
            <circle cx="50" cy="28" r="14" fill="#628fff"></circle>
            <circle cx="25" cy="38" r="9" fill="#628fff" opacity="0.5"></circle>
            <circle cx="75" cy="38" r="9" fill="#628fff" opacity="0.5"></circle>
            <path d="M50 48c-14 0-26 9-26 20v12h52V68c0-11-12-20-26-20z" fill="#0f1729"></path>
            <path d="M25 52c-7 0-13 5.5-13 12.5V72h18v-8c0-4.5-1.8-8.7-5-12z" fill="#0f1729" opacity="0.3"></path>
            <path d="M75 52c7 0 13 5.5 13 12.5V72H70v-8c0-4.5 1.8-8.7 5-12z" fill="#0f1729" opacity="0.3"></path>
        </svg>,
        title: "Payroll Management",
        description: "Weekly or monthly payroll processing, contractor payments, tax deductions, compliance, and benefits administration.",
    },
    {
        image: img3,
        icon: <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Invoice/Billing Icon */}
            <rect x="20" y="10" width="60" height="80" rx="4" fill="#628fff" opacity="0.3"></rect>
            <rect x="25" y="15" width="50" height="70" rx="3" fill="white"></rect>
            <rect x="32" y="25" width="36" height="4" rx="2" fill="#628fff"></rect>
            <rect x="32" y="35" width="28" height="3" rx="1.5" fill="#0f1729" opacity="0.3"></rect>
            <rect x="32" y="42" width="20" height="3" rx="1.5" fill="#0f1729" opacity="0.3"></rect>
            <line x1="32" y1="55" x2="68" y2="55" stroke="#0f1729" strokeWidth="1" opacity="0.2"></line>
            <rect x="32" y="62" width="16" height="3" rx="1.5" fill="#0f1729" opacity="0.4"></rect>
            <rect x="52" y="62" width="16" height="3" rx="1.5" fill="#628fff"></rect>
            <rect x="32" y="70" width="16" height="3" rx="1.5" fill="#0f1729" opacity="0.4"></rect>
            <rect x="52" y="70" width="16" height="3" rx="1.5" fill="#628fff"></rect>
        </svg>,
        title: "Invoicing & Billing",
        description: "Automated invoicing, recurring billing setup, accounts receivable tracking, collections management, and payment processing.",
    },
];

const ServicesGrid = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <section className="">
            <div className="overflow-hidden">
                <div className="py-16 !pt-0 relative grid lg:grid-cols-4 grid-cols-1 gap-6 w-full">

                    {services.map((service, idx) => {
                        const offset =
                            activeIndex === null
                                ? 0
                                : idx > activeIndex
                                    ? 260 // push right cards
                                    : 0;

                        return (
                            <div
                                key={idx}
                                onMouseEnter={() => setActiveIndex(idx)}
                                style={{ "--offset": `${offset}px` } as React.CSSProperties}
                                className="service-grid-img relative cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:block lg:translate-x-[var(--offset)] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
                            >
                                {/* IMAGE */}
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover rounded-sm"
                                />

                                {/* DETAIL BOX */}
                                <div
                                    className={`
                                        lg:absolute static rounded-sm top-0 lg:-ml-[1px] lg:left-full h-full w-full lg:w-[280px]
                                        bg-white  p-8 flex flex-col justify-center shadow-[0_20px_60px_0_rgba(0,0,0,0.08)] ${activeIndex === idx ? "lg:opacity-100 lg:translate-x-0 lg:transition-none " : "lg:opacity-0 lg:translate-x-12 lg:transition-all lg:duration-700 lg:ease-[cubic-bezier(.22,1,.36,1)]"}
                                    `}
                                >

                                    <div className="w-12 h-12 flex items-center justify-center mb-5">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-[22px] font-bold text-navy mb-2">
                                        {service.title}
                                    </h3>

                                    <p className="text-muted-foreground font-semibold text-[14px] leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
