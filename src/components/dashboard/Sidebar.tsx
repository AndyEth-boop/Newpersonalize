import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BellRing, 
  Settings, 
  BarChart2, 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  FileText,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  
  const menuItems = [
    {
      category: 'Dashboard',
      items: [
        { name: 'Overview', path: '/dashboard', icon: <Home size={18} /> },
        { name: 'Notifications', path: '/dashboard/notifications', icon: <BellRing size={18} /> },
        { name: 'Settings', path: '/dashboard/settings', icon: <Settings size={18} /> },
      ],
    },
    {
      category: 'Analytics',
      items: [
        { name: 'Facebook', path: '/dashboard/facebook', icon: <Facebook size={18} /> },
        { name: 'Instagram', path: '/dashboard/instagram', icon: <Instagram size={18} /> },
        { name: 'Twitter', path: '/dashboard/twitter', icon: <Twitter size={18} /> },
        { name: 'Gmail', path: '/dashboard/gmail', icon: <Mail size={18} /> },
      ],
    },
    {
      category: 'Reports',
      items: [
        { name: 'Weekly Report', path: '/dashboard/reports/weekly', icon: <FileText size={18} /> },
        { name: 'Monthly Report', path: '/dashboard/reports/monthly', icon: <FileText size={18} /> },
        { name: 'Custom Report', path: '/dashboard/reports/custom', icon: <FileText size={18} /> },
      ],
    },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Mobile sidebar backdrop
  const backdrop = (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden transition-opacity duration-200 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    ></div>
  );

  return (
    <>
      {backdrop}
      <aside 
        className={`sidebar bg-white w-64 flex-shrink-0 shadow-lg fixed inset-y-0 left-0 z-30 transform transition-transform duration-200 ease-in-out md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="gradient-bg text-white p-4 flex items-center justify-between">
          <div className="flex items-center">
            <BarChart2 className="mr-3" size={24} />
            <h1 className="text-xl font-bold">SocialSync</h1>
          </div>
          <button 
            className="text-white md:hidden"
            onClick={onClose}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
          {menuItems.map((category) => (
            <div key={category.category} className="mb-6">
              <h2 className="text-gray-500 uppercase text-xs font-semibold mb-3">
                {category.category}
              </h2>
              <ul>
                {category.items.map((item) => (
                  <li key={item.path} className="mb-2">
                    <Link
                      to={item.path}
                      className={`flex items-center p-2 rounded ${
                        isActive(item.path)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;