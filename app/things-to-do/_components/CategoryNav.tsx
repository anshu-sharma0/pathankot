import React from 'react';

export default function CategoryNav() {
  return (
    <div className="sticky top-16 z-40 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm py-4 px-6 overflow-x-auto hide-scrollbar">
      <div className="max-w-7xl mx-auto flex items-center gap-4 md:justify-center whitespace-nowrap">
        {['Things to Do', 'Best Time To Visit', 'Stay', 'Most Loved Places', 'What\'s around'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
