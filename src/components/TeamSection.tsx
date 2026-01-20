import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Twitter } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import teamMember1 from '@/assets/team-member-1.jpg';
import teamMember2 from '@/assets/team-member-2.jpg';
import teamMember3 from '@/assets/team-member-3.jpg';
import handshakeImage from '@/assets/handshake.jpg';

const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const teamMembers = [
    {
      image: teamMember1,
      name: 'Robert Howell',
      position: 'Senior Financial Advisor',
    },
    {
      image: teamMember2,
      name: 'Kyler Conner',
      position: 'Investment Specialist',
    },
    {
      image: teamMember3,
      name: 'Marcus Chen',
      position: 'Tax Consultant',
    },
  ];

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl  font-bold text-navy mb-6 leading-tight">
            Trusted guidance for lasting financial growth.
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-card lg:row-span-2"
          >
            <img
              src={handshakeImage}
              alt="Team Collaboration"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Team Members */}
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Social Icons Overlay */}
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                    <Linkedin className="w-5 h-5 text-navy" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                    <Twitter className="w-5 h-5 text-navy" />
                  </a>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-navy">{member.name}</h4>
              <p className="text-muted-foreground text-sm">{member.position}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center"
        >
          <motion.a
            href="#team"
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-full font-medium hover:bg-gold hover:text-navy transition-colors duration-300"
            whileHover={{ scale: 1.05, gap: '12px' }}
            whileTap={{ scale: 0.95 }}
          >
            View All Team
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
