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
    <section className="section-padding">
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
            className="flex flex-wrap gap-2 lg:px-4 md:px-2 px-1"
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
                <div className="mb-4 text-gold px-3 py-2 bg-white/70 rounded-full">
                  <service.icon className="w-[20px] h-[25px]" strokeWidth={2} />
                </div>

                <h3 className="font-bold text-white text-[14px]">
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection3;
