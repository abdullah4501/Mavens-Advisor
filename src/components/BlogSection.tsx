import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import strategyImage from '@/assets/strategy-meeting.jpg';
import analyticsImage from '@/assets/analytics.jpg';
import teamMeetingImage from '@/assets/team-meeting.jpg';
import AnimatedHeading from './AnimatedHeading';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const posts = [
    {
      image: strategyImage,
      category: 'Business',
      date: 'Jan 15, 2024',
      title: 'Manage your money wisely for better financial future',
      excerpt: 'Learn essential strategies for effective money management.',
    },
    {
      image: analyticsImage,
      category: 'Finance',
      date: 'Jan 12, 2024',
      title: 'The Ultimate Financial Strategy Guide for Businesses',
      excerpt: 'Comprehensive guide to business financial planning.',
    },
    {
      image: teamMeetingImage,
      category: 'Strategy',
      date: 'Jan 10, 2024',
      title: "Don't Let Poor Investment Choices Hurt Your Future",
      excerpt: 'Tips for making smart investment decisions.',
    },
  ];

  return (
    <section className="section-padding px-0 bg-white" ref={ref} id="blog">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-muted text-[#7c898d] font-semibold px-4 py-1.5 text-xs uppercase rounded mb-6">
            Fresh News
          </span>
          <AnimatedHeading
            text="Articles & blog posts with useful information"
            className="text-4xl md:text-5xl font-[700] text-navy leading-tight"
            duration={0.6}
            stagger={0.01}
            startDelay={0.3}
            center={true}
          />
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group cursor-pointer "
            >
              <Link to={'/blog/why-financial-forecasting-is-critical-for-sustainable-growth'}>
                {/* Image */}
                <div className="relative h-[420px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.20)] ">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] rounded-[6px]"
                  />

                  {/* Category badge (TOP RIGHT) */}
                  <span className="absolute top-5 right-5 bg-gold text-white text-[13px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>

                {/* Floating content box */}
                <div className="-mt-[60px] mx-[25px] relative bg-white p-7 rounded-t-[12px] ">
                  <div className="flex items-center gap-3 text-[13px] text-muted-foreground font-semibold uppercase mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full" />
                    <span>By Gudfin</span>
                  </div>

                  <h3 className="text-[22px] leading-snug font-bold text-navy">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
