import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Cpu, Zap, Award, Shield, Coffee, Mic, Smartphone, Sun } from 'lucide-react';

const KitchenAppliances = () => {
  const appliances = [
    { icon: Mic, title: 'Built-In Microwave', desc: 'Seamlessly integrated microwaves for modern living.' },
    { icon: Coffee, title: 'Luxury Refrigerators', desc: 'Energy-efficient refrigerators with smart storage.' },
    { icon: Sun, title: 'Premium Cooktops', desc: 'High-performance cooktops for precision cooking.' },
    { icon: Smartphone, title: 'Coffee & Beverage', desc: 'Create café-style experiences at home.' },
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-amber-50/50 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="badge">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">Smart Kitchen</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Appliances & Solutions
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Discover premium kitchen appliances crafted to enhance functionality, comfort, and modern luxury living.
            </p>

            <div className="neumorph-card p-6 mb-6">
              <h4 className="font-bold text-gray-800 text-lg">Smart Modular Kitchen</h4>
              <p className="text-gray-600 text-sm">Elegant modular kitchens crafted for premium functionality.</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="neumorph-card p-3 text-center">
                <Cpu className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                <span className="text-xs font-medium text-gray-700">Smart Automation</span>
              </div>
              <div className="neumorph-card p-3 text-center">
                <Award className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                <span className="text-xs font-medium text-gray-700">Luxury Finishes</span>
              </div>
              <div className="neumorph-card p-3 text-center">
                <Zap className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                <span className="text-xs font-medium text-gray-700">Energy Efficient</span>
              </div>
              <div className="neumorph-card p-3 text-center">
                <Shield className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                <span className="text-xs font-medium text-gray-700">Premium Quality</span>
              </div>
            </div>

            <button className="neumorph-button-primary w-full sm:w-auto">
              Get Free Consultation
              <ArrowRight className="w-4 h-4 inline ml-2" />
            </button>
          </div>

          {/* Right - Appliances Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {appliances.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="neumorph-card p-5 text-center group cursor-pointer hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                <button className="mt-3 text-orange-500 text-xs font-medium flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitchenAppliances;