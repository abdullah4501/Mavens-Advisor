import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import teamStairs from "@/assets/wh-img-3.jpg";
import teamLaptop from "@/assets/wh-img-4.jpg";
import AnimatedHeading from "./AnimatedHeading";
import FeatureIcon from "./FeatureIcon";

const features = [
  {
    number: 1,
    title: "Strategic Financial Planning & Forecasting",
    description: "Align your business goals with actionable financial roadmaps and long-term projections.",
    icon: "business" as const,
  },
  {
    number: 2,
    title: "Budgeting & Cash Flow Control",
    description: "Optimize operations and manage liquidity with precise budget monitoring and cash management.",
    icon: "pricing" as const,
  },
  {
    number: 3,
    title: "KPI Dashboards & Performance Monitoring",
    description: "Track the metrics that matter most with customized dashboards and real-time insights.",
    icon: "scale" as const,
  },
  {
    number: 4,
    title: "Financial Reporting & Compliance",
    description: "Ensure investor-ready financials and full compliance with regional regulations.",
    icon: "clarity" as const,
  },
  {
    number: 5,
    title: "Accounting Oversight",
    description: "High-level review and leadership for your existing accounting functions.",
    icon: "team" as const,
  },
  {
    number: 6,
    title: "Fundraising & Investor Support",
    description: "Expert guidance through every stage of the fundraising journey and beyond.",
    icon: "pricing" as const,
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
                VIRTUAL CFO SERVICES
              </span>

              <AnimatedHeading
                text="Strategic Virtual CFO & Financial Leadership for Growth‑Driven Businesses."
                className="text-4xl md:text-5xl font-bold text-navy leading-tight"
                duration={0.6}
                stagger={0.01}
                startDelay={0.3}
              />

              <div className="space-y-4 text-muted-foreground text-[18px]">
                <p>
                  <strong className="text-navy">What is a Virtual CFO?</strong> A seasoned finance expert who leads your financial strategy, planning, and reporting — without being on your payroll.
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm font-semibold text-navy">
                  <li>• Strategic Leadership</li>
                  <li>• Cost‑Effective</li>
                  <li>• Investor‑Ready</li>
                  <li>• Improved Decisions</li>
                </ul>
              </div>

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
