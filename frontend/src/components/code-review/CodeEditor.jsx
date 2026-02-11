import React from 'react';
import { motion } from 'framer-motion';

const CodeEditor = ({ code, onChange, language }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="flex items-center space-x-2 px-4 py-3 bg-slate-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-sm text-slate-400 ml-2">
          {language.charAt(0).toUpperCase() + language.slice(1)}
        </span>
      </div>
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        placeholder="# Write your code here..."
        className="w-full h-96 p-4 bg-slate-900 text-slate-50 font-mono text-sm focus:outline-none resize-none"
        spellCheck={false}
      />
    </motion.div>
  );
};

export default CodeEditor;