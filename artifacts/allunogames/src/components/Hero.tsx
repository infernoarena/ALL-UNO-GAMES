import React from 'react';
import { ShieldCheck, Coins, HeadphonesIcon, Zap } from 'lucide-react';
import logoImg from '@assets/IMG-20260722-WA0007_1784866979868.jpg';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1854 0%, #0d2680 40%, #1a3a9e 70%, #0a1854 100%)' }}>
      {/* Decorative glow blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,200,0,0.12) 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,200,0,0.10) 0%, transparent 70%)', transform: 'translate(30%, 30%)' }} />

      {/* Decorative card suits */}
      <div className="absolute top-6 left-8 text-yellow-400 text-5xl opacity-20 select-none pointer-events-none">♠</div>
      <div className="absolute top-10 right-10 text-yellow-400 text-6xl opacity-15 select-none pointer-events-none rotate-12">♦</div>
      <div className="absolute bottom-10 left-16 text-yellow-400 text-4xl opacity-20 select-none pointer-events-none">♣</div>
      <div className="absolute bottom-6 right-20 text-yellow-400 text-5xl opacity-15 select-none pointer-events-none -rotate-12">♥</div>
      <div className="absolute top-1/2 left-4 text-yellow-400 text-3xl opacity-10 select-none pointer-events-none">♠</div>

      {/* Decorative coin circles */}
      <div className="absolute top-8 left-1/3 w-10 h-10 rounded-full border-2 border-yellow-400 opacity-20 pointer-events-none" />
      <div className="absolute bottom-12 left-1/4 w-7 h-7 rounded-full border-2 border-yellow-300 opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full border-2 border-yellow-400 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left: Text Content */}
          <div className="flex flex-col items-center lg:items-start space-y-5 text-center lg:text-left">

            {/* Logo + brand row */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-md opacity-60" style={{ background: 'radial-gradient(circle, rgba(255,200,0,0.5), transparent)' }} />
                <img src={logoImg} alt="AllYonoGames" className="relative w-16 h-16 rounded-full object-cover border-2 border-yellow-400 shadow-lg" />
              </div>
              <div>
                <div className="text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase mb-1">Play • Win • Earn</div>
                <div className="text-white text-2xl font-black font-gaming tracking-widest leading-none">
                  ALL<span style={{ color: '#FFD700' }}>YONO</span>GAMES
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="font-gaming font-black uppercase leading-none">
                <span className="block text-white text-5xl sm:text-6xl lg:text-7xl tracking-wide"
                  style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
                  ALL
                </span>
                <span className="block text-6xl sm:text-7xl lg:text-8xl tracking-widest"
                  style={{
                    color: '#FFD700',
                    textShadow: '0 0 20px rgba(255,215,0,0.6), 2px 2px 0px rgba(0,0,0,0.5)',
                    WebkitTextStroke: '1px rgba(255,180,0,0.5)'
                  }}>
                  YONO
                </span>
                <span className="block text-white text-5xl sm:text-6xl lg:text-7xl tracking-wide"
                  style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
                  GAMES
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-base font-bold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>
              India's <span style={{ color: '#FFD700' }}>Trusted</span> Rummy &amp; Gaming Platform
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <TrustBadge icon={<ShieldCheck className="w-4 h-4" />} text="100% Secure" />
              <TrustBadge icon={<Zap className="w-4 h-4" />} text="Fair Play" />
              <TrustBadge icon={<HeadphonesIcon className="w-4 h-4" />} text="24/7 Support" />
              <TrustBadge icon={<Coins className="w-4 h-4" />} text="Fast Payouts" />
            </div>

            {/* CTA Button */}
            <a
              href="#apps-section"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-black uppercase tracking-widest rounded-full transition-all duration-300 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                color: '#0a1854',
                boxShadow: '0 4px 24px rgba(255,215,0,0.4)',
                textShadow: 'none'
              }}
              onMouseOver={e => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,215,0,0.7)')}
              onMouseOut={e => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(255,215,0,0.4)')}
            >
              🏆 Play Rummy Win Real Cash
            </a>
          </div>

          {/* Right: Phone Mockup */}
          <div className="relative hidden lg:flex items-center justify-center h-[500px] w-full">
            {/* Glow behind phone */}
            <div className="absolute w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)' }} />

            <div className="relative w-[260px] h-[520px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4"
              style={{ borderColor: 'rgba(255,215,0,0.4)', background: '#0d1b5e' }}>
              {/* Phone notch */}
              <div className="absolute top-0 inset-x-0 h-7 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.3)' }}>
                <div className="w-14 h-1.5 bg-white/30 rounded-full" />
              </div>

              {/* App content */}
              <div className="w-full h-full pt-10 pb-5 px-4 flex flex-col gap-3" style={{ background: 'linear-gradient(180deg, #0d1b5e 0%, #0a1540 100%)' }}>
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="font-gaming font-black text-sm text-white">ALL<span style={{ color: '#FFD700' }}>YONO</span>GAMES</span>
                  <span className="text-yellow-400 text-xs">≡</span>
                </div>

                {/* Welcome bonus card */}
                <div className="w-full rounded-2xl p-3 shadow-lg relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #1a56db 0%, #3b82f6 100%)' }}>
                  <div className="text-xs text-white/70 uppercase tracking-wider mb-0.5">Welcome Bonus</div>
                  <div className="font-gaming text-2xl font-black" style={{ color: '#FFD700' }}>₹7777</div>
                  <div className="text-xs text-white font-bold">Extra Cash</div>
                  <button className="mt-2 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider"
                    style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', color: '#0a1854' }}>
                    Play Now
                  </button>
                  <div className="absolute -right-2 -top-2 text-4xl opacity-30">🃏</div>
                </div>

                {/* Popular Games */}
                <div className="text-xs font-bold text-white/70 uppercase tracking-wider flex justify-between">
                  <span>Popular Games</span>
                  <span style={{ color: '#FFD700' }}>View All</span>
                </div>

                {[
                  { name: 'Points Rummy', players: '4,567 Playing', color: 'bg-red-500' },
                  { name: 'Pool Rummy', players: '3,215 Playing', color: 'bg-blue-500' },
                  { name: 'Deals Rummy', players: '2,987 Playing', color: 'bg-green-500' },
                  { name: 'Practice', players: 'Play for Fun', color: 'bg-yellow-500' },
                ].map(({ name, players, color }) => (
                  <div key={name} className="flex items-center justify-between bg-white/10 rounded-xl px-3 py-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-lg ${color} flex items-center justify-center text-white font-bold text-xs`}>
                        {name[0]}
                      </div>
                      <div>
                        <div className="text-white text-xs font-semibold">{name}</div>
                        <div className="text-white/50 text-[10px]">{players}</div>
                      </div>
                    </div>
                    <button className="text-[10px] font-black px-2 py-1 rounded-full uppercase"
                      style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', color: '#0a1854' }}>
                      Play
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 inset-x-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FFA500, #FFD700, transparent)' }} />
    </section>
  );
}

function TrustBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md font-bold text-xs uppercase tracking-wider"
      style={{ background: 'rgba(255,255,255,0.1)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.25)' }}>
      {icon}
      {text}
    </div>
  );
}
