import type { AccentName } from "./accents";

export type StackCardData = {
  id: string;
  tag: string;
  title: string;
  description: string;
  accent: AccentName;
  metric: { label: string; value: string };
  colSpan: string;
};

// Bento layout — zig-zag asymmetry across 12 cols:
// [ 01 span-8 ][ 02 span-4 ]
// [ 03 span-5 ][ 04 span-7 ]
// [ 05 span-7 ][ 06 span-5 ]
export const stackCards: StackCardData[] = [
  {
    id: "01",
    tag: "Forecast",
    title: "Predictive Modeling",
    description: "Agents simulate campaign performance before a single dollar is spent.",
    accent: "blue",
    metric: { label: "Confidence", value: "94.2%" },
    colSpan: "md:col-span-8",
  },
  {
    id: "02",
    tag: "Creative",
    title: "Custom Ad Creatives",
    description: "Visual assets generated from your brand kit in seconds.",
    accent: "purple",
    metric: { label: "Generated", value: "1,284" },
    colSpan: "md:col-span-4",
  },
  {
    id: "03",
    tag: "Technical",
    title: "Autonomous SEO",
    description: "Crawl, diagnose, and fix indexation issues — hands-off.",
    accent: "amber",
    metric: { label: "Uptime", value: "99.97%" },
    colSpan: "md:col-span-5",
  },
  {
    id: "04",
    tag: "Copy",
    title: "Content Generation",
    description: "SEO-ready articles and landing-page copy tuned to your audience.",
    accent: "emerald",
    metric: { label: "Avg rank lift", value: "+4.1" },
    colSpan: "md:col-span-7",
  },
  {
    id: "05",
    tag: "Analytics",
    title: "Real-time Reporting",
    description: "Live dashboard streaming every metric that moves the needle.",
    accent: "rose",
    metric: { label: "Events / sec", value: "12.4K" },
    colSpan: "md:col-span-7",
  },
  {
    id: "06",
    tag: "Optimize",
    title: "Conversion Tests",
    description: "Automated A/B experiments — winners ship themselves.",
    accent: "cyan",
    metric: { label: "Avg lift", value: "+18.6%" },
    colSpan: "md:col-span-5",
  },
];
