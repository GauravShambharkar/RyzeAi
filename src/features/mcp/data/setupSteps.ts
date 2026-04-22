export type StepIcon = "Settings" | "Plug" | "ShieldCheck" | "Check" | "Play";

export type SetupStep = {
  label: string;
  title: string;
  iconName: StepIcon;
  bullets: string[];
  previewTitle: string;
  previewHighlight: string;
};

export const setupSteps: SetupStep[] = [
  {
    label: "Step 1",
    title: "Go to Settings",
    iconName: "Settings",
    bullets: [
      "Open claude.ai in your browser",
      "Click your profile icon",
      "Select Settings",
    ],
    previewTitle: "Claude · Profile menu",
    previewHighlight: "Settings",
  },
  {
    label: "Step 2",
    title: "Open Connectors",
    iconName: "Plug",
    bullets: ["Go to Integrations", "Click Browse connectors", "Search for Ryze MCP"],
    previewTitle: "Settings · Integrations",
    previewHighlight: "Ryze MCP",
  },
  {
    label: "Step 3",
    title: "Authorize access",
    iconName: "ShieldCheck",
    bullets: [
      "Sign in with Google Ads / Meta / GA4",
      "Review requested permissions",
      "Approve the connection",
    ],
    previewTitle: "Consent screen",
    previewHighlight: "Grant access",
  },
  {
    label: "Step 4",
    title: "Pick accounts",
    iconName: "Check",
    bullets: [
      "Select the ad accounts to sync",
      "Choose default attribution windows",
      "Save",
    ],
    previewTitle: "Account picker",
    previewHighlight: "3 selected",
  },
  {
    label: "Step 5",
    title: "Start chatting",
    iconName: "Play",
    bullets: [
      `Ask "How's last week doing?"`,
      "Schedule recurring reports",
      "Let Claude take it from here",
    ],
    previewTitle: "Claude · Chat",
    previewHighlight: "Opus 4.6",
  },
];
