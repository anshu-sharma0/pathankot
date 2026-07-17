import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark, Mountain, Utensils, Calendar, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Explore Pathankot",
  description: "Discover the rich history, Rajput heritage, vibrant culture, and delicious cuisine of Pathankot, Punjab.",
};

const highlights = [
  {
    icon: Landmark,
    title: "History & Heritage",
    description: "From the ancient Audumbara kingdom and the Pathania Rajput rulers to the first capital of Nurpur State, Pathankot carries millennia of layered history.",
    href: "/explore/history",
    badge: "Ancient Roots",
    color: "amber",
  },
  {
    icon: Mountain,
    title: "Top Attractions",
    description: "Ranjit Sagar Dam, Mukteshwar Mahadev Temple (mentioned in the Mahabharata), Nurpur Fort, and Shahpurkandi. Each site tells a different story.",
    href: "/explore/attractions",
    badge: "Must-Visit",
    color: "teal",
  },
  {
    icon: Utensils,
    title: "Culture & Cuisine",
    description: "A unique Dogra-Punjabi-Himachali fusion culture. Famous for Bhangra, Gatka martial arts, Loi weaving, and iconic street food.",
    href: "/explore/culture",
    badge: "Unique Blend",
    color: "rose",
  },
  {
    icon: Calendar,
    title: "Events & Festivals",
    description: "Celebrate Baisakhi with grand processions, Lohri with bonfires, and local melas that capture the spirit of Punjab's northern heartland.",
    href: "/explore/events",
    badge: "Year-Round",
    color: "purple",
  },
];

const quickFacts = [
  { label: "Founded", value: "~3000 BCE" },
  { label: "Location", value: "Punjab (NW tip)" },
  { label: "Altitude", value: "322 m above MSL" },
  { label: "Climate", value: "Semi-arid, subtropical" },
  { label: "Best Season", value: "October – March" },
  { label: "Languages", value: "Punjabi, Dogri, Hindi" },
];

const colorMap: Record<string, string> = {
  amber: "bg-amber-50 text-amber-600 border-amber-200",
  teal: "bg-teal-50 text-teal-600 border-teal-200",
  rose: "bg-rose-50 text-rose-600 border-rose-200",
  purple: "bg-purple-50 text-purple-600 border-purple-200",
};
const badgeColorMap: Record<string, string> = {
  amber: "bg-amber-100 text-amber-700",
  teal: "bg-teal-100 text-teal-700",
  rose: "bg-rose-100 text-rose-700",
  purple: "bg-purple-100 text-purple-700",
};

export default function ExplorePage() {
  return (
    <div className="min-h-screen">
      {/* ── Page Hero ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-amber-950 py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
            <MapPin className="h-3 w-3" /> Punjab, India
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Explore <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">Pathankot</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Where ancient history meets vibrant culture. Pathankot is not just a transit point — it&apos;s a destination with millennia of stories waiting to be discovered.
          </p>
        </div>
      </section>

      {/* ── Quick Facts ── */}
      <section className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickFacts.map(({ label, value }) => (
              <div key={label} className="text-center p-3">
                <p className="text-lg font-bold text-slate-800">{value}</p>
                <p className="text-xs text-slate-400 mt-0.5 uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlights Grid ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">What Makes Us Special</p>
          <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">Everything to discover</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map(({ icon: Icon, title, description, href, badge, color }) => (
            <Link key={title} href={href} className="group relative flex flex-col gap-5 rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-100/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
              <div className="flex items-start justify-between">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${colorMap[color]}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className={`text-xs font-semibold rounded-full px-3 py-1 ${badgeColorMap[color]}`}>{badge}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
              </div>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-amber-600 mt-auto group-hover:gap-2.5 transition-all">
                Read More <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── City Story Block ── */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
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
