import type { Metadata } from "next";
import { Users, Music, Theater, CalendarHeart, Flame, ArrowLeft, Landmark } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Culture & Heritage of Pathankot",
  description: "Explore the vibrant culture, singing, dancing, festivals, and rich history of Pathankot.",
};

const culturalAspects = [
  {
    title: "Influence of History & Geography",
    icon: Landmark,
    description: "The culture of Pathankot is dominated largely by Punjabi traditions. However, its close proximity to Jammu-Kashmir and Himachal Pradesh has made a significant difference in the way people lead their lives. For ages, the Punjabi population of Pathankot has come in close contact with the residents of the two mountainous states, leading to an interchanging of ideas and values. Consequently, one can witness a strong influence of Dogra and Himachali customs in Pathankot's culture. Historically facing enemy assaults has taught the people to stand united against all odds.",
    color: "amber"
  },
  {
    title: "Singing & Dancing",
    icon: Music,
    description: "Singing and dancing play a massive role in the life of the people of Pathankot. The slightest provocation tears away their hardcore businessman image and reveals their true, lively self. Bhangra, a community-based dance of Punjab, is a primary form of self-expression. Giddha is also very popular among women, accompanied by songs called 'boli' which express everything from family drama to political views. Gatka, a martial dance involving weapons such as swords and sticks, is traditionally performed on festivals and joyous occasions.",
    color: "rose"
  },
  {
    title: "Drama Clubs & Akhras",
    icon: Theater,
    description: "There are quite a few drama clubs in Pathankot. Interestingly, in most of them, male actors historically took part in female roles. Wrestling clubs known as the 'Akhras' are a deep-rooted part of the city's culture. Traditionally, wrestling is considered an art form learned from a Guru rather than just a sport. Even with modern sports taking over, quite a few masters still run their akhras in different parts of the city.",
    color: "blue"
  },
  {
    title: "Festivals & Fairs",
    icon: CalendarHeart,
    description: "Festivals occupy a big place in Pathankot's culture. Baisakhi is celebrated with incredible gusto for three days, complete with vibrant fairs. Shivaratri is another major festival celebrated with grandeur, especially at the ancient Mukteshwar temple on the banks of the Ravi River. Navratra, Ramlila, and Gurupurab (Guru Nanak’s birth anniversary) are also celebrated with immense pride and devotion across the city.",
    color: "emerald"
  }
];

const colorMap = {
  amber: "bg-amber-100 text-amber-700 border-amber-200 shadow-amber-100",
  rose: "bg-rose-100 text-rose-700 border-rose-200 shadow-rose-100",
  blue: "bg-blue-100 text-blue-700 border-blue-200 shadow-blue-100",
  emerald: "bg-emerald-100 text-emerald-700 border-emerald-200 shadow-emerald-100",
};

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-orange-950 via-slate-900 to-amber-950 py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Link href="/explore" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Explore
          </Link>
          <div className="mb-4 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Users className="h-3 w-3" /> Tradition & Heritage
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Culture & <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">Heritage</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A city where different cultures live side by side. Discover how Pathankot has embraced modernity without giving up its age-old traditions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 space-y-12">
        
        {culturalAspects.map((aspect, idx) => {
          const Icon = aspect.icon;
          const styling = colorMap[aspect.color as keyof typeof colorMap];
          
          return (
            <div 
              key={aspect.title}
              className={`bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 lg:gap-12 items-start animate-fade-in-up`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="md:w-1/3 flex flex-col items-start shrink-0">
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl mb-6 shadow-md border ${styling}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 leading-tight mb-4">
                  {aspect.title}
                </h2>
                <div className="h-1 w-12 bg-slate-200 rounded-full" />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-slate-600 leading-loose">
                  {aspect.description}
                </p>
              </div>
            </div>
          );
        })}

        {/* Conclusion Card */}
        <div className="bg-linear-to-r from-amber-50 to-orange-50 rounded-3xl p-8 sm:p-12 border border-amber-100 text-center shadow-lg shadow-amber-100/50">
          <Flame className="h-10 w-10 text-amber-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-800 mb-4">A Living Tradition</h3>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
            If you truly want to learn about the culture of Pathankot, you must walk through the narrow lanes of the old city area. It is here you will witness how traditions live side by side with modernity, bound together by a strong community feeling even in these days of individualism.
          </p>
        </div>

      </div>
    </div>
  );
}
