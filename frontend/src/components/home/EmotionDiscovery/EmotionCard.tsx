import React from 'react';
import Link from 'next/link';

interface EmotionCardProps {
  emoji: string;
  name: string;
  href: string;
}

const EmotionCard: React.FC<EmotionCardProps> = ({ emoji, name, href }) => {
  return (
    <Link
      href={href}
      className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300 border border-gray-100 hover:border-hunter-green block"
    >
      <span className="text-3xl mb-3 block">{emoji}</span>
      <h3 className="font-bold text-hunter-green">{name}</h3>
    </Link>
  );
};

export default EmotionCard;
