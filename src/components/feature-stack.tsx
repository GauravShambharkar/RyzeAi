"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  BarChart3, 
  Target, 
  FileSearch, 
  PenTool, 
  Users, 
  ShieldCheck, 
  LineChart 
} from "lucide-react";

const stackItems = [
  {
    title: "Predictive Modeling",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "AI forecasts performance before you spend a single dollar.",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Custom Ad Creatives",
    icon: <PenTool className="w-6 h-6" />,
    description: "High-converting visual assets generated in seconds.",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Technical SEO",
    icon: <FileSearch className="w-6 h-6" />,
    description: "Autonomous crawling and fixing of indexation issues.",
    color: "bg-amber-500/10 text-amber-500"
  },
  {
    title: "Content Gen",
    icon: <PenTool className="w-6 h-6" />,
    description: "SEO-optimized articles and landing page copy that ranks.",
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    title: "Real-time Reporting",
    icon: <LineChart className="w-6 h-6" />,
    description: "Live dashboard with deep insights into every metric.",
    color: "bg-rose-500/10 text-rose-500"
  },
  {
    title: "Conversion Optimization",
    icon: <Target className="w-6 h-6" />,
    description: "A/B testing running automatically on your website.",
    color: "bg-cyan-500/10 text-cyan-500"
  }
];

export const FeatureStack = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-display mb-6">Everything built for <span className="italic">performance</span></h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Our specialized agents handle every aspect of your growth stack, from creative production to technical optimization.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {stackItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-secondary/10 border border-border/50 hover:bg-secondary/20 transition-all group flex flex-col"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-display mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="bg-[#0f1115] text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
           <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px] group-hover:blur-[120px] transition-all" />

           <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent mb-8">
                 <Zap className="w-4 h-4 fill-current" />
                 <span className="text-xs font-bold uppercase tracking-widest">Scale Edition</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display mb-8">Ready for agencies and enterprises</h2>
              <div className="grid sm:grid-cols-2 gap-10 mb-12">
                 <div>
                    <h3 className="text-lg font-display mb-2 flex items-center gap-2">
                       <ShieldCheck className="w-5 h-5 text-accent" />
                       White-label Reports
                    </h3>
                    <p className="text-white/50 text-sm font-body leading-relaxed">Present Ryze insights as your own with fully customizable branding.</p>
                 </div>
                 <div>
                    <h3 className="text-lg font-display mb-2 flex items-center gap-2">
                       <Users className="w-5 h-5 text-accent" />
                       Team Collaboration
                    </h3>
                    <p className="text-white/50 text-sm font-body leading-relaxed">Manage permissions and workflows for large marketing teams centrally.</p>
                 </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black rounded-full px-8 py-4 font-bold font-display uppercase tracking-widest hover:bg-white/90 transition-colors">
                   Get enterprise access
                </button>
                <button className="bg-white/5 border border-white/10 text-white rounded-full px-8 py-4 font-bold font-display uppercase tracking-widest hover:bg-white/10 transition-colors">
                   View case studies
                </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
