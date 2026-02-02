import { motion, Variants } from 'framer-motion';
import { TrendingUp, PieChart, Shield, Users, Award, Target, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import serviceLeftImg from '@/assets/service-left-img.png';
import AnimatedHeading from './AnimatedHeading';

const WhyChooseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      svg: <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="m64.186 46.436a25.492 25.492 0 1 1 -25.492-25.492 25.492 25.492 0 0 1 25.492 25.492z" fill="#628fff"></path>
        <path d="m80.129 42.565a37.565 37.565 0 1 0 -37.564 37.565 37.607 37.607 0 0 0 37.564-37.565zm-72.226 0a34.662 34.662 0 1 1 34.662 34.662 34.7 34.7 0 0 1 -34.665-34.662zm61.605 0a26.943 26.943 0 1 0 -26.943 26.943 26.973 26.973 0 0 0 26.943-26.943zm-50.983 0a24.04 24.04 0 1 1 24.04 24.04 24.067 24.067 0 0 1 -24.04-24.04zm76.475 14.87a37.544 37.544 0 0 1 -63.069 27.553 1.452 1.452 0 0 1 1.979-2.125 34.64 34.64 0 0 0 48.953-48.954 1.451 1.451 0 0 1 2.124-1.978 37.311 37.311 0 0 1 10.013 25.504zm-13.562-1.271v-.111a1.452 1.452 0 0 1 2.9-.124l.005.11c.02.47.038.924.038 1.4a26.973 26.973 0 0 1 -26.946 26.939c-.49 0-.959-.019-1.448-.041a1.478 1.478 0 0 1 -1.417-1.515 1.441 1.441 0 0 1 1.484-1.388c.506.022.934.041 1.381.041a24.067 24.067 0 0 0 24.04-24.04c0-.43-.018-.844-.037-1.271zm-39.4 2.723a16.34 16.34 0 0 1 -15.473-11.153h-3.119a1.452 1.452 0 1 1 0-2.9h2.442a14.675 14.675 0 0 1 0-4.532h-2.442a1.452 1.452 0 1 1 0-2.9h3.119a16.308 16.308 0 0 1 27.711-5.623 1.451 1.451 0 1 1 -2.176 1.912 13.414 13.414 0 0 0 -22.444 3.7h10.519a1.452 1.452 0 1 1 0 2.9h-11.353a12.506 12.506 0 0 0 0 4.532h11.353a1.452 1.452 0 1 1 0 2.9h-10.522a13.414 13.414 0 0 0 22.444 3.7 1.451 1.451 0 1 1 2.179 1.917 16.3 16.3 0 0 1 -12.242 5.547z"></path>
      </svg>,
      title: 'Business Growth',
      description: 'Maximize your tax benefits with our proactive planning and hassle-free filing services.'
    },
    {
      svg: <svg xmlns="http://www.w3.org/2000/svg" id="Icon7" viewBox="0 0 100 100"><path d="M77.61,46.432v43.4H64.545V52.907a.923.923,0,0,1,.461-.8l11.222-6.475A.922.922,0,0,1,77.61,46.432ZM38.416,68V89.827H51.481V61.519a.922.922,0,0,0-1.382-.8L38.877,67.2A.92.92,0,0,0,38.416,68ZM12.287,83.081v6.746H25.352V76.6a.922.922,0,0,0-1.383-.8L12.748,82.284A.92.92,0,0,0,12.287,83.081Z" fill="#628fff"></path><path d="M93.548,88.371H84.113V41.92a1.452,1.452,0,0,0-2.177-1.258L68.871,48.2a1.451,1.451,0,0,0-.726,1.257V88.371H57.984V57.009a1.452,1.452,0,0,0-2.177-1.258L42.742,63.286a1.45,1.45,0,0,0-.726,1.257V88.371H31.855V72.1a1.451,1.451,0,0,0-2.177-1.257L16.613,78.375a1.451,1.451,0,0,0-.726,1.257v8.739H6.452a1.452,1.452,0,1,0,0,2.9h87.1a1.452,1.452,0,1,0,0-2.9Zm-22.5-38.079,10.162-5.86V88.371H71.048ZM44.919,65.382l10.162-5.86V88.371H44.919ZM18.79,80.471l10.162-5.86v13.76H18.79Zm-2.708-29.7a1.45,1.45,0,0,1,.531-1.982l60.276-34.8L66.434,11.6a1.454,1.454,0,0,1-1.092-1.742h0a1.452,1.452,0,0,1,1.741-1.09L80.312,11.8a2.242,2.242,0,0,1,1.642,2.845L77.967,27.614a1.453,1.453,0,1,1-2.777-.854L78.345,16.5l-60.28,34.8a1.45,1.45,0,0,1-1.983-.532Z"></path></svg>,
      title: 'Capital Markets',
      description: 'Stay organized and focused on growth while we handle your day financial record.'
    },
    {
      svg: <svg xmlns="http://www.w3.org/2000/svg" id="Icon12" viewBox="0 0 100 100"><path d="M88.041,50.228,18.82,31.68l3.091-11.537L91.132,38.691ZM76.663,61.46H5V73.4H76.663Z" fill="#628fff"></path><path d="M94.806,24.364a1.456,1.456,0,0,0-.882-.676L26.937,5.737a1.452,1.452,0,0,0-1.778,1.026L16.13,40.45a1.451,1.451,0,1,0,2.8.751l2.67-9.96,41,10.987a1.451,1.451,0,1,0,.751-2.8l-41-10.987,2.238-8.354L88.779,37.275l-2.242,8.363-4.555-1.22a1.451,1.451,0,0,0-.751,2.8l4.554,1.219-5.58,20.818a1.452,1.452,0,0,0,1.026,1.779,1.484,1.484,0,0,0,.377.049,1.452,1.452,0,0,0,1.4-1.075l5.95-22.2c0-.009.008-.015.011-.023s0-.028.006-.041L91.958,36.63l0-.006,0-.011L94.95,25.466A1.453,1.453,0,0,0,94.806,24.364Zm-69.46-7.085,2.241-8.363,64.183,17.2-2.239,8.355ZM75.8,45.177H6.452A1.452,1.452,0,0,0,5,46.629V92.862a1.452,1.452,0,0,0,1.452,1.452H75.8a1.452,1.452,0,0,0,1.452-1.452V46.629A1.452,1.452,0,0,0,75.8,45.177ZM7.9,59.639H74.351v8.655H7.9ZM74.351,48.08v8.655H7.9V48.08ZM7.9,91.411V71.2H74.351V91.411Z"></path></svg>,
      title: 'Risk Management',
      description: 'Maximize your tax benefits with our proactive planning and hassle-free filing services.'
    },
    {
      svg: <svg id="Icon19" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m72.281 65.234a22.281 22.281 0 1 1 -22.281-22.281 22.281 22.281 0 0 1 22.281 22.281zm-16.207-34.859 7.712-19.275a1.25 1.25 0 0 0 -1.16-1.714h-31.156a1.25 1.25 0 0 0 -1.161 1.714l7.712 19.28a1.25 1.25 0 0 0 1.161.786h15.732a1.249 1.249 0 0 0 1.16-.791z" fill="#628fff"></path><path d="m57.866 29.637h-15.732a2.666 2.666 0 0 1 -2.487-1.683l-7.712-19.281a2.68 2.68 0 0 1 2.487-3.673h31.156a2.68 2.68 0 0 1 2.487 3.673l-7.712 19.281a2.666 2.666 0 0 1 -2.487 1.683zm-15.611-2.857h15.49l7.569-18.923h-30.628zm7.745 8.688a36.341 36.341 0 0 0 -36.3 36.3v10.89a12.356 12.356 0 0 0 12.342 12.342h47.916a12.356 12.356 0 0 0 12.342-12.342v-10.89a36.341 36.341 0 0 0 -36.3-36.3zm33.4 47.19a9.449 9.449 0 0 1 -9.442 9.442h-47.916a9.449 9.449 0 0 1 -9.442-9.442v-10.89a33.4 33.4 0 0 1 66.792 0zm-40.66-23.958c0 2.755 3.325 5.082 7.26 5.082 5.6 0 10.164 3.583 10.164 7.986 0 4.015-3.8 7.338-8.712 7.895v3a1.452 1.452 0 1 1 -2.9 0v-3c-4.917-.557-8.712-3.88-8.712-7.895a1.452 1.452 0 0 1 2.9 0c0 2.755 3.325 5.082 7.26 5.082s7.26-2.327 7.26-5.082-3.325-5.082-7.26-5.082c-5.6 0-10.164-3.583-10.164-7.986 0-4.015 3.8-7.338 8.712-7.9v-2.99a1.452 1.452 0 1 1 2.9 0v2.995c4.917.557 8.712 3.88 8.712 7.9a1.452 1.452 0 1 1 -2.9 0c0-2.754-3.325-5.082-7.26-5.082s-7.26 2.323-7.26 5.077z"></path></svg>,
      title: 'Team Building',
      description: 'We specialize in helping small businesses thrive by providing expert.'
    },
    {
      svg: <svg xmlns="http://www.w3.org/2000/svg" id="Icon8" viewBox="0 0 100 100"><path d="M66.452,30.4H25.806a1.451,1.451,0,0,1-1.451-1.451V7.9a1.451,1.451,0,0,1,1.451-1.451H66.452A1.451,1.451,0,0,1,67.9,7.9V28.952A1.451,1.451,0,0,1,66.452,30.4ZM67.9,92.1V55.806a1.451,1.451,0,0,0-1.451-1.451H25.806a1.451,1.451,0,0,0-1.451,1.451V92.1a1.451,1.451,0,0,0,1.451,1.451H66.452A1.451,1.451,0,0,0,67.9,92.1ZM19.516,40.2a3.266,3.266,0,1,0,3.266,3.266A3.266,3.266,0,0,0,19.516,40.2Z" fill="#628fff"></path><path d="M64.516,78.306a1.452,1.452,0,0,1-1.451,1.452H36.935a1.452,1.452,0,0,1,0-2.9h26.13A1.451,1.451,0,0,1,64.516,78.306ZM63.065,68.145H36.935a1.452,1.452,0,0,0,0,2.9h26.13a1.452,1.452,0,0,0,0-2.9ZM95,30.4v47.9a1.452,1.452,0,0,1-1.452,1.452H73.226v13.79A1.452,1.452,0,0,1,71.774,95H28.226a1.452,1.452,0,0,1-1.452-1.452V79.758H6.452A1.452,1.452,0,0,1,5,78.306V30.4a1.451,1.451,0,0,1,1.452-1.451H26.774V6.452A1.452,1.452,0,0,1,28.226,5H71.774a1.452,1.452,0,0,1,1.452,1.452v22.5H93.548A1.451,1.451,0,0,1,95,30.4ZM29.677,28.952H70.323V7.9H29.677ZM70.323,55.806H29.677V92.1H70.323ZM92.1,31.855H7.9v45H26.774v-22.5A1.452,1.452,0,0,1,28.226,52.9H71.774a1.452,1.452,0,0,1,1.452,1.452v22.5H92.1Z"></path></svg>,
      title: 'Quality Assurance',
      description: 'Stay organized and focused on growth while we handle your day financial record.'
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
                  Our Services
                </span>
                <AnimatedHeading
                  text="Why choose us as your accountant consultant?"
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
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="group text-[13px] font-semibold inline-flex items-center gap-3 text-navy hover:text-gold"
                      >
                        Read More
                        <span className="bg-white text-gold w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                          <ArrowRight size={16} />
                        </span>
                      </motion.a>
                    </motion.div>

                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 5 * 0.1 }}
                  className="px-[28px] py-[33px] rounded-[5px] bg-navy-light transition-all duration-500 cursor-pointer"
                >
                  <h3 className="text-[24px] font-semibold text-white mb-5 transition-colors duration-300">
                    Explore our all expertises we offers
                  </h3>
                  <a href="#"
                    className="text-[13px] font-semibold inline-flex items-center gap-2 bg-white text-navy px-[15px] pl-[25px] py-[15px] rounded-[5px] font-medium hover:scale-105 transition"
                  >
                    View All Services
                    <span className="bg-gold text-white w-7 h-7 rounded-full flex items-center justify-center">
                      <ArrowRight size={16} />
                    </span>
                  </a>
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
