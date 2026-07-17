import CultureSection from "../components/CultureSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Things to Do in Pathankot | Activities & Adventures",
  description: "Discover the best activities, local shopping, food spots, and nature trails in Pathankot.",
};

export default function ThingsToDoPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="px-8 max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Things to Do
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Immerse yourself in the local lifestyle. Whether it's tasting the local cuisine, shopping for handicrafts, or enjoying nature walks, there's always something to do in Pathankot.
        </p>
      </div>

      <CultureSection />
      
      <div className="px-8 max-w-7xl mx-auto my-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-3xl bg-blue-50 border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Nature Walks & Boating</h3>
            <p className="text-blue-800/80">Experience the tranquility of Ranjit Sagar Dam with boating facilities and scenic trails around the lake.</p>
          </div>
          <div className="p-6 rounded-3xl bg-orange-50 border border-orange-100">
            <h3 className="text-xl font-bold text-orange-900 mb-2">Local Food Exploration</h3>
            <p className="text-orange-800/80">Try the famous local Kulchas, Chole Bhature, and traditional sweets at historic city eateries.</p>
          </div>
          <div className="p-6 rounded-3xl bg-purple-50 border border-purple-100">
            <h3 className="text-xl font-bold text-purple-900 mb-2">Shopping Spree</h3>
            <p className="text-purple-800/80">Visit Dhangu Road and Mission Road markets for local textiles, handicrafts, and souvenirs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
