import HeroSection from "@/components/home/HeroSection"; // Import the HeroSection
import EmotionDiscovery from "@/components/home/EmotionDiscovery"; // Import the EmotionDiscovery section
import FeaturedExperiences from "@/components/home/FeaturedExperiences"; // Import the FeaturedExperiences section

export default function Home() {
  return (
    <>
      <HeroSection />
      <EmotionDiscovery /> {/* Add the EmotionDiscovery section */}
      <FeaturedExperiences /> {/* Add the FeaturedExperiences section */}
      {/* Add other page sections here */}
    </>
  );
}
