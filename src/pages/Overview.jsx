import {
  Users,
  Heart,
  Clock,
  Envelope,
  ArrowUpRight,
} from "@phosphor-icons/react";
import StatCard from "../components/StatCard";
import Chart from "../components/Chart";


const Overview = () => {
  // Chart data
  const engagementData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Likes",
        data: [120, 190, 170, 210, 180, 150, 130],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Comments",
        data: [80, 110, 90, 120, 100, 70, 60],
        borderColor: "rgb(139, 92, 246)",
        backgroundColor: "rgba(139, 92, 246, 0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Shares",
        data: [40, 60, 50, 70, 55, 45, 35],
        borderColor: "rgb(16, 185, 129)",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const followerData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Followers",
        data: [320, 450, 380, 520, 480, 560],
        backgroundColor: "rgba(99, 102, 241, 0.7)",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 1,
      },
    ],
  };

  const emailSendersData = {
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

  const topPosts = [
    {
      title: "Summer Sale Announcement",
      engagement: 4589,
      reach: 12456,
      status: "high",
    },
    {
      title: "New Product Launch",
      engagement: 3872,
      reach: 10987,
      status: "high",
    },
    {
      title: "Customer Testimonial",
      engagement: 2145,
      reach: 8765,
      status: "medium",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Account Connection Section */}
      <div className="card p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Connect Your Accounts
          </h3>
          <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            Refresh Data
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: "Facebook",
              icon: "📘",
              description:
                "Track post performance, engagement trends, and follower growth.",
              color: "bg-blue-600 hover:bg-blue-700",
            },
            {
              name: "Instagram",
              icon: "📷",
              description:
                "Analyze post reach, story views, and optimal posting times.",
              color:
                "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
            },
            {
              name: "Twitter",
              icon: "🐦",
              description:
                "Monitor tweet engagement, follower changes, and hashtag performance.",
              color: "bg-blue-400 hover:bg-blue-500",
            },
            {
              name: "Gmail",
              icon: "📧",
              description:
                "Analyze email patterns, frequent senders, and response times.",
              color: "bg-red-500 hover:bg-red-600",
            },
          ].map((platform) => (
            <div
              key={platform.name}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{platform.icon}</span>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {platform.name}
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {platform.description}
              </p>
              <button
                className={`w-full text-white py-2 px-4 rounded-lg transition ${platform.color}`}
              >
                Connect Account
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Followers"
          value="24,589"
          change="12.5% from last week"
          changeType="positive"
          icon={Users}
          iconColor="bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
        />
        <StatCard
          title="Engagement Rate"
          value="4.8%"
          change="0.6% from last week"
          changeType="positive"
          icon={Heart}
          iconColor="bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
        />
        <StatCard
          title="Optimal Post Time"
          value="2:30 PM"
          change="Based on last 30 days"
          icon={Clock}
          iconColor="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
        />
        <StatCard
          title="Emails Received"
          value="1,248"
          change="8.3% from last week"
          changeType="negative"
          icon={Envelope}
          iconColor="bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Engagement Trends
            </h4>
            <div className="flex space-x-2">
              <button className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 rounded">
                Likes
              </button>
              <button className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 rounded">
                Comments
              </button>
              <button className="text-xs bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-2 py-1 rounded">
                Shares
              </button>
            </div>
          </div>
          <Chart type="line" data={engagementData} />
        </div>

        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Follower Growth
            </h4>
            <div className="flex space-x-2">
              <button className="text-xs bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-2 py-1 rounded">
                7 Days
              </button>
              <button className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 rounded">
                30 Days
              </button>
              <button className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 rounded">
                90 Days
              </button>
            </div>
          </div>
          <Chart type="bar" data={followerData} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Posts */}
        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Top Performing Posts
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
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Post
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Engagement
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Reach
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {topPosts.map((post, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {post.title}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          post.status === "high"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                        }`}
                      >
                        {post.engagement.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {post.reach.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Email Senders Chart */}
        <div className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Top Email Senders
            </h4>
            <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm flex items-center">
              View All
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <Chart type="doughnut" data={emailSendersData} />
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="card p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Personalized Recommendations
          </h3>
          <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            Refresh
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Posting Strategy",
              description:
                "Based on your audience activity, we recommend increasing your posting frequency to 3-4 times per week on Facebook and 5-7 times per week on Instagram.",
              priority: "MEDIUM PRIORITY",
              color: "blue",
              icon: "📅",
            },
            {
              title: "Optimal Posting Times",
              description:
                "Your audience is most active between 1:30-3:30 PM on weekdays. Schedule 70% of your posts during this window for maximum engagement.",
              priority: "HIGH PRIORITY",
              color: "purple",
              icon: "⏰",
            },
            {
              title: "Email Management",
              description:
                "87 unread emails detected. Consider setting up filters for frequent senders and allocating specific times for email management.",
              priority: "HIGH PRIORITY",
              color: "red",
              icon: "📧",
            },
          ].map((recommendation, index) => (
            <div
              key={index}
              className={`bg-${recommendation.color}-50 dark:bg-${recommendation.color}-900/20 rounded-lg p-4 border border-${recommendation.color}-100 dark:border-${recommendation.color}-800`}
            >
              <div className="flex items-center mb-3">
                <div
                  className={`bg-${recommendation.color}-100 dark:bg-${recommendation.color}-900/40 p-2 rounded-full mr-3`}
                >
                  <span className="text-lg">{recommendation.icon}</span>
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {recommendation.title}
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                {recommendation.description}
              </p>
              <div className="flex justify-between items-center">
                <span
                  className={`text-xs text-${recommendation.color}-600 dark:text-${recommendation.color}-400 font-medium`}
                >
                  {recommendation.priority}
                </span>
                <button
                  className={`text-xs bg-${recommendation.color}-600 hover:bg-${recommendation.color}-700 text-white py-1 px-3 rounded-full transition`}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
