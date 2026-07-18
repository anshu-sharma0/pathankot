import type { Metadata } from "next";
import Link from "next/link";
import { Plane, Train, Bus, MapPin, Phone, Clock, Compass, ArrowRight, Hotel, Navigation } from "lucide-react";
import PlanYourVisit from "../things-to-do/_components/PlanYourVisit";

export const metadata: Metadata = {
  title: "Plan Your Trip to Pathankot | Complete Guide",
  description: "Detailed transport guide, curated itineraries, and gateway destinations for Pathankot.",
};

const roadDistances = [
  { city: "Mukerian", distance: "40 km" },
  { city: "Dalhousie", distance: "70 km" },
  { city: "Dharamshala", distance: "100 km" },
  { city: "Palampur", distance: "100 km" },
  { city: "Chamba", distance: "100 km" },
  { city: "Jammu", distance: "100 km" },
  { city: "Amritsar", distance: "108 km" },
  { city: "Chandigarh", distance: "237 km" },
  { city: "Delhi", distance: "481 km" },
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
];

const colorMap: Record<string, { card: string; badge: string; icon: string }> = {
  amber: { card: "border-amber-100 bg-amber-50/30", badge: "bg-amber-100 text-amber-700", icon: "bg-amber-100 text-amber-600" },
  purple: { card: "border-purple-100 bg-purple-50/30", badge: "bg-purple-100 text-purple-700", icon: "bg-purple-100 text-purple-600" },
  emerald: { card: "border-emerald-100 bg-emerald-50/30", badge: "bg-emerald-100 text-emerald-700", icon: "bg-emerald-100 text-emerald-600" },
  sky: { card: "border-sky-100 bg-sky-50/30", badge: "bg-sky-100 text-sky-700", icon: "bg-sky-100 text-sky-600" },
  rose: { card: "border-rose-100 bg-rose-50/30", badge: "bg-rose-100 text-rose-700", icon: "bg-rose-100 text-rose-600" },
  orange: { card: "border-orange-100 bg-orange-50/30", badge: "bg-orange-100 text-orange-700", icon: "bg-orange-100 text-orange-600" },
};

export default function PlanTripPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-indigo-950 via-slate-900 to-indigo-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-400 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            <MapPin className="h-3 w-3" /> Gateway to the Himalayas
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-7xl tracking-tight mb-6">
            Plan Your <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-sky-400">Journey</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Pathankot is highly accessible and serves as the meeting point of Punjab, Jammu & Kashmir, and Himachal Pradesh. Plan your trip seamlessly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 space-y-12">

        {/* HOW TO REACH */}
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-800">How to Reach</h2>
          </div>

          {/* AIR */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row gap-8 items-stretch group hover:border-indigo-200 transition-colors">
            <div className="md:w-1/3 flex flex-col justify-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Plane className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">By Air</h3>
              <p className="text-slate-500 leading-relaxed">
                Pathankot has its own Domestic Airport (IXP) just 3 kms from the main city. It is highly convenient for direct travelers from Delhi.
              </p>
            </div>
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6 bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Pathankot Airport (IXP)</h4>
                <p className="text-sm text-slate-600 mb-4">Located on the Pathankot to Majra Road under the Pathankot Air Force Station.</p>

                <h4 className="font-semibold text-slate-800 mb-2">Alliance Air Flights</h4>
                <p className="text-sm text-slate-600">The 70-seater airbus currently has 3 flights a week: Monday, Tuesday, and Thursday from Pathankot to New Delhi (IXP to DEL).</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Nearest Int. Airport</p>
                  <p className="text-sm font-medium text-slate-800">Sri Guru Ram Dass Ji Int. Airport, Amritsar (119 Kms)</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Contact Airport</p>
                  <a href="tel:01862100044" className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                    <Phone className="h-4 w-4" /> 0186-2100044
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RAIL */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row gap-8 items-stretch group hover:border-rose-200 transition-colors">
            <div className="md:w-1/3 flex flex-col justify-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <Train className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">By Rail</h3>
              <p className="text-slate-500 leading-relaxed">
                Pathankot is a major railway junction. It links cities like Gurdaspur, Amritsar, Jammu, Jalandhar, Bathinda, and Rourkela.
              </p>
            </div>
            <div className="md:w-2/3 bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-center">
              <h4 className="font-semibold text-slate-800 mb-3">Major Trains</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Adi Jat Express', 'Bti Jat Express', 'Jammu Mail', 'Dauladhar Express', 'Shan-e-Punjab'].map(train => (
                  <span key={train} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm">
                    {train}
                  </span>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="bg-rose-100 p-2 rounded-lg text-rose-600"><Phone className="h-4 w-4" /></div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Station Superintendent</p>
                    <p className="text-sm font-bold text-slate-800">0186-2220417</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="bg-rose-100 p-2 rounded-lg text-rose-600"><Phone className="h-4 w-4" /></div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">General Enquiry</p>
                    <p className="text-sm font-bold text-slate-800">131, 139</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROAD */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row gap-8 items-stretch group hover:border-teal-200 transition-colors">
            <div className="md:w-1/3 flex flex-col justify-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Bus className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">By Road</h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                Pathankot is highly connected via the Punjab State Road Transport Corporation (PSRTC) and serves as the base camp for moving to hill stations.
              </p>
            </div>
            <div className="md:w-2/3">
              <h4 className="font-semibold text-slate-800 mb-4 px-2 text-sm uppercase tracking-wider">Driving Distances</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {roadDistances.map((loc) => (
                  <div key={loc.city} className="flex justify-between items-center bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl hover:bg-white hover:border-teal-200 hover:shadow-md transition-all cursor-default">
                    <span className="font-medium text-slate-700 text-sm">{loc.city}</span>
                    <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-md">{loc.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GATEWAY DESTINATIONS */}
        <section className="pt-16 pb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-3">Gateway Destinations</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Pathankot is the perfect base for exploring the greater western Himalayas.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gateways.map(({ name, distance, time, desc, color }) => (
              <div key={name} className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-800">{name}</h3>
                  <div className={`text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1 ${colorMap[color].badge}`}>{distance}</div>
                </div>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed min-h-[60px]">{desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400"><Navigation className="h-3.5 w-3.5" />{time} drive</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <PlanYourVisit />
      </div>
    </div>
  );
}
