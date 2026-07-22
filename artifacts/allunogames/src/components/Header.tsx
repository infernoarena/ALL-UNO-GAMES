import React, { useState } from 'react';
import { Menu, X, Home, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Crown } from 'lucide-react';

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
    <header className="w-full bg-[#060c2b] border-b border-white/10 sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Crown className="w-8 h-8 text-primary" strokeWidth={2.5} />
            <span className="font-gaming text-2xl font-bold tracking-wider text-white">
              ALL<span className="text-primary">UNO</span>GAMES
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.target}
                rel={link.target ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a href="/" className="hidden sm:flex p-2 text-gray-300 hover:text-primary transition-colors">
              <Home className="w-5 h-5" />
            </a>
            
            <a 
              href="https://t.me/gmaploots1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#2AABEE] hover:bg-[#2298D6] text-white px-4 py-2 rounded-full font-bold transition-all text-sm uppercase tracking-wider gold-shadow"
            >
              <Send className="w-4 h-4" />
              Join TG
            </a>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-300 hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a1563] border-b border-white/10 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.target}
                rel={link.target ? "noopener noreferrer" : undefined}
                className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md uppercase tracking-wider"
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
