import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Bell, Menu, X, MessageSquare } from 'lucide-react';

const DashboardHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-500 hover:text-gray-600 focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Spacer for desktop to push right-side content to the right */}
        <div className="hidden md:block w-full"></div>
        
        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-100">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-100">
            <MessageSquare size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
          </button>
          
          <div className="relative group">
            <button className="flex items-center space-x-2 focus:outline-none">
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                {currentUser?.avatar ? (
                  <img 
                    src={currentUser.avatar} 
                    alt={currentUser.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white">
                    {currentUser?.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <span className="hidden md:inline text-sm font-medium text-gray-700">
                {currentUser?.name}
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile sidebar overlay when open */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default DashboardHeader;