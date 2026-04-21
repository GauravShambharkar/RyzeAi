"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid,
  MessageSquare,
  Settings,
  CheckCircle2,
  X,
  Activity,
  Plus,
  RefreshCw,
  ArrowLeft,
  ArrowRight,
  Globe,
  SearchCode,
  Send,
  Terminal,
  TrendingUp,
  TrendingDown,
  Sparkles,
  PauseCircle,
  Target,
  Zap,
} from "lucide-react";

type TabType = "dashboard" | "seo" | "monitoring";

/* ─────────────────────────── Design tokens ───────────────────────────
   Typography scale (strict):
     label   → text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-500
     helper  → text-[11px] text-neutral-400
     body    → text-xs text-neutral-300
     title   → text-sm font-semibold text-white
     stat    → text-lg font-semibold text-white tracking-tight
     hero    → text-2xl font-semibold text-white tracking-tight
   Radii: rounded-md (chips) · rounded-xl (cards) · rounded-2xl (frame)
   Borders: border-neutral-800
   Surfaces: bg-neutral-950 (card) · bg-neutral-900 (canvas) · bg-black (chrome)
──────────────────────────────────────────────────────────────────── */

const LABEL = "text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-500";
const CARD = "bg-neutral-950 border border-neutral-800 rounded-xl";

