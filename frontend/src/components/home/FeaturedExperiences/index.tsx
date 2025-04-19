import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    imageUrl: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    altText: "Tailored Trios",
    title: "Tailored Trios",
    description: "3-stop journeys crafted to perfection based on your preferences.",
    linkUrl: "#",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    altText: "Stargazing Nights",
    title: "Stargazing Nights 🌌",
    description: "Witness the breathtaking African night sky in remote locations.",
    linkUrl: "#",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    altText: "Hidden Gem Hunts",
    title: "Hidden Gem Hunts 🔍",
    description: "Discover secret spots known only to locals and our expert guides.",
    linkUrl: "#",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    altText: "TravelMatch",
    title: "TravelMatch™ ❤️",
    description: "Find your perfect travel companion based on shared interests.",
    linkUrl: "#",
  },
];

const FeaturedExperiences = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hunter-green mb-4">Featured Experiences</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Handpicked adventures that will leave you transformed</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              imageUrl={exp.imageUrl}
              altText={exp.altText}
              title={exp.title}
              description={exp.description}
              linkUrl={exp.linkUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
