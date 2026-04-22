export type StatRow = { label: string; value: string };
export type StatGroup = { group: string; rows: StatRow[] };

export const resultsStats: StatGroup[] = [
  {
    group: "Paid ads",
    rows: [
      { label: "Avg. client ROAS", value: "1.3×" },
      { label: "Revenue driven", value: "$0.9M" },
    ],
  },
  {
    group: "SEO",
    rows: [
      { label: "Organic visits driven", value: "5.3M" },
      { label: "Keywords on page 1", value: "48k+" },
    ],
  },
  {
    group: "Websites",
    rows: [
      { label: "Conversion rate lift", value: "+10%" },
      { label: "Time on site", value: "+13%" },
    ],
  },
];

export const resultsLastUpdated = "Apr 21, 2026";
