import { Mountain, TrainFront, Users, Factory } from "lucide-react";
import CityCard, { type CityCardProps } from "./CityCard";

const cards: Omit<CityCardProps, "delay">[] = [
  {
    icon: Mountain,
    title: "Tourism & Heritage",
    subtitle: "Explore",
    description:
      "Discover ancient temples, Mughal-era forts, and scenic mountain foothills — the staging point for Dalhousie, Dharamshala, and the Kangra Valley.",
    highlights: ["Mukteshwar Temple", "Nurpur Fort", "Ranjit Sagar Dam"],
    gradient: "from-amber-50 to-orange-100/60",
    textColor: "text-amber-700",
    borderColor: "border-amber-200/60",
    iconBg: "bg-amber-100",
    accentGradient: "from-amber-400 to-orange-500",
  },
  {
    icon: TrainFront,
    title: "Transit Hub",
    subtitle: "Connectivity",
    description:
      "A key rail-road junction connecting Punjab to J&K and Himachal. Three railway stations and a national highway network converge here.",
    highlights: ["Pathankot Jn.", "Chakki Bank", "NH-44 / NH-154"],
    gradient: "from-emerald-50 to-teal-100/60",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200/60",
    iconBg: "bg-emerald-100",
    accentGradient: "from-emerald-400 to-teal-500",
  },
  {
    icon: Users,
    title: "Citizen Services",
    subtitle: "Governance",
    description:
      "Access municipal utilities, file grievances, apply for permits, and track water & sanitation services from one digital window.",
    highlights: ["Grievance Portal", "Property Tax", "Water & Sewer"],
    gradient: "from-rose-50 to-red-100/60",
    textColor: "text-rose-700",
    borderColor: "border-rose-200/60",
    iconBg: "bg-rose-100",
    accentGradient: "from-rose-400 to-red-500",
  },
  {
    icon: Factory,
    title: "Trade & Economy",
    subtitle: "Industry",
    description:
      "Home to traditional Loi textile weaving and a thriving stone-crushing corridor. Cross-border trade fuels the city's economy.",
    highlights: ["Loi Weaving", "Stone Crushing", "Border Trade"],
    gradient: "from-sky-50 to-indigo-100/60",
    textColor: "text-sky-700",
    borderColor: "border-sky-200/60",
    iconBg: "bg-sky-100",
    accentGradient: "from-sky-400 to-indigo-500",
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
          Everything the city offers,{" "}
          <span className="gradient-text bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-500">
            at a glance
          </span>
        </h2>
        <p className="mt-4 text-base text-slate-500 leading-relaxed sm:text-lg">
          From sacred heritage to modern services — explore all facets of Punjab&apos;s gateway city.
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
