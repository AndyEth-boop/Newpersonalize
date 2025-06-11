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
  Target,
} from "@phosphor-icons/react";
import Chart from "../components/Chart";
import { format, subMonths, startOfMonth, endOfMonth } from "date-fns";

const MonthlyReport = () => {
  const [selectedMonth, setSelectedMonth] = useState(0); // 0 = current month, 1 = last month, etc.

  const currentDate = new Date();
  const monthStart = startOfMonth(subMonths(currentDate, selectedMonth));
  const monthEnd = endOfMonth(subMonths(currentDate, selectedMonth));

  const monthlyData = {
    totalFollowers: 24589,
    followerGrowth: 1234,
    totalEngagement: 45678,
    engagementGrowth: 15.2,
    totalReach: 567890,
    reachGrowth: 22.8,
    totalImpressions: 1234567,
    impressionGrowth: 18.5,
  };

  const monthlyGrowthData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Facebook",
        data: [156, 189, 234, 267],
        backgroundColor: "rgba(59, 130, 246, 0.7)",
      },
      {
        label: "Instagram",
        data: [89, 112, 145, 178],
        backgroundColor: "rgba(139, 92, 246, 0.7)",
      },
      {
        label: "Twitter",
        data: [45, 56, 67, 78],
        backgroundColor: "rgba(59, 130, 246, 0.5)",
      },
    ],
  };

  const engagementByPlatformData = {
    labels: ["Facebook", "Instagram", "Twitter", "Gmail"],
    datasets: [
      {
        data: [45, 35, 15, 5],
        backgroundColor: ["#3B82F6", "#8B5CF6", "#06B6D4", "#EF4444"],
        borderWidth: 0,
      },
    ],
  };

  const contentPerformanceData = {
    labels: ["Images", "Videos", "Text Posts", "Links", "Stories"],
    datasets: [
      {
        label: "Engagement Rate",
        data: [6.8, 8.2, 4.1, 3.5, 7.9],
        backgroundColor: "rgba(16, 185, 129, 0.7)",
      },
    ],
  };

  const goals = [
    {
      title: "Follower Growth",
      target: 1500,
      achieved: 1234,
      percentage: 82.3,
      status: "on-track",
    },
    {
      title: "Engagement Rate",
      target: 5.0,
      achieved: 4.8,
      percentage: 96.0,
      status: "excellent",
    },
    {
      title: "Content Posts",
      target: 60,
      achieved: 52,
      percentage: 86.7,
      status: "on-track",
    },
    {
      title: "Email Response Time",
      target: 2.0,
      achieved: 4.2,
      percentage: 47.6,
      status: "needs-improvement",
    },
  ];

  const topContent = [
    {
      type: "Video",
      platform: "Instagram",
      title: "Behind the scenes: Product development",
      engagement: 8945,
      reach: 45678,
      date: "Jun 15",
    },
    {
      type: "Image",
      platform: "Facebook",
      title: "Summer collection announcement",
      engagement: 7234,
      reach: 38901,
      date: "Jun 12",
    },
    {
      type: "Thread",
      platform: "Twitter",
      title: "10 tips for social media success",
      engagement: 3456,
      reach: 18765,
      date: "Jun 8",
    },
  ];

  const insights = [
    {
      title: "Video Content Dominance",
      description:
        "Video posts generated 40% more engagement than other content types this month.",
      impact: "High",
      recommendation:
        "Increase video content production to 3-4 posts per week.",
    },
    {
      title: "Instagram Growth Surge",
      description:
        "Instagram follower growth exceeded targets by 25%, driven by Reels performance.",
      impact: "High",
      recommendation: "Allocate more resources to Instagram content creation.",
    },
    {
      title: "Email Response Lag",
      description:
        "Email response time increased to 4.2 hours, missing the 2-hour target.",
      impact: "Medium",
      recommendation:
        "Implement automated responses and dedicated email management hours.",
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
              Monthly Report
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {format(monthStart, "MMMM yyyy")}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number.parseInt(e.target.value))}
            className="input"
          >
            <option value={0}>This Month</option>
            <option value={1}>Last Month</option>
            <option value={2}>2 Months Ago</option>
            <option value={3}>3 Months Ago</option>
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
          Monthly Performance Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
              {monthlyData.totalFollowers.toLocaleString()}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Followers
            </p>
            <div className="flex items-center justify-center mt-2 text-green-600 dark:text-green-400">
              <TrendUp className="w-4 h-4 mr-1" />
              <span className="text-sm">+{monthlyData.followerGrowth}</span>
            </div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
              {monthlyData.totalEngagement.toLocaleString()}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Engagement
            </p>
            <div className="flex items-center justify-center mt-2 text-green-600 dark:text-green-400">
              <TrendUp className="w-4 h-4 mr-1" />
              <span className="text-sm">+{monthlyData.engagementGrowth}%</span>
            </div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Eye className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
              {monthlyData.totalReach.toLocaleString()}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Reach
            </p>
            <div className="flex items-center justify-center mt-2 text-green-600 dark:text-green-400">
              <TrendUp className="w-4 h-4 mr-1" />
              <span className="text-sm">+{monthlyData.reachGrowth}%</span>
            </div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Share className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
              {monthlyData.totalImpressions.toLocaleString()}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Impressions
            </p>
            <div className="flex items-center justify-center mt-2 text-green-600 dark:text-green-400">
              <TrendUp className="w-4 h-4 mr-1" />
              <span className="text-sm">+{monthlyData.impressionGrowth}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Goal Progress */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Monthly Goals Progress
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {goal.title}
                </h4>
                <Target className="w-5 h-5 text-gray-400" />
              </div>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">
                    Progress
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {goal.percentage.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      goal.status === "excellent"
                        ? "bg-green-500"
                        : goal.status === "on-track"
                        ? "bg-blue-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${Math.min(goal.percentage, 100)}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Target:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {goal.target}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Achieved:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {goal.achieved}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Weekly Growth Trends
          </h3>
          <Chart type="bar" data={monthlyGrowthData} />
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Engagement Distribution by Platform
          </h3>
          <Chart type="doughnut" data={engagementByPlatformData} />
        </div>
      </div>

      {/* Content Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Content Type Performance
          </h3>
          <Chart type="bar" data={contentPerformanceData} />
        </div>

        <div className="card p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Top Performing Content
            </h3>
            <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm flex items-center">
              View All
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {topContent.map((content, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center mb-1">
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded mr-2">
                        {content.type}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {content.platform}
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                      {content.title}
                    </h4>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {content.date}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex space-x-4">
                    <span className="text-gray-600 dark:text-gray-400">
                      {content.engagement.toLocaleString()} engagements
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {content.reach.toLocaleString()} reach
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Key Insights & Strategic Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                  {insight.title}
                </h4>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    insight.impact === "High"
                      ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                  }`}
                >
                  {insight.impact} Impact
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {insight.description}
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <p className="text-xs text-blue-800 dark:text-blue-300">
                  <strong>Recommendation:</strong> {insight.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Month Strategy */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Strategy for Next Month
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-3">
              Content Focus
            </h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
              <li>• Increase video content to 60% of posts</li>
              <li>• Launch Instagram Reels series</li>
              <li>• Create educational content threads</li>
              <li>• Develop user-generated content campaigns</li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-100 dark:border-purple-800">
            <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-3">
              Growth Targets
            </h4>
            <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-2">
              <li>• Achieve 1,500 new followers</li>
              <li>• Maintain 5%+ engagement rate</li>
              <li>• Increase reach by 25%</li>
              <li>• Improve email response time to 2hrs</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-100 dark:border-green-800">
            <h4 className="font-medium text-green-900 dark:text-green-100 mb-3">
              Optimization
            </h4>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-2">
              <li>• A/B test posting times</li>
              <li>• Optimize hashtag strategies</li>
              <li>• Implement automated email responses</li>
              <li>• Analyze competitor strategies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyReport;
