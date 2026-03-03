import { motion } from 'framer-motion';
import { Asterisk } from 'lucide-react';

const MarqueeSection = () => {
  const items = [
    'Capital Raising Advisory',
    'Strategic Debt Solutions',
    'Corporate Finance Expertise',
    'Middle East Market Entry',
    'Investment Readiness',
  ];

  return (
    <section className="py-8 bg-navy-light overflow-hidden">
      <div className="flex">
        <motion.div
          className="flex items-center gap-6 animate-marquee whitespace-nowrap"
          initial={{ x: 0 }}
        >
          {[...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-end gap-6">
              <span className="text-2xl md:text-3xl  text-white/90 hover:text-gold transition-colors cursor-default">
                {item}
              </span>
              <Asterisk className='w-6 h-6' strokeWidth={3} color="#fff" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
