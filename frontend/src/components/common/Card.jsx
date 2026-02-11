import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -4 } : {}}
      className={`bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-slate-200/50 
        ${hover ? 'hover:shadow-xl transition-all duration-300' : ''} 
        ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;