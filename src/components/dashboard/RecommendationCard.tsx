import React from 'react';
import { Recommendation } from '../../types';
import { Calendar, Clock, Mail, Lightbulb } from 'lucide-react';
import Button from '../ui/Button';

interface RecommendationCardProps {
  recommendation: Recommendation;
  onViewDetails: (id: string) => void;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ 
  recommendation, 
  onViewDetails 
}) => {
  const { id, title, description, priority, category, icon } = recommendation;

  const getBackgroundColor = () => {
    switch (category) {
      case 'content':
        return 'bg-blue-50';
      case 'timing':
        return 'bg-purple-50';
      case 'productivity':
        return 'bg-red-50';
      default:
        return 'bg-gray-50';
    }
  };

  const getBorderColor = () => {
    switch (category) {
      case 'content':
        return 'border-blue-100';
      case 'timing':
        return 'border-purple-100';
      case 'productivity':
        return 'border-red-100';
      default:
        return 'border-gray-100';
    }
  };

  const getIconBackground = () => {
    switch (category) {
      case 'content':
        return 'bg-blue-100';
      case 'timing':
        return 'bg-purple-100';
      case 'productivity':
        return 'bg-red-100';
      default:
        return 'bg-gray-100';
    }
  };

  const getIconColor = () => {
    switch (category) {
      case 'content':
        return 'text-blue-600';
      case 'timing':
        return 'text-purple-600';
      case 'productivity':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getIcon = () => {
    switch (icon) {
      case 'calendar':
        return <Calendar className={getIconColor()} size={18} />;
      case 'clock':
        return <Clock className={getIconColor()} size={18} />;
      case 'mail':
        return <Mail className={getIconColor()} size={18} />;
      default:
        return <Lightbulb className={getIconColor()} size={18} />;
    }
  };

  const getPriorityColor = () => {
    switch (priority) {
      case 'HIGH':
        return 'text-red-600';
      case 'MEDIUM':
        return 'text-blue-600';
      case 'LOW':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  const getButtonColor = () => {
    switch (category) {
      case 'content':
        return 'bg-blue-600 hover:bg-blue-700';
      case 'timing':
        return 'bg-purple-600 hover:bg-purple-700';
      case 'productivity':
        return 'bg-red-600 hover:bg-red-700';
      default:
        return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  return (
    <div className={`${getBackgroundColor()} rounded-lg p-4 border ${getBorderColor()}`}>
      <div className="flex items-center mb-3">
        <div className={`${getIconBackground()} p-2 rounded-full mr-3`}>
          {getIcon()}
        </div>
        <h4 className="font-medium">{title}</h4>
      </div>
      <p className="text-gray-700 mb-3 text-sm">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <span className={`text-xs font-medium ${getPriorityColor()}`}>
          {priority} PRIORITY
        </span>
        <Button
          size="sm"
          className={`${getButtonColor()} text-white py-1 px-3 rounded-full transition`}
          onClick={() => onViewDetails(id)}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default RecommendationCard;