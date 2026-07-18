"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Clock, Star, Navigation } from "lucide-react";
import CategoryFilter from "@/app/components/ui/CategoryFilter";

const attractions = [
  {
    id: "mukteshwar",
    name: "Mukteshwar Mahadev Temple",
    category: "Religious",
    distance: "22 km from city",
    duration: "2–3 hours",
    rating: 4.9,
    description:
      "The cave temples are dedicated to the Hindu deity Lord Shiva and are located on the banks of the river Ravi. The caves are said to have been used by the Pandavas for staying during their final year in exile. Mukteshwar Temple is situated atop a hill and contains a marble Shiva lingam and a copper yoni. The idols of various Hindu deities Brahma, Vishnu, Hanuman, Parvati and Ganesha surround the Lingam.",
    highlights: ["Ancient Cave Shrine", "Mahabharata Connection", "River Ravi Banks", "Marble Shivalingam"],
    badge: "Sacred Site",
    badgeColor: "bg-amber-100 text-amber-700",
    tagColor: "text-amber-700 bg-amber-50",
    image: "/images/mukteshwar.png",
  },
  {
    id: "ranjit-sagar",
    name: "Ranjit Sagar Dam",
    category: "Natural / Scenic beauty",
    distance: "30 km from city",
    duration: "Half day",
    rating: 4.8,
    description:
      "The dam is a part of the hydroelectricity project of the state Government of Punjab and was completed in 2001. The Ranjit Sagar Dam is also known as the Thien Dam and constructed on the river Ravi. The dam is a great picnic spot with its lush green surroundings.",
    highlights: ["Boating", "Hydroelectricity Project", "Lush Greenery", "Picnic Spot"],
    badge: "Must Visit",
    badgeColor: "bg-teal-100 text-teal-700",
    tagColor: "text-teal-700 bg-teal-50",
    image: "/images/ranjit_sagar_dam.jpeg",
  },
  {
    id: "nurpur-fort",
    name: "Nurpur Fort",
    category: "Historical",
    distance: "24 km from city",
    duration: "2 hours",
    rating: 4.5,
    description:
      "Nupur fort was formerly known as the Dhameri Fort and was built in the 10th century. The fort was destroyed by the British and then by an earthquake in 1905. The temple inside the fort called Brij Raj Swami was built in the 16th century and is known to be one of the only places where both the idols of Lord Krishna and Meera Bai are worshiped.",
    highlights: ["10th Century Fort", "Brij Raj Swami Temple", "Krishna & Meera Bai", "Panoramic Views"],
    badge: "Historical",
    badgeColor: "bg-stone-100 text-stone-700",
    tagColor: "text-stone-700 bg-stone-50",
    image: "/images/nurpur-fort.png",
  },
  {
    id: "kathgarh",
    name: "Kathgarh Temple",
    category: "Religious",
    distance: "30 km from city",
    duration: "2 hours",
    rating: 4.6,
    description:
      "Kathgarh Temple is dedicated to Lord Shiva and Parvati and is characterized by an ancient lingam with mystical origins. The temple was said to have been visited by Bharat during his search for Lord Rama. The temple is located at the confluence of the Beas and the Chakki rivers near Mirthal. Marvellously built in a Roman-styled architecture with twin Shivalingams said to reunite on Shivaratri.",
    highlights: ["Mystical Twin Lingam", "Beas-Chakki Confluence", "Roman Style Architecture", "Ancient Origins"],
    badge: "Unique",
    badgeColor: "bg-purple-100 text-purple-700",
    tagColor: "text-purple-700 bg-purple-50",
    image: "/images/kathgarh.png",
  },
  {
    id: "kathlour",
    name: "Kathlour Wildlife Sanctuary",
    category: "Natural / Scenic beauty",
    distance: "25 km from city",
    duration: "3-4 hours",
    rating: 4.5,
    description:
      "Kathlour Wildlife Sanctuary is a safe haven for a number of wildlife species. It is home to deer, porcupine, pangolin, and a vast variety of bird species. The dense vegetation and serene environment make it a paradise for nature lovers and wildlife photographers.",
    highlights: ["Wildlife Spotting", "Bird Watching", "Dense Forest", "Nature Trails"],
    badge: "Nature",
    badgeColor: "bg-emerald-100 text-emerald-700",
    tagColor: "text-emerald-700 bg-emerald-50",
    image: "/images/kathlour.png",
  },
  {
    id: "dhar-retreat",
    name: "Mini Goa (Dhar Kalan)",
    category: "Adventure",
    distance: "32 km from city",
    duration: "Full day / Overnight",
    rating: 4.7,
    description:
      "Located in Dhar Kalan near Pathankot, the dense Shivalik forest and Ranjit Sagar lake area offer incredible adventure opportunities. It is Pathankot's best-kept secret — a prime location for eco-tourism, trekking, nature walks, and camping under the stars.",
    highlights: ["Eco-tourism", "Trekking", "Camping", "Lake Views"],
    badge: "Adventure",
    badgeColor: "bg-orange-100 text-orange-700",
    tagColor: "text-orange-700 bg-orange-50",
    image: "/images/minigoa.png",
  },
  {
    id: "atal-setu",
    name: "Atal Setu (Basohli Bridge)",
    category: "Adventure",
    distance: "38 km from city",
    duration: "Scenic Drive",
    rating: 4.8,
    description:
      "Atal Setu (Basohli) near Pathankot is a 592 mt long cable-stayed bridge on the Ravi river. It connects Punjab with Jammu & Kashmir. The architectural grandeur of the bridge combined with the massive lake created by Ranjit Sagar Dam provides breathtaking panoramic views.",
    highlights: ["592m Cable-stayed Bridge", "Ravi River", "J&K Gateway", "Photography"],
    badge: "Scenic Drive",
    badgeColor: "bg-sky-100 text-sky-700",
    tagColor: "text-sky-700 bg-sky-50",
    image: "/images/atal_setu.png",
  },
  {
    id: "barth-sahib",
    name: "Gurudwara Shri Barth Sahib",
    category: "Religious",
    distance: "20 km from city",
    duration: "1.5 hours",
    rating: 4.7,
    description:
      "Barth Sahib Gurudwara (Gurdwara Tap Asthan Baba Sri Chand) is located in Barth Village. It is a highly revered site associated with Baba Sri Chand, the eldest son of Guru Nanak Dev Ji. The tranquil environment and rich history make it a prominent pilgrimage destination.",
    highlights: ["Baba Sri Chand", "Historic Tap Asthan", "Tranquil Vibe", "Community Kitchen"],
    badge: "Sacred",
    badgeColor: "bg-blue-100 text-blue-700",
    tagColor: "text-blue-700 bg-blue-50",
    image: "/images/barth_sahib.png",
  }
];

