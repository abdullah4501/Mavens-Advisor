import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      rating: 4.9,
      platform: 'Trustpilot',
      quote: 'Outstanding service! They helped us streamline our financial operations and increase profitability by 40% in just one year.',
      author: 'Michael Thompson',
      position: 'CEO, TechStart Inc',
    },
    {
      rating: 5.0,
      platform: 'Google',
      quote: 'Professional team with deep expertise. Their strategic advice transformed our business approach completely.',
      author: 'Sarah Johnson',
      position: 'Founder, GreenLife Co',
    },
    {
      rating: 4.8,
      platform: 'Clutch',
      quote: 'Best financial advisors we\'ve worked with. Highly recommend for any business looking to scale efficiently.',
      author: 'David Chen',
      position: 'CFO, Innovate Labs',
    },
  ];

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl  font-bold text-navy">
            What our customers say?
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-light p-8 rounded-2xl relative group hover:bg-navy transition-colors duration-500"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-gold/30 absolute top-6 right-6" />
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-gold">{testimonial.rating}</span>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-current" />
                    ))}
                  </div>
                  <span className="text-muted-foreground group-hover:text-white/60 text-sm transition-colors">
                    {testimonial.platform}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-foreground group-hover:text-white/90 mb-6 leading-relaxed transition-colors">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div>
                <h4 className="font-semibold text-navy group-hover:text-white transition-colors">
                  {testimonial.author}
                </h4>
                <p className="text-muted-foreground group-hover:text-white/60 text-sm transition-colors">
                  {testimonial.position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
