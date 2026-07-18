import React from 'react';
import { seasons } from '../_data/content';
import { Card, CardContent } from '../../components/ui/Card';

export default function SeasonsGrid() {
  return (
    <section id="best-time-to-visit" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-slate-900">Best Time to Visit</h2>
        <p className="text-slate-600">October to March is widely considered the best window.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {seasons.map((season, idx) => (
          <Card key={idx} className="p-0 shadow-sm rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
            <CardContent className="p-6">
            <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4">
              <season.icon className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">{season.name}</h4>
            <p className="text-xs text-slate-500 leading-relaxed">{season.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
