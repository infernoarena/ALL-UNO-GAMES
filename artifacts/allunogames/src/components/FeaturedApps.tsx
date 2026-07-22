import React from 'react';
import { Download, Trophy } from 'lucide-react';
import { getAppColor, getAppInitials } from '@/lib/utils';

export function FeaturedApps() {
  const featured = [
    { 
      rank: 1,
      name: "Rumble-Rummy", 
      bonus: "₹100-480", 
      minW: "₹100", 
      link: "https://www.rumblerummy333.com/?code=UC0XC4EQBJZ&t=1781441719" 
    },
    { 
      rank: 2,
      name: "Max-Rummy", 
      bonus: "₹51", 
      minW: "₹100", 
      link: "https://www.maxrummy11.com/?code=QUMQKC1ZGA1&t=1783565833" 
    },
    { 
      rank: 3,
      name: "Rummy-91", 
      bonus: "₹625", 
      minW: "₹100", 
      link: "https://www.rummy91p.bet/?code=4KTF26ZVDZX&t=1781435523" 
    }
  ];

  return (
    <section className="w-full py-16 bg-background relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black font-gaming text-white uppercase tracking-wider flex items-center justify-center gap-3">
            <Trophy className="w-8 h-8 text-primary" />
            Top 3 Apps Today
            <Trophy className="w-8 h-8 text-primary" />
          </h2>
          <p className="text-gray-400 mt-2 font-medium">The highest paying and most trusted apps right now.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((app) => (
            <div 
              key={app.name} 
              className="relative bg-card border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center overflow-hidden group hover:border-primary/50 transition-colors duration-300"
            >
              {/* Rank Badge */}
              <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                <div className="absolute transform -rotate-45 bg-primary text-background font-black text-sm py-1 left-[-35px] top-[15px] w-[120px] text-center shadow-lg">
                  #{app.rank}
                </div>
              </div>
              
              {/* New Badge */}
              <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider animate-pulse">
                NEW
              </div>

              {/* App Icon */}
              <div className={`w-24 h-24 ${getAppColor(app.name)} rounded-2xl flex items-center justify-center text-white text-4xl font-black font-gaming shadow-xl mb-4 transform group-hover:scale-105 transition-transform duration-300`}>
                {getAppInitials(app.name)}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{app.name}</h3>
              
              <div className="flex flex-col gap-1 mb-6 w-full">
                <div className="flex justify-between items-center bg-black/30 px-3 py-2 rounded-lg border border-white/5">
                  <span className="text-sm text-gray-400">Bonus</span>
                  <span className="font-bold text-primary">{app.bonus}</span>
                </div>
                <div className="flex justify-between items-center bg-black/30 px-3 py-2 rounded-lg border border-white/5">
                  <span className="text-sm text-gray-400">Min Withdraw</span>
                  <span className="font-bold text-white">{app.minW}</span>
                </div>
              </div>

              <a 
                href={app.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 bg-gold-gradient text-background font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all gold-shadow group-hover:scale-[1.02]"
              >
                <Download className="w-5 h-5" />
                Download Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
