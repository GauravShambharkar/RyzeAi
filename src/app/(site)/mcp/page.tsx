import { Mcp_Hero } from "@/features/mcp/components/hero";
import { FeatureTrio } from "@/features/mcp/components/FeatureTrio";
import { ConnectorShowcase } from "@/features/mcp/components/ConnectorShowcase";
import { Integrations } from "@/features/mcp/components/Integrations";
import { SetupGuide } from "@/features/mcp/components/SetupGuide";
import { ResultsCTA } from "@/features/mcp/components/ResultsCTA";
import { Footer } from "@/components/Footer";

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
      <Footer />
    </div>
  );
}
