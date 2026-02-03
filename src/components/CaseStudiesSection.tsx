import React from "react";
import img1 from "@/assets/case-6.jpg";
import img2 from "@/assets/case-7.jpg";
import img3 from "@/assets/case-5.jpg";
import img4 from "@/assets/case-8.jpg";
import img5 from "@/assets/case-9.jpg";
import { ArrowRight } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";
import { motion } from "framer-motion";

const CaseStudiesSection = () => {
    return (
        <section className="py-24">
            <div className="container">

                {/* Heading */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 mb-20 text-center">
                    <AnimatedHeading
                        text="How We Helped Clients Overcome Challenges and Achieve Remarkable Results"
                        className="text-4xl md:text-5xl font-[700] text-navy leading-tight"
                        duration={0.6}
                        stagger={0.01}
                        startDelay={0.3}
                        center={true}
                    />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-12">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-5 col-span-12">

                        {/* Case 1 */}
                        <div className="mb-[45px]">
                            <motion.div
                                className="relative rounded-[16px] overflow-hidden"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                style={{ originX: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                            >
                                <img
                                    src={img3}
                                    alt="Revenue Cycle Optimization For Regional Hospital"
                                    className="w-full h-full object-cover"
                                />
                                <span className="absolute bottom-[30px] left-[30px] px-[15px] text-navy py-[5px] rounded-full bg-white">
                                    Healthcare
                                </span>
                            </motion.div>
                            <h3 className="mt-5 text-[24px] font-bold text-navy leading-snug">
                                Revenue Cycle Optimization For Regional Hospital
                            </h3>
                        </div>

                        {/* Case 2 */}
                        <div className="md:max-w-[80%] mr-auto lg:ml-auto mb-[45px]">
                            <motion.div
                                className="relative rounded-[16px] overflow-hidden"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                style={{ originX: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                            >
                                <img
                                    src={img1}
                                    alt="R&D Tax Credit Recovery for SaaS Startup"
                                    className="w-full h-full object-cover"
                                />
                                <span className="absolute bottom-[30px] left-[30px] px-[15px] text-navy py-[5px] rounded-full bg-white">
                                    Technology
                                </span>
                            </motion.div>
                            <h3 className="mt-5 text-[24px] font-bold text-navy leading-snug">
                                R&amp;D Tax Credit Recovery for SaaS Startup
                            </h3>
                        </div>

                        {/* CTA BUTTON */}
                        <div className="max-w-[80%] ml-auto md:mt-[120px] mb-[30px]">
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

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-7 col-span-12 lg:ml-[8.333333%]">

                        {/* Case 3 — TOP → BOTTOM */}
                        <div className="md:max-w-[87%] mr-auto lg:ml-auto mb-[45px]">
                            <motion.div
                                className="relative rounded-[16px] overflow-hidden"
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                style={{ originY: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                            >
                                <img
                                    src={img2}
                                    alt="Cost Accounting Transformation"
                                    className="w-full h-full object-cover"
                                />
                                <span className="absolute bottom-[30px] left-[30px] px-[15px] text-navy py-[5px] rounded-full bg-white">
                                    Manufacturing
                                </span>
                            </motion.div>
                            <h3 className="mt-5 text-[24px] font-bold text-navy leading-snug">
                                Cost Accounting Transformation
                            </h3>
                        </div>

                        {/* Case 4 */}
                        <div className="md:max-w-[87%] mr-auto mb-[45px]">
                            <motion.div
                                className="relative rounded-[16px] overflow-hidden"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                style={{ originX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                            >
                                <img
                                    src={img4}
                                    alt="Multi-State Sales Tax Compliance"
                                    className="w-full h-full object-cover"
                                />
                                <span className="absolute bottom-[30px] left-[30px] px-[15px] text-navy py-[5px] rounded-full bg-white">
                                    e-Commerce
                                </span>
                            </motion.div>
                            <h3 className="mt-5 text-[24px] font-bold text-navy leading-snug">
                                Multi-State Sales Tax Compliance
                            </h3>
                        </div>

                        {/* Case 5 */}
                        <div className="md:max-w-[87%] mr-auto lg:ml-auto mb-[45px]">
                            <motion.div
                                className="relative rounded-[16px] overflow-hidden"
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                style={{ originY: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                            >
                                <img
                                    src={img5}
                                    alt="Grant Compliance & Audit Defense"
                                    className="w-full h-full object-cover"
                                />
                                <span className="absolute bottom-[30px] left-[30px] px-[15px] text-navy py-[5px] rounded-full bg-white">
                                    Non-profit
                                </span>
                            </motion.div>
                            <h3 className="mt-5 text-[24px] font-bold text-navy leading-snug">
                                Grant Compliance &amp; Audit Defense
                            </h3>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default CaseStudiesSection;
