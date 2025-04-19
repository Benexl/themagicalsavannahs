import React from 'react';
import EmotionCard from './EmotionCard';

const emotions = [
  { emoji: '😌', name: 'Peaceful', href: '#' },
  { emoji: '🏃', name: 'Adventurous', href: '#' },
  { emoji: '💞', name: 'Romantic', href: '#' },
  { emoji: '🌿', name: 'Rejuvenated', href: '#' },
  { emoji: '🤩', name: 'Spontaneous', href: '#' },
];

const EmotionDiscovery = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-hunter-green mb-4">
          How do you want this trip to make you feel?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select your vibe and we&apos;ll curate the perfect experiences just for you
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {emotions.map((emotion) => (
          <EmotionCard
            key={emotion.name}
            emoji={emotion.emoji}
            name={emotion.name}
            href={emotion.href}
          />
        ))}
      </div>
    </section>
  );
};

export default EmotionDiscovery;
