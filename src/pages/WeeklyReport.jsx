"use client";

import { useState } from "react";
import {
  FileText,
  Download,
  TrendUp,
  Users,
  Heart,
  Eye,
  Share,
  ArrowUpRight,
} from "@phosphor-icons/react";
import Chart from "../components/Chart";
import { format, subWeeks, startOfWeek, endOfWeek } from "date-fns";

const WeeklyReport = () => {
  const [selectedWeek, setSelectedWeek] = useState(0); // 0 = current week, 1 = last week, etc.

  const currentDate = new Date();
  const weekStart = startOfWeek(subWeeks(currentDate, selectedWeek));
  const weekEnd = endOfWeek(subWeeks(currentDate, selectedWeek));

  const weeklyData = {
    totalFollowers: 24589,
    followerGrowth: 234,
    totalEngagement: 8945,
    engagementRate: 4.8,
    totalReach: 156789,
    reachGrowth: 12.5,
    totalImpressions: 234567,
    impressionGrowth: 8.3,
  };

  const platformData = [
    {
      platform: "Facebook",
      icon: "📘",
      followers: 12456,
      growth: 156,
      engagement: 4589,
      reach: 45678,
      color: "blue",
    },
    {
      platform: "Instagram",
      icon: "📷",
      followers: 8932,
      growth: 89,
      engagement: 3210,
      reach: 34567,
      color: "purple",
    },
    {
      platform: "Twitter",
      icon: "🐦",
      followers: 5432,
      growth: 45,
      engagement: 1876,
      reach: 23456,
      color: "sky",
    },
    {
      platform: "Gmail",
      icon: "📧",
      followers: 0,
      growth: 0,
      engagement: 1248,
      reach: 0,
      color: "red",
    },
  ];

  const engagementTrendsData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Likes",
        data: [120, 190, 170, 210, 180, 150, 130],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Comments",
        data: [80, 110, 90, 120, 100, 70, 60],
        borderColor: "#8B5CF6",
        backgroundColor: "rgba(139, 92, 246, 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Shares",
        data: [40, 60, 50, 70, 55, 45, 35],
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const topPosts = [
    {
      platform: "Facebook",
      title: "Summer Sale Announcement",
      engagement: 4589,
      reach: 12456,
      date: "Jun 15",
    },
    {
      platform: "Instagram",
      title: "Behind the scenes video",
      engagement: 3210,
      reach: 8765,
      date: "Jun 14",
    },
    {
      platform: "Twitter",
      title: "Industry insights thread",
      engagement: 1876,
      reach: 5432,
      date: "Jun 13",
    },
  ];

  const recommendations = [
    {
      title: "Increase Instagram Posting",
      description:
        "Your Instagram engagement is 40% higher than other platforms. Consider posting 2-3 times daily.",
      priority: "High",
      impact: "+15% potential reach",
    },
    {
      title: "Optimize Facebook Timing",
      description:
        "Posts between 1-3 PM show 25% better engagement. Schedule more content during this window.",
      priority: "Medium",
      impact: "+8% engagement rate",
    },
    {
      title: "Email Response Time",
      description:
        "Average response time is 4.2 hours. Aim for under 2 hours to improve customer satisfaction.",
      priority: "High",
      impact: "Better customer relations",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Weekly Report
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {format(weekStart, "MMM d")} - {format(weekEnd, "MMM d, yyyy")}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(Number.parseInt(e.target.value))}
            className="input"
          >
            <option value={0}>This Week</option>
            <option value={1}>Last Week</option>
            <option value={2}>2 Weeks Ago</option>
            <option value={3}>3 Weeks Ago</option>
          </select>
          <button className="btn-primary flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </button>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Executive Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
              {weeklyData.totalFollowers.toLocaleString()}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Followers
            </p>
            <div className="flex items-center justify-center mt-2 text-green-600 dark:text-green-400">
              <TrendUp className="w-4 h-4 mr-1" />
              <span className="text-sm">+{weeklyData.followerGrowth}</span>
            </div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
              {weeklyData.totalEngagement.toLocaleString()}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Engagement
            </p>
            <div className="flex items-center justify-center mt-2 text-green-600 dark:text-green-400">
              <TrendUp className="w-4 h-4 mr-1" />
              <span className="text-sm">{weeklyData.engagementRate}%</span>
            </div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Eye className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
              {weeklyData.totalReach.toLocaleString()}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Reach
            </p>
            <div className="flex items-center justify-center mt-2 text-green-600 dark:text-green-400">
              <TrendUp className="w-4 h-4 mr-1" />
              <span className="text-sm">+{weeklyData.reachGrowth}%</span>
            </div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Share className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
              {weeklyData.totalImpressions.toLocaleString()}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Impressions
            </p>
            <div className="flex items-center justify-center mt-2 text-green-600 dark:text-green-400">
              <TrendUp className="w-4 h-4 mr-1" />
              <span className="text-sm">+{weeklyData.impressionGrowth}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Performance */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Platform Performance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformData.map((platform, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{platform.icon}</span>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {platform.platform}
                </h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Followers
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {platform.followers.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Growth
                  </span>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    +{platform.growth}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Engagement
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {platform.engagement.toLocaleString()}
                  </span>
                </div>
                {platform.reach > 0 && (
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Reach
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {platform.reach.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Trends */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Daily Engagement Trends
        </h3>
        <Chart type="line" data={engagementTrendsData} />
      </div>

      {/* Top Performing Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Top Performing Posts
            </h3>
            <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm flex items-center">
              View All
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {topPosts.map((post, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                    {post.title}
                  </h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {post.platform}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex space-x-4">
                    <span className="text-gray-600 dark:text-gray-400">
                      {post.engagement.toLocaleString()} engagements
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {post.reach.toLocaleString()} reach
                    </span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Key Insights & Recommendations
          </h3>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                    {rec.title}
                  </h4>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      rec.priority === "High"
                        ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                    }`}
                  >
                    {rec.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {rec.description}
                </p>
                <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                  Impact: {rec.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Action Items for Next Week
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
              Content Strategy
            </h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Create 3 Instagram Reels</li>
              <li>• Schedule 5 Facebook posts</li>
              <li>• Prepare Twitter thread series</li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-100 dark:border-purple-800">
            <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">
              Engagement
            </h4>
            <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
              <li>• Respond to all comments</li>
              <li>• Engage with followers' content</li>
              <li>• Host Instagram Live session</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-100 dark:border-green-800">
            <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">
              Analytics
            </h4>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>• Review posting times</li>
              <li>• Analyze hashtag performance</li>
              <li>• Track competitor activity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyReport;
