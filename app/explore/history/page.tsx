import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Shield, Swords, Landmark, MapPin, Map, Crown, Users, Target, BookOpen, Quote, CheckCircle2, Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "History of Pathankot | Ancient Roots to Modern Era",
  description: "Explore the complete history of Pathankot - Gateway to North India, from the ancient Audumbar state to its modern strategic importance.",
};

const timeline = [
  {
    year: "Ancient Era (~3000 BCE)",
    title: "The Audumbar Kingdom",
    description: "Mentioned in the ancient texts of the Mahabharata, the region was governed by the Audumbaras. Strategically located between the Ravi and Chakki rivers, it served as a vital trade route hub where ancient coins have been discovered, proving early organized governance.",
    icon: Landmark,
    color: "amber",
  },
  {
    year: "Mahabharata Era",
    title: "The Pandavas' Exile",
    description: "According to historical traditions and local folklore, the Pandavas spent a significant portion of their exile hiding in the mountainous terrains, dense forests, and caves surrounding this region.",
    icon: BookOpen,
    color: "teal",
  },
  {
    year: "10th–11th Century",
    title: "Rajput Era (Pathania Dynasty)",
    description: "Tomar/Taur Rajput King Jhet Pal established the Pathania dynasty, making Pathankot his capital. Though the capital later shifted to Nurpur, Pathankot remained a highly strategic military stronghold.",
    icon: Crown,
    color: "rose",
  },
  {
    year: "16th - 17th Century",
    title: "Mughal Era & Nurpur State",
    description: "Recorded as a Pargana Headquarters in Akbar's 'Ain-i-Akbari', Pathankot flourished in trade. By the 17th century, it was an integral part of the Nurpur State, linking the hills to the plains.",
    icon: Shield,
    color: "purple",
  },
  {
    year: "18th - 19th Century",
    title: "The Sikh Empire",
    description: "Initially influenced by the Kanhaiya Misl in the 18th century, the region later prospered under the glorious Sikh Empire established by Maharaja Ranjit Singh, integrating deeply with Punjabi culture.",
    icon: Swords,
    color: "orange",
  },
  {
    year: "1849 - 1947",
    title: "British Rule & Railway Boom",
    description: "Following its annexation in 1849, the British developed extensive road and railway networks. The Kangra Valley Railway and broad-gauge links cemented Pathankot as the primary junction for Dalhousie and Kashmir.",
    icon: Map,
    color: "blue",
  },
  {
    year: "1947",
    title: "Partition & The Great Shift",
    description: "The 1947 partition marked a turning point. A massive influx of refugees from West Punjab altered the social fabric, and its newfound proximity to the international border drastically amplified its strategic value.",
    icon: Users,
    color: "slate",
  },
  {
    year: "1965, 1971 & Present",
    title: "Strategic Military Hub",
    description: "Today, Pathankot houses one of Asia's largest military bases (Mamun Cantonment). It played an indispensable logistical and aerial role during the 1965 and 1971 Indo-Pak wars.",
    icon: Target,
    color: "red",
  },
  {
    year: "July 27, 2011",
    title: "An Independent District",
    description: "The Punjab Government officially carved Pathankot out of Gurdaspur, establishing it as a new, independent district to accelerate regional development and administrative efficiency.",
    icon: MapPin,
    color: "emerald",
  },
];

const theories = [
  {
    title: "The Afghan 'Pathans'",
    description: "During the medieval period, many Pathan communities from Afghanistan settled in this region. It is widely believed that the amalgamation of 'Pathan' and 'Kot' (fort) birthed the name Pathankot.",
    color: "amber",
  },
  {
    title: "Ancient 'Pratishthana'",
    description: "Mughal records frequently refer to the city as 'Paithan', which historians believe is an abbreviation of the Sanskrit word 'Pratishthana'. Over centuries, the pronunciation naturally evolved.",
    color: "teal",
  },
  {
    title: "The Pathania Rajputs",
    description: "Local traditions strongly link the city's nomenclature to the ruling 'Pathania' Rajput clan, whose legacy is deeply intertwined with the region's royal and architectural past.",
    color: "rose",
  },
];

const features = [
  "Over 2,000 years of continuous historical significance and civilization.",
  "Deeply connected to the Mahabharata, the Audumbar republic, and Mughal records.",
  "The ancestral epicenter of the Pathania Rajputs and the Nurpur State.",
  "Maintained critical importance across Mughal, Sikh, British, and Modern Indian eras.",
  "A historic trade conduit connecting Punjab, Himachal Pradesh, and Jammu & Kashmir.",
  "Now recognized as one of independent India's most critical military and transport hubs.",
];

