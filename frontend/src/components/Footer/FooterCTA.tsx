import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { footerConfig } from '@/config/footer';

const FooterCTA = () => {
  const { title, buttons } = footerConfig.cta;

  return (
    <div className="bg-hunter-green text-white p-8 text-center">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {buttons.map((button, index) => (
          <Button
            key={index}
            asChild
            variant="outline"
            className="bg-white text-hunter-green font-bold hover:bg-gray-100 rounded-full py-3 px-6"
          >
            <Link href={button.href}>{button.title}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FooterCTA;
