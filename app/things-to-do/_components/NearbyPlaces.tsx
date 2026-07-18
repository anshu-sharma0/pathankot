import React from 'react';
import { MapPin } from 'lucide-react';
import { Section } from '../../components/layout/Section';
import { GridLayout } from '../../components/layout/GridLayout';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

export interface Place {
  name: string;
  distance: string;
  desc: string;
}

export interface NearbyPlacesProps {
  places: Place[];
  title?: string;
  description?: string;
}

export default function NearbyPlaces({ 
  places, 
  title = "Gateway to the Hills", 
  description = "One of Pathankot’s greatest strengths is what lies just beyond its borders. The hill stations near Pathankot are among the most celebrated in northern India." 
}: NearbyPlacesProps) {
  return (
    <Section id="whats-around">
      <div className="flex items-center justify-center gap-6 border-b border-slate-200 pb-6">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-4xl font-bold text-center text-slate-900">{title}</h2>
          <p className="text-slate-600 text-center text-lg">{description}</p>
        </div>
      </div>

      <GridLayout>
        {places.map((place, idx) => (
          <Card key={idx} className="flex gap-4 p-4">
            <div className="shrink-0 w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-bold text-slate-900">{place.name}</h4>
                <Badge variant="indigo">{place.distance}</Badge>
              </div>
              <p className="text-sm text-slate-600 line-clamp-2">{place.desc}</p>
            </div>
          </Card>
        ))}
      </GridLayout>
    </Section>
  );
}
