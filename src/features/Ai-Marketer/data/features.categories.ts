import type { AccentName } from "./accents";

export type CategoryData = {
  id: string;
  title: string;
  accent: AccentName;
  items: string[];
};

export const featureCategories: CategoryData[] = [
  {
    id: "01",
    title: "Optimize",
    accent: "blue",
    items: [
      "Bid & budget optimization",
      "ROAS improvement",
      "Dayparting & scheduling",
      "Audience refinement",
      "Placement optimization",
      "Device bid adjustments",
    ],
  },
  {
    id: "02",
    title: "Create",
    accent: "purple",
    items: [
      "Ad creative generation",
      "Headline & copy testing",
      "A/B testing",
      "Dynamic ad variants",
      "Video ad hooks",
      "Responsive search ads",
    ],
  },
  {
    id: "03",
    title: "Audit",
    accent: "amber",
    items: [
      "Wasted spend detection",
      "Negative keyword mining",
      "Quality Score fixes",
      "Conversion tracking audit",
      "Account structure review",
      "Search term analysis",
    ],
  },
  {
    id: "04",
    title: "Report",
    accent: "emerald",
    items: [
      "Slack & Teams alerts",
      "Automated performance reports",
      "Custom dashboards",
      "Budget pacing alerts",
      "Competitor benchmarking",
      "Weekly AI summaries",
    ],
  },
];
