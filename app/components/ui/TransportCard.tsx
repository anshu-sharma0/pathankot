import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TransportCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  themeColor: 'indigo' | 'rose' | 'teal';
  children: React.ReactNode;
}

const themeStyles = {
  indigo: {
    groupHover: "hover:border-indigo-200",
    iconBg: "bg-indigo-50 text-indigo-600",
    iconGroupHover: "group-hover:bg-indigo-600 group-hover:text-white"
  },
  rose: {
    groupHover: "hover:border-rose-200",
    iconBg: "bg-rose-50 text-rose-600",
    iconGroupHover: "group-hover:bg-rose-600 group-hover:text-white"
  },
  teal: {
    groupHover: "hover:border-teal-200",
    iconBg: "bg-teal-50 text-teal-600",
    iconGroupHover: "group-hover:bg-teal-600 group-hover:text-white"
  }
};

export function TransportCard({
  icon: Icon,
  title,
  description,
  themeColor,
  children
}: TransportCardProps) {
  const styles = themeStyles[themeColor];
  
  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row gap-8 items-stretch group transition-colors ${styles.groupHover}`}>
      <div className="md:w-1/3 flex flex-col justify-center">
        <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl mb-6 transition-colors ${styles.iconBg} ${styles.iconGroupHover}`}>
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-500 leading-relaxed mb-4">
          {description}
        </p>
      </div>
      <div className="md:w-2/3">
        {children}
      </div>
    </div>
  );
}
