import React from 'react';

export interface StatItem {
  label: string;
  value: string;
  desc?: string;
}

interface StatsBannerProps {
  stats: StatItem[];
  title?: string;
  subtitle?: string;
  columns?: 4 | 6;
  variant?: 'minimal' | 'card';
  className?: string;
}

export function StatsBanner({ 
  stats, 
  title, 
  subtitle, 
  columns = 6, 
  variant = 'minimal',
  className = ''
}: StatsBannerProps) {
  const isMinimal = variant === 'minimal';
  
  const gridCols = columns === 6 
    ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" 
    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className={isMinimal ? `bg-white border-b border-slate-100 ${className}` : `rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 ${className}`}>
      <div className={isMinimal ? "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8" : ""}>
        {(title || subtitle) && (
          <div className="text-center mb-8">
            {title && <h2 className="text-2xl font-extrabold text-slate-800">{title}</h2>}
            {subtitle && <p className="text-slate-500 mt-2">{subtitle}</p>}
          </div>
        )}
        
        <div className={`grid gap-4 sm:gap-6 ${gridCols}`}>
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={isMinimal 
                ? "text-center p-2 sm:p-3" 
                : "p-5 rounded-2xl border border-slate-100 bg-slate-50 text-center"
              }
            >
              <p className={isMinimal 
                ? "text-base sm:text-lg font-bold text-slate-800 truncate"
                : "text-3xl font-black text-rose-500 mb-1"
              }>
                {stat.value}
              </p>
              <p className={isMinimal 
                ? "text-[10px] sm:text-xs text-slate-400 mt-0.5 uppercase tracking-wider"
                : "font-bold text-slate-800 text-sm uppercase tracking-wide mb-2"
              }>
                {stat.label}
              </p>
              {!isMinimal && stat.desc && (
                <p className="text-xs text-slate-500">{stat.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
