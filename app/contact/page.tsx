import type { Metadata } from "next";
import { Card, CardContent } from "../components/ui/Card";

export const metadata: Metadata = {
  title: "Contact Us | Pathankot Tourism",
  description: "Get in touch with us for queries, emergency contacts, and support during your visit to Pathankot.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mb-12">
          Have a question about your upcoming trip to Pathankot? Send us a message and we'll be happy to assist you with travel information and queries.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-6 sm:p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="Enter your name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="you@example.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select id="subject" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all">
                  <option>General Inquiry</option>
                  <option>Tour Package Info</option>
                  <option>Hotel & Accommodation</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-linear-to-r from-teal-600 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/30 transition-all active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <div className="flex flex-col gap-8">
            <Card className="bg-slate-50 border-none shadow-sm p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Official Address</h3>
              <p className="text-slate-600 mb-2">Pathankot Tourist Information Center</p>
              <p className="text-slate-600 mb-2">Near Railway Station (PTKC)</p>
              <p className="text-slate-600">Pathankot, Punjab, India - 145001</p>
            </Card>

            <Card className="bg-slate-50 border-none shadow-sm p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Email & Phone</h3>
              <p className="text-slate-600 mb-2">Email: tourism@pathankot.city (Demo)</p>
              <p className="text-slate-600">Phone: +91 0186-2222222 (Demo)</p>
            </Card>

            {/* <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Social Media</h3>
              <p className="text-slate-600 mb-4">Share your travel stories with us using #ExplorePathankot</p>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-teal-100 hover:text-teal-600 transition-colors cursor-pointer">FB</div>
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-teal-100 hover:text-teal-600 transition-colors cursor-pointer">IG</div>
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-teal-100 hover:text-teal-600 transition-colors cursor-pointer">X</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
