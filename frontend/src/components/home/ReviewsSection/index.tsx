import { ReviewCard } from "./ReviewCard";
import { Star } from "lucide-react";

// Sample data - replace with actual data fetching later
const reviews = [
  {
    name: "James K.",
    tripType: "Group Safari Adventure",
    rating: 5,
    reviewText:
      "The group dynamic made this trip unforgettable. We still have a WhatsApp group going strong 6 months later!",
  },
  {
    name: "Priya M.",
    tripType: "Solo Traveler",
    rating: 5,
    reviewText:
      "As a solo female traveler, I felt completely safe and welcomed by both the group and guides.",
  },
  {
    name: "TechSolutions Inc.",
    tripType: "Corporate Retreat",
    rating: 5,
    reviewText:
      "Our team came back more connected and inspired than ever. The activities were perfectly tailored to our goals.",
  },
];

export default function ReviewsSection() {
  const overallRating = 4.9;
  const totalReviews = 1287;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gray-50 rounded-xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-hunter-green mb-2">
            What Our Travelers Say
          </h3>
          <div className="flex justify-center text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20} // Slightly larger stars for overall rating
                fill={i < Math.round(overallRating) ? "currentColor" : "none"}
                strokeWidth={i < Math.round(overallRating) ? 0 : 1}
                className="mx-0.5"
              />
            ))}
          </div>
          <p className="text-gray-600">
            {overallRating}/5 from {totalReviews.toLocaleString()} reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
