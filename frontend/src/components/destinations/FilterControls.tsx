import React from 'react';
import { Button } from '@/components/ui/button'; // Using shadcn Button

interface FilterControlsProps {
  countries: string[];
  selectedCountry: string | null;
  onFilterChange: (country: string | null) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  countries,
  selectedCountry,
  onFilterChange,
}) => {
  return (
    <div className="mb-8 flex flex-wrap gap-2 justify-center">
      <Button
        variant={selectedCountry === null ? 'default' : 'outline'}
        onClick={() => onFilterChange(null)}
        className={`border-hunter-green ${selectedCountry === null ? 'bg-hunter-green text-custom-white hover:bg-hunter-green/90' : 'text-hunter-green hover:bg-pale-dogwood'}`}
      >
        All
      </Button>
      {countries.map((country) => (
        <Button
          key={country}
          variant={selectedCountry === country ? 'default' : 'outline'}
          onClick={() => onFilterChange(country)}
          className={`border-hunter-green ${selectedCountry === country ? 'bg-hunter-green text-custom-white hover:bg-hunter-green/90' : 'text-hunter-green hover:bg-pale-dogwood'}`}
        >
          {country}
        </Button>
      ))}
      {/* Add more filters here (e.g., by experience type) */}
    </div>
  );
};

export default FilterControls;
