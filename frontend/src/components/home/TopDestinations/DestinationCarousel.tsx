"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Use Shadcn UI Carousel
import { DestinationCard } from "./DestinationCard";

// Sample data - replace with actual data fetching later
const destinations = [
  {
    imageUrl: "https://source.unsplash.com/random/1200x800/?maasaimara,kenya",
    altText: "Maasai Mara",
    tag: "Wildlife & Awe",
    title: "Maasai Mara, Kenya",
    description: "Witness the Great Migration and iconic savannahs landscapes.",
    linkUrl: "#",
    linkLabel: "Explore Mara",
  },
  {
    imageUrl: "https://source.unsplash.com/random/1200x800/?serengeti,tanzania",
    altText: "Serengeti",
    tag: "Endless Plains & Adventure",
    title: "Serengeti, Tanzania",
    description: "Experience vast wilderness and unparalleled wildlife encounters.",
    linkUrl: "#",
    linkLabel: "Discover Serengeti",
  },
  {
    imageUrl: "https://source.unsplash.com/random/1200x800/?zanzibar,beach",
    altText: "Zanzibar",
    tag: "Spice & Serenity",
    title: "Zanzibar, Tanzania",
    description: "Relax on pristine beaches and explore rich cultural history.",
    linkUrl: "#",
    linkLabel: "Unwind in Zanzibar",
  },
  // Add more destinations as needed
];

export function DestinationCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {destinations.map((dest, index) => (
          <CarouselItem key={index}>
            <DestinationCard {...dest} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white bg-white/30 hover:bg-white/50" />
      <CarouselNext className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white bg-white/30 hover:bg-white/50" />
    </Carousel>
  );
}
