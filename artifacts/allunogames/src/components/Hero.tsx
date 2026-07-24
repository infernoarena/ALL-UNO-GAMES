import React from 'react';
import { ShieldCheck, Coins, HeadphonesIcon, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full bg-hero-gradient overflow-hidden py-14 lg:py-20 border-b border-gray-100">
      {/* Subtle decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-60 pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-60 pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="flex flex-col items-start space-y-6 text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase">
              Play &bull; Win &bull; Earn
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-gaming leading-[1.1] text-gray-900 uppercase">
              ALL <span className="text-gold-gradient">UNO</span> GAMES
            </h1>

            <p className="text-lg text-gray-600 font-medium max-w-lg">
              INDIA'S TRUSTED RUMMY &amp; GAMING PLATFORM. Download the best Yono apps and start winning today.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <Badge icon={<ShieldCheck className="w-4 h-4 text-primary" />} text="100% SECURE" />
              <Badge icon={<Zap className="w-4 h-4 text-primary" />} text="FAIR PLAY" />
              <Badge icon={<HeadphonesIcon className="w-4 h-4 text-primary" />} text="24/7 SUPPORT" />
              <Badge icon={<Coins className="w-4 h-4 text-primary" />} text="FAST PAYOUTS" />
            </div>

            <div className="pt-4 w-full sm:w-auto">
              <a
                href="#apps-section"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-primary rounded-full hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest gold-shadow hover-gold-shadow shadow-md"
              >
                Play Rummy Win Real Cash
              </a>
            </div>
          </div>

          {/* Mockup visual */}
          <div className="relative hidden lg:flex items-center justify-center h-[480px] w-full">
            <div className="relative w-[260px] h-[520px] bg-white border-4 border-gray-200 rounded-[2.5rem] shadow-2xl overflow-hidden">
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-7 bg-gray-50 rounded-t-[2.1rem] flex items-center justify-center border-b border-gray-100">
                <div className="w-14 h-1.5 bg-gray-300 rounded-full"></div>
              </div>

              {/* Fake App UI */}
              <div className="w-full h-full bg-gray-50 pt-10 pb-5 px-4 flex flex-col gap-3">
                <div className="w-full h-28 bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center p-4 shadow-md">
                  <div className="text-white text-center">
                    <div className="text-3xl font-black font-gaming">₹5,000</div>
                    <div className="text-xs uppercase tracking-widest opacity-90 mt-1">Total Winnings</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    { letter: 'R', label: 'Rummy', color: 'bg-red-500' },
                    { letter: 'S', label: 'Slots', color: 'bg-blue-500' },
                    { letter: 'P', label: 'Poker', color: 'bg-green-500' },
                    { letter: 'C', label: 'Crash', color: 'bg-yellow-500' },
                  ].map(({ letter, label, color }) => (
                    <div key={label} className="h-24 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-2">
                      <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white font-bold text-lg`}>{letter}</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">{label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto h-11 w-full bg-primary rounded-full flex items-center justify-center font-bold text-white uppercase tracking-widest text-sm shadow-md">
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

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 rounded-md shadow-sm">
      {icon}
      <span className="text-xs font-bold text-gray-700 tracking-wider">{text}</span>
    </div>
  );
}
