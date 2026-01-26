import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import strategyImage from '@/assets/strategy-meeting.jpg';
import analyticsImage from '@/assets/analytics.jpg';
import teamMeetingImage from '@/assets/team-meeting.jpg';
import AnimatedHeading from './AnimatedHeading';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-md overflow-hidden shadow-[0_9px_23.3px_0_rgba(0,0,0,0.09)] transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Category badge (BOTTOM LEFT like UI) */}
                <span className="absolute bottom-4 left-4 bg-gold text-white text-xs font-semibold px-3 py-1 rounded-md uppercase tracking-wide">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[22px] font-bold text-navy-light mb-6 leading-snug">
                  {post.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-slate-400 uppercase tracking-wide">
                  <span className='font-bold'>{post.date}</span>
                  <span className="w-1 h-1 bg-slate-700 rounded-full" />
                  <span className='font-bold'>By Gudfin</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
