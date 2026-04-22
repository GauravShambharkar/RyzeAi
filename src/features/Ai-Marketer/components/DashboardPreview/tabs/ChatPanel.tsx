import React from "react";
import { Send } from "lucide-react";
import { LABEL } from "../tokens";

export const ChatPanel = () => (
  <div className="w-[340px] bg-white border-l border-black/5 flex flex-col">
    <div className={`p-4 border-b border-black/5 ${LABEL}`}>Agent Interaction</div>

    <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-neutral-50">
      <div className="bg-white p-3 rounded-2xl rounded-tr-sm border border-black/5 text-xs text-neutral-800 leading-relaxed max-w-[85%] ml-auto shadow-sm">
        Can you optimize for more signups?
      </div>
      <div className="flex gap-2 max-w-[90%]">
        <div className="w-6 h-6 rounded-full bg-neutral-900 shrink-0 flex items-center justify-center text-white text-[10px] font-semibold">
          R
        </div>
        <div className="bg-white p-3 rounded-2xl rounded-tl-sm border border-black/5 text-xs text-neutral-800 leading-relaxed shadow-sm">
          Signups prioritized. Shifting 15% of budget to lead-gen creatives.{" "}
          <span className="font-semibold text-emerald-700">Est +8% boost.</span>
        </div>
      </div>
    </div>

    <div className="p-3 bg-white border-t border-black/5">
      <div className="relative">
        <input
          type="text"
          placeholder="Type a command..."
          className="w-full bg-neutral-50 border border-black/5 rounded-full px-4 py-2 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
        />
        <Send size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
      </div>
    </div>
  </div>
);
