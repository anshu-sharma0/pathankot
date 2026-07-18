import type { Metadata } from "next";
import { Compass, MapPin, Activity, Image as ImageIcon, Church } from "lucide-react";
import { PageHero } from "../components/layout/PageHero";
import { StatsBanner } from "../components/ui/StatsBanner";

export const metadata: Metadata = {
  title: "Tourism Guide | Discover Pathankot",
  description: "A comprehensive tourism guide for Pathankot featuring religious sites, adventure sports, and hidden gems.",
};

import { tourismStats, mustSeePlaces, religiousPlaces, adventureActivities, galleryImages } from "../data/tourismData";
import Image from "next/image";

export default function TourismPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* ── Hero Section ── */}
      <PageHero
        badgeIcon={Compass}
        badgeText="The Gateway to the Himalayas"
        titlePrefix="Tourism in"
        titleHighlight="Pathankot"
        description="More than just a transit city, Pathankot is a confluence of natural beauty, ancient religious sites, historical heritage, and thrilling adventure tourism."
        theme="rose"
        backLink={{ href: "/explore", text: "Back to Explore" }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 space-y-8 lg:space-y-12">

        {/* ── Tourism Statistics ── */}
        <StatsBanner
          stats={tourismStats}
          title="Tourism Overview"
          subtitle="Millions of tourists pass through Pathankot annually, driving a diverse travel ecosystem."
          variant="card"
          columns={4}
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* ── Hidden Gems ── */}
          <section className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><MapPin className="h-6 w-6" /></div>
              <h2 className="text-2xl font-extrabold text-slate-800 text-balance">Must-See Spots</h2>
            </div>
            <div className="space-y-4">
              {mustSeePlaces.map((place, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <h4 className="font-bold text-slate-800">{place.name}</h4>
                  <p className="text-sm text-slate-500 mt-1">{place.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Religious Tourism ── */}
          <section className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><Church className="h-6 w-6" /></div>
              <h2 className="text-2xl font-extrabold text-slate-800">Religious Tourism</h2>
            </div>
            <div className="space-y-4">
              {religiousPlaces.map((place, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-amber-50/10 hover:bg-amber-50/30 transition-colors">
                  <h4 className="font-bold text-slate-800">{place.name}</h4>
                  <p className="text-sm text-slate-500 mt-1">{place.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── Adventure Tourism ── */}
        <section className="rounded-3xl bg-slate-900 p-8 sm:p-10 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl"><Activity className="h-6 w-6" /></div>
                <h2 className="text-2xl font-extrabold text-white">Adventure & Eco-Tourism</h2>
              </div>
              <p className="text-slate-300 max-w-xl mb-6">With rivers, dams, and the Shivalik foothills, Pathankot offers immense potential for eco-tourism and adventure activities.</p>
              <div className="flex flex-wrap gap-2">
                {adventureActivities.map((activity, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-xs font-semibold text-slate-300">
                    {activity}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 min-w-[250px]">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Future Opportunities</h4>
              <ul className="space-y-2 text-sm text-emerald-400 font-semibold">
                <li>• Riverfront Development</li>
                <li>• Mountain Biking</li>
                <li>• Kayaking & Rope Courses</li>
                <li>• Eco Adventure Parks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="text-center mb-10">
            <ImageIcon className="h-8 w-8 text-rose-500 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">Tourism Gallery</h2>
            <p className="text-slate-500 mt-2">Glimpses of Pathankot's enchanting tourist spots.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="relative h-64 overflow-hidden rounded-2xl border border-slate-200 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                  src={src}
                  alt={`Pathankot Tourism Image ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
