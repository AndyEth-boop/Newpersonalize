"use client";

import { useState } from "react";
import {
  TwitterLogo,
  TrendUp,
  Users,
  Heart,
  ChatCircle,
  Repeat,
  ArrowUpRight,
  Calendar,
  Hash,
} from "@phosphor-icons/react";
import StatCard from "../components/StatCard";
import Chart from "../components/Chart";

const Twitter = () => {
  const [timeRange, setTimeRange] = useState("30");

  const twitterStats = [
    {
      title: "Followers",
      value: "5,432",
      change: "89 this week",
      changeType: "positive",
      icon: Users,
      iconColor:
        "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    },
    {
      title: "Tweet Impressions",
      value: "18,765",
      change: "15% from last week",
      changeType: "positive",
      icon: TwitterLogo,
      iconColor: "bg-sky-100 text-sky-600 dark:bg-sky-900/20 dark:text-sky-400",
    },
    {
      title: "Engagement Rate",
      value: "3.2%",
      change: "0.4% from last week",
      changeType: "positive",
      icon: Heart,
      iconColor: "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400",
    },
    {
      title: "Retweets",
      value: "234",
      change: "12% from last week",
      changeType: "positive",
      icon: Repeat,
      iconColor:
        "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    },
  ];

  const engagementTrendsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Likes",
        data: [45, 67, 52, 78, 65, 43, 38],
        borderColor: "#EF4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Retweets",
        data: [12, 18, 15, 22, 19, 14, 11],
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Replies",
        data: [8, 12, 9, 15, 13, 7, 6],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const followerGrowthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Followers",
        data: [45, 67, 52, 78, 65, 89],
        backgroundColor: "rgba(29, 161, 242, 0.7)",
        borderColor: "rgba(29, 161, 242, 1)",
        borderWidth: 1,
      },
    ],
  };

  const hashtagPerformance = [
    { tag: "#marketing", mentions: 234, engagement: 1456 },
    { tag: "#socialmedia", mentions: 189, engagement: 1234 },
    { tag: "#analytics", mentions: 156, engagement: 987 },
    { tag: "#digitalmarketing", mentions: 134, engagement: 876 },
    { tag: "#data", mentions: 98, engagement: 654 },
  ];

  const topTweets = [
    {
      content:
        "Just launched our new analytics dashboard! 🚀 The insights are incredible...",
      date: "2 hours ago",
      likes: 45,
      retweets: 12,
      replies: 8,
      impressions: 1234,
    },
    {
      content:
        "Data-driven marketing is the future. Here's why your business needs to embrace it...",
      date: "1 day ago",
      likes: 67,
      retweets: 18,
      replies: 15,
      impressions: 2345,
    },
    {
      content:
        "Thread: 5 essential metrics every social media manager should track 🧵",
      date: "2 days ago",
      likes: 89,
      retweets: 34,
      replies: 22,
      impressions: 3456,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center mr-4">
            <TwitterLogo className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Twitter Analytics
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track your Twitter performance and audience engagement
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

      {/* Connection Status */}
      <div className="card p-6 border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center mr-4">
              <TwitterLogo className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <h3 className="font-medium text-yellow-800 dark:text-yellow-200">
                Twitter Account Not Connected
              </h3>
              <p className="text-sm text-yellow-600 dark:text-yellow-300">
                Connect your Twitter account to start tracking your performance
              </p>
            </div>
          </div>
          <button className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-lg transition-colors">
            Connect Twitter
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {twitterStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Engagement Trends
            </h4>
            <div className="flex space-x-2">
              <button className="text-xs bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-2 py-1 rounded">
                Likes
              </button>
              <button className="text-xs bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-2 py-1 rounded">
                Retweets
              </button>
              <button className="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                Replies
              </button>
            </div>
          </div>
          <Chart type="line" data={engagementTrendsData} />
        </div>

        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Follower Growth
            </h4>
            <div className="flex space-x-2">
              <button className="text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                Monthly
              </button>
              <button className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 rounded">
                Weekly
              </button>
            </div>
          </div>
          <Chart type="bar" data={followerGrowthData} />
        </div>
      </div>

      {/* Hashtag Performance and Top Tweets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Top Hashtags
            </h4>
            <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm flex items-center">
              View All
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {hashtagPerformance.map((hashtag, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex items-center">
                  <Hash className="w-4 h-4 text-blue-500 mr-2" />
                  <span className="font-medium text-gray-900 dark:text-white">
                    {hashtag.tag}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {hashtag.mentions} mentions
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {hashtag.engagement} engagement
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Top Performing Tweets
            </h4>
            <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm flex items-center">
              View All
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {topTweets.map((tweet, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <p className="text-sm text-gray-900 dark:text-white mb-3">
                  {tweet.content}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{tweet.date}</span>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Heart className="w-3 h-3 mr-1" />
                      {tweet.likes}
                    </span>
                    <span className="flex items-center">
                      <Repeat className="w-3 h-3 mr-1" />
                      {tweet.retweets}
                    </span>
                    <span className="flex items-center">
                      <ChatCircle className="w-3 h-3 mr-1" />
                      {tweet.replies}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Twitter Insights */}
      <div className="card p-6">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-6">
          Twitter Insights
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <TwitterLogo className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h5 className="font-medium text-gray-900 dark:text-white mb-2">
              Best Time to Tweet
            </h5>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              2:00 PM
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Weekdays</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendUp className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h5 className="font-medium text-gray-900 dark:text-white mb-2">
              Growth Rate
            </h5>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              +1.6%
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This month
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Hash className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h5 className="font-medium text-gray-900 dark:text-white mb-2">
              Top Hashtag
            </h5>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              #marketing
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              234 mentions
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h5 className="font-medium text-gray-900 dark:text-white mb-2">
              Avg. Engagement
            </h5>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              3.2%
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Per tweet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twitter;
