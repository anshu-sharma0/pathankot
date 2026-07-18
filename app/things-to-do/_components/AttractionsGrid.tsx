import React from 'react';
import { Clock } from 'lucide-react';
import { topPlaces } from '../_data/content';

export default function AttractionsGrid() {
  return (
    <section id="most-loved-places" className="space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900">Most Loved Attractions</h2>
        <p className="text-slate-600 text-lg">Take the temples in the morning when the light is softer, and save the outdoor sites for late afternoon when the colours deepen.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topPlaces.map((place, idx) => (
          <div key={idx} className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${place.color}`} />

            <div className="flex justify-between items-start mb-6 mt-2">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${place.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                <place.icon className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                {place.time}
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {place.name}
              </h3>
              <p className="text-sm font-medium text-indigo-600 uppercase tracking-wider">
                {place.type}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                {place.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
              {place.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
