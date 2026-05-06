import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-serif mb-6">Get<span className="italic font-light">Paraguay</span></h3>
            <p className="text-gray-400 font-light max-w-sm mb-8">
              The premier digital gateway for sophisticated investors and global citizens looking to connect with the heart of South America.
            </p>
            <div className="flex space-x-4">
              {/* Social Placeholders */}
              <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-colors cursor-pointer">IG</div>
              <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-colors cursor-pointer">LI</div>
              <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-colors cursor-pointer">TW</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-6 text-luxury-gold">Navigation</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm tracking-wide">
              <li><a href="#explore" className="hover:text-white transition-colors">EXPLORE</a></li>
              <li><a href="#invest" className="hover:text-white transition-colors">INVEST</a></li>
              <li><a href="#settle" className="hover:text-white transition-colors">SETTLE</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ABOUT US</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6 text-luxury-gold">Partner Services</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm tracking-wide">
              <li>
                <a 
                    href="https://www.paraguayconcierge.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-2"
                >
                    PARAGUAY CONCIERGE
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">REAL ESTATE FINDER</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LEGAL CONSULTING</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} GetParaguay. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};