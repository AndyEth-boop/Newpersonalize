import React, { useEffect } from 'react';
import Card, { CardHeader } from '../../components/ui/Card';
import ChartContainer from '../../components/dashboard/ChartContainer';
import AnalyticsCard from '../../components/dashboard/AnalyticsCard';
import { getPlatformMetrics } from '../../services/analyticsService';
import Button from '../../components/ui/Button';
import { Instagram as InstagramIcon } from 'lucide-react';

interface InstagramProps {
  setPageTitle: () => void;
}

const Instagram: React.FC<InstagramProps> = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle();
  }, [setPageTitle]);

  const metrics = getPlatformMetrics('instagram');

  const handleConnect = async () => {
    const clientId = import.meta.env.VITE_INSTAGRAM_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_OAUTH_REDIRECT_URI;
    
    const scope = 'user_profile,user_media';
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
    
    window.location.href = authUrl;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader 
          title="Instagram Analytics" 
          action={
            <Button
              onClick={handleConnect}
              icon={<InstagramIcon size={16} />}
            >
              Connect Instagram
            </Button>
          }
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {metrics.map((metric, index) => (
            <AnalyticsCard key={index} metric={metric} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartContainer
            title="Content Performance"
            type="bar"
            data={{
              labels: ['Posts', 'Stories', 'Reels', 'IGTV'],
              datasets: [
                {
                  label: 'Reach',
                  data: [1800, 2400, 3200, 1500],
                  backgroundColor: 'rgba(139, 92, 246, 0.7)',
                },
                {
                  label: 'Engagement',
                  data: [450, 600, 800, 350],
                  backgroundColor: 'rgba(236, 72, 153, 0.7)',
                }
              ]
            }}
          />

          <ChartContainer
            title="Follower Growth"
            type="line"
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [{
                label: 'Followers',
                data: [8000, 8500, 9000, 9200, 9500, 10000],
                borderColor: '#EC4899',
                backgroundColor: 'rgba(236, 72, 153, 0.1)',
              }]
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default Instagram;