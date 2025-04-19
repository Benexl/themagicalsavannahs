import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const HeroSearch = () => {
  return (
    <div className="mt-12 max-w-lg mx-auto">
      <form className="relative" onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          placeholder="How do you want to feel? (e.g., adventurous, relaxed)"
          className="w-full h-14 py-4 pl-6 pr-14 rounded-full text-gray-900 bg-white/90 placeholder-gray-500 border-2 border-transparent focus:outline-none focus:bg-white focus:border-hunter-green shadow-sm transition duration-300 ease-in-out"
        />
        <Button
          type="submit"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-hunter-green text-white rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-hunter-green focus:ring-offset-2 transition-all duration-300 ease-in-out shadow hover:shadow-md"
        >
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      </form>
    </div>
  );
};

export default HeroSearch;
