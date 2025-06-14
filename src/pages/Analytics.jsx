"use client";

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
      iconColor: "bg-blue-500",
    },
    {
      title: "Engagement Rate",
      value: "4.8%",
      change: "0.6% from last month",
      changeType: "positive",
      icon: Heart,
      iconColor: "bg-purple-500",
    },
    {
      title: "Total Followers",
      value: "24,589",
      change: "1,234 new followers",
      changeType: "positive",
      icon: Users,
      iconColor: "bg-green-500",
    },
    {
      title: "Total Shares",
      value: "3,456",
      change: "18.5% from last month",
      changeType: "positive",
      icon: Share,
      iconColor: "bg-orange-500",
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
        borderRadius: 8,
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
        borderRadius: 8,
      },
    ],
  };

  const insights = [
    {
      title: "Video Content Dominance",
      description:
        "Video posts generate 40% more engagement than other content types",
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
      description: "Posts between 3-6 PM show 35% more engagement",
      impact: "Medium",
      trend: "neutral",
    },
    {
      title: "Cross-Platform Consistency",
      description:
        "Maintaining consistent branding across platforms improved recognition by 18%",
      impact: "Medium",
      trend: "up",
    },
  ];

  const quickActions = [
    {
      title: "Schedule Posts",
      description: "Plan content for optimal times",
      color: "blue",
      icon: Calendar,
    },
    {
      title: "Analyze Competitors",
      description: "Compare performance metrics",
      color: "purple",
      icon: ChartLine,
    },
    {
      title: "Export Report",
      description: "Download detailed analytics",
      color: "green",
      icon: Download,
    },
    {
      title: "Set Goals",
      description: "Define performance targets",
      color: "orange",
      icon: TrendUp,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <ChartLine className="w-6 h-6 text-white" />
          </div>
          <div>
            <Typography variant="h4" className="text-gray-900 font-bold">
              Advanced Analytics
            </Typography>
            <Typography variant="small" className="text-gray-600">
              Deep insights into your social media performance
            </Typography>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Select value={selectedPlatform} onChange={setSelectedPlatform}>
            <Option value="all">All Platforms</Option>
            <Option value="facebook">Facebook</Option>
            <Option value="instagram">Instagram</Option>
            <Option value="twitter">Twitter</Option>
          </Select>

          <Select value={timeRange} onChange={setTimeRange}>
            <Option value="7">Last 7 days</Option>
            <Option value="30">Last 30 days</Option>
            <Option value="90">Last 90 days</Option>
          </Select>

          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
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
        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Platform Comparison
              </Typography>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <Typography variant="small" className="text-gray-600">
                  Engagement Rate
                </Typography>
              </div>
            </div>
            <div className="relative h-80">
              <Chart type="doughnut" data={platformComparisonData} />
            </div>
          </CardBody>
        </Card>

        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Follower Growth Trends
              </Typography>
              <div className="flex space-x-2">
                <Chip
                  value="Facebook"
                  size="sm"
                  className="bg-blue-50 text-blue-600"
                />
                <Chip
                  value="Instagram"
                  size="sm"
                  className="bg-purple-50 text-purple-600"
                />
                <Chip
                  value="Twitter"
                  size="sm"
                  className="bg-cyan-50 text-cyan-600"
                />
              </div>
            </div>
            <div className="relative h-80">
              <Chart type="line" data={growthTrendData} />
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Secondary Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Engagement by Time of Day
              </Typography>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            <div className="relative h-80">
              <Chart type="bar" data={engagementByTimeData} />
            </div>
            <Card className="mt-4 bg-green-50 border border-green-200">
              <CardBody className="p-4">
                <Typography variant="small" className="text-green-800">
                  💡 Peak engagement occurs between 3-6 PM. Schedule important
                  posts during this window.
                </Typography>
              </CardBody>
            </Card>
          </CardBody>
        </Card>

        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Content Performance by Type
              </Typography>
              <Button
                variant="text"
                className="flex items-center gap-2 text-blue-600 rounded-lg"
                size="sm"
              >
                View Details
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="relative h-80">
              <Chart type="bar" data={contentPerformanceData} />
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Insights and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="shadow-sm border border-gray-100">
            <CardBody className="p-6">
              <Typography
                variant="h6"
                className="text-gray-900 font-semibold mb-6"
              >
                Key Performance Insights
              </Typography>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <Card
                    key={index}
                    className="bg-gray-50 border border-gray-200"
                  >
                    <CardBody className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <Typography
                          variant="h6"
                          className="text-gray-900 font-medium"
                        >
                          {insight.title}
                        </Typography>
                        <Chip
                          value={`${insight.impact} Impact`}
                          size="sm"
                          className={
                            insight.impact === "High"
                              ? "bg-red-50 text-red-600"
                              : "bg-yellow-50 text-yellow-600"
                          }
                        />
                      </div>
                      <Typography variant="small" className="text-gray-600">
                        {insight.description}
                      </Typography>
                      <div className="flex items-center mt-2">
                        <div
                          className={`w-3 h-3 rounded-full mr-2 ${
                            insight.trend === "up"
                              ? "bg-green-500"
                              : insight.trend === "down"
                              ? "bg-red-500"
                              : "bg-yellow-500"
                          }`}
                        ></div>
                        <Typography variant="small" className="text-gray-500">
                          Trending{" "}
                          {insight.trend === "up"
                            ? "up"
                            : insight.trend === "down"
                            ? "down"
                            : "stable"}
                        </Typography>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <Typography
              variant="h6"
              className="text-gray-900 font-semibold mb-6"
            >
              Quick Actions
            </Typography>
            <div className="space-y-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Card
                    key={index}
                    className={`bg-${action.color}-50 border border-${action.color}-200 hover:shadow-md transition-all duration-300 cursor-pointer`}
                  >
                    <CardBody className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`bg-${action.color}-100 p-2 rounded-lg`}
                          >
                            <Icon
                              className={`w-5 h-5 text-${action.color}-600`}
                            />
                          </div>
                          <div>
                            <Typography
                              variant="small"
                              className={`text-${action.color}-900 font-medium`}
                            >
                              {action.title}
                            </Typography>
                            <Typography
                              variant="small"
                              className={`text-${action.color}-700`}
                            >
                              {action.description}
                            </Typography>
                          </div>
                        </div>
                        <ArrowUpRight
                          className={`w-5 h-5 text-${action.color}-600`}
                        />
                      </div>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
