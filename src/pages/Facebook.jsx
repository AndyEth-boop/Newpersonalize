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

const Facebook = () => {
  const [timeRange, setTimeRange] = useState("30");

  const facebookStats = [
    {
      title: "Page Likes",
      value: "12,456",
      change: "234 this week",
      changeType: "positive",
      icon: Users,
      iconColor: "bg-blue-600",
    },
    {
      title: "Post Reach",
      value: "24,789",
      change: "12% from last week",
      changeType: "positive",
      icon: Eye,
      iconColor: "bg-green-500",
    },
    {
      title: "Engagement Rate",
      value: "5.2%",
      change: "0.3% from last week",
      changeType: "negative",
      icon: Heart,
      iconColor: "bg-purple-500",
    },
    {
      title: "Shares",
      value: "1,234",
      change: "8% from last week",
      changeType: "positive",
      icon: Share,
      iconColor: "bg-orange-500",
    },
  ];

  const engagementByTypeData = {
    labels: ["Text", "Image", "Video", "Link"],
    datasets: [
      {
        label: "Reach",
        data: [1200, 1800, 2400, 900],
        backgroundColor: "rgba(59, 130, 246, 0.7)",
        borderRadius: 8,
      },
      {
        label: "Engagement",
        data: [300, 450, 600, 200],
        backgroundColor: "rgba(16, 185, 129, 0.7)",
        borderRadius: 8,
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
        borderRadius: 8,
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
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <FacebookLogo className="w-6 h-6 text-white" />
          </div>
          <div>
            <Typography variant="h4" className="text-gray-900 font-bold">
              Facebook Analytics
            </Typography>
            <Typography variant="small" className="text-gray-600">
              Track your Facebook page performance and engagement
            </Typography>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Select value={timeRange} onChange={setTimeRange}>
            <Option value="7">Last 7 days</Option>
            <Option value="30">Last 30 days</Option>
            <Option value="90">Last 90 days</Option>
          </Select>

          <Button className="bg-blue-600 rounded-lg flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Custom Range
          </Button>
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
        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Engagement by Post Type
              </Typography>
              <Select label="Time Period" size="sm">
                <Option>Last 7 days</Option>
                <Option>Last 30 days</Option>
                <Option>Last 90 days</Option>
              </Select>
            </div>
            <div className="relative h-80">
              <Chart type="bar" data={engagementByTypeData} />
            </div>
          </CardBody>
        </Card>

        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Optimal Posting Times
              </Typography>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <Typography variant="small" className="text-gray-600">
                  Engagement Rate
                </Typography>
              </div>
            </div>
            <div className="relative h-80">
              <Chart type="line" data={postingTimesData} />
            </div>
            <Card className="mt-4 bg-blue-50 border border-blue-200">
              <CardBody className="p-4">
                <Typography variant="small" className="text-blue-800">
                  💡 Recommendation: Post between 1:30 PM - 3:30 PM on weekdays
                  for maximum engagement
                </Typography>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>

      {/* Demographics and Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Follower Demographics
              </Typography>
              <div className="flex space-x-2">
                <Chip
                  value="Age"
                  size="sm"
                  className="bg-blue-50 text-blue-600"
                />
                <Chip value="Gender" size="sm" variant="outlined" />
              </div>
            </div>
            <div className="relative h-80">
              <Chart type="bar" data={demographicsData} />
            </div>
          </CardBody>
        </Card>

        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <Typography
              variant="h6"
              className="text-gray-900 font-semibold mb-6"
            >
              Page Insights Summary
            </Typography>
            <div className="space-y-4">
              {[
                { label: "Total Page Views", value: "45,678" },
                { label: "Page Likes Growth", value: "+234", trend: true },
                { label: "Post Engagement", value: "8,945" },
                { label: "Video Views", value: "23,456" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-xl"
                >
                  <Typography
                    variant="small"
                    className="font-medium text-gray-700"
                  >
                    {item.label}
                  </Typography>
                  <div className="flex items-center space-x-2">
                    {item.trend && (
                      <TrendUp className="w-4 h-4 text-green-600" />
                    )}
                    <Typography
                      variant="small"
                      className={`font-bold ${
                        item.trend ? "text-green-600" : "text-gray-900"
                      }`}
                    >
                      {item.value}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Post Performance Table */}
      <Card className="shadow-sm border border-gray-100">
        <CardBody className="p-6">
          <div className="flex justify-between items-center mb-6">
            <Typography variant="h6" className="text-gray-900 font-semibold">
              Post Performance
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
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">
                    Post
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">
                    Reach
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">
                    Engagement
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">
                    Link Clicks
                  </th>
                </tr>
              </thead>
              <tbody>
                {postPerformance.map((post, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <Typography
                        variant="small"
                        className="font-medium text-gray-900"
                      >
                        {post.title}
                      </Typography>
                    </td>
                    <td className="py-4 px-4">
                      <Typography variant="small" className="text-gray-600">
                        {post.date}
                      </Typography>
                    </td>
                    <td className="py-4 px-4">
                      <Typography variant="small" className="text-gray-600">
                        {post.reach.toLocaleString()}
                      </Typography>
                    </td>
                    <td className="py-4 px-4">
                      <Chip
                        value={post.engagement.toLocaleString()}
                        size="sm"
                        className={
                          post.status === "high"
                            ? "bg-green-50 text-green-600"
                            : "bg-yellow-50 text-yellow-600"
                        }
                      />
                    </td>
                    <td className="py-4 px-4">
                      <Typography variant="small" className="text-gray-600">
                        {post.clicks.toLocaleString()}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Facebook;
