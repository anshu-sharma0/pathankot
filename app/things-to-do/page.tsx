import HeroSection from './_components/HeroSection';
import AttractionsGrid from './_components/AttractionsGrid';
import SeasonsGrid from './_components/SeasonsGrid';
import NearbyPlaces from './_components/NearbyPlaces';
import { nearbyPlaces } from './_data/content';

export default function ThingsToDoPage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-500 selection:text-white pb-24">
      {/* ─── HERO SECTION (ETHEREAL & OBSIDIAN) ─── */}
      <HeroSection />

      <main className="max-w-7xl mx-auto px-6 space-y-32 py-16">
        {/* ─── MOST LOVED PLACES (GRID) ─── */}
        <AttractionsGrid />

        {/* ─── BEST TIME TO VISIT ─── */}
        <SeasonsGrid />

        {/* ─── WHAT'S AROUND (NEARBY PLACES) ─── */}
        <NearbyPlaces places={nearbyPlaces} />
      </main>
    </div>
  );
}
