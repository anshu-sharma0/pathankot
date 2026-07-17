import { ArrowRight, PlayCircle, MapPin, Building, Activity } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full items-center justify-start overflow-hidden pt-16 sm:pt-20"
    >
      {/* ── Background Video ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          {/* PLACEHOLDER VIDEO: Replace the src below with your actual video path (e.g., "/videos/hero-bg.mp4") */}
          <source
            src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ── Dark/Gradient Overlay ── */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-slate-900/95 via-slate-900/70 to-slate-900/20" />

      {/* ── Main Content ── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 md:pb-0">
        <div className="max-w-2xl">
          {/* Tag chip */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-200 backdrop-blur-md animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Official City Portal
          </div>

          {/* Headline */}
          <h1
            className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="block text-slate-100">Pathankot City</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">
              Gateway to the Hills
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="mt-4 sm:mt-6 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg sm:leading-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Where the plains meet the mountains. Explore ancient temples, major transit connections, citizen services, and the vibrant trade heritage of Punjab&apos;s northern gateway.
          </p>

          {/* ── CTA Buttons ── */}
          <div
            className="mt-6 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
            {/* Primary CTA */}
            <Link
              href="/explore"
              className="group flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 sm:px-6 sm:py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/30 transition-all hover:bg-amber-400 hover:shadow-amber-500/50 hover:-translate-y-0.5 active:scale-95"
            >
              Explore City
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/services"
              className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 sm:px-6 sm:py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/30 hover:-translate-y-0.5 active:scale-95"
            >
              <PlayCircle className="h-4 w-4 text-slate-300 transition-colors group-hover:text-white" />
              Citizen Services
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
