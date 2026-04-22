export type FinalStat = {
  value: string;
  label: string;
  sub: string;
  star?: boolean;
};

export const finalStats: FinalStat[] = [
  { value: "$250M+", label: "Ad spend managed", sub: "Across Google, Meta, TikTok" },
  { value: "2,000+", label: "Scale-ups & agencies", sub: "From seed to public" },
  { value: "4.8/5", label: "Trustpilot rating", sub: "Based on 1,200+ reviews", star: true },
];
