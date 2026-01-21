import { useState } from "react";
import { Wallet } from "lucide-react";

import img1 from "@/assets/static-box-01.jpg";
import img2 from "@/assets/static-box-02.jpg";
import img3 from "@/assets/static-box-03.jpg";

const services = [
    {
        image: img1,
        icon: <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="m11.29 83.193v-9.433a1.465 1.465 0 0 1 1.466-1.46h19.287a1.465 1.465 0 0 1 1.465 1.465v9.433a1.465 1.465 0 0 1 -1.465 1.465h-19.287a1.465 1.465 0 0 1 -1.466-1.47zm44.987-29.343a6.077 6.077 0 1 0 6.077 6.077 6.076 6.076 0 0 0 -6.077-6.077z" fill="#628fff"></path>
            <path d="m59.115 64.617a7.528 7.528 0 1 1 7.528-7.528 7.537 7.537 0 0 1 -7.528 7.528zm0-12.153a4.625 4.625 0 1 0 4.625 4.625 4.63 4.63 0 0 0 -4.625-4.625zm30.382-11h-.574v-16.78a1.452 1.452 0 0 0 -1.452-1.452h-10.7v-12.726a1.453 1.453 0 0 0 -1.744-1.422l-68.865 14.177a1.452 1.452 0 0 0 -1.162 1.423v64.809a1.452 1.452 0 0 0 1.452 1.452h81.019a1.452 1.452 0 0 0 1.452-1.452v-16.774h.577a5.508 5.508 0 0 0 5.5-5.5v-20.258a5.508 5.508 0 0 0 -5.5-5.502zm-15.632-18.232h-53.165l53.165-10.945zm12.155 64.81h-78.12v-61.907h78.12v15.324h-26.9a15.63 15.63 0 1 0 0 31.26h26.9zm6.08-20.826a2.6 2.6 0 0 1 -2.6 2.6h-30.385a12.727 12.727 0 1 1 0-25.454h30.385a2.6 2.6 0 0 1 2.6 2.6z"></path>
        </svg>,
        title: "Market Research",
        description: "Businesses that partner with us gain a strategic advantage",
    },
    {
        image: img2,
        icon: <svg xmlns="http://www.w3.org/2000/svg" id="Icon36" viewBox="0 0 100 100"><path d="M29.435,73.951H19.274A1.451,1.451,0,0,1,17.823,72.5V31.855A1.451,1.451,0,0,1,19.274,30.4H29.435a1.452,1.452,0,0,1,1.452,1.452V72.5A1.452,1.452,0,0,1,29.435,73.951ZM52.661,72.5V31.855A1.452,1.452,0,0,0,51.21,30.4H41.048A1.452,1.452,0,0,0,39.6,31.855V72.5a1.451,1.451,0,0,0,1.451,1.451H51.21A1.451,1.451,0,0,0,52.661,72.5Zm21.774,0V31.855A1.451,1.451,0,0,0,72.984,30.4H62.823a1.452,1.452,0,0,0-1.452,1.452V72.5a1.452,1.452,0,0,0,1.452,1.451H72.984A1.451,1.451,0,0,0,74.435,72.5Z" fill="#628fff"></path><path d="M12.984,31.855h7.258v42.1A1.452,1.452,0,0,0,21.694,75.4H34.758a1.452,1.452,0,0,0,1.452-1.452v-42.1h5.806v42.1A1.452,1.452,0,0,0,43.468,75.4H56.532a1.452,1.452,0,0,0,1.452-1.452v-42.1H63.79v42.1A1.452,1.452,0,0,0,65.242,75.4H78.306a1.452,1.452,0,0,0,1.452-1.452v-42.1h7.258a1.452,1.452,0,0,0,.736-2.7L50.736,7.378a1.453,1.453,0,0,0-1.472,0L12.248,29.152a1.452,1.452,0,0,0,.736,2.7ZM33.306,72.5H23.145V31.855H33.306Zm21.775,0H44.919V31.855H55.081Zm21.774,0H66.694V31.855H76.855ZM50,10.313,81.686,28.951H18.314ZM11.532,82.661a1.453,1.453,0,0,1,1.452-1.452H87.016a1.452,1.452,0,1,1,0,2.9H12.984A1.453,1.453,0,0,1,11.532,82.661ZM95,91.371a1.452,1.452,0,0,1-1.452,1.451H6.452a1.452,1.452,0,1,1,0-2.9h87.1A1.452,1.452,0,0,1,95,91.371Z"></path></svg>,
        title: "Risk Management",
        description: "Businesses that partner with us gain a strategic advantage",
    },
    {
        image: img3,
        icon: <svg id="Icon17" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m66.355 28.689a19.308 19.308 0 1 1 -19.307-19.308 19.307 19.307 0 0 1 19.307 19.308zm-19.879 22.654-3.676 27.608 7.2 4 7.2-4-3.676-27.608c-1.162-.107-2.334-.177-3.524-.177s-2.362.07-3.524.177z" fill="#628fff"></path><path d="m50 46.472a20.736 20.736 0 1 1 20.736-20.736 20.759 20.759 0 0 1 -20.736 20.736zm0-38.615a17.879 17.879 0 1 0 17.879 17.879 17.9 17.9 0 0 0 -17.879-17.879zm.236 41.857h-.472a39.876 39.876 0 0 0 -39.831 39.831v4a1.452 1.452 0 0 0 1.452 1.455h77.23a1.452 1.452 0 0 0 1.452-1.452v-4a39.876 39.876 0 0 0 -39.831-39.834zm0 2.9a36.686 36.686 0 0 1 15.474 3.415v16.533l-15.71 8.73-15.71-8.73v-16.533a36.686 36.686 0 0 1 15.474-3.411zm36.927 39.486h-74.326v-2.555a36.942 36.942 0 0 1 18.549-32.009v15.88a1.451 1.451 0 0 0 .747 1.269l17.167 9.537a1.449 1.449 0 0 0 1.41 0l17.162-9.537a1.451 1.451 0 0 0 .747-1.269v-15.88a36.942 36.942 0 0 1 18.544 32.009z"></path></svg>,
        title: "Tax Preparation",
        description: "Businesses that partner with us gain a strategic advantage",
    },
];

const ServicesGrid = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <section className="bg-background">
            <div className="overflow-hidden">
                <div className="py-24 relative grid lg:grid-cols-4 grid-cols-1 gap-6 w-full">

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
