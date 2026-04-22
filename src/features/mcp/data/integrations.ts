export type IntegrationLogo = {
  label: string;
  src: string;
  invert?: boolean;
};

export const aiTools: IntegrationLogo[] = [
  { label: "Claude", src: "/services/claude_logo.png" },
  { label: "ChatGPT", src: "/services/ChatGPT-Logo.png", invert: true },
  { label: "Cursor", src: "/services/cursor-logo.png", invert: true },
];

export const adAccounts: IntegrationLogo[] = [
  { label: "Google Ads", src: "/services/google_ads.avif" },
  { label: "Meta Ads", src: "/services/meta.avif" },
  { label: "Google Analytics", src: "/services/google-analytics.svg" },
];
