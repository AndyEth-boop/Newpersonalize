import React, { useEffect, useState } from 'react';
import Card, { CardHeader } from '../../components/ui/Card';
import AnalyticsCard from '../../components/dashboard/AnalyticsCard';
import ChartContainer from '../../components/dashboard/ChartContainer';
import PlatformConnector from '../../components/dashboard/PlatformConnector';
import RecommendationCard from '../../components/dashboard/RecommendationCard';
import { SocialPlatform } from '../../types';
import { 
  getOverviewMetrics, 
  getEngagementChartData, 
  getFollowerGrowthChartData,
  getTopPerformingPosts,
  getRecommendations
} from '../../services/analyticsService';
import Button from '../../components/ui/Button';
import { Download, RefreshCw, ArrowRight } from 'lucide-react';

interface OverviewProps {
  setPageTitle: () => void;
}

const Overview: React.FC<OverviewProps> = ({ setPageTitle }) => {
  const [timeRange, setTimeRange] = useState('7days');
  
  useEffect(() => {
    setPageTitle();
  }, [setPageTitle]);

  const metrics = getOverviewMetrics();
  const engagementData = getEngagementChartData();
  const followerData = getFollowerGrowthChartData();
  const topPosts = getTopPerformingPosts();
  const recommendations = getRecommendations();

  const handleConnectAccount = (platform: SocialPlatform) => {
    alert(`Connecting to ${platform}...`);
    // In a real application, this would open an OAuth flow
  };

  const handleViewRecommendationDetails = (id: string) => {
    alert(`Viewing details for recommendation ${id}`);
    // In a real application, this would open a modal or navigate to a details page
  };

  return (
    <div className="space-y-6">
      {/* Account Connection Section */}
      <Card>
        <CardHeader 
          title="Connect Your Accounts" 
          action={
            <Button 
              variant="outline"
              size="sm"
              icon={<RefreshCw size={16} />}
            >
              Refresh Data
            </Button>
          }
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <PlatformConnector 
            platform="facebook" 
            onConnect={handleConnectAccount} 
          />
          <PlatformConnector 
            platform="instagram" 
            onConnect={handleConnectAccount} 
          />
          <PlatformConnector 
            platform="twitter" 
            onConnect={handleConnectAccount} 
          />
          <PlatformConnector 
            platform="gmail" 
            onConnect={handleConnectAccount} 
          />
        </div>
      </Card>

      {/* Analytics Dashboard */}
      <Card>
        <CardHeader 
          title="Your Analytics Dashboard" 
          action={
            <div className="flex">
              <select 
                className="border rounded-lg px-3 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="90days">Last 90 days</option>
                <option value="custom">Custom range</option>
              </select>
              <Button 
                size="sm"
                icon={<Download size={16} />}
              >
                Export
              </Button>
            </div>
          }
        />

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {metrics.map((metric, index) => (
            <AnalyticsCard key={index} metric={metric} />
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ChartContainer 
            title="Engagement Trends" 
            type="line" 
            data={engagementData}
            action={
              <div className="flex">
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded mr-1">Likes</button>
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded mr-1">Comments</button>
                <button className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Shares</button>
              </div>
            }
          />
          
          <ChartContainer 
            title="Follower Growth" 
            type="bar" 
            data={followerData}
            action={
              <div className="flex">
                <button className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded mr-1">7 Days</button>
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded mr-1">30 Days</button>
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded">90 Days</button>
              </div>
            }
          />
        </div>
        
        {/* Post Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader 
              title="Top Performing Posts" 
              action={
                <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                  View All <ArrowRight size={16} className="ml-1" />
                </button>
              }
            />
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reach</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {topPosts.map((post) => (
                    <tr key={post.id}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{post.title}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {post.engagement.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{post.reach.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          
          <ChartContainer 
            title="Email Category Distribution" 
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

      {/* Recommendations Section */}
      <Card>
        <CardHeader 
          title="Personalized Recommendations" 
          action={
            <Button 
              variant="outline"
              size="sm"
              icon={<RefreshCw size={16} />}
            >
              Refresh
            </Button>
          }
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((recommendation) => (
            <RecommendationCard 
              key={recommendation.id}
              recommendation={recommendation}
              onViewDetails={handleViewRecommendationDetails}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Overview;