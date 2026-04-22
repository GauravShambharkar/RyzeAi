import React from "react";

export const HelpStrip = () => (
  <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-neutral-500">
    <span>Need help?</span>
    <a href="mailto:hello@get-ryze.ai" className="text-[#e35a32] hover:underline font-medium">
      hello@get-ryze.ai
    </a>
    <span className="text-neutral-400">/</span>
    <span>Text/WhatsApp</span>
    <a href="tel:+16314805598" className="text-[#e35a32] hover:underline font-medium">
      +1 631 480 55 98
    </a>
  </div>
);
