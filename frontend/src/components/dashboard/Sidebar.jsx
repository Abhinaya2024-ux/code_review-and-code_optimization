import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HomeIcon, 
  CodeBracketIcon, 
  ArrowPathIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';
import { CodeBracketIcon as CodeBracketSolid } from '@heroicons/react/24/solid';

const Sidebar = () => {
  const navItems = [
    { path: '/dashboard', name: 'Dashboard', icon: HomeIcon },
    { path: '/review', name: 'Code Review', icon: CodeBracketIcon },
    { path: '/optimize', name: 'Optimize', icon: ArrowPathIcon },
    { path: '/history', name: 'History', icon: ClockIcon },
  ];

  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 bg-white shadow-lg flex flex-col"
    >
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <CodeBracketSolid className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold gradient-text">CodeRefine</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
              ${isActive 
                ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600' 
                : 'text-slate-600 hover:bg-slate-50'
              }
            `}
          >
            {({ isActive }) => (
              <>
                <item.icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : ''}`} />
                <span className={`font-medium ${isActive ? 'text-blue-600' : ''}`}>
                  {item.name}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
          <p className="text-sm text-slate-600 mb-2">Total Submissions</p>
          <p className="text-2xl font-bold text-blue-600">12</p>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;