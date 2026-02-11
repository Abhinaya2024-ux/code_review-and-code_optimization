import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import StatsCards from './StatsCards';
import Button from '../common/Button';
import { CodeBracketIcon, ArrowPathIcon, ClockIcon } from '@heroicons/react/24/outline';

// Mock user data - no login required!
const mockUser = {
  id: 1,
  email: 'demo@coderefine.com',
  overall_score: 85.5,
  total_submissions: 12
};

const Dashboard = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: 'Code Review',
      description: 'Get instant feedback on your code',
      icon: CodeBracketIcon,
      color: 'text-blue-600',
      bg: 'bg-blue-100',
      path: '/review',
    },
    {
      title: 'Optimize Code',
      description: 'Improve performance and complexity',
      icon: ArrowPathIcon,
      color: 'text-purple-600',
      bg: 'bg-purple-100',
      path: '/optimize',
    },
    {
      title: 'View History',
      description: 'Check your past submissions',
      icon: ClockIcon,
      color: 'text-green-600',
      bg: 'bg-green-100',
      path: '/history',
    },
  ];

  const handleLogout = () => {
    navigate('/');
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
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, <span className="gradient-text">Demo User</span>
              </h1>
              <p className="text-slate-600">
                Here's your coding performance overview
              </p>
            </div>

            <StatsCards user={mockUser} />

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => navigate(action.path)}
                  >
                    <div className={`${action.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                      <action.icon className={`${action.color} h-7 w-7`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                    <p className="text-slate-600 mb-4">{action.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Get Started
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;