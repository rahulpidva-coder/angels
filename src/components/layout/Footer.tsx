import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-lime-50 pt-16 pb-8 border-t border-lime-200">

      {/* Tring-tring keyframe — injected once in the footer */}
      <style>{`
        @keyframes tring {
          0%   { transform: rotate(0deg);   }
          10%  { transform: rotate(-18deg); }
          20%  { transform: rotate(18deg);  }
          30%  { transform: rotate(-14deg); }
          40%  { transform: rotate(14deg);  }
          50%  { transform: rotate(-8deg);  }
          60%  { transform: rotate(8deg);   }
          70%  { transform: rotate(-4deg);  }
          80%  { transform: rotate(4deg);   }
          90%  { transform: rotate(0deg);   }
          100% { transform: rotate(0deg);   }
        }
        .tring-hover:hover .phone-icon {
          animation: tring 0.7s ease-in-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Angels Preschool Logo"
              className="h-12 w-auto object-contain drop-shadow-md hover:scale-110 transition-transform duration-300"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Nurturing little angels since 1998. We provide a loving environment where children can fly like angels.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/share/1EbigygyCQ/"
                target="_blank" rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-lime-600 hover:bg-lime-600 hover:text-white transition-colors shadow-sm">
                <Facebook size={25} />
              </a>
              <a href="https://www.instagram.com/angelspreschool1998?igsh=MXZ0M2p4cHVtbmh1aw=="
                target="_blank" rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-lime-600 hover:bg-lime-600 hover:text-white transition-colors shadow-sm">
                <Instagram size={25} />
              </a>
              <a href="https://www.youtube.com/@Angels-m7q"
                target="_blank" rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-lime-600 hover:bg-lime-600 hover:text-white transition-colors shadow-sm">
                <Youtube size={25} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about"      className="text-gray-600 hover:text-lime-600">About Us</Link></li>
              <li><Link to="/programs"   className="text-gray-600 hover:text-lime-600">Programs</Link></li>
              <li><Link to="/admissions" className="text-gray-600 hover:text-lime-600">Admissions</Link></li>
              <li><Link to="/gallery"    className="text-gray-600 hover:text-lime-600">Gallery</Link></li>
              <li><Link to="/contact"    className="text-gray-600 hover:text-lime-600">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs — deep linked */}
          <div>
            <h3 className="font-heading font-bold text-lg text-gray-800 mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/programs#playgroup" className="text-gray-600 hover:text-lime-600">Playgroup</Link></li>
              <li><Link to="/programs#nursery"   className="text-gray-600 hover:text-lime-600">Nursery</Link></li>
              <li><Link to="/programs#jrkg"      className="text-gray-600 hover:text-lime-600">Junior KG</Link></li>
              <li><Link to="/programs#srkg"      className="text-gray-600 hover:text-lime-600">Senior KG</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">

              {/* Address — not clickable, no animation needed */}
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-lime-600 shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Ground Floor, Sai Krupa, next to Dr Devgiri's Clinic,
                  near Samaj Kalyan Ground, Bhatwadi, Barve Nagar,
                  Ghatkopar (West), Mumbai, Maharashtra 400084
                </span>
              </li>

              {/*
                Phone — entire row is the tap target.
                Icon rings on hover of the whole row so user immediately
                understands the whole thing is clickable.
              */}
              <li>
                <a
                  href="tel:+918369023546"
                  className="tring-hover flex items-center space-x-3 cursor-pointer group"
                >
                  <div className="bg-lime-100 p-1.5 rounded-full group-hover:bg-lime-200 transition-colors shrink-0">
                    <Phone className="phone-icon h-4 w-4 text-lime-600" />
                  </div>
                  <span className="text-gray-600 group-hover:text-lime-600 transition-colors">
                    +91 8369023546
                  </span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:hello@angelspreschool.com"
                  className="flex items-center space-x-3 group cursor-pointer"
                >
                  <div className="bg-yellow-100 p-1.5 rounded-full group-hover:bg-yellow-200 transition-colors shrink-0">
                    <Mail className="h-4 w-4 text-yellow-600" />
                  </div>
                  <span className="text-gray-600 group-hover:text-lime-600 transition-colors">
                    hello@angelspreschool.com
                  </span>
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="border-t border-lime-200 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Angels Preschool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;