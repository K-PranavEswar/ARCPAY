import React from 'react';
import { ChevronDown, Calendar, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between pb-6 border-b border-brand-dark-border">

      <div className="flex items-center space-x-6">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search transactions..."
            className="bg-brand-dark-card border border-brand-dark-border rounded-lg
                       px-4 py-2 pl-10 text-sm text-brand-text-light
                       focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <Search className="w-4 h-4 text-brand-text-dim absolute top-1/2 left-3 -translate-y-1/2" />
        </div>

        <div className="flex items-center space-x-2 p-2 rounded-lg bg-brand-dark-card border border-brand-dark-border cursor-pointer">
          <Calendar className="w-5 h-5 text-brand-text-dim" />
          <span className="text-sm font-medium text-brand-text-light">
            Oct 27, 2025
          </span>
          <ChevronDown className="w-4 h-4 text-brand-text-dim" />
        </div>

        <div className="flex items-center space-x-3 cursor-pointer">
          <img
            src="https://placehold.co/40x40/34D399/FFFFFF?text=A"
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-brand-green"
          />
          <div>
            <div className="text-sm font-semibold text-brand-text-light">Admin User</div>
            <div className="text-xs text-brand-text-dim">demo@finley.ai</div>
          </div>
          <ChevronDown className="w-4 h-4 text-brand-text-dim" />
        </div>
      </div>
    </header>
  );
};

export default Header;
