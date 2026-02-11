import React from 'react';
import { motion } from 'framer-motion';
import { ArrowPathIcon, CodeBracketIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    icon: CodeBracketIcon,
    title: '1. Submit Your Code',
    description: 'Paste your code and select the programming language. Our system supports multiple languages.',
    color: 'text-blue-600',
  },
  {
    icon: ArrowPathIcon,
    title: '2. AI Analysis',
    description: 'Our hybrid analyzer examines your code for bugs, complexity, and optimization opportunities.',
    color: 'text-purple-600',
  },
  {
    icon: ChartBarIcon,
    title: '3. Get Results',
    description: 'Receive instant feedback with scores, suggestions, and optimized code alternatives.',
    color: 'text-green-600',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="gradient-text">CodeRefine</span> Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Three simple steps to better code quality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl relative"
            >
              <div className={`${step.color} bg-opacity-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <step.icon className={`${step.color} h-10 w-10`} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{step.title}</h3>
              <p className="text-slate-600 text-center leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;