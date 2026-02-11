import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import teamStairs from "@/assets/wh-img-3.jpg";
import teamLaptop from "@/assets/wh-img-4.jpg";
import AnimatedHeading from "./AnimatedHeading";
import FeatureIcon from "./FeatureIcon";

const features = [
  {
    number: 1,
    title: "Predictable Pricing. No Surprises.",
    description:
      "Fixed monthly subscription. Quote-based on your business activity. Calculated instantly. No hourly billing. No hidden fees. No reactive invoices.",
    icon: "pricing" as const,
  },
  {
    number: 2,
    title: "CFO + Complete Finance Team",
    description:
      "At the cost of a bookkeeper, get a dedicated CFO, complete virtual finance department, and full ownership of outcomes, not just reports.",
    icon: "team" as const,
  },
  {
    number: 3,
    title: "AI-Powered Analytics Portal",
    description:
      "Know what matters — when it matters. Custom analytics, real-time insights, tax savings opportunities, and an integrated AI assistant for quick answers.",
    icon: "ai" as const,
  },
  {
    number: 4,
    title: "This Is Not a Temporary Fix",
    description:
      "Most finance setups break when the business grows. Mavens Advisor scales with you. No rehiring. No restructuring. No starting over.",
    icon: "scale" as const,
  },
  {
    number: 5,
    title: "Imagine Financial Clarity",
    description:
      "You know your numbers. You trust your reports. You make decisions with confidence. You stop worrying about compliance. You focus on growth.",
    icon: "clarity" as const,
  },
  {
    number: 6,
    title: "Built For Growing Businesses",
    description:
      "Founders who want CFO-level insight without hiring in-house. UK companies needing reliable, compliant financial leadership. Owners who see finance as a growth engine.",
    icon: "business" as const,
  },
  {
    number: 7,
    title: "The Cost of Delay",
    description:
      "Every month without proper financial leadership: hidden risks grow, missed tax savings compound, poor decisions get expensive. The most expensive finance function is the one you delay building.",
    icon: "delay" as const,
  },
];


const ITEM_HEIGHT = 160; // Height of each feature item in pixels
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
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-15%", "0%", "8%"]
  );

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
      className={` pb-0 relative bg-background ${isDesktop ? "-mb-[300px]" : ""} "`}
      style={{
        height: isDesktop
          ? containerHeight
          : "auto",
      }}
    >
      <div className={isDesktop ? "sticky top-0 flex items-center overflow-hidden" : ""}>
        <div className="container ">
          <div className="section-padding pb-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* LEFT (pinned) - No changes as requested */}
            <div className="space-y-8">
              <span className="inline-block bg-white font-semibold text-[#7c898d] px-4 py-1.5 text-xs uppercase rounded mb-6">
                Why Choose Us
              </span>

              <AnimatedHeading
                text="Calculate your quote. Lock it. Get your Virtual CFO."
                className="text-4xl md:text-5xl font-bold text-navy leading-tight"
                duration={0.6}
                stagger={0.01}
                startDelay={0.3}
              />

              <div className="flex gap-4 pt-4">
                <div className="overflow-hidden rounded-[20px] h-full">
                  <motion.img
                    src={teamStairs}
                    alt="Team on stairs"
                    className="h-full w-full object-cover"
                    style={{ y: isDesktop ? imageY : 0 }}
                  />
                </div>

                <div className="overflow-hidden rounded-[20px] h-full">
                  <motion.img
                    src={teamLaptop}
                    alt="Team with laptop"
                    className="h-full w-full object-cover"
                    style={{ y: isDesktop ? imageY : 0 }}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT (scrolling feature list) */}
            <div
              className="relative overflow-hidden"
              style={{
                height: isDesktop ? "auto" : "auto",
              }}
            >
              <motion.div
                className="flex flex-col"
                style={{ y: isDesktop ? y : 0 }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.number}
                    className=" mb-[40px]"
                    style={{ height: ITEM_HEIGHT }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    <div className="flex gap-5 h-full items-start">
                      <FeatureIcon iconType={feature.icon} />
                      <div className="flex-1 border-b border-divider pb-[40px]">
                        <h3 className="text-[24px] text-foreground font-bold mb-3">
                          {feature.number}. {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-[18px] leading-relaxed">
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
