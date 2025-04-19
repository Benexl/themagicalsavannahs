import Link from "next/link";
import { Badge } from "@/components/ui/badge"; // Using Shadcn Badge

interface StoryOfTheMonthCardProps {
  imageUrl: string;
  tag: string;
  title: string;
  description: string;
  author: string;
  linkUrl: string;
}

export function StoryOfTheMonthCard({
  imageUrl,
  tag,
  title,
  description,
  author,
  linkUrl,
}: StoryOfTheMonthCardProps) {
  return (
    <div className="bg-pale-dogwood rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
      {/* Use Next/Image for optimization, but keep background-image for styling ease */}
      <div
        className="h-64 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Optional: Add an overlay if needed */}
        {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          {/* Using Shadcn Badge for the tag */}
          <Badge variant="secondary" className="bg-moonstone text-white hover:bg-moonstone/90">
            {tag}
          </Badge>
        </div>
        <h3 className="font-bold text-xl mb-2 text-hunter-green flex-grow">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-sm text-gray-600">By {author}</span>
          <Link
            href={linkUrl}
            className="text-moonstone font-semibold hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
