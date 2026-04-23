"use client";

import React from "react";
import { AlertCircle, X } from "lucide-react";

type Props = {
  message: string;
  onDismiss: () => void;
};

export const ChatError = ({ message, onDismiss }: Props) => (
  <div className="flex items-start gap-3">
    <div className="h-8 w-8 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-600 shrink-0">
      <AlertCircle className="w-3.5 h-3.5" />
    </div>
    <div className="flex-1 max-w-[85%] md:max-w-[55%] rounded-2xl rounded-tl-md border border-red-200 bg-red-50 px-4 py-3 text-xs md:text-sm text-red-700 leading-relaxed">
      <div className="flex items-start justify-between gap-3">
        <span>{message}</span>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss error"
          className="shrink-0 p-1 -m-1 rounded-md text-red-400 hover:text-red-700 hover:bg-red-100 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  </div>
);
