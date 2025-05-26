import React, { useEffect } from 'react';
import Card, { CardHeader } from '../../components/ui/Card';
import ChartContainer from '../../components/dashboard/ChartContainer';
import AnalyticsCard from '../../components/dashboard/AnalyticsCard';
import { getPlatformMetrics } from '../../services/analyticsService';
import Button from '../../components/ui/Button';
import { Twitter as TwitterIcon } from 'lucide-react';

interface TwitterProps {
  setPageTitle: () => void;
}

const Twitter: React.FC<TwitterProps> = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle();
  }, [setPageTitle]);

  const metrics = getPlatformMetrics('twitter');

  const handleConnect = async () => {
    const clientId = import.meta.env.VITE_TWITTER_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_OAUTH_REDIRECT_URI;
    
    const scope = 'tweet.read users.read';
    const authUrl = `https://twitter.com/i/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&state=state`;
    
    window.location.href = authUrl;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader 
          title="Twitter Analytics" 
          action={
            <Button
              onClick={handleConnect}
              icon={<TwitterIcon size={16} />}
            >
              Connect Twitter
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
            title="Tweet Performance"
            type="line"
            data={{
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              datasets: [
                {
                  label: 'Impressions',
                  data: [1200, 1900, 1700, 2100, 1800, 1500, 1300],
                  borderColor: '#1DA1F2',
                  backgroundColor: 'rgba(29, 161, 242, 0.1)',
                }
              ]
            }}
          />

          <ChartContainer
            title="Engagement Distribution"
            type="pie"
            data={{
              labels: ['Likes', 'Retweets', 'Replies', 'Quote Tweets'],
              datasets: [{
                data: [45, 25, 20, 10],
                backgroundColor: [
                  '#1DA1F2',
                  '#17BF63',
                  '#794BC4',
                  '#F45D22'
                ],
              }]
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default Twitter;