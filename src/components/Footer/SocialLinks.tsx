import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function SocialLinks() {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Connect</h3>
      <div className="flex space-x-4">
        <a 
          href="https://www.instagram.com/lumethapp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-amber-400 transition-colors transform hover:scale-110"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a 
          href="https://www.facebook.com/people/Lumeth/61560421378410/?rdid=OnORerqIEwMXVPcx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1NUDGYqdsw%2F"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-amber-400 transition-colors transform hover:scale-110"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a 
          href="https://x.com/Lumeth_official?t=wKWeTlfEEysl2GqiZl574w&s=08"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-amber-400 transition-colors transform hover:scale-110"
        >
          <Twitter className="w-6 h-6" />
        </a>
      </div>
      <div className="mt-4">
        <p className="text-gray-400 text-sm">
          Follow us on social media for the latest updates, beauty tips, and exclusive offers!
        </p>
      </div>
    </div>
  );
}