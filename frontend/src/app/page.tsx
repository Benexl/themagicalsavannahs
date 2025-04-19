import HeroSection from "@/components/home/HeroSection"; // Import the HeroSection
import EmotionDiscovery from "@/components/home/EmotionDiscovery"; // Import the EmotionDiscovery section
import FeaturedExperiences from "@/components/home/FeaturedExperiences"; // Import the FeaturedExperiences section
import TopDestinations from "@/components/home/TopDestinations";
export default function Home() {
  return (
    <>
      <HeroSection />
      <EmotionDiscovery /> {/* Add the EmotionDiscovery section */}
      <FeaturedExperiences /> {/* Add the FeaturedExperiences section */}
      <TopDestinations /> {/* Add the TopDestinations section */}
      {/* Add other page sections here */}
    </>
  );
}
