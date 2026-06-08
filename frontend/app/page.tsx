"use client";

import React, { useState } from 'react';

export default function Page() {
  // --- STATE MATRIX ---
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [primaryApp, setPrimaryApp] = useState("Terminal Pay Wallet");
  const [comparisonApp, setComparisonApp] = useState("Apex Wallet");

  const categories = ["ALL", "FINANCE", "LOGISTICS", "STORES", "UTILITIES"];
  
  const appDatabase = [
    { rank: "#1", name: "Terminal Pay Wallet", category: "FINANCE", share: "42.1%", volatility: "STABLE", volColor: "text-emerald-400", velocity: "+5.8k reviews/wk", score: "9.8/10" },
    { rank: "#2", name: "FreightFlow Matrix", category: "LOGISTICS", share: "28.4%", volatility: "BULLISH", volColor: "text-emerald-400", velocity: "+4.2k reviews/wk", score: "9.1/10" },
    { rank: "#3", name: "Apex Wallet", category: "FINANCE", share: "22.0%", volatility: "STABLE", volColor: "text-emerald-400", velocity: "+3.1k reviews/wk", score: "8.7/10" },
    { rank: "#4", name: "CartVelocity Engine", category: "STORES", share: "19.7%", volatility: "BEARISH", volColor: "text-rose-500", velocity: "-1.5k reviews/wk", score: "7.4/10" },
    { rank: "#5", name: "OmniCore Utility", category: "UTILITIES", share: "9.8%", volatility: "STABLE", volColor: "text-emerald-400", velocity: "+0.9k reviews/wk", score: "6.2/10" },
  ];

  const launchAnnotations = [
    { date: "June 02, 2026", event: "Stripe Relational Handshake Integration", impact: "Finance segment volume peak recorded." },
    { date: "May 24, 2026", event: "Global Logistics API Migration", impact: "FreightFlow data indexing velocity surged." },
    { date: "May 12, 2026", event: "v2.4.0 Core Protocol Patch", impact: "Friction metrics dropped by 12% across nodes." },
  ];

  return (
    <div className="w-full min-h-screen bg-[#050811] text-slate-300 font-mono flex overflow-y-auto">
      
      {/* ======================================================== */}
      {/* 📐 LEFT SIDEBAR: 30% SPLIT VIEW CONSOLE MODULE           */}
      {/* ======================================================== */}
      <aside className="w-[30%] min-w-[320px] max-w-[400px] border-r border-slate-900 bg-[#070b18] p-6 flex flex-col gap-6 h-screen sticky top-0 overflow-y-auto">
        
        {/* PLATFORM HEADER */}
        <div>
          <div className="text-[10px] text-blue-500 font-bold tracking-widest uppercase">// SYSTEM MAIN ENGINE</div>
          <h1 className="text-lg font-black tracking-wider text-white uppercase mt-1">App Store Tracker</h1>
          
          <div className="text-[10px] font-bold bg-slate-900/60 border border-slate-900 px-3 py-1.5 rounded-md text-emerald-400 flex items-center gap-2 mt-4 w-full justify-between">
            STATUS: ACTIVE <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

        {/* INSIGHT CONTROL PANEL: CATEGORY FILTERS */}
        <div className="w-full bg-[#090d1a]/60 border border-slate-900 rounded-lg p-4 shadow-xl">
          <div className="text-[10px] text-blue-500 font-bold tracking-widest uppercase mb-3">// CATEGORY FILTERS</div>
          <div className="flex flex-col gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`w-full text-left px-4 py-2 text-xs font-bold tracking-widest rounded border transition-all duration-150 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-950/40 text-blue-400 border-blue-500'
                    : 'bg-[#0b1122] text-slate-500 border-slate-900 hover:text-slate-300'
                }`}
              >
                {cat === "ALL" ? "▫️ SHOW ALL NODES" : `▪️ ${cat}`}
              </button>
            ))}
          </div>
        </div>

        {/* INSIGHT TILE: SELECTED APP ANALYSIS ACCELERATION */}
        <div className="w-full bg-[#090d1a]/60 border border-slate-900 rounded-lg p-4 shadow-xl">
          <div className="text-[10px] text-blue-500 font-bold tracking-widest uppercase mb-3">// INSTANT CORE METRIC</div>
          <div className="p-3 bg-[#050811] border border-slate-900 rounded space-y-2">
            <div className="text-[10px] text-slate-500 uppercase">Review Velocity Rate:</div>
            <div className="text-sm font-black text-blue-400 tracking-wider">
              {appDatabase.find(a => a.name === primaryApp)?.velocity}
            </div>
            <div className="text-[9px] text-slate-600 font-sans">Calculated for {primaryApp}.</div>
          </div>
        </div>

        <div className="text-center text-[9px] text-slate-700 uppercase mt-auto">
          // 30% SIDEBAR BLOCK ENDS //
        </div>
      </aside>

      {/* ======================================================== */}
      {/* 📐 MAIN CORE INTEL: 70% PANEL VIEW EXTENSION SPACE       */}
      {/* ======================================================== */}
      <main className="w-[70%] flex-1 p-6 md:p-8 flex flex-col gap-8 overflow-y-visible pb-32">
        
        {/* APPLICATION MAIN METRICS NODE TABLE */}
        <section className="w-full bg-[#090d1a]/60 border border-slate-900 rounded-lg p-6 shadow-xl">
          <div className="text-[11px] text-blue-500 font-bold tracking-widest uppercase mb-4">// INTEL OUTPUT DATALINK MATRIX (70%)</div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs tracking-wider">
              <thead>
                <tr className="border-b border-slate-900 text-slate-500 font-bold uppercase">
                  <th className="pb-3 w-20">Rank</th>
                  <th className="pb-3">Application Node</th>
                  <th className="pb-3">Category Group</th>
                  <th className="pb-3">Market Share</th>
                  <th className="pb-3 text-right">Market Volatility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900/40 font-bold">
                {appDatabase
                  .filter(item => activeCategory === "ALL" || item.category === activeCategory)
                  .map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/10 transition-colors">
                      <td className="py-4 text-blue-500 font-mono">{row.rank}</td>
                      <td className="py-4 text-white font-sans">{row.name}</td>
                      <td className="py-4 text-slate-400 font-mono">{row.category}</td>
                      <td className="py-4 text-slate-300">{row.share}</td>
                      <td className={`py-4 text-right font-mono uppercase ${row.volColor}`}>{row.volatility}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FEATURE: COMPARE APPS MODULE */}
        <section className="w-full bg-[#090d1a]/60 border border-slate-900 rounded-lg p-6 shadow-xl">
          <div className="text-[11px] text-blue-500 font-bold tracking-widest uppercase mb-4">// COMPARE APPLICATION MODULES</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] text-slate-500 font-bold uppercase mb-2">Primary App Focus</label>
              <select 
                value={primaryApp} 
                onChange={(e) => setPrimaryApp(e.target.value)}
                className="w-full bg-[#050811] border border-slate-900 rounded p-3 text-xs text-white font-bold outline-none cursor-pointer"
              >
                {appDatabase.map((app) => <option key={app.name} value={app.name}>{app.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[10px] text-slate-500 font-bold uppercase mb-2">Compare Target App</label>
              <select 
                value={comparisonApp} 
                onChange={(e) => setComparisonApp(e.target.value)}
                className="w-full bg-[#050811] border border-slate-900 rounded p-3 text-xs text-blue-400 font-bold outline-none cursor-pointer"
              >
                {appDatabase.map((app) => <option key={app.name} value={app.name}>{app.name}</option>)}
              </select>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#050811] border border-slate-900 rounded grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold">
            <div className="space-y-1">
              <div className="text-slate-500">PRIMARY TRACKING SPECS:</div>
              <div className="text-white font-sans">{primaryApp} (Score: {appDatabase.find(a => a.name === primaryApp)?.score})</div>
              <div className="text-slate-400 text-[11px]">Vol Weight: {appDatabase.find(a => a.name === primaryApp)?.share}</div>
            </div>
            <div className="space-y-1 md:text-right border-t md:border-t-0 md:border-l border-slate-900 pt-3 md:pt-0 md:pl-4">
              <div className="text-slate-500">COMPARATIVE TARGET SPECS:</div>
              <div className="text-blue-400 font-sans">{comparisonApp} (Score: {appDatabase.find(a => a.name === comparisonApp)?.score})</div>
              <div className="text-slate-400 text-[11px]">Vol Weight: {appDatabase.find(a => a.name === comparisonApp)?.share}</div>
            </div>
          </div>
        </section>

        {/* FEATURE: LAUNCH EVENT ANNOTATIONS */}
        <section className="w-full bg-[#090d1a]/60 border border-slate-900 rounded-lg p-6 shadow-xl">
          <div className="text-[11px] text-blue-500 font-bold tracking-widest uppercase mb-4">// REQUIRED FEATURE: LAUNCH EVENT ANNOTATIONS</div>
          <div className="space-y-4">
            {launchAnnotations.map((item, idx) => (
              <div key={idx} className="border-l-2 border-blue-500 bg-[#050811] p-4 rounded-r">
                <div className="text-xs font-black text-white flex items-center gap-2">
                  <span className="text-blue-400">{item.date}</span>
                  <span className="text-slate-700">—</span>
                  <span className="font-sans">{item.event}</span>
                </div>
                <p className="text-xs text-slate-400 mt-2 font-sans font-normal leading-relaxed">{item.impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURE: 30-DAY RANK TREND CHARTS */}
        <section className="w-full bg-[#090d1a]/60 border border-slate-900 rounded-lg p-6 shadow-xl">
          <div className="text-[11px] text-blue-500 font-bold tracking-widest uppercase mb-4">// REQUIRED FEATURE: 30-DAY RANK TREND CHARTS</div>
          <h3 className="text-sm font-black tracking-wider text-white uppercase mb-4">Historical Waveform Array Matrix</h3>
          
          <div className="w-full h-32 flex items-end justify-between gap-2 border-b border-slate-900 pb-2 bg-[#050811] p-4 rounded border border-slate-950">
            {[25, 50, 35, 70, 55, 80, 95, 85, 65, 90, 105, 75, 100, 115].map((val, idx) => (
              <div key={idx} className="flex-1 bg-blue-950/20 border border-blue-900/30 rounded-t-sm h-full flex flex-col justify-end group relative">
                <div 
                  style={{ height: `${(val / 115) * 100}%` }} 
                  className="w-full bg-blue-600 group-hover:bg-cyan-400 shadow-md shadow-blue-500/10 transition-all duration-200"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-3 text-[10px] text-slate-600 font-bold">
            <span>METRIC DAY 01</span>
            <span>METRIC DAY 15</span>
            <span>METRIC DAY 30 (LIVE STREAM)</span>
          </div>
        </section>

        <footer className="text-center text-[10px] text-slate-700 uppercase tracking-widest pt-4">
          // STREAM ENDS // WORKSPACE RENDERING COMPLETED //
        </footer>
      </main>

    </div>
  );
}