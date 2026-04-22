export type Severity = "high" | "med" | "low";

export type Finding = {
  iconName: "Activity" | "Search" | "Gauge" | "Trophy";
  label: string;
  detail: string;
  metric: string;
  severity: Severity;
};

export const findings: Finding[] = [
  {
    iconName: "Activity",
    label: "Ad spend leakage",
    detail: "8 campaigns flagged",
    metric: "$1,247 /mo",
    severity: "high",
  },
  {
    iconName: "Search",
    label: "SEO gaps",
    detail: "14 keywords, ~8.2K volume",
    metric: "Rank +4 possible",
    severity: "med",
  },
  {
    iconName: "Gauge",
    label: "Technical health",
    detail: "LCP 2.8s · CLS 0.18",
    metric: "72 / 100",
    severity: "med",
  },
  {
    iconName: "Trophy",
    label: "Competitor gap",
    detail: "3 sites ahead on 47 KWs",
    metric: "−18% share",
    severity: "high",
  },
];

export const severityTone: Record<Severity, { dot: string; tag: string; pill: string; label: string }> = {
  high: { dot: "bg-rose-400", tag: "text-rose-300", pill: "bg-rose-500/10 border-rose-500/30", label: "High" },
  med: { dot: "bg-amber-400", tag: "text-amber-300", pill: "bg-amber-500/10 border-amber-500/30", label: "Medium" },
  low: { dot: "bg-emerald-400", tag: "text-emerald-300", pill: "bg-emerald-500/10 border-emerald-500/30", label: "Low" },
};
