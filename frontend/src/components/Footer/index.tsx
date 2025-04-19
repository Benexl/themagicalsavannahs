import React from 'react';
import FooterCTA from './FooterCTA';
import FooterLinks from './FooterLinks';
import FooterDestinations from './FooterDestinations';
import FooterConnect from './FooterConnect';
import FooterBottom from './FooterBottom';
import { footerConfig } from '@/config/footer';

const Footer = () => {
  return (
    <footer className="bg-[url('https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60')] bg-cover bg-center text-white">
      <FooterCTA />
      <div className="bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          {/* Middle Tier - Main Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <FooterLinks sections={footerConfig.linkSections} />
            <FooterDestinations section={footerConfig.destinationSection} />
            <FooterConnect />
          </div>

          {/* Bottom Tier - Legal */}
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
