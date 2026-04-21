"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  LayoutGrid, 
  Star, 
  AlertCircle, 
  MessageSquare, 
  FileText, 
  Image as ImageIcon, 
  Settings,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  X
} from "lucide-react";

export const DashboardPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-6xl mx-auto"
    >
      <style>{`
        @keyframes dashScroll {
          0%, 5% { transform: translateY(0); }
          45%, 55% { transform: translateY(calc(-100% + 500px)); }
          95%, 100% { transform: translateY(0); }
        }
        @keyframes chatPhase {
          0%, 40% { opacity: 0; transform: translateY(20px); pointer-events: none; }
          45%, 95% { opacity: 1; transform: translateY(0); pointer-events: auto; }
          100% { opacity: 0; transform: translateY(20px); pointer-events: none; }
        }
        @keyframes cursorAnim {
          0% { opacity: 0; top: 50%; left: 50%; }
          30% { opacity: 1; top: 50%; left: 50%; }
          40% { opacity: 1; top: 85%; left: 85%; }
          45% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>

      <div className="relative rounded-2xl overflow-hidden bg-[#f8f9fb] border border-border shadow-2xl flex h-[550px] group">
        
        {/* 1. Sidebar */}
        <div className="w-[60px] bg-white border-r border-neutral-100 flex flex-col items-center py-4 shrink-0 gap-4">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xs mb-2">R</div>
          <SidebarIcon icon={<LayoutGrid size={18} />} active />
          <SidebarIcon icon={<Star size={18} />} />
          <SidebarIcon icon={<AlertCircle size={18} />} />
          <SidebarIcon icon={<MessageSquare size={18} />} />
          <SidebarIcon icon={<FileText size={18} />} />
          <SidebarIcon icon={<ImageIcon size={18} />} />
          <div className="mt-auto">
            <SidebarIcon icon={<Settings size={18} />} />
          </div>
        </div>

        {/* 2. Main Dashboard Content (Animated Scroll) */}
        <div className="flex-1 relative overflow-hidden">
          <div 
            className="p-6 space-y-6"
            style={{ animation: "dashScroll 25s ease-in-out infinite" }}
          >
            {/* Top Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <MetricCard labelL="Cost" labelR="ROAS" valL="$12,450" valR="4.2x" trend="+12%" up />
              <MetricCard labelL="Conversions" labelR="Conv. Rate" valL="508" valR="3.6%" trend="+15%" up />
              <MetricCard labelL="Clicks" labelR="CTR" valL="14,200" valR="3.8%" trend="-2%" />
            </div>

            {/* Heatmap Placeholder */}
            <div className="bg-white border border-neutral-200 rounded-xl p-4">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Performance by Day & Hour</h3>
              <div className="grid grid-cols-24 gap-1">
                {Array.from({ length: 24 * 7 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="h-3 rounded-sm" 
                    style={{ backgroundColor: `rgba(34, 197, 94, ${Math.random() * 0.8})` }}
                  />
                ))}
              </div>
            </div>

            {/* Ad Grid */}
            <div className="bg-white border border-neutral-200 rounded-xl p-4">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Top Performing Creatives</h3>
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-slate-100 rounded-lg overflow-hidden relative border border-neutral-100">
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded text-[10px] font-bold text-emerald-500">6.8x</div>
                    <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black/20 to-transparent">
                      <div className="text-[9px] text-white">Google Ads</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Table */}
            <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
               <div className="grid grid-cols-4 px-4 py-2 border-b border-neutral-100 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>Channel</span>
                  <span>Spend</span>
                  <span>ROAS</span>
                  <span>Score</span>
               </div>
               <TableRow name="Google Ads" spend="$12.5K" roas="4.2x" score={82} />
               <TableRow name="Meta Ads" spend="$8.3K" roas="3.1x" score={45} />
               <TableRow name="TikTok Ads" spend="$4.2K" roas="3.5x" score={91} />
            </div>

            {/* Detailed Stats */}
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white border border-neutral-200 rounded-xl p-4">
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Conversion Funnel</h3>
                  <div className="space-y-3">
                    <FunnelStep label="Impressions" val="842K" pct={100} />
                    <FunnelStep label="Clicks" val="14K" pct={65} />
                    <FunnelStep label="Leads" val="1.8K" pct={40} />
                    <FunnelStep label="Conversions" val="508" pct={20} />
                  </div>
               </div>
               <div className="bg-white border border-neutral-200 rounded-xl p-4">
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Wasted Spend</h3>
                  <div className="space-y-3">
                    <FunnelStep label="Placements" val="$2.8K" pct={90} color="bg-rose-400" />
                    <FunnelStep label="Overlap" val="$1.6K" pct={55} color="bg-rose-400" />
                    <FunnelStep label="Keywords" val="$1.2K" pct={30} color="bg-rose-400" />
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* 3. Chat Overlay (Ryze Agent) */}
        <div 
          className="absolute bottom-6 right-6 w-[380px] z-30 pointer-events-none"
          style={{ animation: "chatPhase 25s ease-in-out infinite" }}
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 pointer-events-auto flex flex-col max-h-[450px]">
            {/* Chat Header */}
            <div className="px-4 py-3 border-b border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold">Ryze Agent</span>
              </div>
              <X size={14} className="text-slate-400 cursor-pointer" />
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-4 overflow-y-auto custom-scrollbar">
              <div className="flex justify-end">
                <div className="bg-slate-100 text-slate-800 px-4 py-2 rounded-2xl rounded-tr-none text-xs leading-relaxed max-w-[80%] shadow-sm">
                  Launch a campaign to get more bookings this month
                </div>
              </div>

              <div className="flex gap-2.5">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-[10px] font-bold shrink-0">R</div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-slate-400">Ryze agent</div>
                  <div className="bg-white border border-neutral-100 p-4 rounded-2xl rounded-tl-none shadow-sm space-y-3">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Got it. I've built a campaign to maximize bookings in Scottsdale this month.
                    </p>
                    
                    <div className="bg-slate-50 rounded-lg p-3 border border-neutral-100">
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Campaign Preview</div>
                      <div className="flex justify-between items-end">
                         <div>
                            <div className="text-sm font-bold">$85/day</div>
                            <div className="text-[10px] text-slate-400">Daily budget</div>
                         </div>
                         <div className="text-right">
                            <div className="text-sm font-bold">42-58</div>
                            <div className="text-[10px] text-slate-400">Est. bookings</div>
                         </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-black text-white py-2 rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors">Launch</button>
                      <button className="px-3 bg-slate-100 text-slate-600 py-2 rounded-lg text-xs font-semibold hover:bg-slate-200 transition-colors">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-3 border-t border-neutral-100">
              <div className="bg-slate-50 border border-neutral-200 rounded-lg px-3 py-2 text-xs text-slate-400">
                Ask Ryze anything...
              </div>
            </div>
          </div>
        </div>

        {/* 4. Simulated Cursor */}
        <div 
          className="absolute z-50 pointer-events-none"
          style={{ animation: "cursorAnim 25s ease-in-out infinite" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1">
            <path d="M5 3l14 8-6 2-4 6z" />
          </svg>
        </div>

      </div>
    </motion.div>
  );
};

const SidebarIcon = ({ icon, active = false }: { icon: React.ReactNode; active?: boolean }) => (
  <div className={`p-2 rounded-lg cursor-pointer transition-all ${active ? "bg-slate-100 text-black" : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"}`}>
    {icon}
  </div>
);

const MetricCard = ({ labelL, labelR, valL, valR, trend, up = false }: any) => (
  <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm">
    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
      <span>{labelL}</span>
      <span>{labelR}</span>
    </div>
    <div className="flex justify-between items-end">
      <div className="flex items-baseline gap-2">
        <span className="text-lg font-bold text-slate-900">{valL}</span>
        <span className={`text-[10px] font-bold ${up ? "text-emerald-500" : "text-slate-400"}`}>{trend}</span>
      </div>
      <span className="text-lg font-bold text-slate-900">{valR}</span>
    </div>
  </div>
);

const TableRow = ({ name, spend, roas, score }: any) => (
  <div className="grid grid-cols-4 px-4 py-2.5 border-b border-neutral-50 last:border-0 items-center text-xs">
    <span className="font-semibold text-slate-700">{name}</span>
    <span className="text-slate-500">{spend}</span>
    <span className="text-slate-600 font-medium">{roas}</span>
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${score > 70 ? "bg-emerald-400" : "bg-amber-400"}`} style={{ width: `${score}%` }} />
      </div>
      <span className="text-[10px] text-slate-400 w-6">{score}%</span>
    </div>
  </div>
);

const FunnelStep = ({ label, val, pct, color = "bg-slate-400" }: any) => (
  <div className="space-y-1">
    <div className="flex justify-between text-[10px]">
      <span className="text-slate-500">{label}</span>
      <span className="font-bold text-slate-700">{val}</span>
    </div>
    <div className="h-1.5 bg-slate-50 rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
    </div>
  </div>
);
