import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Map, Compass, MapPin, Target, Activity, Image as ImageIcon, Star, Church } from "lucide-react";

export const metadata: Metadata = {
  title: "Tourism Guide | Discover Pathankot",
  description: "A comprehensive tourism guide for Pathankot featuring religious sites, adventure sports, and hidden gems.",
};

const tourismStats = [
  { label: "Transit Tourists", value: "40–60 Lakh", desc: "Annual travelers heading to HP & J&K" },
  { label: "Religious Tourism", value: "8–10 Lakh", desc: "Pilgrims visiting ancient temples" },
  { label: "Local Tourism", value: "5–7 Lakh", desc: "Visitors enjoying dams and forts" },
  { label: "Nature Tourism", value: "2–3 Lakh", desc: "Eco-tourists exploring Shivalik hills" },
];

const hiddenPlaces = [
  { name: "Ranjit Sagar Dam", desc: "One of Punjab's largest reservoirs. Famous for boating, photography, and mesmerizing sunset views." },
  { name: "Shahpur Kandi", desc: "Located along the Ravi River, offering lush greenery, picnic spots, and bird watching." },
  { name: "Madhopur Headworks", desc: "An architectural marvel offering breathtaking views of the Ravi River and ancient irrigation networks." },
  { name: "Dhar Kalan", desc: "A pristine hilly area renowned for dense forests, trekking trails, and rural tourism." },
  { name: "Dunera", desc: "A quiet retreat near the Himachal border, perfect for serene escapes, hill views, and bike riding." },
  { name: "Basohli Route", desc: "A highly popular road-trip route featuring beautiful lakes, mountains, and scenic landscapes." },
];

const religiousPlaces = [
  { name: "Kathgarh Temple", desc: "An ancient temple dedicated to Lord Shiva and Parvati (Ardhnarishwar). Highly revered during Maha Shivaratri." },
  { name: "Mukteshwar Temple", desc: "A 5,500-year-old cave shrine with mythological connections to the Mahabharata era." },
  { name: "Nagni Temple", desc: "A prominent center of local faith dedicated to Mata Nagni Devi." },
  { name: "Gurudwara Sri Barth Sahib", desc: "A significant and peaceful site deeply rooted in Sikh history." },
  { name: "Churches & Mosques", desc: "Historic churches and local mosques that reflect the city's religious harmony." },
];

const adventureActivities = [
  "Trekking & Hiking", "Nature Walks & Forest Trails", "Off-road Driving", "River Photography", "Camping"
];

const galleryImages = [
  "https://images.openai.com/static-rsc-4/_IDyIX56Zi4-7aD3ohqDQpGcVjt9-FNHtBQ5sWZ-pzJb3vcaCI3EvSZSBcNhHQ1TgzzeMdzZJlcNwNP4XO6JomIulqN0l-VXQdf4xTiV9JdZLrIeRdkg6xqiKR1ot0gxh2mqatTrxeOb_4m1i_Fkx2GFnFM7vlboct8XAtaQSSZtCx6a0A7467m6Iw0Ko07H?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/lmdj6XfQM9wYUkEc3BWxhpupiEwyL9_Uaw8WLH2Qx0bSPm0ohOlwilQiEMvU19GPfdTvXPwdVLyllI-FG-3jL3uHc4gmVbQMsybRudRi3iTJYl_5oz9VgQgzJVuhx61wZ-IoPKlTY1hGF8iLOM3waFIHqKDQFmGvdHTOLKCokjNa_8CL9pIYAwMjj0Djh9Ng?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/hRz24oxUZXv5_FHGeXabCPavjBZ2U7t8KWLMgnEdnTd_h3X5KJ3va584_Ew7XpBzlaB-gyoUr7jFeiYtQX3LEKFtja6iwpfuYGaTK5e6Wg1B7xdcgmY_JK5PPPXP2GFhs8ofoscMcLTwVQE9thKY3Psd701atdb1uepKN3x3WV3G4ybIJd1WpWGxvWF_5W9o?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/90ww1hyfxdCIeXaO2QderTQ632YPH9ZXtqDu4y1Y1BjsQm0CHUp4kRjmidege91-hKU1LzmeZuTnW8AUEAJA4HJ2sPEkcdJrobu180RGRBV4VVg7L8w9okXHAQGNKqPRM0w9z0bbIE5rLPipWab2ennuKCl5HCxckHuUW099c5-J5WorFTeLmUrH1PrjvBNo?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/ls3AnM7Gbu-oI9TtHGqEaP20f4rzTxb33GF0bZ3d_gfOo_ml09aOL9_PLI4Jrf69dNgReecRtW-9yV7yylbvzytMSZqjTzJLdYBqB0pnZO5A8jGFv7MveAcxY8pQlJj0r0kz3nOkHmS6jrmDSPuBXU9ItcpAAWO6BqrQvRqlxWWUwJefOHez9lzJyxgWElE1?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/-eU1BoPNRy9G4yrmHDk9sK5J4QUar80Kr_QncWpu3SFT2hPtZI5HFyOfHoEwfOSEUdv-ZGmzZo1YRVqO0S00Q4LarxWUaXKMNBFyVQZEcXH6hwsj9QincL-v0izNWPiQfbDwj3RkNHoxC9jA05lcDTEXNxcL0iDjGKySUeqkj1TrtY8bjkmutpczfNyl15qa?purpose=fullsize"
];

