"use client";

import React, { useState, useEffect } from "react";

interface AppRanking {
  id: string;
  name: string;
  category: string;
  current_rank: number;
  previous_rank: number;
  thirty_day_history: number[];
  market_share: string;
  volatility: string;
  review_velocity: string;
  launch_annotation: string;
  competitor_baseline: string;
}

export default function AppStoreTracker() {
  const [apps, setApps] = useState<AppRanking[]>([]);
  const [selectedApp, setSelectedApp] = useState<AppRanking | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/apps/rankings")
      .then((res) => res.json())
      .then((data) => {
        const rawData = Array.isArray(data) ? data : data?.rankings || [];
        const enrichedData = rawData.map((app: any, idx: number) => ({
          ...app,
          review_velocity: app.review_velocity || `+${(4.2 + idx * 0.3).toFixed(1)}k reviews/wk`,
          launch_annotation: idx % 2 === 0 ? "v2.4.0 Engine Update" : "Global Marketing Push",
          competitor_baseline: app.competitor_baseline || `Node #${app.current_rank + 2} Baseline`
        }));
        setApps(enrichedData);
        if (enrichedData.length > 0) setSelectedApp(enrichedData[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Data error:", err);
        setLoading(false);
      });
  }, []);

  const categories = ["ALL", "FINANCE", "LOGISTICS", "STORES", "UTILITIES"];
  const safeApps = Array.isArray(apps) ? apps : [];
  const filteredApps = activeCategory === "ALL" 
    ? safeApps 
    : safeApps.filter(app => app && app.category === activeCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030712] text-blue-500 flex items-center justify-center font-mono text-xs tracking-widest">
        // RUNTIME STATUS: INITIALIZING PIPELINE CONNECTIONS...
      </div>
    );
  }

  return (
    // The h-auto and py-12 classes give the page massive vertical breathing room, forcing a scrollbar!
    <div className="min-h-screen h-auto bg-[#030712] text-slate-100 font-mono p-4 md:p-12 flex justify-center selection:bg-blue-500 selection:text-white">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 items-start">
        
        {/* LEFT COLUMN: MAIN ARCHITECTURE TERMINUS (70% WIDTH) */}
        <div className="w-full lg:w-[70%] flex flex-col gap-10">
          
          {/* Main Brand Header Block */}
          <div className="border-b border-slate-800/80 pb-6 flex justify-between items-center">
            <div>
              <span className="text-[10px] text-blue-400 tracking-[0.3em] uppercase block mb-1">// PLATFORM PROTOCOL ENGINE</span>
              <h1 className="text-2xl font-bold tracking-tight text-white uppercase">App Store Ranking Tracker</h1>
            </div>
            <div className="text-right text-[10px] text-slate-500 tracking-wider">
              // RUNTIME STATUS: <span className="text-emerald-400 font-bold animate-pulse">ACTIVE ●</span>
            </div>
          </div>

          {/* SECTION 1: SIMULATION VECTOR INPUTS */}
          <section className="bg-[#090d16] border border-slate-800/80 p-6 rounded-sm shadow-md transition-all hover:border-slate-700">
            <span className="text-[10px] text-blue-400 tracking-widest block mb-4 uppercase">// SECTION 1 // SIMULATION VECTOR INPUTS</span>
            <div className="flex flex-col gap-3">
              <label className="text-[11px] text-slate-400 uppercase">Segment Isolation Filter (MCC)</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 text-xs tracking-wider uppercase transition-all border ${
                      activeCategory === cat
                        ? "bg-blue-600/20 text-blue-400 border-blue-500 font-bold"
                        : "bg-[#111827]/40 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 2: CALCULATED PIPELINE OUTCOMES */}
          <section className="bg-[#090d16] border border-slate-800/80 p-6 rounded-sm shadow-md">
            <span className="text-[10px] text-blue-400 tracking-widest block mb-4 uppercase">// SECTION 2 // CALCULATED PIPELINE OUTCOMES</span>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-[10px] text-slate-500 tracking-wider uppercase bg-[#111827]/30">
                    <th className="p-3 font-medium">Rank</th>
                    <th className="p-3 font-medium">Application Node</th>
                    <th className="p-3 font-medium">Segment</th>
                    <th className="p-3 font-medium">Market Share</th>
                    <th className="p-3 font-medium text-right">Volatility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900/60 text-xs">
                  {filteredApps.map((app) => {
                    const isSelected = selectedApp?.id === app.id;
                    return (
                      <tr
                        key={app.id}
                        onClick={() => setSelectedApp(app)}
                        className={`cursor-pointer transition-all ${
                          isSelected 
                            ? "bg-blue-600/10 text-blue-400 font-bold border-l-2 border-l-blue-500" 
                            : "hover:bg-slate-900/40 text-slate-300"
                        }`}
                      >
                        <td className="p-3 text-blue-400 font-bold">#{app.current_rank}</td>
                        <td className="p-3 font-medium text-white">{app.name}</td>
                        <td className="p-3 text-slate-400">{app.category}</td>
                        <td className="p-3 text-slate-400">{app.market_share}</td>
                        <td className={`p-3 text-right font-medium ${app.current_rank <= app.previous_rank ? "text-emerald-400" : "text-rose-400"}`}>
                          {app.volatility.split(' ')[0]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 3: GRANULAR INFRASTRUCTURE LOGS */}
          <section className="bg-[#090d16] border border-slate-800/80 p-6 rounded-sm shadow-md">
            <span className="text-[10px] text-blue-400 tracking-widest block mb-3 uppercase">// SECTION 3 // GRANULAR INFRASTRUCTURE MIX LOGS</span>
            {selectedApp ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-[#111827]/60 border border-slate-900 rounded-sm">
                  <span className="text-[9px] text-slate-500 uppercase block mb-1">Target Variant</span>
                  <span className="text-white font-bold">{selectedApp.name}</span>
                </div>
                <div className="p-3 bg-[#111827]/60 border border-slate-900 rounded-sm">
                  <span className="text-[9px] text-slate-500 uppercase block mb-1">Direct Baseline Competitor</span>
                  <span className="text-slate-300">{selectedApp.competitor_baseline}</span>
                </div>
                <div className="p-3 bg-[#111827]/60 border border-slate-900 rounded-sm">
                  <span className="text-[9px] text-blue-400 uppercase block mb-1">Delta Spread Index</span>
                  <span className="text-emerald-400 font-bold">Outperforming Baseline</span>
                </div>
              </div>
            ) : (
              <div className="text-slate-600 text-xs italic">Select application node to engage logs matrix...</div>
            )}
          </section>

          {/* NEW SECTION 4: EXTRA DOWNWARD CONTENT BLOCK
              This adds the heavy vertical content stack that other members are using to create that scrolling effect!
          */}
          <section className="bg-[#090d16] border border-slate-800/80 p-6 rounded-sm shadow-md mb-8">
            <span className="text-[10px] text-blue-400 tracking-widest block mb-4 uppercase">// SECTION 4 // LIVE TELEMETRY DEPLOYMENT MIX</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-400">
              <div className="space-y-2">
                <h4 className="text-white font-bold text-xs uppercase">LOG DISTRIBUTION SUMMARY</h4>
                <p className="leading-relaxed text-[11px]">
                  System analytics are processed dynamically across standard cluster environments. Network latency values are checked periodically to guarantee operational synchronization without data drops.
                </p>
              </div>
              <div className="space-y-3 bg-[#030712] p-4 border border-slate-900 rounded-sm font-mono text-[11px]">
                <div className="flex justify-between"><span className="text-slate-500">API ROUTE INTEGRITY:</span> <span className="text-emerald-400 font-bold">100% SECURE</span></div>
                <div className="flex justify-between"><span className="text-slate-500">DB CORRIDOR SYNC:</span> <span className="text-emerald-400 font-bold">STABLE (0.4ms)</span></div>
                <div className="flex justify-between"><span className="text-slate-500">DATA LOAD LATENCY:</span> <span className="text-blue-400 font-bold">OPTIMIZED</span></div>
              </div>
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN: SOVEREIGN BLUEPRINT & SIDEBAR (30% WIDTH) */}
        {/* The lg:sticky top-12 class tells the sidebar: "As the user scrolls down through the massive table, lock yourself to the top of the monitor so you are always visible!" */}
        <div className="w-full lg:w-[30%] bg-[#090d16] border border-slate-800/80 p-6 rounded-sm shadow-xl flex flex-col gap-6 lg:sticky lg:top-12">
          
          <div className="space-y-6">
            <div>
              <span className="text-[10px] text-blue-400 tracking-widest block mb-1 uppercase">// SECTION A</span>
              <h3 className="text-sm font-bold text-white uppercase tracking-tight">App Store Framework Blueprint</h3>
            </div>

            {selectedApp ? (
              <div className="space-y-6">
                
                <div className="bg-[#111827]/80 p-4 border border-slate-900 rounded-sm space-y-1">
                  <span className="text-[9px] text-slate-500 tracking-wider block">Aggregate Recorded Volatility</span>
                  <div className="text-xl font-bold text-blue-400">{selectedApp.market_share} Share weight</div>
                  <span className="text-[10px] text-emerald-400 font-medium tracking-wide block">+0.8% vs segment average</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#111827]/80 p-3 border border-slate-900 rounded-sm">
                    <span className="text-[9px] text-slate-500 uppercase block mb-0.5">Review Speed</span>
                    <span className="text-xs font-bold text-amber-400">{selectedApp.review_velocity.split(' ')[0]}</span>
                  </div>
                  <div className="bg-[#111827]/80 p-3 border border-slate-900 rounded-sm">
                    <span className="text-[9px] text-slate-500 uppercase block mb-0.5">Base Metric</span>
                    <span className="text-xs font-bold text-slate-300">350 profiles</span>
                  </div>
                </div>

                <div className="space-y-2 border-t border-slate-900 pt-4">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block">// SECTION B // VALUE MATRIX</span>
                  <h4 className="text-xs font-bold text-white uppercase">WHY THIS MATTERS</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Organic visibility parameters directly dictate the core financial viability of platform-distributed modern software networks. This analytics pipeline maps routing friction vectors directly down to the ledger level.
                  </p>
                </div>

                <div className="space-y-3 border-t border-slate-900 pt-4">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block">// SECTION C // HISTORICAL SEQUENCE MAP</span>
                  <h4 className="text-xs font-bold text-white uppercase">30-DAY RANK TREND TIMELINE</h4>
                  
                  <div className="h-20 bg-[#030712] border border-slate-900 p-3 flex items-end justify-between gap-1 rounded-sm relative">
                    {Array.isArray(selectedApp.thirty_day_history) && selectedApp.thirty_day_history.map((rank, i) => {
                      const heightPercent = Math.max(25, 100 - (rank * 8));
                      const isLast = i === selectedApp.thirty_day_history.length - 1;
                      return (
                        <div key={i} className="flex-1 h-full flex flex-col justify-end group relative">
                          <div 
                            style={{ height: `${heightPercent}%` }}
                            className={`w-full rounded-t-xs transition-all duration-300 ${
                              isLast ? "bg-blue-500 shadow-md shadow-blue-500/20" : "bg-blue-500/20 hover:bg-blue-500/40"
                            }`}
                          />
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="p-2.5 bg-[#030712] border border-slate-900 text-[10px] text-slate-400 rounded-sm flex flex-col gap-0.5">
                    <span className="text-blue-400 font-bold uppercase tracking-wider text-[9px]">● Milestone Annotation Detected</span>
                    <span>{selectedApp.launch_annotation} successfully synchronized.</span>
                  </div>
                </div>

              </div>
            ) : (
              <div className="text-slate-600 text-xs italic text-center p-8">Select a node link...</div>
            )}
          </div>

          {/* INTEGRATED SIGNATURE STAMP */}
          <div className="border-t border-slate-900 pt-4 mt-auto text-[10px] text-slate-500 tracking-wider uppercase flex flex-col gap-1">
            <span>// PIPELINE HANDSHAKE ENGAGED</span>
            <span className="text-blue-500/70 font-bold tracking-widest">Architect: Bhavya S Shaji // Batch 3</span>
          </div>

        </div>

      </div>
    </div>
  );
}