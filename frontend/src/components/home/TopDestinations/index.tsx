import { DestinationCarousel } from "./DestinationCarousel";

export default function TopDestinations() {
  return (
    <section className="py-16 lg:py-24 bg-custom-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-hunter-green">
          Explore Iconic Destinations
        </h2>
        <div className="relative w-full">
          <DestinationCarousel />
        </div>
      </div>
    </section>
  );
}
