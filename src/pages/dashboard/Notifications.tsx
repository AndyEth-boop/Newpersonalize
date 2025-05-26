import React, { useEffect, useState } from 'react';
import Card, { CardHeader } from '../../components/ui/Card';
import { Bell, MessageSquare, Heart, UserPlus, RefreshCw } from 'lucide-react';
import Button from '../../components/ui/Button';

interface NotificationsProps {
  setPageTitle: () => void;
}

interface Notification {
  id: string;
  type: 'engagement' | 'message' | 'follower' | 'system';
  title: string;
  description: string;
  time: string;
  read: boolean;
}

const Notifications: React.FC<NotificationsProps> = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle();
  }, [setPageTitle]);

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'engagement',
      title: 'New Post Performance',
      description: 'Your latest post has reached 1,000 views!',
      time: '2 hours ago',
      read: false,
    },
    {
      id: '2',
      type: 'message',
      title: 'New Message',
      description: 'You have a new message from Sarah Johnson',
      time: '4 hours ago',
      read: false,
    },
    {
      id: '3',
      type: 'follower',
      title: 'New Followers',
      description: 'You gained 50 new followers this week',
      time: '1 day ago',
      read: true,
    },
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'engagement':
        return <Heart className="text-red-500" />;
      case 'message':
        return <MessageSquare className="text-blue-500" />;
      case 'follower':
        return <UserPlus className="text-green-500" />;
      default:
        return <Bell className="text-gray-500" />;
    }
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader 
          title="Notifications" 
          action={
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                icon={<RefreshCw size={16} />}
              >
                Refresh
              </Button>
              <Button
                size="sm"
                onClick={markAllAsRead}
              >
                Mark All as Read
              </Button>
            </div>
          }
        />
        
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-start p-4 ${
                notification.read ? 'bg-white' : 'bg-blue-50'
              } rounded-lg transition-colors duration-200`}
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  {getIcon(notification.type)}
                </div>
              </div>
              <div className="ml-4 flex-1">
                <h4 className="font-medium">{notification.title}</h4>
                <p className="text-sm text-gray-600">{notification.description}</p>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </div>
              {!notification.read && (
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Notifications;