import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeroActions = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      {/* Start Journey Button */}
      <Button
        asChild
        size="lg"
        className="bg-hunter-green hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-hunter-green focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
      >
        <Link href="#">Start your Journey Today</Link>
      </Button>
      {/* Surprise Me Button */}
      <Button
        asChild
        variant="outline"
        size="lg"
        className="bg-white text-hunter-green hover:bg-gray-50 font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-hunter-green focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
      >
        <Link href="#">Surprise Me ✨</Link>
      </Button>
    </div>
  );
};

export default HeroActions;