const categories = ["All", "Natural / Scenic beauty", "Religious", "Adventure", "Historical"];

export default function AttractionsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredAttractions = activeCategory === "All"
    ? attractions
    : attractions.filter(a => a.category.includes(activeCategory));

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero */}
      <section className="relative bg-linear-to-br from-teal-900 via-slate-800 to-slate-900 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-teal-400 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300">
            <Star className="h-3 w-3 fill-teal-300" /> Famous Places
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight mb-4 sm:mb-6">
            Top <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-emerald-400">Attractions</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Pathankot is the meeting point of Punjab, J&K, and Himachal Pradesh. Discover the most stunning, historically rich, and deeply sacred sites the region has to offer.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[64px] z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>
      </div>

      {/* Alternating Attractions List */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="space-y-16 sm:space-y-24">
          {filteredAttractions.map((attraction, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={attraction.id}
                id={attraction.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center group animate-fade-in-up`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] rounded-4xl overflow-hidden shadow-2xl shadow-slate-200/60 ring-1 ring-slate-100">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating Number */}
                  <div className={`absolute top-6 ${isEven ? 'left-6' : 'right-6'} bg-white/90 backdrop-blur-sm text-slate-800 h-14 w-14 rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg`}>
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1 ${attraction.badgeColor}`}>{attraction.badge}</span>
                    <span className={`text-xs font-semibold rounded-full px-3 py-1 ${attraction.tagColor}`}>{attraction.category}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-4">{attraction.name}</h2>

                  <div className="flex-wrap items-center gap-5 text-sm font-semibold text-slate-500 mb-6 bg-slate-50 inline-flex p-3 rounded-xl border border-slate-100">
                    <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-teal-600" />{attraction.distance}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-amber-600" />{attraction.duration}</span>
                    <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-amber-400 text-amber-400" />{attraction.rating} / 5</span>
                  </div>

                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {attraction.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {attraction.highlights.map((h) => (
                      <span key={h} className="text-sm font-medium bg-slate-100 border border-slate-200 text-slate-700 rounded-lg px-4 py-1.5 shadow-sm">
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    <a
                      href={`https://maps.google.com?q=${encodeURIComponent(attraction.name + ", Pathankot, Punjab")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-all active:scale-95"
                    >
                      <Navigation className="h-4 w-4" /> Get Directions
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredAttractions.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-slate-500 text-xl font-medium mb-4">No attractions found in this category.</p>
              <button
                onClick={() => setActiveCategory("All")}
                className="inline-flex items-center justify-center bg-teal-50 text-teal-700 font-bold px-6 py-3 rounded-full hover:bg-teal-100 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
