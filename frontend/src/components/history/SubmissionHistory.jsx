import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import SubmissionCard from './SubmissionCard';
import LoadingSpinner from '../common/LoadingSpinner';
import { ClockIcon } from '@heroicons/react/24/outline';

// Mock user - no login required!
const mockUser = {
  id: 1,
  email: 'demo@coderefine.com',
  overall_score: 85.5,
  total_submissions: 12
};

// Mock submissions data
const mockSubmissions = [
  {
    id: 1,
    language: 'python',
    code: 'def calculate_sum(numbers):\n    total = 0\n    for num in numbers:\n        total += num\n    return total',
    score: 78,
    complexity: 'O(n)',
    created_at: '2024-02-10T10:30:00',
    review: 'Good implementation. Consider using sum() built-in function for better performance.'
  },
  {
    id: 2,
    language: 'javascript',
    code: 'function findMax(arr) {\n    let max = arr[0];\n    for(let i = 1; i < arr.length; i++) {\n        if(arr[i] > max) max = arr[i];\n    }\n    return max;\n}',
    score: 85,
    complexity: 'O(n)',
    created_at: '2024-02-09T15:45:00',
    review: 'Well written! Consider using Math.max(...arr) for cleaner code.'
  },
  {
    id: 3,
    language: 'python',
    code: 'def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)',
    score: 65,
    complexity: 'O(2^n)',
    created_at: '2024-02-08T09:15:00',
    review: 'Recursive solution works but has exponential complexity. Consider using memoization or iterative approach.'
  }
];

const SubmissionHistory = () => {
  const [submissions, setSubmissions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setSubmissions(mockSubmissions);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={mockUser} onLogout={handleLogout} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto"
          >
            <h1 className="text-3xl font-bold mb-6">
              <span className="gradient-text">Submission History</span>
            </h1>

            {isLoading ? (
              <div className="flex justify-center py-12">
                <LoadingSpinner size="lg" />
              </div>
            ) : submissions.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="flex justify-center mb-4">
                  <ClockIcon className="h-16 w-16 text-slate-300" />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">
                  No submissions yet
                </h3>
                <p className="text-slate-500">
                  Start by reviewing or optimizing some code!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {submissions.map((submission) => (
                  <SubmissionCard key={submission.id} submission={submission} />
                ))}
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default SubmissionHistory;