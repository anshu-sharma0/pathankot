import { Plane, Train, Bus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const routes = [
  {
    mode: "By Train",
    icon: Train,
    description: "A major railway junction linking Punjab, Himachal, and J&K. Served by direct trains from Delhi, Mumbai, and Kolkata.",
    highlights: ["Pathankot Junction (PTK)", "Pathankot Cantt (PTKC)", "Chakki Bank"],
    color: "emerald",
  },
  {
    mode: "By Bus",
    icon: Bus,
    description: "Well-connected by NH-44 and NH-154. Regular HRTC and PRTC Volvo/AC buses ply to major neighboring cities.",
    highlights: ["Maharana Pratap ISBT", "Direct to Dalhousie", "Direct to Jammu"],
    color: "sky",
  },
  {
    mode: "By Air",
    icon: Plane,
    description: "The nearest airports provide domestic connectivity. Amritsar International Airport is a 2.5-hour drive away.",
    highlights: ["Pathankot Airport (Civil)", "Gaggal Airport (90km)", "Amritsar (100km)"],
    color: "indigo",
  },
];

const colorClasses = {
  emerald: {
    gradient: "from-emerald-50 to-teal-50",
    text: "text-emerald-700",
    bg: "bg-emerald-100",
    border: "border-emerald-200/60",
    hover: "group-hover:border-emerald-300",
  },
  sky: {
    gradient: "from-sky-50 to-blue-50",
    text: "text-sky-700",
    bg: "bg-sky-100",
    border: "border-sky-200/60",
    hover: "group-hover:border-sky-300",
  },
  indigo: {
    gradient: "from-indigo-50 to-violet-50",
    text: "text-indigo-700",
    bg: "bg-indigo-100",
    border: "border-indigo-200/60",
    hover: "group-hover:border-indigo-300",
  },
};

export default function HowToReach() {
  return (
    <section id="transit" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-linear-to-b from-white to-emerald-50/30">
      <SectionHeader
        badge="Connectivity"
        title={
          <>
            How to Reach <span className="gradient-text bg-linear-to-r from-emerald-500 to-teal-500">Pathankot</span>
          </>
        }
        subtitle="As the primary gateway to the Himalayas, Pathankot enjoys excellent connectivity via rail, road, and air."
      />

      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
        {routes.map((route, i) => {
          const colors = colorClasses[route.color as keyof typeof colorClasses];
          const Icon = route.icon;

          return (
            <div
              key={route.mode}
              className="perspective-container animate-fade-in-up"
              style={{ animationDelay: `${0.15 * i}s` }}
            >
              <div
                className={`card-3d group relative flex h-full flex-col rounded-2xl border ${colors.border} bg-linear-to-br ${colors.gradient} p-6 backdrop-blur-sm transition-colors ${colors.hover}`}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg}`}>
                  <Icon className={`h-6 w-6 ${colors.text}`} />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {route.mode}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                  {route.description}
                </p>

                <ul className="space-y-2">
                  {route.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className={`h-1.5 w-1.5 rounded-full ${colors.bg} ring-2 ring-white`} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
