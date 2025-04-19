export interface NavItem { // Define an interface for clarity
  title: string;
  href?: string; // Optional href, might not exist for parent items
  triggerClassName?: string; // For top-level items
  contentClassName?: string; // For top-level items
  children?: NavItem[]; // Recursive children
}

export const navLinks: NavItem[] = [
  {
    title: "Explore",
    triggerClassName: "text-gray-700 font-medium hover:text-hunter-green data-[state=open]:text-hunter-green",
    contentClassName: "grid w-[200px] gap-1 p-2 md:w-[250px]",
    children: [
      { title: "Emotion-Based Trips", href: "/explore/emotion-based" },
      { title: "Group Adventures", href: "/explore/group-adventures" },
      { title: "Surprise Me ✨", href: "/explore/surprise-me" },
      { title: "Wishlist 💖", href: "/explore/wishlist" },
    ],
  },
  {
    title: "Experiences",
    triggerClassName: "text-gray-700 font-medium hover:text-hunter-green data-[state=open]:text-hunter-green",
    contentClassName: "grid w-[200px] gap-1 p-2 md:w-[250px]",
    children: [
      { title: "TravelMatch™ ❤️", href: "/experiences/travel-match" },
      { title: "Stories", href: "/experiences/stories" },
      { title: "Story of the Month 🏆", href: "/experiences/story-of-the-month" },
      { title: "Tailored Trios", href: "/experiences/tailored-trios" },
      { title: "Stargazing", href: "/experiences/stargazing" },
      { title: "Hidden Gem Hunts", href: "/experiences/hidden-gem-hunts" },
    ],
  },
  {
    title: "Travel Themes",
    triggerClassName: "text-gray-700 font-medium hover:text-hunter-green data-[state=open]:text-hunter-green",
    contentClassName: "grid w-[200px] gap-1 p-2 md:w-[250px]",
    children: [
      { title: "Wellness & Retreats", href: "/themes/wellness-retreats" },
      { title: "Romance & Honeymoons 💞", href: "/themes/romance-honeymoons" },
      { title: "Thrill & Adventure", href: "/themes/thrill-adventure" },
      { title: "Nature & Wildlife", href: "/themes/nature-wildlife" },
      { title: "Urban Vibes 🏙️", href: "/themes/urban-vibes" },
      { title: "Food & Culture 🍲", href: "/themes/food-culture" },
      { title: "Soul & Spiritual", href: "/themes/soul-spiritual" },
      { title: "Healing Escapes", href: "/themes/healing-escapes" },
    ],
  },
  {
    title: "Destinations",
    triggerClassName: "text-gray-700 font-medium hover:text-hunter-green data-[state=open]:text-hunter-green",
    contentClassName: "grid grid-cols-1 gap-1 p-2 w-auto md:w-auto", // Adjust layout for submenus
    children: [
      {
        title: "Kenya",
        href: "/destinations/kenya", // Add href for the country
        children: [ // Destinations within Kenya
          { title: "Nairobi", href: "/destinations/kenya/nairobi" },
          { title: "Maasai Mara", href: "/destinations/kenya/maasai-mara" },
          { title: "Diani Beach", href: "/destinations/kenya/diani-beach" },
          { title: "Lake Naivasha", href: "/destinations/kenya/lake-naivasha" },
          { title: "Mount Kenya", href: "/destinations/kenya/mount-kenya" },
          { title: "Amboseli", href: "/destinations/kenya/amboseli" },
        ],
      },
      {
        title: "Tanzania",
        href: "/destinations/tanzania", // Add href for the country
        children: [ // Destinations within Tanzania
          { title: "Serengeti", href: "/destinations/tanzania/serengeti" },
          { title: "Zanzibar", href: "/destinations/tanzania/zanzibar" },
          { title: "Mount Kilimanjaro", href: "/destinations/tanzania/mount-kilimanjaro" },
          { title: "Ngorongoro Crater", href: "/destinations/tanzania/ngorongoro-crater" },
          { title: "Arusha", href: "/destinations/tanzania/arusha" },
          { title: "Lake Manyara", href: "/destinations/tanzania/lake-manyara" },
        ],
      },
    ],
  },
  {
    title: "About Us",
    triggerClassName: "text-gray-700 font-medium hover:text-hunter-green data-[state=open]:text-hunter-green",
    contentClassName: "grid w-[200px] gap-1 p-2 md:w-[250px]",
    children: [
      { title: "Why Magical Savannahs", href: "/about/why-us" },
      { title: "The Team", href: "/about/team" },
      { title: "Private Tours", href: "/about/private-tours" },
      { title: "Trip Coordinators", href: "/about/trip-coordinators" },
      { title: "Referral Program", href: "/about/referral-program" },
      { title: "Contact Us", href: "/about/contact" },
    ],
  },
];
