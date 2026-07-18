import Link from "next/link";
import { ArrowRight, Train, Shield, Compass, MapPin, Globe } from "lucide-react";
import HeroSection from "./components/HeroSection";
import WeatherWidget from "./components/WeatherWidget";
import FamousPlaces from "./components/FamousPlaces";
import { Card } from "./components/ui/Card";

const quickLinks = [
  {
    title: "Explore the City",
    desc: "Dive into the history, culture, and demographics of Pathankot.",
    href: "/explore",
    icon: Compass,
    color: "emerald"
  },
  {
    title: "Plan Your Visit",
    desc: "Complete transit guides, itineraries, and gateway destinations.",
    href: "/plan",
    icon: Train,
    color: "indigo"
  },
  {
    title: "Support",
    desc: "Emergency contacts, administrative directory, and local services.",
    href: "/support",
    icon: Shield,
    color: "rose"
  },
  {
    title: "Things to Do",
    desc: "Discover top temples, forts, dams, and activities for every type of visitor.",
    href: "/things-to-do",
    icon: MapPin,
    color: "teal"
  },
  {
    title: "Tourism Guide",
    desc: "Religious, adventure, and hidden gems. Your complete Pathankot tourism guide.",
    href: "/tourism",
    icon: Globe,
    color: "purple"
  }
];

const featuredAttractions = [
  {
    name: "Mukteshwar Mahadev",
    image: "/images/mukteshwar.png",
    desc: "Ancient cave temples dedicated to Lord Shiva on the banks of Ravi river."
  },
  {
    name: "Ranjit Sagar Dam",
    image: "/images/ranjit_sagar_dam.jpeg",
    desc: "A stunning hydroelectric project offering boating and lush green views."
  },
  {
    name: "Atal Setu",
    image: "/images/atal_setu.png",
    desc: "A 592-meter cable-stayed bridge over the Ranjit Sagar reservoir, linking Punjab to Jammu & Kashmir."
  }
];

const colorClasses: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-600 border-emerald-200 group-hover:bg-emerald-500",
  indigo: "bg-indigo-50 text-indigo-600 border-indigo-200 group-hover:bg-indigo-500",
  rose: "bg-rose-50 text-rose-600 border-rose-200 group-hover:bg-rose-500",
  teal: "bg-teal-50 text-teal-600 border-teal-200 group-hover:bg-teal-500",
  purple: "bg-purple-50 text-purple-600 border-purple-200 group-hover:bg-purple-500",
};

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <HeroSection />

      {/* --- Weather & Intro Section --- */}
      <section className="relative z-20 -mt-12 lg:-mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Welcome Card */}
          <Card className="lg:col-span-2 px-8 py-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-6 w-max">
              <MapPin className="h-3 w-3" /> Welcome to Pathankot
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
              The Northern Gateway of Punjab
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg max-w-2xl">
              Situated at the meeting point of three northern states, Pathankot is a city of historical resonance, rich culture, and strategic importance. Whether you are seeking spiritual peace, a mountain gateway, or robust local commerce, everything begins here.
            </p>
          </Card>

          {/* Weather Widget */}
          <div className="h-full flex flex-col justify-stretch">
            <div className="flex-1 h-full rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50">
              <WeatherWidget variant="detailed" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Navigation Cards --- */}
      <section className="px-4 lg:px-6 max-w-7xl mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-4">Discover & Navigate</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">Your digital concierge for exploring Pathankot.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            const style = colorClasses[link.color];

            return (
              <Link
                key={link.title}
                href={link.href}
                className="group block"
              >
                <Card className="relative p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden h-full">
                  <div className="flex gap-3 mb-4 items-center">
                    <div className={`inline-flex p-3 rounded-2xl transition-colors duration-300 ${style.split(' ')[0]} ${style.split(' ')[1]} ${style.split(' ')[3]} group-hover:text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl mb-2 font-bold text-slate-800">{link.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm mb-4">{link.desc}</p>
                  <div className="flex items-center text-sm font-semibold text-slate-400 group-hover:text-slate-800 transition-colors">
                    Explore <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <FamousPlaces />
    </div>
  );
}
