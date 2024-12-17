import React from 'react';
import { Link } from 'react-router-dom';
import { Crown } from 'lucide-react';
import { NavLink } from './ui/NavLink';

export function Header() {
  return (
    <header className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-gradient-to-r from-black/80 to-purple-900/80 backdrop-blur-sm rounded-full border border-amber-400/10 shadow-lg shadow-purple-500/5">
          <div className="flex justify-between items-center px-8 py-4">
            <Link to="/" className="flex items-center">
              <Crown className="h-8 w-8 text-amber-400" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
                Lumeth
              </span>
            </Link>
            
            <nav>
              <ul className="flex items-center space-x-8">
                {[
                  { name: 'Features', path: '/#features' },
                  { name: 'Our Apps', path: '/#ourapps' },
                  { name: 'AI Beauty', path: '/#aibeauty' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'Testimonials', path: '/#testimonials' }
                ].map((item) => (
                  <li key={item.name}>
                    <NavLink to={item.path}>
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              to="/blog/create"
              className="bg-gradient-to-r from-amber-400 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}