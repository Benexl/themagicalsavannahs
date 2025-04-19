import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { footerConfig } from '@/config/footer';

const FooterConnect = () => {
  const { newsletter, social, email } = footerConfig.connectSection;

  return (
    <div>
      <h4 className="font-bold text-white mb-4">Stay Connected</h4>
      <form className="mb-4">
        <label htmlFor="footer-email" className="block text-sm font-medium text-gray-200 mb-1">
          {newsletter.title}
        </label>
        <div className="flex">
          <Input
            type="email"
            id="footer-email"
            placeholder={newsletter.placeholder}
            className="flex-1 px-3 py-2 border border-gray-500 rounded-l-md focus:outline-none focus:ring-1 focus:ring-moonstone bg-white/10 text-white placeholder-gray-400 rounded-r-none"
          />
          <Button
            type="submit"
            className="bg-hunter-green text-white px-3 py-2 rounded-l-none rounded-r-md hover:bg-green-800"
          >
            {newsletter.buttonText}
          </Button>
        </div>
      </form>

      <div className="mb-4">
        <h5 className="text-sm font-medium text-gray-200 mb-2">{social.title}</h5>
        <div className="flex space-x-3">
          {social.links.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white">
              <link.icon className="h-5 w-5" /> {/* Adjusted size */}
              <span className="sr-only">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <Link href={`mailto:${email}`} className="text-gray-300 hover:text-white text-sm">
          {email}
        </Link>
      </div>
    </div>
  );
};

export default FooterConnect;
