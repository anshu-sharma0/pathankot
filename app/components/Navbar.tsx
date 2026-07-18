"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Globe, ChevronDown, Shield, MapPin, Mountain, Compass, Utensils, Train, Map as MapIcon, FileText, Landmark, Waves, Sun, Leaf, Activity, Map, Clock } from "lucide-react";
import WeatherWidget from "./WeatherWidget";
import { formatDate } from "../utils/formatDate";
import Image from "next/image";
import MegaMenuPanel from "./MegaMenuPanel";

/* ─── Types ─── */
interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  description: string;
}

interface NavGroup {
  id: string;
  label: string;
  items: NavItem[];
}

/* ─── Mega-menu data ─── */
const navGroups: NavGroup[] = [
  {
    id: "tourism",
    label: "Tourism & Places",
    items: [
      {
        label: "Tourism Guide",
        href: "/tourism",
        icon: Compass,
        description: "Discover temples, nature trails & local attractions",
      },
      {
        label: "Top Attractions",
        href: "/tourism/attractions",
        icon: Mountain,
        description: "Explore the city's most iconic landmarks",
      },
      {
        label: "Things to Do",
        href: "/things-to-do",
        icon: Activity,
        description: "Food, shopping & unforgettable experiences",
      },
    ],
  },
  {
    id: "explore",
    label: "City Profile",
    items: [
      {
        label: "Explore Overview",
        href: "/explore",
        icon: Globe,
        description: "Everything you need to know about Pathankot",
      },
      {
        label: "History & Heritage",
        href: "/explore/history",
        icon: Landmark,
        description: "Journey through centuries of rich heritage",
      },
      {
        label: "Environment & Ecology",
        href: "/explore/environment",
        icon: Leaf,
        description: "Forests, rivers, wildlife & natural ecosystems",
      },
      {
        label: "Geography & Stats",
        href: "/explore/geography",
        icon: Map,
        description: "Location, demographics & key regional facts",
      },
    ],
  },
  {
    id: "planning",
    label: "Planning & Support",
    items: [
      {
        label: "Plan Overview",
        href: "/plan",
        icon: MapPin,
        description: "Travel tips, itineraries & visitor essentials",
      },
      {
        label: "Citizen Services",
        href: "/services",
        icon: FileText,
        description: "Important contacts & public services",
      },
    ],
  },
];


