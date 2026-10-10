import React from 'react';
import { motion } from 'framer-motion';

export const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ 
        duration: 0.35, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }}
      className="w-full flex-grow flex flex-col"
    >
      {children}
    </motion.div>
  );
};
