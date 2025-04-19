import React from 'react';

const DestinationsHero = () => {
  return (
    <section className="bg-pale-dogwood text-hunter-green py-16 md:py-24 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore Our Destinations</h1>
        <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto">
          Discover the heart of East Africa. From the vast plains of the Maasai Mara to the spice-scented shores of Zanzibar, your adventure awaits.
        </p>
        {/* Optional: Add a search or call to action button here */}
      </div>
    </section>
  );
};

export default DestinationsHero;