/* ─── Main Navbar ─── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [lang, setLang] = useState<"en" | "pa">("en");
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ── Slim utility bar ── */}
      <div className="bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 text-slate-300 text-xs overflow-hidden border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] font-medium">

          {/* Left Side */}
          <div className="flex items-center gap-6">
            <WeatherWidget variant="compact" />

            <div className="flex lg:hidden items-center gap-4">
              <a
                href="tel:112"
                className="flex items-center gap-1.5 rounded-full bg-red-500/10 px-3.5 py-1 text-red-400 transition-all hover:bg-red-500/20 hover:text-red-300 border border-red-500/10"
              >
                <Phone className="h-3.5 w-3.5 animate-pulse" />
                <span className="font-bold tracking-wider">112</span>
                <span className="text-[11px] uppercase tracking-wider opacity-80">
                  Emergency
                </span>
              </a>

              <a
                href="tel:181"
                className="flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3.5 py-1 text-rose-400 transition-all hover:bg-rose-500/20 hover:text-rose-300 border border-rose-500/10"
              >
                <Shield className="h-3.5 w-3.5" />
                <span className="font-bold tracking-wider">181</span>
                <span className="text-[11px] uppercase tracking-wider opacity-80">
                  Women Support
                </span>
              </a>
            </div>
          </div>

          {/* Right Side (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <Clock className="h-3.5 w-3.5 text-amber-400" />
              <span>{formatDate(new Date())}</span>
            </span>

            <div className="h-3 w-px bg-slate-700/50"></div>

            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <MapPin className="h-3.5 w-3.5 text-sky-400" />
              <span>Punjab, India • 145001</span>
            </span>
          </div>

        </div>
      </div>

      <header className="sticky top-0 z-50 w-full transition-all duration-300" ref={navRef}>
        {/* ── Main nav bar ── */}
        <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] supports-[backdrop-filter]:bg-white/60">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 sm:px-6 lg:px-8">
            {/* Brand */}
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0 group"
            >
              <div className="w-14 h-14 flex items-center justify-center transition-transform">
                <Image
                  src="/logo.svg"
                  alt="Pathankot Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className="text-xl font-black tracking-tight bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent leading-none mb-0.5">
                  Pathankot
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600/90">
                  City Portal
                </span>
              </div>
            </Link>

            {/* ── Desktop Mega-menu links ── */}
            <ul className="hidden lg:flex items-center gap-1.5" id="nav-desktop-links">
              {navGroups.map((group) => (
                <li key={group.id} className="relative">
                  <button
                    onClick={() => setOpenGroup(openGroup === group.id ? null : group.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${openGroup === group.id
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                  >
                    {group.label}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openGroup === group.id ? "rotate-180 text-amber-400" : "text-slate-400"}`} />
                  </button>
                  {openGroup === group.id && (
                    <MegaMenuPanel group={group} onClose={() => setOpenGroup(null)} />
                  )}
                </li>
              ))}
              <div className="w-px h-6 bg-slate-200 mx-1"></div>
              <li>
                <Link href="/support" className="relative px-4 py-2 text-sm font-semibold text-slate-600 transition-all duration-300 hover:text-slate-900 rounded-full hover:bg-slate-100 flex items-center">
                  Support
                </Link>
              </li>
              {/* <li>
                <Link href="/contact" className="relative px-4 py-2 text-sm font-semibold text-slate-600 transition-all duration-300 hover:text-slate-900 rounded-full hover:bg-slate-100 flex items-center">
                  Contact
                </Link>
              </li> */}
            </ul>

            {/* Right section */}
            <div className="flex items-center gap-3">
              {/* Language toggle */}
              <button
                id="lang-toggle"
                onClick={() => setLang(lang === "en" ? "pa" : "en")}
                className="hidden sm:flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:bg-slate-50 active:scale-95 ring-1 ring-slate-900/5"
                aria-label={`Switch to ${lang === "en" ? "Punjabi" : "English"}`}
              >
                <Globe className="h-4 w-4 text-indigo-600" />
                <span>{lang === "en" ? "EN" : "ਪੰ"}</span>
              </button>

              {/* Mobile burger */}
              <button
                id="mobile-menu-toggle"
                className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 border border-transparent hover:border-slate-200 active:scale-95"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* ── Mobile drawer ── */}
          <div className={`lg:hidden absolute top-full left-0 right-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-out border-b border-slate-200/50 ${mobileOpen ? "max-h-[85vh] opacity-100 overflow-y-auto translate-y-0" : "max-h-0 opacity-0 border-transparent -translate-y-2 pointer-events-none"}`}>
            <div className="py-4" id="nav-mobile-links">
              {navGroups.map((group) => (
                <div key={group.id} className="bg-slate-50/50 rounded-2xl overflow-hidden border border-slate-100">
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === group.id ? null : group.id)}
                    className="w-full flex items-center justify-between px-5 py-3 text-[15px] font-bold text-slate-800 transition-colors hover:bg-slate-100/50"
                  >
                    {group.label}
                    <div className={`p-1 rounded-full transition-colors ${mobileExpanded === group.id ? "bg-amber-100 text-amber-600" : "bg-slate-100 text-slate-500"}`}>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileExpanded === group.id ? "rotate-180" : ""}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${mobileExpanded === group.id ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="pb-3 px-3 space-y-1">
                      {group.items.map(({ label, href, icon: Icon }) => (
                        <Link
                          key={label}
                          href={href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3.5 px-4 py-1 rounded-xl text-[14px] font-semibold text-slate-600 hover:bg-white hover:text-amber-700 hover:shadow-sm transition-all border border-transparent hover:border-slate-200/60"
                        >
                          <div className="p-1.5 rounded-lg bg-slate-100 text-slate-500">
                            <Icon className="h-4 w-4 shrink-0" />
                          </div>
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-2 p-4">
                <Link href="/support" className="flex items-center justify-center px-4 py-3 text-[14px] font-bold text-slate-700 transition-colors bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200/50">
                  Support
                </Link>
                {/* <Link href="/contact" className="flex items-center justify-center px-4 py-3 text-[14px] font-bold text-slate-700 transition-colors bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200/50">
                  Contact
                </Link> */}
              </div>
              <div className="flex flex-col gap-2 px-4">
                <a href="tel:112" className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-50 border border-red-100 py-3 text-[14px] font-bold text-red-600 shadow-sm transition-active hover:bg-red-100">
                  <Phone className="h-4 w-4" /> 112 Emergency
                </a>
                <a href="tel:181" className="w-full flex items-center justify-center gap-2 rounded-xl bg-rose-50 border border-rose-100 py-3 text-[14px] font-bold text-rose-600 shadow-sm transition-active hover:bg-rose-100">
                  <Shield className="h-4 w-4" /> 181 Women Support
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
