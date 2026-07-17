import EmergencyContacts from "../components/EmergencyContacts";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tourist Support | Pathankot City Portal",
  description: "Find helpful resources, emergency contacts, and tourist support for a safe visit to Pathankot.",
};

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="px-8 max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Tourist Support & Directory
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Your safety and convenience are our top priorities. Find essential contacts, emergency helplines, and local administration details below.
        </p>
      </div>

      <EmergencyContacts />
      
      <div className="px-8 max-w-7xl mx-auto my-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Tourist Helplines</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-1">Tourist Police</h3>
              <p className="text-amber-800 text-2xl font-bold">112</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-1">Women Helpline</h3>
              <p className="text-amber-800 text-2xl font-bold">1091</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-1">Ambulance</h3>
              <p className="text-amber-800 text-2xl font-bold">108</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-1">Railway Enquiry</h3>
              <p className="text-amber-800 text-2xl font-bold">139</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
