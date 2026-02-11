import React from 'react';
import { motion } from 'framer-motion';
import { calculateScoreColor } from '../../utils/helpers';

const ScoreMeter = ({ score }) => {
  const percentage = Math.min(100, score);
  const colorClass = calculateScoreColor(score);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Code Score</h3>
        <motion.span 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`text-3xl font-bold ${colorClass}`}
        >
          {score}
        </motion.span>
      </div>
      
      <div className="relative h-3 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`absolute top-0 left-0 h-full rounded-full ${
            score >= 80 ? 'bg-green-500' :
            score >= 60 ? 'bg-blue-500' :
            score >= 40 ? 'bg-yellow-500' :
            'bg-red-500'
          }`}
        />
      </div>
      
      <div className="flex justify-between mt-2 text-xs text-slate-500">
        <span>0</span>
        <span>Poor</span>
        <span>Good</span>
        <span>Excellent</span>
        <span>100</span>
      </div>
    </div>
  );
};

export default ScoreMeter;