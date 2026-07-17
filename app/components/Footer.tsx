import { Heart, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Quick Links",
    links: ["Tourism Spotlight", "Transit & Connectivity", "Culture & Heritage", "City Map", "Emergency Contacts"],
  },
  {
    title: "Government",
    links: ["DC Office Pathankot", "Municipal Corporation", "Punjab Police", "Health Department", "Revenue Department"],
  },
  {
    title: "Citizen Resources",
    links: ["RTI Portal", "E-Tenders", "Public Grievances", "Download Forms", "Sitemap"],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-slate-100 bg-linear-to-b from-white to-slate-50/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-orange-600 shadow-sm">
                <span className="text-sm font-black text-white">P</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Pathankot</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400">City Portal</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Punjab&apos;s gateway to the Himalayas — connecting heritage, transit, and community.
            </p>
            <div className="space-y-2 text-xs text-slate-500">
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-slate-400" />
                District Pathankot, Punjab 145001
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-slate-400" />
                0186-222-xxxx
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-slate-400" />
                info@pathankot.gov.in
              </p>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 transition-colors hover:text-slate-800"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Pathankot City Portal. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-rose-400" /> for Pathankot
          </p>
        </div>
      </div>
    </footer>
  );
}
