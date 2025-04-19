import { StoryOfTheMonthCard } from "./StoryOfTheMonthCard";
import { RecentStoriesList } from "./RecentStoriesList";

// Sample data - replace with actual data fetching later
const storyOfTheMonth = {
  imageUrl:
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  tag: "Story of the Month 🏆",
  title: "Finding Love on the Savannahs",
  description:
    '"We never expected to meet our soulmates on a group safari, but The Magical Savannahs made it happen..."',
  author: "Sarah & James",
  linkUrl: "#",
};

export default function StoriesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-hunter-green">
          Stories That Moved Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Story of the Month */}
          <StoryOfTheMonthCard {...storyOfTheMonth} />

          {/* Recent Stories */}
          <RecentStoriesList />
        </div>
      </div>
    </section>
  );
}
