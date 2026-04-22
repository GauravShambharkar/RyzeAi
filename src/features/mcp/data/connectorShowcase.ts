export type KpiTone = "pos" | "neg" | "neutral";

export type KpiData = { label: string; value: string; delta?: string; tone?: KpiTone };

/* Card A — Weekly report */
export const weeklyKpis: KpiData[] = [
  { label: "Spend", value: "$9,840", delta: "−3.2%", tone: "pos" },
  { label: "Conv.", value: "312", delta: "+6.3%", tone: "pos" },
  { label: "CPA", value: "$31.54", delta: "−10.6%", tone: "pos" },
  { label: "ROAS", value: "3.4×", delta: "+0.3×", tone: "pos" },
  { label: "CTR", value: "4.6%", delta: "+0.1pp", tone: "pos" },
];

export const weeklyConvBars = [28, 34, 40, 52, 46, 58, 64];

/* Card B — Cross-platform overlap */
export const overlapKpis: KpiData[] = [
  { label: "Monthly spend", value: "$42,600" },
  { label: "Overlap", value: "$6,820", tone: "neg", delta: "16%" },
  { label: "Overlap rate", value: "16%" },
  { label: "Recoverable", value: "$4,100", tone: "pos" },
];

export type OverlapBar = { label: string; a: number; b: number };
export const overlapBars: OverlapBar[] = [
  { label: "Brand", a: 38, b: 14 },
  { label: "Retargeting", a: 56, b: 30 },
  { label: "Non-brand", a: 70, b: 18 },
  { label: "PMax/Adv+", a: 44, b: 24 },
];

/* Card C — True CPA analysis */
export const trueCpaKpis: KpiData[] = [
  { label: "Total spend", value: "$42,600" },
  { label: "Reported CPA", value: "$26.40" },
  { label: "True CPA", value: "$38.70", tone: "neg" },
  { label: "True ROAS", value: "2.8×", tone: "pos" },
];

export type FunnelRow = {
  stage: string;
  spend: string;
  inflation: string;
  inflationTone: "amber" | "rose";
  trueCpa: string;
  verdict: string;
  verdictTone: "white" | "rose" | "emerald";
};

export const funnelRows: FunnelRow[] = [
  {
    stage: "Top of funnel",
    spend: "$14,200",
    inflation: "+34%",
    inflationTone: "amber",
    trueCpa: "$437.60",
    verdict: "Expected",
    verdictTone: "white",
  },
  {
    stage: "Mid funnel",
    spend: "$12,800",
    inflation: "+37%",
    inflationTone: "rose",
    trueCpa: "$64.60",
    verdict: "Over-inflated",
    verdictTone: "rose",
  },
  {
    stage: "Bottom funnel",
    spend: "$15,600",
    inflation: "+37%",
    inflationTone: "amber",
    trueCpa: "$19.80",
    verdict: "Efficient",
    verdictTone: "emerald",
  },
];

/* Card D — Account audit */
export const auditPrompt =
  "Audit this Google Ads account as a senior PPC strategist: analyze account structure, budget/spend, keyword performance, ad copy, landing-page drop-offs, audience/device data, and competitors. Give metrics, a letter grade, 5–7 recs (Impact/Effort) and a 30/60/90-day roadmap.";

export const auditSlideStats = [54, 112, 87, 43, 39];
