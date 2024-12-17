import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown, Menu, X, Settings } from 'lucide-react';
import { NavLink } from './ui/NavLink';
import { MobileMenu } from './ui/MobileMenu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Features', path: '/#features' },
    { name: 'Our Apps', path: '/#ourapps' },
    { name: 'AI Beauty', path: '/#aibeauty' },
    { name: 'Blog', path: '/blog' },
    { name: 'Testimonials', path: '/#testimonials' }
  ];

  return (
    <header className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="bg-gradient-to-r from-black/80 to-purple-900/80 backdrop-blur-sm rounded-full border border-amber-400/10 shadow-lg shadow-purple-500/5">
          <div className="flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4">
            <Link to="/" className="flex items-center">
              <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400" />
              <span className="ml-2 text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
                Lumeth
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-6 lg:space-x-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink to={item.path}>
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                to="/admin/blog"
                className="flex items-center space-x-2 text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Settings className="w-5 h-5" />
                <span className="hidden sm:inline">Admin</span>
              </Link>
              
              <Link
                to="/blog/create"
                className="hidden sm:block bg-gradient-to-r from-amber-400 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-full hover:opacity-90 transition-opacity text-sm sm:text-base"
              >
                Get Started
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white hover:text-amber-400 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} navItems={navItems} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}