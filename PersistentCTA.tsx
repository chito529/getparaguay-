import React from 'react';

export const PersistentCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 animate-fade-in-up">
      <a
        href="https://www.paraguayconcierge.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-luxury-black text-white px-6 py-4 rounded-full shadow-2xl hover:bg-luxury-gold transition-all duration-300 hover:scale-105 group"
      >
        <div className="flex flex-col items-start">
          <span className="text-xs uppercase tracking-widest text-gray-300 group-hover:text-white">Need assistance?</span>
          <span className="font-serif font-medium text-lg">Paraguay Concierge</span>
        </div>
        <div className="bg-white/20 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </div>
      </a>
    </div>
  );
};