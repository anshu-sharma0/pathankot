"use client";

import { useState, useRef, useEffect } from "react";
import { Filter, ChevronDown, Check } from "lucide-react";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({ categories, activeCategory, onSelect }: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full">
      {/* Mobile Dropdown (visible on < sm screens) */}
      <div className="sm:hidden relative" ref={dropdownRef}>
        <div className="flex items-center gap-2 mb-2 px-1">
          <Filter className="h-4 w-4 text-slate-500" />
          <span className="text-sm font-semibold text-slate-500">Filter by Category:</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between bg-white border border-slate-200 px-4 py-3 rounded-2xl text-slate-800 font-bold shadow-sm hover:bg-slate-50 transition-colors"
        >
          {activeCategory}
          <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden animate-fade-in-up origin-top">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onSelect(cat);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-5 py-3.5 text-left font-semibold transition-colors border-b border-slate-100 ${activeCategory === cat ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:bg-slate-50'
                  }`}
              >
                {cat}
                {activeCategory === cat && <Check className="h-4 w-4 text-teal-600" />}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Inline Buttons (visible on >= sm screens) */}
      <div className="hidden sm:flex items-center gap-4 overflow-x-auto pb-1 scrollbar-hide">
        <span className="flex items-center gap-2 text-sm font-semibold text-slate-500 shrink-0">
          <Filter className="h-4 w-4" /> Filter:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`shrink-0 px-5 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat
              ? "bg-teal-600 text-white shadow-md shadow-teal-200"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
