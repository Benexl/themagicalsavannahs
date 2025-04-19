import HeroSection from "@/components/home/HeroSection"; // Import the HeroSection
import EmotionDiscovery from "@/components/home/EmotionDiscovery"; // Import the EmotionDiscovery section
import FeaturedExperiences from "@/components/home/FeaturedExperiences"; // Import the FeaturedExperiences section
import TopDestinations from "@/components/home/TopDestinations";
import StoriesSection from "@/components/home/StoriesSection"; // Import the StoriesSection
import GroupTravel from "@/components/home/GroupTravel"; // Import the GroupTravel section
import ReviewsSection from "@/components/home/ReviewsSection"; // Import the ReviewsSection
import BusinessSection from "@/components/home/BusinessSection"; // Import the BusinessSection

export default function Home() {
  return (
    <>
      <HeroSection />
      <EmotionDiscovery /> {/* Add the EmotionDiscovery section */}
      <FeaturedExperiences /> {/* Add the FeaturedExperiences section */}
      <TopDestinations /> {/* Add the TopDestinations section */}
      <StoriesSection /> {/* Add the StoriesSection */}
      <GroupTravel /> {/* Add the GroupTravel section */}
      <ReviewsSection /> {/* Add the ReviewsSection */}
      <BusinessSection /> {/* Add the BusinessSection */}
      {/* Add other page sections here */}
    </>
  );
}
