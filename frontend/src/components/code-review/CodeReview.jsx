import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import CodeEditor from './CodeEditor';
import ReviewResults from './ReviewResults';
import Button from '../common/Button';

// Mock user - no login required!
const mockUser = {
  id: 1,
  email: 'demo@coderefine.com',
  overall_score: 85.5,
  total_submissions: 12
};

const CodeReview = () => {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    setIsLoading(true);
    // Mock review result
    setTimeout(() => {
      setResult({
        submission_score: 78,
        status: 'Good',
        review: {
          bugs: ['No critical bugs found'],
          code_smells: ['Long function', 'Nested loops'],
          suggestions: ['Break into smaller functions', 'Use list comprehension'],
          complexity: 'O(n²)'
        }
      });
      setIsLoading(false);
    }, 1000);
  };

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
              <span className="gradient-text">Code Review</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Select Language
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="python">🐍 Python</option>
                    <option value="javascript">📜 JavaScript</option>
                    <option value="java">☕ Java</option>
                    <option value="cpp">⚙️ C++</option>
                  </select>
                </div>

                <CodeEditor 
                  code={code} 
                  onChange={setCode} 
                  language={language}
                />
                
                <Button
                  onClick={handleSubmit}
                  isLoading={isLoading}
                  className="w-full"
                  size="lg"
                >
                  Analyze Code
                </Button>
              </div>

              <div>
                <ReviewResults result={result} isLoading={isLoading} />
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default CodeReview;