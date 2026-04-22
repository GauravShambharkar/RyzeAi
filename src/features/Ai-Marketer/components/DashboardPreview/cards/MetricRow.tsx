import React from "react";
import { topMetrics } from "@/features/Ai-Marketer/data/dashboard";
import { MetricCard } from "./MetricCard";

export const MetricRow = () => (
  <div className="grid grid-cols-3 gap-4">
    {topMetrics.map((m) => (
      <MetricCard key={m.label} {...m} />
    ))}
  </div>
);