export default function TourismPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-rose-950 py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-500 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Link href="/explore" className="inline-flex items-center gap-2 text-sm font-semibold text-rose-400 hover:text-rose-300 transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Explore
          </Link>
          <div className="mb-4 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-300">
              <Compass className="h-3 w-3" /> The Gateway to the Himalayas
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Tourism in <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-400 to-orange-400">Pathankot</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            More than just a transit city, Pathankot is a confluence of natural beauty, ancient religious sites, historical heritage, and thrilling adventure tourism.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 space-y-8 lg:space-y-12">
        
        {/* ── Tourism Statistics ── */}
        <section className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-slate-800">Tourism Overview</h2>
            <p className="text-slate-500 mt-2">Millions of tourists pass through Pathankot annually, driving a diverse travel ecosystem.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourismStats.map((stat, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-slate-100 bg-slate-50 text-center">
                <p className="text-3xl font-black text-rose-500 mb-1">{stat.value}</p>
                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-2">{stat.label}</h3>
                <p className="text-xs text-slate-500">{stat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* ── Hidden Gems ── */}
          <section className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><MapPin className="h-6 w-6" /></div>
              <h2 className="text-2xl font-extrabold text-slate-800">Hidden Tourist Places</h2>
            </div>
            <div className="space-y-4">
              {hiddenPlaces.map((place, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <h4 className="font-bold text-slate-800">{place.name}</h4>
                  <p className="text-sm text-slate-500 mt-1">{place.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Religious Tourism ── */}
          <section className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><Church className="h-6 w-6" /></div>
              <h2 className="text-2xl font-extrabold text-slate-800">Religious Tourism</h2>
            </div>
            <div className="space-y-4">
              {religiousPlaces.map((place, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-amber-50/10 hover:bg-amber-50/30 transition-colors">
                  <h4 className="font-bold text-slate-800">{place.name}</h4>
                  <p className="text-sm text-slate-500 mt-1">{place.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── Adventure Tourism ── */}
        <section className="rounded-3xl bg-slate-900 p-8 sm:p-10 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl"><Activity className="h-6 w-6" /></div>
                <h2 className="text-2xl font-extrabold text-white">Adventure & Eco-Tourism</h2>
              </div>
              <p className="text-slate-300 max-w-xl mb-6">With rivers, dams, and the Shivalik foothills, Pathankot offers immense potential for eco-tourism and adventure activities.</p>
              <div className="flex flex-wrap gap-2">
                {adventureActivities.map((activity, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-xs font-semibold text-slate-300">
                    {activity}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 min-w-[250px]">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Future Opportunities</h4>
              <ul className="space-y-2 text-sm text-emerald-400 font-semibold">
                <li>• Riverfront Development</li>
                <li>• Mountain Biking</li>
                <li>• Kayaking & Rope Courses</li>
                <li>• Eco Adventure Parks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="text-center mb-10">
            <ImageIcon className="h-8 w-8 text-rose-500 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">Tourism Gallery</h2>
            <p className="text-slate-500 mt-2">Glimpses of Pathankot's enchanting tourist spots.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="relative h-64 overflow-hidden rounded-2xl border border-slate-200 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={src} 
                  alt={`Pathankot Tourism Image ${idx + 1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
