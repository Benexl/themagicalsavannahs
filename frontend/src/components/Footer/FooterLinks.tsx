import React from 'react';
import Link from 'next/link';
import { FooterLinkSection } from '@/config/footer';

interface FooterLinksProps {
  sections: FooterLinkSection[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ sections }) => {
  return (
    <>
      {sections.map((section) => (
        <div key={section.title}>
          <h4 className="font-bold text-white mb-4">{section.title}</h4>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.title}>
                <Link href={link.href} className="text-gray-300 hover:text-white text-sm">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterLinks;
