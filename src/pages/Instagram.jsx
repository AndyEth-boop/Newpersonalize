"use client";

import { useState } from "react";
import {
  InstagramLogo,
  Users,
  Heart,
  Eye,
  Calendar,
  Play,
} from "@phosphor-icons/react";
import StatCard from "../components/StatCard";
import Chart from "../components/Chart";

const Instagram = () => {
  const [timeRange, setTimeRange] = useState("30");
  const [contentFilter, setContentFilter] = useState("all");

  const instagramStats = [
    {
      title: "Followers",
      value: "8,932",
      change: "156 this week",
      changeType: "positive",
      icon: Users,
      iconColor:
        "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
    },
    {
      title: "Post Reach",
      value: "14,567",
      change: "8% from last week",
      changeType: "positive",
      icon: Eye,
      iconColor:
        "bg-pink-100 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400",
    },
    {
      title: "Engagement Rate",
      value: "6.8%",
      change: "1.2% from last week",
      changeType: "positive",
      icon: Heart,
      iconColor: "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400",
    },
    {
      title: "Story Views",
      value: "3,245",
      change: "15% from last week",
      changeType: "positive",
      icon: Play,
      iconColor:
        "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
    },
  ];

  const engagementByContentData = {
    labels: ["Reach", "Likes", "Comments", "Saves", "Shares"],
    datasets: [
      {
        label: "Photo Posts",
        data: [80, 85, 70, 65, 60],
        backgroundColor: "rgba(139, 92, 246, 0.2)",
        borderColor: "rgba(139, 92, 246, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(139, 92, 246, 1)",
      },
      {
        label: "Video Posts",
        data: [90, 75, 80, 70, 50],
        backgroundColor: "rgba(236, 72, 153, 0.2)",
        borderColor: "rgba(236, 72, 153, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(236, 72, 153, 1)",
      },
    ],
  };

  const storyPerformanceData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Impressions",
        data: [1200, 1900, 1700, 2100, 1800, 2300],
        borderColor: "#8B5CF6",
        backgroundColor: "rgba(139, 92, 246, 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Completion Rate",
        data: [65, 72, 68, 75, 70, 78],
        borderColor: "#EC4899",
        backgroundColor: "rgba(236, 72, 153, 0.1)",
        tension: 0.3,
        fill: true,
        yAxisID: "y1",
      },
    ],
  };

  const hashtagPerformance = [
    { tag: "#summersale", engagements: 1245, percentage: 85 },
    { tag: "#newproduct", engagements: 987, percentage: 65 },
    { tag: "#customerspotlight", engagements: 765, percentage: 50 },
    { tag: "#behindthescenes", engagements: 543, percentage: 40 },
  ];

  const recentPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop",
      likes: 1245,
      comments: 89,
    },
    {
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop",
      likes: 987,
      comments: 65,
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      likes: 765,
      comments: 43,
    },
    {
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=300&h=300&fit=crop",
      likes: 543,
      comments: 32,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
            <InstagramLogo className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Instagram Analytics
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Monitor your Instagram performance and audience engagement
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
        {instagramStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Engagement by Content Type
            </h4>
            <select className="input text-sm">
              <option>Last 7 days</option>
              <option selected>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <Chart
            type="radar"
            data={engagementByContentData}
            options={{
              scales: {
                r: {
                  angleLines: { display: true },
                  suggestedMin: 0,
                  suggestedMax: 100,
                },
              },
            }}
          />
        </div>

        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Story Performance
            </h4>
            <select className="input text-sm">
              <option>Last 7 days</option>
              <option selected>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <Chart
            type="line"
            data={storyPerformanceData}
            options={{
              scales: {
                y: {
                  type: "linear",
                  display: true,
                  position: "left",
                  title: { display: true, text: "Impressions" },
                },
                y1: {
                  type: "linear",
                  display: true,
                  position: "right",
                  title: { display: true, text: "Completion Rate (%)" },
                  min: 0,
                  max: 100,
                  grid: { drawOnChartArea: false },
                },
              },
            }}
          />
          <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <p className="text-sm text-purple-800 dark:text-purple-300">
              💡 Recommendation: Post stories in the evening (6-9 PM) for higher
              completion rates
            </p>
          </div>
        </div>
      </div>

      {/* Hashtag Performance and Recent Posts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Top Performing Hashtags
            </h4>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Engagement
            </div>
          </div>
          <div className="space-y-4">
            {hashtagPerformance.map((hashtag, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {hashtag.tag}
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {hashtag.engagements} engagements
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${hashtag.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Recent Posts
            </h4>
            <div className="flex space-x-2">
              <button
                onClick={() => setContentFilter("all")}
                className={`text-xs px-2 py-1 rounded ${
                  contentFilter === "all"
                    ? "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                    : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setContentFilter("photos")}
                className={`text-xs px-2 py-1 rounded ${
                  contentFilter === "photos"
                    ? "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                    : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                Photos
              </button>
              <button
                onClick={() => setContentFilter("videos")}
                className={`text-xs px-2 py-1 rounded ${
                  contentFilter === "videos"
                    ? "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                    : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                Videos
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="relative group">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt="Instagram post"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <div className="text-white text-center">
                    <p className="font-bold flex items-center justify-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {post.likes.toLocaleString()}
                    </p>
                    <p className="text-sm">{post.comments} Comments</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audience Insights */}
      <div className="card p-6">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-6">
          Audience Insights
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h5 className="font-medium text-gray-900 dark:text-white mb-2">
              Top Age Group
            </h5>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              25-34
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              35% of followers
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h5 className="font-medium text-gray-900 dark:text-white mb-2">
              Peak Activity
            </h5>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              7-9 PM
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Weekdays</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h5 className="font-medium text-gray-900 dark:text-white mb-2">
              Avg. Engagement
            </h5>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              6.8%
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Above industry avg
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
