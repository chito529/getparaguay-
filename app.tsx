import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BlogGrid } from './components/BlogGrid';
import { PersistentCTA } from './components/PersistentCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-6 py-20">
        <section id="invest" className="mb-32">
          <h2 className="text-4xl font-serif text-black mb-12">The Collection</h2>
          <BlogGrid />
        </section>
      </main>
      <PersistentCTA />
      <Footer />
    </div>
  );
}

export default App;
