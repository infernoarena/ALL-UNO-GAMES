import React from 'react';
import { Send } from 'lucide-react';
import logoImg from '@assets/IMG-20260722-WA0007_1784866979868.jpg';

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

          <img src={logoImg} alt="AllUnoGames" className="w-16 h-16 rounded-full object-cover mb-3 shadow-sm border-2 border-green-100" />

          <span className="font-gaming text-xl font-bold tracking-wider text-gray-800 mb-4">
            ALL<span className="text-primary">YONO</span>GAMES
          </span>

          <p className="text-gray-500 mb-6 max-w-md text-sm">
            AllYonoGames.site &mdash; India's Best Yono App Store. Find the most trusted and high-paying apps in one place.
          </p>

          <a
            href="https://t.me/gmaploots1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#2AABEE] hover:bg-[#2298D6] text-white px-6 py-3 rounded-full font-bold transition-all mb-10 shadow-sm text-sm"
          >
            <Send className="w-4 h-4" />
            Join Telegram Support
          </a>

          <div className="w-full border-t border-gray-100 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400 uppercase tracking-widest font-bold">
            <p>&copy; {new Date().getFullYear()} ALLYONOGAMES.SITE. ALL RIGHTS RESERVED.</p>
            <p className="text-gray-400 font-medium">For entertainment purposes. Play responsibly.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
