"use client";

import { useState } from "react";
import {
  FacebookLogo,
  TrendUp,
  Users,
  Heart,
  Share,
  Eye,
  ArrowUpRight,
  Calendar,
} from "@phosphor-icons/react";
import StatCard from "../components/StatCard";
import Chart from "../components/Chart";

const Facebook = () => {
  const [timeRange, setTimeRange] = useState("30");

  const facebookStats = [
    {
      title: "Page Likes",
      value: "12,456",
      change: "234 this week",
      changeType: "positive",
      icon: Users,
      iconColor:
        "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    },
    {
      title: "Post Reach",
      value: "24,789",
      change: "12% from last week",
      changeType: "positive",
      icon: Eye,
      iconColor:
        "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    },
    {
      title: "Engagement Rate",
      value: "5.2%",
      change: "0.3% from last week",
      changeType: "negative",
      icon: Heart,
      iconColor:
        "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
    },
    {
      title: "Shares",
      value: "1,234",
      change: "8% from last week",
      changeType: "positive",
      icon: Share,
      iconColor:
        "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
    },
  ];

  const engagementByTypeData = {
    labels: ["Text", "Image", "Video", "Link"],
    datasets: [
      {
        label: "Reach",
        data: [1200, 1800, 2400, 900],
        backgroundColor: "rgba(59, 130, 246, 0.7)",
      },
      {
        label: "Engagement",
        data: [300, 450, 600, 200],
        backgroundColor: "rgba(16, 185, 129, 0.7)",
      },
    ],
  };

  const postingTimesData = {
    labels: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM"],
    datasets: [
      {
        label: "Engagement Rate",
        data: [2.1, 3.5, 4.2, 5.8, 4.5, 3.2],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const demographicsData = {
    labels: ["18-24", "25-34", "35-44", "45-54", "55+"],
    datasets: [
      {
        label: "Age Distribution",
        data: [15, 35, 25, 15, 10],
        backgroundColor: "rgba(99, 102, 241, 0.7)",
      },
    ],
  };

  const postPerformance = [
    {
      title: "Summer Sale - 50% Off Everything!",
      date: "Jun 15, 2:30 PM",
      reach: 12456,
      engagement: 4589,
      clicks: 1234,
      status: "high",
    },
    {
      title: "Meet our new team member!",
      date: "Jun 12, 10:15 AM",
      reach: 8765,
      engagement: 3210,
      clicks: 456,
      status: "high",
    },
    {
      title: "Customer of the month feature",
      date: "Jun 8, 3:45 PM",
      reach: 7890,
      engagement: 2145,
      clicks: 321,
      status: "medium",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
            <FacebookLogo className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Facebook Analytics
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track your Facebook page performance and engagement
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="input"
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
          </select>
          <button className="btn-primary flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            Custom Range
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {facebookStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Engagement by Post Type
            </h4>
            <select className="input text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option selected>Last 90 days</option>
            </select>
          </div>
          <Chart type="bar" data={engagementByTypeData} />
        </div>

        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Optimal Posting Times
            </h4>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Engagement Rate
            </div>
          </div>
          <Chart type="line" data={postingTimesData} />
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              💡 Recommendation: Post between 1:30 PM - 3:30 PM on weekdays for
              maximum engagement
            </p>
          </div>
        </div>
      </div>

      {/* Demographics and Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Follower Demographics
            </h4>
            <div className="flex space-x-2">
              <button className="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                Age
              </button>
              <button className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 rounded">
                Gender
              </button>
            </div>
          </div>
          <Chart type="bar" data={demographicsData} />
        </div>

        <div className="card p-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
            Page Insights Summary
          </h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Total Page Views
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                45,678
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Page Likes Growth
              </span>
              <span className="text-sm font-bold text-green-600 dark:text-green-400 flex items-center">
                <TrendUp className="w-4 h-4 mr-1" />
                +234
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Post Engagement
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                8,945
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Video Views
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                23,456
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Post Performance Table */}
      <div className="card p-6">
        <div className="flex justify-between items-center mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white">
            Post Performance
          </h4>
          <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm flex items-center">
            View All
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Post
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Reach
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Engagement
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Link Clicks
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {postPerformance.map((post, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {post.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {post.reach.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        post.status === "high"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                      }`}
                    >
                      {post.engagement.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {post.clicks.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Facebook;
