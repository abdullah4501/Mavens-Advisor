import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();

  const footerLinks = {
    company: ['About Us', 'Our Team', 'Careers', 'News'],
    services: ['Financial Planning', 'Investment', 'Tax Advisory', 'Risk Management'],
    resources: ['Blog', 'Case Studies', 'Whitepapers', 'FAQ'],
  };

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-navy" ref={ref} id="contact">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-5xl md:text-6xl  font-bold text-white leading-tight">
              Let's
              <br />
              <span className="text-gold">Discuss!</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#"
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05, gap: '12px' }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="tel:+1234567890"
              className="btn-outline flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className="border-t border-white/10 pt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Logo & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <a href="#" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                  <span className="text-white  font-bold text-xl">M</span>
                </div>
                <span className="text-white  text-2xl font-semibold">Mavens Advisor</span>
              </a>
              <p className="text-white/60 mb-6 max-w-sm">
                Your trusted partner in financial success. We provide expert guidance 
                to help businesses achieve their goals.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:info@Mavens Advisor.com" className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>info@Mavens Advisor.com</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+1 (234) 567-890</span>
                </a>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-5 h-5" />
                  <span>123 Business Ave, New York, NY</span>
                </div>
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-gold transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-gold transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-white font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-gold transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2024 Mavens Advisor. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-gold hover:text-navy transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Large Brand Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-16 overflow-hidden"
        >
          <span className="md:text-[6rem]  font-bold text-white/5">
            Mavens Advisor
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
