"use client";

import { useState } from "react";
import { Phone, Shield, Flame, Stethoscope, Building, Droplets, Zap, Navigation, AlertTriangle, Search, Activity, User, BookOpen, Banknote, Briefcase } from "lucide-react";
import { Card, CardContent } from "../components/ui/Card";

// --- EMERGENCY CARDS DATA ---
const quickEmergency = [
  { name: "Police Control", number: "112, 100", icon: Shield },
  { name: "Ambulance", number: "108", icon: Stethoscope },
  { name: "Fire Brigade", number: "101", icon: Flame },
  { name: "Women Helpline", number: "1091", icon: Phone },
  { name: "Child Helpline", number: "1098", icon: Phone },
  { name: "Crime Stopper", number: "1090", icon: AlertTriangle },
  { name: "Gas Leakage", number: "1906", icon: AlertTriangle },
];

const policeContacts = [
  { name: "SSP Office", number: "87280-33500", desc: "sspptk@gmail.com" },
  { name: "District Police HQ", number: "0186-222-0070", desc: "Superintendent of Police" },
  { name: "DSP Office", number: "0186-223-5996", desc: "Deputy Superintendent" },
  { name: "Control Room Lines", number: "0186-234-5514", desc: "Ends in 14, 16, 18" },
];

const healthContacts = [
  { name: "Medical Control Room", number: "1800-180-3360", desc: "Toll Free (Civil Hospital)" },
  { name: "Civil Hospital Amb.", number: "0186-222-0180", desc: "0186-222-4564" },
  { name: "Civil Hospital Blood Bank", number: "0186-222-4905", desc: "In-Charge: 98143-72924" },
  { name: "Military Hospital Blood Bank", number: "0186-222-6396", desc: "-" },
];

const disasterContacts = [
  { name: "DC Control Room", number: "1800-180-3361", desc: "Toll Free (DC Office)" },
  { name: "Flood Control Room", number: "0186-234-6944", desc: "0186-222-4517" },
  { name: "Fire Station (Mission Rd)", number: "0186-222-0420", desc: "Near ME Office" },
  { name: "Fire Station (Model Town)", number: "0186-222-0101", desc: "Pathankot City" },
];

// --- DIRECTORY TAB DATA ---

const directoryTabs = [
  { id: "admin", label: "Administration", icon: Building },
  { id: "police", label: "Police Stations", icon: Shield },
  { id: "utilities", label: "Public Utilities", icon: Banknote },
  { id: "education", label: "Education", icon: BookOpen },
  { id: "election", label: "Election Officers", icon: Briefcase },
];

