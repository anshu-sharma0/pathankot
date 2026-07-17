import { Phone, Shield, Flame, Stethoscope, Building, Droplets, Zap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const contacts = [
  { name: "Police Control Room", number: "112", icon: Shield, type: "primary" },
  { name: "Ambulance / Medical", number: "108", icon: Stethoscope, type: "primary" },
  { name: "Fire Brigade", number: "101", icon: Flame, type: "primary" },
  { name: "Women Helpline", number: "181", icon: Phone, type: "primary" },
  { name: "Municipal Corporation", number: "0186-222-XXXX", icon: Building, type: "secondary" },
  { name: "DC Office", number: "0186-222-XXXX", icon: Building, type: "secondary" },
  { name: "Water Supply", number: "1800-180-XXXX", icon: Droplets, type: "secondary" },
  { name: "Electricity (PSPCL)", number: "1912", icon: Zap, type: "secondary" },
];

export default function EmergencyContacts() {
  return (
    <section id="contacts" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-linear-to-b from-white to-red-50/30">
      <SectionHeader
        badge="Helpline"
        title={
          <>
            Emergency <span className="gradient-text bg-linear-to-r from-red-500 to-rose-500">Contacts</span>
          </>
        }
        subtitle="Quick access to essential city services and emergency responders, available 24/7."
      />

      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contacts.map((contact, i) => {
          const Icon = contact.icon;
          const isPrimary = contact.type === "primary";

          return (
            <a
              key={contact.name}
              href={`tel:${contact.number}`}
              className="group perspective-container animate-fade-in-up block"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div
                className={`card-3d flex items-center gap-4 rounded-2xl border p-5 transition-all ${isPrimary
                    ? "border-red-200/60 bg-linear-to-br from-red-50 to-rose-50 group-hover:border-red-300 group-hover:shadow-red-200/50"
                    : "border-slate-200/60 bg-white/60 group-hover:border-slate-300 group-hover:bg-white"
                  }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${isPrimary ? "bg-red-100 text-red-600" : "bg-slate-100 text-slate-500 group-hover:text-slate-800"
                    } transition-colors`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider ${isPrimary ? "text-red-500" : "text-slate-400"}`}>
                    {contact.name}
                  </p>
                  <p className={`mt-1 text-lg font-black tracking-tight ${isPrimary ? "text-red-700" : "text-slate-700"}`}>
                    {contact.number}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
