import React, { useState, useMemo } from 'react';
import { Search, Download, Star, ArrowDownToLine } from 'lucide-react';
import { APPS } from '@/data/apps';
import { getAppColor, getAppInitials } from '@/lib/utils';

type Tab = 'All Apps' | 'New Apps' | 'Upcoming';
type Sort = 'Default' | 'Bonus: High' | 'Bonus: Low' | 'Min W';

export function AllApps() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<Tab>('All Apps');
  const [activeSort, setActiveSort] = useState<Sort>('Default');

  const extractMaxBonus = (bonusStr: string) => {
    const parts = bonusStr.replace(/[₹,]/g, '').split('-');
    return parseInt(parts[parts.length - 1], 10) || 0;
  };

  const filteredApps = useMemo(() => {
    let list = [...APPS];

    if (activeTab === 'New Apps') list = list.slice(0, 30);
    else if (activeTab === 'Upcoming') list = list.slice(30);

    if (search.trim()) {
      const lowerSearch = search.toLowerCase();
      list = list.filter(
        (app) =>
          app.name.toLowerCase().includes(lowerSearch) ||
          app.bonus.toLowerCase().includes(lowerSearch),
      );
    }

    if (activeSort === 'Bonus: High') {
      list.sort((a, b) => extractMaxBonus(b.bonus) - extractMaxBonus(a.bonus));
    } else if (activeSort === 'Bonus: Low') {
      list.sort((a, b) => extractMaxBonus(a.bonus) - extractMaxBonus(b.bonus));
    }

    return list;
  }, [search, activeTab, activeSort]);

  return (
    <section id="apps-section" className="w-full py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header & Controls */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-black font-gaming text-gray-900 uppercase tracking-wider">
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
                className="w-full bg-white border border-gray-200 rounded-full py-2.5 pl-12 pr-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 bg-white p-2 rounded-2xl border border-gray-200 shadow-sm">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {(['All Apps', 'New Apps', 'Upcoming'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-xl text-sm font-bold tracking-wider uppercase transition-all flex-1 lg:flex-none ${
                    activeTab === tab
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0 px-1 lg:px-0">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest hidden sm:block shrink-0">
                Sort
              </span>
              {(['Default', 'Bonus: High', 'Bonus: Low', 'Min W'] as Sort[]).map((sort) => (
                <button
                  key={sort}
                  onClick={() => setActiveSort(sort)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all shrink-0 ${
                    activeSort === sort
                      ? 'bg-primary/10 text-primary border border-primary/30'
                      : 'border border-gray-200 text-gray-500 hover:bg-gray-50'
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
          <div className="w-full py-20 flex flex-col items-center justify-center text-gray-400 gap-4">
            <Search className="w-12 h-12 opacity-30" />
            <p className="text-lg font-medium">No apps found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredApps.map((app, index) => {
              const isNew = index % 3 !== 0;

              return (
                <div
                  key={app.name + index}
                  className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col card-shadow card-shadow-hover transition-all duration-200"
                >
                  <div className="flex items-start gap-3 mb-3">
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
                      <h3 className="text-base font-bold text-gray-900 truncate" title={app.name}>
                        {app.name}
                      </h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {isNew && (
                          <span className="bg-red-50 text-red-500 border border-red-100 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                            New
                          </span>
                        )}
                        <span className="bg-blue-50 text-blue-500 border border-blue-100 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                          Trusted
                        </span>
                      </div>
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
                      <span className="font-bold text-gray-700 text-sm">₹100</span>
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
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
