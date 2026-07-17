import { Mountain, Map, Leaf, UtensilsCrossed } from "lucide-react";
import CityCard, { type CityCardProps } from "./CityCard";

const cards: Omit<CityCardProps, "delay">[] = [
  {
    icon: Mountain,
    title: "Heritage & Spiritual",
    subtitle: "Sacred Sites",
    description:
      "Discover ancient temples like Mukteshwar Mahadev and explore the majestic ruins of Nurpur and Shahpurkandi forts.",
    highlights: ["Mukteshwar Temple", "Nurpur Fort", "Kathgarh Mahadev"],
    gradient: "from-amber-50 to-orange-100/60",
    textColor: "text-amber-700",
    borderColor: "border-amber-200/60",
    iconBg: "bg-amber-100",
    accentGradient: "from-amber-400 to-orange-500",
  },
  {
    icon: Leaf,
    title: "Nature & Outdoors",
    subtitle: "Scenic Beauty",
    description:
      "Experience the tranquility of the Ranjit Sagar Dam, enjoy boating, and drive across the breathtaking Atal Setu bridge.",
    highlights: ["Ranjit Sagar Dam", "Atal Setu", "Madhopur"],
    gradient: "from-emerald-50 to-teal-100/60",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200/60",
    iconBg: "bg-emerald-100",
    accentGradient: "from-emerald-400 to-teal-500",
  },
  {
    icon: Map,
    title: "Gateway to the Hills",
    subtitle: "Transit Hub",
    description:
      "The perfect staging point for your journeys into Dalhousie, Dharamshala, Chamba, and the majestic Kangra Valley.",
    highlights: ["Dalhousie Route", "Kangra Valley", "Chamba"],
    gradient: "from-sky-50 to-indigo-100/60",
    textColor: "text-sky-700",
    borderColor: "border-sky-200/60",
    iconBg: "bg-sky-100",
    accentGradient: "from-sky-400 to-indigo-500",
  },
  {
    icon: UtensilsCrossed,
    title: "Culture & Cuisine",
    subtitle: "Local Flavor",
    description:
      "Taste authentic Punjabi flavors, famous local sweets, and shop for traditional handicrafts in bustling local markets.",
    highlights: ["Famous Kulchas", "Local Sweets", "Handicrafts"],
    gradient: "from-rose-50 to-red-100/60",
    textColor: "text-rose-700",
    borderColor: "border-rose-200/60",
    iconBg: "bg-rose-100",
    accentGradient: "from-rose-400 to-red-500",
  },
];

export default function CityGrid() {
  return (
    <section id="services" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
          Discover Pathankot
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
          Experience Pathankot,{" "}
          <span className="gradient-text bg-linear-to-r from-amber-500 via-rose-500 to-indigo-500">
            like never before
          </span>
        </h2>
        <p className="mt-4 text-base text-slate-500 leading-relaxed sm:text-lg">
          From sacred heritage and scenic outdoors to vibrant local culture, discover why Pathankot is the ultimate travel destination.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {cards.map((card, i) => (
          <CityCard key={card.title} {...card} delay={0.1 * i} />
        ))}
      </div>
    </section>
  );
}
