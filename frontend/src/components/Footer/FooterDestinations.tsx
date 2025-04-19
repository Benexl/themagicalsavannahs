import React from 'react';
import Link from 'next/link';
import { FooterDestinationSection } from '@/config/footer';

interface FooterDestinationsProps {
  section: FooterDestinationSection;
}

const FooterDestinations: React.FC<FooterDestinationsProps> = ({ section }) => {
  return (
    <div>
      <h4 className="font-bold text-white mb-4">{section.title}</h4>
      <div className="grid grid-cols-2 gap-4">
        {section.destinations.map((dest) => (
          <div key={dest.name}>
            <h5 className="font-medium text-gray-100 mb-2">{dest.name}</h5>
            <ul className="space-y-1">
              {dest.links.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-gray-300 hover:text-white text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterDestinations;
