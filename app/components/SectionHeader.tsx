export interface SectionHeaderProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
}

export default function SectionHeader({ badge, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
        {badge}
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base text-slate-500 leading-relaxed sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}
