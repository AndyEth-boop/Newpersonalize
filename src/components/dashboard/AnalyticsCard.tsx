import React from 'react';
import { AnalyticMetric } from '../../types';
import { TrendingUp, TrendingDown, Users, Heart, Clock, Mail } from 'lucide-react';
import Card from '../ui/Card';

interface AnalyticsCardProps {
  metric: AnalyticMetric;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ metric }) => {
  const getIcon = () => {
    switch (metric.label) {
      case 'Total Followers':
      case 'Followers':
      case 'Page Likes':
        return <Users className="text-blue-600" />;
      case 'Engagement Rate':
        return <Heart className="text-purple-600" />;
      case 'Optimal Post Time':
        return <Clock className="text-green-600" />;
      case 'Emails Received':
      case 'Unread Emails':
        return <Mail className="text-red-600" />;
      default:
        return <TrendingUp className="text-blue-600" />;
    }
  };

  const getIconBackground = () => {
    switch (metric.label) {
      case 'Total Followers':
      case 'Followers':
      case 'Page Likes':
        return 'bg-blue-100';
      case 'Engagement Rate':
        return 'bg-purple-100';
      case 'Optimal Post Time':
        return 'bg-green-100';
      case 'Emails Received':
      case 'Unread Emails':
        return 'bg-red-100';
      default:
        return 'bg-blue-100';
    }
  };

  const formatValue = () => {
    if (metric.label === 'Optimal Post Time') {
      // Convert decimal hours to time format (e.g., 14.5 to "2:30 PM")
      const hours = Math.floor(metric.value);
      const minutes = Math.round((metric.value - hours) * 60);
      const period = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
      return `${displayHours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;
    }
    
    if (metric.label === 'Engagement Rate' || metric.label.includes('Rate')) {
      return `${metric.value}%`;
    }
    
    if (metric.value > 1000) {
      return metric.value.toLocaleString();
    }
    
    return metric.value;
  };

  return (
    <Card hover className="transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm">{metric.label}</p>
          <h3 className="text-2xl font-bold mt-1">{formatValue()}</h3>
          {metric.change !== 0 && (
            <p className={`text-sm mt-2 ${metric.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {metric.isPositive ? <TrendingUp size={16} className="inline mr-1" /> : <TrendingDown size={16} className="inline mr-1" />}
              {Math.abs(metric.change)}% {metric.isPositive ? 'increase' : 'decrease'}
            </p>
          )}
        </div>
        <div className={`${getIconBackground()} p-3 rounded-full`}>
          {getIcon()}
        </div>
      </div>
    </Card>
  );
};

export default AnalyticsCard;