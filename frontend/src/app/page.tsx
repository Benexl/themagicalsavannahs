import HeroSection from "@/components/home/HeroSection"; // Import the HeroSection
import EmotionDiscovery from "@/components/home/EmotionDiscovery"; // Import the EmotionDiscovery section
import FeaturedExperiences from "@/components/home/FeaturedExperiences"; // Import the FeaturedExperiences section
import TopDestinations from "@/components/home/TopDestinations";
import StoriesSection from "@/components/home/StoriesSection"; // Import the StoriesSection

export default function Home() {
  return (
    <>
      <HeroSection />
      <EmotionDiscovery /> {/* Add the EmotionDiscovery section */}
      <FeaturedExperiences /> {/* Add the FeaturedExperiences section */}
      <TopDestinations /> {/* Add the TopDestinations section */}
      <StoriesSection /> {/* Add the StoriesSection */}
      {/* Add other page sections here */}
    </>
  );
}
