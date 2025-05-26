import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/dashboard/Header';
import Sidebar from '../components/dashboard/Sidebar';
import Overview from './dashboard/Overview';
import Facebook from './dashboard/Facebook';
import Instagram from './dashboard/Instagram';
import Twitter from './dashboard/Twitter';
import Gmail from './dashboard/Gmail';
import Notifications from './dashboard/Notifications';
import Settings from './dashboard/Settings';
import Reports from './dashboard/Reports';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState('Dashboard Overview');

  // Update page title based on route
  const updatePageTitle = (title: string) => {
    setPageTitle(title);
    // Update document title
    document.title = `${title} | SocialSync Analytics`;
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={pageTitle} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Routes>
            <Route 
              path="/" 
              element={<Overview setPageTitle={() => updatePageTitle('Dashboard Overview')} />} 
            />
            <Route 
              path="/facebook" 
              element={<Facebook setPageTitle={() => updatePageTitle('Facebook Analytics')} />} 
            />
            <Route 
              path="/instagram" 
              element={<Instagram setPageTitle={() => updatePageTitle('Instagram Analytics')} />} 
            />
            <Route 
              path="/twitter" 
              element={<Twitter setPageTitle={() => updatePageTitle('Twitter Analytics')} />} 
            />
            <Route 
              path="/gmail" 
              element={<Gmail setPageTitle={() => updatePageTitle('Gmail Analytics')} />} 
            />
            <Route 
              path="/notifications" 
              element={<Notifications setPageTitle={() => updatePageTitle('Notifications')} />} 
            />
            <Route 
              path="/settings" 
              element={<Settings setPageTitle={() => updatePageTitle('Settings')} />} 
            />
            <Route 
              path="/reports/*" 
              element={<Reports setPageTitle={() => updatePageTitle('Reports')} />} 
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;