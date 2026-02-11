import React from 'react';

const Input = ({ label, type = 'text', error, icon, className = '', ...props }) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={`
            w-full px-4 py-3 rounded-lg border
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'}
            focus:outline-none focus:ring-2 focus:border-transparent
            transition-all duration-300 bg-white/50 backdrop-blur-sm
            ${className}
          `}
          {...props}
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;