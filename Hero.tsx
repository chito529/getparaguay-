import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[95vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1649275579015-5092d2ffcf2b?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Paraguay Luxury Lifestyle" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto fade-in-up">
        <span className="uppercase tracking-[0.3em] text-xs md:text-sm font-light text-luxury-gold mb-4 block">
          Welcome to Asunción
        </span>
        <h1 className="text-5xl md:text-8xl font-serif font-normal leading-tight mb-8">
          The Art of <br/>
          <span className="italic">Quiet Luxury</span>
        </h1>
        <div className="w-16 h-[1px] bg-luxury-gold/50 mx-auto mb-10"></div>
        <p className="text-lg md:text-xl font-light tracking-wide text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Your curated guide to the sophisticated lifestyle, exclusive investments, and serene living in the heart of South America.
        </p>
        
        <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center">
          <a 
            href="#explore" 
            className="group relative px-8 py-3 overflow-hidden"
          >
             <span className="relative z-10 text-white uppercase tracking-widest text-xs group-hover:text-luxury-gold transition-colors duration-300">Discover the Lifestyle</span>
             <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white group-hover:bg-luxury-gold transition-colors duration-300"></div>
          </a>
          <a 
            href="https://www.paraguayconcierge.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-luxury-gold/90 text-white uppercase tracking-widest text-xs hover:bg-white hover:text-luxury-black transition-all duration-500 rounded-sm"
          >
            Concierge Access
          </a>
        </div>
      </div>
    </div>
  );
};
