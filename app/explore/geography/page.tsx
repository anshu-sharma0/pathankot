import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Map, CloudRain, Users, BookOpen, Mountain, Droplets, Sun, Wind, Church, Languages, Activity, Image as ImageIcon, MapPin } from "lucide-react";
import WeatherWidget from "@/app/components/WeatherWidget";

export const metadata: Metadata = {
  title: "Geography & Demographics of Pathankot",
  description: "Discover Pathankot's strategic geography, climate profile, diverse demographics, and cultural linguistic landscape.",
};

const insights = [
  {
    category: "Geography",
    situation: "Strategic junction of 3 states",
    outlook: "Multi-modal transit hub",
    icon: Map,
    color: "blue",
  },
  {
    category: "Climate",
    situation: "Humid Subtropical (Cwa)",
    outlook: "Climate-resilient infrastructure",
    icon: Sun,
    color: "amber",
  },
  {
    category: "Demographics",
    situation: "Youthful workforce, high literacy",
    outlook: "Rapid service sector growth",
    icon: BookOpen,
    color: "emerald",
  },
  {
    category: "Population",
    situation: "Steady growth, 56% Urban",
    outlook: "~8.5 Lakh estimated by 2035",
    icon: Users,
    color: "rose",
  },
  {
    category: "Religion",
    situation: "Multi-religious harmony",
    outlook: "Expansion of cultural tourism",
    icon: Church,
    color: "purple",
  },
  {
    category: "Languages",
    situation: "Punjabi, Hindi, Dogri",
    outlook: "Multilingual trade advantage",
    icon: Languages,
    color: "teal",
  },
];

const physiography = [
  { title: "Plains", desc: "South-western region. Ideal for agriculture, fertile loamy soil.", icon: MapPin },
  { title: "Kandi Belt", desc: "Semi-hilly region with gravel soil and seasonal streams (Choes).", icon: Mountain },
  { title: "Shivalik Foothills", desc: "North-eastern region featuring forests and natural tourism.", icon: Mountain },
];

const rivers = [
  { title: "Ravi River", desc: "Passes through western Pathankot. Crucial for irrigation and Shahpurkandi project." },
  { title: "Chakki River", desc: "Originates from Himachal. Prime source of sand and gravel during monsoons." },
  { title: "Ujh River", desc: "Flows from Jammu. A tributary of Ravi with huge resource potential." },
];

const galleryImages = [
  "https://images.openai.com/static-rsc-4/L6PC_MV2XDAwbE5z8bZjVDzOywGsWKkRVX0fBZISLo0il5_kr2XZzhNZiTzNAC342SerSxV3apFwmjsKpL_pWczh_Jjqh9bhiO_6uduytbzgIidZa-fifj5Iopt4iSz6ID7mOwNTITdcnirUWKMYRQH6pzfXavgxGtKWm0Z_9FbhK0PiwlMI7UVna3qDENKM?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/I2gcDW_TRQYJIJhyyuVEkP9sN0MZZOQDHsGqIAe7mJ797yLdC3n3ybTaCS2d2Va6dkDFcIrXkTRf3Qfkw0kDuDm3AXCRQ77LGknrl9FQMl2jRJQLLELAOB1eKlSRYRT9UpmJQaAGuCdhBYEd5aWsYW_WWVEXGfI-aGsOx3eDBUl36ZrYns6BbyEST-GwFuQf?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/7ABKtQiVTMpp3yucXH6TFvvJe8c3TJAn6CAHz4dB7mnzYRe_3Twqi0uxHqC5dVX0t9zE1EJ9oANEv9BnyaD-zppdofM4X5UgG021eY3Q0ncFvUlgRmBTncHmGwY0SFpEyNQE2-Thr0j1hvwGIzB2V2CVEiqfozumEF9ySn7QbJfPuhAgtS4msGvxRZBlE6F7?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/I_0aRZTRlde9f3ZUZgniEQcxie_8VNk8eNVYmm_p6VzfcnHA66zp46auD3mt4w2ObvAnlGTBXDgagcSJEFT-2q44VN6-ZX0mwUc-bKp-WIfC4zIKhbCz4PK63_yTZDAnJvb5s3QordyBEdYxO3waL71cGyGHPVFu5wqL-MkrXdONjgsk3ls9NKuoH1sEDS6Y?purpose=fullsize"
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600 border-blue-200",
  amber: "bg-amber-50 text-amber-600 border-amber-200",
  emerald: "bg-emerald-50 text-emerald-600 border-emerald-200",
  rose: "bg-rose-50 text-rose-600 border-rose-200",
  purple: "bg-purple-50 text-purple-600 border-purple-200",
  teal: "bg-teal-50 text-teal-600 border-teal-200",
};

