import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import strategyImage from '@/assets/strategy-meeting.jpg';
import analyticsImage from '@/assets/analytics.jpg';
import teamMeetingImage from '@/assets/team-meeting.jpg';

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
    <section className="section-padding bg-white" ref={ref} id="blog">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-4 block">
            Latest Blog
          </span>
          <h2 className="text-4xl md:text-5xl  font-bold text-navy">
            Articles & blog posts with useful information
          </h2>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-gold text-navy text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>

              <h3 className="text-xl font-semibold text-navy group-hover:text-gold transition-colors mb-3 leading-tight">
                {post.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4">
                {post.excerpt}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-gold font-medium text-sm group-hover:gap-3 transition-all"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
