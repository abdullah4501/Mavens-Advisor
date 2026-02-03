import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import img1 from "@/assets/about-01.jpg";
import img2 from "@/assets/about-02.png";
import infobox from "@/assets/infobox-img.png";
import AnimatedHeading from "./AnimatedHeading";

const StrategiesSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const statsRef = useRef<HTMLDivElement | null>(null);

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          animate(count, 25, {
            duration: 1.2,
            ease: "easeOut",
            onUpdate: (v) => setValue(Math.round(v)),
          });
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [started, count]);

  return (
    <section ref={sectionRef} className="py-28">
      <div className="container mx-auto grid lg:grid-cols-2 gap-20">

        {/* LEFT IMAGE GROUP */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative flex gap-8"
        >
          <div className="h-[85%] overflow-hidden rounded-lg">
            <img src={img1} className="w-full h-full object-cover" alt="" />
          </div>

          <div className="h-full overflow-hidden rounded-lg relative">
            <img src={img2} className="w-full h-full object-cover" alt="" />
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white shadow-[0_20px_60px_0_rgba(0,0,0,0.08)] rounded-xl px-6 py-4 flex flex-col items-center gap-3">
            <img src={infobox} alt="" />
            <span className="font-medium text-md font-[600]">
              20K+ Customer Worldwide
            </span>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-muted text-[#7c898d] font-semibold px-4 py-1.5 text-xs uppercase rounded mb-6">
            Welcome
          </span>

          <AnimatedHeading
            text="Top strategies for achieving sustainable business"
            className="text-4xl md:text-5xl font-[700] text-navy leading-tight"
            duration={0.6}
            stagger={0.01}
            startDelay={0.3}
          />


          <p className="text-muted-foreground text-[18px] mb-12 font-medium mt-6">
            We specialize in helping small businesses thrive by providing expert
            guidance in business planning and growth strategy.
          </p>

          <div className="border-t mb-10"></div>

          {/* STATS */}
          <div ref={statsRef} className="grid grid-cols-2 items-center gap-10 ywe-stats">
            <div className="text-center">
              <div className="text-gold text-[8rem] font-bold leading-none">
                {value}
                <sup>+</sup>
              </div>
              <p className="mt-2 font-bold">
                Years of working
                <br />
                experience
              </p>
            </div>

            <div className="border-l pl-10">
              <p className="text-muted-foreground mb-6 font-medium">
                We help small and growing businesses cut carbon, boost
                credibility, and move forward with confidence.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-3 bg-navy-light text-white px-[15px] pl-[25px] py-[15px] rounded-[5px] font-medium hover:bg-gold hover:scale-105 transition"
              >
                Discover More
                <span className="bg-white text-black w-7 h-7 rounded-full flex items-center justify-center">
                  <ArrowRight size={18} />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategiesSection;
