import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { PressCoverage } from "@/components/PressCoverage/PressCoverage";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { DashboardPreview } from "@/components/DashboardPreview/DashboardPreview";
import { AuditCTA } from "@/components/AuditCTA/AuditCTA";
import { Features } from "@/components/Features/Features";
import { FeatureStack } from "@/components/FeatureStack/FeatureStack";
import { FAQ, FinalStats, BottomCTA } from "@/components/FooterSections/FooterSections";
import { Press_Coverage } from "@/components/Press_Coverage/Press_Coverage";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent/30 selection:text-accent-foreground relative">
      <Navbar />

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
