import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { DashboardPreview } from "@/components/dashboard-preview";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent/30 selection:text-accent-foreground relative">
      {/* Navbar stays fixed as per its own component logic */}
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-1">
        <Hero />
        <section className="min-h-screen flex items-center justify-center bg-background">
          <DashboardPreview />
        </section>
      </main>
    </div>
  );
}
