"use client";

import { useState } from "react";
import {
  FileText,
  Download,
  Plus,
  X,
  TrendUp,
  Users,
  Heart,
  Eye,
  Share,
  FilmStrip,
} from "@phosphor-icons/react";
import Chart from "../components/Chart";
import { format, subDays } from "date-fns";

const CustomReport = () => {
  const [dateRange, setDateRange] = useState({
    start: format(subDays(new Date(), 30), "yyyy-MM-dd"),
    end: format(new Date(), "yyyy-MM-dd"),
  });

  const [selectedPlatforms, setSelectedPlatforms] = useState([
    "facebook",
    "instagram",
    "twitter",
  ]);
  const [selectedMetrics, setSelectedMetrics] = useState([
    "followers",
    "engagement",
    "reach",
  ]);
  const [reportName, setReportName] = useState("Custom Analytics Report");

  const platforms = [
    { id: "facebook", name: "Facebook", icon: "📘", color: "blue" },
    { id: "instagram", name: "Instagram", icon: "📷", color: "purple" },
    { id: "twitter", name: "Twitter", icon: "🐦", color: "sky" },
    { id: "gmail", name: "Gmail", icon: "📧", color: "red" },
  ];

  const metrics = [
    { id: "followers", name: "Followers", icon: Users },
    { id: "engagement", name: "Engagement", icon: Heart },
    { id: "reach", name: "Reach", icon: Eye },
    { id: "impressions", name: "Impressions", icon: Share },
  ];

  const togglePlatform = (platformId) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId)
        ? prev.FilmStrip((id) => id !== platformId)
        : [...prev, platformId]
    );
  };

  const toggleMetric = (metricId) => {
    setSelectedMetrics((prev) =>
      prev.includes(metricId)
        ? prev.FilmStrip((id) => id !== metricId)
        : [...prev, metricId]
    );
  };

  // Sample data for the custom report
  const customData = {
    followers: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: selectedPlatforms.map((platform) => {
        const platformData = platforms.find((p) => p.id === platform);
        return {
          label: platformData.name,
          data:
            platform === "facebook"
              ? [12200, 12300, 12400, 12456]
              : platform === "instagram"
              ? [8800, 8850, 8900, 8932]
              : platform === "twitter"
              ? [5300, 5350, 5400, 5432]
              : [0, 0, 0, 0],
          borderColor:
            platform === "facebook"
              ? "#3B82F6"
              : platform === "instagram"
              ? "#8B5CF6"
              : platform === "twitter"
              ? "#06B6D4"
              : "#EF4444",
          backgroundColor:
            platform === "facebook"
              ? "rgba(59, 130, 246, 0.1)"
              : platform === "instagram"
              ? "rgba(139, 92, 246, 0.1)"
              : platform === "twitter"
              ? "rgba(6, 182, 212, 0.1)"
              : "rgba(239, 68, 68, 0.1)",
          tension: 0.3,
          fill: true,
        };
      }),
    },
    engagement: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: selectedPlatforms.map((platform) => {
        const platformData = platforms.find((p) => p.id === platform);
        return {
          label: platformData.name,
          data:
            platform === "facebook"
              ? [4200, 4350, 4500, 4589]
              : platform === "instagram"
              ? [2800, 2950, 3100, 3210]
              : platform === "twitter"
              ? [1600, 1700, 1800, 1876]
              : [1100, 1150, 1200, 1248],
          backgroundColor:
            platform === "facebook"
              ? "rgba(59, 130, 246, 0.7)"
              : platform === "instagram"
              ? "rgba(139, 92, 246, 0.7)"
              : platform === "twitter"
              ? "rgba(6, 182, 212, 0.7)"
              : "rgba(239, 68, 68, 0.7)",
        };
      }),
    },
  };

  const summaryStats = {
    totalFollowers: selectedPlatforms.reduce((sum, platform) => {
      return (
        sum +
        (platform === "facebook"
          ? 12456
          : platform === "instagram"
          ? 8932
          : platform === "twitter"
          ? 5432
          : 0)
      );
    }, 0),
    totalEngagement: selectedPlatforms.reduce((sum, platform) => {
      return (
        sum +
        (platform === "facebook"
          ? 4589
          : platform === "instagram"
          ? 3210
          : platform === "twitter"
          ? 1876
          : platform === "gmail"
          ? 1248
          : 0)
      );
    }, 0),
    avgEngagementRate: 4.8,
    totalReach: 156789,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Custom Report Builder
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Create personalized analytics reports with custom metrics and date
              ranges
            </p>
          </div>
        </div>
        <button className="btn-primary flex items-center">
          <Download className="w-4 h-4 mr-2" />
          Generate Report
        </button>
      </div>

      {/* Report Configuration */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Report Configuration
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Basic Settings */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Report Name
              </label>
              <input
                type="text"
                value={reportName}
                onChange={(e) => setReportName(e.target.value)}
                className="input"
                placeholder="Enter report name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Date Range
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={dateRange.start}
                    onChange={(e) =>
                      setDateRange({ ...dateRange, start: e.target.value })
                    }
                    className="input"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={dateRange.end}
                    onChange={(e) =>
                      setDateRange({ ...dateRange, end: e.target.value })
                    }
                    className="input"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Platforms
              </label>
              <div className="flex flex-wrap gap-2">
                {platforms.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => togglePlatform(platform.id)}
                    className={`flex items-center px-3 py-2 rounded-lg border ${
                      selectedPlatforms.includes(platform.id)
                        ? `bg-${platform.color}-100 dark:bg-${platform.color}-900/20 border-${platform.color}-300 dark:border-${platform.color}-700 text-${platform.color}-800 dark:text-${platform.color}-300`
                        : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span className="mr-2">{platform.icon}</span>
                    {platform.name}
                    {selectedPlatforms.includes(platform.id) && (
                      <X className="w-4 h-4 ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics Selection */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Metrics
              </label>
              <div className="grid grid-cols-2 gap-3">
                {metrics.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <button
                      key={metric.id}
                      onClick={() => toggleMetric(metric.id)}
                      className={`flex items-center px-3 py-2 rounded-lg border ${
                        selectedMetrics.includes(metric.id)
                          ? "bg-primary-100 dark:bg-primary-900/20 border-primary-300 dark:border-primary-700 text-primary-800 dark:text-primary-300"
                          : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {metric.name}
                      {selectedMetrics.includes(metric.id) && (
                        <X className="w-4 h-4 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Chart Types
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["Line", "Bar", "Pie", "Radar"].map((chartType) => (
                  <button
                    key={chartType}
                    className={`flex items-center px-3 py-2 rounded-lg border ${
                      chartType === "Line"
                        ? "bg-primary-100 dark:bg-primary-900/20 border-primary-300 dark:border-primary-700 text-primary-800 dark:text-primary-300"
                        : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {chartType}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Additional Options
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    defaultChecked
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Include executive summary
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    defaultChecked
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Include recommendations
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    defaultChecked
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Compare to previous period
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Report Preview */}
      <div className="card p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Report Preview: {reportName}
          </h3>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {format(new Date(dateRange.start), "MMM d, yyyy")} -{" "}
            {format(new Date(dateRange.end), "MMM d, yyyy")}
          </div>
        </div>

        {/* Summary Stats */}
        {selectedMetrics.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {selectedMetrics.includes("followers") && (
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {summaryStats.totalFollowers.toLocaleString()}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Total Followers
                </p>
              </div>
            )}
            {selectedMetrics.includes("engagement") && (
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {summaryStats.totalEngagement.toLocaleString()}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Total Engagement
                </p>
              </div>
            )}
            {selectedMetrics.includes("engagement") && (
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {summaryStats.avgEngagementRate}%
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Avg. Engagement Rate
                </p>
              </div>
            )}
            {selectedMetrics.includes("reach") && (
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {summaryStats.totalReach.toLocaleString()}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Total Reach
                </p>
              </div>
            )}
          </div>
        )}

        {/* Charts */}
        <div className="space-y-6">
          {selectedMetrics.includes("followers") &&
            selectedPlatforms.length > 0 && (
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Follower Growth
                </h4>
                <Chart type="line" data={customData.followers} />
              </div>
            )}

          {selectedMetrics.includes("engagement") &&
            selectedPlatforms.length > 0 && (
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Engagement by Platform
                </h4>
                <Chart type="bar" data={customData.engagement} />
              </div>
            )}

          {selectedPlatforms.length === 0 && selectedMetrics.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <FilmStrip className="w-8 h-8 text-gray-400" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No Data to Display
              </h4>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                Select at least one platform and metric to generate your custom
                report preview.
              </p>
            </div>
          )}
        </div>

        {/* Add Section Button */}
        <div className="mt-6 flex justify-center">
          <button className="flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium">
            <Plus className="w-5 h-5 mr-2" />
            Add Custom Section
          </button>
        </div>
      </div>

      {/* Saved Reports */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Saved Report Templates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Weekly Performance",
              description: "Engagement and reach metrics across all platforms",
              lastGenerated: "2 days ago",
              platforms: ["Facebook", "Instagram", "Twitter"],
            },
            {
              name: "Instagram Growth",
              description:
                "Detailed analysis of Instagram follower growth and engagement",
              lastGenerated: "1 week ago",
              platforms: ["Instagram"],
            },
            {
              name: "Email Analytics",
              description: "Email response times and engagement patterns",
              lastGenerated: "2 weeks ago",
              platforms: ["Gmail"],
            },
          ].map((template, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
            >
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                {template.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {template.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {template.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                  >
                    {platform}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 dark:text-gray-400">
                  Last generated: {template.lastGenerated}
                </span>
                <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                  Load
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomReport;
