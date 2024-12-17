import React from 'react';
import { Link } from 'react-router-dom';

export function CompanyLinks() {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Company</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/terms" className="text-gray-400 hover:text-amber-400 transition-colors">
            Terms and Conditions
          </Link>
        </li>
        <li>
          <Link to="/cancellation-policy" className="text-gray-400 hover:text-amber-400 transition-colors">
            Cancellation and Refund Policy
          </Link>
        </li>
        <li>
          <Link to="/privacy-policy" className="text-gray-400 hover:text-amber-400 transition-colors">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-400 hover:text-amber-400 transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}