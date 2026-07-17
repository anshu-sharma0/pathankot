import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Leaf, Droplets, Wind, AlertTriangle, ShieldCheck, Bird, TreePine, CloudLightning, Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Environment & Ecology | Pathankot",
  description: "Detailed report on Pathankot's environment, wildlife, forests, rivers, air quality, and disaster management.",
};

const wildlife = {
  animals: ["Leopard", "Jackal", "Wild Boar", "Nilgai", "Deer", "Monkey", "Langur", "Fox"],
  birds: ["Peacock", "Kingfisher", "Parrot", "Eagle", "Owl", "Woodpecker", "Migratory Birds"],
  reptiles: ["Cobra", "Python", "Monitor Lizard"]
};

const environmentRisks = [
  { risk: "Floods", detail: "High risk during monsoon, especially near Ravi and Chakki rivers.", level: 90 },
  { risk: "Heat Waves", detail: "Summer temperatures can peak up to 44°C.", level: 85 },
  { risk: "Soil Erosion", detail: "Primarily affects the Kandi Belt due to flash floods.", level: 75 },
  { risk: "Forest Fires", detail: "Risk peaks during dry summer months in the Shivalik foothills.", level: 60 },
];

const swot = {
  strengths: ["Gateway to Himachal & Jammu", "Rivers & Shivalik foothills", "Religious heritage", "Strong road & rail connectivity"],
  weaknesses: ["Low tourism branding", "Limited premium stays", "Underdeveloped adventure tourism", "Limited night tourism"],
  opportunities: ["Eco-tourism", "Riverfront development", "Wellness & spiritual tourism", "Adventure sports"],
  threats: ["Climate change", "Flood risk", "Unplanned urbanization", "Environmental degradation"]
};

const galleryImages = [
  "https://images.openai.com/static-rsc-4/zRNVpMMRtYtt71SH_EEgqwunU_AfNTkort8tmtslZj710VNlC3qtSLRfB0VIiDf9jevbydZDxb1WpJjuLCU5UaB_Gz2-__41xKwLu2KEnCyNCqiSuV1epyXM5kdlvATez6c5Zbhr9RHjE1KZnfjq9MYErgCWj96G4_gQigsG4RLisA03vtxYZuf8S13KKhXF?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/v0tB4x9PP7EunBQZA4SEFmA9xSwrdj-FNvEIYhRFmk-7AiVOG8mAm6Ae5tdjv6mksEys8uqi6Y_UWohGIl64n8plzU2s9Fs8zj-jC2X6cakJCjhGGkjki9W4NaXTlpthGdkaQAmOlRBkxrqdZovpiKuteB4OMl-w-uaTVToSkx1cCdNzjiap2MqKYvJ2j5tX?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/yr-C9Iac1urCK3OEyT0lOYf52KfFW6xKvYpNUsw-9fD2f_xs9dHE7JqeNBj1Dkz33jXs0YmFHNAABEeN1mW4xBYzZtNGwpAmPi9t3xJnsm1tdnxJF3ibnN5UoxL22ldqUiBg6t9RS-MicfeDktGMOm-EnP8m48loVyOqQsoV25D71D2aDdVC3hTzThMAqCjv?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/5axceqm529tf5ZG1QwKSV8rJJK88x7-xWaXykAEJ9UT-xxWIMegC3QZBxvkEyBbK7CQ-Q8G2gu3HM89opleHKchz15_gj3fNkaSBz7EnET5xMufirBjjbFLCQsCXIGATgMgLjzHuKkx52Gk_22S1zP0jZp1RVFdjcCzedBcIW4r6Iz2S_-8ur2-A2hGgj8vf?purpose=fullsize"
];

