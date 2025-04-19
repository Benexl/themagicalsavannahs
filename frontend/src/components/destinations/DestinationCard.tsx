import React from 'react';
import Image from 'next/image'; // Using Next.js Image component
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'; // Using shadcn Card
import { Button } from '@/components/ui/button'; // Using shadcn Button
import Link from 'next/link'; // For linking to destination details page (future)
import { MapPin } from 'lucide-react'; // Icon

interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
}

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  // Placeholder image if the provided one fails or is missing
  const imageUrl = destination.image || '/images/placeholder.jpg';

  return (
    <Card className="overflow-hidden flex flex-col h-full border-moonstone/30 hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0 relative h-48 md:h-56">
        {/* Using Next.js Image for optimization */}
        <Image
          src={imageUrl}
          alt={`Image of ${destination.name}`}
          layout="fill" // Use fill layout
          objectFit="cover" // Cover the area
          className="transition-transform duration-300 ease-in-out group-hover:scale-105" // Basic zoom effect on hover (needs group class on parent if Card doesn't work)
        />
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2 text-hunter-green">{destination.name}</CardTitle>
        <div className="flex items-center text-sm text-moonstone mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{destination.country}</span>
        </div>
        <p className="text-sm text-black/80 leading-relaxed">
          {destination.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {/* Link to a future destination details page */}
        <Link href={`/destinations/${destination.id}`} passHref legacyBehavior>
          <Button variant="outline" className="w-full border-hunter-green text-hunter-green hover:bg-pale-dogwood">
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DestinationCard;
