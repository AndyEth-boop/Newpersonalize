import React, { useEffect } from 'react';
import Card, { CardHeader } from '../../components/ui/Card';
import ChartContainer from '../../components/dashboard/ChartContainer';
import AnalyticsCard from '../../components/dashboard/AnalyticsCard';
import { getPlatformMetrics } from '../../services/analyticsService';
import Button from '../../components/ui/Button';
import { Mail } from 'lucide-react';

interface GmailProps {
  setPageTitle: () => void;
}

const Gmail: React.FC<GmailProps> = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle();
  }, [setPageTitle]);

  const metrics = getPlatformMetrics('gmail');

  const handleConnect = async () => {
    const clientId = import.meta.env.VITE_GMAIL_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_OAUTH_REDIRECT_URI;
    
    const scope = 'https://www.googleapis.com/auth/gmail.readonly';
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&access_type=offline`;
    
    window.location.href = authUrl;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader 
          title="Gmail Analytics" 
          action={
            <Button
              onClick={handleConnect}
              icon={<Mail size={16} />}
            >
              Connect Gmail
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
            title="Email Traffic"
            type="line"
            data={{
              labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
              datasets: [
                {
                  label: 'Received',
                  data: [320, 290, 350, 280],
                  borderColor: '#EF4444',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                },
                {
                  label: 'Responded',
                  data: [280, 250, 300, 240],
                  borderColor: '#10B981',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                }
              ]
            }}
          />

          <ChartContainer
            title="Email Categories"
            type="doughnut"
            data={{
              labels: ['Marketing', 'Support', 'Newsletters', 'Personal', 'Other'],
              datasets: [{
                data: [35, 25, 20, 15, 5],
                backgroundColor: [
                  '#3B82F6',
                  '#8B5CF6',
                  '#10B981',
                  '#EF4444',
                  '#6B7280'
                ],
              }]
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default Gmail;