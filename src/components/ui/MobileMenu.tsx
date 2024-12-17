import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NavLink } from './NavLink';

interface NavItem {
  name: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
  onClose: () => void;
}

export function MobileMenu({ isOpen, navItems, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed inset-x-0 top-[4.5rem] p-4"
        >
          <div className="bg-gradient-to-r from-black/95 to-purple-900/95 backdrop-blur-md rounded-2xl border border-amber-400/10 shadow-lg shadow-purple-500/5 p-4">
            <nav>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      onClick={onClose}
                      className="block px-4 py-2 text-lg"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <Link
                    to="/blog/create"
                    onClick={onClose}
                    className="block px-4 py-2 text-center bg-gradient-to-r from-amber-400 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}