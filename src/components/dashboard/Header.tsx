import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Menu, BellRing, Search, LogOut, Settings, User } from 'lucide-react';
import Button from '../ui/Button';

interface HeaderProps {
  title: string;
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onToggleSidebar }) => {
  const { state, logout } = useAuth();
  const user = state.user;

  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button 
          onClick={onToggleSidebar}
          className="mr-4 text-gray-600 hover:text-gray-800 focus:outline-none md:hidden"
        >
          <Menu size={24} />
        </button>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      
      <div className="flex items-center">
        <div className="relative mr-4 hidden md:block">
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
        
        <div className="flex items-center">
          <div className="mr-4 relative">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none relative">
              <BellRing size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
          
          <div className="relative">
            <div className="flex items-center cursor-pointer" id="userMenuButton">
              {user?.profilePicture ? (
                <img 
                  src={user.profilePicture} 
                  alt={user.name} 
                  className="h-8 w-8 rounded-full mr-2 object-cover"
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <User size={16} className="text-blue-600" />
                </div>
              )}
              <span className="text-gray-700 font-medium hidden md:block">{user?.name}</span>
            </div>
            
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden" id="userMenu">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                <User size={16} className="mr-2" />
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                <Settings size={16} className="mr-2" />
                Settings
              </a>
              <button 
                onClick={logout}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
              >
                <LogOut size={16} className="mr-2" />
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;