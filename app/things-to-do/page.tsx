import CultureSection from "../components/CultureSection";
import ThingsToDoClient from "./ThingsToDoClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Things to Do in Pathankot | Activities & Adventures",
  description: "Discover the best activities, local shopping, food spots, and nature trails in Pathankot.",
};

export default function ThingsToDoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      {/* ── Premium Header ── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-slate-900 z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582400346083-d93540a996c5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-900/60 to-transparent z-10" />

        <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400 backdrop-blur-md animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            Explore the City
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Things to Do in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500">Pathankot</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Immerse yourself in the local lifestyle. From ancient temples and historical forts to local street food and pristine nature trails, discover your next adventure.
          </p>
        </div>
      </section>

      {/* Interactive Activities Client Component */}
      <ThingsToDoClient />

      <CultureSection />
      
    </div>
  );
}