export default function EnvironmentPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-teal-950 py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Link href="/explore" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Explore
          </Link>
          <div className="mb-4 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300">
              <Leaf className="h-3 w-3" /> Ecology & Sustainability
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Environment & <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-emerald-400">Ecology</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover the rich biodiversity, river ecosystems, climate challenges, and the strategic disaster management initiatives of Pathankot.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 space-y-8 lg:space-y-12">
        
        {/* ── Wildlife & Forests ── */}
        <section className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><TreePine className="h-6 w-6" /></div>
                <h2 className="text-2xl font-extrabold text-slate-800">Forests & Flora</h2>
              </div>
              <p className="text-slate-600 mb-4">Concentrated primarily in the Shivalik region and Kandi belt, the forests offer vital ecological benefits like rainwater recharge, soil conservation, and carbon storage.</p>
              <h4 className="font-bold text-slate-800 mb-2">Major Tree Species:</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Shisham", "Khair", "Bamboo", "Pine", "Acacia", "Eucalyptus"].map((tree) => (
                  <span key={tree} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold">{tree}</span>
                ))}
              </div>
              <div className="p-4 bg-rose-50/50 border border-rose-100 rounded-xl">
                <h4 className="text-sm font-bold text-rose-800 mb-1 flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> Threats</h4>
                <p className="text-xs text-rose-600">Illegal cutting, forest fires, and encroachments.</p>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><Bird className="h-6 w-6" /></div>
                <h2 className="text-2xl font-extrabold text-slate-800">Wildlife Fauna</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-2">Animals</h4>
                  <p className="text-sm text-slate-600">{wildlife.animals.join(", ")}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-2">Birds</h4>
                  <p className="text-sm text-slate-600">{wildlife.birds.join(", ")}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-2">Reptiles</h4>
                  <p className="text-sm text-slate-600">{wildlife.reptiles.join(", ")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* ── Environment & AQI ── */}
          <section className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-sky-50 text-sky-600 rounded-xl"><Wind className="h-6 w-6" /></div>
              <h2 className="text-2xl font-extrabold text-slate-800">Environment & AQI</h2>
            </div>
            <p className="text-slate-600 mb-6">Pathankot generally enjoys better air quality than larger industrial cities in Punjab, thanks to abundant greenery and fewer heavy industries.</p>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-3 border border-slate-100 rounded-lg">
                <span className="font-semibold text-slate-700 text-sm">Summer AQI</span>
                <span className="text-xs font-bold px-2 py-1 bg-amber-100 text-amber-700 rounded-full">Good–Moderate</span>
              </div>
              <div className="flex justify-between items-center p-3 border border-slate-100 rounded-lg">
                <span className="font-semibold text-slate-700 text-sm">Monsoon AQI</span>
                <span className="text-xs font-bold px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">Good</span>
              </div>
              <div className="flex justify-between items-center p-3 border border-slate-100 rounded-lg">
                <span className="font-semibold text-slate-700 text-sm">Winter AQI</span>
                <span className="text-xs font-bold px-2 py-1 bg-orange-100 text-orange-700 rounded-full">Moderate–Poor</span>
              </div>
            </div>
            <p className="text-xs text-slate-500">Main pollution sources: Vehicles, Dust, Crop Burning (Regional), and Construction.</p>
          </section>

          {/* ── Climate Risks & Disaster Management ── */}
          <section className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-50 text-red-600 rounded-xl"><CloudLightning className="h-6 w-6" /></div>
              <h2 className="text-2xl font-extrabold text-slate-800">Climate Risks</h2>
            </div>
            <div className="space-y-5">
              {environmentRisks.map((risk, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm font-bold text-slate-700 mb-1">
                    <span>{risk.risk}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-1">
                    <div className="h-full bg-red-500" style={{ width: `${risk.level}%` }}></div>
                  </div>
                  <p className="text-xs text-slate-500">{risk.detail}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── SWOT Analysis ── */}
        <section className="rounded-3xl bg-slate-900 p-8 sm:p-10 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="relative z-10">
            <div className="flex flex-col items-center mb-8">
              <ShieldCheck className="h-10 w-10 text-teal-400 mb-3" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center">Tourism & Environment SWOT</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-emerald-900/30 border border-emerald-800 p-5 rounded-2xl">
                <h3 className="text-emerald-400 font-bold mb-3 uppercase tracking-wider text-sm">Strengths</h3>
                <ul className="space-y-2">
                  {swot.strengths.map(i => <li key={i} className="text-slate-300 text-sm">• {i}</li>)}
                </ul>
              </div>
              <div className="bg-rose-900/30 border border-rose-800 p-5 rounded-2xl">
                <h3 className="text-rose-400 font-bold mb-3 uppercase tracking-wider text-sm">Weaknesses</h3>
                <ul className="space-y-2">
                  {swot.weaknesses.map(i => <li key={i} className="text-slate-300 text-sm">• {i}</li>)}
                </ul>
              </div>
              <div className="bg-blue-900/30 border border-blue-800 p-5 rounded-2xl">
                <h3 className="text-blue-400 font-bold mb-3 uppercase tracking-wider text-sm">Opportunities</h3>
                <ul className="space-y-2">
                  {swot.opportunities.map(i => <li key={i} className="text-slate-300 text-sm">• {i}</li>)}
                </ul>
              </div>
              <div className="bg-orange-900/30 border border-orange-800 p-5 rounded-2xl">
                <h3 className="text-orange-400 font-bold mb-3 uppercase tracking-wider text-sm">Threats</h3>
                <ul className="space-y-2">
                  {swot.threats.map(i => <li key={i} className="text-slate-300 text-sm">• {i}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="text-center mb-10">
            <ImageIcon className="h-8 w-8 text-teal-500 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">Nature & Environment Gallery</h2>
            <p className="text-slate-500 mt-2">The natural landscapes and river ecosystems of Pathankot.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="relative h-64 overflow-hidden rounded-2xl border border-slate-200 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={src} 
                  alt={`Pathankot Nature Image ${idx + 1}`} 
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
