import React from 'react';
import { Link } from './Link';
import { navigationItems } from '../navigation/NavigationItems';

export function FloatingNav() {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-gradient-to-r from-black/95 to-purple-900/95 backdrop-blur-lg px-8 py-4 rounded-full border border-amber-400/20 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300">
        <ul className="flex items-center space-x-8">
          {navigationItems.map(({ id, label, path }) => (
            <li key={id}>
              <Link
                href={path}
                className="relative group"
              >
                <span className="relative z-10 text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  {label}
                </span>
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-amber-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}