// Types and prompt helpers for the Dashboard. Real data will flow in from
// GSC / GA4 / Ahrefs once those integrations land; until then the sections
// render empty states.

export type VitalBand = "good" | "needs-improvement" | "poor";

export type WebVital = {
  id: "lcp" | "inp" | "cls";
  label: string;
  valueLabel: string;
  target: string;
  band: VitalBand;
  helper: string;
};

export type Keyword = {
  keyword: string;
  position: number;
  delta: number;
  volume: number;
};

export type IssueSeverity = "critical" | "warning" | "info";

export type Issue = {
  id: string;
  title: string;
  severity: IssueSeverity;
  count: number;
  detail: string;
  category: "technical" | "content" | "meta" | "links";
};

// Turn a clicked dashboard item into a natural-language chat prompt scoped
// to the active domain. Keeps the "AI recommends fixes" UX centralized.

export const promptForVital = (vital: WebVital, domain: string) =>
  `My ${vital.label} on ${domain} is ${vital.valueLabel} (target: ${vital.target}) — currently flagged as "${vital.band}". Walk me through the most impactful fixes, in priority order.`;

export const promptForKeyword = (kw: Keyword, domain: string) => {
  const direction = kw.delta > 0 ? `up ${kw.delta}` : kw.delta < 0 ? `down ${Math.abs(kw.delta)}` : "flat";
  return `For "${kw.keyword}" on ${domain} I'm ranking at position ${kw.position} (${direction} this week, search volume ~${kw.volume}/mo). What's the fastest realistic path to the top 3?`;
};

export const promptForIssue = (issue: Issue, domain: string) =>
  `On ${domain} I have ${issue.count} instance${issue.count === 1 ? "" : "s"} of "${issue.title}" (${issue.severity}). ${issue.detail} How should I fix this?`;
