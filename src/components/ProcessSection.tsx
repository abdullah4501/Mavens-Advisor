import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import processBasicResearch from '@/assets/processbox-img-01.png';
import processDiscovery from '@/assets/processbox-img-02.png';
import processBuildPlan from '@/assets/processbox-img-03.png';
import processExecute from '@/assets/processbox-img-04.png';

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
    <section className="relative min-h-screen bg-navy py-20 overflow-hidden">
      {/* Top right corner gradient decoration */}
      <div className="absolute top-0 right-0 w-48 h-32">
        <div className="absolute top-0 right-0 w-24 h-16 bg-gray-decorative-light opacity-60" />
        <div className="absolute top-0 right-24 w-24 h-16 bg-gray-decorative opacity-80" />
        <div className="absolute top-16 right-0 w-24 h-16 bg-gray-decorative opacity-80" />
      </div>

      <div className="container mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left side - Badge and Title */}
          <div>
              <span className="inline-block bg-gold text-[#fff] font-semibold px-4 py-1.5 text-xs uppercase rounded mb-6">
                Why Choose Us
              </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Successful Financial<br />Control Process
            </h2>
          </div>

          {/* Right side - Description */}
          <div className="flex items-end lg:pl-12">
            <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
              Stay organized and focused on growth while we handle your day financial record Gravida urna vehicula volutpat velit sed imperdiet.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start relative">
          {/* Left Decorative Squares */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8">
            <div className="relative w-40 h-48">
              <div className="absolute top-0 left-0 w-20 h-24 bg-gray-decorative opacity-70" />
              <div className="absolute top-0 left-20 w-20 h-24 bg-gray-decorative-light opacity-50" />
              <div className="absolute top-24 left-8 w-20 h-24 bg-gray-decorative opacity-90" />
            </div>
          </div>

          {/* Steps List */}
          <div className="lg:col-span-5 lg:col-start-3 space-y-2">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex gap-6 cursor-pointer py-4 group"
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Number */}
                <span className={`text-2xl relative font-bold  transition-colors duration-300 vertical-line ${
                  activeStep === index ? 'active text-[#628fff]' : 'text-white/50'
                }`}>
                  {step.number}
                </span>

                {/* Content with vertical line */}
                <div className="relative pl-6">
                  
                  <h4 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    activeStep === index ? 'text-[#628fff]' : 'text-white/50'
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
          <div className="lg:col-span-5 lg:col-start-8">
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
