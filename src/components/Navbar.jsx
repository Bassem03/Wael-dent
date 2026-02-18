import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine styles based on scroll and page
  const isTransparent = isHome && !scrolled;

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isTransparent
    ? 'bg-transparent py-6 border-b border-white/10'
    : 'bg-white/90 backdrop-blur-md shadow-lg py-4 border-b border-slate-100'
    }`;

  const textClass = isTransparent ? 'text-white' : 'text-slate-700';
  const logoTextClass = isTransparent ? 'text-white' : 'text-slate-900';
  const hoverClass = isTransparent ? 'hover:text-primary-light' : 'hover:text-primary';

  const links = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Avis', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`group text-xl md:text-2xl font-serif font-bold flex items-center gap-3 ${logoTextClass}`}>
          <div className="relative">
            <img src={`${import.meta.env.BASE_URL}tasnim-dent.jpg`} alt="Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform duration-500 group-hover:scale-110" onError={(e) => e.target.style.display = 'none'} />
            <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl md:text-2xl">Cabinet Dentaire</span>
            <span className="text-sm md:text-lg opacity-80 font-sans font-medium">Dr. Tesnim Blel</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors ${textClass} ${hoverClass} ${location.pathname === link.path ? (isTransparent ? 'text-white font-bold' : 'text-primary font-bold') : ''
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`px-6 py-2.5 rounded-full font-medium transition-all shadow-lg flex items-center gap-2 ${isTransparent
              ? 'bg-white text-secondary hover:bg-slate-100 shadow-white/10'
              : 'bg-primary text-white hover:bg-primary-dark shadow-primary/30'
              }`}
          >
            <Calendar size={18} />
            Prendre RDV
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden transition-colors ${textClass}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                    } hover:text-primary`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white px-6 py-3 rounded-xl font-medium text-center shadow-lg shadow-primary/30"
              >
                Prendre un rendez-vous
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
