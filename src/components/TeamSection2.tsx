import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';
import team3 from '@/assets/team-3.jpg';
import team4 from '@/assets/team-4.jpg';
import team5 from '@/assets/team-5.jpg';
import team6 from '@/assets/team-6.jpg';


const teamMembers = [
    {
        name: "Rosemary Turk",
        role: "Founder & CEO",
        img: team1,
        expertise: ["Audit Defense", "Corporate Tax", "Strategic Planning"],
        email: "rosemary@limpa.com",
    },
    {
        name: "Richard McMille",
        role: "Chief Financial Officer",
        img: team2,
        expertise: ["Cost Optimization", "Financial Modeling", "Risk Management"],
        email: "richard@limpa.com",
    },
    {
        name: "Marilynn Church",
        role: "Tax Director",
        img: team3,
        expertise: ["Estate Planning", "IRS Negotiation", "R&D Credits"],
        email: "marilynn@limpa.com",
    },
    {
        name: "Marilynn Church",
        role: "Tax Director",
        img: team4,
        expertise: ["Estate Planning", "IRS Negotiation", "R&D Credits"],
        email: "marilynn@limpa.com",
    },
    {
        name: "Marilynn Church",
        role: "Tax Director",
        img: team5,
        expertise: ["Estate Planning", "IRS Negotiation", "R&D Credits"],
        email: "marilynn@limpa.com",
    },
    {
        name: "Marilynn Church",
        role: "Tax Director",
        img: team6,
        expertise: ["Estate Planning", "IRS Negotiation", "R&D Credits"],
        email: "marilynn@limpa.com",
    },
];

const TeamSection2 = ({ limit }) => {
  
    return (
        <div className="container">
            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                {teamMembers.slice(0,limit).map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col"
                    >
                        {/* Image Card */}
                        <div className="team-img relative rounded-[20px] overflow-hidden group cursor-pointer">
                            {/* Team Member Image */}
                            <div className="aspect-[3/4] w-full">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a]/90 via-[#1a3a4a]/30 to-transparent" />

                            {/* Bottom Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                                {/* Name & Role */}
                                <div>
                                    <h3 className="text-white text-[20px] font-bold mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-white/80 text-[18px]">
                                        {member.role}
                                    </p>
                                </div>

                                {/* Email Button */}
                                <a
                                    href={`mailto:${member.email}`}
                                    className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center hover:bg-gold transition-colors shrink-0 group/mail"
                                >
                                    <Mail size={24} className="text-navy group-hover/mail:text-white "  />
                                </a>
                            </div>
                        </div>

                        {/* Areas of Expertise */}
                        <div className="mt-8">
                            <h6 className="text-muted-foreground text-[18px] font-medium mb-4">
                                AREAS OF EXPERTISE
                            </h6>
                            <div className="flex flex-wrap gap-x-4 gap-y-3">
                                {member.expertise.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-[20px] py-[5px] rounded-full text-[18px] text-muted-foreground bg-white inline-block transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection2;
