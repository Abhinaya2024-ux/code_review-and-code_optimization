import React from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon, CodeBracketIcon, StarIcon } from '@heroicons/react/24/outline';

const StatsCards = ({ user }) => {
  const stats = [
    {
      title: 'Overall Score',
      value: user?.overall_score?.toFixed(1) || '0.0',
      icon: StarIcon,
      color: 'text-yellow-600',
      bg: 'bg-yellow-100',
      suffix: 'pts',
    },
    {
      title: 'Submissions',
      value: user?.total_submissions || '0',
      icon: CodeBracketIcon,
      color: 'text-blue-600',
      bg: 'bg-blue-100',
      suffix: '',
    },
    {
      title: 'Status',
      value: user?.overall_score > 60 ? 'Good' : 'Improving',
      icon: ChartBarIcon,
      color: user?.overall_score > 60 ? 'text-green-600' : 'text-orange-600',
      bg: user?.overall_score > 60 ? 'bg-green-100' : 'bg-orange-100',
      suffix: '',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`${stat.bg} p-3 rounded-xl`}>
              <stat.icon className={`${stat.color} h-6 w-6`} />
            </div>
            <span className="text-sm font-medium text-slate-500">{stat.title}</span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
              {stat.suffix && (
                <span className="text-lg text-slate-500 ml-1">{stat.suffix}</span>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCards;