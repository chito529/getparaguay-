import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Explore', href: '#explore' },
    { name: 'Invest', href: '#invest' },
    { name: 'Settle', href: '#settle' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`font-serif text-2xl tracking-tight font-semibold ${isScrolled ? 'text-luxury-black' : 'text-luxury-black md:text-white'}`}>
          Get<span className="italic font-light">Paraguay</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm uppercase tracking-widest hover:text-luxury-gold transition-colors ${
                isScrolled ? 'text-luxury-black' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://www.paraguayconcierge.com" 
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm uppercase tracking-widest border px-4 py-2 hover:bg-luxury-gold hover:border-luxury-gold hover:text-white transition-all ${
              isScrolled ? 'border-luxury-black text-luxury-black' : 'border-white text-white'
            }`}
          >
            Concierge
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-luxury-black focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-gray-100 animate-fade-in-down">
          <nav className="flex flex-col py-6 px-6 space-y-4">
             {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-luxury-black text-lg font-serif hover:text-luxury-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://www.paraguayconcierge.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-center mt-4 bg-luxury-black text-white py-3 px-6 uppercase tracking-widest text-sm hover:bg-luxury-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Concierge
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};