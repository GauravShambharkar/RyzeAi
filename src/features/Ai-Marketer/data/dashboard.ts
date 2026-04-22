export type Tone = "emerald" | "rose" | "amber" | "indigo";

export const toneMap: Record<Tone, string> = {
  emerald: "bg-emerald-500/10 text-emerald-600",
  rose: "bg-rose-500/10 text-rose-500",
  amber: "bg-amber-500/10 text-amber-500",
  indigo: "bg-indigo-500/10 text-indigo-500",
};

/* ─────────── Campaign dashboard ─────────── */

export type TopMetric = { label: string; value: string; sub: string; trend: string; up?: boolean };
export const topMetrics: TopMetric[] = [
  { label: "Cost", value: "$12,450", sub: "ROAS 4.2x", trend: "+12%", up: true },
  { label: "Conversions", value: "508", sub: "Conv. rate 3.6%", trend: "+15%", up: true },
  { label: "Clicks", value: "14,200", sub: "CTR 3.8%", trend: "-2%" },
];

export type Channel = { name: string; roas: string; spend: string; score: number };
export const channels: Channel[] = [
  { name: "Google Ads", roas: "4.8x", spend: "$8.5K", score: 92 },
  { name: "Meta Ads", roas: "3.1x", spend: "$4.2K", score: 68 },
  { name: "TikTok Ads", roas: "5.2x", spend: "$2.1K", score: 96 },
];

export type FeedItemIcon = "TrendingUp" | "PauseCircle" | "Target" | "Zap";
export type FeedItem = { iconName: FeedItemIcon; tone: Tone; title: string; meta: string; time: string };
export const feedItems: FeedItem[] = [
  { iconName: "TrendingUp", tone: "emerald", title: "Bid raised on ‘High Intent / SaaS’ keyword group", meta: "Google Ads · +18% CTR signal", time: "2m ago" },
  { iconName: "PauseCircle", tone: "rose", title: "Paused 3 underperforming Meta creatives", meta: "Meta Ads · saved ~$420/day", time: "14m ago" },
  { iconName: "Target", tone: "indigo", title: "Added lookalike audience ‘LAL 2% – checkout’", meta: "Meta Ads · seed list 48,200", time: "1h ago" },
  { iconName: "Zap", tone: "amber", title: "Shifted $1,200 budget → TikTok ‘Spring Drop’", meta: "Cross-channel rebalancing", time: "3h ago" },
];

export type TimelineItem = { time: string; label: string; detail: string; up?: boolean };
export const timeline: TimelineItem[] = [
  { time: "09:14", label: "Budget rebalanced", detail: "Google → Meta, $800 shifted", up: true },
  { time: "10:02", label: "New negative keyword added", detail: "‘free’ added to 4 ad groups" },
  { time: "11:30", label: "Creative A/B test started", detail: "Variant B leading by 12% CTR", up: true },
  { time: "13:45", label: "Landing page H1 updated", detail: "SEO signal: +2 rank positions", up: true },
  { time: "15:20", label: "Frequency cap adjusted", detail: "Reduced 6→4 on remarketing set" },
];

/* ─────────── SEO tab ─────────── */

export type DomainStatItem = { label: string; value: string; trend: string };
export const domainStats: DomainStatItem[] = [
  { label: "Domain Authority", value: "64", trend: "+3" },
  { label: "Keywords tracked", value: "248", trend: "+12" },
  { label: "Organic traffic / mo", value: "48.2K", trend: "+18%" },
  { label: "Indexed pages", value: "412", trend: "+6" },
];

export type HealthItem = { label: string; score: number };
export const healthCards: HealthItem[] = [
  { label: "Technical Health", score: 94 },
  { label: "Content Score", score: 88 },
  { label: "Backlink Health", score: 72 },
];

export type Keyword = { kw: string; rank: number; delta: number; volume: string; diff: string };
export const keywords: Keyword[] = [
  { kw: "AI Marketing Automation", rank: 1, delta: 2, volume: "24.4K", diff: "High" },
  { kw: "Autonomous Website Builder", rank: 1, delta: 0, volume: "8.2K", diff: "Med" },
  { kw: "Best Ad AI Tools", rank: 3, delta: 4, volume: "15.8K", diff: "High" },
  { kw: "SaaS SEO Framework", rank: 5, delta: -1, volume: "2.1K", diff: "Low" },
  { kw: "Autopilot PPC Platform", rank: 7, delta: 3, volume: "4.6K", diff: "Med" },
];

export const trafficPoints = [18, 22, 20, 26, 24, 30, 28, 34, 32, 38, 42, 48];

export type AutoFix = { label: string; meta: string; time: string; tone: "emerald" | "amber" };
export const autoFixes: AutoFix[] = [
  { label: "Added missing meta descriptions", meta: "14 pages · avg 158 chars", time: "4m ago", tone: "emerald" },
  { label: "Compressed hero images", meta: "LCP improved by 620ms", time: "22m ago", tone: "emerald" },
  { label: "Fixed broken internal links", meta: "8 links rewritten", time: "1h ago", tone: "emerald" },
  { label: "Flagged thin content on /features/beta", meta: "Pending approval", time: "2h ago", tone: "amber" },
];

export type TopPage = { url: string; views: string; conv: string };
export const topPages: TopPage[] = [
  { url: "/features/ai-marketer", views: "12,400", conv: "4.8%" },
  { url: "/pricing", views: "8,920", conv: "6.2%" },
  { url: "/blog/autopilot-ppc-guide", views: "6,180", conv: "2.1%" },
  { url: "/product/seo-agent", views: "4,540", conv: "3.9%" },
];

/* ─────────── Monitoring tab ─────────── */

export type ActivityBoxItem = { title: string; val: string; trend: string; up?: boolean };
export const activityBoxes: ActivityBoxItem[] = [
  { title: "Bid Adjustments", val: "124", trend: "+12", up: true },
  { title: "Budget Saved", val: "$1,240", trend: "-$400", up: false },
];

export type Operation = { label: string; platform: string; status: "active" | "pending" | "complete" };
export const operations: Operation[] = [
  { label: "Pruning wasted placements", platform: "Google", status: "complete" },
  { label: "Optimizing ad schedule", platform: "Meta", status: "active" },
  { label: "Updating H1 tags", platform: "SEO", status: "pending" },
];