export default function GeographyPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-emerald-950 py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Link href="/explore" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Explore
          </Link>
          <div className="mb-4 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              <Map className="h-3 w-3" /> City Profile
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Geography & <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">Demographics</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Situated at the crossroads of Punjab, Himachal Pradesh, and Jammu & Kashmir, Pathankot boasts a unique geographical identity, diverse climate, and a harmonious multicultural society.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 space-y-8 lg:space-y-12">
        
        {/* ── Geography Section ── */}
        <section className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Map className="h-6 w-6" /></div>
                <h2 className="text-2xl font-extrabold text-slate-800">Geographical Layout</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Pathankot spans an area of ~929 sq. km and sits at an elevation of 330–350 meters. It is functionally categorized into three distinct physiographic regions:
              </p>
              <div className="space-y-4">
                {physiography.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                    <item.icon className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-xl"><Droplets className="h-6 w-6" /></div>
                <h2 className="text-2xl font-extrabold text-slate-800">River Systems</h2>
              </div>
              <div className="grid gap-4">
                {rivers.map((river, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border-l-4 border-l-teal-400 border border-y-slate-100 border-r-slate-100 bg-white shadow-sm">
                    <h4 className="font-bold text-slate-800 mb-1">{river.title}</h4>
                    <p className="text-sm text-slate-500">{river.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Climate & Demographics Grid ── */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Climate */}
          <section className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><CloudRain className="h-6 w-6" /></div>
              <h2 className="text-2xl font-extrabold text-slate-800">Climate Profile</h2>
            </div>
            <p className="text-slate-600 mb-6">Pathankot experiences a Humid Subtropical Climate with distinct seasonal variations, heavy monsoons, and mild to chilly winters.</p>
            
            <div className="mb-10">
              <WeatherWidget variant="detailed" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/30">
                <h4 className="font-bold text-slate-800 mb-1 flex items-center gap-2"><Sun className="h-4 w-4 text-rose-500" /> Summer</h4>
                <p className="text-xs text-slate-500 mb-2">Mid-May to Mid-June</p>
                <p className="text-sm text-slate-600 leading-tight">Temperatures generally remain between 35°C to 45°C. Max can rarely touch 48°C.</p>
              </div>
              <div className="p-4 rounded-xl border-blue-100 bg-blue-50/30 border">
                <h4 className="font-bold text-slate-800 mb-1 flex items-center gap-2"><Droplets className="h-4 w-4 text-blue-500" /> Monsoon</h4>
                <p className="text-xs text-slate-500 mb-2">Mid-June to Mid-Sept</p>
                <p className="text-sm text-slate-600 leading-tight">Moderate to very heavy rainfall. South-west winds. Max rain recorded in a day is 195.5mm.</p>
              </div>
              <div className="p-4 rounded-xl border-amber-100 bg-amber-50/30 border">
                <h4 className="font-bold text-slate-800 mb-1 flex items-center gap-2"><Wind className="h-4 w-4 text-amber-500" /> Autumn</h4>
                <p className="text-xs text-slate-500 mb-2">Mid-Sept to Mid-Nov</p>
                <p className="text-sm text-slate-600 leading-tight">Pleasant temperatures between 16°C to 27°C, dropping to 11°C minimum.</p>
              </div>
              <div className="p-4 rounded-xl border-emerald-100 bg-emerald-50/30 border">
                <h4 className="font-bold text-slate-800 mb-1 flex items-center gap-2"><CloudRain className="h-4 w-4 text-emerald-500" /> Winter</h4>
                <p className="text-xs text-slate-500 mb-2">November to Mid-March</p>
                <p className="text-sm text-slate-600 leading-tight">Max 7-15°C, Min 0-8°C. Persistent rain for 2-3 days with hail. Snowfall occurred in 2012.</p>
              </div>
              <div className="p-4 rounded-xl border-orange-100 bg-orange-50/30 border">
                <h4 className="font-bold text-slate-800 mb-1 flex items-center gap-2"><Sun className="h-4 w-4 text-orange-500" /> Spring</h4>
                <p className="text-xs text-slate-500 mb-2">Mid-Feb to Mid-April</p>
                <p className="text-sm text-slate-600 leading-tight">The most enjoyable climate. Max 16-25°C, Min 9-18°C.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-t border-slate-100 pt-4">
                <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wider">Rainfall</h4>
                <p className="text-sm text-slate-600">~70% of rainfall occurs from June to Sept, and ~18% occurs between Dec and Feb. Monsoon usually arrives early July.</p>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wider">Humidity</h4>
                <p className="text-sm text-slate-600">High in the mornings ({'>'}70%). Drops in afternoons. Driest part is summer afternoon (~25% or less).</p>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wider">Winds</h4>
                <p className="text-sm text-slate-600">Generally light. Easterlies and south-easterlies dominate during the south-west monsoon season.</p>
              </div>
            </div>
          </section>

          {/* Demographics */}
          <section className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><Users className="h-6 w-6" /></div>
              <h2 className="text-2xl font-extrabold text-slate-800">Demographics</h2>
            </div>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                  <span>Urban Population (56%)</span>
                  <span>Rural (44%)</span>
                </div>
                <div className="w-full h-3 bg-emerald-100 rounded-full overflow-hidden flex">
                  <div className="h-full bg-emerald-500" style={{ width: '56%' }}></div>
                  <div className="h-full bg-emerald-300" style={{ width: '44%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 border border-slate-100 rounded-xl">
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Density</p>
                  <p className="text-lg font-bold text-slate-800">~750 / km²</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl">
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Literacy</p>
                  <p className="text-lg font-bold text-slate-800">~86%</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl">
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Sex Ratio</p>
                  <p className="text-lg font-bold text-slate-800">~900 / 1k</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl">
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Est. Pop 2030</p>
                  <p className="text-lg font-bold text-slate-800">~8.0 Lakh</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ── Insights & Outlook ── */}
        <section className="rounded-3xl bg-slate-900 p-8 sm:p-10 lg:p-14 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-10 text-center">Key Insights & Future Outlook</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {insights.map((item, idx) => (
                <div key={idx} className={`rounded-2xl p-6 border bg-slate-800/50 backdrop-blur-sm transition-all hover:bg-slate-800 border-slate-700`}>
                  <div className="flex items-center gap-3 mb-4">
                    <item.icon className={`h-5 w-5 text-${item.color}-400`} />
                    <h3 className="font-bold text-white">{item.category}</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-300"><span className="text-slate-500">Current:</span> {item.situation}</p>
                    <p className="text-sm text-emerald-400"><span className="text-slate-500">Future:</span> {item.outlook}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="text-center mb-10">
            <ImageIcon className="h-8 w-8 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">Scenic Panoramas</h2>
            <p className="text-slate-500 mt-2">A visual tour of Pathankot's diverse geography and culture.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="relative h-72 overflow-hidden rounded-2xl border border-slate-200 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={src} 
                  alt={`Pathankot Profile Image ${idx + 1}`} 
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
