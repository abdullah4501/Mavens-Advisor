import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import teamStairs from "@/assets/wh-img-3.jpg";
import teamLaptop from "@/assets/wh-img-4.jpg";
import AnimatedHeading from "./AnimatedHeading";
import FeatureIcon from "./FeatureIcon";

const features = [
  {
    number: 1,
    title: "Deep Regional Market Expertise",
    description:
      "Strategic insights into the UAE, GCC, and MENA financial markets, helping you navigate complex regulatory and investment landscapes.",
    icon: "business" as const,
  },
  {
    number: 2,
    title: "Access to Diversified Capital",
    description:
      "Our network includes leading Venture Capital firms, Private Equity investors, Family Offices, and financial institutions across the Middle East.",
    icon: "team" as const,
  },
  {
    number: 3,
    title: "Tailored Funding Strategies",
    description:
      "We don't believe in one-size-fits-all. We structure equity and debt solutions specifically designed for your company's growth stage.",
    icon: "pricing" as const,
  },
  {
    number: 4,
    title: "End-to-End Deal Execution",
    description:
      "From strategy and pitch decks to term sheet negotiation and deal closure — Green Brander LLC handles the heavy lifting of fundraising.",
    icon: "scale" as const,
  },
  {
    number: 5,
    title: "Investment Readiness Assessment",
    description:
      "We ensure your business is 'investor-ready' by auditing your financials, business model, and due diligence documentation before outreach.",
    icon: "clarity" as const,
  },
  {
    number: 6,
    title: "Structured Debt & Financing",
    description:
      "Secure optimal debt facilities, working capital, or project financing without unnecessary dilution through our structured advisory services.",
    icon: "pricing" as const,
  },
  {
    number: 7,
    title: "Strategic Financial Leadership",
    description:
      "Beyond fundraising, we provide high-level corporate finance advisory to optimize your capital structure and financial decision-making.",
    icon: "team" as const,
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
                text="Strategic Financial Advisory Tailored for Your Success."
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
