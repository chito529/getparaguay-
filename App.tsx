import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BlogGrid } from './components/BlogGrid';
import { PersistentCTA } from './components/PersistentCTA';
import { Footer } from './components/Footer';
import { LifestyleGallery } from './components/LifestyleGallery';

const App: React.FC = () => {
  // Simulate simple loading state for smooth entry
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col bg-white transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Intro Text - The Philosophy */}
        <section className="py-24 px-6 max-w-4xl mx-auto text-center">
            <p className="font-serif text-2xl md:text-3xl text-luxury-black italic leading-relaxed">
                "Paraguay is South America's best kept secret. A place where tradition meets modernity, and where freedom allows for a life of understated elegance."
            </p>
        </section>

        {/* Section 1: Explore (The Lifestyle) */}
        <section id="explore" className="pb-20 pt-10 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-6">
             <div>
                <span className="text-luxury-gold uppercase tracking-widest text-xs font-semibold block mb-2">01. Explore</span>
                <h2 className="text-4xl font-serif text-luxury-black">The Collection</h2>
             </div>
             <a href="#" className="hidden md:block text-xs uppercase tracking-widest text-gray-400 hover:text-luxury-black transition-colors">View All Stories</a>
          </div>
          <BlogGrid category="Explore" />
        </section>

        {/* Section 2: Lifestyle Gallery (Visual Impact) */}
        <LifestyleGallery />

        {/* Section 3: Invest (The Opportunity) */}
        <section id="invest" className="py-24 bg-luxury-gray">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-luxury-gold"></div>
                <img 
                  src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern architecture in Asuncion" 
                  className="w-full h-auto shadow-2xl object-cover relative z-10"
                />
              </div>
              <div className="order-1 md:order-2">
                <span className="text-luxury-gold uppercase tracking-widest text-xs font-semibold mb-4 block">02. Invest</span>
                <h2 className="text-4xl md:text-5xl font-serif text-luxury-black mb-8">Freedom to Grow</h2>
                <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed">
                  In a world of increasing complexity, Paraguay offers simplicity. With a territorial tax system and a stable currency, it is a sanctuary for capital and a canvas for legacy building.
                </p>
                <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
                  Secure prime real estate in the region's fastest-growing economy, from riverside penthouses to agricultural estates.
                </p>
                <a 
                  href="https://www.paraguayconcierge.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-luxury-black text-luxury-black uppercase tracking-widest text-xs hover:bg-luxury-black hover:text-white transition-all duration-300"
                >
                  Request Investment Guide
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Settle (The Transition) */}
        <section id="settle" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-luxury-gold uppercase tracking-widest text-xs font-semibold">03. Settle</span>
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-black mt-4 mb-6">Seamless Relocation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              We understand that moving is an art. Our concierge partners handle the details—residency, banking, and housing—so you can focus on arriving.
            </p>
          </div>
          <BlogGrid category="Settle" />
        </section>
      </main>

      <PersistentCTA />
      <Footer />
    </div>
  );
};

export default App;