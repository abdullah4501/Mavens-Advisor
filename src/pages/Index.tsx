import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StrategiesSection from '@/components/StrategiesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import MarqueeSection from '@/components/MarqueeSection';
import StatisticsSection from '@/components/StatisticsSection';
import VideoSection from '@/components/VideoSection';
import ProcessSection from '@/components/ProcessSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatsSection from '@/components/StatsSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import { Users, Award, Briefcase, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceSection2 from '@/components/ServicesSection2';
import ServiceSection3 from '@/components/ServiceSection3';
import WhyChooseSection2 from '@/components/WhyChooseSection2';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ServicesSection4 from '@/components/ServicesSection4';
import MarqueeSection2 from '@/components/MarqueeSection2';

const stats = [
  { icon: Users, value: '500+', label: 'Companies Growing' },
  { icon: Award, value: '25+', label: 'Years Combined Expertise' },
  { icon: Briefcase, value: '3000+', label: 'Financial Functions Managed' },
  { icon: TrendingUp, value: '99%', label: 'Client Retention Rate' },
];

const Index = ({ breadcrumb }) => {
  return (
    <div className="">
      <Header />
      <HeroSection />
      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className='border-b border-[#E4E4E4] shadow-[0_20px_60px_0_rgba(0,0,0,0.08)]'
      >
        <div className="container ">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="flex items-center gap-4 py-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-gold" />
                <div>
                  <span className="block text-2xl font-bold text-navy-light">{stat.value}</span>
                  <span className="text-navy-light text-sm">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <StrategiesSection subTitle={'Welcome'} />
      <WhyChooseSection />
      <MarqueeSection />

      <StatisticsSection subTitle={'Why Choose Us'} />
      <VideoSection />
      <ProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <WhyChooseSection2 />
      <div className='relative'>
        <ServiceSection2 />
      </div>
      <ServiceSection3 />
      <CaseStudiesSection />

      <Footer />
    </div>
  );
};

export default Index;
