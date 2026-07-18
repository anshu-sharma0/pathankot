import Image from "next/image";
import { MapPin, Navigation } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Link from "next/link";

const places = [
  {
    name: "Mukteshwar Temple",
    description: "Ancient 5000-year-old cave temples carved by the Pandavas on the banks of River Ravi.",
    distance: "25 km from City Center",
    image: "/images/mukteshwar.png",
  },
  {
    name: "Ranjit Sagar Dam",
    description: "A spectacular hydroelectric dam offering boating, lush landscapes, and perfect picnic spots.",
    distance: "16 km from City Center",
    image: "/images/ranjit_sagar_dam.jpeg",
  },
  {
    name: "Nurpur Fort",
    description: "Historic Mughal-era fort featuring the unique Brij Raj Swami temple.",
    distance: "25 km from City Center",
    image: "/images/nurpur-fort.png",
  },
];

export default function FamousPlaces() {
  return (
    <section id="tourism" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-linear-to-b from-white to-amber-50/30">
      <SectionHeader
        badge="Tourism Spotlight"
        title={
          <>
            Explore the <span className="gradient-text bg-linear-to-r from-amber-500 to-orange-500">Beauty of Pathankot</span>
          </>
        }
        subtitle="Discover ancient heritage, serene nature, and historic marvels nestled in the foothills of the Himalayas."
      />

      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {places.map((place, i) => (
          <div
            key={place.name}
            className="perspective-container animate-fade-in-up group"
          >
            <div className="card-3d relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-shadow hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100 sm:h-56">
                {/* Fallback pattern in case image fails */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[16px_16px] opacity-30" />
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                  {place.name}
                </h3>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 mb-3">
                  <MapPin className="h-3.5 w-3.5" />
                  {place.distance}
                </p>
                <p className="text-sm leading-relaxed text-slate-600 flex-1">
                  {place.description}
                </p>
                <button className="mt-4 flex w-fit items-center gap-2 rounded-lg bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 transition-colors hover:bg-amber-100">
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          href="/tourism/attractions"
          className="inline-flex items-center rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-amber-600 hover:shadow-lg"
        >
          Explore All Places
        </Link>
      </div>
    </section>
  );
}
