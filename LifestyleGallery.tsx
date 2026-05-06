import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: "Culinary Excellence",
    subtitle: "A Fusion of Worlds",
    description: "Experience a gastronomic renaissance in Asunción, where Michelin-standard chefs blend indigenous ingredients with European techniques.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "The Golf Circuit",
    subtitle: "Prestigious Greens",
    description: "Gain access to the region's most exclusive country clubs. Pristine fairways, private networking, and endless summers.",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Wellness & Spa",
    subtitle: "Sanctuaries of Calm",
    description: "Rejuvenate in world-class spas that utilize native botanicals. A holistic approach to health in a serene environment.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Shopping & Fashion",
    subtitle: "The New Luxury Hub",
    description: "Discover the Paseo La Galería and Shopping del Sol, home to international luxury brands and bespoke local designers.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const LifestyleGallery: React.FC = () => {
  return (
    <section className="py-24 bg-luxury-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-luxury-gold uppercase tracking-[0.2em] text-xs font-semibold">The Asunción Edit</span>
          <h2 className="text-4xl md:text-6xl font-serif mt-6 mb-8">Curated Experiences</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed font-serif italic">
            "True luxury is not just about possession, but the richness of experience. Asunción offers a canvas for a life well-lived."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-8">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                />
              </div>
              <div className="flex flex-col items-start border-l-2 border-luxury-gold/30 pl-6 group-hover:border-luxury-gold transition-colors duration-500">
                <span className="text-luxury-gold uppercase tracking-widest text-xs mb-2">{item.subtitle}</span>
                <h3 className="text-3xl font-serif mb-4 text-white group-hover:text-luxury-gold transition-colors">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base pr-4">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};