import React from 'react';
import { SocialPlatform } from '../../types';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface PlatformConnectorProps {
  platform: SocialPlatform;
  onConnect: (platform: SocialPlatform) => void;
}

const PlatformConnector: React.FC<PlatformConnectorProps> = ({ platform, onConnect }) => {
  // Platform-specific content
  const platforms = {
    facebook: {
      name: 'Facebook',
      icon: <Facebook className="text-blue-600" size={24} />,
      description: 'Track post performance, engagement trends, and follower growth.',
      buttonClass: 'bg-blue-600 hover:bg-blue-700',
    },
    instagram: {
      name: 'Instagram',
      icon: <Instagram className="text-purple-600" size={24} />,
      description: 'Analyze post reach, story views, and optimal posting times.',
      buttonClass: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    },
    twitter: {
      name: 'Twitter',
      icon: <Twitter className="text-blue-400" size={24} />,
      description: 'Monitor tweet engagement, follower changes, and hashtag performance.',
      buttonClass: 'bg-blue-400 hover:bg-blue-500',
    },
    gmail: {
      name: 'Gmail',
      icon: <Mail className="text-red-500" size={24} />,
      description: 'Analyze email patterns, frequent senders, and response times.',
      buttonClass: 'bg-red-500 hover:bg-red-600',
    },
  };

  const platformData = platforms[platform];

  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <div className="flex items-center mb-3">
        {platformData.icon}
        <h4 className="font-medium ml-3">{platformData.name}</h4>
      </div>
      <p className="text-gray-600 text-sm mb-4">{platformData.description}</p>
      <Button
        fullWidth
        className={`${platformData.buttonClass} transition text-white`}
        onClick={() => onConnect(platform)}
      >
        <span className="mr-2">{platformData.icon}</span> Connect Account
      </Button>
    </div>
  );
};

export default PlatformConnector;