import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { PageHero } from "../components/layout/PageHero";
import { StatsBanner } from "../components/ui/StatsBanner";

export const metadata: Metadata = {
  title: "Explore Pathankot | History, Culture & Heritage",
  description: "Dive deep into the rich culture, history, and vibrant heritage of Pathankot, the gateway to Punjab and Himachal Pradesh.",
};

import { quickFacts, highlights } from "../data/exploreData";
import FeatureCard, { Color } from "../components/FeatureCard";

const colorMap: Record<string, string> = {
  amber: "bg-amber-50 text-amber-600 border-amber-200",
  teal: "bg-teal-50 text-teal-600 border-teal-200",
  rose: "bg-rose-50 text-rose-600 border-rose-200",
  purple: "bg-purple-50 text-purple-600 border-purple-200",
  blue: "bg-blue-50 text-blue-600 border-blue-200",
  emerald: "bg-emerald-50 text-emerald-600 border-emerald-200",
};
const badgeColorMap: Record<string, string> = {
  amber: "bg-amber-100 text-amber-700",
  teal: "bg-teal-100 text-teal-700",
  rose: "bg-rose-100 text-rose-700",
  purple: "bg-purple-100 text-purple-700",
  blue: "bg-blue-100 text-blue-700",
  emerald: "bg-emerald-100 text-emerald-700",
};

export default function ExplorePage() {
  return (
    <div className="min-h-screen">
      {/* ── Page Hero ── */}
      <PageHero
        badgeIcon={MapPin}
        badgeText="Punjab, India"
        titlePrefix="Explore"
        titleHighlight="Pathankot"
        description="Where ancient history meets vibrant culture. Pathankot is not just a transit point — it's a destination with millennia of stories waiting to be discovered."
        theme="amber"
      />

      {/* ── Quick Facts ── */}
      <StatsBanner stats={quickFacts} variant="minimal" columns={6} />

      {/* ── Highlights Grid ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">What Makes Us Special</p>
          <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">Everything to discover</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, title, description, href, badge, color }) => (
            <FeatureCard
              key={title}
              icon={Icon}
              title={title}
              description={description}
              badge={badge}
              color={color as Color}
              href={href}
            />
          ))}
        </div>
      </section>

      {/* ── City Story Block ── */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-3">The City&apos;s Story</p>
              <h2 className="text-3xl font-extrabold text-slate-800 mb-6">A City Older Than Most Realize</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>Pathankot derives its name from the <strong>Pathania Rajput clan</strong>, who ruled this region for centuries. But its roots stretch even deeper — ancient texts of the Mahabharata reference this area as the kingdom of the Audumbaras.</p>
                <p>It served as the <strong>first capital of Nurpur State</strong>, under the name &quot;Paithan.&quot; Later, it came under Mughal influence before being absorbed into the Sikh Empire under <strong>Maharaja Ranjit Singh</strong>.</p>
                <p>Post-1947, its strategic location at the border of three states transformed it into a critical <strong>military hub and transit corridor</strong> — giving rise to the identity it carries today.</p>
              </div>
              <Link href="/explore/history" className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-500/25 hover:bg-amber-600 transition-all">
                Full History <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { year: "~3000 BCE", event: "Audumbara Kingdom", color: "bg-amber-50 border-amber-200" },
                { year: "1467 CE", event: "Nurpur State Capital", color: "bg-teal-50 border-teal-200" },
                { year: "1800s", event: "Sikh Empire Era", color: "bg-blue-50 border-blue-200" },
                { year: "1947", event: "Strategic Border City", color: "bg-slate-100 border-slate-200" },
              ].map(({ year, event, color }) => (
                <div key={year} className={`rounded-2xl border p-5 ${color}`}>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    <span className="text-xs font-semibold text-slate-500">{year}</span>
                  </div>
                  <p className="text-sm font-bold text-slate-700">{event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
