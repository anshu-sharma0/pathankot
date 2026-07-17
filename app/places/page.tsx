import FamousPlaces from "../components/FamousPlaces";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Places to Visit in Pathankot | Tourism Guide",
  description: "Explore top attractions in Pathankot including Ranjit Sagar Dam, Nurpur Fort, and Mukteshwar Temple.",
};

export default function PlacesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="px-8 max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Places to Visit
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          From serene lakes and historic forts to spiritual temples, Pathankot offers a diverse range of attractions for every traveler. Explore the top destinations below.
        </p>
      </div>

      {/* Reusing our Famous Places component */}
      <FamousPlaces />
    </div>
  );
}
