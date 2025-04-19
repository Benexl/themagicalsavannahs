import React from 'react';
import Link from 'next/link';
import { footerConfig } from '@/config/footer';

const FooterBottom = () => {
  const { copyright, links, creator } = footerConfig.bottom;

  return (
    <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
      <p>{copyright}</p>
      <div className="flex flex-wrap justify-center space-x-4 mt-2">
        {links.map((link) => (
          <Link key={link.title} href={link.href} className="hover:text-white">
            {link.title}
          </Link>
        ))}
        {creator && <span>{creator}</span>}
      </div>
    </div>
  );
};

export default FooterBottom;