export const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");
  const [isSimulated, setIsSimulated] = useState(true);

  useEffect(() => {
    if (!isSimulated) return;
    const timer = setTimeout(() => { }, 25000);
    return () => clearTimeout(timer);
  }, [isSimulated]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-6xl mx-auto"
      onMouseDown={() => setIsSimulated(false)}
    >
      <style>{`
        /* Human-like page scroll: flick → read → flick → read → return */
        @keyframes dashScroll {
          0%, 5%   { transform: translateY(0); }
          12%      { transform: translateY(-220px); }
          22%      { transform: translateY(-220px); }
          30%      { transform: translateY(-460px); }
          42%      { transform: translateY(-460px); }
          50%      { transform: translateY(-720px); }
          62%      { transform: translateY(-720px); }
          72%      { transform: translateY(-380px); }
          82%      { transform: translateY(-380px); }
          92%      { transform: translateY(0); }
          100%     { transform: translateY(0); }
        }
        /* Scrollbar thumb mirrors scroll progress */
        @keyframes dashThumb {
          0%, 5%   { transform: translateY(0); }
          12%      { transform: translateY(90px); }
          22%      { transform: translateY(90px); }
          30%      { transform: translateY(188px); }
          42%      { transform: translateY(188px); }
          50%      { transform: translateY(296px); }
          62%      { transform: translateY(296px); }
          72%      { transform: translateY(156px); }
          82%      { transform: translateY(156px); }
          92%      { transform: translateY(0); }
          100%     { transform: translateY(0); }
        }
        /* SEO auto-scroll: reveal domain → traffic → keywords → fixes → pages */
        @keyframes seoScroll {
          0%, 5%   { transform: translateY(0); }
          13%      { transform: translateY(-260px); }
          23%      { transform: translateY(-260px); }
          31%      { transform: translateY(-520px); }
          43%      { transform: translateY(-520px); }
          51%      { transform: translateY(-820px); }
          63%      { transform: translateY(-820px); }
          73%      { transform: translateY(-420px); }
          83%      { transform: translateY(-420px); }
          93%      { transform: translateY(0); }
          100%     { transform: translateY(0); }
        }
        @keyframes seoThumb {
          0%, 5%   { transform: translateY(0); }
          13%      { transform: translateY(105px); }
          23%      { transform: translateY(105px); }
          31%      { transform: translateY(210px); }
          43%      { transform: translateY(210px); }
          51%      { transform: translateY(330px); }
          63%      { transform: translateY(330px); }
          73%      { transform: translateY(170px); }
          83%      { transform: translateY(170px); }
          93%      { transform: translateY(0); }
          100%     { transform: translateY(0); }
        }
        /* Cursor grabs the scrollbar thumb, drags it, releases — then hides.
           Drag segments use the same cubic-bezier as dashScroll/dashThumb, so
           the cursor top exactly tracks the thumb as it moves. */
        @keyframes cursorCycle {
          /* Idle — hidden, staged at thumb top */
          0%, 3%   { opacity: 0; left: calc(100% - 28px); top: 210px; scale: 1; }

          /* Click 1 + drag down: thumb 0 → 90 (scroll 5% → 12%) */
          4%       { opacity: 1; left: calc(100% - 28px); top: 210px; scale: 1; }
          5%       { opacity: 1; left: calc(100% - 28px); top: 210px; scale: 0.8; }
          12%      { opacity: 1; left: calc(100% - 28px); top: 300px; scale: 0.8; }
          13%      { opacity: 1; left: calc(100% - 28px); top: 300px; scale: 1; }
          15%      { opacity: 0; left: calc(100% - 28px); top: 300px; scale: 1; }

          /* Reposition while hidden, then drag down: 90 → 188 (22% → 30%) */
          20%      { opacity: 0; left: calc(100% - 28px); top: 300px; scale: 1; }
          21%      { opacity: 1; left: calc(100% - 28px); top: 300px; scale: 1; }
          22%      { opacity: 1; left: calc(100% - 28px); top: 300px; scale: 0.8; }
          30%      { opacity: 1; left: calc(100% - 28px); top: 398px; scale: 0.8; }
          31%      { opacity: 1; left: calc(100% - 28px); top: 398px; scale: 1; }
          33%      { opacity: 0; left: calc(100% - 28px); top: 398px; scale: 1; }

          /* Drag down: 188 → 296 (42% → 50%) */
          40%      { opacity: 0; left: calc(100% - 28px); top: 398px; scale: 1; }
          41%      { opacity: 1; left: calc(100% - 28px); top: 398px; scale: 1; }
          42%      { opacity: 1; left: calc(100% - 28px); top: 398px; scale: 0.8; }
          50%      { opacity: 1; left: calc(100% - 28px); top: 506px; scale: 0.8; }
          51%      { opacity: 1; left: calc(100% - 28px); top: 506px; scale: 1; }
          53%      { opacity: 0; left: calc(100% - 28px); top: 506px; scale: 1; }

          /* Drag UP: 296 → 156 (62% → 72%) */
          60%      { opacity: 0; left: calc(100% - 28px); top: 506px; scale: 1; }
          61%      { opacity: 1; left: calc(100% - 28px); top: 506px; scale: 1; }
          62%      { opacity: 1; left: calc(100% - 28px); top: 506px; scale: 0.8; }
          72%      { opacity: 1; left: calc(100% - 28px); top: 366px; scale: 0.8; }
          73%      { opacity: 1; left: calc(100% - 28px); top: 366px; scale: 1; }
          75%      { opacity: 0; left: calc(100% - 28px); top: 366px; scale: 1; }

          /* Drag to top: 156 → 0 (82% → 92%) */
          80%      { opacity: 0; left: calc(100% - 28px); top: 366px; scale: 1; }
          81%      { opacity: 1; left: calc(100% - 28px); top: 366px; scale: 1; }
          82%      { opacity: 1; left: calc(100% - 28px); top: 366px; scale: 0.8; }
          92%      { opacity: 1; left: calc(100% - 28px); top: 210px; scale: 0.8; }
          93%      { opacity: 1; left: calc(100% - 28px); top: 210px; scale: 1; }
          95%, 100%{ opacity: 0; left: calc(100% - 28px); top: 210px; scale: 1; }
        }
        @keyframes monitoringPop {
          0%, 18% { opacity: 0; transform: scale(0.95) translateY(10px); pointer-events: none; }
          22%, 95% { opacity: 1; transform: scale(1) translateY(0); pointer-events: auto; }
          100% { opacity: 0; transform: scale(0.95) translateY(10px); pointer-events: none; }
        }
      `}</style>

      {/* Browser frame */}
      <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl shadow-black/60 flex flex-col h-[700px]">
        {/* Chrome */}
        <div className="bg-black p-2.5 flex flex-col gap-2.5 shrink-0">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5 pl-1">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>

            <div className="flex items-center gap-0.5">
              <BrowserTab
                label="Campaign Dashboard"
                active={activeTab === "dashboard"}
                onClick={() => setActiveTab("dashboard")}
              />
              <BrowserTab
                label="SEO Analytics"
                active={activeTab === "seo"}
                onClick={() => setActiveTab("seo")}
              />
              <BrowserTab
                label="Ryze Monitoring"
                active={activeTab === "monitoring"}
                onClick={() => setActiveTab("monitoring")}
              />
              <button className="p-1.5 text-neutral-400 hover:text-white transition-colors">
                <Plus size={14} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 px-1">
            <div className="flex items-center gap-3 text-neutral-400">
              <ArrowLeft size={14} className="cursor-pointer hover:text-white transition-colors" />
              <ArrowRight size={14} className="cursor-pointer hover:text-white transition-colors" />
              <RefreshCw size={12} className="cursor-pointer hover:text-white transition-colors" />
            </div>
            <div className="flex-1 bg-neutral-900 rounded-md px-3 py-0.5 flex items-center gap-2 border border-white/5">
              <Globe size={12} className="text-neutral-400" />
              <span className="text-[11px] text-neutral-500 font-mono">ryze.ai/{activeTab}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-[60px] bg-neutral-950 border-r border-neutral-800 flex flex-col items-center py-4 shrink-0 gap-2 z-40">
            <div
              onClick={() => setActiveTab("dashboard")}
              className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-xs font-semibold mb-2 cursor-pointer"
            >
              R
            </div>
            <SidebarIcon
              icon={<LayoutGrid size={16} />}
              active={activeTab === "dashboard"}
              onClick={() => setActiveTab("dashboard")}
            />
            <SidebarIcon
              icon={<SearchCode size={16} />}
              active={activeTab === "seo"}
              onClick={() => setActiveTab("seo")}
            />
            <SidebarIcon
              icon={<MessageSquare size={16} />}
              active={activeTab === "monitoring"}
              onClick={() => setActiveTab("monitoring")}
            />
            <SidebarIcon icon={<Terminal size={16} />} />
            <div className="mt-auto">
              <SidebarIcon icon={<Settings size={16} />} />
            </div>
          </div>

          {/* Main */}
          <div className="flex-1 relative overflow-hidden flex flex-col bg-neutral-900">
            <AnimatePresence mode="wait">
              {activeTab === "dashboard" && (
                <motion.div
                  key="dash"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col p-6 gap-5"
                >
                  <Header
                    title="Campaign Dashboard"
                    subtitle="Autonomous performance across all channels"
                  />
                  <MetricRow />
                  <div className="flex-1 overflow-hidden relative">
                    {/* Scrolling content */}
                    <div
                      style={{
                        animation: "dashScroll 24s cubic-bezier(0.45, 0, 0.25, 1) infinite",
                      }}
                      className="space-y-5 pr-3"
                    >
                      <AdTable />
                      <MetricCardGroup />
                      <ActivityFeed />
                      <AgentTimeline />
                      <div className="h-8" />
                    </div>

                    {/* Faux scrollbar track + thumb (mirrors scroll position) */}
                    <div className="absolute top-0 right-0 h-full w-1.5 bg-neutral-800/60 rounded-full pointer-events-none">
                      <div
                        style={{
                          animation: "dashThumb 24s cubic-bezier(0.45, 0, 0.25, 1) infinite",
                        }}
                        className="w-full h-[156px] bg-neutral-600/80 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "seo" && (
                <motion.div
                  key="seo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col p-6 gap-5"
                >
                  {/* Sticky header + scan state */}
                  <div className="flex items-center justify-between">
                    <Header
                      title="SEO Strategy & Execution"
                      subtitle="ryze.ai · scanned 2 min ago"
                    />
                    <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-600 px-2.5 py-1 rounded-md text-[11px] font-semibold border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/100 animate-pulse" />
                      Scanning
                    </span>
                  </div>

                  {/* Auto-scrolling content */}
                  <div className="flex-1 overflow-hidden relative">
                    <div
                      style={{
                        animation: "seoScroll 26s cubic-bezier(0.45, 0, 0.25, 1) infinite",
                      }}
                      className="space-y-5 pr-3"
                    >
                      {/* Domain summary row */}
                      <div className={`${CARD} p-5`}>
                        <div className="grid grid-cols-4 gap-5">
                          <DomainStat label="Domain Authority" value="64" trend="+3" />
                          <DomainStat label="Keywords tracked" value="248" trend="+12" />
                          <DomainStat label="Organic traffic / mo" value="48.2K" trend="+18%" />
                          <DomainStat label="Indexed pages" value="412" trend="+6" />
                        </div>
                      </div>

                      {/* Health scores */}
                      <div className="grid grid-cols-3 gap-4">
                        <HealthCard label="Technical Health" score={94} />
                        <HealthCard label="Content Score" score={88} />
                        <HealthCard label="Backlink Health" score={72} />
                      </div>

                      {/* Organic traffic trend */}
                      <TrafficTrendCard />

                      {/* Keywords */}
                      <div className={`${CARD} overflow-hidden`}>
                        <div className="px-5 py-3 border-b border-neutral-900 flex items-center justify-between">
                          <span className="text-sm font-semibold text-white">
                            Organic keyword positions
                          </span>
                          <span className="text-[11px] text-neutral-400">Last 30 days</span>
                        </div>
                        <div
                          className={`grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 px-5 py-2 bg-neutral-900 border-b border-neutral-900 ${LABEL}`}
                        >
                          <span>Keyword</span>
                          <span className="w-12 text-right">Rank</span>
                          <span className="w-14 text-right">Δ</span>
                          <span className="w-14 text-right">Volume</span>
                          <span className="w-12 text-right">Diff</span>
                        </div>
                        <div className="divide-y divide-neutral-900">
                          <KeywordRow kw="AI Marketing Automation" rank={1} delta={2} volume="24.4K" diff="High" />
                          <KeywordRow kw="Autonomous Website Builder" rank={1} delta={0} volume="8.2K" diff="Med" />
                          <KeywordRow kw="Best Ad AI Tools" rank={3} delta={4} volume="15.8K" diff="High" />
                          <KeywordRow kw="SaaS SEO Framework" rank={5} delta={-1} volume="2.1K" diff="Low" />
                          <KeywordRow kw="Autopilot PPC Platform" rank={7} delta={3} volume="4.6K" diff="Med" />
                        </div>
                      </div>

                      {/* Auto-fix log */}
                      <AutoFixCard />

                      {/* Top pages */}
                      <TopPagesCard />

                      <div className="h-8" />
                    </div>

                    {/* Faux scrollbar track + thumb */}
                    <div className="absolute top-0 right-0 h-full w-1.5 bg-neutral-800/60 rounded-full pointer-events-none">
                      <div
                        style={{
                          animation: "seoThumb 26s cubic-bezier(0.45, 0, 0.25, 1) infinite",
                        }}
                        className="w-full h-[140px] bg-neutral-600/80 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "monitoring" && (
                <motion.div
                  key="monitoring"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="p-5 border-b border-neutral-800 bg-neutral-950 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white text-xs font-semibold">
                        R
                      </div>
                      <div>
                        <h2 className="text-sm font-semibold text-white">
                          Ryze Autonomous Monitoring
                        </h2>
                        <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1.5 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/100 animate-pulse" />
                          7 agents online & active
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full border-2 border-white bg-neutral-700"
                          />
                        ))}
                      </div>
                      <button className="text-[11px] font-medium text-neutral-400 hover:text-white transition-colors">
                        Invite team
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 flex overflow-hidden">
                    <div className="flex-1 p-6 space-y-5 overflow-y-auto">
                      <div className="grid grid-cols-2 gap-4">
                        <ActivityBox title="Bid Adjustments" val="124" trend="+12" />
                        <ActivityBox title="Budget Saved" val="$1,240" trend="-$400" up={false} />
                      </div>

                      <div className="space-y-3">
                        <div className={LABEL}>Active Operations</div>
                        <OperationRow
                          label="Pruning wasted placements"
                          platform="Google"
                          status="complete"
                        />
                        <OperationRow
                          label="Optimizing ad schedule"
                          platform="Meta"
                          status="active"
                        />
                        <OperationRow label="Updating H1 tags" platform="SEO" status="pending" />
                      </div>
                    </div>

                    {/* Chat */}
                    <div className="w-[340px] bg-neutral-950 border-l border-neutral-800 flex flex-col">
                      <div className={`p-4 border-b border-neutral-800 ${LABEL}`}>
                        Agent Interaction
                      </div>
                      <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-neutral-900">
                        <div className="bg-neutral-950 p-3 rounded-xl rounded-tr-sm border border-neutral-800 text-xs text-neutral-200 leading-relaxed max-w-[85%] ml-auto">
                          Can you optimize for more signups?
                        </div>
                        <div className="flex gap-2 max-w-[90%]">
                          <div className="w-6 h-6 rounded-full bg-black shrink-0 flex items-center justify-center text-white text-[10px] font-semibold">
                            R
                          </div>
                          <div className="bg-neutral-950 p-3 rounded-xl rounded-tl-sm border border-neutral-800 text-xs text-neutral-200 leading-relaxed">
                            Signups prioritized. Shifting 15% of budget to lead-gen creatives.{" "}
                            <span className="font-semibold text-emerald-600">Est +8% boost.</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-neutral-950 border-t border-neutral-800">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Type a command..."
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-neutral-700"
                          />
                          <Send
                            size={12}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Simulation overlay */}
        {isSimulated && (
          <div className="absolute inset-0 pointer-events-none z-[100]">
            <div
              className="absolute z-[110]"
              style={{ animation: "cursorCycle 24s cubic-bezier(0.45, 0, 0.25, 1) infinite" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1.5">
                <path d="M5 3l14 8-6 2-4 6z" />
              </svg>
            </div>

            <div
              className="absolute right-5 bottom-5 w-[340px]"
              style={{ animation: "monitoringPop 25s ease-in-out infinite" }}
            >
              <div className="bg-neutral-950 rounded-xl shadow-2xl shadow-black/60 border border-neutral-800 p-4 flex gap-3 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/100" />
                <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Activity className="text-white" size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className={LABEL}>Agent notification</span>
                    <X size={12} className="text-neutral-600" />
                  </div>
                  <p className="text-xs font-medium text-white leading-snug">
                    Ryze just saved you{" "}
                    <span className="font-semibold text-emerald-600">$420</span> by pausing
                    underperforming ads.
                  </p>
                  <div className="flex gap-2 mt-3">
                    <button className="bg-black text-white px-3 py-1.5 rounded-md text-[11px] font-medium">
                      View change
                    </button>
                    <button className="bg-neutral-800 text-neutral-300 px-3 py-1.5 rounded-md text-[11px] font-medium">
                      Dismiss
                    </button>
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

/* ─────────────────────────── Subcomponents ─────────────────────────── */

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div>
    <h2 className="text-sm font-semibold text-white">{title}</h2>
    <p className="text-[11px] text-neutral-400 mt-0.5">{subtitle}</p>
  </div>
);

const BrowserTab = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className={`relative px-4 py-1.5 text-[11px] font-medium cursor-pointer transition-all flex items-center gap-2 group/tab ${active ? "bg-neutral-900 text-white rounded-t-md" : "text-neutral-500 hover:text-white"
      }`}
  >
    {label}
    <X
      size={10}
      className={`transition-opacity ${active ? "opacity-100 text-neutral-500 hover:text-white" : "opacity-0 group-hover/tab:opacity-100"
        }`}
    />
  </div>
);

const SidebarIcon = ({
  icon,
  active = false,
  onClick,
}: {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) => (
  <div
    onClick={onClick}
    className={`p-2 rounded-lg cursor-pointer transition-all ${active
      ? "bg-neutral-800 text-white"
      : "text-neutral-500 hover:bg-neutral-900 hover:text-neutral-300"
      }`}
  >
    {icon}
  </div>
);

/* Metrics */

const MetricRow = () => (
  <div className="grid grid-cols-3 gap-4">
    <MetricCard label="Cost" value="$12,450" sub="ROAS 4.2x" trend="+12%" up />
    <MetricCard label="Conversions" value="508" sub="Conv. rate 3.6%" trend="+15%" up />
    <MetricCard label="Clicks" value="14,200" sub="CTR 3.8%" trend="-2%" />
  </div>
);

const MetricCard = ({
  label,
  value,
  sub,
  trend,
  up = false,
}: {
  label: string;
  value: string;
  sub: string;
  trend: string;
  up?: boolean;
}) => (
  <div className={`${CARD} p-4`}>
    <div className="flex items-center justify-between mb-2">
      <span className={LABEL}>{label}</span>
      <span
        className={`text-[11px] font-semibold ${up ? "text-emerald-600" : "text-rose-500"
          }`}
      >
        {trend}
      </span>
    </div>
    <div className="text-lg font-semibold text-white tracking-tight">{value}</div>
    <div className="text-[11px] text-neutral-400 mt-0.5">{sub}</div>
  </div>
);

const AdTable = () => (
  <div className={`${CARD} overflow-hidden`}>
    <div className="px-4 py-2.5 border-b border-neutral-900 flex items-center justify-between">
      <span className="text-sm font-semibold text-white">Channels</span>
      <span className="text-[11px] text-neutral-400">Last 7 days</span>
    </div>
    <div className={`grid grid-cols-4 px-4 py-2 bg-neutral-900 border-b border-neutral-900 ${LABEL}`}>
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

const TableRow = ({
  name,
  roas,
  spend,
  score,
}: {
  name: string;
  roas: string;
  spend: string;
  score: number;
}) => (
  <div className="grid grid-cols-4 px-4 py-3 border-b border-neutral-900 last:border-0 items-center text-xs">
    <span className="font-medium text-white">{name}</span>
    <span className="text-emerald-600 font-semibold">{roas}</span>
    <span className="text-neutral-400">{spend}</span>
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-neutral-800 h-1 rounded-full overflow-hidden">
        <div className="bg-black h-full rounded-full" style={{ width: `${score}%` }} />
      </div>
      <span className="text-[11px] text-neutral-400 font-medium w-6 text-right">{score}</span>
    </div>
  </div>
);

const MetricCardGroup = () => (
  <div className="grid grid-cols-2 gap-4">
    <div className={`${CARD} p-4 flex flex-col gap-2`}>
      <span className={LABEL}>AI Scoring (avg)</span>
      <div className="text-2xl font-semibold text-white tracking-tight">84/100</div>
      <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
        <div className="h-full bg-emerald-500/100 rounded-full" style={{ width: "84%" }} />
      </div>
    </div>
    <div className={`${CARD} p-4 flex flex-col gap-2`}>
      <span className={LABEL}>Optimization Events</span>
      <div className="text-2xl font-semibold text-white tracking-tight">1,240</div>
      <div className="text-[11px] text-neutral-400">+312 vs. last week</div>
    </div>
  </div>
);

/* Feed of actions the AI has just taken */
const feedItems: {
  icon: React.ReactNode;
  tone: "emerald" | "rose" | "amber" | "indigo";
  title: string;
  meta: string;
  time: string;
}[] = [
    {
      icon: <TrendingUp size={12} />,
      tone: "emerald",
      title: "Bid raised on ‘High Intent / SaaS’ keyword group",
      meta: "Google Ads · +18% CTR signal",
      time: "2m ago",
    },
    {
      icon: <PauseCircle size={12} />,
      tone: "rose",
      title: "Paused 3 underperforming Meta creatives",
      meta: "Meta Ads · saved ~$420/day",
      time: "14m ago",
    },
    {
      icon: <Target size={12} />,
      tone: "indigo",
      title: "Added lookalike audience ‘LAL 2% – checkout’",
      meta: "Meta Ads · seed list 48,200",
      time: "1h ago",
    },
    {
      icon: <Zap size={12} />,
      tone: "amber",
      title: "Shifted $1,200 budget → TikTok ‘Spring Drop’",
      meta: "Cross-channel rebalancing",
      time: "3h ago",
    },
  ];

const toneMap = {
  emerald: "bg-emerald-500/10 text-emerald-600",
  rose: "bg-rose-500/10 text-rose-500",
  amber: "bg-amber-500/10 text-amber-500",
  indigo: "bg-indigo-500/10 text-indigo-500",
};

const ActivityFeed = () => (
  <div className={`${CARD} overflow-hidden`}>
    <div className="px-4 py-2.5 border-b border-neutral-900 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Sparkles size={14} className="text-neutral-400" />
        <span className="text-sm font-semibold text-white">Ryze agent activity</span>
      </div>
      <span className="text-[11px] text-neutral-400">Live</span>
    </div>
    <div className="divide-y divide-neutral-900">
      {feedItems.map((item, i) => (
        <div key={i} className="flex items-start gap-3 px-4 py-3">
          <div
            className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${toneMap[item.tone]}`}
          >
            {item.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-white leading-snug">{item.title}</div>
            <div className="text-[11px] text-neutral-400 mt-0.5">{item.meta}</div>
          </div>
          <span className="text-[11px] text-neutral-500 shrink-0">{item.time}</span>
        </div>
      ))}
    </div>
  </div>
);

/* Timeline: intra-day optimization events */
const timeline: { time: string; label: string; detail: string; up?: boolean }[] = [
  { time: "09:14", label: "Budget rebalanced", detail: "Google → Meta, $800 shifted", up: true },
  { time: "10:02", label: "New negative keyword added", detail: "‘free’ added to 4 ad groups" },
  { time: "11:30", label: "Creative A/B test started", detail: "Variant B leading by 12% CTR", up: true },
  { time: "13:45", label: "Landing page H1 updated", detail: "SEO signal: +2 rank positions", up: true },
  { time: "15:20", label: "Frequency cap adjusted", detail: "Reduced 6→4 on remarketing set" },
];

const AgentTimeline = () => (
  <div className={`${CARD} p-5`}>
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm font-semibold text-white">Today’s optimizations</span>
      <span className="text-[11px] text-neutral-400">28 events</span>
    </div>
    <div className="relative">
      <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-neutral-700" />
      <div className="space-y-4">
        {timeline.map((t, i) => (
          <div key={i} className="relative pl-6 flex items-start gap-3">
            <div
              className={`absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 ${t.up
                ? "border-emerald-500 bg-neutral-950"
                : "border-neutral-600 bg-neutral-950"
                }`}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-white">{t.label}</span>
                {t.up && <TrendingUp size={10} className="text-emerald-500" />}
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5">{t.detail}</div>
            </div>
            <span className="text-[11px] text-neutral-500 tabular-nums shrink-0">{t.time}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* SEO */

const DomainStat = ({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend: string;
}) => {
  const down = trend.startsWith("-");
  return (
    <div className="flex flex-col gap-1.5">
      <span className={LABEL}>{label}</span>
      <div className="flex items-baseline gap-2">
        <span className="text-lg font-semibold text-white tracking-tight">{value}</span>
        <span
          className={`text-[11px] font-semibold ${down ? "text-rose-500" : "text-emerald-600"
            }`}
        >
          {trend}
        </span>
      </div>
    </div>
  );
};

const HealthCard = ({ label, score }: { label: string; score: number }) => {
  const tone =
    score >= 90
      ? { bar: "bg-emerald-500/100", text: "text-emerald-600", tag: "Strong" }
      : score >= 75
        ? { bar: "bg-amber-400", text: "text-amber-500", tag: "Healthy" }
        : { bar: "bg-rose-400", text: "text-rose-500", tag: "Needs work" };

  return (
    <div className={`${CARD} p-5`}>
      <div className="flex items-center justify-between mb-3">
        <span className={LABEL}>{label}</span>
        <span className={`text-[11px] font-semibold ${tone.text}`}>{tone.tag}</span>
      </div>
      <div className="text-2xl font-semibold text-white tracking-tight mb-3">{score}%</div>
      <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${tone.bar}`} style={{ width: `${score}%` }} />
      </div>
    </div>
  );
};

const KeywordRow = ({
  kw,
  rank,
  delta,
  volume,
  diff,
}: {
  kw: string;
  rank: number;
  delta: number;
  volume: string;
  diff: string;
}) => {
  const diffTone =
    diff === "High" ? "text-rose-500" : diff === "Med" ? "text-amber-500" : "text-emerald-600";
  const deltaTone =
    delta > 0 ? "text-emerald-600" : delta < 0 ? "text-rose-500" : "text-neutral-500";
  const deltaLabel = delta === 0 ? "—" : delta > 0 ? `+${delta}` : `${delta}`;

  return (
    <div className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 items-center px-5 py-3">
      <span className="text-xs font-medium text-white truncate">{kw}</span>
      <span className="w-12 text-right text-xs font-semibold text-white">#{rank}</span>
      <span className={`w-14 text-right text-[11px] font-semibold tabular-nums ${deltaTone}`}>
        {deltaLabel}
      </span>
      <span className="w-14 text-right text-xs text-neutral-400 tabular-nums">{volume}</span>
      <span className={`w-12 text-right text-[11px] font-semibold ${diffTone}`}>{diff}</span>
    </div>
  );
};

/* Organic traffic trend — hand-drawn SVG sparkline */
const TrafficTrendCard = () => {
  const points = [18, 22, 20, 26, 24, 30, 28, 34, 32, 38, 42, 48];
  const max = 50;
  const w = 520;
  const h = 90;
  const step = w / (points.length - 1);
  const toY = (v: number) => h - (v / max) * h;
  const path = points.map((v, i) => `${i === 0 ? "M" : "L"} ${i * step} ${toY(v)}`).join(" ");
  const areaPath = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <div className={`${CARD} p-5`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className={LABEL}>Organic traffic</div>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-semibold text-white tracking-tight">48,200</span>
            <span className="text-[11px] font-semibold text-emerald-600">+18.4%</span>
          </div>
        </div>
        <div className="flex gap-1">
          {["7d", "30d", "90d"].map((t) => (
            <span
              key={t}
              className={`text-[11px] px-2 py-0.5 rounded-md font-medium ${t === "30d"
                ? "bg-black text-white"
                : "text-neutral-400"
                }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20" preserveAspectRatio="none">
        <defs>
          <linearGradient id="traffic" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(239 84% 67%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(239 84% 67%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#traffic)" />
        <path d={path} fill="none" stroke="hsl(239 84% 67%)" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

/* Auto-fixes the agent has performed */
const autoFixes: { label: string; meta: string; time: string; tone: "emerald" | "amber" }[] = [
  {
    label: "Added missing meta descriptions",
    meta: "14 pages · avg 158 chars",
    time: "4m ago",
    tone: "emerald",
  },
  {
    label: "Compressed hero images",
    meta: "LCP improved by 620ms",
    time: "22m ago",
    tone: "emerald",
  },
  {
    label: "Fixed broken internal links",
    meta: "8 links rewritten",
    time: "1h ago",
    tone: "emerald",
  },
  {
    label: "Flagged thin content on /features/beta",
    meta: "Pending approval",
    time: "2h ago",
    tone: "amber",
  },
];

const AutoFixCard = () => (
  <div className={`${CARD} overflow-hidden`}>
    <div className="px-5 py-3 border-b border-neutral-900 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Sparkles size={14} className="text-neutral-400" />
        <span className="text-sm font-semibold text-white">Agent auto-fixes</span>
      </div>
      <span className="text-[11px] text-neutral-400">Today</span>
    </div>
    <div className="divide-y divide-neutral-900">
      {autoFixes.map((f, i) => (
        <div key={i} className="flex items-start gap-3 px-5 py-3">
          <div
            className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${f.tone === "emerald"
              ? "bg-emerald-500/10 text-emerald-600"
              : "bg-amber-500/10 text-amber-500"
              }`}
          >
            {f.tone === "emerald" ? <CheckCircle2 size={12} /> : <Zap size={12} />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-white leading-snug">{f.label}</div>
            <div className="text-[11px] text-neutral-400 mt-0.5">{f.meta}</div>
          </div>
          <span className="text-[11px] text-neutral-500 shrink-0">{f.time}</span>
        </div>
      ))}
    </div>
  </div>
);

/* Top performing pages */
const topPages = [
  { url: "/features/ai-marketer", views: "12,400", conv: "4.8%" },
  { url: "/pricing", views: "8,920", conv: "6.2%" },
  { url: "/blog/autopilot-ppc-guide", views: "6,180", conv: "2.1%" },
  { url: "/product/seo-agent", views: "4,540", conv: "3.9%" },
];

const TopPagesCard = () => (
  <div className={`${CARD} overflow-hidden`}>
    <div className="px-5 py-3 border-b border-neutral-900 flex items-center justify-between">
      <span className="text-sm font-semibold text-white">Top pages</span>
      <span className="text-[11px] text-neutral-400">By organic visits</span>
    </div>
    <div className={`grid grid-cols-[1fr_auto_auto] gap-4 px-5 py-2 bg-neutral-900 border-b border-neutral-900 ${LABEL}`}>
      <span>URL</span>
      <span className="w-16 text-right">Visits</span>
      <span className="w-14 text-right">Conv.</span>
    </div>
    <div className="divide-y divide-neutral-900">
      {topPages.map((p) => (
        <div key={p.url} className="grid grid-cols-[1fr_auto_auto] gap-4 items-center px-5 py-3">
          <span className="text-xs font-mono text-neutral-200 truncate">{p.url}</span>
          <span className="w-16 text-right text-xs text-white tabular-nums">{p.views}</span>
          <span className="w-14 text-right text-xs font-semibold text-emerald-600">{p.conv}</span>
        </div>
      ))}
    </div>
  </div>
);

/* Monitoring */

const ActivityBox = ({
  title,
  val,
  trend,
  up = true,
}: {
  title: string;
  val: string;
  trend: string;
  up?: boolean;
}) => (
  <div className={`${CARD} p-4`}>
    <div className={`${LABEL} mb-2`}>{title}</div>
    <div className="flex items-baseline gap-2">
      <span className="text-lg font-semibold text-white tracking-tight">{val}</span>
      <span className={`text-[11px] font-semibold ${up ? "text-emerald-600" : "text-rose-500"}`}>
        {trend}
      </span>
    </div>
  </div>
);

const OperationRow = ({
  label,
  platform,
  status,
}: {
  label: string;
  platform: string;
  status: "active" | "pending" | "complete";
}) => {
  const dot =
    status === "active"
      ? "bg-emerald-500/100 animate-pulse"
      : status === "pending"
        ? "bg-amber-400"
        : "bg-neutral-600";
  return (
    <div className={`${CARD} p-3 flex items-center justify-between`}>
      <div className="flex items-center gap-3">
        <div className={`w-1.5 h-1.5 rounded-full ${dot}`} />
        <span className="text-xs font-medium text-neutral-200">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-400 font-medium">
          {platform}
        </span>
        {status === "complete" && <CheckCircle2 size={14} className="text-emerald-500" />}
      </div>
    </div>
  );
};
