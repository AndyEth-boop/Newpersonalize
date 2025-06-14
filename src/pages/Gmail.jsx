"use client";

import { useState } from "react";
import {
  Envelope,
  TrendUp,
  Clock,
  ArrowUpRight,
  Calendar,
  FunnelX,
} from "@phosphor-icons/react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Select,
  Option,
  Chip,
  Avatar,
} from "@material-tailwind/react";
import StatCard from "../components/StatCard";
import Chart from "../components/Chart";

const Gmail = () => {
  const [timeRange, setTimeRange] = useState("30");

  const gmailStats = [
    {
      title: "Emails Received",
      value: "1,248",
      change: "8.3% from last week",
      changeType: "negative",
      icon: Envelope,
      iconColor: "bg-red-500",
    },
    {
      title: "Avg. Response Time",
      value: "4.2 hrs",
      change: "Improved by 1.1 hrs",
      changeType: "positive",
      icon: Clock,
      iconColor: "bg-green-500",
    },
    {
      title: "Unread Emails",
      value: "87",
      change: "12 from last week",
      changeType: "negative",
      icon: Envelope,
      iconColor: "bg-yellow-500",
    },
    {
      title: "Response Rate",
      value: "89%",
      change: "3% from last week",
      changeType: "positive",
      icon: TrendUp,
      iconColor: "bg-blue-500",
    },
  ];

  const emailTrafficData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Received",
        data: [320, 290, 350, 280],
        borderColor: "#EF4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Responded",
        data: [280, 250, 300, 240],
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const peakEmailData = {
    labels: ["6-9AM", "9-12PM", "12-3PM", "3-6PM", "6-9PM", "9PM-12AM"],
    datasets: [
      {
        label: "Emails Received",
        data: [120, 210, 180, 150, 90, 40],
        backgroundColor: "rgba(239, 68, 68, 0.7)",
        borderRadius: 8,
      },
    ],
  };

  const emailCategoriesData = {
    labels: ["Marketing", "Support", "Newsletters", "Personal", "Other"],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          "#3B82F6",
          "#8B5CF6",
          "#10B981",
          "#EF4444",
          "#6B7280",
        ],
        borderWidth: 0,
      },
    ],
  };

  const topSenders = [
    {
      name: "John Smith",
      email: "marketing@company.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      emails: 87,
      category: "Marketing",
      responseTime: "2.5 hrs",
      categoryColor: "bg-green-50 text-green-600",
    },
    {
      name: "Sarah Johnson",
      email: "support@service.com",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      emails: 65,
      category: "Support",
      responseTime: "6.1 hrs",
      categoryColor: "bg-yellow-50 text-yellow-600",
    },
    {
      name: "Michael Brown",
      email: "newsletter@service.com",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      emails: 43,
      category: "Newsletter",
      responseTime: "-",
      categoryColor: "bg-blue-50 text-blue-600",
    },
    {
      name: "Emily Davis",
      email: "team@startup.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      emails: 32,
      category: "Personal",
      responseTime: "1.2 hrs",
      categoryColor: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-lg">
            <Envelope className="w-6 h-6 text-white" />
          </div>
          <div>
            <Typography variant="h4" className="text-gray-900 font-bold">
              Gmail Analytics
            </Typography>
            <Typography variant="small" className="text-gray-600">
              Monitor your email patterns and communication insights
            </Typography>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Select value={timeRange} onChange={setTimeRange}>
            <Option value="7">Last 7 days</Option>
            <Option value="30">Last 30 days</Option>
            <Option value="90">Last 90 days</Option>
          </Select>

          <Button className="bg-red-500 rounded-lg flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Custom Range
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {gmailStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Email Traffic by Day
              </Typography>
              <Select label="Time Period" size="sm">
                <Option>Last 7 days</Option>
                <Option>Last 30 days</Option>
                <Option>Last 90 days</Option>
              </Select>
            </div>
            <div className="relative h-80">
              <Chart type="line" data={emailTrafficData} />
            </div>
          </CardBody>
        </Card>

        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Peak Email Times
              </Typography>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <Typography variant="small" className="text-gray-600">
                  Emails Received
                </Typography>
              </div>
            </div>
            <div className="relative h-80">
              <Chart type="bar" data={peakEmailData} />
            </div>
            <Card className="mt-4 bg-red-50 border border-red-200">
              <CardBody className="p-4">
                <Typography variant="small" className="text-red-800">
                  💡 Most emails arrive between 9-11 AM. Consider scheduling
                  email checks during these times.
                </Typography>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>

      {/* Email Categories and Response Patterns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Email Categories
              </Typography>
              <div className="flex space-x-2">
                <Chip
                  value="Type"
                  size="sm"
                  className="bg-red-50 text-red-600"
                />
                <Chip value="Priority" size="sm" variant="outlined" />
              </div>
            </div>
            <div className="relative h-80">
              <Chart type="pie" data={emailCategoriesData} />
            </div>
          </CardBody>
        </Card>

        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <Typography
              variant="h6"
              className="text-gray-900 font-semibold mb-6"
            >
              Email Productivity Insights
            </Typography>
            <div className="space-y-4">
              {[
                { label: "Average Daily Emails", value: "42" },
                { label: "Busiest Day", value: "Tuesday" },
                { label: "Email Processing Time", value: "2.3 hrs/day" },
                {
                  label: "Spam Filtered",
                  value: "156 emails",
                  color: "text-green-600",
                },
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
                  <Typography
                    variant="small"
                    className={`font-bold ${item.color || "text-gray-900"}`}
                  >
                    {item.value}
                  </Typography>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Top Senders Table */}
      <Card className="shadow-sm border border-gray-100">
        <CardBody className="p-6">
          <div className="flex justify-between items-center mb-6">
            <Typography variant="h6" className="text-gray-900 font-semibold">
              Top Email Senders
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
                    Sender
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">
                    Emails
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">
                    Category
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">
                    Avg. Response Time
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {topSenders.map((sender, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <Avatar
                          src={sender.avatar || "/placeholder.svg"}
                          alt={sender.name}
                          size="sm"
                        />
                        <div>
                          <Typography
                            variant="small"
                            className="font-medium text-gray-900"
                          >
                            {sender.name}
                          </Typography>
                          <Typography variant="small" className="text-gray-600">
                            {sender.email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Typography variant="small" className="text-gray-600">
                        {sender.emails}
                      </Typography>
                    </td>
                    <td className="py-4 px-4">
                      <Chip
                        value={sender.category}
                        size="sm"
                        className={sender.categoryColor}
                      />
                    </td>
                    <td className="py-4 px-4">
                      <Typography variant="small" className="text-gray-600">
                        {sender.responseTime}
                      </Typography>
                    </td>
                    <td className="py-4 px-4">
                      <Button
                        variant="text"
                        size="sm"
                        className="text-blue-600 hover:text-blue-900 rounded-lg flex items-center gap-1"
                      >
                        <FunnelX className="w-4 h-4" />
                        Filter
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>

      {/* Email Management Tips */}
      <Card className="shadow-sm border border-gray-100">
        <CardBody className="p-6">
          <Typography variant="h6" className="text-gray-900 font-semibold mb-6">
            Email Management Recommendations
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Time Management",
                description:
                  "Set specific times for checking emails (9 AM, 1 PM, 5 PM) to improve productivity and reduce distractions.",
                icon: Clock,
                color: "blue",
                priority: "RECOMMENDED",
              },
              {
                title: "Email Filters",
                description:
                  "Create filters for newsletters and marketing emails to automatically organize your inbox and reduce clutter.",
                icon: FunnelX,
                color: "yellow",
                priority: "HIGH PRIORITY",
              },
              {
                title: "Response Templates",
                description:
                  "Create templates for common responses to reduce your average response time from 4.2 hours to under 2 hours.",
                icon: TrendUp,
                color: "green",
                priority: "EFFICIENCY BOOST",
              },
            ].map((tip, index) => {
              const Icon = tip.icon;
              return (
                <Card
                  key={index}
                  className={`bg-${tip.color}-50 border border-${tip.color}-200`}
                >
                  <CardBody className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`bg-${tip.color}-100 p-3 rounded-xl mr-4`}
                      >
                        <Icon className={`w-5 h-5 text-${tip.color}-600`} />
                      </div>
                      <Typography
                        variant="h6"
                        className="text-gray-900 font-medium"
                      >
                        {tip.title}
                      </Typography>
                    </div>
                    <Typography variant="small" className="text-gray-700 mb-4">
                      {tip.description}
                    </Typography>
                    <Chip
                      value={tip.priority}
                      size="sm"
                      className={`bg-${tip.color}-100 text-${tip.color}-600`}
                    />
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Gmail;
