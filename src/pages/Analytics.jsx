"use client";

import { useState } from "react";
import {
  ChartLine,
  TrendUp,
  TrendDown,
  Users,
  Heart,
  Eye,
  Share,
  ArrowUpRight,
  MagnifyingGlass,
  Funnel,
  Download,
} from "@phosphor-icons/react";
import StatCard from "../components/StatCard";
import Chart from "../components/Chart";

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("30");
  const [activeTab, setActiveTab] = useState("overview");

  const analyticsStats = [
    {
      title: "Total Audience",
      value: "26,820",
      change: "5.2% from last month",
      changeType: "positive",
      icon: Users,
      iconColor:
        "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    },
    {
      title: "Avg. Engagement Rate",
      value: "4.8%",
      change: "0.6% from last month",
      changeType: "positive",
      icon: Heart,
      iconColor:
        "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
    },
    {
      title: "Total Reach",
      value: "156,789",
      change: "12.5% from last month",
      changeType: "positive",
      icon: Eye,
      iconColor:
        "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    },
    {
      title: "Conversion Rate",
      value: "2.3%",
      change: "0.2% from last month",
      changeType: "negative",
      icon: Share,
      iconColor:
        "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
    },
  ];

  const audienceGrowthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Facebook",
        data: [10200, 10800, 11200, 11800, 12100, 12456],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Instagram",
        data: [7800, 8100, 8300, 8500, 8700, 8932],
        borderColor: "#8B5CF6",
        backgroundColor: "rgba(139, 92, 246, 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Twitter",
        data: [4800, 4900, 5100, 5200, 5300, 5432],
        borderColor: "#06B6D4",
        backgroundColor: "rgba(6, 182, 212, 0.1)",
        tension: 0.3,
        fill: true,
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

  const contentTypePerformanceData = {
    labels: ["Images", "Videos", "Text Posts", "Links", "Stories"],
    datasets: [
      {
        label: "Engagement Rate",
        data: [6.8, 8.2, 4.1, 3.5, 7.9],
        backgroundColor: "rgba(16, 185, 129, 0.7)",
      },
    ],
  };

  const demographicsData = {
    labels: ["18-24", "25-34", "35-44", "45-54", "55+"],
    datasets: [
      {
        label: "Male",
        data: [15, 25, 20, 10, 5],
        backgroundColor: "rgba(59, 130, 246, 0.7)",
      },
      {
        label: "Female",
        data: [20, 30, 15, 8, 2],
        backgroundColor: "rgba(236, 72, 153, 0.7)",
      },
    ],
  };

  const conversionFunnelData = {
    labels: [
      "Impressions",
      "Reach",
      "Engagement",
      "Click-through",
      "Conversion",
    ],
    datasets: [
      {
        data: [100, 65, 40, 20, 8],
        backgroundColor: [
          "rgba(59, 130, 246, 0.7)",
          "rgba(139, 92, 246, 0.7)",
          "rgba(16, 185, 129, 0.7)",
          "rgba(245, 158, 11, 0.7)",
          "rgba(239, 68, 68, 0.7)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const tabs = [
    { id: "overview", name: "Overview" },
    { id: "audience", name: "Audience" },
    { id: "content", name: "Content" },
    { id: "conversion", name: "Conversion" },
    { id: "benchmarks", name: "Benchmarks" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
            <ChartLine className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Advanced Analytics
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive insights across all your social platforms
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
            <option value="180">Last 6 months</option>
          </select>
          <button className="btn-primary flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-primary-500 text-primary-600 dark:text-primary-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Overview Tab Content */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Audience Growth
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
              <Chart type="line" data={audienceGrowthData} />
            </div>

            <div className="card p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Engagement Distribution
                </h4>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  By Platform
                </div>
              </div>
              <Chart type="doughnut" data={engagementByPlatformData} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Content Type Performance
                </h4>
                <select className="input text-sm">
                  <option>All Platforms</option>
                  <option>Facebook</option>
                  <option>Instagram</option>
                  <option>Twitter</option>
                </select>
              </div>
              <Chart type="bar" data={contentTypePerformanceData} />
            </div>

            <div className="card p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Audience Demographics
                </h4>
                <div className="flex space-x-2">
                  <button className="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                    Male
                  </button>
                  <button className="text-xs bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 px-2 py-1 rounded">
                    Female
                  </button>
                </div>
              </div>
              <Chart type="bar" data={demographicsData} />
            </div>
          </div>

          <div className="card p-6">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Key Insights
              </h4>
              <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm flex items-center">
                View All
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-full mr-3">
                    <TrendUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h5 className="font-medium text-gray-900 dark:text-white">
                    Audience Growth
                  </h5>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                  Instagram audience grew 15% faster than other platforms. Focus
                  more resources on Instagram content.
                </p>
                <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  HIGH IMPACT
                </span>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-100 dark:border-purple-800">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 dark:bg-purple-900/40 p-2 rounded-full mr-3">
                    <Heart className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h5 className="font-medium text-gray-900 dark:text-white">
                    Content Strategy
                  </h5>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                  Video content generates 40% higher engagement than images.
                  Increase video production for better results.
                </p>
                <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                  MEDIUM IMPACT
                </span>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-100 dark:border-green-800">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-full mr-3">
                    <Eye className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h5 className="font-medium text-gray-900 dark:text-white">
                    Optimal Timing
                  </h5>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                  Posts between 1-3 PM get 25% more engagement. Schedule more
                  content during this window.
                </p>
                <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                  HIGH IMPACT
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Audience Tab Content */}
      {activeTab === "audience" && (
        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Audience Demographics
              </h4>
              <div className="flex items-center space-x-3">
                <select className="input text-sm">
                  <option>All Platforms</option>
                  <option>Facebook</option>
                  <option>Instagram</option>
                  <option>Twitter</option>
                </select>
                <button className="btn-secondary flex items-center text-sm">
                  <Funnel className="w-4 h-4 mr-2" />
                  Filter
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-4">
                  Age Distribution
                </h5>
                <Chart type="bar" data={demographicsData} />
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-4">
                  Geographic Distribution
                </h5>
                <div className="space-y-3">
                  {[
                    { country: "United States", percentage: 45 },
                    { country: "United Kingdom", percentage: 15 },
                    { country: "Canada", percentage: 12 },
                    { country: "Australia", percentage: 8 },
                    { country: "Germany", percentage: 5 },
                    { country: "Other", percentage: 15 },
                  ].map((item) => (
                    <div key={item.country}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {item.country}
                        </span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-6">
                Audience Interests
              </h4>
              <div className="space-y-4">
                {[
                  { interest: "Technology", percentage: 65 },
                  { interest: "Fashion", percentage: 45 },
                  { interest: "Travel", percentage: 40 },
                  { interest: "Food & Dining", percentage: 35 },
                  { interest: "Fitness", percentage: 30 },
                ].map((item) => (
                  <div key={item.interest}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.interest}
                      </span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-6">
                Audience Activity
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Most Active Days
                  </h5>
                  <div className="grid grid-cols-7 gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                      (day, index) => (
                        <div key={day} className="text-center">
                          <div
                            className={`h-16 rounded-lg ${
                              index === 2 || index === 3 || index === 4
                                ? "bg-primary-100 dark:bg-primary-900/20"
                                : "bg-gray-100 dark:bg-gray-700"
                            }`}
                            style={{
                              height: `${
                                index === 2
                                  ? "4rem"
                                  : index === 3
                                  ? "5rem"
                                  : index === 4
                                  ? "4.5rem"
                                  : "2rem"
                              }`,
                            }}
                          ></div>
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-1 block">
                            {day}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Most Active Hours
                  </h5>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 24 }).map((_, index) => (
                      <div
                        key={index}
                        className={`flex-1 rounded-sm ${
                          (index >= 8 && index <= 10) ||
                          (index >= 18 && index <= 21)
                            ? "bg-primary-500 h-12"
                            : index >= 11 && index <= 17
                            ? "bg-primary-300 h-8"
                            : "bg-gray-200 dark:bg-gray-700 h-4"
                        }`}
                        title={`${index}:00 - ${index + 1}:00`}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      12 AM
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      12 PM
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      12 AM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Tab Content */}
      {activeTab === "content" && (
        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Content Performance Analysis
              </h4>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <MagnifyingGlass className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search content..."
                    className="input pl-10"
                  />
                </div>
                <button className="btn-secondary flex items-center text-sm">
                  <Funnel className="w-4 h-4 mr-2" />
                  Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Content
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Platform
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Engagement
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Reach
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    {
                      title: "Behind the scenes: Product development",
                      platform: "Instagram",
                      type: "Video",
                      engagement: 8945,
                      reach: 45678,
                      date: "Jun 15",
                    },
                    {
                      title: "Summer collection announcement",
                      platform: "Facebook",
                      type: "Image",
                      engagement: 7234,
                      reach: 38901,
                      date: "Jun 12",
                    },
                    {
                      title: "10 tips for social media success",
                      platform: "Twitter",
                      type: "Thread",
                      engagement: 3456,
                      reach: 18765,
                      date: "Jun 8",
                    },
                    {
                      title: "Customer spotlight: Success story",
                      platform: "Facebook",
                      type: "Image",
                      engagement: 6543,
                      reach: 32456,
                      date: "Jun 5",
                    },
                    {
                      title: "Product tutorial: Advanced features",
                      platform: "Instagram",
                      type: "Video",
                      engagement: 7890,
                      reach: 41234,
                      date: "Jun 2",
                    },
                  ].map((content, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {content.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {content.platform}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            content.type === "Video"
                              ? "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
                              : content.type === "Image"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                              : "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                          }`}
                        >
                          {content.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {content.engagement.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {content.reach.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {content.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-6">
                Content Type Performance
              </h4>
              <Chart type="bar" data={contentTypePerformanceData} />
            </div>

            <div className="card p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-6">
                Content Recommendations
              </h4>
              <div className="space-y-4">
                {[
                  {
                    title: "Increase Video Content",
                    description:
                      "Videos generate 40% higher engagement than other content types.",
                    impact: "High",
                    action: "Create 3-4 videos per week",
                  },
                  {
                    title: "Optimize Posting Times",
                    description:
                      "Posts between 1-3 PM get 25% more engagement.",
                    impact: "Medium",
                    action: "Schedule more content during peak hours",
                  },
                  {
                    title: "Leverage User-Generated Content",
                    description:
                      "UGC posts receive 28% higher engagement than branded content.",
                    impact: "High",
                    action: "Launch UGC campaign",
                  },
                ].map((rec, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium text-gray-900 dark:text-white text-sm">
                        {rec.title}
                      </h5>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          rec.impact === "High"
                            ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                        }`}
                      >
                        {rec.impact} Impact
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {rec.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Recommended action:
                      </span>
                      <span className="text-xs font-medium text-primary-600 dark:text-primary-400">
                        {rec.action}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Conversion Tab Content */}
      {activeTab === "conversion" && (
        <div className="space-y-6">
          <div className="card p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-6">
              Conversion Funnel
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <Chart type="bar" data={conversionFunnelData} />
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium text-gray-900 dark:text-white">
                      Funnel Analysis
                    </h5>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                      Last 30 Days
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Impressions to Reach
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        65%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Reach to Engagement
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        62%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Engagement to Click
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        50%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Click to Conversion
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        40%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-primary-600 dark:text-primary-400">
                        Overall Conversion
                      </span>
                      <span className="text-primary-600 dark:text-primary-400">
                        8%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-3">
                    Optimization Opportunities
                  </h5>
                  <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2"></span>
                      <span>
                        Improve click-through rate with stronger calls-to-action
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2"></span>
                      <span>
                        Optimize landing pages to increase conversion rate by
                        15%
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2"></span>
                      <span>
                        Implement retargeting campaigns for users who engaged
                        but didn't convert
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-6">
                Conversion by Platform
              </h4>
              <div className="space-y-4">
                {[
                  {
                    platform: "Facebook",
                    rate: 2.8,
                    change: "+0.3%",
                    status: "positive",
                  },
                  {
                    platform: "Instagram",
                    rate: 3.2,
                    change: "+0.5%",
                    status: "positive",
                  },
                  {
                    platform: "Twitter",
                    rate: 1.5,
                    change: "-0.2%",
                    status: "negative",
                  },
                  {
                    platform: "Email",
                    rate: 4.6,
                    change: "+1.2%",
                    status: "positive",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white">
                        {item.platform}
                      </h5>
                      <div className="flex items-center mt-1">
                        <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
                          {item.rate}% conversion rate
                        </span>
                        <span
                          className={`text-xs flex items-center ${
                            item.status === "positive"
                              ? "text-green-600 dark:text-green-400"
                              : "text-red-600 dark:text-red-400"
                          }`}
                        >
                          {item.status === "positive" ? (
                            <TrendUp className="w-3 h-3 mr-1" />
                          ) : (
                            <TrendDown className="w-3 h-3 mr-1" />
                          )}
                          {item.change}
                        </span>
                      </div>
                    </div>
                    <div className="w-24 h-8 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          item.status === "positive"
                            ? "bg-green-500 dark:bg-green-600"
                            : "bg-red-500 dark:bg-red-600"
                        }`}
                        style={{ width: `${item.rate * 10}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-6">
                Conversion Goals
              </h4>
              <div className="space-y-4">
                {[
                  {
                    goal: "Website Traffic",
                    target: 50000,
                    achieved: 45678,
                    percentage: 91.4,
                  },
                  {
                    goal: "Email Signups",
                    target: 5000,
                    achieved: 4321,
                    percentage: 86.4,
                  },
                  {
                    goal: "Product Demo Requests",
                    target: 1000,
                    achieved: 876,
                    percentage: 87.6,
                  },
                  {
                    goal: "Purchases",
                    target: 500,
                    achieved: 432,
                    percentage: 86.4,
                  },
                ].map((goal, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    <div className="flex justify-between mb-2">
                      <h5 className="font-medium text-gray-900 dark:text-white">
                        {goal.goal}
                      </h5>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {goal.percentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${goal.percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>
                        {goal.achieved.toLocaleString()} /{" "}
                        {goal.target.toLocaleString()}
                      </span>
                      <span>Target: {goal.target.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Benchmarks Tab Content */}
      {activeTab === "benchmarks" && (
        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Industry Benchmarks
              </h4>
              <select className="input text-sm">
                <option>Technology</option>
                <option>Retail</option>
                <option>Finance</option>
                <option>Healthcare</option>
                <option>Education</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  metric: "Engagement Rate",
                  industry: "2.5%",
                  yours: "4.8%",
                  status: "positive",
                },
                {
                  metric: "Follower Growth",
                  industry: "3.2%",
                  yours: "5.2%",
                  status: "positive",
                },
                {
                  metric: "Click-Through Rate",
                  industry: "1.8%",
                  yours: "2.3%",
                  status: "positive",
                },
                {
                  metric: "Conversion Rate",
                  industry: "2.5%",
                  yours: "2.3%",
                  status: "negative",
                },
              ].map((benchmark, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                >
                  <h5 className="font-medium text-gray-900 dark:text-white mb-3">
                    {benchmark.metric}
                  </h5>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Industry Average
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {benchmark.industry}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Your Performance
                    </span>
                    <span
                      className={`text-sm font-medium flex items-center ${
                        benchmark.status === "positive"
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {benchmark.yours}
                      {benchmark.status === "positive" ? (
                        <TrendUp className="w-4 h-4 ml-1" />
                      ) : (
                        <TrendDown className="w-4 h-4 ml-1" />
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-6">
                Competitor Analysis
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Follower Count Comparison
                  </h5>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Your Brand",
                        followers: 24589,
                        color: "bg-primary-600",
                      },
                      {
                        name: "Competitor A",
                        followers: 32456,
                        color: "bg-gray-400 dark:bg-gray-600",
                      },
                      {
                        name: "Competitor B",
                        followers: 18765,
                        color: "bg-gray-400 dark:bg-gray-600",
                      },
                      {
                        name: "Competitor C",
                        followers: 27890,
                        color: "bg-gray-400 dark:bg-gray-600",
                      },
                    ].map((competitor, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {competitor.name}
                          </span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {competitor.followers.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${competitor.color}`}
                            style={{
                              width: `${(competitor.followers / 35000) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Engagement Rate Comparison
                  </h5>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Your Brand",
                        rate: 4.8,
                        color: "bg-primary-600",
                      },
                      {
                        name: "Competitor A",
                        rate: 3.2,
                        color: "bg-gray-400 dark:bg-gray-600",
                      },
                      {
                        name: "Competitor B",
                        rate: 5.1,
                        color: "bg-gray-400 dark:bg-gray-600",
                      },
                      {
                        name: "Competitor C",
                        rate: 2.9,
                        color: "bg-gray-400 dark:bg-gray-600",
                      },
                    ].map((competitor, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {competitor.name}
                          </span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {competitor.rate}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${competitor.color}`}
                            style={{ width: `${(competitor.rate / 6) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-6">
                Performance Insights
              </h4>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
                  <div className="flex items-center mb-2">
                    <TrendUp className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                    <h5 className="font-medium text-gray-900 dark:text-white">
                      Above Industry Average
                    </h5>
                  </div>
                  <p className="text-sm text-green-800 dark:text-green-300 mb-2">
                    Your engagement rate is 92% higher than the industry
                    average. Keep up the excellent content strategy!
                  </p>
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                    EXCELLENT PERFORMANCE
                  </span>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-100 dark:border-yellow-800">
                  <div className="flex items-center mb-2">
                    <Eye className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2" />
                    <h5 className="font-medium text-gray-900 dark:text-white">
                      Growth Opportunity
                    </h5>
                  </div>
                  <p className="text-sm text-yellow-800 dark:text-yellow-300 mb-2">
                    Your conversion rate is slightly below industry average.
                    Consider optimizing your call-to-action strategies.
                  </p>
                  <span className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">
                    IMPROVEMENT NEEDED
                  </span>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center mb-2">
                    <Share className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <h5 className="font-medium text-gray-900 dark:text-white">
                      Competitive Position
                    </h5>
                  </div>
                  <p className="text-sm text-blue-800 dark:text-blue-300 mb-2">
                    You're performing better than 2 out of 3 competitors. Focus
                    on video content to outperform Competitor B.
                  </p>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    STRONG POSITION
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;
