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

  const stats = [
    { icon: Users, value: '200+', label: 'Expert Consultants' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Briefcase, value: '5000+', label: 'Projects Completed' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
  ];

const Index = () => {
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
                  <span className="block text-2xl font-bold text-[#1e3238]">{stat.value}</span>
                  <span className="text-[#1e3238] text-sm">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <StrategiesSection />
      <WhyChooseSection />
      <MarqueeSection />
      <StatisticsSection />
      <VideoSection />
      <ProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <StatsSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
