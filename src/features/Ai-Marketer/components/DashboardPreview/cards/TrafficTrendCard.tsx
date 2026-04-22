import React from "react";
import { trafficPoints } from "@/features/Ai-Marketer/data/dashboard";
import { CARD, LABEL } from "../tokens";

const W = 520;
const H = 90;
const MAX = 50;

export const TrafficTrendCard = () => {
  const step = W / (trafficPoints.length - 1);
  const toY = (v: number) => H - (v / MAX) * H;
  const path = trafficPoints.map((v, i) => `${i === 0 ? "M" : "L"} ${i * step} ${toY(v)}`).join(" ");
  const areaPath = `${path} L ${W} ${H} L 0 ${H} Z`;

  return (
    <div className={`${CARD} p-5`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className={LABEL}>Organic traffic</div>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-semibold text-white tracking-tight">48,200</span>
            <span className="text-[11px] font-semibold text-emerald-600">+18.4%</span>
          </div>
        </div>
        <div className="flex gap-1">
          {["7d", "30d", "90d"].map((t) => (
            <span
              key={t}
              className={`text-[11px] px-2 py-0.5 rounded-md font-medium ${
                t === "30d" ? "bg-black text-white" : "text-neutral-400"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-20" preserveAspectRatio="none">
        <defs>
          <linearGradient id="traffic" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(239 84% 67%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(239 84% 67%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#traffic)" />
        <path d={path} fill="none" stroke="hsl(239 84% 67%)" strokeWidth="1.5" />
      </svg>
    </div>
  );
};
