import { motion } from 'framer-motion';
import { Asterisk } from 'lucide-react';

const MarqueeSection2 = () => {
  const items = [
    'Investment Management',
    'Accountant Services',
    'Business Planning',
    'Audit Assurance',
    'Wealth Protection',
    'Tax Consulting',
  ];

  return (
    <section className="py-8 bg-[#91D089] overflow-hidden">
      <div className="flex">
        <motion.div
          className="flex items-center gap-6 animate-marquee whitespace-nowrap"
          initial={{ x: 0 }}
        >
          {[...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-end gap-6">
              <span className="text-[45px] md:text-[64px]  text-white font-semibold transition-colors cursor-default">
                {item}
              </span>
              <Asterisk strokeWidth={1} size={90} color="#fff" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection2;
