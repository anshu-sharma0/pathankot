import type { Metadata } from "next";
import Link from "next/link";
import { Train, Car, Plane, Clock, ArrowRight, MapPin, Navigation, Hotel, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Plan Your Visit to Pathankot",
  description: "Complete travel guide to Pathankot: how to get here by train, road or air, curated itineraries, accommodation options, and gateway guides to Dalhousie, Dharamshala and Kashmir.",
};

const transport = [
  {
    icon: Train,
    mode: "By Train",
    color: "blue",
    primary: "Pathankot Cantt (PTKC)",
    secondary: "Pathankot City (PTK)",
    details: [
      "Pathankot Cantt is the main junction — connected to Delhi, Mumbai, Amritsar, Jammu & Kolkata.",
      "Pathankot City station is closer to the city centre for local access.",
      "Chakki Bank (CCB) serves the narrow-gauge Kangra Valley Railway to Jogindernagar.",
      "Key trains: Himachal Express, Shan-e-Punjab Express, Pathankot-Jogindernagar Rail.",
    ],
  },
  {
    icon: Car,
    mode: "By Road",
    color: "green",
    primary: "NH-44 (Delhi–Srinagar Highway)",
    secondary: "Pathankot Bus Stand",
    details: [
      "Pathankot is ~505 km from Delhi (8–9 hrs by car), ~100 km from Amritsar (2 hrs), and ~90 km from Jammu.",
      "State buses from PPRTC & HRTC connect to Dalhousie, Dharamshala, Chamba, and Shimla.",
      "Ample parking available near railway stations and the town centre.",
    ],
  },
  {
    icon: Plane,
    mode: "By Air",
    color: "sky",
    primary: "Pathankot Airport (IXP)",
    secondary: "Alternate: Amritsar (ATQ) — 100 km",
    details: [
      "Pathankot has a small domestic airport with limited commercial flights. Currently mostly used by the Indian Air Force.",
      "The nearest major airport is Sri Guru Ram Dass Jee International Airport (Amritsar) — around 100 km away.",
      "From Amritsar airport, hire a taxi or take a bus to reach Pathankot (~2 hours).",
    ],
  },
];

const itineraries = [
  {
    title: "24 Hours in Pathankot",
    icon: Clock,
    tag: "Quick Trip",
    color: "amber",
    stops: [
      { time: "7:00 AM", place: "Mukteshwar Mahadev Temple — morning darshan" },
      { time: "10:00 AM", place: "Ranjit Sagar Dam — boating & views" },
      { time: "1:00 PM", place: "Local lunch — Chole Kulche at Dhangu Road" },
      { time: "3:00 PM", place: "Shahpurkandi Fort — riverside walk" },
      { time: "6:00 PM", place: "Pathankot market — local shopping & sweets" },
      { time: "8:00 PM", place: "Dinner at a local dhaba & depart/rest" },
    ],
  },
  {
    title: "The Spiritual Trail",
    icon: Compass,
    tag: "2 Days",
    color: "purple",
    stops: [
      { time: "Day 1 AM", place: "Mukteshwar Mahadev Temple (cave shrine)" },
      { time: "Day 1 PM", place: "Kathgarh Mahadev Temple (dual Shivalingam)" },
      { time: "Day 2 AM", place: "Gurudwara Shri Barth Sahib" },
      { time: "Day 2 PM", place: "Kali Mata Mandir & Ashapurni Mandir" },
    ],
  },
];

const gateways = [
  { name: "Dalhousie", distance: "80 km", time: "2 hrs", desc: "Colonial-era hill station with Kalatop Wildlife Sanctuary and Dainkund peak.", color: "emerald" },
  { name: "Dharamshala", distance: "120 km", time: "3 hrs", desc: "Home of the Dalai Lama and Tibetan govt-in-exile. Also the McLeod Ganj trekking hub.", color: "sky" },
  { name: "Chamba", distance: "118 km", time: "3.5 hrs", desc: "Ancient town along the Ravi river with stunning Chamba temples and handicrafts.", color: "amber" },
  { name: "Jammu", distance: "90 km", time: "2 hrs", desc: "City of temples and gateway to Kashmir. Vaishno Devi pilgrimage base.", color: "rose" },
  { name: "Amritsar", distance: "100 km", time: "2 hrs", desc: "The Golden Temple, Wagah Border, and the beating retreat ceremony.", color: "orange" },
  { name: "Kasauli", distance: "190 km", time: "4 hrs", desc: "A quiet colonial hill station with Christ Church and the Monkey Point.", color: "teal" },
];

