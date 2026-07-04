import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

const About = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-orange-300"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-orange-300"></div>
            
            <div className="neumorph rounded-3xl p-4 relative z-10">
              <img
                src="/images/dsv1.jpeg"
                alt="Sarah Dsigner - Interior Designer"
                className="rounded-2xl w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 neumorph p-4 rounded-2xl z-20"
            >
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8 text-orange-500" />
                <div>
                  <div className="font-bold text-gray-800 text-sm sm:text-base">Passionate Designer</div>
                  <div className="text-xs text-gray-500">Creating dreams since 2012</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 neumorph px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Crafting Beautiful
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Spaces With Heart
              </span>
            </h2>

            <div className="space-y-4 mb-6">
              <p className="text-gray-600 leading-relaxed">
                I'm Sarah Dsigner, the creative force behind Dsigner Studio Interiors. With over 12 years of experience in interior design, I believe that every space tells a story — and I'm here to help you tell yours.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My design philosophy blends aesthetics with functionality, creating spaces that not only look beautiful but also feel like home. From residential to commercial projects, I bring warmth, elegance, and timeless style to every space I touch.
              </p>
            </div>

            {/* Personal Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="neumorph-card p-3 text-center">
                <div className="text-2xl font-bold text-orange-500">500+</div>
                <div className="text-xs text-gray-500">Projects</div>
              </div>
              <div className="neumorph-card p-3 text-center">
                <div className="text-2xl font-bold text-orange-500">12</div>
                <div className="text-xs text-gray-500">Years</div>
              </div>
              <div className="neumorph-card p-3 text-center">
                <div className="text-2xl font-bold text-orange-500">4.8</div>
                <div className="text-xs text-gray-500">Rating</div>
              </div>
              <div className="neumorph-card p-3 text-center">
                <div className="text-2xl font-bold text-orange-500">98%</div>
                <div className="text-xs text-gray-500">Satisfaction</div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="neumorph-button-primary w-full sm:w-auto"
            >
              Get to Know Me
              <ArrowRight className="w-4 h-4 inline ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;