import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import officeDeskImage from '@/assets/office-desk.jpg';

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const partners = [
    'Zendesk', 'HubSpot', 'Stripe', 'Slack', 'Notion'
  ];

  return (
    <section className="relative py-20 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={officeDeskImage}
          alt="Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/90" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-end gap-4 mb-6">
              <span className="text-7xl md:text-8xl  font-bold text-gold">25+</span>
              <span className="text-white/80 text-lg mb-4">Years of combined finance expertise</span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-lg">
              Our team brings together decades of CFO-level experience in financial management,
              helping founders achieve growth with professional guidance and support.
            </p>
          </motion.div>

          {/* Partners & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center mb-8">
                <span className="text-5xl  font-bold text-white">500+</span>
                <p className="text-white/60 mt-2">Companies Growing With Us</p>
              </div>

              {/* Partners */}
              <div className="border-t border-white/10 pt-8">
                <p className="text-white/40 text-sm text-center mb-6">Trusted by leading companies</p>
                <div className="flex flex-wrap justify-center gap-6">
                  {partners.map((partner, index) => (
                    <motion.span
                      key={partner}
                      initial={{ opacity: 0 }}
                      animate={isVisible ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="text-white/50 hover:text-gold font-semibold text-lg transition-colors cursor-default"
                    >
                      {partner}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
