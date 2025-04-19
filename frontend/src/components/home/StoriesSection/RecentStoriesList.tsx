import Link from "next/link";
import { RecentStoryItem } from "./RecentStoryItem";
import { Button } from "@/components/ui/button"; // Using Shadcn Button

// Sample data - replace with actual data fetching later
const recentStories = [
  {
    title: "The Healing Power of Kilimanjaro",
    description:
      "How climbing Africa's highest peak helped me overcome grief and find new purpose.",
    author: "Michael T.",
    linkUrl: "#",
  },
  {
    title: "A Surprise Proposal in Zanzibar",
    description:
      "The Magical Savannahs team helped orchestrate the perfect beachfront proposal.",
    author: "Amanda & David",
    linkUrl: "#",
  },
  // Add more recent stories if needed
];

export function RecentStoriesList() {
  return (
    <div>
      {recentStories.map((story, index) => (
        <RecentStoryItem key={index} {...story} />
      ))}
      <div className="text-center mt-8">
        {/* Using Shadcn Button */}
        <Button asChild variant="default" className="bg-hunter-green hover:bg-moonstone">
          <Link href="#">Share your story, win a trip!</Link>
        </Button>
      </div>
    </div>
  );
}
