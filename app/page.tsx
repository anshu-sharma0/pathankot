import Link from "next/link";
import { ArrowRight, Map, Train, Shield, Compass, Mountain, MapPin } from "lucide-react";
import HeroSection from "./components/HeroSection";
import WeatherWidget from "./components/WeatherWidget";

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
    title: "Support & Helplines",
    desc: "Emergency contacts, administrative directory, and local services.",
    href: "/support",
    icon: Shield,
    color: "rose"
  }
];

const featuredAttractions = [
  {
    name: "Mukteshwar Mahadev",
    image: "https://images.openai.com/static-rsc-4/L6PC_MV2XDAwbE5z8bZjVDzOywGsWKkRVX0fBZISLo0il5_kr2XZzhNZiTzNAC342SerSxV3apFwmjsKpL_pWczh_Jjqh9bhiO_6uduytbzgIidZa-fifj5Iopt4iSz6ID7mOwNTITdcnirUWKMYRQH6pzfXavgxGtKWm0Z_9FbhK0PiwlMI7UVna3qDENKM?purpose=fullsize",
    desc: "Ancient cave temples dedicated to Lord Shiva on the banks of Ravi river."
  },
  {
    name: "Ranjit Sagar Dam",
    image: "https://images.openai.com/static-rsc-4/wAIBFZG0_epRr4iBzyG09HMd_WhDg7EfoaD56-vS1Wf6KjO8Yk_E2zOQn6iO2V6aBqyU4qY8v3YyRkR7c5m2l9kK2E8a5w6z8q8V8f5p1Y0m4N5q2H8c7P9n3D4r9G5Z4x7V1s8?purpose=fullsize",
    desc: "A stunning hydroelectric project offering boating and lush green views."
  },
  {
    name: "Atal Setu",
    image: "https://images.openai.com/static-rsc-4/lmdj6XfQM9wYUkEc3BWxhpupiEwyL9_Uaw8WLH2Qx0bSPm0ohOlwilQiEMvU19GPfdTvXPwdVLyllI-FG-3jL3uHc4gmVbQMsybRudRi3iTJYl_5oz9VgQgzJVuhx61wZ-IoPKlTY1hGF8iLOM3waFIHqKDQFmGvdHTOLKCokjNa_8CL9pIYAwMjj0Djh9Ng?purpose=fullsize",
    desc: "An architectural marvel bridging Punjab, J&K, and Himachal Pradesh."
  }
];

const colorClasses: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-600 border-emerald-200 group-hover:bg-emerald-500",
  indigo: "bg-indigo-50 text-indigo-600 border-indigo-200 group-hover:bg-indigo-500",
  rose: "bg-rose-50 text-rose-600 border-rose-200 group-hover:bg-rose-500",
};

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <HeroSection />

      {/* --- Weather & Intro Section --- */}
      <section className="relative z-20 -mt-12 lg:-mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Welcome Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl px-8! py-6! shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-6 w-max">
              <MapPin className="h-3 w-3" /> Welcome to Pathankot
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
              The Northern Gateway of Punjab
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg max-w-2xl">
              Situated at the meeting point of three northern states, Pathankot is a city of historical resonance, rich culture, and strategic importance. Whether you are seeking spiritual peace, a mountain gateway, or robust local commerce, everything begins here.
            </p>
          </div>

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

        <div className="grid md:grid-cols-3 gap-6">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            const style = colorClasses[link.color];

            return (
              <Link
                key={link.title}
                href={link.href}
                className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className="flex gap-3 mb-4 items-center">
                  <div className={`inline-flex p-3 rounded-2xl transition-colors duration-300 ${style.split(' ')[0]} ${style.split(' ')[1]} ${style.split(' ')[3]} group-hover:text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{link.title}</h3>
                </div>
                <p className="text-slate-500 leading-relaxed text-sm mb-4">{link.desc}</p>
                <div className="flex items-center text-sm font-semibold text-slate-400 group-hover:text-slate-800 transition-colors">
                  Explore <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* --- Top Attractions Preview --- */}
      <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-400 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
                <Mountain className="h-3 w-3" /> Tourism
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Top Attractions</h2>
            </div>
            <Link href="/tourism/attractions" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full font-semibold transition-all backdrop-blur-md">
              View All Places <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredAttractions.map((place) => (
              <div key={place.name} className="group relative rounded-3xl overflow-hidden h-[400px] border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={place.image}
                  alt={place.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{place.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {place.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
