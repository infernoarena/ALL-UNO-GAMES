import React from 'react';
import { Send, Crown } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#04081c] border-t border-white/5 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          <div className="flex items-center gap-2 mb-6">
            <Crown className="w-8 h-8 text-gray-600" strokeWidth={2} />
            <span className="font-gaming text-2xl font-bold tracking-wider text-gray-400">
              ALL<span className="text-gray-600">UNO</span>GAMES
            </span>
          </div>
          
          <p className="text-gray-400 mb-8 max-w-md">
            AllUnoGames.site &mdash; India's Best Yono App Store. Find the most trusted and high-paying apps in one place.
          </p>

          <a 
            href="https://t.me/gmaploots1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#2AABEE]/10 hover:bg-[#2AABEE] text-[#2AABEE] hover:text-white border border-[#2AABEE]/30 px-6 py-3 rounded-full font-bold transition-all mb-12"
          >
            <Send className="w-5 h-5" />
            Join Telegram Support
          </a>

          <div className="w-full border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-widest font-bold">
            <p>&copy; {new Date().getFullYear()} ALLUNOGAMES.SITE. ALL RIGHTS RESERVED.</p>
            <p className="text-red-900/60 font-medium">For entertainment purposes. Play responsibly.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
