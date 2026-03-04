import { useState } from "react";
import { Wallet, Search, FileText, Handshake } from "lucide-react";

import img1 from "@/assets/static-box-01.jpg";
import img2 from "@/assets/static-box-02.jpg";
import img3 from "@/assets/static-box-03.jpg";

const services = [
    {
        image: img1,
        icon: <Search size={40} className="text-[#628fff]" />,
        title: "Business Assessment",
        description:
            "We analyze your business model, financial position, and funding goals.",
    },
    {
        image: img2,
        icon: <FileText size={40} className="text-[#628fff]" />,
        title: "Investment Preparation",
        description:
            "We prepare investor-ready documents, financial models, and deal structures.",
    },
    {
        image: img3,
        icon: <Handshake size={40} className="text-[#628fff]" />,
        title: "Deal Execution",
        description:
            "We connect you with investors and support negotiations through closing.",
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
