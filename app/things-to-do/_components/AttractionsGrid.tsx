import React from 'react';
import { topPlaces } from '../_data/content';
import FeatureCard, { Color } from '../../components/FeatureCard';

export default function AttractionsGrid() {
  return (
    <section id="most-loved-places" className="space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900">Most Loved Attractions</h2>
        <p className="text-slate-600 text-lg">Take the temples in the morning when the light is softer, and save the outdoor sites for late afternoon when the colours deepen.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topPlaces.map((place, idx) => (
          <FeatureCard
            key={idx}
            icon={place.icon}
            title={place.name}
            description={place.description}
            badge={place.type}
            color={place.color as Color}
            tags={place.tags}
          />
        ))}
      </div>
    </section>
  );
}
