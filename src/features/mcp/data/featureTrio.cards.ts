export type CardIcon = "MessageSquare" | "Layers" | "Zap" | "ShieldCheck";
export type PreviewKey = "ask" | "safety";

export type TrioBadge = { label: string; src: string };
export type TrioBullet = { text: string; dot: string };

export type TrioCardData = {
  num: string;
  iconName: CardIcon;
  title: string;
  bullets: TrioBullet[];
  badges?: TrioBadge[];
  /** how many of the 6 columns this card occupies on md+ */
  colSpan: 2 | 3 | 4;
  /** optional decorative slot rendered on the right of wide cards */
  previewKey?: PreviewKey;
};

export const trioCards: TrioCardData[] = [
  {
    num: "01",
    iconName: "MessageSquare",
    title: "Ask in English, get answers",
    colSpan: 4,
    previewKey: "ask",
    bullets: [
      { text: `"How's my brand campaign doing?" — just ask`, dot: "#4ade80" },
      { text: "Audits, reports, and optimizations in seconds", dot: "#a78bfa" },
    ],
  },
  {
    num: "02",
    iconName: "Layers",
    title: "All platforms, one conversation",
    colSpan: 2,
    bullets: [
      { text: "Google Ads, Meta, GA4 at once", dot: "#fbbf24" },
      { text: "Compare and deduplicate", dot: "#f472b6" },
    ],
    badges: [
      { label: "Google Ads", src: "/services/google_ads.avif" },
      { label: "Meta", src: "/services/meta.avif" },
      { label: "Google Analytics", src: "/services/google-analytics.svg" },
      { label: "TikTok", src: "/services/tiktok.avif" },
    ],
  },
  {
    num: "03",
    iconName: "Zap",
    title: "Read, write, and schedule",
    colSpan: 2,
    bullets: [
      { text: "Pause, bid, add keywords from chat", dot: "#60a5fa" },
      { text: "Schedule actions, hands-free", dot: "#f9a8d4" },
    ],
  },
  {
    num: "04",
    iconName: "ShieldCheck",
    title: "Safe by default",
    colSpan: 4,
    previewKey: "safety",
    bullets: [
      { text: "Writes wait for your approval", dot: "#34d399" },
      { text: "No accidental account bans", dot: "#fb923c" },
    ],
  },
];

/** map colSpan → Tailwind class (keep classes static so the JIT picks them up) */
export const TRIO_COL_SPAN: Record<TrioCardData["colSpan"], string> = {
  2: "md:col-span-6 lg:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-6 lg:col-span-4",
};
