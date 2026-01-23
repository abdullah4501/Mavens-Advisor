import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import teamStairs from "@/assets/wh-img-3.jpg";
import teamLaptop from "@/assets/wh-img-4.jpg";
import AnimatedHeading from "./AnimatedHeading";

const features = [
    {
        number: 1,
        title: "Client-First Approach",
        description:
            "Dedicated account managers who learn your business and become an extension of your team.",
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M14 5C10.5 5 7.5 8 7.5 11.5C7.5 14 9 16 11 17.5L11 21C11 21.5 11.5 22 12 22H16C16.5 22 17 21.5 17 21L17 17.5C19 16 20.5 14 20.5 11.5C20.5 8 17.5 5 14 5Z" />
                <path d="M10 25H18" />
                <path d="M11 22V25" />
                <path d="M17 22V25" />
            </svg>
        ),
    },
    {
        number: 2,
        title: "Tech-Enabled Solutions",
        description:
            "Cloud-based platforms give you real-time financial insights from anywhere, anytime.",
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="14" cy="14" r="5" />
                <path d="M14 4V7" />
                <path d="M14 21V24" />
                <path d="M4 14H7" />
                <path d="M21 14H24" />
                <path d="M6.93 6.93L9.05 9.05" />
                <path d="M18.95 18.95L21.07 21.07" />
                <path d="M6.93 21.07L9.05 18.95" />
                <path d="M18.95 9.05L21.07 6.93" />
            </svg>
        ),
    },
    {
        number: 3,
        title: "Growth Focused",
        description:
            "We identify opportunities, not just compliance requirements, to help scale your business.",
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 20L10 14L14 18L24 8" />
                <path d="M18 8H24V14" />
            </svg>
        ),
    },
    {
        number: 4,
        title: "Ironclad Security",
        description:
            "Enterprise-grade data protection with 256-bit encryption and SOC 2 compliant systems.",
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="14" cy="14" r="9" />
                <circle cx="14" cy="14" r="4" />
                <path d="M14 5V10" />
                <path d="M14 18V23" />
                <path d="M5 14H10" />
                <path d="M18 14H23" />
            </svg>
        ),
    },
    {
        number: 5,
        title: "Proactive Advice",
        description:
            "Quarterly strategy sessions to anticipate challenges before they become problems.",
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M8 20C8 20 8 16 14 16C20 16 20 20 20 20" />
                <circle cx="14" cy="10" r="4" />
                <circle cx="14" cy="14" r="10" />
            </svg>
        ),
    },
];

const FeatureItem = ({
    feature,
    index,
    scrollYProgress,
    totalFeatures,
}: {
    feature: (typeof features)[0];
    index: number;
    scrollYProgress: any;
    totalFeatures: number;
}) => {
    // Each item animates in sequence based on scroll progress
    const start = index / totalFeatures;
    const end = (index + 0.5) / totalFeatures;

    const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
    const y = useTransform(scrollYProgress, [start, end], [30, 0]);

    return (
        <motion.div
            style={{ opacity, y }}
            className="transition-all duration-300"
        >
            <div className="flex items-start gap-5 py-8">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-icon-bg flex items-center justify-center text-icon-stroke">
                    {feature.icon}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                    <h3 className="text-text-heading text-xl font-semibold">
                        {feature.number}. {feature.title}
                    </h3>
                    <p className="text-text-body text-base leading-relaxed">
                        {feature.description}
                    </p>
                </div>
            </div>

            {/* Divider - not on last item */}
            {index < totalFeatures - 1 && (
                <div className="h-px bg-divider w-full" />
            )}
        </motion.div>
    );
};

const WhyChooseSection2 = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    return (
        <section
            ref={sectionRef}
            className="relative bg-background"
            style={{ height: `${100 + features.length * 40}vh` }}
        >
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Left Column - Stays pinned */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <span className="inline-block bg-muted text-[#7c898d] font-semibold px-4 py-1.5 text-xs uppercase rounded mb-6">
                                    Why Choose Mavens Advisor
                                </span>
                                <AnimatedHeading
                                    text="We're not just accountants - we're strategic partners invested
                                    in your financial success"
                                    className="text-4xl md:text-5xl font-[700] text-navy leading-tight"
                                    duration={0.6}
                                    stagger={0.01}
                                    startDelay={0.6}
                                />
                            </div>

                            {/* Images */}
                            <div className="flex gap-4">
                                <div className="flex-1 overflow-hidden rounded-lg">
                                    <img
                                        src={teamStairs}
                                        alt="Professional team walking down stairs"
                                        className="w-full h-80 object-cover"
                                    />
                                </div>
                                <div className="flex-1 overflow-hidden rounded-lg">
                                    <img
                                        src={teamLaptop}
                                        alt="Business women working on laptop"
                                        className="w-full h-80 object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Animates on scroll */}
                        <div className="space-y-0">
                            {features.map((feature, index) => (
                                <FeatureItem
                                    key={feature.number}
                                    feature={feature}
                                    index={index}
                                    scrollYProgress={scrollYProgress}
                                    totalFeatures={features.length}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection2;
