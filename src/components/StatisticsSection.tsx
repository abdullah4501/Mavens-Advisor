import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import img1 from "@/assets/businesswoman.jpg";
import img2 from "@/assets/team-meeting.jpg";
import img3 from "@/assets/businesswoman.jpg";
import BarChart from "./BarChart";
import ServicesGrid from "./ServicesGrid";
import AnimatedHeading from "./AnimatedHeading";

const StatisticsSection = ({ subTitle }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding  bg-white why-choose-us-section-one">
      <div className="container mx-auto">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-20 items-start mb-24">
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-muted text-[#7c898d] font-semibold px-4 py-1.5 text-xs uppercase rounded mb-6">
                {subTitle}
              </span>
            </motion.div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <AnimatedHeading
                text="We don't just manage your numbers—we build, scale, and lead your finance function"
                className="text-4xl md:text-5xl font-[700] text-navy leading-tight"
                duration={0.6}
                stagger={0.01}
                startDelay={0.3}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                {/* LEFT GRAPH AREA */}
                <div className="relative  ">
                  <BarChart />
                </div>
                {/* RIGHT TEXT */}
                <div>
                  <p className="text-muted-foreground mb-8 max-w-lg">
                    Mavens Advisor is not traditional outsourcing. We build an evergreen, scalable finance department so you can focus on growth without stress over books, compliance, or controls.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-gold"></span>
                      Complete finance department at bookkeeper cost
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-gold"></span>
                      AI-powered analytics with actionable insights
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-gold"></span>
                      Scales with your business—no rehiring friction
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* BOTTOM CARDS ROW */}
        <div className="">

          <ServicesGrid />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
