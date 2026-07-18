import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'indigo' | 'emerald' | 'slate';
}

export function Badge({ children, className = '', variant = 'indigo' }: BadgeProps) {
  const variants = {
    indigo: "text-indigo-600 bg-indigo-50",
    emerald: "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20",
    slate: "text-slate-600 bg-slate-100"
  };
  
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
