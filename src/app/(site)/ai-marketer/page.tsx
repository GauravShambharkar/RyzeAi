import { Hero } from "@/features/Ai-Marketer/components/Hero";
import { Testimonials } from "@/features/Ai-Marketer/components/Testimonials";
import { DashboardPreview } from "@/features/Ai-Marketer/components/DashboardPreview";
import { AuditCTA } from "@/features/Ai-Marketer/components/AuditCTA";
import { Features } from "@/features/Ai-Marketer/components/Features";
import { FeatureStack } from "@/features/Ai-Marketer/components/FeatureStack";
import { FAQ } from "@/features/Ai-Marketer/components/FAQ";
import { FinalStats } from "@/features/Ai-Marketer/components/FinalStats";
import { BottomCTA } from "@/features/Ai-Marketer/components/BottomCTA";
import { Press_Coverage } from "@/features/Ai-Marketer/components/Press_Coverage";
import { Footer } from "@/components/Footer";

export default function AiMarketerPage() {
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
        <Press_Coverage />

        {/* 5. LEAD GENERATION CTA */}
        <AuditCTA />

        {/* 6 & 7. FEATURES & BENEFITS */}
        <Features />

        {/* 8 & 9. FULL FEATURE STACK & ENTERPRISE */}
        <FeatureStack />

        {/* 10. FAQ SECTION */}
        <FAQ />

        {/* 12. FINAL CTA (BOTTOM) */}
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
}
