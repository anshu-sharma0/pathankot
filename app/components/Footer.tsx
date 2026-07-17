import Link from "next/link";
import { Heart, MapPin, Phone, Mail, Camera, Share2, Video, Train, AlertTriangle } from "lucide-react";

const footerColumns = [
  {
    title: "Explore Pathankot",
    links: [
      { label: "History & Heritage", href: "/explore/history" },
      { label: "Top Attractions", href: "/explore/attractions" },
      { label: "Culture & Cuisine", href: "/explore/culture" },
      { label: "Events & Festivals", href: "/explore/events" },
    ],
  },
  {
    title: "Plan Your Visit",
    links: [
      { label: "Getting Here", href: "/plan/getting-here" },
      { label: "Accommodation", href: "/plan/stay" },
      { label: "Itineraries", href: "/plan/itineraries" },
      { label: "Gateway Guides", href: "/plan/gateway" },
    ],
  },
  {
    title: "Citizen Services",
    links: [
      { label: "Pay Bills", href: "/services/payments" },
      { label: "Certificates", href: "/services/certificates" },
      { label: "Lodge Grievance", href: "/services/grievances" },
      { label: "Tourist Support", href: "/services/support" },
    ],
  },
  {
    title: "Business & More",
    links: [
      { label: "Why Invest", href: "/business/invest" },
      { label: "Key Industries", href: "/business/industries" },
      { label: "Tenders & Notices", href: "/business/tenders" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
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
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:gap-10">
          {/* Brand + info column (2-wide) */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-orange-600 shadow-md">
                <span className="text-base font-black text-white">P</span>
              </div>
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
                <MapPin className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" />
                District Pathankot, Punjab – 145001
              </p>
              <p className="flex items-center gap-2.5 text-slate-500">
                <Phone className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" />
                0186-222-4xxx
              </p>
              <p className="flex items-center gap-2.5 text-slate-500">
                <Mail className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" />
                info@pathankot.city
              </p>
              <p className="flex items-center gap-2.5 text-slate-500">
                <Train className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" />
                Nearest Rly: PTKC (Pathankot Cantt)
              </p>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Camera, label: "Instagram", href: "#" },
                { icon: Share2, label: "Facebook", href: "#" },
                { icon: Video, label: "YouTube", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-500 transition-all hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 mb-4 border-b border-slate-800 pb-2">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-slate-500 transition-colors hover:text-amber-400"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
            <span className="mx-2 h-3 w-px bg-slate-700" />
            <Link href="/sitemap" className="hover:text-slate-400 transition-colors">Sitemap</Link>
            <span className="mx-1">·</span>
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
