import React from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, BoltIcon, ChartBarIcon, ClockIcon, ShieldCheckIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: MagnifyingGlassIcon,
    title: 'Smart Code Review',
    description: 'AI-powered analysis detects bugs, code smells, and suggests improvements instantly.',
    color: 'text-blue-600',
    bg: 'bg-blue-100',
  },
  {
    icon: BoltIcon,
    title: 'Performance Optimization',
    description: 'Get optimized code with better complexity and improved performance metrics.',
    color: 'text-yellow-600',
    bg: 'bg-yellow-100',
  },
  {
    icon: ChartBarIcon,
    title: 'Real-time Scoring',
    description: 'Comprehensive scoring system to track your code quality improvements.',
    color: 'text-green-600',
    bg: 'bg-green-100',
  },
  {
    icon: ClockIcon,
    title: 'Instant Feedback',
    description: 'Get immediate results and suggestions as you write your code.',
    color: 'text-purple-600',
    bg: 'bg-purple-100',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Best Practices',
    description: 'Learn industry standards and best practices with each submission.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-100',
  },
  {
    icon: CpuChipIcon,
    title: 'Multi-Language',
    description: 'Support for Python, JavaScript, Java, C++, and more.',
    color: 'text-red-600',
    bg: 'bg-red-100',
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Write Better Code</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Powerful features that help developers at every level improve their coding skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`${feature.bg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className={`${feature.color} h-8 w-8`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;