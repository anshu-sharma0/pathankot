"use client";

import { useState } from "react";
import { Sparkles, Map, Mountain, Utensils, Landmark, Droplets, MapPin, Search } from "lucide-react";

type Category = "All" | "Spiritual" | "Heritage" | "Nature & Adventure" | "Food & Shopping" | "Gateway Trips";

interface Activity {
  id: string;
  title: string;
  description: string;
  category: Category;
  icon: React.ElementType;
  gradient: string;
  featured?: boolean;
}

const activities: Activity[] = [
  {
    id: "ranjit-sagar-dam",
    title: "Boating at Ranjit Sagar Dam",
    description: "Experience the tranquility of the massive hydroelectric project on the Ravi River. Perfect for sightseeing, nature walks, and boating amidst lush green views.",
    category: "Nature & Adventure",
    icon: Droplets,
    gradient: "from-blue-500 to-cyan-400",
    featured: true,
  },
  {
    id: "mukteshwar-temple",
    title: "Mukteshwar Mahadev Temple",
    description: "Visit the ancient and sacred cave shrines dedicated to Lord Shiva, beautifully situated on the banks of the Ravi River. Highly regarded for its spiritual significance.",
    category: "Spiritual",
    icon: Sparkles,
    gradient: "from-amber-500 to-orange-400",
  },
  {
    id: "nurpur-fort",
    title: "Explore Nurpur Fort",
    description: "Just 25 km from Pathankot, explore this 900-year-old fort famous for its historical architecture and the ancient Krishna temple housed within its walls.",
    category: "Heritage",
    icon: Landmark,
    gradient: "from-rose-500 to-pink-500",
  },
  {
    id: "kathgarh-temple",
    title: "Kathgarh Temple",
    description: "Known for its unique 6-foot-high Shivalinga, this temple is a popular spiritual site offering peace and divine connection.",
    category: "Spiritual",
    icon: Sparkles,
    gradient: "from-amber-400 to-yellow-500",
  },
  {
    id: "shahpurkandi-fort",
    title: "Shahpurkandi Fort",
    description: "A historic fort built in 1505 by a Rajput Chief, offering a fascinating glimpse into the region's royal and military past.",
    category: "Heritage",
    icon: Landmark,
    gradient: "from-slate-600 to-slate-800",
  },
  {
    id: "sarafa-bazar",
    title: "Sarafa Bazar & Dhangu Road",
    description: "Walk through the old, narrow bazaars of the city to experience local life, shop for traditional textiles, handicrafts, and souvenirs.",
    category: "Food & Shopping",
    icon: MapPin,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: "kathlour-wildlife",
    title: "Kathlour Wildlife Sanctuary",
    description: "For nature enthusiasts, explore the region's biodiversity. A great spot for bird watching and experiencing untouched natural beauty.",
    category: "Nature & Adventure",
    icon: Mountain,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    id: "dalhousie-trip",
    title: "Gateway to Dalhousie & Khajjiar",
    description: "Given its strategic location, Pathankot serves as an ideal base camp. Plan a day trip to the stunning hill stations of Dalhousie and Khajjiar.",
    category: "Gateway Trips",
    icon: Map,
    gradient: "from-sky-500 to-blue-600",
    featured: true,
  },
];

const categories: Category[] = ["All", "Spiritual", "Heritage", "Nature & Adventure", "Food & Shopping", "Gateway Trips"];

export default function ThingsToDoClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredActivities = activities.filter((activity) => {
    const matchesCategory = activeCategory === "All" || activity.category === activeCategory;
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 relative z-20 -mt-8">
      {/* Filters and Search */}
      <div className="mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white/80 backdrop-blur-2xl p-4 sm:p-6 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5">
        <div className="flex flex-wrap gap-2.5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-[14px] font-bold transition-all duration-300 ${activeCategory === category
                ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 "
                : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-80 shrink-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-5 py-3.5 rounded-full border border-slate-200 bg-slate-50 text-[14px] font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 focus:bg-white transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Grid Layout */}
      {filteredActivities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredActivities.map((activity, index) => (
            <div
              key={activity.id}
              className={`group relative flex flex-col rounded-[2.5rem] bg-white p-8 shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-300/50 overflow-hidden animate-fade-in-up ${activity.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
            >
              {/* Decorative Blur Orbs */}
              <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br \${activity.gradient} opacity-[0.03] transition-all duration-700  group-hover:opacity-[0.08] blur-3xl`} />
              <div className={`absolute -left-12 -bottom-12 h-32 w-32 rounded-full bg-gradient-to-tr \${activity.gradient} opacity-[0.02] transition-all duration-700 group-hover:opacity-[0.06] blur-2xl`} />

              <div className="relative z-10 flex items-start justify-between mb-8">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br \${activity.gradient} text-white shadow-lg transition-all duration-500 group-hover:-rotate-3 group-hover:shadow-xl`}>
                  <activity.icon className="h-7 w-7" />
                </div>
                <span className="rounded-full bg-slate-50 px-3.5 py-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-widest border border-slate-100 transition-colors group-hover:bg-white group-hover:border-slate-200">
                  {activity.category}
                </span>
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-extrabold text-slate-800 mb-4 group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:\${activity.gradient} transition-all duration-300">
                  {activity.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-[15px] font-medium flex-1">
                  {activity.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-slate-800 transition-colors cursor-pointer w-fit">
                  Learn more
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center bg-white rounded-[3rem] border border-slate-100 shadow-sm animate-fade-in-up">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 text-slate-300 mb-6">
            <Search className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-800 mb-3">No activities found</h3>
          <p className="text-slate-500 text-lg">Try adjusting your filters or search query to find something else.</p>
        </div>
      )}
    </div>
  );
}
