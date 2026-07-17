"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Menu, X, Phone, Globe, ChevronDown, Shield, MapPin,
  Mountain, Compass, Utensils, Calendar, Train, Hotel,
  Map, LifeBuoy, FileText, Receipt, AlertCircle, TrendingUp,
  Factory, BookOpen, Landmark, Waves, Sun,
} from "lucide-react";

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
    id: "explore",
    label: "Explore",
    items: [
      { label: "History & Heritage", href: "/explore/history", icon: Landmark, description: "Rajputs, Mughal era & military legacy" },
      { label: "Top Attractions", href: "/explore/attractions", icon: Mountain, description: "Ranjit Sagar Dam, Mukteshwar Temple" },
      { label: "Culture & Cuisine", href: "/explore/culture", icon: Utensils, description: "Dogra-Punjabi fusion & local food" },
      { label: "Events & Festivals", href: "/explore/events", icon: Calendar, description: "Baisakhi, Lohri & local celebrations" },
    ],
  },
  {
    id: "visit",
    label: "Plan Your Visit",
    items: [
      { label: "Getting Here", href: "/plan/getting-here", icon: Train, description: "Rail, road & air connectivity" },
      { label: "Accommodation", href: "/plan/stay", icon: Hotel, description: "Hotels, resorts & rest houses" },
      { label: "Itineraries", href: "/plan/itineraries", icon: Compass, description: "Curated 1-day & 2-day trips" },
      { label: "Gateway Guides", href: "/plan/gateway", icon: Map, description: "Dalhousie, Dharamshala & Kashmir" },
    ],
  },
  {
    id: "services",
    label: "Citizen Services",
    items: [
      { label: "Pay Bills", href: "/services/payments", icon: Receipt, description: "Water, property tax & utilities" },
      { label: "Certificates", href: "/services/certificates", icon: FileText, description: "Birth, death & marriage certificates" },
      { label: "Grievances", href: "/services/grievances", icon: AlertCircle, description: "Lodge & track civic complaints" },
      { label: "Tourist Support", href: "/services/support", icon: LifeBuoy, description: "Helplines, hospitals & police" },
    ],
  },
  {
    id: "business",
    label: "Business & Economy",
    items: [
      { label: "Why Invest", href: "/business/invest", icon: TrendingUp, description: "Strategic location advantages" },
      { label: "Key Industries", href: "/business/industries", icon: Factory, description: "Litchi, timber, transit logistics" },
      { label: "Tenders & Notices", href: "/business/tenders", icon: BookOpen, description: "Government contracts & notices" },
    ],
  },
];

/* ─── Sub-components ─── */
function MegaMenuPanel({ group, onClose }: { group: NavGroup; onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[520px] rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-300/20 overflow-hidden z-50 animate-fade-in-up">
      <div className="p-4 grid grid-cols-2 gap-1.5">
        {group.items.map(({ label, href, icon: Icon, description }) => (
          <Link
            key={label}
            href={href}
            onClick={onClose}
            className="group flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-slate-50 active:scale-[0.98]"
          >
            <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-100">
              <Icon className="h-4.5 w-4.5 h-[18px] w-[18px]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 leading-tight">{label}</p>
              <p className="text-xs text-slate-400 mt-0.5 leading-snug">{description}</p>
            </div>
          </Link>
        ))}
      </div>
      {/* Footer strip */}
      <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400">Pathankot City Portal</span>
        <span className="text-xs font-medium text-amber-600">📍 Punjab, India</span>
      </div>
    </div>
  );
}

