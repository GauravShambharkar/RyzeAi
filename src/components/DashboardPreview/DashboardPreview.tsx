"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
  Maximize2,
  Search,
  Activity,
  Plus,
  RefreshCw,
  ArrowLeft,
  ArrowRight,
  Globe,
  SearchCode,
  LineChart,
  Link2,
  Send,
  Terminal
} from "lucide-react";

type TabType = "dashboard" | "seo" | "monitoring";

export const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");
  const [isSimulated, setIsSimulated] = useState(true);

  // Auto-switch tabs to simulate "Ryze AI" running
  useEffect(() => {
    if (!isSimulated) return;
    
    const timer = setTimeout(() => {
      // Logic for the automated walkthrough
    }, 25000); // 25s cycle matching CSS
    
    return () => clearTimeout(timer);
  }, [isSimulated]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-6xl mx-auto group"
      onMouseDown={() => setIsSimulated(false)} // Stop simulation on user click
    >
      <style>{`
        @keyframes dashScroll {
          0%, 5% { transform: translateY(0); }
          45%, 55% { transform: translateY(calc(-100% + 500px)); }
          95%, 100% { transform: translateY(0); }
        }
        @keyframes cursorCycle {
          0% { opacity: 0; left: 50%; top: 50%; }
          5% { opacity: 1; left: 50%; top: 50%; }
          15% { left: 30px; top: 180px; } /* Hover over chat icon */
          18% { scale: 0.8; } /* Click effect */
          20% { scale: 1; }
          40% { left: 400px; top: 300px; } /* Move to approve button */
          45% { scale: 0.8; }
          48% { scale: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes monitoringPop {
           0%, 18% { opacity: 0; transform: scale(0.95) translateY(10px); pointer-events: none; }
           22%, 95% { opacity: 1; transform: scale(1) translateY(0); pointer-events: auto; }
           100% { opacity: 0; transform: scale(0.95) translateY(10px); pointer-events: none; }
        }
      `}</style>

      {/* Browser-like Container */}
      <div className="relative rounded-2xl overflow-hidden bg-[#f8f9fb] border border-border shadow-2xl flex flex-col h-[700px]">
        
        {/* Browser Top Bar */}
        <div className="bg-[#1a1a1a] p-2 flex flex-col gap-2 shrink-0">
          <div className="flex items-center gap-4">
            <div className="flex gap-2 pl-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>

            <div className="flex items-center">
              <BrowserTab 
                label="Campaign Dashboard" 
                active={activeTab === "dashboard"} 
                onClick={() => setActiveTab("dashboard")} 
              />
              <BrowserTab 
                label="SEO Optimizer" 
                active={activeTab === "seo"} 
                onClick={() => setActiveTab("seo")} 
              />
              <BrowserTab 
                label="Ryze Monitoring" 
                active={activeTab === "monitoring"} 
                onClick={() => setActiveTab("monitoring")} 
              />
              <button className="p-1 text-neutral-500 hover:text-white transition-colors ml-1">
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 px-2">
            <div className="flex items-center gap-3 text-neutral-500">
              <ArrowLeft size={16} className="cursor-pointer hover:text-white" />
              <ArrowRight size={16} className="cursor-pointer hover:text-white" />
              <RefreshCw size={14} className="cursor-pointer hover:text-white" />
            </div>
            <div className="flex-1 bg-[#2b2b2b] rounded-md px-3 py-1 flex items-center gap-2 border border-white/5">
              <Globe size={12} className="text-neutral-500" />
              <span className="text-[10px] text-neutral-400 font-mono">ryze.ai/{activeTab}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-[60px] bg-white border-r border-neutral-100 flex flex-col items-center py-4 shrink-0 gap-4 z-40">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xs mb-2 cursor-pointer" onClick={() => setActiveTab('dashboard')}>R</div>
            <SidebarIcon icon={<LayoutGrid size={18} />} active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
            <SidebarIcon icon={<SearchCode size={18} />} active={activeTab === 'seo'} onClick={() => setActiveTab('seo')} />
            <SidebarIcon icon={<MessageSquare size={18} />} active={activeTab === 'monitoring'} onClick={() => setActiveTab('monitoring')} />
            <SidebarIcon icon={<Terminal size={18} />} />
            <div className="mt-auto">
              <SidebarIcon icon={<Settings size={18} />} />
            </div>
          </div>

          {/* Main Content Area (renders components instead of side modals) */}
          <div className="flex-1 relative overflow-hidden flex flex-col bg-[#f8f9fb]">
             <AnimatePresence mode="wait">
                {activeTab === "dashboard" && (
                   <motion.div key="dash" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col p-6 space-y-6">
                      <MetricRow />
                      <div className="flex-1 overflow-hidden relative">
                         <div style={{ animation: "dashScroll 25s ease-in-out infinite" }} className="space-y-6">
                            <AdTable />
                            <MetricCardGroup />
                            <div className="h-20" />
                         </div>
                      </div>
                   </motion.div>
                )}
                {activeTab === "seo" && (
                   <motion.div key="seo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 p-8 space-y-8 overflow-y-auto custom-scrollbar">
                      <div className="flex items-center justify-between">
                         <h2 className="text-xl font-bold text-slate-800">SEO Strategy & Execution</h2>
                         <button className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-lg text-xs font-bold border border-emerald-100">Scanning...</button>
                      </div>
                      <div className="grid grid-cols-3 gap-6">
                         <HealthCard label="Technical Health" score={94} />
                         <HealthCard label="Content Score" score={88} />
                         <HealthCard label="Backlink Health" score={72} />
                      </div>
                      <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
                         <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Organic Keyword Positions</h3>
                         <div className="space-y-4">
                            <KeywordRow kw="AI Marketing Automation" rank={1} volume="24.4K" diff="High" />
                            <KeywordRow kw="Autonomous Website Builder" rank={1} volume="8.2K" diff="Med" />
                            <KeywordRow kw="Best Ad AI Tools" rank={3} volume="15.8K" diff="High" />
                            <KeywordRow kw="SaaS SEO Framework" rank={5} volume="2.1K" diff="Low" />
                         </div>
                      </div>
                   </motion.div>
                )}
                {activeTab === "monitoring" && (
                   <motion.div key="monitoring" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="flex-1 flex flex-col">
                      <div className="p-6 border-b border-neutral-100 bg-white flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">R</div>
                            <div>
                               <h2 className="text-sm font-bold text-slate-900">Ryze Autonomous Monitoring</h2>
                               <p className="text-[10px] text-emerald-500 font-bold uppercase">7 Agents Online & Active</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-4">
                            <div className="flex -space-x-2">
                               {[1, 2, 3, 4].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />)}
                            </div>
                            <button className="text-xs font-bold text-slate-400 hover:text-slate-600">Invite Team</button>
                         </div>
                      </div>

                      <div className="flex-1 flex overflow-hidden">
                         <div className="flex-1 p-6 space-y-6 overflow-y-auto custom-scrollbar">
                             <div className="grid grid-cols-2 gap-4">
                                <ActivityBox title="Bid Adjustments" val="124" trend="+12" />
                                <ActivityBox title="Budget Saved" val="$1,240" trend="-$400" up={false} />
                             </div>
                             
                             <div className="space-y-4">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Operations</div>
                                <OperationRow label="Pruning wasted placements" platform="Google" status="complete" />
                                <OperationRow label="Optimizing ad schedule" platform="Meta" status="active" />
                                <OperationRow label="Updating H1 tags" platform="SEO" status="pending" />
                             </div>
                         </div>
                         
                         {/* Chat Window inside the Component (not a side modal) */}
                         <div className="w-[340px] bg-slate-50 border-l border-neutral-100 flex flex-col">
                             <div className="p-4 border-b border-neutral-100 font-bold text-xs text-slate-400 uppercase">Agent Interaction</div>
                             <div className="flex-1 p-4 space-y-4 overflow-y-auto scrollbar-hide">
                                <div className="bg-white p-4 rounded-2xl rounded-tr-none shadow-sm border border-neutral-100 text-[11px] text-slate-600 leading-relaxed max-w-[90%] self-end ml-auto">
                                   Can you optimize for more signups?
                                </div>
                                <div className="flex gap-2">
                                   <div className="w-6 h-6 rounded-full bg-black shrink-0 flex items-center justify-center text-white text-[10px] font-bold">R</div>
                                   <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-neutral-100 text-[11px] text-slate-600 leading-relaxed">
                                      Signups prioritized. I'm shifting 15% of budget to 'Lead Gen' creatives. <span className="font-bold text-emerald-500">Est +8% boost.</span>
                                   </div>
                                </div>
                             </div>
                             <div className="p-4 bg-white border-t border-neutral-100">
                                <div className="relative">
                                   <input type="text" placeholder="Type a command..." className="w-full bg-slate-50 border border-neutral-100 rounded-xl px-4 py-2.5 text-xs font-body focus:outline-none" />
                                   <Send size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300" />
                                </div>
                             </div>
                         </div>
                      </div>
                   </motion.div>
                )}
             </AnimatePresence>
          </div>
        </div>

        {/* Automated Simulation Overlay (MODAL-LIKE POPUP triggered by cursor) */}
        {isSimulated && (
           <div 
             className="absolute inset-0 pointer-events-none z-[100]"
           >
              {/* Simulated Cursor */}
              <div 
                className="absolute z-[110]"
                style={{ animation: "cursorCycle 25s ease-in-out infinite" }}
              >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1.5">
                   <path d="M5 3l14 8-6 2-4 6z" />
                 </svg>
              </div>

              {/* Pop-up Modal appearing during cursor interaction */}
              <div 
                className="absolute right-6 bottom-6 w-[360px]"
                style={{ animation: "monitoringPop 25s ease-in-out infinite" }}
              >
                 <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-neutral-200 p-4 flex gap-4 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
                       <Activity className="text-white" size={18} />
                    </div>
                    <div className="flex-1">
                       <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Agent Notification</span>
                          <X size={12} className="text-slate-300" />
                       </div>
                       <p className="text-xs font-bold text-slate-800 leading-snug">
                          Ryze AI just saved you <span className="text-emerald-600">$420</span> by pausing underperforming ads.
                       </p>
                       <div className="flex gap-2 mt-3">
                          <button className="bg-black text-white px-3 py-1.5 rounded text-[10px] font-bold">View Change</button>
                          <button className="bg-slate-100 text-slate-500 px-3 py-1.5 rounded text-[10px] font-bold">Dismiss</button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        )}
      </div>
    </motion.div>
  );
};

