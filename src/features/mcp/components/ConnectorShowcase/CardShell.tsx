import React from "react";
import { FileText, Share2 } from "lucide-react";

type Props = { docName: string; children: React.ReactNode };

export const CardShell = ({ docName, children }: Props) => (
  <div className="rounded-3xl border border-black/5 bg-white shadow-[0_12px_40px_-16px_rgba(20,20,20,0.12)] overflow-hidden">
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-black/5 text-[11px] text-neutral-500 bg-neutral-50/70">
      <div className="flex items-center gap-1.5">
        <FileText className="w-3.5 h-3.5" />
        <span className="truncate">{docName}</span>
      </div>
      <button className="inline-flex items-center gap-1 rounded-full border border-black/5 bg-white px-2.5 py-1 text-[10px] text-neutral-700 hover:text-neutral-900 hover:shadow-sm transition-all">
        <Share2 className="w-3 h-3" /> Share
      </button>
    </div>
    <div className="p-5">{children}</div>
    <div className="border-t border-black/5 bg-neutral-50/70 px-4 py-2.5 flex items-center justify-between text-[10px] text-neutral-500">
      <span>Claude is AI and can make mistakes. Double-check responses.</span>
      <span className="font-mono text-neutral-600">Opus 4.6</span>
    </div>
  </div>
);
