"use client";

import { useState } from "react";
import {
  Envelope,
  TrendUp,
  Clock,
  ArrowUpRight,
  Calendar,
  FilmStrip,
} from "@phosphor-icons/react";
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
      iconColor: "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400",
    },
    {
      title: "Avg. Response Time",
      value: "4.2 hrs",
      change: "Improved by 1.1 hrs",
      changeType: "positive",
      icon: Clock,
      iconColor:
        "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    },
    {
      title: "Unread Emails",
      value: "87",
      change: "12 from last week",
      changeType: "negative",
      icon: Envelope,
      iconColor:
        "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400",
    },
    {
      title: "Response Rate",
      value: "89%",
      change: "3% from last week",
      changeType: "positive",
      icon: TrendUp,
      iconColor:
        "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
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
      categoryColor:
        "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
    },
    {
      name: "Sarah Johnson",
      email: "support@service.com",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      emails: 65,
      category: "Support",
      responseTime: "6.1 hrs",
      categoryColor:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
    },
    {
      name: "Michael Brown",
      email: "newsletter@service.com",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      emails: 43,
      category: "Newsletter",
      responseTime: "-",
      categoryColor:
        "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
    },
    {
      name: "Emily Davis",
      email: "team@startup.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      emails: 32,
      category: "Personal",
      responseTime: "1.2 hrs",
      categoryColor:
        "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center mr-4">
            <Envelope className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Gmail Analytics
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Monitor your email patterns and communication insights
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
        {gmailStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Email Traffic by Day
            </h4>
            <select className="input text-sm">
              <option>Last 7 days</option>
              <option selected>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <Chart type="line" data={emailTrafficData} />
        </div>

        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Peak Email Times
            </h4>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Emails Received
            </div>
          </div>
          <Chart type="bar" data={peakEmailData} />
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <p className="text-sm text-red-800 dark:text-red-300">
              💡 Most emails arrive between 9-11 AM. Consider scheduling email
              checks during these times.
            </p>
          </div>
        </div>
      </div>

      {/* Email Categories and Response Patterns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Email Categories
            </h4>
            <div className="flex space-x-2">
              <button className="text-xs bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-2 py-1 rounded">
                Type
              </button>
              <button className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 rounded">
                Priority
              </button>
            </div>
          </div>
          <Chart type="pie" data={emailCategoriesData} />
        </div>

        <div className="card p-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
            Email Productivity Insights
          </h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Average Daily Emails
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                42
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Busiest Day
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                Tuesday
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Processing Time
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                2.3 hrs/day
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Spam Filtered
              </span>
              <span className="text-sm font-bold text-green-600 dark:text-green-400">
                156 emails
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Senders Table */}
      <div className="card p-6">
        <div className="flex justify-between items-center mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white">
            Top Email Senders
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
                  Sender
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Emails
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Avg. Response Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {topSenders.map((sender, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={sender.avatar || "/placeholder.svg"}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {sender.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {sender.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {sender.emails}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${sender.categoryColor}`}
                    >
                      {sender.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {sender.responseTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
                      <FilmStrip className="w-4 h-4 mr-1" />
                      Filter
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Email Management Tips */}
      <div className="card p-6">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-6">
          Email Management Recommendations
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-full mr-3">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h5 className="font-medium text-gray-900 dark:text-white">
                Time Management
              </h5>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
              Set specific times for checking emails (9 AM, 1 PM, 5 PM) to
              improve productivity and reduce distractions.
            </p>
            <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
              RECOMMENDED
            </span>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-100 dark:border-yellow-800">
            <div className="flex items-center mb-3">
              <div className="bg-yellow-100 dark:bg-yellow-900/40 p-2 rounded-full mr-3">
                <FilmStrip className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h5 className="font-medium text-gray-900 dark:text-white">
                Email Filters
              </h5>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
              Create filters for newsletters and marketing emails to
              automatically organize your inbox and reduce clutter.
            </p>
            <span className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">
              HIGH PRIORITY
            </span>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-100 dark:border-green-800">
            <div className="flex items-center mb-3">
              <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-full mr-3">
                <TrendUp className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h5 className="font-medium text-gray-900 dark:text-white">
                Response Templates
              </h5>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
              Create templates for common responses to reduce your average
              response time from 4.2 hours to under 2 hours.
            </p>
            <span className="text-xs text-green-600 dark:text-green-400 font-medium">
              EFFICIENCY BOOST
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gmail;
