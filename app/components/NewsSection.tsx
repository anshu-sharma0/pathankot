import { ArrowRight, BellRing, CalendarDays } from "lucide-react";
import SectionHeader from "./SectionHeader";

const breakingNews = [
  "Smart City Mission phase 2 initiated for Pathankot city.",
  "New direct bus service launched from Pathankot to Dharamshala.",
  "Municipal Corporation announces deadline for property tax filing.",
  "Upcoming Dussehra Mela preparations in full swing at city grounds.",
];

const newsItems = [
  {
    category: "Infrastructure",
    date: "Oct 15, 2026",
    title: "Major road repair works begin in civil lines area",
    summary: "The municipal corporation has started resurfacing the main roads connecting the railway station to the civil lines...",
  },
  {
    category: "Events",
    date: "Oct 12, 2026",
    title: "City prepares for the annual heritage festival",
    summary: "Local artists and craftsmen from neighboring states arrive as Pathankot prepares for a 3-day cultural showcase...",
  },
  {
    category: "Administration",
    date: "Oct 10, 2026",
    title: "New grievance redressal portal launched",
    summary: "Citizens can now file and track civic complaints entirely online through the new centralized municipal dashboard...",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-linear-to-b from-white to-violet-50/30">

      {/* Breaking News Ticker */}
      <div className="mx-auto max-w-7xl mb-12">
        <div className="flex items-center overflow-hidden rounded-full bg-violet-100/50 ring-1 ring-violet-200/50 backdrop-blur-sm">
          <div className="flex shrink-0 items-center gap-2 bg-violet-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
            <BellRing className="h-4 w-4" />
            <span className="hidden sm:inline">Updates</span>
          </div>
          <div className="flex overflow-hidden whitespace-nowrap text-sm font-medium text-violet-800">
            <div className="animate-marquee flex gap-8 pl-8">
              {/* Duplicate array for continuous scroll effect */}
              {[...breakingNews, ...breakingNews].map((text, i) => (
                <span key={i} className="flex items-center gap-8">
                  {text}
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SectionHeader
        badge="City Updates"
        title={
          <>
            News & <span className="gradient-text bg-linear-to-r from-violet-500 to-fuchsia-500">Announcements</span>
          </>
        }
        subtitle="Stay informed with the latest happenings, municipal notices, and events around the city."
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Featured News (Large) */}
          <div className="lg:col-span-2 perspective-container animate-fade-in-up">
            <div className="card-3d group relative flex h-full min-h-[320px] sm:min-h-[380px] flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 p-5 sm:p-8">
              <div className="absolute inset-0 bg-violet-900/40 mix-blend-multiply transition-opacity group-hover:opacity-75" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent" />

              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-200 ring-1 ring-violet-500/30 backdrop-blur-sm">
                    Notice
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-300">
                    <CalendarDays className="h-3.5 w-3.5" />
                    Today
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                  Smart City Mission Phase 2 Begins in Pathankot
                </h3>
                <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  The municipal corporation has officially commenced the second phase of infrastructural upgrades, focusing on sustainable energy, improved sanitation, and digital connectivity across all major wards.
                </p>
                <button className="flex items-center gap-2 text-sm font-semibold text-violet-300 transition-colors hover:text-violet-200">
                  Read Full Story <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* List News */}
          <div className="flex flex-col gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {newsItems.map((item) => (
              <div
                key={item.title}
                className="group flex flex-1 flex-col justify-center rounded-2xl bg-white/60 p-5 shadow-sm ring-1 ring-slate-100 backdrop-blur-sm transition-all hover:bg-white hover:shadow-md"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-violet-600">
                    {item.category}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {item.date}
                  </span>
                </div>
                <h4 className="mb-2 text-base font-bold text-slate-800 transition-colors group-hover:text-violet-700">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 line-clamp-2">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
