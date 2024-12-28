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
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-400 to-purple-600 rounded-full blur-md"
          initial={{ opacity: 0 }}
          whileHover={{ 
            opacity: 0.5,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        />
        <img
          src={image}
          alt={name}
          className="relative w-12 h-12 rounded-full object-cover border-2 border-transparent transition-all duration-300"
        />
      </motion.div>
      <div className="ml-4">
        <motion.h3 
          className="font-semibold text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {name}
        </motion.h3>
        <p className="text-amber-400 text-sm">{role}</p>
      </div>
    </div>
  );
}