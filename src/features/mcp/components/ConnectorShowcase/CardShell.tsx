import React from "react";
import { FileText, Share2 } from "lucide-react";

type Props = { docName: string; children: React.ReactNode };

export const CardShell = ({ docName, children }: Props) => (
  <div className="border border-white/10 bg-[#0b0b0b]/80 backdrop-blur-sm overflow-hidden">
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 text-[11px] text-white/50">
      <div className="flex items-center gap-1.5">
        <FileText className="w-3.5 h-3.5" />
        <span className="truncate">{docName}</span>
      </div>
      <button className="inline-flex items-center gap-1 border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/70 hover:text-white">
        <Share2 className="w-3 h-3" /> Share
      </button>
    </div>
    <div className="p-5">{children}</div>
    <div className="border-t border-white/5 px-4 py-2.5 flex items-center justify-between text-[10px] text-white/40">
      <span>Claude is AI and can make mistakes. Double-check responses.</span>
      <span className="font-mono text-white/50">Opus 4.6</span>
    </div>
  </div>
);
