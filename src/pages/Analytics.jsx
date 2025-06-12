import { useState } from "react";
import {
  ChartLine,
  TrendUp,
  Users,
  Heart,
  Eye,
  Share,
  Calendar,
  Download,
  ArrowUpRight,
} from "@phosphor-icons/react";
import StatCard from "../components/StatCard";
import Chart from "../components/Chart";

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("30");
  const [selectedPlatform, setSelectedPlatform] = useState("all");

  const analyticsStats = [
    {
      title: "Total Reach",
      value: "156,789",
      change: "22.8% from last month",
      changeType: "positive",
      icon: Eye,
      iconColor: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    },
    {
      title: "Engagement Rate",
      value: "4.8%",
      change: "0.6% from last month",
      changeType: "positive",
      icon: Heart,
      iconColor: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
    },
    {
      title: "Total Followers",
      value: "24,589",
      change: "1,234 new followers",
      changeType: "positive",
      icon: Users,
      iconColor: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    },
    {
      title: "Total Shares",
      value: "3,456",
      change: "18.5% from last month",
      changeType: "positive",
      icon: Share,
      iconColor: "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
    },
  ];

  const platformComparisonData = {
    labels: ["Facebook", "Instagram", "Twitter", "Gmail"],
    datasets: [
      {
        label: "Engagement Rate",
        data: [5.2, 6.8, 3.2, 0],
        backgroundColor: ["#3B82F6", "#8B5CF6", "#06B6D4", "#EF4444"],
        borderWidth: 0,
      },
    ],
  };

  const growthTrendData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Facebook",
        data: [12200, 12300, 12350, 12400, 12430, 12456],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Instagram",
        data: [8700, 8750, 8800, 8850, 8900, 8932],
        borderColor: "#8B5CF6",
        backgroundColor: "rgba(139, 92, 246, 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Twitter",
        data: [5200, 5250, 5300, 5350, 5400, 5432],
        borderColor: "#06B6D4",
        backgroundColor: "rgba(6, 182, 212, 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const engagementByTimeData = {
    labels: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM", "12AM"],
    datasets: [
      {
        label: "Engagement Rate",
        data: [2.1, 3.5, 4.2, 5.8, 4.5, 3.2, 1.8],
        backgroundColor: "rgba(16, 185, 129, 0.7)",
      },
    ],
  };

  const contentPerformanceData = {
    labels: ["Images", "Videos", "Text Posts", "Links", "Stories"],
    datasets: [
      {
        label: "Avg. Engagement",
        data: [1250, 2100, 850, 650, 1800],
        backgroundColor: "rgba(139, 92, 246, 0.7)",
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
            <ChartLine className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Advanced Analytics
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Deep insights into your social media performance
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          >
            <option value="all">All Platforms</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="twitter">Twitter</option>
          </select>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
          </select>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Platform Comparison
            </h4>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Engagement Rate
            </div>
          </div>
          <Chart type="doughnut" data={platformComparisonData} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Follower Growth Trends
            </h4>
            <div className="flex space-x-2">
              <button className="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                Facebook
              </button>
              <button className="text-xs bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-2 py-1 rounded">
                Instagram
              </button>
              <button className="text-xs bg-sky-100 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 px-2 py-1 rounded">
                Twitter
              </button>
            </div>
          </div>
          <Chart type="line" data={growthTrendData} />
        </div>
      </div>

      {/* Secondary Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Engagement by Time of Day
            </h4>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <Chart type="bar" data={engagementByTimeData} />
          <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <p className="text-sm text-green-800 dark:text-green-300">
              💡 Peak engagement occurs between 3-6 PM. Schedule important posts during this window.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Content Performance by Type
            </h4>
            <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm flex items-center">
              View Details
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <Chart type="bar" data={contentPerformanceData} />
        </div>
      </div>

      {/* Insights and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-6">
            Key Performance Insights
          </h4>
          <div className="space-y-4">
            {[
              {
                title: "Video Content Dominance",
                description: "Video posts generate 40% more engagement than other content types",
                impact: "High",
                trend: "up",
              },
              {
                title: "Instagram Growth Acceleration",
                description: "Instagram follower growth rate increased by 25% this month",
                impact: "High",
                trend: "up",
              },
              {
                title: "Optimal Posting Window",
                description: "Posts between 3-6 PM receive 35% more engagement",
                impact: "Medium",
                trend: "neutral",
              },
              {
                title: "Cross-Platform Consistency",
                description: "Maintaining consistent branding across platforms improved recognition by 18%",
                impact: "Medium",
                trend: "up",
              },
            ].map((insight, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className={`w-3 h-3 rounded-full mt-2 ${
                  insight.trend === 'up' ? 'bg-green-500' : 
                  insight.trend === 'down' ? 'bg-red-500' : 'bg-yellow-500'
                }`}></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-medium text-gray-900 dark:text-white">{insight.title}</h5>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      insight.impact === 'High' 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                    }`}>
                      {insight.impact} Impact
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-6">
            Quick Actions
          </h4>
          <div className="space-y-4">
            <button className="w-full text-left p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-blue-900 dark:text-blue-100">Schedule Posts</h5>
                  <p className="text-sm text-blue-700 dark:text-blue-300">Plan content for optimal times</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
            </button>

            <button className="w-full text-left p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-purple-900 dark:text-purple-100">Analyze Competitors</h5>
                  <p className="text-sm text-purple-700 dark:text-purple-300">Compare performance metrics</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
            </button>

            <button className="w-full text-left p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-green-900 dark:text-green-100">Export Report</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">Download detailed analytics</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
            </button>

            <button className="w-full text-left p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-orange-900 dark:text-orange-100">Set Goals</h5>
                  <p className="text-sm text-orange-700 dark:text-orange-300">Define performance targets</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;