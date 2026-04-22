import { Hero } from "@/features/Ai-Marketer/Hero";
import { PressCoverage } from "@/features/Ai-Marketer/PressCoverage";
import { Testimonials } from "@/features/Ai-Marketer/Testimonials";
import { DashboardPreview } from "@/features/Ai-Marketer/DashboardPreview";
import { AuditCTA } from "@/features/Ai-Marketer/AuditCTA";
import { Features } from "@/features/Ai-Marketer/Features";
import { FeatureStack } from "@/features/Ai-Marketer/FeatureStack";
import { FAQ, FinalStats, BottomCTA } from "@/features/Ai-Marketer/FooterSections";
import { Press_Coverage } from "@/features/Ai-Marketer/Press_Coverage";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent/30 selection:text-accent-foreground relative">
      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. DASHBOARD PREVIEW (Peeking) */}
        <section className="relative z-20 -mt-[100px] md:-mt-[140px] px-6 md:px-10 max-w-7xl mx-auto flex justify-center">
          <DashboardPreview />
        </section>

        {/* 3. TESTIMONIALS / WALL OF LOVE */}
        <Testimonials />

        {/* 4. PRESS & COVERAGE */}
        {/* <PressCoverage /> */}
        <Press_Coverage />

        {/* 5. LEAD GENERATION CTA */}
        <AuditCTA />

        {/* 6 & 7. FEATURES & BENEFITS */}
        {/* <Features /> */}

        {/* 8 & 9. FULL FEATURE STACK & ENTERPRISE */}
        {/* <FeatureStack /> */}

        {/* 10. FAQ SECTION */}
        <FAQ />

        {/* 12. FINAL CTA (BOTTOM) */}
        <BottomCTA />
      </main>
    </div>
  );
}
