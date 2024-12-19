import React from 'react';
import { Bell, Moon, Menu } from 'lucide-react';
import { useSidebar } from '../context/SidebarContext';

const Header = () => {
  const { toggle } = useSidebar();

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-20">
      <button 
        onClick={toggle}
        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
      >
        <Menu size={24} className="text-gray-600" />
      </button>

      <div className="flex items-center gap-4 ml-auto">
        <div className="flex items-center gap-2">
          <img src="https://flagcdn.com/w20/us.png" alt="US" className="w-5" />
          <span className="text-sm text-gray-600 hidden sm:inline">ENGLISH</span>
        </div>
        
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Moon size={20} className="text-gray-600" />
        </button>
        
        <div className="relative">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell size={20} className="text-gray-600" />
          </button>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>
        </div>

        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;