import React, { useState, useMemo } from 'react';
import { Search, Download, Star, ArrowDownToLine, Filter } from 'lucide-react';
import { APPS } from '@/data/apps';
import { getAppColor, getAppInitials } from '@/lib/utils';

type Tab = 'All Apps' | 'New Apps' | 'Upcoming';
type Sort = 'Default' | 'Bonus: High' | 'Bonus: Low' | 'Min W';

export function AllApps() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<Tab>('All Apps');
  const [activeSort, setActiveSort] = useState<Sort>('Default');

  // Helper to extract max bonus for sorting
  const extractMaxBonus = (bonusStr: string) => {
    // e.g. "₹50-200" -> 200, "₹51" -> 51
    const parts = bonusStr.replace(/[₹,]/g, '').split('-');
    return parseInt(parts[parts.length - 1], 10) || 0;
  };

  const filteredApps = useMemo(() => {
    let list = [...APPS];

    // 1. Filter by Tab
    if (activeTab === 'New Apps') {
      list = list.slice(0, 30);
    } else if (activeTab === 'Upcoming') {
      list = list.slice(30);
    }

    // 2. Filter by Search
    if (search.trim()) {
      const lowerSearch = search.toLowerCase();
      list = list.filter(app => 
        app.name.toLowerCase().includes(lowerSearch) || 
        app.bonus.toLowerCase().includes(lowerSearch)
      );
    }

    // 3. Sort
    if (activeSort === 'Bonus: High') {
      list.sort((a, b) => extractMaxBonus(b.bonus) - extractMaxBonus(a.bonus));
    } else if (activeSort === 'Bonus: Low') {
      list.sort((a, b) => extractMaxBonus(a.bonus) - extractMaxBonus(b.bonus));
    }
    // "Min W" is all ₹100, so we just leave it in current order

    return list;
  }, [search, activeTab, activeSort]);

  return (
    <section id="apps-section" className="w-full py-16 bg-[#060c2b] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-3xl font-black font-gaming text-white uppercase tracking-wider">
              Explore Apps
            </h2>
            
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search Yono, Rummy, Joy, 51 Bonus..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-card border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-card/50 p-2 rounded-2xl border border-white/5">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {(['All Apps', 'New Apps', 'Upcoming'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold tracking-wider uppercase transition-all flex-1 lg:flex-none ${
                    activeTab === tab 
                      ? 'bg-primary text-background' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 px-2 lg:px-0">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-widest hidden sm:block shrink-0">
                Sort By
              </span>
              {(['Default', 'Bonus: High', 'Bonus: Low', 'Min W'] as Sort[]).map((sort) => (
                <button
                  key={sort}
                  onClick={() => setActiveSort(sort)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all shrink-0 ${
                    activeSort === sort
                      ? 'bg-white/10 text-primary border border-primary/30'
                      : 'border border-white/10 text-gray-400 hover:bg-white/5'
                  }`}
                >
                  {sort}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredApps.length === 0 ? (
          <div className="w-full py-20 flex flex-col items-center justify-center text-gray-500 gap-4">
            <Search className="w-12 h-12 opacity-20" />
            <p className="text-lg">No apps found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredApps.map((app, index) => {
              // Add a "NEW" badge to most apps (say, first 70% of the list based on original index)
              // Just a visual flair as requested "NEW badge (on most apps)"
              const isNew = index % 3 !== 0; 
              
              return (
                <div 
                  key={app.name + index} 
                  className="bg-card border border-white/10 rounded-2xl p-4 flex flex-col hover:border-primary/40 transition-colors group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 shrink-0 ${getAppColor(app.name)} rounded-xl flex items-center justify-center text-white text-2xl font-black font-gaming shadow-lg`}>
                      {getAppInitials(app.name)}
                    </div>
                    
                    <div className="flex-1 min-w-0 pt-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-white truncate" title={app.name}>
                          {app.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {isNew && (
                          <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                            New
                          </span>
                        )}
                        <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                          Trusted
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-black/40 rounded-lg p-2 border border-white/5 flex flex-col items-center justify-center">
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                        <Star className="w-3 h-3 text-primary" /> Bonus
                      </span>
                      <span className="font-bold text-primary text-sm">{app.bonus}</span>
                    </div>
                    <div className="bg-black/40 rounded-lg p-2 border border-white/5 flex flex-col items-center justify-center">
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                        <ArrowDownToLine className="w-3 h-3 text-gray-400" /> Min W.
                      </span>
                      <span className="font-bold text-white text-sm">₹100</span>
                    </div>
                  </div>

                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-primary/10 hover:bg-primary border border-primary/50 text-primary hover:text-background font-bold uppercase tracking-wider text-sm rounded-lg flex items-center justify-center gap-2 transition-all mt-auto"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
