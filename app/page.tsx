import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CityGrid from "./components/CityGrid";
import FamousPlaces from "./components/FamousPlaces";
import HowToReach from "./components/HowToReach";
import CultureSection from "./components/CultureSection";
import NewsSection from "./components/NewsSection";
import EmergencyContacts from "./components/EmergencyContacts";
import CityMap from "./components/CityMap";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col min-h-screen bg-linear-to-br from-slate-50 via-white to-zinc-50">
      <main className="flex-1">
        <HeroSection />

        {/* City Services (4-Cards) */}
        <CityGrid />

        <SectionDivider />
        <FamousPlaces />

        <SectionDivider />
        <HowToReach />

        <SectionDivider />
        <CultureSection />

        {/* <SectionDivider />
        <NewsSection /> */}

        <SectionDivider />
        <EmergencyContacts />

        <SectionDivider />
        <CityMap />
      </main>
      <Footer />
    </div>
  );
}
