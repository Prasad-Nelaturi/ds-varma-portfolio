import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office', 'Villa'];

  const projects = [
    { title: 'Modern Living Room', category: 'Living Room', year: '2024', image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600' },
    { title: 'Luxury Bedroom', category: 'Bedroom', year: '2024', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600' },
    { title: 'Corporate Office', category: 'Office', year: '2023', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600' },
    { title: 'Kitchen Design', category: 'Kitchen', year: '2024', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600' },
    { title: 'Luxury Villa', category: 'Villa', year: '2023', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600' },
    { title: 'Modern Living Space', category: 'Living Room', year: '2024', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600' },
    { title: 'Master Bedroom', category: 'Bedroom', year: '2024', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600' },
    { title: 'Restaurant Interior', category: 'Villa', year: '2024', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600' },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="portfolio" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 neumorph px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">My Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600">
            Explore some of my favorite interior design projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'neumorph-inset text-orange-600'
                  : 'neumorph-button text-gray-600 hover:text-orange-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                className="neumorph-card p-3 group cursor-pointer"
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h4 className="text-white font-semibold">{project.title}</h4>
                    <p className="text-orange-300 text-sm">{project.category} • {project.year}</p>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-semibold text-gray-800">{project.title}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-500">{project.category}</span>
                    <span className="text-xs text-gray-400">{project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="neumorph-button px-8 py-3 text-gray-700 inline-flex items-center gap-2"
            >
              Load More Projects
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;