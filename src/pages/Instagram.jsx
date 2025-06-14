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
import {
  Card,
  CardBody,
  Typography,
  Button,
  Select,
  Option,
  Chip,
} from "@material-tailwind/react";
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
      iconColor: "bg-purple-500",
    },
    {
      title: "Post Reach",
      value: "14,567",
      change: "8% from last week",
      changeType: "positive",
      icon: Eye,
      iconColor: "bg-pink-500",
    },
    {
      title: "Engagement Rate",
      value: "6.8%",
      change: "1.2% from last week",
      changeType: "positive",
      icon: Heart,
      iconColor: "bg-red-500",
    },
    {
      title: "Story Views",
      value: "3,245",
      change: "15% from last week",
      changeType: "positive",
      icon: Play,
      iconColor: "bg-orange-500",
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
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
            <InstagramLogo className="w-6 h-6 text-white" />
          </div>
          <div>
            <Typography variant="h4" className="text-gray-900 font-bold">
              Instagram Analytics
            </Typography>
            <Typography variant="small" className="text-gray-600">
              Monitor your Instagram performance and audience engagement
            </Typography>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Select value={timeRange} onChange={setTimeRange}>
            <Option value="7">Last 7 days</Option>
            <Option value="30">Last 30 days</Option>
            <Option value="90">Last 90 days</Option>
          </Select>

          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Custom Range
          </Button>
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
        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Engagement by Content Type
              </Typography>
              <Select label="Time Period" size="sm">
                <Option>Last 7 days</Option>
                <Option>Last 30 days</Option>
                <Option>Last 90 days</Option>
              </Select>
            </div>
            <div className="relative h-80">
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
          </CardBody>
        </Card>

        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Story Performance
              </Typography>
              <Select label="Time Period" size="sm">
                <Option>Last 7 days</Option>
                <Option>Last 30 days</Option>
                <Option>Last 90 days</Option>
              </Select>
            </div>
            <div className="relative h-80">
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
            </div>
            <Card className="mt-4 bg-purple-50 border border-purple-200">
              <CardBody className="p-4">
                <Typography variant="small" className="text-purple-800">
                  💡 Recommendation: Post stories in the evening (6-9 PM) for
                  higher completion rates
                </Typography>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>

      {/* Hashtag Performance and Recent Posts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Top Performing Hashtags
              </Typography>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <Typography variant="small" className="text-gray-600">
                  Engagement
                </Typography>
              </div>
            </div>
            <div className="space-y-4">
              {hashtagPerformance.map((hashtag, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <Typography
                      variant="small"
                      className="font-medium text-gray-700"
                    >
                      {hashtag.tag}
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-medium text-gray-700"
                    >
                      {hashtag.engagements} engagements
                    </Typography>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${hashtag.percentage}%` }}
                    ></div>
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
                Recent Posts
              </Typography>
              <div className="flex space-x-2">
                <Chip
                  value="All"
                  size="sm"
                  className={
                    contentFilter === "all"
                      ? "bg-purple-50 text-purple-600"
                      : ""
                  }
                  onClick={() => setContentFilter("all")}
                />
                <Chip
                  value="Photos"
                  size="sm"
                  variant="outlined"
                  onClick={() => setContentFilter("photos")}
                />
                <Chip
                  value="Videos"
                  size="sm"
                  variant="outlined"
                  onClick={() => setContentFilter("videos")}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {recentPosts.map((post, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt="Instagram post"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                    <div className="text-white text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Heart className="w-4 h-4 mr-1" />
                        <Typography variant="small" className="font-bold">
                          {post.likes.toLocaleString()}
                        </Typography>
                      </div>
                      <Typography variant="small">
                        {post.comments} Comments
                      </Typography>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Audience Insights */}
      <Card className="shadow-sm border border-gray-100">
        <CardBody className="p-6">
          <Typography variant="h6" className="text-gray-900 font-semibold mb-6">
            Audience Insights
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <Typography
                variant="h6"
                className="text-gray-900 font-medium mb-2"
              >
                Top Age Group
              </Typography>
              <Typography variant="h4" className="text-gray-900 font-bold">
                25-34
              </Typography>
              <Typography variant="small" className="text-gray-600">
                35% of followers
              </Typography>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <Typography
                variant="h6"
                className="text-gray-900 font-medium mb-2"
              >
                Peak Activity
              </Typography>
              <Typography variant="h4" className="text-gray-900 font-bold">
                7-9 PM
              </Typography>
              <Typography variant="small" className="text-gray-600">
                Weekdays
              </Typography>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <Typography
                variant="h6"
                className="text-gray-900 font-medium mb-2"
              >
                Avg. Engagement
              </Typography>
              <Typography variant="h4" className="text-gray-900 font-bold">
                6.8%
              </Typography>
              <Typography variant="small" className="text-gray-600">
                Above industry avg
              </Typography>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Instagram;
