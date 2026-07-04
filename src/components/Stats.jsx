import React from 'react';
import { motion } from 'framer-motion';
import { Users, Home, Award, Clock, CheckCircle, Globe } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Projects' },
    { icon: Users, value: '480+', label: 'Happy Clients' },
    { icon: Clock, value: '12+', label: 'Years' },
    { icon: CheckCircle, value: '98%', label: 'Satisfaction' },
    { icon: Award, value: '50+', label: 'Awards' },
    { icon: Globe, value: '100+', label: 'Cities' },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="neumorph-card text-center p-4"
            >
              <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;