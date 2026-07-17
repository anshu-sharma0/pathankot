"use client";

import { Search, ArrowRight, Mountain, Landmark, TrendingUp } from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { icon: Mountain, label: "Explore Tourism" },
  { icon: Landmark, label: "City Services" },
  { icon: TrendingUp, label: "Local Economy" },
];

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-28 lg:px-8 lg:pt-28 lg:pb-36"
    >
      {/* ── Background decorative orbs ── */}
      <div className="orb top-[-10%] left-[-8%] h-[500px] w-[500px] bg-amber-200 animate-float" />
      <div
        className="orb top-[20%] right-[-5%] h-[400px] w-[400px] bg-sky-200 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="orb bottom-[-15%] left-[30%] h-[350px] w-[350px] bg-rose-200 animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Tag chip */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 shadow-sm backdrop-blur-sm animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
          </span>
          Official City Portal
        </div>

        {/* Heading */}
        <h1
          className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="block">Pathankot City</span>
          <span className="block mt-2 gradient-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
            Gateway to the Hills
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg sm:leading-8 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Where the plains meet the mountains — explore temples, transit connections,
          citizen services, and the vibrant trade heritage of Punjab&apos;s northern gateway.
        </p>

        {/* ── Search bar ── */}
        <div
          className="mx-auto mt-10 max-w-2xl animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <div className="relative flex items-center rounded-2xl bg-white/90 shadow-sm shadow-slate-200/60 ring-1 ring-slate-100 backdrop-blur-sm transition-shadow duration-300 focus-within:shadow-md focus-within:ring-slate-200">
            <Search className="ml-5 h-5 w-5 flex-shrink-0 text-slate-400" />
            <input
              id="hero-search"
              type="text"
              placeholder="Search services, places, contacts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent px-4 py-4 text-sm text-slate-700 placeholder:text-slate-400 outline-none sm:text-base"
            />
            <button
              id="hero-search-btn"
              className="mr-2 flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-amber-200/50 transition-all hover:shadow-md hover:shadow-amber-300/50 active:scale-95"
            >
              <span className="hidden sm:inline">Search</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ── Quick link pills ── */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          {quickLinks.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-white hover:shadow-md active:scale-95 sm:text-sm"
            >
              <Icon className="h-4 w-4 text-slate-500" />
              {label}
            </button>
          ))}
        </div>

        {/* ── Stats row ── */}
        <div
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 animate-fade-in-up"
          style={{ animationDelay: "0.75s" }}
        >
          {[
            { value: "2.1L+", label: "Population" },
            { value: "45+", label: "Heritage Sites" },
            { value: "3", label: "Rail Junctions" },
            { value: "24/7", label: "Citizen Support" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="rounded-xl border border-slate-100/80 bg-white/60 px-4 py-4 backdrop-blur-sm transition-all hover:bg-white/90 hover:shadow-sm"
            >
              <p className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                {value}
              </p>
              <p className="mt-0.5 text-xs font-medium text-slate-400 sm:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
