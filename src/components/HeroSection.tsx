import { motion } from 'framer-motion';
import { ArrowRight, Play, } from 'lucide-react';
import heroImage from '@/assets/hero-advisor.jpg';

const HeroSection = () => {


  return (
    <section className="relative min-h-[98vh] overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Business Advisor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/10 via-navy/15 " />
      </div>

      {/* Content */}
      <div className='flex container'>
        <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20">
          <div className="max-w-2xl ">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-[170px] font-bold text-white leading-tight mb-6"
            >
              Business
              <br />
              <span >Advisor</span>
            </motion.h1>


            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                className="btn-primary text-md flex gap-3 items-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover More
                <span className='w-8 h-8 bg-white rounded-full flex items-center justify-center'>
                  <ArrowRight color="black" size={20} />
                </span>
              </motion.a>
              {/* Description */}

            </motion.div>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white text-[20px] leading-[30px] font-[500] z-10 self-end text-end "
        >
          
        Transform your financial strategy with our expert consulting
        team. We craft solutions tailored to your business.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
