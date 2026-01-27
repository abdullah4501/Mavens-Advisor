import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import teamStairs from "@/assets/wh-img-3.jpg";
import teamLaptop from "@/assets/wh-img-4.jpg";
import AnimatedHeading from "./AnimatedHeading";
import FeatureIcon from "./FeatureIcon";

const features = [
  {
    number: 1,
    title: "Client-First Approach",
    description:
      "Dedicated account managers who learn your business and become an extension of your team.",
    icon: "heart" as const,
  },
  {
    number: 2,
    title: "Tech-Enabled Solutions",
    description:
      "Cloud-based platforms give you real-time financial insights from anywhere, anytime.",
    icon: "settings" as const,
  },
  {
    number: 3,
    title: "Growth Focused",
    description:
      "We identify opportunities, not just compliance requirements, to help scale your business.",
    icon: "trending" as const,
  },
  {
    number: 4,
    title: "Ironclad Security",
    description:
      "Enterprise-grade data protection with 256-bit encryption and SOC 2 compliant systems.",
    icon: "shield" as const,
  },
  {
    number: 5,
    title: "Proactive Advice",
    description:
      "Quarterly strategy sessions to anticipate challenges before they become problems.",
    icon: "headphones" as const,
  },
  {
    number: 6,
    title: "Proven Results",
    description:
      "Dedicated account managers for personalized service before they become problems.",
    icon: "headphones" as const,
  },
];

const ITEM_HEIGHT = 180; // Height of each feature item in pixels
const VISIBLE_ITEMS = 4; // Number of items visible at once

const WhyChooseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      setContainerHeight(0);
      return;
    }

    const totalScrollNeeded =
      (features.length - VISIBLE_ITEMS + 1) * ITEM_HEIGHT;

    setContainerHeight(totalScrollNeeded + window.innerHeight);
  }, [isDesktop]);


  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const maxScrollDistance = (features.length - VISIBLE_ITEMS) * ITEM_HEIGHT;

  const transformY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -maxScrollDistance]
  );


  const y = isDesktop ? transformY : 0;


  return (
    <section
      ref={sectionRef}
      className={`relative bg-background ${isDesktop ? "-mb-[280px]" : ""} "`}
      style={{
        height: isDesktop
          ? containerHeight
          : "auto",
      }}
    >
      <div className={isDesktop ? "sticky top-0 flex items-center overflow-hidden" : ""}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* LEFT (pinned) - No changes as requested */}
            <div className="space-y-8">
              <span className="inline-block text-muted-foreground font-medium text-sm tracking-wide">
                Why Choose Limpa?
              </span>

              <AnimatedHeading
                text="We're not just accountants — we're strategic partners invested in your financial success"
                className="text-4xl md:text-5xl font-bold text-navy leading-tight"
                duration={0.6}
                stagger={0.01}
                startDelay={0.3}
              />

              <div className="flex gap-4 pt-4">
                <img
                  src={teamStairs}
                  alt="Team on stairs"
                  className="w-1/2 h-80 object-cover rounded-lg"
                />
                <img
                  src={teamLaptop}
                  alt="Team with laptop"
                  className="w-1/2 h-80 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* RIGHT (scrolling feature list) */}
            <div
              className="relative overflow-hidden"
              style={{
                height: isDesktop ? "100vh" : "auto",
              }}
            >
              <motion.div
                className="flex flex-col"
                style={{ y: isDesktop ? y : 0 }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.number}
                    className="border-b border-divider"
                    style={{ height: ITEM_HEIGHT }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <div className="flex gap-5 py-8 h-full items-start">
                      <FeatureIcon iconType={feature.icon} />
                      <div className="flex-1">
                        <h3 className="text-[24px] text-foreground font-bold mb-3">
                          {feature.number}. {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
