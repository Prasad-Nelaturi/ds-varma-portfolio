import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Copy, Check, Sparkles, ExternalLink } from 'lucide-react';

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [toastMessage, setToastMessage] = useState(null);

  // Contact information with proper actions
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 90107 99990',
      action: () => {
        // This will trigger the phone dialer
        window.location.href = 'tel:+919010799991';
      },
      color: 'bg-green-100 text-green-600',
      buttonText: 'Call Now',
      isClickable: true,
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'dsinteriorshyd1@gmail.com',
      action: () => {
        // This will open email client
        window.location.href = 'mailto:dsinteriorshyd1@gmail.com?subject=Interior Design Inquiry&body=Hi, I would like to discuss my interior design project...';
      },
      color: 'bg-blue-100 text-blue-600',
      buttonText: 'Send Email',
      isClickable: true,
    },
    {
      icon: MapPin,
      title: 'Studio Address',
      value: 'Door No 1-31/1, Raja Ram Enclave, Kondapur, Hyderabad-500084',
      action: () => {
        // This will open Google Maps with the address
        const address = encodeURIComponent('Door No 1-31/1, Raja Ram Enclave, Kondapur, Hyderabad-500084');
        window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
      },
      color: 'bg-red-100 text-red-600',
      buttonText: 'Get Directions',
      isClickable: true,
    },
  ];

  const socialLinks = [
    {
      icon: SocialIcons.Instagram,
      href: 'https://instagram.com',
      label: 'Instagram',
      username: '@dsinteriors'
    },
    {
      icon: SocialIcons.Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      username: 'DS Interiors'
    },
    {
      icon: SocialIcons.Youtube,
      href: 'https://youtube.com',
      label: 'YouTube',
      username: 'DS Interiors'
    },
  ];

  // Toast notification
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    showToast('✓ Thank you! I\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle contact action with validation
  const handleContactAction = (action, title) => {
    if (title === 'Phone') {
      // Check if device supports calling
      if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
        action();
      } else {
        showToast('📱 Phone app will open on mobile devices');
        action();
      }
    } else if (title === 'Email') {
      // Check if email client is available
      action();
    } else if (title === 'Studio Address') {
      // Open Google Maps
      action();
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-lg px-6 py-3 rounded-2xl shadow-2xl border border-green-200"
        >
          <span className="text-green-600 font-medium">{toastMessage}</span>
        </motion.div>
      )}

      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 neumorph px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-gray-600">
            Ready to transform your space? Reach out and let's bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="neumorph-card p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color} flex-shrink-0`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600 text-sm break-words">{item.value}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleContactAction(item.action, item.title)}
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-colors ${item.isClickable ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg hover:shadow-orange-500/25' : 'text-orange-500'}`}
                      >
                        {item.buttonText}
                        <ExternalLink className="w-3 h-3" />
                      </motion.button>
                      {item.title !== 'Studio Address' && (
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(item.value);
                            showToast(`📋 Copied ${item.title} to clipboard`);
                          }}
                          className="text-gray-400 hover:text-orange-500 transition-colors"
                          aria-label="Copy to clipboard"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <div className="neumorph-card p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Connect With Me</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all group relative"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Follow us on social media for design inspiration
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="neumorph-card p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Send Me a Message</h3>
              <p className="text-gray-600 text-sm mb-4">
                I'd love to hear about your project. Fill in the form and I'll get back to you within 24 hours.
              </p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neumorph-light rounded-xl shadow-neumorph-inset focus:shadow-neumorph focus:outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neumorph-light rounded-xl shadow-neumorph-inset focus:shadow-neumorph focus:outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neumorph-light rounded-xl shadow-neumorph-inset focus:shadow-neumorph focus:outline-none transition-all"
                    placeholder="+91 90107 99990"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-neumorph-light rounded-xl shadow-neumorph-inset focus:shadow-neumorph focus:outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full neumorph-button-primary flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;