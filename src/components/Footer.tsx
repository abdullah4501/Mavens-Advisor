import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Facebook, Instagram, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [showButton, setShowButton] = useState(false);

  const mainPages = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Services', path: '/services' },
  ];

  const ourCompany = [
    { label: 'Contact', path: '/contact' },
    { label: 'Blog', path: '/blog' }
  ];

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
      <div className="container pt-16 pb-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Section - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="text-[#628fff] text-xs font-semibold tracking-wider uppercase">
              Capital Raising & Investment Advisory
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mt-4">
              Yalla<br />Startup<span className="text-gold">.</span>
            </h2>
            <p className="text-slate-400 text-sm mt-4">
              Yalla Startup is a Middle East–based business and financial advisory firm specializing in equity and debt investment solutions for startups, SMEs, and growth-stage companies.
            </p>
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
              {mainPages.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
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
            <ul className="space-y-3">
              {ourCompany.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
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
              By Subscribing, Your Accept <a className="text-[#628fff] hover:underline">Privacy Policy</a>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className="border-t border-white/10 relative">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div>
              <span className="text-[#628fff] text-xs font-semibold tracking-wider uppercase">
                EMAIL US
              </span>
              <p className="text-white text-lg mt-2">info@yallastartup.com</p>
            </div>

            {/* Location */}
            <div>
              <span className="text-[#628fff] text-xs font-semibold tracking-wider uppercase">
                LOCATION
              </span>
              <p className="text-white text-lg mt-2">Sharjah Media City, Sharjah, UAE</p>
            </div>

            {/* Phone */}
            <div>
              <span className="text-[#628fff] text-xs font-semibold tracking-wider uppercase">
                CALL US NOW
              </span>
              <p className="text-white text-lg mt-2">+44 7944 148580</p>
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
              Copyright © {new Date().getFullYear()} Yalla Startup, All Rights Reserved.
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
                    className="fixed z-50 bottom-5 right-10 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white hover:bg-[#2563eb] transition-colors ml-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronUp className="w-8 h-8" />
                  </motion.button>
                )}
                <button
                  className={`  rounded-[10px] bg-primary-gradient fixed z-[99] bottom-20 right-[34px] flex items-center justify-center transition-all duration-300 $`}
                >
                  <a href="https://wa.me/447944148580" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 48 48" className="w-14 h-14">
                      <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"></path><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path><path fill="#fff" fill-rule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z" clip-rule="evenodd"></path>
                    </svg>
                  </a>
                </button>
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
