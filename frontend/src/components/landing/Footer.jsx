import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <CodeBracketIcon className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">CodeRefine</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering developers to write better code through AI-powered analysis and optimization.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">API</li>
              <li className="hover:text-white cursor-pointer">Documentation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2024 CodeRefine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;