import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CityGrid from "./components/CityGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-zinc-50">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CityGrid />
      </main>
      <Footer />
    </div>
  );
}
