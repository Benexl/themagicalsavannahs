'use client';

import React from 'react';
import DestinationsHero from '@/components/destinations/DestinationsHero';
import DestinationGrid from '@/components/destinations/DestinationGrid';
import FilterControls from '@/components/destinations/FilterControls';

// Dummy data for destinations based on .project/index.md
const destinations = [
  // Kenya
  { id: 'ken-mara', name: 'Maasai Mara', country: 'Kenya', image: '/images/destinations/mara.jpg', description: 'Iconic savannah, wildlife safaris.' },
  { id: 'ken-diani', name: 'Diani Beach', country: 'Kenya', image: '/images/destinations/diani.jpg', description: 'Pristine white sands, turquoise waters.' },
  { id: 'ken-mtkenya', name: 'Mount Kenya', country: 'Kenya', image: '/images/destinations/mtkenya.jpg', description: 'Majestic peaks, diverse ecosystems.' },
  { id: 'ken-naivasha', name: 'Lake Naivasha', country: 'Kenya', image: '/images/destinations/naivasha.jpg', description: 'Freshwater lake, abundant birdlife.' },
  { id: 'ken-amboseli', name: 'Amboseli', country: 'Kenya', image: '/images/destinations/amboseli.jpg', description: 'Stunning Kilimanjaro views, elephants.' },
  { id: 'ken-nairobi', name: 'Nairobi', country: 'Kenya', image: '/images/destinations/nairobi.jpg', description: 'Vibrant city, urban culture, nightlife.' },
  // Tanzania
  { id: 'tan-serengeti', name: 'Serengeti', country: 'Tanzania', image: '/images/destinations/serengeti.jpg', description: 'Vast plains, Great Migration.' },
  { id: 'tan-kilimanjaro', name: 'Mount Kilimanjaro', country: 'Tanzania', image: '/images/destinations/kilimanjaro.jpg', description: "Africa's highest peak, challenging climb." },
  { id: 'tan-zanzibar', name: 'Zanzibar', country: 'Tanzania', image: '/images/destinations/zanzibar.jpg', description: 'Spice islands, historic Stone Town.' },
  { id: 'tan-ngorongoro', name: 'Ngorongoro Crater', country: 'Tanzania', image: '/images/destinations/ngorongoro.jpg', description: 'Volcanic caldera, dense wildlife.' },
  { id: 'tan-manyara', name: 'Lake Manyara', country: 'Tanzania', image: '/images/destinations/manyara.jpg', description: 'Tree-climbing lions, flamingos.' },
  { id: 'tan-arusha', name: 'Arusha', country: 'Tanzania', image: '/images/destinations/arusha.jpg', description: 'Gateway to safari circuits.' },
];

const DestinationsPage = () => {
  // Basic state for filtering - can be expanded later
  const [filteredDestinations, setFilteredDestinations] = React.useState(destinations);
  const [selectedCountry, setSelectedCountry] = React.useState<string | null>(null);

  const handleFilterChange = (country: string | null) => {
    setSelectedCountry(country);
    if (country) {
      setFilteredDestinations(destinations.filter(d => d.country === country));
    } else {
      setFilteredDestinations(destinations);
    }
  };

  return (
    <div>
      <DestinationsHero />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <FilterControls
          countries={['Kenya', 'Tanzania']}
          selectedCountry={selectedCountry}
          onFilterChange={handleFilterChange}
        />
        <DestinationGrid destinations={filteredDestinations} />
      </div>
    </div>
  );
};

export default DestinationsPage;
