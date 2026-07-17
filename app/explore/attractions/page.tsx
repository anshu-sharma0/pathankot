import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Star, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "Top Attractions in Pathankot",
  description: "Explore Pathankot's best tourist attractions: Ranjit Sagar Dam, Mukteshwar Mahadev Temple, Nurpur Fort, Shahpurkandi, and more.",
};

const attractions = [
  {
    id: "ranjit-sagar",
    name: "Ranjit Sagar Dam (Thein Dam)",
    category: "Nature & Engineering",
    distance: "20 km from city",
    duration: "Half day",
    rating: 4.8,
    description:
      "The fourth-largest dam in India, this engineering marvel on the Ravi River creates a vast reservoir ringed by the Shivalik hills. Boating, picnics, and sunset views make it a top attraction. The dam generates 600 MW of hydroelectricity.",
    highlights: ["Boating & Watersports", "Scenic Shivalik Views", "Picnic Grounds", "Hydroelectric Dam"],
    badge: "Must Visit",
    badgeColor: "bg-teal-100 text-teal-700",
    tagColor: "text-teal-700 bg-teal-50",
  },
  {
    id: "mukteshwar",
    name: "Mukteshwar Mahadev Temple",
    category: "Spiritual & Ancient",
    distance: "8 km from city",
    duration: "2–3 hours",
    rating: 4.9,
    description:
      "One of the most ancient Shiva temples in the region, believed to be mentioned in the Mahabharata. The cave shrine is perched amidst lush greenery, and the Shivalingam here draws devotees from across North India, especially during Shravan.",
    highlights: ["Ancient Cave Shrine", "Mahabharata Connection", "Shravan Mela", "Spiritual Pilgrimage"],
    badge: "Sacred Site",
    badgeColor: "bg-amber-100 text-amber-700",
    tagColor: "text-amber-700 bg-amber-50",
  },
  {
    id: "nurpur-fort",
    name: "Nurpur Fort",
    category: "Historical Fort",
    distance: "24 km from city",
    duration: "2 hours",
    rating: 4.5,
    description:
      "The ruins of the 16th-century fort that was once the heart of the powerful Nurpur princely state. The fort's Brijraj Swami Temple inside is still active, and the crumbling ramparts offer a striking silhouette against the sky. The Jahangiri Gate is particularly well-preserved.",
    highlights: ["16th Century Architecture", "Brijraj Swami Temple", "Jahangiri Gate", "Panoramic Views"],
    badge: "Historical",
    badgeColor: "bg-stone-100 text-stone-700",
    tagColor: "text-stone-700 bg-stone-50",
  },
  {
    id: "shahpurkandi",
    name: "Shahpurkandi Fort",
    category: "Historical Fort",
    distance: "12 km from city",
    duration: "1.5 hours",
    rating: 4.3,
    description:
      "Perched dramatically above the Ravi River, Shahpurkandi Fort was a key stronghold of the Rajput kingdoms. The Shahpurkandi Dam nearby adds a scenic backdrop, and the area is known for being an ideal base for nature walks along the riverside.",
    highlights: ["Riverbank Location", "Ravi River Views", "Nearby Dam", "Nature Walks"],
    badge: "Hidden Gem",
    badgeColor: "bg-rose-100 text-rose-700",
    tagColor: "text-rose-700 bg-rose-50",
  },
  {
    id: "kathgarh",
    name: "Pracheen Shiv Mandir Kathgarh",
    category: "Spiritual & Ancient",
    distance: "30 km from city",
    duration: "2 hours",
    rating: 4.6,
    description:
      "An ancient Shiva temple at the confluence of the Beas and Chakki rivers, featuring a unique two-sided Shivalingam — one side representing Shiva and the other Parvati. It's one of the most unique religious icons in all of northern India.",
    highlights: ["Dual Shivalingam", "River Confluence", "Ancient Mythology", "Unique Iconography"],
    badge: "Unique",
    badgeColor: "bg-purple-100 text-purple-700",
    tagColor: "text-purple-700 bg-purple-50",
  },
  {
    id: "atal-setu",
    name: "Atal Setu (Basohli Bridge)",
    category: "Nature & Scenic Drive",
    distance: "45 km from city",
    duration: "Scenic Drive",
    rating: 4.4,
    description:
      "A stunning bridge over the Ravi River connecting Pathankot to Basohli in Jammu & Kashmir. The drive along this route offers breathtaking views of the Shivalik foothills and is one of the most picturesque routes for a road trip from Pathankot.",
    highlights: ["Scenic Drive", "Ravi River Bridge", "J&K Gateway", "Sunset Photography"],
    badge: "Scenic Drive",
    badgeColor: "bg-sky-100 text-sky-700",
    tagColor: "text-sky-700 bg-sky-50",
  },
];

export default function AttractionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-linear-to-br from-teal-900 via-slate-800 to-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-teal-400 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300">
            <Star className="h-3 w-3 fill-teal-300" /> 6 Top Picks
          </div>
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-4 sm:mb-6">
            Places to <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-emerald-400">Visit</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From sacred ancient temples to vast engineering marvels and crumbling forts, Pathankot&apos;s attractions are more diverse than most travelers expect.
          </p>
        </div>
      </section>

      {/* Attractions List */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="space-y-8">
          {attractions.map((attraction, idx) => (
            <div
              key={attraction.id}
              id={attraction.id}
              className="group relative rounded-3xl border border-slate-100 bg-white p-5 sm:p-8 shadow-lg shadow-slate-100/50 transition-all hover:shadow-xl hover:border-slate-200 overflow-hidden"
            >
              {/* Number - hidden on mobile to prevent overlap */}
              <div className="hidden sm:block absolute top-6 right-8 text-7xl font-black text-slate-100 select-none">{String(idx + 1).padStart(2, "0")}</div>

              <div className="relative z-10 flex flex-col lg:flex-row gap-6">
                {/* Left */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold rounded-full px-3 py-1 ${attraction.badgeColor}`}>{attraction.badge}</span>
                    <span className={`text-xs font-medium rounded-full px-3 py-1 ${attraction.tagColor}`}>{attraction.category}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-1">{attraction.name}</h2>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{attraction.distance}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{attraction.duration}</span>
                    <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-amber-400 text-amber-400" />{attraction.rating} / 5</span>
                  </div>
                  <p className="text-slate-500 leading-relaxed mb-6">{attraction.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {attraction.highlights.map((h) => (
                      <span key={h} className="text-xs font-medium bg-slate-100 text-slate-600 rounded-full px-3 py-1">{h}</span>
                    ))}
                  </div>
                </div>
                {/* CTA */}
                <div className="flex sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-start sm:justify-between lg:justify-start gap-4 mt-4 lg:mt-0 lg:min-w-[160px] lg:pl-6 lg:border-l lg:border-slate-100">
                  <a
                    href={`https://maps.google.com?q=${encodeURIComponent(attraction.name + ", Pathankot, Punjab")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-slate-800 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition-all active:scale-95"
                  >
                    <Navigation className="h-4 w-4" /> Get Directions
                  </a>
                  <Link
                    href={`/explore/attractions/${attraction.id}`}
                    className="flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:gap-2.5 transition-all"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
