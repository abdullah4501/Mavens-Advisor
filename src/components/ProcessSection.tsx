import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import processBasicResearch from '@/assets/processbox-img-01.png';
import processDiscovery from '@/assets/processbox-img-02.png';
import processBuildPlan from '@/assets/processbox-img-03.png';
import processExecute from '@/assets/processbox-img-04.png';
import AnimatedHeading from './AnimatedHeading';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(3); // Default to Execute (index 3) as shown in design

  const steps = [
    {
      number: '01',
      title: 'Basic Research',
      description: 'In ligula libero neque neque nulla neque rutrum. laculis quam.',
      image: processBasicResearch,
    },
    {
      number: '02',
      title: 'Discovery',
      description: 'In ligula libero neque neque nulla neque rutrum. laculis quam.',
      image: processDiscovery,
    },
    {
      number: '03',
      title: 'Build Plan',
      description: 'In ligula libero neque neque nulla neque rutrum. laculis quam.',
      image: processBuildPlan,
    },
    {
      number: '04',
      title: 'Execute',
      description: 'In ligula libero neque neque nulla neque rutrum. laculis quam.',
      image: processExecute,
    },
  ];

  return (
    <section className="relative min-h-[80vh] bg-navy py-20 overflow-hidden our-process-section-one">
      {/* Top right corner gradient decoration */}
      <div className="absolute top-0 right-0 w-48 h-32">
        <div className="absolute top-0 right-0 w-24 h-16 bg-gray-decorative-light opacity-60" />
        <div className="absolute top-0 right-24 w-24 h-16 bg-gray-decorative opacity-80" />
        <div className="absolute top-16 right-0 w-24 h-16 bg-gray-decorative opacity-80" />
      </div>

      <div className="container">
        {/* Header Section */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          {/* Left side - Badge and Title */}
          <div className='col-span-10 md:col-span-5'>
            <span className="inline-block bg-gold text-[#fff] font-semibold px-4 py-1.5 text-xs uppercase rounded mb-6">
              Our Business Impact
            </span>
            <AnimatedHeading
              text="Successful Financial Control Process"
              className="text-4xl md:text-5xl font-[700] font-bold text-white leading-tight"
              duration={0.6}
              stagger={0.01}
              startDelay={0.3}
            />
          </div>

          {/* Right side - Description */}
          <div className="flex items-end lg:pl-12 col-span-12 md:col-span-5">
            <p className="text-white/80 leading-relaxed max-w-lg">
              Stay organized and focused on growth while we handle your day financial record Gravida urna vehicula volutpat velit sed imperdiet.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-4 items-start relative">
          {/* Left Decorative Squares */}
          <div className="hidden md:flex col-span-3 h-full items-end">
            <div className=" relative w-40 h-48 des-box-left">
            </div>
          </div>

          {/* Steps List */}
          <div className="col-span-12 order-2 md:order-1 md:col-span-5  space-y-2">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex gap-3 md:gap-6 cursor-pointer py-4 group"
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Number */}
                <span className={`text-2xl relative font-bold  transition-colors duration-300 vertical-line ${activeStep === index ? 'active text-[#628fff]' : 'text-white/50'
                  }`}>
                  {step.number}
                </span>

                {/* Content with vertical line */}
                <div className="relative pl-1">

                  <h4 className={`md:text-xl text-[18px] font-bold mb-2 transition-colors duration-300 ${activeStep === index ? 'text-[#628fff]' : 'text-white/50'
                    }`}>
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground font-semibold text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="col-span-12 md:col-span-4 flex order-1 md:order-2 md:h-[50%] lg:h-[75%]">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
