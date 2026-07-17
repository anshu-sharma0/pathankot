"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Globe,
  ChevronDown,
  Shield,
  MapPin,
  Building2,
} from "lucide-react";

import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Discover", href: "/discover" },
  { label: "Places to Visit", href: "/places" },
  { label: "Things to Do", href: "/things-to-do" },
  { label: "Plan Trip", href: "/plan-trip" },
  { label: "Support", href: "/support" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "pa">("en");

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ── Slim top utility bar ── */}
      <div className="bg-linear-to-r from-slate-800 via-slate-800 to-slate-700 text-white/90 text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-amber-400" />
              <span className="hidden sm:inline">Punjab, India</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Building2 className="h-3 w-3 text-sky-400" />
              Pathankot Tourism Board
            </span>
          </div>

          {/* Emergency chip */}
          <div className="flex items-center gap-3">
            <a
              href="tel:112"
              id="emergency-chip"
              className="flex items-center gap-1.5 rounded-full bg-red-500/15 px-3 py-0.5 text-red-300 transition-colors hover:bg-red-500/25"
            >
              <Phone className="h-3 w-3 animate-pulse" />
              <span className="font-medium">112</span>
              <span className="hidden sm:inline">Emergency</span>
            </a>
            <a
              href="tel:181"
              className="hidden sm:flex items-center gap-1.5 rounded-full bg-rose-500/15 px-3 py-0.5 text-rose-300 transition-colors hover:bg-rose-500/25"
            >
              <Shield className="h-3 w-3" />
              <span className="font-medium">181</span>
              <span className="hidden md:inline">Women Helpline</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav className="glass border-b border-slate-100/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2.5 group" id="nav-brand">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-orange-600 shadow-md shadow-amber-200/50 transition-transform group-hover:scale-105">
              <span className="text-lg font-black text-white leading-none">P</span>
              {/* 3D lift ring */}
              <div className="absolute -inset-0.5 rounded-xl border border-amber-400/30" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-800 leading-tight">
                Pathankot
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400 leading-none">
                City Portal
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1" id="nav-desktop-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="relative px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 rounded-lg hover:bg-slate-50/80 group"
                >
                  {link.label}
                  <span className="absolute bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-4/5" />
                </Link>
              </li>
            ))}
            {/* Dropdown trigger example */}
            <li>
              <button className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 rounded-lg hover:bg-slate-50/80">
                More
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </li>
          </ul>

          {/* Right section */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              id="lang-toggle"
              onClick={() => setLang(lang === "en" ? "pa" : "en")}
              className="flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition-all hover:shadow-md hover:border-slate-300/80 active:scale-95"
              aria-label={`Switch to ${lang === "en" ? "Punjabi" : "English"}`}
            >
              <Globe className="h-3.5 w-3.5 text-indigo-500" />
              <span className="relative">
                <span
                  className={`transition-all duration-300 ${lang === "en"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 absolute"
                    }`}
                >
                  EN
                </span>
                <span
                  className={`transition-all duration-300 ${lang === "pa"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 absolute"
                    }`}
                >
                  ਪੰ
                </span>
              </span>
              <span className="h-3 w-px bg-slate-200" />
              <span className="text-[10px] font-normal text-slate-400">
                {lang === "en" ? "ਪੰਜਾਬੀ" : "English"}
              </span>
            </button>

            {/* Mobile burger */}
            <button
              id="mobile-menu-toggle"
              className="lg:hidden flex items-center justify-center h-9 w-9 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <ul className="flex flex-col gap-1 px-4 pb-4" id="nav-mobile-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