const directories = {
  admin: [
    { name: "Deputy Commissioner", number: "0186-2346464", email: "dc.pathankot@gmail.com" },
    { name: "Addl. Deputy Commissioner (G)", number: "0186-2346314", email: "adcgpathankot@gmail.com" },
    { name: "Addl. Deputy Commissioner (D)", number: "0186-2220415", email: "adcdpathankot@gmail.com" },
    { name: "Assistant Commissioner (G)", number: "0186-2345450", email: "acgpathankot@gmail.com" },
    { name: "SDM, Pathankot", number: "0186-2345626", email: "sdmpathankot@gmail.com" },
    { name: "SDM, DharKalan", number: "01870-255305", email: "sdmoffice.dharkalan123@gmail.com" },
    { name: "Civil Surgeon", number: "0186-2230180", email: "civilsurgeonpathankot@gmail.com" },
    { name: "Deputy Director, Animal Husbandry", number: "0186-2227842", email: "-" },
    { name: "Senior Veterinary Officer", number: "0186-2227842", email: "ddpathankot@gmail.com" },
    { name: "Commissioner, Municipal Corp.", number: "0186-2220230", email: "eomcptk@yahoo.co.in" },
    { name: "Assistant Commissioner, Municipal Corp.", number: "0186-2220929", email: "-" },
    { name: "Municipal Council, Sujanpur", number: "0186-2244181", email: "info@mcsujanpur.com" },
    { name: "DDPO, Pathankot", number: "0186-2220434", email: "ddpopathankot@gmail.com" },
    { name: "BDPO, Pathankot", number: "0186-2220557", email: "bdpopathankot@gmail.com" },
    { name: "BDPO, Sujanpur", number: "0186-2244506", email: "bdposujanpur@gmail.com" },
    { name: "BDPO, Dharkalan", number: "01870-255312", email: "bdpodharkalan@gmail.com" },
    { name: "BDPO, Bamial", number: "0186-2260568", email: "bdpobamial@gmail.com" },
    { name: "BDPO, Narot Jaimal Singh", number: "0186-2269252", email: "bdponjsingh@gmail.com" },
    { name: "BDPO, Gharota", number: "01875-254055", email: "bdpogharota@gmail.com" },
    { name: "General Manager, Punjab Roadways", number: "0186-2220541", email: "punbusptk@yahoo.co.in" },
    { name: "District Forest Officer", number: "0186-2222745", email: "dfowildlifepathankot@gmail.com" },
    { name: "Forest Office Pathankot", number: "0186-2921857", email: "dfopathankot@gmail.com" },
    { name: "XEN, PSPCL (City)", number: "0186-2220212", email: "citypathankotpspcl@gmail.com" },
    { name: "XEN, PSPCL (Sub Urban)", number: "1800-233-7944", email: "citypathankotpspcl@gmail.com" },
    { name: "XEN, Drainage, Gurdaspur", number: "01874-222723", email: "drgdivngsp@yahoo.in" },
    { name: "XEN, UBDC, Madhopur", number: "01874-220498", email: "-" },
    { name: "AEE Madhopur Headworks", number: "01870-257239", email: "-" },
    { name: "XEN, PWD B&R", number: "0186-2221033", email: "eecdpthkpwdpb@gmail.com" },
    { name: "XEN, Punjab Mandi Board", number: "0186-2235897", email: "-" },
    { name: "XEN, Public Health", number: "0186-2251156", email: "-" },
    { name: "District Child Protection Unit", number: "96466-88099", email: "-" },
    { name: "Sewa Kendra", number: "-", email: "dm.patahnkot@paradigmithr.com" },
  ],
  police: [
    { name: "Division I (Railway Rd)", number: "0186-222-0036", email: "88720-33341" },
    { name: "Division II (Saili Rd)", number: "0186-222-2541", email: "88720-33342" },
    { name: "Sadar Police Station", number: "0186-224-5006", email: "88720-33343" },
    { name: "Police Station Sujanpur", number: "0186-224-4020", email: "88720-33379" },
    { name: "Police Station Tara Garh", number: "01875-255184", email: "88720-33349" },
    { name: "Police Station Narot Jaimal Singh", number: "0186-226-9245", email: "75080-10329" },
    { name: "Police Station Mamoon Cantt", number: "01870-250218", email: "88720-32244" },
    { name: "Police Station Shahpur Kandi", number: "01870-263420", email: "88720-33345" },
    { name: "Police Station Dhar Kalan", number: "01870-251548", email: "88720-33346" },
    { name: "Police Station Kanwan", number: "01875-262020", email: "88720-33350" },
  ],
  utilities: [
    { name: "Canara Bank", number: "0186-222-0178", email: "cb2123@canarabank.com" },
    { name: "Indian Overseas Bank", number: "0186-222-1394", email: "pathanbr@ludsco.jobnet.co.in" },
    { name: "Punjab National Bank", number: "0186-222-0061", email: "care@pnb.co.in" },
    { name: "State Bank of India", number: "0186-224-6685", email: "sa.05710@sbi.co.in" },
    { name: "Post Office (Gandhi Chowk)", number: "0186-222-0170", email: "spc.delhi@indiapost.gov.in" },
    { name: "Malakpur Sub Post Office", number: "0186-224-5150", email: "spc.delhi@indiapost.gov.in" },
  ],
  education: [
    { name: "Higher Education Department", number: "0172-5036711", email: "-" },
    { name: "Aman Bhalla Institute", number: "0186-508-3010", email: "principal@abietptk.com" },
    { name: "Sri Sai Group Of Institutes", number: "-", email: "badhani.campus@srisaigroup.in" },
    { name: "Govt Sen Sec School Boys", number: "0186-222-1139", email: "pathankotdeose@gmail.com" },
    { name: "Govt Sen Sec School K F C", number: "-", email: "gsss.kfc.ptk@gmail.com" },
    { name: "Shaheed Makhan Singh GSSS (Girls)", number: "0186-222-4388", email: "pathankotdeose@gmail.com" },
  ],
  election: [
    { name: "Returning Officer - Sujanpur", number: "73557-00300", email: "XEN Punjab Mandi Board" },
    { name: "Returning Officer - Pathankot", number: "96461-13029", email: "XEN City Divn. PSPCL" },
    { name: "Returning Officer - Bhoa (Gharota)", number: "94639-73630", email: "XEN Store Divn. PSPCL" },
    { name: "Returning Officer - Bhoa (Bamial)", number: "99141-55940", email: "Soil Conservation Officer" },
    { name: "Asst. Returning Officer - Dharkalan", number: "95013-00744", email: "Horticulture Dev. Officer" },
    { name: "Asst. Returning Officer - Sujanpur", number: "78377-11076", email: "SDO Punjab Mandi Board" },
    { name: "Asst. Returning Officer - Pathankot", number: "96461-01035", email: "SDO PWD(B&R)" },
  ]
};

