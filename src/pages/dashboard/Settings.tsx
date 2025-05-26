import React, { useEffect, useState } from 'react';
import Card, { CardHeader } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Save, RefreshCw } from 'lucide-react';

interface SettingsProps {
  setPageTitle: () => void;
}

const Settings: React.FC<SettingsProps> = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle();
  }, [setPageTitle]);

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);

  const handleSaveSettings = () => {
    // In a real app, this would save to backend
    alert('Settings saved!');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader 
          title="Notification Preferences" 
          action={
            <Button
              onClick={handleSaveSettings}
              icon={<Save size={16} />}
            >
              Save Changes
            </Button>
          }
        />
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Email Notifications</h4>
              <p className="text-sm text-gray-500">Receive updates via email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Push Notifications</h4>
              <p className="text-sm text-gray-500">Receive instant updates</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={pushNotifications}
                onChange={(e) => setPushNotifications(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Weekly Reports</h4>
              <p className="text-sm text-gray-500">Receive weekly performance reports</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={weeklyReports}
                onChange={(e) => setWeeklyReports(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </Card>

      <Card>
        <CardHeader 
          title="Connected Accounts" 
          action={
            <Button
              variant="outline"
              icon={<RefreshCw size={16} />}
            >
              Refresh Status
            </Button>
          }
        />
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="fab fa-facebook text-blue-600"></i>
              </div>
              <div className="ml-4">
                <h4 className="font-medium">Facebook</h4>
                <p className="text-sm text-gray-500">Connected as John Doe</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Disconnect</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="fab fa-instagram text-purple-600"></i>
              </div>
              <div className="ml-4">
                <h4 className="font-medium">Instagram</h4>
                <p className="text-sm text-gray-500">Connected as @johndoe</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Disconnect</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="fab fa-twitter text-blue-400"></i>
              </div>
              <div className="ml-4">
                <h4 className="font-medium">Twitter</h4>
                <p className="text-sm text-gray-500">Not connected</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Connect</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <i className="fas fa-envelope text-red-600"></i>
              </div>
              <div className="ml-4">
                <h4 className="font-medium">Gmail</h4>
                <p className="text-sm text-gray-500">Not connected</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Connect</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Settings;