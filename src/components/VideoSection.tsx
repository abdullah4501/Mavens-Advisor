import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import citySkylineImage from '@/assets/city-skyline.jpg';

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="video-one-bg" ref={ref}>
      <div className="container">
        {/* Content */}
        <div className="relative grid sm:grid-cols-2 grid-cols-1 h-full">
          <div className='col-span-1'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex flex-row gap-3 items-center"
            >
              <a href="" className='request-loader'>
                <Play fill='#fff' />
              </a>
              <h3 className='text-[26px] leading-[26px] font-semibold text-white '>That's what proper financial<br />
                leadership feels like.</h3>
            </motion.div>
          </div>

          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col h-full justify-end"
          >
            <span className="text-6xl md:text-8xl text-end mb-5 font-bold text-white/20">
              Mavens Advisor
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
