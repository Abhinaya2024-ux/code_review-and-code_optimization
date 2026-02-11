import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import CodeEditor from '../code-review/CodeEditor';
import ComparisonView from './ComparisonView';
import Button from '../common/Button';

// Mock user - no login required!
const mockUser = {
  id: 1,
  email: 'demo@coderefine.com',
  overall_score: 85.5,
  total_submissions: 12
};

const Optimization = () => {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleOptimize = () => {
    if (!code.trim()) {
      alert('Please enter some code');
      return;
    }

    setIsLoading(true);
    
    // Mock optimization result
    setTimeout(() => {
      // Example original code with nested loops
      const originalCode = code;
      
      // Generate optimized version based on language
      let optimizedCode = originalCode;
      let summary = [];
      let performanceImprovement = '';
      let learningTip = '';
      
      if (code.includes('for') && code.includes('for')) {
        // Detect nested loops
        optimizedCode = originalCode + '\n\n# Optimized: Reduced nested loops\n# Consider using dictionary lookups or set operations';
        summary = ['Reduced nested loop complexity', 'Added early break condition', 'Used list comprehension'];
        performanceImprovement = 'O(n²) → O(n)';
        learningTip = 'Nested loops can often be replaced with dictionary lookups for O(1) access time';
      } else if (code.includes('if') && code.length > 200) {
        optimizedCode = originalCode + '\n\n// Optimized: Simplified conditionals\n// Used early returns to reduce nesting';
        summary = ['Simplified conditional logic', 'Added early returns', 'Reduced nesting depth'];
        performanceImprovement = 'Improved readability and maintainability';
        learningTip = 'Early returns can make code more readable and reduce cognitive load';
      } else {
        optimizedCode = originalCode + '\n\n# Optimization suggestions:\n# - Use built-in functions\n# - Consider vectorized operations\n# - Add type hints for better IDE support';
        summary = ['Code looks good!', 'Minor optimizations suggested', 'Consider using built-in functions'];
        performanceImprovement = 'Minor improvements possible';
        learningTip = 'Always profile your code before optimizing - focus on bottlenecks first';
      }

      setResult({
        before: {
          score: 65,
          complexity: 'O(n²)',
          review: {
            bugs: [],
            code_smells: ['Nested loops detected', 'Long function'],
            suggestions: ['Break into smaller functions', 'Optimize loops'],
            complexity: 'O(n²)'
          }
        },
        after: {
          score: 85,
          complexity: 'O(n)',
          review: {
            bugs: [],
            code_smells: [],
            suggestions: ['Consider further optimization'],
            complexity: 'O(n)'
          }
        },
        score_gain: 20,
        complexity_improved: true,
        optimization_summary: summary,
        performance_improvement: performanceImprovement,
        learning_tip: learningTip,
        optimized_code: optimizedCode
      });
      
      setIsLoading(false);
    }, 1500);
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
              <span className="gradient-text">Code Optimization</span>
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
                    <option value="go">🔵 Go</option>
                    <option value="rust">🦀 Rust</option>
                  </select>
                </div>

                <CodeEditor 
                  code={code} 
                  onChange={setCode} 
                  language={language}
                />
                
                <Button
                  onClick={handleOptimize}
                  isLoading={isLoading}
                  className="w-full"
                  size="lg"
                >
                  Optimize Code
                </Button>
              </div>

              <div>
                <ComparisonView result={result} isLoading={isLoading} />
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Optimization;