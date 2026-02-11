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
      svg: <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="m64.186 46.436a25.492 25.492 0 1 1 -25.492-25.492 25.492 25.492 0 0 1 25.492 25.492z" fill="#628fff"></path>
        <path d="m80.129 42.565a37.565 37.565 0 1 0 -37.564 37.565 37.607 37.607 0 0 0 37.564-37.565zm-72.226 0a34.662 34.662 0 1 1 34.662 34.662 34.7 34.7 0 0 1 -34.665-34.662zm61.605 0a26.943 26.943 0 1 0 -26.943 26.943 26.973 26.973 0 0 0 26.943-26.943zm-50.983 0a24.04 24.04 0 1 1 24.04 24.04 24.067 24.067 0 0 1 -24.04-24.04zm76.475 14.87a37.544 37.544 0 0 1 -63.069 27.553 1.452 1.452 0 0 1 1.979-2.125 34.64 34.64 0 0 0 48.953-48.954 1.451 1.451 0 0 1 2.124-1.978 37.311 37.311 0 0 1 10.013 25.504zm-13.562-1.271v-.111a1.452 1.452 0 0 1 2.9-.124l.005.11c.02.47.038.924.038 1.4a26.973 26.973 0 0 1 -26.946 26.939c-.49 0-.959-.019-1.448-.041a1.478 1.478 0 0 1 -1.417-1.515 1.441 1.441 0 0 1 1.484-1.388c.506.022.934.041 1.381.041a24.067 24.067 0 0 0 24.04-24.04c0-.43-.018-.844-.037-1.271zm-39.4 2.723a16.34 16.34 0 0 1 -15.473-11.153h-3.119a1.452 1.452 0 1 1 0-2.9h2.442a14.675 14.675 0 0 1 0-4.532h-2.442a1.452 1.452 0 1 1 0-2.9h3.119a16.308 16.308 0 0 1 27.711-5.623 1.451 1.451 0 1 1 -2.176 1.912 13.414 13.414 0 0 0 -22.444 3.7h10.519a1.452 1.452 0 1 1 0 2.9h-11.353a12.506 12.506 0 0 0 0 4.532h11.353a1.452 1.452 0 1 1 0 2.9h-10.522a13.414 13.414 0 0 0 22.444 3.7 1.451 1.451 0 1 1 2.179 1.917 16.3 16.3 0 0 1 -12.242 5.547z"></path>
      </svg>,

      title: 'Fixed Monthly Subscription — No Surprises',
      description: 'Transparent, activity-based pricing that gives founders peace of mind and cost predictability.'
    },
    {
      svg: <svg xmlns="http://www.w3.org/2000/svg" id="Icon7" viewBox="0 0 100 100"><path d="M77.61,46.432v43.4H64.545V52.907a.923.923,0,0,1,.461-.8l11.222-6.475A.922.922,0,0,1,77.61,46.432ZM38.416,68V89.827H51.481V61.519a.922.922,0,0,0-1.382-.8L38.877,67.2A.92.92,0,0,0,38.416,68ZM12.287,83.081v6.746H25.352V76.6a.922.922,0,0,0-1.383-.8L12.748,82.284A.92.92,0,0,0,12.287,83.081Z" fill="#628fff"></path><path d="M93.548,88.371H84.113V41.92a1.452,1.452,0,0,0-2.177-1.258L68.871,48.2a1.451,1.451,0,0,0-.726,1.257V88.371H57.984V57.009a1.452,1.452,0,0,0-2.177-1.258L42.742,63.286a1.45,1.45,0,0,0-.726,1.257V88.371H31.855V72.1a1.451,1.451,0,0,0-2.177-1.257L16.613,78.375a1.451,1.451,0,0,0-.726,1.257v8.739H6.452a1.452,1.452,0,1,0,0,2.9h87.1a1.452,1.452,0,1,0,0-2.9Zm-22.5-38.079,10.162-5.86V88.371H71.048ZM44.919,65.382l10.162-5.86V88.371H44.919ZM18.79,80.471l10.162-5.86v13.76H18.79Zm-2.708-29.7a1.45,1.45,0,0,1,.531-1.982l60.276-34.8L66.434,11.6a1.454,1.454,0,0,1-1.092-1.742h0a1.452,1.452,0,0,1,1.741-1.09L80.312,11.8a2.242,2.242,0,0,1,1.642,2.845L77.967,27.614a1.453,1.453,0,1,1-2.777-.854L78.345,16.5l-60.28,34.8a1.45,1.45,0,0,1-1.983-.532Z"></path></svg>,
      title: 'CFO + Complete Finance Team',
      description: 'At the cost of a bookkeeper, you get a dedicated CFO, complete virtual finance department, and full ownership.'
    },
    {
      svg: <svg xmlns="http://www.w3.org/2000/svg" id="Icon8" viewBox="0 0 100 100"><path d="M66.452,30.4H25.806a1.451,1.451,0,0,1-1.451-1.451V7.9a1.451,1.451,0,0,1,1.451-1.451H66.452A1.451,1.451,0,0,1,67.9,7.9V28.952A1.451,1.451,0,0,1,66.452,30.4ZM67.9,92.1V55.806a1.451,1.451,0,0,0-1.451-1.451H25.806a1.451,1.451,0,0,0-1.451,1.451V92.1a1.451,1.451,0,0,0,1.451,1.451H66.452A1.451,1.451,0,0,0,67.9,92.1ZM19.516,40.2a3.266,3.266,0,1,0,3.266,3.266A3.266,3.266,0,0,0,19.516,40.2Z" fill="#628fff"></path><path d="M64.516,78.306a1.452,1.452,0,0,1-1.451,1.452H36.935a1.452,1.452,0,0,1,0-2.9h26.13A1.451,1.451,0,0,1,64.516,78.306ZM63.065,68.145H36.935a1.452,1.452,0,0,0,0,2.9h26.13a1.452,1.452,0,0,0,0-2.9ZM95,30.4v47.9a1.452,1.452,0,0,1-1.452,1.452H73.226v13.79A1.452,1.452,0,0,1,71.774,95H28.226a1.452,1.452,0,0,1-1.452-1.452V79.758H6.452A1.452,1.452,0,0,1,5,78.306V30.4a1.451,1.451,0,0,1,1.452-1.451H26.774V6.452A1.452,1.452,0,0,1,28.226,5H71.774a1.452,1.452,0,0,1,1.452,1.452v22.5H93.548A1.451,1.451,0,0,1,95,30.4ZM29.677,28.952H70.323V7.9H29.677ZM70.323,55.806H29.677V92.1H70.323ZM92.1,31.855H7.9v45H26.774v-22.5A1.452,1.452,0,0,1,28.226,52.9H71.774a1.452,1.452,0,0,1,1.452,1.452v22.5H92.1Z"></path></svg>,

      title: 'AI-Powered Analytics & Decision Support',
      description: 'AI analytics portal tailored to your business. Actionable insights, tax savings opportunities, and an AI assistant for faster decisions.'
    },
    {
      svg: <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Refresh/Growth/Evergreen Icon */}
        <circle cx="50" cy="50" r="30" fill="#628fff" opacity="0.3"></circle>
        <path d="M50 20c16.569 0 30 13.431 30 30" stroke="#628fff" strokeWidth="6" fill="none" strokeLinecap="round"></path>
        <path d="M50 80c-16.569 0-30-13.431-30-30" stroke="#628fff" strokeWidth="6" fill="none" strokeLinecap="round"></path>
        <path d="M75 45l5 5-10 5" stroke="#0f1729" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M25 55l-5-5 10-5" stroke="#0f1729" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M45 40l5-5 5 5M50 35v20" stroke="#0f1729" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>,
      title: 'Evergreen Finance Department',
      description: 'Not temporary—a long-term foundation. Your finance team scales as you grow. No rehiring, no restructuring.'
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
                  Why founders choose Mavens Advisor
                </span>
                <AnimatedHeading
                  text="Because the cost of unclear numbers is always higher later"
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
                  <h3 className="text-[24px] font-semibold text-white mb-3 transition-colors duration-300">
                    Calculate your quote. Lock it. Get your Virtual CFO.
                  </h3>

                  <Link to={'/calculator'}
                    className="text-[13px] font-semibold inline-flex items-center gap-2 bg-white text-navy px-[15px] pl-[25px] py-[15px] rounded-[5px] font-medium hover:scale-105 hover:bg-gold hover:text-white transition group"
                  >
                    Calculate Your Quote
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
