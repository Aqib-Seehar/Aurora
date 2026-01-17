import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-[160px] pb-[80px]">
      <div className="container">
        {/* Content wrapper - centered with max-width */}
        <div className="max-w-[800px] mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[rgba(168,85,247,0.3)] bg-[rgba(168,85,247,0.1)]">
            <Sparkles className="w-4 h-4 text-[#A855F7]" />
            <span className="text-sm text-[#E2E8F0]">
              New: Our AI integration just landed
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[72px] leading-[1.1] font-bold tracking-tight text-white mb-4">
            Think better with Aurora
          </h1>

          {/* Subtext */}
          <p className="text-[20px] leading-[1.5] text-[#94A3B8]">
            Never miss a note, idea or connection.
          </p>
        </div>
      </div>
    </section>
  );
}
