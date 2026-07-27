import React from 'react';
import { Download, Trophy, Star, ArrowDownToLine } from 'lucide-react';
import { getAppColor, getAppInitials } from '@/lib/utils';

export function FeaturedApps() {
  const featured = [
    {
      rank: 1,
      name: 'Boss-Rummy',
      bonus: '₹200-500',
      minW: '₹100',
      link: 'https://www.bossrummye.com/?code=9HFZC6V163M&t=1781437008',
      icon: '/icons/boss-rummy.jpg',
    },
    {
      rank: 2,
      name: 'Rumble-Rummy',
      bonus: '₹100-480',
      minW: '₹100',
      link: 'https://www.rumblerummy333.com/?code=UC0XC4EQBJZ&t=1781441719',
      icon: '/icons/rumble-rummy.jpg',
    },
    {
      rank: 3,
      name: 'Rummy-91',
      bonus: '₹625',
      minW: '₹100',
      link: 'https://www.rummy91p.bet/?code=4KTF26ZVDZX&t=1781435523',
      icon: '/icons/rummy-91.jpg',
    },
  ];

  return (
    <section className="w-full py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="w-6 h-6 text-primary shrink-0" />
          <div>
            <h2 className="text-2xl font-black font-gaming text-gray-900 uppercase tracking-wider">
              Top 3 Apps Today
            </h2>
            <p className="text-sm text-gray-500 font-medium mt-0.5">Editor's top picks — updated daily</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {featured.map((app) => (
            <div
              key={app.name}
              className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col card-shadow card-shadow-hover transition-all duration-200 relative overflow-hidden"
            >
              {/* Rank Badge */}
              <span className="absolute top-3 left-3 w-6 h-6 rounded-full bg-primary text-white text-xs font-black flex items-center justify-center shadow-sm">
                {app.rank}
              </span>
              {/* New Badge */}
              <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                NEW
              </span>

              <div className="flex items-start gap-3 mb-3 mt-1 pt-2">
                {(app as any).icon ? (
                  <img
                    src={(app as any).icon}
                    alt={app.name}
                    className="w-14 h-14 shrink-0 rounded-xl object-contain shadow-sm bg-white"
                  />
                ) : (
                  <div className={`w-14 h-14 shrink-0 ${getAppColor(app.name)} rounded-xl flex items-center justify-center text-white text-xl font-black font-gaming shadow-sm`}>
                    {getAppInitials(app.name)}
                  </div>
                )}
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="text-base font-bold text-gray-900 truncate">{app.name}</h3>
                  <span className="inline-block bg-blue-50 text-blue-600 border border-blue-100 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase mt-1">
                    Trusted
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 flex flex-col items-center justify-center">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5 flex items-center gap-1">
                    <Star className="w-3 h-3 text-primary" /> Bonus
                  </span>
                  <span className="font-bold text-primary text-sm">{app.bonus}</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 flex flex-col items-center justify-center">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5 flex items-center gap-1">
                    <ArrowDownToLine className="w-3 h-3 text-gray-400" /> Min W.
                  </span>
                  <span className="font-bold text-gray-700 text-sm">{app.minW}</span>
                </div>
              </div>

              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-sm rounded-xl flex items-center justify-center gap-2 transition-all mt-auto shadow-sm"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
