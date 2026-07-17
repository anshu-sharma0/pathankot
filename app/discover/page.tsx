import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Pathankot | Hidden Gems & Local Secrets",
  description: "Uncover the hidden gems, offbeat locations, and local secrets of Pathankot.",
};

export default function DiscoverPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
        Discover Pathankot
      </h1>
      <p className="text-lg text-slate-600 mb-8 max-w-3xl">
        Known as the "Gateway to the Hills," Pathankot is a vibrant city where the plains of Punjab meet the majestic foothills of the Himalayas. Discover its rich history, diverse culture, and unique geography.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">History & Heritage</h2>
          <p className="text-slate-600">
            Pathankot boasts a rich ancient history, once ruled by the Rajput kings of Nurpur. Its strategic location made it a crucial military and trade hub for centuries.
          </p>
        </div>
        <div className="p-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">Geography</h2>
          <p className="text-slate-600">
            Situated at the meeting point of Punjab, Himachal Pradesh, and Jammu & Kashmir, Pathankot offers breathtaking views of the Dhauladhar range and the Chakki river.
          </p>
        </div>
      </div>
    </div>
  );
}
