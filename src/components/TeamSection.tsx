import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Twitter } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import tm1 from '@/assets/team-01.jpg';
import tm2 from '@/assets/team-02.jpg';
import tm3 from '@/assets/team-03.jpg';
import tm4 from '@/assets/team-04.jpg';
import tm5 from '@/assets/team-05.jpg';
import tm6 from '@/assets/team-06.jpg';

const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const teamMembers = [
    {
      name: "Bryson Tiller",
      position: "BUSINESS MANAGER",
      image: tm1,
    },
    {
      name: "Walker Scobell",
      position: "LEGAL OFFICER",
      image: tm2,
    },
    {
      name: "Jacob Elordi",
      position: "FINANCE ADVISOR",
      image: tm3,
    },
    {
      name: "Justin Novak",
      position: "TAX EXAMINER",
      image: tm4,
    },
    {
      name: "Myles Evander",
      position: "GENERAL MANAGER",
      image: tm5,
    },
  ];

  return (
    <section className="section-padding team-section-one" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-12 gap-8 mb-16">
            {/* Left side - Badge and Title */}
            <div className='col-span-10 lg:col-span-5 md:col-span-6'>
              <span className="inline-block bg-muted text-[#7c898d] font-semibold px-4 py-1.5 text-xs uppercase rounded mb-6">
                Our Export
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-light leading-tight">
                Trusted guidance for
                lasting financial
                growth.
              </h2>
            </div>

            {/* Right side - Description */}
            <div className="flex items-end lg:pl-12 col-span-12 md:col-span-6">
              <p className="text-navy-light/50 font-semibold leading-relaxed max-w-lg">
                Stay organized and focused on growth while we handle your day financial record Gravida urna vehicula volutpat velit sed imperdiet.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-12 gap-y-12">
          {teamMembers.slice(0, 3).map((member, index) => (
            <motion.a
              key={member.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="col-span-12 sm:col-span-6 md:col-span-4 flex items-center md:flex-col sm:flex-col lg:flex-row gap-5 group"
            >
              <div className="relative flex-shrink-0">
                <div className="w-40 h-52 rounded-md overflow-hidden ">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-1 transition-colors duration-300 hover:text-gold">
                  {member.name}
                </h4>
                <p className="text-xs tracking-widest font-semibold text-slate-500 uppercase">
                  {member.position}
                </p>
              </div>
            </motion.a>
          ))}
          <div className='hidden lg:block col-span-1'>

          </div>
          {teamMembers.slice(3, 5).map((member, index) => (
            <motion.a
              key={member.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="col-span-12 sm:col-span-6 md:col-span-4 flex items-center md:flex-col sm:flex-col lg:flex-row gap-5 group"
            >
              <div className="relative flex-shrink-0">
                <div className="w-40 h-52 rounded-md overflow-hidden ">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-1 transition-colors duration-300 hover:text-gold">
                  {member.name}
                </h4>
                <p className="text-xs tracking-widest font-semibold text-slate-500 uppercase">
                  {member.position}
                </p>
              </div>
            </motion.a>
          ))}

          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex items-center justify-center">
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center"
            >
              <motion.a
                href="#team"
                className="inline-flex items-center bg-navy-light text-white px-4 py-3 text-[15px] rounded-lg font-medium hover:scale-105 transition"
                whileHover={{ scale: 1.05, gap: '12px' }}
                whileTap={{ scale: 0.95 }}
              >
                See All Advisors
                <span className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center ml-3">
                  <ArrowRight size={18} />
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
