import React from 'react';
import DestinationGrid from '@/components/destinations/DestinationGrid'; // Re-use the grid

// Dummy data specific to Kenya
const kenyaDestinations = [
  { id: 'ken-mara', name: 'Maasai Mara', country: 'Kenya', image: '/images/destinations/mara.jpg', description: 'Iconic savannah, wildlife safaris.' },
  { id: 'ken-diani', name: 'Diani Beach', country: 'Kenya', image: '/images/destinations/diani.jpg', description: 'Pristine white sands, turquoise waters.' },
  { id: 'ken-mtkenya', name: 'Mount Kenya', country: 'Kenya', image: '/images/destinations/mtkenya.jpg', description: 'Majestic peaks, diverse ecosystems.' },
  { id: 'ken-naivasha', name: 'Lake Naivasha', country: 'Kenya', image: '/images/destinations/naivasha.jpg', description: 'Freshwater lake, abundant birdlife.' },
  { id: 'ken-amboseli', name: 'Amboseli', country: 'Kenya', image: '/images/destinations/amboseli.jpg', description: 'Stunning Kilimanjaro views, elephants.' },
  { id: 'ken-nairobi', name: 'Nairobi', country: 'Kenya', image: '/images/destinations/nairobi.jpg', description: 'Vibrant city, urban culture, nightlife.' },
];

const KenyaDestinationsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Destinations in Kenya</h1>
      <p className="text-center text-lg mb-12">Explore the wonders of Kenya.</p>
      <DestinationGrid destinations={kenyaDestinations} />
    </div>
  );
};

export default KenyaDestinationsPage;