/* ─── Main Navbar ─── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [lang, setLang] = useState<"en" | "pa">("en");
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full" ref={navRef}>
      {/* ── Slim utility bar ── */}
      <div className="bg-slate-900 text-white/80 text-xs hidden sm:block overflow-hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Sun className="h-3 w-3 text-amber-400" />
              <span>Best time to visit: Oct – Mar</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-sky-400" />
              <span>Punjab, India • 145001</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Waves className="h-3 w-3 text-emerald-400" />
              <span>Chakki River Basin</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:112" className="flex items-center gap-1.5 rounded-full bg-red-500/15 px-3 py-0.5 text-red-300 transition-colors hover:bg-red-500/25">
              <Phone className="h-3 w-3 animate-pulse" />
              <span className="font-medium">112</span>
              <span>Emergency</span>
            </a>
            <a href="tel:181" className="flex items-center gap-1.5 rounded-full bg-rose-500/15 px-3 py-0.5 text-rose-300 transition-colors hover:bg-rose-500/25">
              <Shield className="h-3 w-3" />
              <span>181 Women</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <nav className="glass border-b border-slate-200/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group flex-shrink-0 min-w-0" id="nav-brand">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-orange-600 shadow-md shadow-amber-200/50 transition-transform group-hover:scale-105">
              <span className="text-lg font-black text-white leading-none">P</span>
              <div className="absolute -inset-0.5 rounded-xl border border-amber-400/30" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-base font-bold tracking-tight text-slate-800 leading-tight truncate">Pathankot</span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400 leading-none">City Portal</span>
            </div>
          </Link>

          {/* ── Desktop Mega-menu links ── */}
          <ul className="hidden lg:flex items-center gap-0.5" id="nav-desktop-links">
            {navGroups.map((group) => (
              <li key={group.id} className="relative">
                <button
                  onClick={() => setOpenGroup(openGroup === group.id ? null : group.id)}
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                    openGroup === group.id
                      ? "text-amber-700 bg-amber-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/80"
                  }`}
                >
                  {group.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openGroup === group.id ? "rotate-180 text-amber-600" : ""}`} />
                </button>
                {openGroup === group.id && (
                  <MegaMenuPanel group={group} onClose={() => setOpenGroup(null)} />
                )}
              </li>
            ))}
            <li>
              <Link href="/media" className="relative px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 rounded-lg hover:bg-slate-50/80 group flex">
                Gallery
                <span className="absolute top-1 right-1 flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"/><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-500"/></span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="relative px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 rounded-lg hover:bg-slate-50/80">
                Contact
              </Link>
            </li>
          </ul>

          {/* Right section */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              id="lang-toggle"
              onClick={() => setLang(lang === "en" ? "pa" : "en")}
              className="hidden sm:flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition-all hover:shadow-md hover:border-slate-300/80 active:scale-95"
              aria-label={`Switch to ${lang === "en" ? "Punjabi" : "English"}`}
            >
              <Globe className="h-3.5 w-3.5 text-indigo-500" />
              <span>{lang === "en" ? "EN" : "ਪੰ"}</span>
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

        {/* ── Mobile drawer ── */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[85vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"}`}>
          <div className="border-t border-slate-100 divide-y divide-slate-100" id="nav-mobile-links">
            {navGroups.map((group) => (
              <div key={group.id}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === group.id ? null : group.id)}
                  className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-slate-700"
                >
                  {group.label}
                  <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${mobileExpanded === group.id ? "rotate-180" : ""}`} />
                </button>
                {mobileExpanded === group.id && (
                  <div className="pb-2 px-4 space-y-1">
                    {group.items.map(({ label, href, icon: Icon }) => (
                      <Link
                        key={label}
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                      >
                        <Icon className="h-4 w-4 flex-shrink-0 text-slate-400" />
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center gap-2 px-5 py-3.5">
              <a href="tel:112" className="flex-1 flex items-center justify-center gap-1.5 rounded-full bg-red-50 border border-red-100 py-2 text-xs font-semibold text-red-600">
                <Phone className="h-3.5 w-3.5" /> 112 Emergency
              </a>
              <a href="tel:181" className="flex-1 flex items-center justify-center gap-1.5 rounded-full bg-rose-50 border border-rose-100 py-2 text-xs font-semibold text-rose-600">
                <Shield className="h-3.5 w-3.5" /> 181 Women
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
