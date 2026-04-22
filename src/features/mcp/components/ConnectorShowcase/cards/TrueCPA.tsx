import React from "react";
import { trueCpaKpis, funnelRows } from "@/features/mcp/data/connectorShowcase";
import { CardShell } from "../CardShell";
import { Kpi } from "../Kpi";

const inflationToneMap = { amber: "text-amber-600", rose: "text-rose-600" };
const verdictToneMap = { white: "text-neutral-500", rose: "text-rose-600", emerald: "text-emerald-700" };

export const TrueCPA = () => (
  <CardShell docName="True CPA & ROAS · funnel stage breakdown">
    <div className="text-xs text-neutral-500 italic">
      &quot;What&apos;s my true CPA and ROAS by funnel stage?&quot;
    </div>
    <h4 className="mt-1 text-base font-medium text-neutral-900">True CPA &amp; ROAS by funnel stage</h4>
    <div className="text-[11px] text-neutral-500 mt-0.5">
      Feb 2026 · Google + Meta blended · Deduplicated
    </div>

    <div className="mt-5 grid grid-cols-4 gap-3">
      {trueCpaKpis.map((k) => (
        <Kpi key={k.label} {...k} />
      ))}
    </div>

    <div className="mt-5 rounded-2xl border border-black/5 bg-neutral-50 overflow-hidden">
      <table className="w-full text-[11px]">
        <thead className="text-neutral-500 border-b border-black/5">
          <tr>
            <th className="text-left py-2 px-3 font-normal">Stage</th>
            <th className="text-right py-2 px-3 font-normal">Spend</th>
            <th className="text-right py-2 px-3 font-normal">Inflation</th>
            <th className="text-right py-2 px-3 font-normal">True CPA</th>
            <th className="text-right py-2 px-3 font-normal">Verdict</th>
          </tr>
        </thead>
        <tbody className="text-neutral-800 font-mono">
          {funnelRows.map((r, i) => (
            <tr key={r.stage} className={i < funnelRows.length - 1 ? "border-b border-black/5" : ""}>
              <td className="py-2 px-3">{r.stage}</td>
              <td className="py-2 px-3 text-right">{r.spend}</td>
              <td className={`py-2 px-3 text-right ${inflationToneMap[r.inflationTone]}`}>
                {r.inflation}
              </td>
              <td className="py-2 px-3 text-right">{r.trueCpa}</td>
              <td className={`py-2 px-3 text-right ${verdictToneMap[r.verdictTone]}`}>
                {r.verdict}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </CardShell>
);
