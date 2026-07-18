import type { Metadata } from "next";
import Link from "next/link";
import { Plane, Train, Bus, MapPin, Phone, Clock, Compass, ArrowRight, Hotel, Navigation } from "lucide-react";
import PlanYourVisit from "../things-to-do/_components/PlanYourVisit";
import { operatingHours } from "../things-to-do/_data/content";
import { PageHero } from "../components/layout/PageHero";
import { TransportCard } from "../components/ui/TransportCard";

export const metadata: Metadata = {
  title: "Plan Your Trip to Pathankot | Complete Guide",
  description: "Detailed transport guide, curated itineraries, and gateway destinations for Pathankot.",
};

import { roadDistances, itineraries, gateways } from "../data/planData";

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
      <PageHero
        badgeIcon={MapPin}
        badgeText="Gateway to the Himalayas"
        titlePrefix="Plan Your"
        titleHighlight="Journey"
        description="Pathankot is highly accessible and serves as the meeting point of Punjab, Jammu & Kashmir, and Himachal Pradesh. Plan your trip seamlessly."
        theme="indigo"
      />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 space-y-12">

        {/* HOW TO REACH */}
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-800">How to Reach</h2>
          </div>

          {/* AIR */}
          <TransportCard
            icon={Plane}
            title="By Air"
            description="Pathankot has its own Domestic Airport (IXP) just 3 kms from the main city. It is highly convenient for direct travelers from Delhi."
            themeColor="indigo"
          >
            <div className="grid sm:grid-cols-2 gap-6 bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Pathankot Airport (IXP)</h4>
                <p className="text-sm text-slate-600 mb-4">Located on the Pathankot to Majra Road, the airport is a civil enclave within the Pathankot Air Force Station premises.</p>

                <h4 className="font-semibold text-slate-800 mb-2">Flight Connectivity</h4>
                <p className="text-sm text-slate-600">Domestic flights operate on a seasonal and limited schedule. It is strongly advised to verify current schedules before planning. Many travelers prefer using Amritsar or Jammu for more reliable connectivity.</p>
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
          </TransportCard>

          {/* RAIL */}
          <TransportCard
            icon={Train}
            title="By Rail"
            description="Pathankot is a major railway junction. It links cities like Gurdaspur, Amritsar, Jammu, Jalandhar, Bathinda, and Rourkela."
            themeColor="rose"
          >
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-center h-full">
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
          </TransportCard>

          {/* ROAD */}
          <TransportCard
            icon={Bus}
            title="By Road"
            description="Pathankot is highly connected via the Punjab State Road Transport Corporation (PSRTC) and serves as the base camp for moving to hill stations."
            themeColor="teal"
          >
            <h4 className="font-semibold text-slate-800 mb-4 px-2 text-sm uppercase tracking-wider">Driving Distances</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {roadDistances.map((loc) => (
                <div key={loc.city} className="flex justify-between items-center bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl hover:bg-white hover:border-teal-200 hover:shadow-md transition-all cursor-default">
                  <span className="font-medium text-slate-700 text-sm">{loc.city}</span>
                  <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-md">{loc.distance}</span>
                </div>
              ))}
            </div>
          </TransportCard>
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

        <PlanYourVisit operatingHours={operatingHours} />
      </div>
    </div>
  );
}
