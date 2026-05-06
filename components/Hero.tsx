import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Paraguay Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto fade-in-up">
        <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6">
          Get to know Paraguay
        </h1>
        <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl font-light tracking-wide text-gray-200">
          Your insider access to the heart of South America.
        </p>
        
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
          <a 
            href="#explore" 
            className="px-8 py-3 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-luxury-black transition-all duration-300"
          >
            Start Exploring
          </a>
          <a 
            href="https://www.paraguayconcierge.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-luxury-gold border border-luxury-gold text-white uppercase tracking-widest text-sm hover:bg-white hover:text-luxury-gold hover:border-white transition-all duration-300"
          >
            Invest Now
          </a>
        </div>
      </div>
    </div>
  );
};