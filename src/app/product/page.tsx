"use client";

import Hero from "@/components/Hero";
import BoxReveal from "@/components/BoxReveal";
import FeatureGrid from "@/components/FeatureGrid";
import AISection from "@/components/AISection";
import NetworkGraph from "@/components/NetworkGraph";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/ui/SectionReveal";
import PageHeader from "@/components/layouts/PageHeader";

export default function ProductPage() {
  return (
    <div className="flex flex-col items-center w-full bg-black min-h-screen pt-24">
      {/* Product Hero */}
      <SectionReveal>
        <PageHeader 
          title="The All-in-One Workspace"
          description="Reflect brings all your notes, ideas, and meetings into one unified space. Designed for speed, security, and clarity."
          badge="Product Tour"
        />
      </SectionReveal>

      {/* Feature Deep Dive */}
      <div className="w-full max-w-6xl px-4 py-20 space-y-32">
        
        {/* Feature 1 */}
        <SectionReveal>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
               <h3 className="text-3xl font-bold text-white mb-4">Instant Capture</h3>
               <p className="text-lg text-slate-400">
                 Native apps for iOS, Mac, and Web ensure you can capture thoughts the moment they strike. Offline support included.
               </p>
            </div>
            <div className="flex-1 h-[400px] glass-card rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/5" />
          </div>
        </SectionReveal>

        {/* Feature 2 */}
        <SectionReveal>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
               <h3 className="text-3xl font-bold text-white mb-4">Networked Thought</h3>
               <p className="text-lg text-slate-400">
                 No folders, just links. Create a web of ideas that grows with your knowledge. Backlinks are created automatically.
               </p>
            </div>
            <div className="flex-1 h-[400px] glass-card rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-white/5" />
          </div>
        </SectionReveal>

      </div>
      
      <Footer />
    </div>
  );
}
