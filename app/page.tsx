import HeroSection from "./components/HeroSection";
import CityGrid from "./components/CityGrid";
import FamousPlaces from "./components/FamousPlaces";
import HowToReach from "./components/HowToReach";
import CultureSection from "./components/CultureSection";
import EmergencyContacts from "./components/EmergencyContacts";
import CityMap from "./components/CityMap";
import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* 4 Tourism Pillars */}
      <CityGrid />

      <SectionDivider />
      <FamousPlaces />

      <SectionDivider />
      <HowToReach />

      <SectionDivider />
      <CultureSection />

      <SectionDivider />
      <EmergencyContacts />

      <SectionDivider />
      <CityMap />
    </>
  );
}
