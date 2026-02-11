import React from 'react';
import { motion } from 'framer-motion';
import { BellIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-700">
          Welcome, {user?.email?.split('@')[0] || 'Demo User'}
        </h2>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            <BellIcon className="h-5 w-5" />
          </button>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            <span>Logout</span>
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;