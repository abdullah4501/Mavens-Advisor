import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, Clock, MessageCircle, MoveLeft, MoveRight } from "lucide-react";
import blogHero from "@/assets/blog-21.jpg";
import BlogComments from "./BlogComments";
import BlogReplyForm from "./BlogReplyForm";
import X from "@/assets/twitter.png";
import facebook from "@/assets/facebook-.png";
import linkedin from "@/assets/linkedin.png";

const BlogArticle = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= 1024);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });
    const imageY = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        ["-15%", "0%", "8%"]
    );
    return (
        <article className="w-full">
            {/* Meta */}
            <div className="flex items-center gap-5 mb-8 text-[18px] font-medium text-muted-foreground">
                <div className="flex gap-2 items-center"><Calendar size={16} className="text-gold" /><span>October 18, 2023</span></div>
                <div className="flex gap-2 items-center"><Clock size={16} className="text-gold" /><a href="#">2 min read</a></div>
                <div className="flex gap-2 items-center"><MessageCircle size={16} className="text-gold" /><a href="#">7 Comments</a></div>
            </div>

            {/* Hero Image */}
            <div ref={sectionRef}
                className="w-full h-full rounded-sm overflow-hidden mb-8">
                <motion.img
                    src={blogHero}
                    alt="Financial analytics"
                    className="w-full h-auto object-cover rounded-[26px]"
                    style={{ y: isDesktop ? imageY : 0 }}
                />
            </div>

            {/* Content */}
            <div className="prose-blog">
                <h2 className="text-[40px] font-bold text-muted-foregroud mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed mb-12">
                    Whether you're a seasoned professional or an entrepreneur, increasing profitability doesn't always mean
                    selling more products or earning more. There are strategies you need to reduce your bottom line
                    and improve margins. Let's explore practical approaches that will help your business become more
                    profitable without the guesswork.
                </p>

                <h5 className="font-semibold text-foreground mt-8 mb-6">Optimize Pricing for Value, Not Volume</h5>
                <p className=" text-muted-foreground leading-relaxed mb-6">
                    One of the quickest ways to boost profitability is by optimizing how you set your
                    pricing structure. Consider value-based pricing over cost-plus strategies.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-12">
                    <li>Are your margins healthy? Look refined in a just-in-time strategy?</li>
                    <li>Could you introduce tiered packages or value-based pricing?</li>
                    <li>What competitors charge and how you position yourself.</li>
                </ul>

                <h5 className="font-semibold text-foreground mt-8 mb-6">Spend & Focus Self Strategically</h5>
                <p className=" text-muted-foreground leading-relaxed mb-6">
                    Not all growth comes from new leads or creating clients. Focus on what you know:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-12">
                    <li>20% of your clients generating 80% of the value, focus — THESE</li>
                    <li>Automated responses vs. hand-written campaigns</li>
                    <li>Smart marketing strategies suggestions that can produce results</li>
                </ul>

                <h5 className="font-semibold text-foreground mt-8 mb-6">Improve Operational Efficiency</h5>
                <p className=" text-muted-foreground leading-relaxed mb-6">
                    Cutting wasteful costs is not simply about reducing headcount, sometimes it's about reducing operational waste:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-12">
                    <li>Automate repetitive tasks with technology</li>
                    <li>Negotiate suppliers — even 5% can add up over a year</li>
                    <li>Audit operations continuously — expenses can pile up slowly</li>
                </ul>

                <h5 className="font-semibold text-foreground mt-8 mb-6">Keep An Eye, Margin Check In Routinely</h5>
                <p className="sm text-muted-foreground leading-relaxed mb-6">
                    Set structured reviews to reassess, evaluate your priorities, quarterly minimum and more.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-12">
                    <li>What services or products bring the highest margins? – Use data to make decisions.</li>
                    <li>Are customer acquisition costs in line?</li>
                    <li>Have your overhead costs crept up? Check for bottleneck support.</li>
                </ul>

                <h5 className="font-semibold text-foreground mt-8 mb-6">Use Data To Make Fair Decisions</h5>
                <p className=" text-muted-foreground leading-relaxed mb-6">
                    Guesswork is the enemy of profitability — use data to make clear decisions and stay on track.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-10">
                    <li>Track trends within the gross margins. FY data, cash conversion, decision drivers.</li>
                    <li>Run profit sensitivity — a 5% price up or down?</li>
                    <li>Benchmarking can reveal gaps in profitability you hadn't noticed.</li>
                </ul>

                <h5 className="font-semibold text-foreground mt-8 mb-6">Takeaways</h5>
                <p className=" text-muted-foreground leading-relaxed mb-10">
                    Boosting profit doesn't always mean earning more. With better strategy, smarter tools, and
                    less guessing, your goals can become a clear pathway. Start with data and strategy — not hope.
                    Build strong habits, review regularly.
                </p>
            </div>

            {/* Share */}
            <div className="flex items-center gap-3 py-12">
                <span className="text-[18px] font-semibold text-foreground">Share:</span>
                <div className="flex items-center gap-7 text-muted-foreground ml-4">
                    {/* Facebook */}
                    <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors">
                        <img src={X} alt="" className="w-5 h-5" />
                    </a>

                    {/* Twitter X */}
                    <a href="#" aria-label="X" className="hover:text-gold transition-colors">
                        <img src={facebook} alt="" className="w-5 h-5" />
                    </a>

                    {/* LinkedIn */}
                    <a href="#" aria-label="LinkedIn" className="hover:text-gold transition-colors">
                        <img src={linkedin} alt="" className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Prev / Next */}
            <div className="flex justify-between items-center mt-6 py-8 border-t border-b border-border">
                <a
                    href="#"
                    className="flex items-center gap-2 text-[16px] !font-bold !text-foreground hover:text-gold transition-colors"
                >
                    <MoveLeft className="w-4 h-4" />
                    Previous Article
                </a>
                <a
                    href="#"
                    className="flex items-center gap-2 text-[16px] !font-bold !text-foreground hover:text-gold transition-colors"
                >
                    Next Article
                    <MoveRight className="w-4 h-4" />
                </a>
            </div>

            <BlogComments />
            <BlogReplyForm />
        </article>
    );
};

export default BlogArticle;
