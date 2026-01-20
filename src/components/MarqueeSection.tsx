import { motion } from 'framer-motion';

const MarqueeSection = () => {
  const items = [
    'Investment Management',
    'Accountant Services',
    'Business Planning',
    'Audit Assurance',
    'Wealth Protection',
    'Tax Consulting',
  ];

  return (
    <section className="py-8 bg-navy overflow-hidden">
      <div className="flex">
        <motion.div
          className="flex items-center gap-12 animate-marquee whitespace-nowrap"
          initial={{ x: 0 }}
        >
          {[...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="text-2xl md:text-3xl  text-white/90 hover:text-gold transition-colors cursor-default">
                {item}
              </span>
              <span className="text-gold text-2xl">★</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