const galleryImages = [
  "https://images.openai.com/static-rsc-4/tyveIS96KHhmHaDYP5O8boZRGecPw3K6W6JXOwRIHOVtAEIP8kVO0o9GO2pECUDgl1l78Yj3r8HQxgWs5DuJ0wF_ifOehyuO43-MZwbhalObeKq9P2_xGqWz9USaoityZcfDl0XKvs8493jiyUhY0S-oe1zNkIrTuRXKJOzWUKPZRyO_4gz0yVg6-3MCoFkI?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/l5OHKkEKiO0uuMAD6SegaiEYQNfuQjqsveB5p8MA41s5jEPzoOF4uDR32SYw28wtsBSfs669jk-kWajivPx-_ZiJIPMb8kVQrFavh82Fgrh0YayjlC4n-h8QDCUDEu7_q1uDZq8cI9Wfh622HcyrUJs872UkIdqoBxwubYSqdRpl3Hh6bXmY75yZiACcTpwU?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/VAe9vTyQHd1aIUSSo0njNTBjKXFll4bGeRKEZt3TOoVkpP4fgAHU8Xm6dBvovOxYk0jQltE8MpAx1QRsBhuGDbgP_m_rp10NQhMjf7QjWrXUzvXWJ0_4hBRcKLyxgynya1P6f61o8YdOtE1fsLfClgiHQNe90GardLm_DgW1ksY89k0edN3sGtkRuBlpUMXg?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/LcEyeuNPb6a28WxostIGTh59VeNW2akoNq7QN0LTpCP3dnKoYG3pntU2C6X992OuTiMyXkKaOoaFp0X2yz4WcXTLDWNYYh9xbFYe5gd8pMvUktUe4znx03LVK_SkjSf6yKvKzdjIGpoWJomzUOKmgC2bsm-SVgnhyxpti8zzrPVB2yYbQmpvjmu6vnYjvc94?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/tUFCTSycpIGPvWISFsojDcdn8CMpNlAgwihLVxXrwvOwyK7PrgKTPdFlzC5WTkAiRdF7xt-xPEy53ono2Sh3I-hNFJb_mWJt4BByLVZYsmZCs535uk3kjIm-5CKWD7Wj_VQQZ9jb5uOSgzSu7i7svc0Q7autiGz3FoQs3DMHBn8hv3eMS7nRNjXLPcQPlLsB?purpose=fullsize",
  "https://images.openai.com/static-rsc-4/lGKjiFUXMFzMpkoYp0dJ-R4523aJVpoEmZtvtqvmRQ0vx7GU01o0NTZHCCM-Aolf0yOcF867TzfgIE_1Ftbfi7oTlzAxd58tc7bHrI_4VP_yAcjv5doJp17Y6P6Ruw0rZqRp73M2VE3lu9GB_oHnf8P88EGbDSuYAXyZampblmuxEsobBYp5QenoJj3jd3wX?purpose=fullsize",
];

const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
  amber: { bg: "bg-amber-50/50", text: "text-amber-700", border: "border-amber-200", iconBg: "bg-amber-100" },
  rose: { bg: "bg-rose-50/50", text: "text-rose-700", border: "border-rose-200", iconBg: "bg-rose-100" },
  teal: { bg: "bg-teal-50/50", text: "text-teal-700", border: "border-teal-200", iconBg: "bg-teal-100" },
  purple: { bg: "bg-purple-50/50", text: "text-purple-700", border: "border-purple-200", iconBg: "bg-purple-100" },
  blue: { bg: "bg-blue-50/50", text: "text-blue-700", border: "border-blue-200", iconBg: "bg-blue-100" },
  emerald: { bg: "bg-emerald-50/50", text: "text-emerald-700", border: "border-emerald-200", iconBg: "bg-emerald-100" },
  orange: { bg: "bg-orange-50/50", text: "text-orange-700", border: "border-orange-200", iconBg: "bg-orange-100" },
  slate: { bg: "bg-slate-50/50", text: "text-slate-700", border: "border-slate-200", iconBg: "bg-slate-100" },
  red: { bg: "bg-red-50/50", text: "text-red-700", border: "border-red-200", iconBg: "bg-red-100" },
};

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-amber-950 py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Link href="/explore" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Explore
          </Link>
          <div className="mb-4 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <Clock className="h-3 w-3" /> Gateway to North India
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight mb-6">
            The Heritage of <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">Pathankot</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Pathankot is one of the most ancient and strategically significant cities in Punjab. Far more than just a city, it is universally recognized as the gateway bridging the plains of Punjab with the Himalayas.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 space-y-12">

        {/* ── Theories Section ── */}
        <section className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <Quote className="h-8 w-8 text-slate-300 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">How did "Pathankot" get its name?</h2>
            <p className="text-slate-500 mt-2">Historians propose three primary theories regarding the origin of the city's name:</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {theories.map((theory, idx) => {
              const theme = colorMap[theory.color];
              return (
                <div key={idx} className={`rounded-2xl border p-6 text-center ${theme.bg} ${theme.border}`}>
                  <h3 className={`text-lg font-bold mb-3 ${theme.text}`}>{theory.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{theory.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Timeline Section ── */}
        <section className="rounded-3xl bg-white p-6 sm:p-10 lg:p-14 shadow-xl shadow-slate-200/50 border border-slate-100 max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-12 text-center">Historical Timeline</h2>
          <div className="relative border-l-2 border-slate-100 ml-4 sm:ml-6 md:ml-8 lg:ml-10 space-y-12 pb-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const theme = colorMap[item.color];

              return (
                <div key={index} className="relative pl-10 sm:pl-12 group">
                  {/* Timeline Node */}
                  <div className={`absolute left-[-21px] top-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white ${theme.iconBg} ${theme.text} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* Content Card */}
                  <div className={`rounded-2xl border p-6 sm:p-8 transition-all duration-300 hover:shadow-md ${theme.border} ${theme.bg}`}>
                    <span className={`inline-block mb-3 text-xs font-bold uppercase tracking-wider ${theme.text}`}>
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Historical Gallery Section ── */}
        <section className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <ImageIcon className="h-8 w-8 text-amber-500 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">Glimpses of the Past</h2>
            <p className="text-slate-500 mt-2">Visual records capturing the essence of Pathankot's rich heritage.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="relative h-64 overflow-hidden rounded-2xl border border-slate-200 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Pathankot Historical Image ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* ── Features Section ── */}
        <section className="rounded-3xl bg-slate-900 p-8 sm:p-12 shadow-xl overflow-hidden relative max-w-5xl mx-auto">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 text-center">Significance of Pathankot</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                  <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
