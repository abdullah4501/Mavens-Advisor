import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, ArrowRight, Search } from 'lucide-react';
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
    { label: 'Pages', href: '#pages' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`${isScrolled ? '' : 'container'}  transition-all duration-300 ${
          isScrolled ? 'py-0' : 'py-5'
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 px-6 py-4 ${
            isScrolled
              ? 'bg-white shadow-[0_2px_5px_rgb(0_0_0_/_8%)]'
              : 'border rounded-md border-[#7C898D] bg-[linear-gradient(180deg,#ECF0F429_0%,#7C898D85_100%)]'
          }`}
        >
          {/* LEFT */}
          <div className="flex items-center gap-6">
            <img src={logo} alt="logo" className="h-10" />

            {!isScrolled && (
              <div className="hidden lg:flex items-center gap-2 text-white text-sm">
                <span className="text-gold">Book a call</span>
                <Phone className="w-4 h-4 text-gold" />
                <span>14408482222</span>
              </div>
            )}
          </div>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-navy' : 'text-white'
                } hover:text-gold`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="hidden lg:flex items-center gap-4">
            {isScrolled ? (
              <>
                <Search className="w-5 h-5 text-navy cursor-pointer" />

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
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
              <a
                href="#contact"
                className="bg-gold text-white px-6 py-3 rounded-md flex items-center gap-3 font-medium"
              >
                Get In Touch
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <ArrowRight size={18} className="text-black" />
                </span>
              </a>
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
