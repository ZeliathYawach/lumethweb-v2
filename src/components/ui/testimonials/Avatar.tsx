import React from 'react';
import { motion } from 'framer-motion';

interface AvatarProps {
  name: string;
  role: string;
  image: string;
}

export function Avatar({ name, role, image }: AvatarProps) {
  return (
    <div className="flex items-center">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-purple-600 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        <img
          src={image}
          alt={name}
          className="relative w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-amber-400/50 transition-all duration-300"
        />
      </motion.div>
      <div className="ml-4">
        <motion.h3 
          className="font-semibold text-white"
          whileHover={{ scale: 1.05 }}
        >
          {name}
        </motion.h3>
        <p className="text-amber-400 text-sm">{role}</p>
      </div>
    </div>
  );
}