import Hero from "@/components/Hero";
import BoxReveal from "@/components/BoxReveal";
import FeatureGrid from "@/components/FeatureGrid";
import AISection from "@/components/AISection";
import NetworkGraph from "@/components/NetworkGraph";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/ui/SectionReveal";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-black">
      <Hero />
      
      {/* Overlap Wrapper: Scrolls OVER the sticky Hero */}
      <div className="relative z-10 w-full bg-black -mt-[100vh]">
        <SectionReveal>
          <BoxReveal />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <FeatureGrid />
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <AISection />
        </SectionReveal>

        <SectionReveal>
          <NetworkGraph />
        </SectionReveal>

        <SectionReveal>
          <SecuritySection />
        </SectionReveal>

        <Footer />
      </div>
    </div>
  );
}
