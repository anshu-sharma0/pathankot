export interface SectionHeaderProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
}

export default function SectionHeader({ badge, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12 lg:mb-16 px-2">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
        {badge}
      </p>
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="mt-3 sm:mt-4 text-sm text-slate-500 leading-relaxed sm:text-base lg:text-lg">
        {subtitle}
      </p>
    </div>
  );
}
