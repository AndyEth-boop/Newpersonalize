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
import {
  Card,
  CardBody,
  Typography,
  Button,
  Select,
  Option,
  Chip,
  Alert,
} from "@material-tailwind/react";
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
      iconColor: "bg-blue-400",
    },
    {
      title: "Tweet Impressions",
      value: "18,765",
      change: "15% from last week",
      changeType: "positive",
      icon: TwitterLogo,
      iconColor: "bg-sky-500",
    },
    {
      title: "Engagement Rate",
      value: "3.2%",
      change: "0.4% from last week",
      changeType: "positive",
      icon: Heart,
      iconColor: "bg-red-500",
    },
    {
      title: "Retweets",
      value: "234",
      change: "12% from last week",
      changeType: "positive",
      icon: Repeat,
      iconColor: "bg-green-500",
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
        borderRadius: 8,
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
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center shadow-lg">
            <TwitterLogo className="w-6 h-6 text-white" />
          </div>
          <div>
            <Typography variant="h4" className="text-gray-900 font-bold">
              Twitter Analytics
            </Typography>
            <Typography variant="small" className="text-gray-600">
              Track your Twitter performance and audience engagement
            </Typography>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Select value={timeRange} onChange={setTimeRange}>
            <Option value="7">Last 7 days</Option>
            <Option value="30">Last 30 days</Option>
            <Option value="90">Last 90 days</Option>
          </Select>

          <Button className="bg-blue-400 rounded-lg flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Custom Range
          </Button>
        </div>
      </div>

      {/* Connection Status */}
      <Alert
        color="yellow"
        className="rounded-xl border border-yellow-200"
        icon={<TwitterLogo className="w-6 h-6" />}
      >
        <div className="flex items-center justify-between">
          <div>
            <Typography variant="h6" className="font-medium">
              Twitter Account Not Connected
            </Typography>
            <Typography variant="small">
              Connect your Twitter account to start tracking your performance
            </Typography>
          </div>
          <Button className="bg-blue-400 hover:bg-blue-500 rounded-lg">
            Connect Twitter
          </Button>
        </div>
      </Alert>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {twitterStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Engagement Trends
              </Typography>
              <div className="flex space-x-2">
                <Chip
                  value="Likes"
                  size="sm"
                  className="bg-red-50 text-red-600"
                />
                <Chip
                  value="Retweets"
                  size="sm"
                  className="bg-green-50 text-green-600"
                />
                <Chip
                  value="Replies"
                  size="sm"
                  className="bg-blue-50 text-blue-600"
                />
              </div>
            </div>
            <div className="relative h-80">
              <Chart type="line" data={engagementTrendsData} />
            </div>
          </CardBody>
        </Card>

        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Follower Growth
              </Typography>
              <div className="flex space-x-2">
                <Chip
                  value="Monthly"
                  size="sm"
                  className="bg-blue-50 text-blue-600"
                />
                <Chip value="Weekly" size="sm" variant="outlined" />
              </div>
            </div>
            <div className="relative h-80">
              <Chart type="bar" data={followerGrowthData} />
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Hashtag Performance and Top Tweets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Top Hashtags
              </Typography>
              <Button
                variant="text"
                className="flex items-center gap-2 text-blue-600 rounded-lg"
                size="sm"
              >
                View All
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {hashtagPerformance.map((hashtag, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center">
                    <Hash className="w-4 h-4 text-blue-500 mr-2" />
                    <Typography
                      variant="small"
                      className="font-medium text-gray-900"
                    >
                      {hashtag.tag}
                    </Typography>
                  </div>
                  <div className="text-right">
                    <Typography
                      variant="small"
                      className="font-medium text-gray-900"
                    >
                      {hashtag.mentions} mentions
                    </Typography>
                    <Typography variant="small" className="text-gray-600">
                      {hashtag.engagement} engagement
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Top Performing Tweets
              </Typography>
              <Button
                variant="text"
                className="flex items-center gap-2 text-blue-600 rounded-lg"
                size="sm"
              >
                View All
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {topTweets.map((tweet, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardBody className="p-4">
                    <Typography variant="small" className="text-gray-900 mb-3">
                      {tweet.content}
                    </Typography>
                    <div className="flex items-center justify-between text-xs text-gray-500">
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
                  </CardBody>
                </Card>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Twitter Insights */}
      <Card className="shadow-sm border border-gray-100">
        <CardBody className="p-6">
          <Typography variant="h6" className="text-gray-900 font-semibold mb-6">
            Twitter Insights
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TwitterLogo className="w-8 h-8 text-blue-600" />
              </div>
              <Typography
                variant="h6"
                className="text-gray-900 font-medium mb-2"
              >
                Best Time to Tweet
              </Typography>
              <Typography variant="h4" className="text-gray-900 font-bold">
                2:00 PM
              </Typography>
              <Typography variant="small" className="text-gray-600">
                Weekdays
              </Typography>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendUp className="w-8 h-8 text-green-600" />
              </div>
              <Typography
                variant="h6"
                className="text-gray-900 font-medium mb-2"
              >
                Growth Rate
              </Typography>
              <Typography variant="h4" className="text-gray-900 font-bold">
                +1.6%
              </Typography>
              <Typography variant="small" className="text-gray-600">
                This month
              </Typography>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hash className="w-8 h-8 text-purple-600" />
              </div>
              <Typography
                variant="h6"
                className="text-gray-900 font-medium mb-2"
              >
                Top Hashtag
              </Typography>
              <Typography variant="h4" className="text-gray-900 font-bold">
                #marketing
              </Typography>
              <Typography variant="small" className="text-gray-600">
                234 mentions
              </Typography>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <Typography
                variant="h6"
                className="text-gray-900 font-medium mb-2"
              >
                Avg. Engagement
              </Typography>
              <Typography variant="h4" className="text-gray-900 font-bold">
                3.2%
              </Typography>
              <Typography variant="small" className="text-gray-600">
                Per tweet
              </Typography>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Twitter;
