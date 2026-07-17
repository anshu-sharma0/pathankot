import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden pt-16 sm:pt-20 text-center"
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pathankot.webp"
          alt="Pathankot City View"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* ── Dark/Gradient Overlay ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-950/95" />

      {/* ── Main Content ── */}
      <div className="relative z-20 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pb-24 md:pb-0 -mt-20 flex flex-col items-center justify-center">
        {/* Tag chip */}
        <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-widest text-slate-200 backdrop-blur-xl animate-fade-in-up ring-1 ring-white/20 shadow-xl shadow-black/20">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
          </span>
          Official City Portal
        </div>

        {/* Headline */}
        <h1
          className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] animate-fade-in-up drop-shadow-2xl"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="block text-slate-50 drop-shadow-lg">Pathankot City</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 drop-shadow-md">
            Gateway to the Hills
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="mt-6 sm:mt-8 max-w-2xl text-[15px] leading-relaxed text-slate-300 sm:text-lg lg:text-xl sm:leading-8 animate-fade-in-up drop-shadow-md font-medium"
          style={{ animationDelay: "0.3s" }}
        >
          Where the plains meet the mountains. Explore ancient temples, major transit connections, citizen services, and the vibrant trade heritage of Punjab&apos;s northern gateway.
        </p>

        {/* ── CTA Buttons ── */}
        <div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up w-full sm:w-auto"
          style={{ animationDelay: "0.45s" }}
        >
          {/* Primary CTA */}
          <Link
            href="/explore"
            className="group flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-[15px] font-bold text-white shadow-xl shadow-amber-500/25 transition-all duration-300 hover:shadow-amber-500/40 hover:-translate-y-1 active:scale-95 ring-1 ring-amber-400/50"
          >
            Explore City
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/services"
            className="group flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-[15px] font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 active:scale-95 shadow-xl shadow-black/10"
          >
            <PlayCircle className="h-5 w-5 text-amber-400 transition-colors duration-300 group-hover:text-amber-300" />
            Citizen Services
          </Link>
        </div>
      </div>

    </section>
  );
}
