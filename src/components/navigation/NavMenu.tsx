import React from 'react';
import { Link } from 'react-router-dom';
import { navigationItems } from './NavigationItems';
import { NavLink } from '../ui/NavLink';

interface NavMenuProps {
  className?: string;
}

export function NavMenu({ className = '' }: NavMenuProps) {
  return (
    <nav className={className}>
      <ul className="flex items-center space-x-6 lg:space-x-8">
        {navigationItems.map(({ id, label, path }) => (
          <li key={id}>
            <NavLink to={path}>
              {label}
            </NavLink>
          </li>
        ))}
        <li>
          <Link
            to="/blog"
            className="text-gray-400 hover:text-amber-400 transition-colors"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/get-started"
            className="bg-gradient-to-r from-amber-400 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-full hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
}