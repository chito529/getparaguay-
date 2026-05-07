import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BlogGrid } from './components/BlogGrid';
import { PersistentCTA } from './components/PersistentCTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Simulate simple loading state for smooth entry
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <section id="explore" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-luxury-gold uppercase tracking-widest text-sm font-semibold">Lifestyle & Culture</span>
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-black mt-4 mb-6">Curated Living in Paraguay</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Discover the hidden gems of Asunción and beyond. From culinary masterpieces to architectural marvels, explore the sophisticated side of the heart of South America.
            </p>
          </div>
          <BlogGrid category="Explore" />
        </section>

        <section id="invest" className="py-20 bg-luxury-gray px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://picsum.photos/800/600?grayscale" 
                  alt="Modern architecture in Asuncion" 
                  className="w-full h-auto shadow-xl rounded-sm object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <span className="text-luxury-gold uppercase tracking-widest text-sm font-semibold">Investment Opportunities</span>
                <h2 className="text-4xl font-serif text-luxury-black mt-4 mb-6">A Stable Haven for Capital</h2>
                <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                  Paraguay offers one of the most attractive tax regimes in the region, coupled with a rapidly growing economy. Secure your legacy with strategic real estate and business investments.
                </p>
                <a 
                  href="https://www.paraguayconcierge.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block border-b-2 border-luxury-black pb-1 text-luxury-black hover:text-luxury-gold hover:border-luxury-gold transition-colors duration-300 font-medium"
                >
                  Consult Investment Specialists &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="settle" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-luxury-gold uppercase tracking-widest text-sm font-semibold">Residency & Relocation</span>
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-black mt-4 mb-6">Make It Your Home</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Navigating a new country shouldn't be stressful. We provide the roadmap for a seamless transition, from residency paperwork to finding the perfect neighborhood.
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