import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown, Menu, X } from 'lucide-react';
import { NavMenu } from './navigation/NavMenu';
import { MobileMenu } from './ui/MobileMenu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <NavMenu className="hidden md:block" />

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

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </header>
  );
}