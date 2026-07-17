import HowToReach from "../components/HowToReach";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan Your Trip to Pathankot | Travel Itinerary",
  description: "Plan the perfect weekend getaway or long vacation to Pathankot. Find travel tips, transport details, and itineraries.",
};

export default function PlanTripPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="px-8 max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Plan Your Trip
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Getting to Pathankot is easy, and staying here is comfortable. Find all the information you need to plan your journey, accommodation, and itineraries.
        </p>
      </div>

      <HowToReach />
      
      <div className="px-8 max-w-7xl mx-auto my-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Where to Stay</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white shadow-lg border border-slate-100">
            <h3 className="text-xl font-bold text-teal-700 mb-2">Luxury & Resorts</h3>
            <p className="text-slate-600">Experience premium hospitality with mountain views and top-tier amenities.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow-lg border border-slate-100">
            <h3 className="text-xl font-bold text-teal-700 mb-2">Budget Hotels</h3>
            <p className="text-slate-600">Comfortable and affordable stays located conveniently near the railway station and bus stand.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow-lg border border-slate-100">
            <h3 className="text-xl font-bold text-teal-700 mb-2">Govt. Rest Houses</h3>
            <p className="text-slate-600">Authentic experiences in government-maintained heritage guest houses (advance booking required).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
