import { GroupTravelCard } from "./GroupTravelCard";

// Sample data - replace with actual data fetching later
const groupOptions = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    altText: "People of similar age traveling together",
    title: "Age-Based Groups",
    description:
      "Travel with peers in your age range for shared experiences and perspectives.",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    altText: "Diverse group of adventurers",
    title: "Random Adventurer Squads",
    description:
      "Get matched with diverse travelers for unexpected friendships.",
    linkUrl: "#",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    altText: "Corporate team on a retreat",
    title: "Enterprise Tours",
    description:
      "Team-building retreats and corporate getaways designed for companies.",
    linkUrl: "#",
  },
];

export default function GroupTravel() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-hunter-green mb-4">
          Group Travel & Community
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet like-minded travelers and create friendships that last beyond the
          journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {groupOptions.map((option, index) => (
          <GroupTravelCard key={index} {...option} />
        ))}
      </div>
    </section>
  );
}
