import { Star } from "lucide-react"; // Using lucide-react for icons

interface ReviewCardProps {
  name: string;
  tripType: string;
  rating: number;
  reviewText: string;
}

export function ReviewCard({
  name,
  tripType,
  rating,
  reviewText,
}: ReviewCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="flex-1">
          <h4 className="font-bold text-hunter-green">{name}</h4>
          <p className="text-sm text-gray-600">{tripType}</p>
        </div>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < rating ? "currentColor" : "none"}
              strokeWidth={i < rating ? 0 : 1}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 text-sm flex-grow">"{reviewText}"</p>
    </div>
  );
}
