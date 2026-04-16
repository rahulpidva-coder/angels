import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../../context/ModalContext';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openVisitModal } = useModal();

  const navLinks = [
    { name: 'Home',       path: '/'           },
    { name: 'About Us',   path: '/about'       },
    { name: 'Programs',   path: '/programs'    },
    { name: 'Admissions', path: '/admissions'  },
    { name: 'Activities', path: '/activities'  },
    { name: 'Gallery',    path: '/gallery'     },
    { name: 'Contact',    path: '/contact'     },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-lime-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Angels Preschool Logo"
              className="h-16 w-auto object-contain drop-shadow-md hover:scale-110 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-full text-sm font-bold transition-colors ${
                  isActive(link.path)
                    ? 'bg-lime-100 text-lime-700'
                    : 'text-gray-600 hover:text-lime-600 hover:bg-lime-50'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/*
              Sky outline style — matches the hero "Book a Visit" secondary CTA exactly.
              Lime = Admission Enquiry (primary action)
              Sky = Book a Visit (secondary action)
              Consistent colour coding across every page.
            */}
            <button
              type="button"
              onClick={openVisitModal}
              className="ml-4 inline-flex items-center gap-1.5 rounded-full border-2 border-sky-500 bg-white text-sky-700 font-semibold px-5 py-2 text-sm shadow-sm hover:bg-sky-50 transition"
            >
              <Calendar size={15} />
              Book a Visit
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-lime-600 focus:outline-none p-2 rounded-xl hover:bg-lime-50"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-lime-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-bold ${
                    isActive(link.path)
                      ? 'bg-lime-100 text-lime-700'
                      : 'text-gray-600 hover:bg-lime-50 hover:text-lime-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => { setIsOpen(false); openVisitModal(); }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-sky-500 bg-white text-sky-700 font-semibold px-5 py-3 shadow-sm hover:bg-sky-50 transition"
                >
                  <Calendar size={16} />
                  Book a Visit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;