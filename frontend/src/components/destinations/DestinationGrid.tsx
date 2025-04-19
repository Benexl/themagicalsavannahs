import React from 'react';
import DestinationCard from './DestinationCard'; // Assuming DestinationCard is in the same directory

interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
}

interface DestinationGridProps {
  destinations: Destination[];
}

const DestinationGrid: React.FC<DestinationGridProps> = ({ destinations }) => {
  if (!destinations || destinations.length === 0) {
    return <p className="text-center text-gray-500">No destinations match the current filter.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
};

export default DestinationGrid;
