import React from 'react';
import Link from 'next/link';
import { ArrowLeft, LucideIcon } from 'lucide-react';

type ThemeColor = 'amber' | 'indigo' | 'rose';

interface PageHeroProps {
  badgeIcon: LucideIcon;
  badgeText: string;
  titlePrefix: string;
  titleHighlight: string;
  description: React.ReactNode;
  theme: ThemeColor;
  backLink?: {
    href: string;
    text: string;
  };
}

const themeStyles = {
  amber: {
    bg: "from-slate-900 via-slate-800 to-amber-950",
    overlay: "from-amber-400",
    badge: "border-amber-500/20 bg-amber-500/10 text-amber-300",
    textGradient: "from-amber-400 to-orange-500",
    backLink: "text-amber-400 hover:text-amber-300"
  },
  indigo: {
    bg: "from-indigo-950 via-slate-900 to-indigo-900",
    overlay: "from-indigo-400",
    badge: "border-indigo-500/20 bg-indigo-500/10 text-indigo-300",
    textGradient: "from-indigo-400 to-sky-400",
    backLink: "text-indigo-400 hover:text-indigo-300"
  },
  rose: {
    bg: "from-slate-900 via-slate-800 to-rose-950",
    overlay: "from-rose-500",
    badge: "border-rose-500/20 bg-rose-500/10 text-rose-300",
    textGradient: "from-rose-400 to-orange-400",
    backLink: "text-rose-400 hover:text-rose-300"
  }
};

export function PageHero({
  badgeIcon: BadgeIcon,
  badgeText,
  titlePrefix,
  titleHighlight,
  description,
  theme,
  backLink
}: PageHeroProps) {
  const styles = themeStyles[theme];

  return (
    <section className={`relative overflow-hidden bg-linear-to-br ${styles.bg} py-24 sm:py-32 px-4 sm:px-6 lg:px-8`}>
      <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${styles.overlay} via-transparent to-transparent`} />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {backLink && (
          <Link href={backLink.href} className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors mb-8 ${styles.backLink}`}>
            <ArrowLeft className="h-4 w-4" /> {backLink.text}
          </Link>
        )}
        <div className="mb-6 flex items-center justify-center">
          <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${styles.badge}`}>
            <BadgeIcon className="h-3 w-3" /> {badgeText}
          </div>
        </div>
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-7xl tracking-tight mb-6">
          {titlePrefix} <span className={`text-transparent bg-clip-text bg-linear-to-r ${styles.textGradient}`}>{titleHighlight}</span>
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
