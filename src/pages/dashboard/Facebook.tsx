import React, { useEffect } from 'react';
import Card, { CardHeader } from '../../components/ui/Card';
import AnalyticsCard from '../../components/dashboard/AnalyticsCard';
import ChartContainer from '../../components/dashboard/ChartContainer';
import { getPlatformMetrics } from '../../services/analyticsService';
import { Facebook as FacebookIcon } from 'lucide-react';

interface FacebookProps {
  setPageTitle: () => void;
}

const Facebook: React.FC<FacebookProps> = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle();
  }, [setPageTitle]);
  
  const metrics = getPlatformMetrics('facebook');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Facebook Stats */}
        <Card>
          <div className="flex items-center mb-4">
            <FacebookIcon className="text-blue-600 mr-3" size={24} />
            <h4 className="font-semibold">Facebook Insights</h4>
          </div>
          
          <div className="space-y-4">
            {metrics.map((metric, index) => (
              <div key={index}>
                <p className="text-gray-500 text-sm">{metric.label}</p>
                <h3 className="text-xl font-bold">
                  {metric.label === 'Engagement Rate' ? `${metric.value}%` : metric.value.toLocaleString()}
                </h3>
                <p className={metric.isPositive ? 'text-green-500 text-sm' : 'text-red-500 text-sm'}>
                  <i className={`fas ${metric.isPositive ? 'fa-arrow-up' : 'fa-arrow-down'} mr-1`}></i>
                  {Math.abs(metric.change)}% {metric.isPositive ? 'from' : 'from'} last week
                </p>
              </div>
            ))}
          </div>
        </Card>
        
        {/* Facebook Engagement Chart */}
        <Card className="lg:col-span-2">
          <CardHeader 
            title="Engagement by Post Type" 
            action={
              <select className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option selected>Last 90 days</option>
              </select>
            }
          />
          
          <div className="h-[300px]">
            <ChartContainer
              title=""
              type="bar"
              data={{
                labels: ['Text', 'Image', 'Video', 'Link'],
                datasets: [
                  {
                    label: 'Reach',
                    data: [1200, 1800, 2400, 900],
                    backgroundColor: 'rgba(59, 130, 246, 0.7)',
                  },
                  {
                    label: 'Engagement',
                    data: [300, 450, 600, 200],
                    backgroundColor: 'rgba(16, 185, 129, 0.7)',
                  }
                ]
              }}
              height={300}
            />
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Optimal Posting Times */}
        <Card>
          <CardHeader title="Optimal Posting Times" />
          
          <div className="h-[300px]">
            <ChartContainer
              title=""
              type="line"
              data={{
                labels: ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM'],
                datasets: [{
                  label: 'Engagement Rate',
                  data: [2.1, 3.5, 4.2, 5.8, 4.5, 3.2],
                  borderColor: '#3B82F6',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                }]
              }}
              height={250}
            />
          </div>
          
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <i className="fas fa-lightbulb mr-2"></i> 
              Recommendation: Post between 1:30 PM - 3:30 PM on weekdays for maximum engagement
            </p>
          </div>
        </Card>
        
        {/* Follower Demographics */}
        <Card>
          <CardHeader 
            title="Follower Demographics" 
            action={
              <div className="flex">
                <button className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded mr-1">Age</button>
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded">Gender</button>
              </div>
            }
          />
          
          <div className="h-[300px]">
            <ChartContainer
              title=""
              type="bar"
              data={{
                labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
                datasets: [{
                  label: 'Age Distribution',
                  data: [15, 35, 25, 15, 10],
                  backgroundColor: 'rgba(99, 102, 241, 0.7)',
                }]
              }}
              height={300}
            />
          </div>
        </Card>
      </div>
      
      {/* Post Performance Table */}
      <Card>
        <CardHeader 
          title="Post Performance" 
          action={
            <button className="text-blue-600 hover:text-blue-800 text-sm">
              View All <i className="fas fa-chevron-right ml-1"></i>
            </button>
          }
        />
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reach</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link Clicks</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Summer Sale - 50% Off Everything!</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Jun 15, 2:30 PM</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">12,456</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    4,589
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">1,234</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Meet our new team member!</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Jun 12, 10:15 AM</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">8,765</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    3,210
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">456</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Customer of the month feature</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Jun 8, 3:45 PM</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">7,890</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    2,145
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">321</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Facebook;