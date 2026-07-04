import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

const TrustedClients = () => {
  const clients = [
    { name: 'Lansum Eldorado', logo: 'https://via.placeholder.com/150x80/FFA500/FFFFFF?text=Lansum' },
    { name: 'Prestige Beverly Hills', logo: 'https://via.placeholder.com/150x80/FF6B00/FFFFFF?text=Prestige' },
    { name: 'Sumadhura Horizon', logo: 'https://via.placeholder.com/150x80/FF8C00/FFFFFF?text=Sumadhura' },
    { name: 'Vishnu Vistara', logo: 'https://via.placeholder.com/150x80/FFA500/FFFFFF?text=Vishnu' },
    { name: 'Aparna Sarovar', logo: 'https://via.placeholder.com/150x80/FF6B00/FFFFFF?text=Aparna' },
    { name: 'MY Home Jewel', logo: 'https://via.placeholder.com/150x80/FF8C00/FFFFFF?text=MYHome' },
    { name: 'Ramky Cosmos', logo: 'https://via.placeholder.com/150x80/FFA500/FFFFFF?text=Ramky' },
    { name: 'Prajay Megapolis', logo: 'https://via.placeholder.com/150x80/FF6B00/FFFFFF?text=Prajay' },
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-b from-neumorph-light to-orange-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="badge justify-center">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">Our Trusted Clients</span>
          </div>
          <h2 className="section-title">Proudly serving industry leaders</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="neumorph-card p-6 flex flex-col items-center justify-center text-center group"
            >
              <div className="w-full h-16 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-gray-600 mt-3 font-medium">{client.name}</p>
              <div className="flex items-center gap-0.5 mt-1">
                <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                <span className="text-xs text-gray-500">Trusted Partner</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;