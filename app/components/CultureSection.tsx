import Image from "next/image";
import SectionHeader from "./SectionHeader";

const cultureItems = [
  {
    title: "Loi Weaving Tradition",
    description: "Famous for traditional handwoven woolen blankets (Lois) known for warmth and durability.",
    image: "https://images.unsplash.com/photo-1605280263929-1c42c62ef169?q=80&w=600&h=400&fit=crop", // placeholder
  },
  {
    title: "Vibrant Festivals",
    description: "Experience the vibrant energy of Lohri, Baisakhi, and local melas celebrating the harvest.",
    image: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?q=80&w=600&h=400&fit=crop", // placeholder
  },
  {
    title: "Authentic Cuisine",
    description: "Savor the rich flavors of Rajma Chawal, Makki di Roti, Sarson da Saag, and local chaats.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&h=400&fit=crop", // placeholder
  },
  {
    title: "Folk Heritage",
    description: "A blend of Punjabi Bhangra and Himachali folk music resonates through the city's events.",
    image: "https://images.unsplash.com/photo-1541368940860-95160fa8ebfc?q=80&w=600&h=400&fit=crop", // placeholder
  },
];

export default function CultureSection() {
  return (
    <section id="culture" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-linear-to-b from-white to-rose-50/30">
      <SectionHeader
        badge="Culture & Heritage"
        title={
          <>
            The Heart of <span className="gradient-text bg-linear-to-r from-rose-500 to-orange-500">Punjab</span>
          </>
        }
        subtitle="Discover the rich traditions, unique crafts, and mouth-watering cuisine that define the spirit of Pathankot."
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2">
          {cultureItems.map((item, i) => (
            <div
              key={item.title}
              className="group flex flex-col sm:flex-row gap-4 rounded-2xl bg-white/60 p-4 shadow-sm ring-1 ring-slate-100 backdrop-blur-sm transition-all hover:bg-white hover:shadow-md animate-fade-in-up"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="relative aspect-video sm:aspect-auto sm:h-32 w-full sm:w-40 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
