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
                    <h2 className="text-white font-semibold leading-tight mx-auto max-w-4xl text-[24px] md:text-[28px] lg:text-[32px]">
                        Industries We Serve Tailored Financial Solutions for Your Sector’s Unique Needs
                    </h2>
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
