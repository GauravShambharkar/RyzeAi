import React from "react";
import { Send } from "lucide-react";
import { LABEL } from "../tokens";

export const ChatPanel = () => (
  <div className="w-[340px] bg-neutral-950 border-l border-neutral-800 flex flex-col">
    <div className={`p-4 border-b border-neutral-800 ${LABEL}`}>Agent Interaction</div>

    <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-neutral-900">
      <div className="bg-neutral-950 p-3 rounded-xl rounded-tr-sm border border-neutral-800 text-xs text-neutral-200 leading-relaxed max-w-[85%] ml-auto">
        Can you optimize for more signups?
      </div>
      <div className="flex gap-2 max-w-[90%]">
        <div className="w-6 h-6 rounded-full bg-black shrink-0 flex items-center justify-center text-white text-[10px] font-semibold">
          R
        </div>
        <div className="bg-neutral-950 p-3 rounded-xl rounded-tl-sm border border-neutral-800 text-xs text-neutral-200 leading-relaxed">
          Signups prioritized. Shifting 15% of budget to lead-gen creatives.{" "}
          <span className="font-semibold text-emerald-600">Est +8% boost.</span>
        </div>
      </div>
    </div>

    <div className="p-3 bg-neutral-950 border-t border-neutral-800">
      <div className="relative">
        <input
          type="text"
          placeholder="Type a command..."
          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-neutral-700"
        />
        <Send size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500" />
      </div>
    </div>
  </div>
);
