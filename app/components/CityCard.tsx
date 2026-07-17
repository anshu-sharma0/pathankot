import { type LucideIcon, ArrowUpRight } from "lucide-react";

export interface CityCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  gradient: string;        // e.g. "from-amber-50 to-orange-100/60"
  textColor: string;       // e.g. "text-amber-700"
  borderColor: string;     // e.g. "border-amber-200/60"
  iconBg: string;          // e.g. "bg-amber-100"
  accentGradient: string;  // e.g. "from-amber-400 to-orange-500"
  delay?: number;
}

export default function CityCard({
  icon: Icon,
  title,
  subtitle,
  description,
  highlights,
  gradient,
  textColor,
  borderColor,
  iconBg,
  accentGradient,
  delay = 0,
}: CityCardProps) {
  return (
    <div
      className="perspective-container animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <article
        className={`card-3d group relative flex h-full flex-col rounded-2xl border ${borderColor} bg-gradient-to-br ${gradient} p-6 backdrop-blur-sm transition-all sm:p-7`}
      >
        {/* Decorative top-right corner glow */}
        <div
          className={`absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br ${accentGradient} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}
        />

        {/* Icon */}
        <div
          className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} shadow-sm transition-transform group-hover:scale-110`}
        >
          <Icon className={`h-6 w-6 ${textColor}`} />
          {/* Floating ring */}
          <div
            className={`absolute -inset-1 rounded-xl border ${borderColor} opacity-0 transition-opacity group-hover:opacity-100`}
          />
        </div>

        {/* Label */}
        <span className={`text-[10px] font-bold uppercase tracking-[0.15em] ${textColor} opacity-70`}>
          {subtitle}
        </span>

        {/* Title */}
        <h3 className="mt-1.5 text-xl font-bold tracking-tight text-slate-800">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
          {description}
        </p>

        {/* Highlights */}
        <ul className="mt-5 flex flex-wrap gap-2">
          {highlights.map((item) => (
            <li
              key={item}
              className={`rounded-full border ${borderColor} bg-white/60 px-3 py-1 text-xs font-medium ${textColor} backdrop-blur-sm`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* CTA link */}
        <div className="mt-6 flex items-center">
          <a
            href="#"
            className={`group/link flex items-center gap-1.5 text-sm font-semibold ${textColor} transition-colors`}
          >
            Explore
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
          {/* Animated underline */}
          <span
            className={`ml-1 h-px w-0 bg-gradient-to-r ${accentGradient} transition-all duration-300 group-hover:w-8`}
          />
        </div>
      </article>
    </div>
  );
}
