import { motion, Variants } from 'framer-motion';
import { TrendingUp, PieChart, Shield, Users, Award, Target, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import serviceLeftImg from '@/assets/service-left-img.png';
import AnimatedHeading from './AnimatedHeading';
import { Link } from 'react-router-dom';

const WhyChooseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const MotionLink = motion(Link);

  const features = [
    {
      svg: <TrendingUp className="w-10 h-10 text-[#628fff]" />,
      title: 'Strong Regional Expertise',
      description: 'Deep market knowledge across UAE, GCC, and MENA regions to navigate local financial landscapes.'
    },
    {
      svg: <Target className="w-10 h-10 text-[#628fff]" />,
      title: 'Capital Network Access',
      description: 'Access to a diversified network of equity and debt capital providers, lenders, and family offices.'
    },
    {
      svg: <PieChart className="w-10 h-10 text-[#628fff]" />,
      title: 'Tailored Advisory Approach',
      description: 'Outcome-driven strategies customized to align with your specific business and investment goals.'
    },
    {
      svg: <Award className="w-10 h-10 text-[#628fff]" />,
      title: 'End-to-End Support',
      description: 'Comprehensive transaction support from fundraising strategy formulation to final deal closure.'
    },
    {
      svg: <Shield className="w-10 h-10 text-[#628fff]" />,
      title: 'Confidential & Ethical',
      description: 'Client-focused execution with the highest standards of confidentiality and professional ethics.'
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0, 0, 1, 1] },
    },
    hover: {},
  };


  const readMoreVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.4, ease: [0, 0, 1, 1] },
    },
    visible: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.4, ease: [0, 0, 1, 1] },
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0, 0, 1, 1] },
    },
  };


  const liftVariants: Variants = {
    hidden: {
      y: 0,
      transition: { duration: 0.4, ease: [0, 0, 1, 1] },
    },
    visible: {
      y: 0,
      transition: { duration: 0.4, ease: [0, 0, 1, 1] },
    },
    hover: {
      y: -12,
      transition: { duration: 0.4, ease: [0, 0, 1, 1] },
    },
  };


  return (
    <section className="pt-[120px] bg-white wcu-section" ref={ref}>
      <div className="">
        <div className='grid lg:grid-cols-3 grid-cols-1'>
          <div className='col-span-1'>
            <div className='h-full flex flex-col justify-end relative service-left-img'>
              <img src={serviceLeftImg} className='w-fit h-auto relative z-1' />
            </div>
          </div>
          <div className='lg:col-span-2 col-span-1'>
            <div className='service-right'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mb-16 "
              >
                <span className="inline-block bg-white font-semibold text-[#7c898d] px-4 py-1.5 text-xs uppercase rounded mb-6">
                  WHY CHOOSE Yalla Startup
                </span>
                <AnimatedHeading
                  text="Tailored, outcome-driven advisory for regional growth"
                  className="text-4xl md:text-5xl font-[700] text-navy leading-tight"
                  duration={0.6}
                  stagger={0.01}
                  startDelay={0.3}
                />
              </motion.div>
              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 mb-16">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }} // only delay, no duration
                    className="relative cursor-pointer"
                  >

                    <motion.div variants={liftVariants} className="w-14 h-14 flex items-center justify-center mb-6">
                      {feature.svg}
                    </motion.div>

                    <motion.h3 variants={liftVariants} className="text-xl font-semibold text-navy mb-3 hover:text-gold transition-colors" style={{ transitionDuration: '400ms' }}>
                      {feature.title}
                    </motion.h3>

                    <motion.p variants={liftVariants} className="text-muted-foreground/80 font-medium text-[15px]">
                      {feature.description}
                    </motion.p>

                    <motion.div variants={readMoreVariants} className="mt-2">
                      <MotionLink
                        to="/services"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="group text-[13px] font-semibold inline-flex items-center gap-3 text-navy hover:text-gold"
                      >
                        Read More
                        <span className="bg-white text-gold w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                          <ArrowRight size={16} />
                        </span>
                      </MotionLink>
                    </motion.div>

                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 5 * 0.1 }}
                  className="px-[28px] py-[33px] rounded-[5px] bg-navy-light transition-all duration-500 cursor-pointer relative wcs-last"
                >
                  <h3 className="text-[20px] font-semibold text-white mb-3 transition-colors duration-300">
                    Ready to explore funding solutions tailored to your goals?
                  </h3>

                  <Link to={'/contact'}
                    className="text-[13px] font-semibold inline-flex items-center gap-2 bg-white text-navy px-[15px] pl-[25px] py-[15px] rounded-[5px] font-medium hover:scale-105 hover:bg-gold hover:text-white transition group"
                  >
                    Get In Touch
                    <span className="bg-gold group-hover:bg-white text-white group-hover:text-navy w-8 h-8 rounded-full flex items-center justify-center">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
