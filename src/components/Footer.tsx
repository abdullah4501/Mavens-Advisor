import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Facebook, Instagram, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [showButton, setShowButton] = useState(false);
  const mainPages = ['Home', 'Blog', 'About', 'Blog Page', 'Service Page'];

  const ourCompanyLeft = ['Service Single', 'Blog Single', 'Products', 'Contact', 'Licensing', 'Products'];
  const ourCompanyRight = ['Sign In', 'Sign Up', 'Packages', 'Style Guide', 'Products'];
  
  useEffect(() => {
    const onScroll = () => {
      setShowButton(window.scrollY > 200); // show after 200px
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f1729] relative footer-main" ref={ref} id="contact">
      {/* Main Footer Content */}
      <div className="container pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Section - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="text-[#628fff] text-xs font-semibold tracking-wider uppercase">
              WANT TO GET ANY SUPPORT?
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mt-4">
              Let's
              <br />
              Discuss<span className="text-gold">!</span>
            </h2>
          </motion.div>

          {/* Main Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-white font-semibold text-lg mb-6">Main Pages</h4>
            <ul className="space-y-3">
              {mainPages.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h4 className="text-white font-semibold text-lg mb-6">Our company</h4>
            <div className="grid grid-cols-2 gap-x-8">
              <ul className="space-y-3">
                {ourCompanyLeft.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {ourCompanyRight.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h4 className="text-white font-semibold text-lg mb-6">
              Stay tuned and subscribe to<br />our newsletter.
            </h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-white rounded-lg px-4 py-3.5 pr-14 text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-gold rounded-full flex items-center justify-center hover:bg-[#2563eb] transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
            <p className="text-slate-400 text-xs mt-4">
              By Subscribing, Your Accept <a href="#" className="text-[#628fff] hover:underline">Privacy Policy</a>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className="border-t border-white/10">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div>
              <span className="text-[#628fff] text-xs font-semibold tracking-wider uppercase">
                EMAIL US
              </span>
              <p className="text-white text-lg mt-2">noreply@pbminfotech.com</p>
            </div>

            {/* Location */}
            <div>
              <span className="text-[#628fff] text-xs font-semibold tracking-wider uppercase">
                LOCATION
              </span>
              <p className="text-white text-lg mt-2">174 Street Charleston, New York</p>
            </div>

            {/* Phone */}
            <div>
              <span className="text-[#628fff] text-xs font-semibold tracking-wider uppercase">
                CALL US NOW
              </span>
              <p className="text-white text-lg mt-2">+1 440 848 8222</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/10 bg-black relative">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
            {/* Copyright */}
            <p className="text-slate-500 text-sm">
              Copyright © 2025 Mavens Advisor, All Rights Reserved.
            </p>

            {/* Social Links & Scroll to Top */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <AnimatePresence>
                {showButton && (
                  <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.3 }}
                    className="fixed z-50 bottom-6 right-10 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white hover:bg-[#2563eb] transition-colors ml-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronUp className="w-8 h-8" />
                  </motion.button>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
