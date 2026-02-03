import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowRight, Search } from 'lucide-react';
import logoWhite from '@/assets/logo-white.png';
import logo from '@/assets/mavens-update-3.png';
import RollingText from './RollingText';
import { Link } from 'react-router-dom';

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
    { label: 'Home', href: '/', isActive: true },
    { label: 'About Us', href: '#about', isActive: false },
    { label: 'Services', href: '#services', isActive: false },
    { label: 'Our History', href: '#history', isActive: false },
    { label: 'Our Team', href: '#team', isActive: false },
    { label: 'Blog', href: '#blog', isActive: false },
    { label: 'Contact Us', href: '#contact', isActive: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`${isScrolled ? 'w-full' : 'max-w-[1440px] mx-auto px-2'} transition-all duration-300 ${isScrolled ? 'py-0' : 'py-5'
          }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 px-4 xl:px-6 py-4 ${isScrolled
            ? 'bg-[#fffffff7] shadow-[0_2px_5px_rgb(0_0_0_/_8%)]'
            : 'border rounded-md border-[#7C898D] bg-[linear-gradient(180deg,#ECF0F429_0%,#7C898D85_100%)]'
            }`}
        >
          {/* LEFT */}
          <div className="flex items-center gap-4 xl:gap-6 flex-shrink-0">
            <div className="h-12 w-full flex items-center">
              <img src={isScrolled ? logo : logo} alt="logo" className="h-8 mr-1" /><RollingText text="Mavens Advisor" />

            </div>

            {!isScrolled && (
              <div className="hidden xl:flex items-center gap-2 text-white text-sm whitespace-nowrap">
                <span className="text-white/80 text-[14px] font-bold">Book a call</span>
                <span className='px-3 py-3 ml-2 rounded-full bg-gold'>
                  <Phone className="w-4 h-4 text-white flex-shrink-0" />
                </span>
                <span className='font-bold'>14408482222</span>
              </div>
            )}
          </div>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8 flex-shrink min-w-0">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-xs xl:text-sm font-medium transition-colors whitespace-nowrap hover:text-gold ${item.isActive ? 'text-gold' : isScrolled ? 'text-navy' : 'text-white'}`}

              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            {isScrolled ? (
              <>
                <Search className="w-5 h-5 text-navy cursor-pointer" />

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm text-navy leading-tight">
                    <p className="text-[11px] uppercase font-semibold text-slate-500">
                      Need to talk
                    </p>
                    <p>(000)123456789</p>
                  </div>
                </div>
              </>
            ) : (
              <Link
                to="/calculator"
                className="bg-gold text-white px-4 xl:px-6 py-2.5 xl:py-3 rounded-md flex items-center gap-2 xl:gap-3 font-medium text-sm whitespace-nowrap flex-shrink-0"
              >
                <span className="">Get In Touch</span>
                <span className="w-7 h-7 xl:w-8 xl:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <ArrowRight size={16} className="text-black" />
                </span>
              </Link>
            )}
          </div>

          {/* MOBILE */}
          <button
            className={`lg:hidden ${isScrolled ? 'text-navy' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-navy-light rounded-md shadow p-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 border-b border-slate-600 text-slate-200 last:border-b-0"
                >
                  {item.label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
