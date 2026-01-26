import serviceBg from '@/assets/industry-bg-1.jpg';
import 'swiper/css'
import 'swiper/css/navigation'
import MarqueeSection from "./MarqueeSection";
import {
    HeartPulse,
    Cpu,
    Factory,
    Store,
    Home,
    Handshake,
    Rocket,
    ShoppingCart
} from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';

const services = [
    {
        title: "Healthcare",
        icon: HeartPulse,
    },
    {
        title: "Technology",
        icon: Cpu,
    },
    {
        title: "Manufacturing",
        icon: Factory,
    },
    {
        title: "Retail",
        icon: Store,
    },
    {
        title: "Real Estate",
        icon: Home,
    },
    {
        title: "Non Profits",
        icon: Handshake,
    },
    {
        title: "Startup",
        icon: Rocket,
    },
    {
        title: "E-Commerce",
        icon: ShoppingCart,
    },
];

const ServiceSection3 = () => {
    return (
        <section className="section-padding">
            <div className="relative w-full  overflow-hidden">
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
                    <AnimatedHeading
                        text="Industries We Serve Tailored Financial Solutions for Your Sector’s Unique Needs"
                        className="text-4xl md:text-5xl font-[700] text-white leading-tight"
                        duration={0.6}
                        stagger={0.01}
                        startDelay={0.3}
                        center={true}
                    />
                </div>

                {/* Services cards */}
                <div className="relative w-full z-20 group/slider mt-[350px] my-5">
                    <div className="flex flex-wrap gap-2 lg:px-4 md:px-2 px-1">
                        {services.map((service) => (
                            <div className="service-3-card group flex flex-col items-start h-full">
                                <div className="mb-4 text-gold px-3 py-2 bg-white/70 rounded-full">
                                    <service.icon className="w-[20px] h-[25px]" strokeWidth={2} />
                                </div>

                                <h3 className="font-bold text-white text-[14px] transition-transform duration-500">
                                    {service.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceSection3;
