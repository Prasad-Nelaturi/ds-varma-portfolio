import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

// Custom social icons as SVG components
const SocialIcons = {
  Instagram: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  Linkedin: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Youtube: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
};

const Footer = () => {

  const socialIcons = [
    { icon: SocialIcons.Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: SocialIcons.Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: SocialIcons.Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold leading-tight">Dsigner Studio</h1>
                <p className="text-xs text-orange-400 font-medium -mt-0.5">Interiors</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Creating beautiful spaces that inspire since 2012.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">About Me</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Interior Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Home Plans</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">3D Visualization</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Landscaping</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">+9190107 99990</p>
              <p className="text-gray-400 text-sm break-all">dsinteriorshyd1@gmail.com</p>
              <p className="text-gray-400 text-sm">
                Door No 1-31/1, Raja Ram Enclave,<br />
                Kondapur, Hyderabad-500084
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm flex flex-wrap items-center justify-center gap-1">
            &copy; 2026 Dsigner Studio Interiors. All rights reserved.
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              Made with
              <Heart className="w-4 h-4 text-amber-400 animate-pulse" />
              for beautiful spaces.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;