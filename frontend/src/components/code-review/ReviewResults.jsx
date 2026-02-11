import React from 'react';
import { motion } from 'framer-motion';
import ScoreMeter from './ScoreMeter';
import LoadingSpinner from '../common/LoadingSpinner';
import { ExclamationTriangleIcon, LightBulbIcon, BeakerIcon } from '@heroicons/react/24/outline';
import { COMPLEXITY_COLORS } from '../../utils/constants';

const ReviewResults = ({ result, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center h-96">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-slate-600">Analyzing your code...</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center h-96">
        <BeakerIcon className="h-16 w-16 text-slate-300 mb-4" />
        <h3 className="text-xl font-semibold text-slate-700 mb-2">No Analysis Yet</h3>
        <p className="text-slate-500 text-center">
          Submit your code to get instant feedback and suggestions
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <ScoreMeter score={result.submission_score} />
      
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Review Summary</h3>
        
        <div className="mb-4">
          <span className="text-sm text-slate-500">Complexity</span>
          <div className="flex items-center mt-1">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${COMPLEXITY_COLORS[result.review?.complexity] || 'bg-slate-100 text-slate-600'}`}>
              {result.review?.complexity || 'O(1)'}
            </span>
          </div>
        </div>

        {result.review?.bugs?.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center text-red-600 mb-2">
              <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
              <span className="font-semibold">Bugs Detected</span>
            </div>
            <ul className="space-y-2">
              {result.review.bugs.map((bug, i) => (
                <li key={i} className="text-sm text-slate-600 bg-red-50 p-2 rounded">
                  {bug}
                </li>
              ))}
            </ul>
          </div>
        )}

        {result.review?.code_smells?.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center text-yellow-600 mb-2">
              <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
              <span className="font-semibold">Code Smells</span>
            </div>
            <ul className="space-y-2">
              {result.review.code_smells.map((smell, i) => (
                <li key={i} className="text-sm text-slate-600 bg-yellow-50 p-2 rounded">
                  {smell}
                </li>
              ))}
            </ul>
          </div>
        )}

        {result.review?.suggestions?.length > 0 && (
          <div>
            <div className="flex items-center text-blue-600 mb-2">
              <LightBulbIcon className="h-5 w-5 mr-2" />
              <span className="font-semibold">Suggestions</span>
            </div>
            <ul className="space-y-2">
              {result.review.suggestions.map((suggestion, i) => (
                <li key={i} className="text-sm text-slate-600 bg-blue-50 p-2 rounded">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-600">Overall Score Impact</p>
            <p className="text-2xl font-bold text-blue-600">
              +{result.submission_score} pts
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-600">Status</p>
            <p className={`text-lg font-semibold ${
              result.status === 'Excellent' ? 'text-green-600' :
              result.status === 'Good' ? 'text-blue-600' :
              result.status === 'Improving' ? 'text-yellow-600' :
              'text-red-600'
            }`}>
              {result.status}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewResults;