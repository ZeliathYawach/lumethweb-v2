import React from 'react';
import { motion } from 'framer-motion';

interface ContentProps {
  content: string;
}

export function Content({ content }: ContentProps) {
  return (
    <motion.p 
      className="text-gray-300 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {content}
      <span className="absolute -left-4 -top-2 text-4xl text-amber-400/20">"</span>
      <span className="absolute -bottom-4 -right-2 text-4xl text-amber-400/20">"</span>
    </motion.p>
  );
}