import { Instagram, Twitter, Facebook, LucideProps } from "lucide-react"; // Assuming TikTok icon isn't directly in lucide-react

export type FooterLink = {
  title: string;
  href: string;
};

export type FooterLinkSection = {
  title: string;
  links: FooterLink[];
};

export type FooterDestinationSection = {
    title: string;
    destinations: {
        name: string;
        links: FooterLink[];
    }[];
};

export type SocialLink = {
  name: string;
  href: string;
  icon: React.ComponentType<LucideProps>; // Or appropriate type if using different icons
};

export const footerConfig = {
  cta: {
    title: "Ready to make memories that last a lifetime? 🌍✨",
    buttons: [
      { title: "Book Your Adventure", href: "#" },
      { title: "Surprise Me", href: "#" },
    ],
  },
  linkSections: [
    {
      title: "Explore",
      links: [
        { title: "Emotion-Based Trips", href: "#" },
        { title: "Surprise Me", href: "#" },
        { title: "Group Adventures", href: "#" },
        { title: "TravelMatch™", href: "#" },
        { title: "Tailored Trios", href: "#" },
      ],
    },
     {
      title: "Experiences",
      links: [
        { title: "Stargazing Nights", href: "#" },
        { title: "Hidden Gem Hunts", href: "#" },
        { title: "Story of the Month", href: "#" },
        { title: "Healing Escapes", href: "#" },
        { title: "Romance & Honeymoons", href: "#" },
      ],
    },
    {
      title: "About",
      links: [
        { title: "Why Magical Savannahs", href: "#" },
        { title: "Meet the Team", href: "#" },
        { title: "Private Tours", href: "#" },
        { title: "Trip Coordinators", href: "#" },
        { title: "Referral Program", href: "#" },
        { title: "Contact Us", href: "#" },
      ],
    },
  ] as FooterLinkSection[], // Type assertion
  destinationSection: {
      title: "Destinations",
      destinations: [
          {
              name: "Kenya",
              links: [
                  { title: "Maasai Mara", href: "#" },
                  { title: "Diani Beach", href: "#" },
                  { title: "Nairobi", href: "#" },
              ]
          },
          {
              name: "Tanzania",
              links: [
                  { title: "Serengeti", href: "#" },
                  { title: "Zanzibar", href: "#" },
                  { title: "Kilimanjaro", href: "#" },
              ]
          }
      ]
  } as FooterDestinationSection, // Type assertion
  connectSection: {
    newsletter: {
      title: "Email Newsletter",
      placeholder: "Your email",
      buttonText: "Join",
    },
    social: {
      title: "Follow Us",
      links: [
        { name: "Instagram", href: "#", icon: Instagram },
        { name: "Twitter", href: "#", icon: Twitter },
        // { name: "TikTok", href: "#", icon: TikTokIcon }, // Add appropriate TikTok icon if available
        { name: "Facebook", href: "#", icon: Facebook },
      ],
    },
    email: "inquiries@themagicalsavannahs.com",
  },
  bottom: {
    copyright: "© 2025 The Magical Savannahs. All rights reserved.",
    links: [
      { title: "Privacy Policy", href: "#" },
      { title: "Terms of Use", href: "#" },
      { title: "Site Map", href: "#" },
    ],
    creator: "Made by @benexl",
  },
};

export type FooterConfig = typeof footerConfig;
