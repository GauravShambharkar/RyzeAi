import { Mcp_Hero } from "@/features/mcp/hero";
import { FeatureTrio } from "@/features/mcp/FeatureTrio";
import { ConnectorShowcase } from "@/features/mcp/ConnectorShowcase";
import { Integrations } from "@/features/mcp/Integrations";
import { SetupGuide } from "@/features/mcp/SetupGuide";
import { ResultsCTA } from "@/features/mcp/ResultsCTA";

export default function McpPage() {
  return (
    <div className="min-h-screen bg-[#020502] text-white">
      <main>
        <Mcp_Hero />
        <FeatureTrio />
        <ConnectorShowcase />
        <Integrations />
        <SetupGuide />
        <ResultsCTA />
      </main>
    </div>
  );
}
