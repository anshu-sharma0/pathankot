import { MapPin, Navigation } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function CityMap() {
  return (
    <section id="map" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-linear-to-b from-white to-sky-50/30">
      <SectionHeader
        badge="Location"
        title={
          <>
            Find Your Way Around <span className="gradient-text bg-linear-to-r from-sky-500 to-blue-500">Pathankot</span>
          </>
        }
        subtitle="Navigate through the city's key landmarks, administrative offices, and transit hubs."
      />

      <div className="mx-auto max-w-7xl">
        <div className="perspective-container animate-fade-in-up">
          <div className="card-3d relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-sm ring-1 ring-slate-100 p-2">

            {/* Styled map container */}
            <div className="relative h-[280px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden bg-slate-100">
              {/* Iframe for actual Google Maps embed of Pathankot */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54238.2570076262!2d75.61718049187303!3d32.26871583098592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c7f4a21183207%3A0xc3b832b4b45b0fa8!2sPathankot%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.05) saturate(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />

              {/* Overlay for styling / 3D feel */}
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] rounded-2xl" />

              {/* Floating quick info card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-xs pointer-events-auto">
                <div className="rounded-xl border border-white/40 bg-white/80 p-5 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">Pathankot City</h4>
                      <p className="text-xs text-slate-500">Punjab, India</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://goo.gl/maps/pathankot"
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-sky-700"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      Open in Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
