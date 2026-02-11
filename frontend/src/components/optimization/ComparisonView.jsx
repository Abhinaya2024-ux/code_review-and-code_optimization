import React from 'react';
import { motion } from 'framer-motion';
import OptimizedCode from './OptimizedCode';
import LoadingSpinner from '../common/LoadingSpinner';
import { ArrowTrendingUpIcon, BeakerIcon, CpuChipIcon, ServerStackIcon } from '@heroicons/react/24/outline';

const ComparisonView = ({ result, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center h-96">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-slate-600">Optimizing your code...</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center h-96">
        <BeakerIcon className="h-16 w-16 text-slate-300 mb-4" />
        <h3 className="text-xl font-semibold text-slate-700 mb-2">No Optimization Yet</h3>
        <p className="text-slate-500 text-center">
          Submit your code to get optimized version and performance improvements
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
      {/* Score Comparison */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Performance Improvement</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-4 bg-slate-50 rounded-xl">
            <p className="text-sm text-slate-500 mb-1">Before</p>
            <p className="text-3xl font-bold text-slate-700">{result.before?.score || 0}</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <p className="text-sm text-green-600 mb-1">After</p>
            <p className="text-3xl font-bold text-green-600">{result.after?.score || 0}</p>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-2 text-green-600">
          <ArrowTrendingUpIcon className="h-5 w-5" />
          <span className="font-semibold">
            +{result.score_gain || 0} points improvement
          </span>
        </div>
      </div>

      {/* Time Complexity */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <CpuChipIcon className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold">Time Complexity</h3>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-sm text-slate-500 mb-1">Before</p>
            <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-mono font-bold">
              {result.time_complexity?.before || result.before?.complexity || 'O(?)'}
            </span>
          </div>
          <div className="text-slate-400 text-xl">→</div>
          <div className="text-center">
            <p className="text-sm text-slate-500 mb-1">After</p>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-mono font-bold">
              {result.time_complexity?.after || result.after?.complexity || 'O(?)'}
            </span>
          </div>
        </div>
        
        {result.time_complexity?.explanation && (
          <p className="mt-3 text-sm text-slate-600 bg-blue-50 p-3 rounded-lg">
            {result.time_complexity.explanation}
          </p>
        )}
      </div>

      {/* Space Complexity */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <ServerStackIcon className="h-5 w-5 text-purple-600" />
          <h3 className="text-lg font-semibold">Space Complexity</h3>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-sm text-slate-500 mb-1">Before</p>
            <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-mono font-bold">
              {result.space_complexity?.before || 'O(1)'}
            </span>
          </div>
          <div className="text-slate-400 text-xl">→</div>
          <div className="text-center">
            <p className="text-sm text-slate-500 mb-1">After</p>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-mono font-bold">
              {result.space_complexity?.after || 'O(1)'}
            </span>
          </div>
        </div>
        
        {result.space_complexity?.explanation && (
          <p className="mt-3 text-sm text-slate-600 bg-purple-50 p-3 rounded-lg">
            {result.space_complexity.explanation}
          </p>
        )}
      </div>

      {/* Optimizations Applied */}
      {result.optimization_summary?.length > 0 && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-3">🚀 Optimizations Applied</h3>
          <ul className="space-y-2">
            {result.optimization_summary.map((item, i) => (
              <li key={i} className="text-sm text-slate-700 flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                {item}
              </li>
            ))}
          </ul>
          
          {result.performance_improvement && (
            <div className="mt-4 p-3 bg-white rounded-lg">
              <p className="text-sm font-medium text-slate-700">Performance Gain</p>
              <p className="text-lg font-bold text-green-600">{result.performance_improvement}</p>
            </div>
          )}
          
          {result.learning_tip && (
            <div className="mt-4 p-3 bg-white rounded-lg">
              <p className="text-sm font-medium text-slate-700 mb-1">💡 Learning Tip</p>
              <p className="text-sm text-slate-600">{result.learning_tip}</p>
            </div>
          )}
        </div>
      )}

      {/* Optimized Code */}
      {result.optimized_code && (
        <OptimizedCode code={result.optimized_code} />
      )}
    </motion.div>
  );
};

export default ComparisonView;