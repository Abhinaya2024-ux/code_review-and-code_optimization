import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { LANGUAGES, COMPLEXITY_COLORS } from '../../utils/constants';
import { formatDate } from '../../utils/helpers';

const SubmissionCard = ({ submission }) => {
  const [expanded, setExpanded] = useState(false);
  
  const language = LANGUAGES.find(l => l.value === submission.language) || {
    icon: '📄',
    label: submission.language
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div 
        className="p-6 cursor-pointer hover:bg-slate-50 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl">{language.icon}</div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold">{language.label}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  submission.score >= 80 ? 'bg-green-100 text-green-700' :
                  submission.score >= 60 ? 'bg-blue-100 text-blue-700' :
                  submission.score >= 40 ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  Score: {submission.score}
                </span>
              </div>
              <p className="text-sm text-slate-500">
                {formatDate(submission.created_at)}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {submission.complexity && (
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${COMPLEXITY_COLORS[submission.complexity]}`}>
                {submission.complexity}
              </span>
            )}
            {expanded ? (
              <ChevronUpIcon className="h-5 w-5 text-slate-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-slate-400" />
            )}
          </div>
        </div>
      </div>
      
      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="px-6 pb-6 border-t border-slate-100"
        >
          <div className="pt-4">
            <h4 className="text-sm font-semibold text-slate-700 mb-2">Code:</h4>
            <pre className="bg-slate-50 p-4 rounded-lg text-xs font-mono overflow-x-auto">
              <code>{submission.code}</code>
            </pre>
          </div>
          
          {submission.review && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-700 mb-2">Review:</h4>
              <p className="text-sm text-slate-600">{submission.review}</p>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SubmissionCard;