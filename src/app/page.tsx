import Hero from "@/components/Hero";
import BoxReveal from "@/components/BoxReveal";
import FeatureGrid from "@/components/FeatureGrid";
import AISection from "@/components/AISection";
import NetworkGraph from "@/components/NetworkGraph";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <BoxReveal />
      <FeatureGrid />
      <AISection />
      <NetworkGraph />
      <SecuritySection />
      <Footer />
    </div>
  );
}
