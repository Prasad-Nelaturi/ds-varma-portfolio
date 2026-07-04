import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  TreePine,
  Cpu,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Palette,
  Ruler,
  Home,
  VenetianMask,
  Radio,
  Building,
  Crown,
} from "lucide-react";

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      icon: Palette,
      title: "Interior Design",
      category: "DESIGN",
      description: "Complete interior solutions on turnkey & consultant basis",
      features: ["Custom Layouts", "3D Visualizations", "Material Selection"],
    },
    {
      icon: Ruler,
      title: "Home Plans & Elevations",
      category: "ARCHITECTURE",
      description: "Detailed floor plans & architectural elevations",
      features: ["Floor Plans", "Elevations", "Structural Design"],
    },
    {
      icon: Box,
      title: "3D Views & Visualization",
      category: "TECHNOLOGY",
      description: "Realistic 3D renderings of your dream space",
      features: ["3D Renderings", "Virtual Tours", "Material Previews"],
    },
    {
      icon: TreePine,
      title: "Landscaping",
      category: "OUTDOOR",
      description: "Beautiful outdoor spaces & garden designs",
      features: ["Garden Design", "Outdoor Lighting", "Irrigation Systems"],
    },
    {
      icon: Cpu,
      title: "Home Automation",
      category: "TECHNOLOGY",
      description: "Smart home solutions for modern living",
      features: ["Smart Lighting", "Security Systems", "Voice Control"],
    },
    {
      icon: VenetianMask,
      title: "Curtains & Blinds",
      category: "FURNISHINGS",
      description: "Premium window treatments & furnishings",
      features: ["Custom Curtains", "Motorized Blinds", "Fabric Selection"],
    },
    {
      icon: Radio,
      title: "Chimneys & Hobs",
      category: "KITCHEN",
      description: "Modern kitchen ventilation & cooking solutions",
      features: [
        "Chimney Installation",
        "Hob Selection",
        "Kitchen Ventilation",
      ],
    },
    {
      icon: Home,
      title: "Residential Interiors",
      category: "POPULAR",
      description: "Complete home interiors on turnkey basis",
      features: [
        "Full Home Design",
        "Furniture Selection",
        "Project Management",
      ],
    },
    {
      icon: Building,
      title: "Commercial Interiors",
      category: "BUSINESS",
      description: "Office spaces, retail & commercial interiors",
      features: ["Office Planning", "Retail Design", "Brand Integration"],
    },
    {
      icon: Palette,
      title: "Interior Styling & Decor",
      category: "STYLING",
      description: "Curated furniture & decor solutions",
      features: ["Furniture Curation", "Art Selection", "Accessories"],
    },
    {
      icon: Crown,
      title: "Luxury Villa Design",
      category: "PREMIUM",
      description: "Premium villa interiors with exquisite finishes",
      features: ["Luxury Finishes", "Smart Home", "Landscape Design"],
    },
    {
      icon: Ruler,
      title: "Space Planning",
      category: "PLANNING",
      description: "Optimized layouts for maximum functionality",
      features: ["Floor Planning", "Traffic Flow", "Zoning Strategy"],
    },
  ];

  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <section id="services" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 neumorph px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">What I Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Services I Offer
          </h2>
          <p className="text-gray-600">
            Delivering exceptional quality with innovative solutions tailored to
            your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {displayedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                className="neumorph-card border-x-2 border-gray-400"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">
                      {service.category}
                    </span>
                    <h3 className="font-bold text-gray-800 text-lg mt-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        <div className="text-center mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="neumorph-button px-8 py-3 text-gray-700 inline-flex items-center gap-2"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View All Services
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;
