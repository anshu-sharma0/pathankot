import type { Metadata } from "next";
import { Receipt, FileText, AlertCircle, LifeBuoy, Phone, ExternalLink, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Citizen Services — Pathankot",
  description: "Access Pathankot's citizen services: pay water and property tax bills, apply for certificates, lodge civic grievances, and access tourist helplines.",
};

const services = [
  {
    icon: Receipt,
    title: "Pay Bills Online",
    description: "Pay your water, sewerage, and property tax bills directly from this portal.",
    color: "blue",
    links: [
      { label: "Property Tax Payment", href: "https://www.mcpathankot.gov.in", external: true },
      { label: "Water Bill Payment", href: "https://www.mcpathankot.gov.in", external: true },
      { label: "Sewerage Charges", href: "https://www.mcpathankot.gov.in", external: true },
    ],
  },
  {
    icon: FileText,
    title: "Certificates & Forms",
    description: "Apply online or download forms for birth, death, marriage certificates, and trade licenses.",
    color: "teal",
    links: [
      { label: "Birth Certificate", href: "https://punjab.gov.in", external: true },
      { label: "Death Certificate", href: "https://punjab.gov.in", external: true },
      { label: "Marriage Certificate", href: "https://punjab.gov.in", external: true },
      { label: "Trade License Application", href: "https://www.mcpathankot.gov.in", external: true },
    ],
  },
  {
    icon: AlertCircle,
    title: "Lodge a Grievance",
    description: "Report civic issues like broken roads, garbage, or streetlight failures to the municipal corporation.",
    color: "amber",
    links: [
      { label: "MC Pathankot Grievance Portal", href: "https://www.mcpathankot.gov.in", external: true },
      { label: "Punjab Sampark Portal", href: "https://sampark.punjab.gov.in", external: true },
      { label: "DC Office Pathankot", href: "https://pathankot.nic.in", external: true },
    ],
  },
  {
    icon: LifeBuoy,
    title: "Tourist Support",
    description: "Emergency helplines, hospitals, and tourist police contacts for visitors to Pathankot.",
    color: "rose",
    links: [
      { label: "Tourist Helpline (Govt. of India)", href: "https://tourism.gov.in", external: true },
      { label: "Punjab Tourism Board", href: "https://punjabtourism.gov.in", external: true },
    ],
  },
];

const emergencyNumbers = [
  { label: "Police Emergency", number: "112", color: "red" },
  { label: "Ambulance (AIIMS)", number: "108", color: "rose" },
  { label: "Fire Brigade", number: "101", color: "orange" },
  { label: "Women Helpline", number: "1091", color: "purple" },
  { label: "Child Helpline", number: "1098", color: "amber" },
  { label: "Anti-Poison Helpline", number: "1800-11-6117", color: "teal" },
  { label: "Road Accident Helpline", number: "1033", color: "blue" },
  { label: "Railway Enquiry", number: "139", color: "slate" },
];

const colorMap: Record<string, { card: string; icon: string; badge: string }> = {
  blue: { card: "border-blue-100 hover:border-blue-200", icon: "bg-blue-50 text-blue-600", badge: "bg-blue-50 text-blue-700 border-blue-200" },
  teal: { card: "border-teal-100 hover:border-teal-200", icon: "bg-teal-50 text-teal-600", badge: "bg-teal-50 text-teal-700 border-teal-200" },
  amber: { card: "border-amber-100 hover:border-amber-200", icon: "bg-amber-50 text-amber-600", badge: "bg-amber-50 text-amber-700 border-amber-200" },
  rose: { card: "border-rose-100 hover:border-rose-200", icon: "bg-rose-50 text-rose-600", badge: "bg-rose-50 text-rose-700 border-rose-200" },
  red: { card: "border-red-100 hover:border-red-200", icon: "bg-red-50 text-red-600", badge: "bg-red-100 text-red-700 border-red-200" },
  orange: { card: "border-orange-100 hover:border-orange-200", icon: "bg-orange-50 text-orange-600", badge: "bg-orange-100 text-orange-700 border-orange-200" },
  purple: { card: "border-purple-100 hover:border-purple-200", icon: "bg-purple-50 text-purple-600", badge: "bg-purple-100 text-purple-700 border-purple-200" },
  slate: { card: "border-slate-100 hover:border-slate-200", icon: "bg-slate-50 text-slate-600", badge: "bg-slate-100 text-slate-700 border-slate-200" },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-linear-to-br from-blue-950 via-slate-900 to-slate-800 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight mb-6">
            Citizen <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">Services</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Pay bills, apply for certificates, lodge grievances, and access critical support resources — all from one place.
          </p>
        </div>
      </section>

      {/* Notice */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/50 p-4 text-sm text-blue-700">
          <Info className="h-5 w-5 shrink-0 mt-0.5" />
          <p>Some services are hosted on official government portals. You will be redirected to the respective government website when you click those links.</p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 gap-7">
          {services.map(({ icon: Icon, title, description, color, links }) => (
            <div key={title} className={`rounded-3xl border bg-white p-7 shadow-sm transition-shadow hover:shadow-lg ${colorMap[color].card}`}>
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl mb-5 ${colorMap[color].icon}`}>
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">{title}</h2>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">{description}</p>
              <div className="space-y-2">
                {links.map(({ label, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : "_self"}
                    rel={external ? "noopener noreferrer" : ""}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition-all hover:shadow-sm ${colorMap[color].badge}`}
                  >
                    {label}
                    {external && <ExternalLink className="h-3.5 w-3.5 opacity-60" />}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Numbers */}
      <section className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">Emergency Helplines</h2>
            <p className="text-slate-400 max-w-lg mx-auto">Save these numbers. Available 24x7 across Pathankot and all of Punjab.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {emergencyNumbers.map(({ label, number }) => (
              <a
                key={label}
                href={`tel:${number}`}
                className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900 py-6 px-4 text-center transition-all hover:border-red-800/50 hover:bg-slate-800 group"
              >
                <Phone className="h-5 w-5 text-slate-500 mb-3 group-hover:text-red-400 transition-colors" />
                <span className="text-2xl font-black text-white font-mono mb-1">{number}</span>
                <span className="text-xs text-slate-500 leading-tight">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
