import Link from "next/link";
import { Heart, MapPin, Phone, Mail, Camera, Share2, Video, Train, AlertTriangle } from "lucide-react";
import Image from "next/image";

const footerColumns = [
  {
    title: "Discover Pathankot",
    links: [
      { label: "City Profile", href: "/explore" },
      { label: "Geography & Climate", href: "/explore/geography" },
      { label: "Top Attractions", href: "/tourism/attractions" },
    ],
  },
  {
    title: "Plan & Support",
    links: [
      { label: "Travel & Itineraries", href: "/plan" },
      { label: "Citizen Directory", href: "/support" },
      { label: "Contact Us", href: "/contact" },
    ],
  }
];

const emergencyContacts = [
  { label: "Police / Emergency", number: "112" },
  { label: "Women Helpline", number: "181" },
  { label: "Ambulance", number: "108" },
  { label: "Fire Brigade", number: "101" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200/60 bg-slate-950 text-slate-400">
      {/* ── Main grid ── */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand + info column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex gap-2 items-center mb-4 group">
              <Image
                src="/logo.svg"
                alt="Pathankot Logo"
                width={60}
                height={60}
                className="rounded-xl"
              />
              <div>
                <p className="text-sm font-bold text-white">Pathankot</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500">City Portal</p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Punjab&apos;s <strong className="text-amber-500 font-medium">Gateway to the Himalayas</strong> — where the plains meet the mountains. Connecting heritage, culture, and community since 1947.
            </p>

            {/* Contact details */}
            <div className="space-y-2.5 text-xs">
              <p className="flex items-center gap-2.5 text-slate-500">
                <MapPin className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                District Pathankot, Punjab – 145001
              </p>
              <p className="flex items-center gap-2.5 text-slate-500">
                <Phone className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                0186-222-4xxx
              </p>
              <p className="flex items-center gap-2.5 text-slate-500">
                <Mail className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                info@pathankot.city
              </p>
            </div>

          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-8">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 mb-5 border-b border-slate-800 pb-3">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-sm text-slate-400 transition-colors hover:text-amber-400 flex items-center gap-2"
                      >
                        <span className="h-px w-2 bg-slate-700 transition-all group-hover:w-4 group-hover:bg-amber-400"></span>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Emergency strip ── */}
        <div className="mt-12 rounded-2xl border border-red-900/30 bg-red-950/20 p-5">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-4 w-4 text-red-400" />
            <h4 className="text-sm font-semibold text-red-300">Emergency Helplines</h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {emergencyContacts.map(({ label, number }) => (
              <a
                key={label}
                href={`tel:${number}`}
                className="flex flex-col items-center rounded-xl bg-slate-900/60 border border-slate-800 py-3 px-4 transition-all hover:border-red-800/50 hover:bg-red-950/30"
              >
                <span className="text-2xl font-black text-red-400 font-mono">{number}</span>
                <span className="text-[10px] text-slate-500 mt-0.5 text-center leading-tight">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-600 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Pathankot City Portal. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="h-3 w-3 text-rose-500" /> for Pathankot
          </p>
        </div>
      </div>
    </footer>
  );
}
