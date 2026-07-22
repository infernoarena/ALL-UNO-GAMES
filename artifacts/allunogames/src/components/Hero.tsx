import React from 'react';
import { ShieldCheck, Coins, HeadphonesIcon, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full bg-dark-gradient overflow-hidden py-16 lg:py-24 border-b border-white/5">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgNjBoNjBNNjAgMGYwIDYwIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start space-y-6 text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase">
              Play &bull; Win &bull; Earn
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-gaming leading-[1.1] text-white">
              ALL <span className="text-gold-gradient">UNO</span> GAMES
            </h1>
            
            <p className="text-xl text-gray-300 font-medium max-w-lg">
              INDIA'S TRUSTED RUMMY & GAMING PLATFORM. Download the best Yono apps and start winning today.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-4">
              <Badge icon={<ShieldCheck className="w-4 h-4 text-primary" />} text="100% SECURE" />
              <Badge icon={<Zap className="w-4 h-4 text-primary" />} text="FAIR PLAY" />
              <Badge icon={<HeadphonesIcon className="w-4 h-4 text-primary" />} text="24/7 SUPPORT" />
              <Badge icon={<Coins className="w-4 h-4 text-primary" />} text="FAST PAYOUTS" />
            </div>
            
            <div className="pt-6 w-full sm:w-auto">
              <a href="#apps-section" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-bold text-background bg-gold-gradient rounded-full hover:scale-105 transition-transform duration-300 uppercase tracking-widest gold-shadow hover-gold-shadow">
                Play Rummy Win Real Cash
              </a>
            </div>
          </div>
          
          {/* Mockup visual */}
          <div className="relative hidden lg:block h-[500px] w-full flex items-center justify-center perspective-1000">
            {/* We'll build a CSS-only stylized phone mockup showing "gaming" cards */}
            <div className="relative w-[280px] h-[560px] bg-background border-4 border-gray-800 rounded-[2.5rem] shadow-2xl shadow-primary/20 overflow-hidden transform rotate-y-[-15deg] rotate-x-[5deg]">
              {/* Phone Header */}
              <div className="absolute top-0 inset-x-0 h-8 bg-gray-900 rounded-t-[2.1rem] flex items-center justify-center">
                <div className="w-16 h-1.5 bg-gray-800 rounded-full"></div>
              </div>
              
              {/* Fake App UI */}
              <div className="w-full h-full bg-[#0a1563] pt-12 pb-6 px-4 flex flex-col gap-4 relative">
                 <div className="w-full h-32 bg-gradient-to-r from-purple-600 to-primary rounded-xl flex items-center justify-center p-4 shadow-inner">
                   <div className="text-white text-center">
                     <div className="text-3xl font-black font-gaming">₹5,000</div>
                     <div className="text-xs uppercase tracking-widest opacity-80">Total Winnings</div>
                   </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-3">
                   <div className="h-24 bg-white/10 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-2">
                     <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">R</div>
                     <div className="text-[10px] text-white uppercase tracking-wider">Rummy</div>
                   </div>
                   <div className="h-24 bg-white/10 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-2">
                     <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">S</div>
                     <div className="text-[10px] text-white uppercase tracking-wider">Slots</div>
                   </div>
                   <div className="h-24 bg-white/10 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-2">
                     <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">P</div>
                     <div className="text-[10px] text-white uppercase tracking-wider">Poker</div>
                   </div>
                   <div className="h-24 bg-white/10 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-2">
                     <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">C</div>
                     <div className="text-[10px] text-white uppercase tracking-wider">Crash</div>
                   </div>
                 </div>
                 
                 <div className="mt-auto h-12 w-full bg-gold-gradient rounded-full flex items-center justify-center font-bold text-background uppercase tracking-widest text-sm shadow-[0_0_15px_rgba(255,215,0,0.4)]">
                   Play Now
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-1.5 bg-black/40 border border-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
      {icon}
      <span className="text-xs font-bold text-white tracking-wider">{text}</span>
    </div>
  );
}
