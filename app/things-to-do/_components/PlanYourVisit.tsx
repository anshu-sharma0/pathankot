import React from 'react';
import { operatingHours } from '../_data/content';

export default function PlanYourVisit() {
  return (
    <section className="bg-slate-900 text-slate-50 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-indigo-600/20 to-transparent pointer-events-none" />

      <div className="relative z-10 space-y-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Plan Your Visit</h2>
          <p className="text-slate-400">Operating hours and ticket prices for major attractions in Pathankot. Timings may vary seasonally; confirm locally before visiting.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="py-4 px-4 font-semibold text-slate-300">Attraction</th>
                <th className="py-4 px-4 font-semibold text-slate-300">Visiting Hours</th>
                <th className="py-4 px-4 font-semibold text-slate-300">Entry Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {operatingHours.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 font-medium text-white">{row.place}</td>
                  <td className="py-4 px-4 text-slate-400">{row.hours}</td>
                  <td className="py-4 px-4 text-slate-400">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/20">
                      {row.fee}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