const BrowserTab = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <div 
    onClick={onClick}
    className={`relative px-6 py-2 text-[10px] font-normal cursor-pointer transition-all flex items-center gap-2 group/tab ${
      active 
        ? "bg-[#2b2b2b] text-white rounded-t-lg" 
        : "text-neutral-500 hover:text-neutral-300"
    }`}
  >
    {label}
    <X size={10} className={`opacity-0 group-hover/tab:opacity-100 hover:text-white transition-opacity ${active ? "opacity-100" : ""}`} />
  </div>
);

const SidebarIcon = ({ icon, active = false, onClick }: { icon: React.ReactNode; active?: boolean; onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className={`p-2 rounded-lg cursor-pointer transition-all ${active ? "bg-slate-100 text-black shadow-inner" : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"}`}
  >
    {icon}
  </div>
);

// Helpers
const MetricRow = () => (
  <div className="grid grid-cols-3 gap-4">
    <MetricCard labelL="Cost" labelR="ROAS" valL="$12,450" valR="4.2x" trend="+12%" up />
    <MetricCard labelL="Conversions" labelR="Conv. Rate" valL="508" valR="3.6%" trend="+15%" up />
    <MetricCard labelL="Clicks" labelR="CTR" valL="14,200" valR="3.8%" trend="-2%" />
  </div>
);

const MetricCard = ({ labelL, labelR, valL, valR, trend, up = false }: any) => (
  <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm">
    <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">
      <span>{labelL}</span>
      <span>{labelR}</span>
    </div>
    <div className="flex justify-between items-end">
      <div className="flex items-baseline gap-2">
        <span className="text-xl font-bold">{valL}</span>
        <span className={`text-[10px] font-bold ${up ? "text-emerald-500" : "text-rose-500"}`}>{trend}</span>
      </div>
      <span className="text-xl font-bold">{valR}</span>
    </div>
  </div>
);

const AdTable = () => (
   <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
      <div className="grid grid-cols-4 px-4 py-2 bg-slate-50/50 border-b border-neutral-100 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
         <span>Channel</span>
         <span>ROAS</span>
         <span>Cost</span>
         <span>Score</span>
      </div>
      <TableRow name="Google Ads" roas="4.8x" spend="$8.5K" score={92} />
      <TableRow name="Meta Ads" roas="3.1x" spend="$4.2K" score={68} />
      <TableRow name="TikTok Ads" roas="5.2x" spend="$2.1K" score={96} />
   </div>
);

const MetricCardGroup = () => (
  <div className="grid grid-cols-2 gap-4">
    <div className="bg-white border border-neutral-200 rounded-xl p-4 h-32 flex flex-col justify-between">
       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Scoring (avg)</span>
       <div className="text-4xl font-bold font-display">84/100</div>
    </div>
    <div className="bg-white border border-neutral-200 rounded-xl p-4 h-32 flex flex-col justify-between">
       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Optimization Events</span>
       <div className="text-4xl font-bold font-display">1.2K+</div>
    </div>
  </div>
);

const TableRow = ({ name, roas, spend, score }: any) => (
  <div className="grid grid-cols-4 px-4 py-3 border-b border-neutral-50 last:border-0 items-center text-xs">
    <span className="font-bold text-slate-800">{name}</span>
    <span className="text-emerald-600 font-bold">{roas}</span>
    <span className="text-slate-500">{spend}</span>
    <div className="w-full bg-slate-100 h-1 rounded-full">
       <div className="bg-black h-full rounded-full" style={{ width: `${score}%` }} />
    </div>
  </div>
);

const HealthCard = ({ label, score }: any) => (
  <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
     <div className="text-[10px] font-bold text-slate-400 uppercase mb-3">{label}</div>
     <div className="text-3xl font-bold mb-4">{score}%</div>
     <div className="h-1 bg-slate-100 rounded-full">
        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${score}%` }} />
     </div>
  </div>
);

const KeywordRow = ({ kw, rank, volume, diff }: any) => (
  <div className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
     <span className="text-xs font-bold text-slate-700">{kw}</span>
     <div className="flex gap-4 text-right">
        <div className="w-16"><span className="text-[10px] text-slate-400 block pb-1">RANK</span> <span className="text-xs font-bold text-emerald-500">#{rank}</span></div>
        <div className="w-16"><span className="text-[10px] text-slate-400 block pb-1">VOL</span> <span className="text-xs font-bold text-slate-800">{volume}</span></div>
        <div className="w-16"><span className="text-[10px] text-slate-400 block pb-1">DIFF</span> <span className={`text-[10px] font-bold ${diff === 'High' ? 'text-rose-400' : 'text-emerald-500'}`}>{diff}</span></div>
     </div>
  </div>
);

const ActivityBox = ({ title, val, trend, up = true }: any) => (
  <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm">
     <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">{title}</div>
     <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">{val}</span>
        <span className={`text-[10px] font-bold ${up ? 'text-emerald-500' : 'text-rose-500'}`}>{trend}</span>
     </div>
  </div>
);

const OperationRow = ({ label, platform, status }: any) => (
  <div className="flex items-center justify-between p-3 bg-white border border-neutral-100 rounded-lg shadow-sm">
     <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${status === 'active' ? 'bg-emerald-500 animate-pulse' : status === 'pending' ? 'bg-amber-400' : 'bg-slate-200'}`} />
        <span className="text-xs font-medium text-slate-700">{label}</span>
     </div>
     <div className="flex items-center gap-3">
        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-bold">{platform}</span>
        {status === 'complete' && <CheckCircle2 size={14} className="text-emerald-500" />}
     </div>
  </div>
);
