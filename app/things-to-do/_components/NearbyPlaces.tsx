import React from 'react';
import { MapPin } from 'lucide-react';
import { nearbyPlaces } from '../_data/content';

export default function NearbyPlaces() {
  return (
    <section id="whats-around" className="space-y-12">
      <div className="flex items-center justify-center gap-6 border-b border-slate-200 pb-6">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-4xl font-bold text-center text-slate-900">Gateway to the Hills</h2>
          <p className="text-slate-600 text-center text-lg">One of Pathankot’s greatest strengths is what lies just beyond its borders. The hill stations near Pathankot are among the most celebrated in northern India.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nearbyPlaces.map((place, idx) => (
          <div key={idx} className="group flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 cursor-pointer">
            <div className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-bold text-slate-900">{place.name}</h4>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{place.distance}</span>
              </div>
              <p className="text-sm text-slate-600 line-clamp-2">{place.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
