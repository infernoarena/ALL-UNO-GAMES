import React, { useState } from 'react';
import { Menu, X, Home, Send } from 'lucide-react';
import logoImg from '@assets/IMG-20260722-WA0007_1784866979868.jpg';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Promo', href: '#' },
    { name: 'Disclaimer', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Telegram', href: 'https://t.me/gmaploots1', target: '_blank' },
    { name: 'Install', href: '#' },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="AllUnoGames Logo" className="w-9 h-9 rounded-full object-cover" />
            <span className="font-gaming text-xl font-bold tracking-wider text-gray-800">
              ALL<span className="text-primary">UONO</span>GAMES
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={(link as any).target}
                rel={(link as any).target ? 'noopener noreferrer' : undefined}
                className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a href="/" className="hidden sm:flex p-2 text-gray-500 hover:text-primary transition-colors">
              <Home className="w-5 h-5" />
            </a>

            <a
              href="https://t.me/gmaploots1"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#2AABEE] hover:bg-[#2298D6] text-white px-4 py-2 rounded-full font-bold transition-all text-sm uppercase tracking-wider shadow-sm"
            >
              <Send className="w-4 h-4" />
              Join TG
            </a>

            <button
              className="md:hidden p-2 text-gray-500 hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={(link as any).target}
                rel={(link as any).target ? 'noopener noreferrer' : undefined}
                className="block px-3 py-2 text-base font-semibold text-gray-700 hover:bg-gray-100 rounded-md uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://t.me/gmaploots1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-[#2AABEE] text-white px-4 py-3 rounded-md font-bold text-sm uppercase tracking-wider w-full"
            >
              <Send className="w-4 h-4" />
              Join Telegram Channel
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
