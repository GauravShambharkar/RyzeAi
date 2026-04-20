"use client";

import React from "react";
import {
  Home,
  CheckSquare,
  ArrowLeftRight,
  CreditCard,
  Wallet,
  PieChart,
  Settings,
  Search,
  ChevronDown,
  Plus,
  MoreVertical,
  Bell,
  Send,
  Download,
  Repeat,
  FileText,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

export const DashboardPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="mt-8 w-full max-w-6xl px-4 lg:px-0"
    >
      <div className="rounded-2xl overflow-hidden p-2 md:p-3 lg:p-4 backdrop-blur-xl bg-white/10 border border-white/20 shadow-dashboard">
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm border border-border/50 overflow-hidden flex flex-col min-h-[500px] lg:min-h-[600px] text-[11px] select-none pointer-events-none">
          {/* Browser Top Bar (Tabs) */}
          <div className="h-7 bg-[#e5e7eb]/80 backdrop-blur-sm border-b border-border/50 flex items-center px-3 gap-2">
            <div className="flex gap-1.5 mr-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>

            <div className="flex items-center h-full pt-1">
              {/* Dashboard Tab */}
              <div className="h-full px-4 bg-white/90 rounded-t-lg border-x border-t border-border/50 flex items-center gap-2 text-[10px] font-medium text-foreground relative z-10">
                Dashboard
                <MoreVertical className="w-2.5 h-2.5 rotate-45 opacity-40" />
              </div>
              {/* SEO Tab */}
              <div className="h-full px-4 bg-[#f3f4f6]/50 rounded-t-lg flex items-center gap-2 text-[10px] font-medium text-muted-foreground hover:bg-[#f3f4f6] transition-colors">
                SEO Optimiser
              </div>
              <div className="px-2">
                <Plus className="w-3 h-3 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Browser Address Bar */}
          <div className="h-10 bg-white/50 border-b border-border/30 flex items-center px-4 gap-4">
            <div className="flex items-center gap-3">
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground rotate-90" />
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground -rotate-90" />
              <Repeat className="w-3 h-3 text-muted-foreground" />
            </div>
            <div className="flex-1 bg-[#f3f4f6] rounded-md h-7 flex items-center px-3 text-muted-foreground gap-2">
              <div className="w-3 h-3 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
              <span>ryze.ai/dashboard</span>
            </div>
            <MoreVertical className="w-3.5 h-3.5 text-muted-foreground" />
          </div>

          {/* Internal Dashboard Navbar */}
          <div className="h-12 border-b border-border/50 flex items-center justify-between px-4 bg-white/50 backdrop-blur-sm sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center text-white font-bold text-[14px]">
                R
              </div>
              <div className="flex items-center gap-1.5 font-medium text-foreground">
                Ryze.ai
                <ChevronDown className="w-3 h-3 text-muted-foreground" />
              </div>
            </div>

            <div className="hidden sm:flex flex-1 max-w-md mx-4 lg:mx-8">
              <div className="bg-secondary/50 rounded-md px-3 py-1.5 flex items-center justify-between text-muted-foreground w-full">
                <div className="flex items-center gap-2">
                  <Search className="w-3.5 h-3.5" />
                  <span>Search anything...</span>
                </div>
                <div className="hidden lg:flex items-center gap-0.5 border border-border/50 rounded px-1 bg-white/50">
                  <span className="text-[9px]">⌘</span>
                  <span className="text-[9px]">K</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-foreground text-white rounded-full px-3 py-1.5 font-medium flex items-center gap-1.5">
                Move Money
              </button>
              <Bell className="w-4 h-4 text-muted-foreground" />
              <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center text-white font-semibold border-2 border-white">
                JB
              </div>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden min-h-0">
            {/* Sidebar */}
            <div className="hidden sm:flex w-48 border-r border-border/50 p-3 flex-col gap-6 bg-white/30 shrink-0">
              <div className="flex flex-col gap-1">
                <SidebarItem icon={<Home className="w-3.5 h-3.5" />} label="Home" active />
                <SidebarItem icon={<CheckSquare className="w-3.5 h-3.5" />} label="Tasks" badge="10" />
                <SidebarItem icon={<ArrowLeftRight className="w-3.5 h-3.5" />} label="Transactions" />
                <SidebarItem icon={<CreditCard className="w-3.5 h-3.5" />} label="Payments" hasChevron />
                <SidebarItem icon={<Wallet className="w-3.5 h-3.5" />} label="Cards" />
                <SidebarItem icon={<PieChart className="w-3.5 h-3.5" />} label="Capital" />
                <SidebarItem icon={<Home className="w-3.5 h-3.5" />} label="Accounts" hasChevron />
              </div>

              <div className="flex flex-col gap-1">
                <div className="px-2 py-1 text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Workflows</div>
                <SidebarItem label="Trake rutes" />
                <SidebarItem label="Payments" />
                <SidebarItem label="Notifications" />
                <SidebarItem label="Settings" />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-secondary/20 p-5 overflow-y-auto custom-scrollbar">
              <div className="mb-6">
                <h2 className="text-sm font-semibold text-foreground">Welcome, Jane</h2>
              </div>

              {/* Action Buttons Row */}
              <div className="flex items-center gap-2 mb-6 overflow-x-auto no-scrollbar pb-2">
                <ActionButton icon={<Send className="w-3 h-3" />} label="Send" primary />
                <ActionButton icon={<Download className="w-3 h-3" />} label="Request" />
                <ActionButton icon={<Repeat className="w-3 h-3" />} label="Transfer" />
                <ActionButton icon={<Plus className="w-3 h-3" />} label="Deposit" />
                <ActionButton icon={<FileText className="w-3 h-3" />} label="Pay Bill" />
                <ActionButton icon={<Plus className="w-3 h-3" />} label="Create Invoice" />
              </div>

              {/* Cards Grid */}
              <div className="flex gap-4 mb-6">
                {/* Balance Card */}
                <div className="flex-1 basis-0 bg-white rounded-xl border border-border/50 p-4 shadow-sm flex flex-col">
                  <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                    Mercury Balance
                    <CheckCircle2 className="w-3 h-3 text-accent" />
                  </div>
                  <div className="text-xl font-bold text-foreground flex items-baseline gap-1 mb-4">
                    $8,450,190<span className="text-xs text-muted-foreground font-medium">.32</span>
                  </div>

                  <div className="flex gap-4 mb-4">
                    <div>
                      <div className="text-[9px] text-muted-foreground uppercase font-semibold">Last 30 Days</div>
                      <div className="text-[10px] text-emerald-600 font-bold">+$1.8M</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-muted-foreground uppercase font-semibold">Expenses</div>
                      <div className="text-[10px] text-rose-500 font-bold">-$900K</div>
                    </div>
                  </div>

                  {/* SVG Chart */}
                  <div className="h-20 w-full mt-auto relative">
                    <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 80 C 40 75, 60 40, 100 45 C 140 50, 160 85, 200 70 C 240 55, 260 20, 300 15 C 340 10, 360 40, 400 35 L 400 100 L 0 100 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M0 80 C 40 75, 60 40, 100 45 C 140 50, 160 85, 200 70 C 240 55, 260 20, 300 15 C 340 10, 360 40, 400 35"
                        fill="none"
                        stroke="hsl(var(--accent))"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Accounts Card */}
                <div className="flex-1 basis-0 bg-white rounded-xl border border-border/50 p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">Accounts</h3>
                    <div className="flex items-center gap-2">
                      <Plus className="w-3 h-3 text-muted-foreground" />
                      <MoreVertical className="w-3 h-3 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <AccountRow label="Credit" amount="$98,125.50" />
                    <AccountRow label="Treasury" amount="$6,750,200.00" />
                    <AccountRow label="Operations" amount="$1,592,864.82" />
                  </div>
                </div>
              </div>

              {/* Transactions Table */}
              <div className="bg-white rounded-xl border border-border/50 p-4 shadow-sm">
                <h3 className="font-semibold text-foreground mb-4">Recent Transactions</h3>
                <div className="w-full">
                  <div className="flex px-2 py-2 text-muted-foreground font-medium border-b border-border/30">
                    <div className="flex-[2]">Description</div>
                    <div className="flex-1">Date</div>
                    <div className="flex-1 text-right">Amount</div>
                    <div className="flex-1 text-right">Status</div>
                  </div>
                  <TransactionRow desc="AWS / Cloud Services" date="Oct 12, 2024" amount="-$5,200.00" status="Pending" statusColor="amber" />
                  <TransactionRow desc="Client Payment / Acme Corp" date="Oct 11, 2024" amount="+$125,000.00" status="Completed" statusColor="green" />
                  <TransactionRow desc="Payroll / Monthly" date="Oct 10, 2024" amount="-$85,450.00" status="Completed" statusColor="green" />
                  <TransactionRow desc="Office Supplies / Apple Inc" date="Oct 09, 2024" amount="-$1,200.00" status="Completed" statusColor="green" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SidebarItem = ({ icon, label, active = false, badge, hasChevron = false }: any) => (
  <div className={`flex items-center justify-between px-2 py-1.5 rounded-md cursor-pointer transition-colors ${active ? "bg-secondary text-foreground font-semibold" : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"}`}>
    <div className="flex items-center gap-2.5">
      {icon}
      <span>{label}</span>
    </div>
    <div className="flex items-center gap-1.5">
      {badge && <span className="bg-accent/10 text-accent text-[9px] px-1.5 rounded-full font-bold">{badge}</span>}
      {hasChevron && <ChevronRight className="w-3 h-3 opacity-50" />}
    </div>
  </div>
);

const ActionButton = ({ icon, label, primary = false }: any) => (
  <button className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-all ${primary ? "bg-accent text-white shadow-sm" : "bg-white border border-border/50 text-foreground hover:bg-secondary/50"}`}>
    {icon}
    <span>{label}</span>
  </button>
);

const AccountRow = ({ label, amount }: any) => (
  <div className="flex items-center justify-between py-3">
    <span className="text-muted-foreground font-medium">{label}</span>
    <span className="text-foreground font-bold">{amount}</span>
  </div>
);

const TransactionRow = ({ desc, date, amount, status, statusColor }: any) => (
  <div className="flex px-2 py-3 items-center border-b border-border/10 last:border-0">
    <div className="flex-[2] text-foreground font-medium">{desc}</div>
    <div className="flex-1 text-muted-foreground">{date}</div>
    <div className={`flex-1 text-right font-bold ${amount.startsWith('+') ? 'text-emerald-600' : 'text-foreground'}`}>{amount}</div>
    <div className="flex-1 text-right">
      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${statusColor === 'amber' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
        {status}
      </span>
    </div>
  </div>
);
