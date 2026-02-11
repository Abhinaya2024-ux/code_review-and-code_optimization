import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CodeBracketIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Button from '../common/Button';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000" />
        <div className="absolute top-40 right-40 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <CodeBracketIcon className="h-20 w-20 text-blue-600" />
              <SparklesIcon className="absolute -top-2 -right-2 h-8 w-8 text-yellow-400 animate-pulse" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            <span className="gradient-text">Elevate Your Code</span>
            <br />
            <span className="text-slate-900">With AI-Powered Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto"
          >
            Get instant code reviews, optimization suggestions, and performance scoring. 
            Transform your code from good to exceptional with CodeRefine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" onClick={() => navigate('/dashboard')} className="group">
              Get Started Free
              <ArrowRightIcon className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/dashboard')}>
              Go to Dashboard
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;