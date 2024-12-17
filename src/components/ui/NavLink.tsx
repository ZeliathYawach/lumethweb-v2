import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollToSection } from '../../hooks/useScrollToSection';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ to, children, className = '' }: NavLinkProps) {
  const scrollToSection = useScrollToSection();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection(to);
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`relative group ${className}`}
    >
      <span className="relative z-10 text-gray-200 hover:text-amber-400 transition-colors duration-300">
        {children}
      </span>
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-amber-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </Link>
  );
}