export default function SupportPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<keyof typeof directories>("admin");

  const currentDirectory = directories[activeTab];
  const filteredDirectory = currentDirectory.filter(
    (item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.number.includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-rose-950 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-rose-500 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-300">
            <Shield className="h-3 w-3" /> 24/7 Assistance
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Emergency <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-400 to-red-400">& Support</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Pathankot administration is dedicated to the safety and well-being of its citizens and tourists. Find all official contact details and helplines below.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 space-y-10">

        {/* Quick Emergency Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-7 gap-3">
          {quickEmergency.map((item, idx) => (
            <a
              key={item.name}
              href={`tel:${item.number.split(',')[0].trim()}`}
              className="group block animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <Card className="p-4 rounded-2xl hover:border-red-200 hover:shadow-red-100/50 transition-all h-full">
              <div className="flex flex-col items-center text-center">
                <div className="h-10 w-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-2 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1 leading-tight">{item.name}</h3>
                <p className="text-lg font-black text-slate-800 group-hover:text-red-600 transition-colors">{item.number}</p>
              </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Detailed Emergency Categories */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Law & Order */}
          <Card className="p-6 shadow-md flex flex-col">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Shield className="h-5 w-5" /></div>
              <h2 className="text-xl font-extrabold text-slate-800">Police HQs</h2>
            </div>
            <div className="space-y-4 flex-1">
              {policeContacts.map((contact) => (
                <div key={contact.name} className="flex justify-between items-center group">
                  <div>
                    <h4 className="text-sm font-bold text-slate-700">{contact.name}</h4>
                    <p className="text-xs text-slate-400">{contact.desc}</p>
                  </div>
                  <a href={`tel:${contact.number}`} className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {contact.number}
                  </a>
                </div>
              ))}
            </div>
          </Card>

          {/* Healthcare & Ambulance */}
          <Card className="p-6 shadow-md flex flex-col">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><Activity className="h-5 w-5" /></div>
              <h2 className="text-xl font-extrabold text-slate-800">Hospital & Blood Banks</h2>
            </div>
            <div className="space-y-4 flex-1">
              {healthContacts.map((contact) => (
                <div key={contact.name} className="flex justify-between items-center group">
                  <div>
                    <h4 className="text-sm font-bold text-slate-700">{contact.name}</h4>
                    <p className="text-xs text-slate-400">{contact.desc}</p>
                  </div>
                  <a href={`tel:${contact.number}`} className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    {contact.number}
                  </a>
                </div>
              ))}
            </div>
          </Card>

          {/* Disaster & Fire */}
          <Card className="p-6 shadow-md flex flex-col">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-xl"><Flame className="h-5 w-5" /></div>
              <h2 className="text-xl font-extrabold text-slate-800">Fire & Disaster</h2>
            </div>
            {/* <p className="text-sm text-slate-500 mb-6">
              Disaster Management falls under the Deputy Commissioner. Flash floods are common, do not hesitate to contact authorities.
            </p> */}
            <div className="space-y-4 flex-1">
              {disasterContacts.map((contact) => (
                <div key={contact.name} className="flex justify-between items-center group">
                  <div>
                    <h4 className="text-sm font-bold text-slate-700">{contact.name}</h4>
                    <p className="text-xs text-slate-400">{contact.desc}</p>
                  </div>
                  <a href={`tel:${contact.number}`} className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    {contact.number}
                  </a>
                </div>
              ))}
            </div>
          </Card>

        </div>

        {/* --- Tabbed Directory Section --- */}
        <Card className="overflow-hidden mt-12 p-0">

          <div className="p-6 sm:p-8 border-b border-slate-100 bg-slate-50 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><User className="h-5 w-5" /></div>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-800">District Directory</h2>
                  <p className="text-sm text-slate-500">Search for offices, police stations, utilities, and more.</p>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                {directoryTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as keyof typeof directories)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeTab === tab.id
                      ? "bg-slate-800 text-white shadow-md shadow-slate-300"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                  >
                    <tab.icon className="h-4 w-4" /> {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder={`Search ${directoryTabs.find(t => t.id === activeTab)?.label}...`}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow text-sm shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto min-h-[400px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white border-b border-slate-100 text-xs uppercase tracking-wider text-slate-400">
                  <th className="px-6 py-4 font-semibold">Name / Designation</th>
                  <th className="px-6 py-4 font-semibold">Contact Number</th>
                  <th className="px-6 py-4 font-semibold hidden sm:table-cell">Details / Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredDirectory.map((contact, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-700 transition-colors">{contact.name}</span>
                    </td>
                    <td className="px-6 py-4">
                      {contact.number !== "-" ? (
                        <a href={`tel:${contact.number}`} className="inline-block text-sm font-bold text-slate-800 bg-slate-100 px-3 py-1.5 rounded-lg group-hover:bg-indigo-100 group-hover:text-indigo-700 transition-colors">
                          {contact.number}
                        </a>
                      ) : (
                        <span className="text-slate-300">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell">
                      {contact.email && contact.email !== "-" ? (
                        <span className="text-sm text-slate-500">{contact.email}</span>
                      ) : (
                        <span className="text-sm text-slate-300">-</span>
                      )}
                    </td>
                  </tr>
                ))}
                {filteredDirectory.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-6 py-16 text-center">
                      <Search className="h-8 w-8 text-slate-300 mx-auto mb-3" />
                      <p className="text-slate-500 font-medium">No results found for "{searchTerm}"</p>
                      <button onClick={() => setSearchTerm("")} className="mt-2 text-sm text-indigo-600 font-semibold hover:underline">Clear Search</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Important Instructions */}
        <Card className="bg-slate-900 p-8 sm:p-12 border-none shadow-2xl relative overflow-hidden mb-8">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-white mb-3">Dialing Instructions</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                If you are calling from a mobile phone outside the local network, please add the STD Code <strong className="text-white">0186</strong> before dialing local landline numbers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">STD Code: 0186</span>
                <span className="text-xs font-semibold bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">Pin Code: 145001</span>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end w-full">
              <a href="tel:112" className="flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-red-600/30 active:scale-95 w-full justify-center md:w-auto">
                <Phone className="h-5 w-5 animate-pulse" /> Call 112 Now
              </a>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}
