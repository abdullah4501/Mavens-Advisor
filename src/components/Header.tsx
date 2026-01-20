import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services', hasDropdown: true },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contacts', href: '#contact' },
  ];

  return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto">
          <div className={`flex items-center justify-between ${!isScrolled ? 'border border-[#7C898D] rounded-[5px] py-[12px] px-[20px] bg-[linear-gradient(180deg,#ECF0F429_0%,#7C898D85_100%)]' : ''}`}>
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-64 flex items-center justify-center">
                <img src={logo} alt="logo" />
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`${isScrolled ? 'text-navy': 'text-white/90'} hover:text-gold transition-colors duration-300 flex items-center gap-1 text-sm font-medium underline-animation`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </motion.a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href="tel:+1234567890"
                className={`flex items-center gap-2 ${isScrolled ? 'text-navy': 'text-white/90'} hover:text-gold transition-colors`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (234) 567-890</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-primary text-md flex gap-3 items-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <span className='w-8 h-8 bg-white rounded-full flex items-center justify-center'>
                  <ArrowRight color="black" size={20}/>
                </span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                className="lg:hidden mt-4 pb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block py-3 text-white/90 hover:text-gold transition-colors border-b border-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="btn-primary mt-4 inline-block text-center w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Free Consultation
                </a>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
  );
};

export default Header;
