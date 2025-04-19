import React from 'react';
import DestinationGrid from '@/components/destinations/DestinationGrid'; // Re-use the grid

// Dummy data specific to Tanzania
const tanzaniaDestinations = [
  { id: 'tan-serengeti', name: 'Serengeti', country: 'Tanzania', image: '/images/destinations/serengeti.jpg', description: 'Vast plains, Great Migration.' },
  { id: 'tan-kilimanjaro', name: 'Mount Kilimanjaro', country: 'Tanzania', image: '/images/destinations/kilimanjaro.jpg', description: "Africa's highest peak, challenging climb." },
  { id: 'tan-zanzibar', name: 'Zanzibar', country: 'Tanzania', image: '/images/destinations/zanzibar.jpg', description: 'Spice islands, historic Stone Town.' },
  { id: 'tan-ngorongoro', name: 'Ngorongoro Crater', country: 'Tanzania', image: '/images/destinations/ngorongoro.jpg', description: 'Volcanic caldera, dense wildlife.' },
  { id: 'tan-manyara', name: 'Lake Manyara', country: 'Tanzania', image: '/images/destinations/manyara.jpg', description: 'Tree-climbing lions, flamingos.' },
  { id: 'tan-arusha', name: 'Arusha', country: 'Tanzania', image: '/images/destinations/arusha.jpg', description: 'Gateway to safari circuits.' },
];

const TanzaniaDestinationsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Destinations in Tanzania</h1>
      <p className="text-center text-lg mb-12">Discover the beauty of Tanzania.</p>
      <DestinationGrid destinations={tanzaniaDestinations} />
    </div>
  );
};

export default TanzaniaDestinationsPage;