const colorMap: Record<string, { card: string; badge: string; icon: string }> = {
  blue: { card: "border-blue-100 bg-blue-50/30", badge: "bg-blue-100 text-blue-700", icon: "bg-blue-100 text-blue-600" },
  green: { card: "border-green-100 bg-green-50/30", badge: "bg-green-100 text-green-700", icon: "bg-green-100 text-green-600" },
  sky: { card: "border-sky-100 bg-sky-50/30", badge: "bg-sky-100 text-sky-700", icon: "bg-sky-100 text-sky-600" },
  amber: { card: "border-amber-100 bg-amber-50/30", badge: "bg-amber-100 text-amber-700", icon: "bg-amber-100 text-amber-600" },
  purple: { card: "border-purple-100 bg-purple-50/30", badge: "bg-purple-100 text-purple-700", icon: "bg-purple-100 text-purple-600" },
  emerald: { card: "border-emerald-100 bg-emerald-50/30", badge: "bg-emerald-100 text-emerald-700", icon: "bg-emerald-100 text-emerald-600" },
  rose: { card: "border-rose-100 bg-rose-50/30", badge: "bg-rose-100 text-rose-700", icon: "bg-rose-100 text-rose-600" },
  orange: { card: "border-orange-100 bg-orange-50/30", badge: "bg-orange-100 text-orange-700", icon: "bg-orange-100 text-orange-600" },
  teal: { card: "border-teal-100 bg-teal-50/30", badge: "bg-teal-100 text-teal-700", icon: "bg-teal-100 text-teal-600" },
};

export default function PlanTripPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-linear-to-br from-slate-800 via-slate-900 to-emerald-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            <MapPin className="h-3 w-3" /> Your Complete Travel Guide
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Plan Your <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">Visit</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to plan the perfect trip — from how to get here to curated itineraries and gateway guides to the Himalayas.
          </p>
        </div>
      </section>

      {/* How to Reach */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-10 text-center">Getting to Pathankot</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {transport.map(({ icon: Icon, mode, color, primary, secondary, details }) => (
            <div key={mode} className={`rounded-3xl border p-7 ${colorMap[color].card}`}>
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl mb-5 ${colorMap[color].icon}`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">{mode}</h3>
              <p className="text-sm font-semibold text-slate-600 mb-0.5">{primary}</p>
              <p className="text-xs text-slate-400 mb-4">{secondary}</p>
              <ul className="space-y-2.5">
                {details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Itineraries */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-10 text-center">Curated Itineraries</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {itineraries.map(({ title, icon: Icon, tag, color, stops }) => (
              <div key={title} className={`rounded-3xl border p-7 ${colorMap[color].card}`}>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className={`text-xs font-semibold rounded-full px-3 py-1 mb-3 inline-block ${colorMap[color].badge}`}>{tag}</span>
                    <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
                  </div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${colorMap[color].icon}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="space-y-3">
                  {stops.map(({ time, place }) => (
                    <div key={time} className="flex items-start gap-3">
                      <span className="text-xs font-bold text-slate-400 w-20 flex-shrink-0 pt-0.5">{time}</span>
                      <span className="text-sm text-slate-700">{place}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/plan/itineraries" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:shadow-md transition-all">
              View All Itineraries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gateway Guides */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-3">Gateway Destinations</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Pathankot is the perfect base for exploring the greater western Himalayas. Here&apos;s where you can go from here.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gateways.map(({ name, distance, time, desc, color }) => (
            <Link key={name} href={`/plan/gateway/${name.toLowerCase()}`} className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-slate-800">{name}</h3>
                <div className={`text-xs font-semibold rounded-full px-2.5 py-1 ${colorMap[color].badge}`}>{distance}</div>
              </div>
              <p className="text-sm text-slate-500 mb-4 leading-relaxed">{desc}</p>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1"><Navigation className="h-3 w-3" />{time} drive</span>
                <span className="flex items-center gap-1 text-amber-600 font-semibold group-hover:gap-2 transition-all">Guide <ArrowRight className="h-3.5 w-3.5" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Accommodation CTA */}
      <section className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Hotel className="h-12 w-12 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-white mb-4">Where to Stay</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">From budget guesthouses to comfortable hotels — find the right accommodation for your trip to Pathankot.</p>
          <Link href="/plan/stay" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-sm font-semibold text-slate-900 hover:bg-amber-400 shadow-lg shadow-amber-500/25 transition-all">
            Browse Accommodation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
