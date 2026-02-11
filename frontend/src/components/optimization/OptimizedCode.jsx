import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const OptimizedCode = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success('Code copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600">
        <h3 className="text-lg font-semibold text-white">Optimized Code</h3>
        <button
          onClick={handleCopy}
          className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
        >
          {copied ? (
            <ClipboardDocumentCheckIcon className="h-5 w-5" />
          ) : (
            <ClipboardDocumentIcon className="h-5 w-5" />
          )}
        </button>
      </div>
      
      <div className="p-4 bg-slate-900">
        <pre className="text-sm text-slate-50 font-mono overflow-x-auto whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
      </div>
    </motion.div>
  );
};
export default OptimizedCode;