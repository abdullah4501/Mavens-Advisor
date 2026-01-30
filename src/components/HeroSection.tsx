import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import heroImage1 from '@/assets/hero-advisor.jpg';
import heroImage2 from '@/assets/slider1-01.jpg';
import heroImage3 from '@/assets/slider1-02.jpg';


import 'swiper/css';

const MotionLink = motion(Link);


const slides = [
  {
    title: ['Business', 'Advisor'],
    description: 'Transform your financial strategy with our expert consulting team. We craft solutions tailored to your business.',
    image: heroImage1,
  },
  {
    title: ['Strategic', 'Planning'],
    description: 'Build sustainable growth with data-driven strategies and expert guidance for your enterprise success.',
    image: heroImage2,
  },
  {
    title: ['Growth', 'Solutions'],
    description: 'Accelerate your business potential with innovative approaches and industry-leading expertise.',
    image: heroImage3,
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePaginationClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
      swiperRef.current.autoplay?.start(); // keep autoplay alive
    }
  };


  return (
    <section className="relative min-h-[98vh] overflow-hidden flex items-center">
      {/* Background Images with Fade */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: activeIndex === index ? 1 : 0 }}
          >
            <img
              src={slide.image}
              alt={slide.title.join(' ')}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/10 via-navy/15" />
      </div>

      {/* Content Container */}
      <div className='flex container flex-col sm:flex-row relative z-10'>
        <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20">
          <div className="">
            {/* Main Heading with fade animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`title-${activeIndex}`}
                initial={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
                animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                exit={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
                transition={{ duration: 1, ease: [0.5, 0.5, 0, 1] }}
                className="overflow-hidden"
              >
                <h1 className="text-5xl md:text-8xl lg:text-[150px] font-bold text-white leading-tight mb-6">
                  {slides[activeIndex].title[0]}
                  <br />
                  <span>{slides[activeIndex].title[1]}</span>
                </h1>
              </motion.div>
            </AnimatePresence>




            {/* CTA Button with fade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`cta-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-wrap gap-4"
              >
                <MotionLink
                  to="/calculator"
                  className="bg-gold text-white px-4 xl:px-6 py-2.5 xl:py-3 rounded-md flex items-center gap-2 xl:gap-3 font-medium text-sm whitespace-nowrap flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover More
                  <span className='w-7 h-7 bg-white rounded-full flex items-center justify-center'>
                    <ArrowRight color="black" size={18} />
                  </span>
                </MotionLink>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-white text-[16px] md:text-[20px] leading-[30px] font-[500] z-10 self-end text-end"
          >
            {slides[activeIndex].description}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Hidden Swiper for auto-rotation timing */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.autoplay?.start(); // ensure running on mount
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          swiper.autoplay?.start(); // ensure it resumes after any change
        }}
        className="!absolute !left-[-9999px] !top-0 !w-[1px] !h-[1px] !opacity-0 !pointer-events-none"
      >
        {slides.map((_, index) => (
          <SwiperSlide key={index} />
        ))}
      </Swiper>

      {/* Custom Pagination - Matching Reference UI */}
      <div className="absolute bottom-16 left-4 lg:left-24 z-20 flex items-center">
        {slides.map((_, index) => (
          <div key={index} className="flex items-center">
            <button
              onClick={() => handlePaginationClick(index)}
              className={`text-sm font-medium transition-all duration-300 ${activeIndex === index ? 'text-white' : 'text-white/50'
                }`}
            >
              {String(index + 1).padStart(2, '0')}
            </button>
            {index < slides.length - 1 && (
              <div className="mx-3 w-10 h-[1px] bg-white/30 relative">
                {activeIndex === index && (
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: 'linear' }}
                    key={`progress-${activeIndex}`}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
