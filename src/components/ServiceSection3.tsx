import serviceBg from "@/assets/industry-bg-1.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HeartPulse,
  Cpu,
  Factory,
  Store,
  Home,
  Handshake,
  Rocket,
  ShoppingCart,
} from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

const services = [
  { title: "Healthcare", icon: HeartPulse },
  { title: "Technology", icon: Cpu },
  { title: "Manufacturing", icon: Factory },
  { title: "Retail", icon: Store },
  { title: "Real Estate", icon: Home },
  { title: "Non Profits", icon: Handshake },
  { title: "Startup", icon: Rocket },
  { title: "E-Commerce", icon: ShoppingCart },
];
const stats = [
  {
    number: "1200+",
    label: "Tax Returns Filed Successfully",
  },
  {
    number: "98%",
    label: "Client Retention Rate",
  },
  {
    number: "99%",
    label: "On-Time Project Delivery",
  },
  {
    number: "24/7",
    label: "Client Support Availability",
  },
];


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const ServiceSection3 = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  // Use `once: true` to permanently lock animation after first trigger - no manual state needed
  const inView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section className="section-padding py-16">
      <div className="relative w-full overflow-hidden">
        <img
          src={serviceBg}
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-[#00162c99]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 text-center">
          <AnimatedHeading
            text="Industries We Serve Tailored Financial Solutions for Your Sector's Unique Needs"
            className="text-4xl md:text-5xl font-[700] text-white leading-tight"
            duration={0.6}
            stagger={0.01}
            startDelay={0.3}
            center={true}
          />
        </div>

        <div className="relative w-full z-20 mt-[350px] my-5">
          <motion.div
            ref={ref}
            className="flex flex-wrap gap-2 lg:px-4 md:px-2 px-1 justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="service-3-card flex flex-col items-start h-full will-change-opacity"
              >
                <div className=" mb-5">
                  <service.icon className="w-[50px] h-[50px] text-[#91D089]" strokeWidth={2} />
                </div>

                <h3 className="font-bold text-white text-[18px]">
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="bg-stats-bg">
        <div className="px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className=" pl-6 py-4 funfact-card relative"
              >
                <div className="text-stats-number text-[50px] md:text-[64px] tracking-tight mb-2 font-semibold text-[#393737]">
                  {stat.number}
                </div>
                <div className=" font-medium md:text-[18px] text-[16px] text-[#393737]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection3;
