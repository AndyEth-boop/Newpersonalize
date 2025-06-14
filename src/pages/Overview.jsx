import {
  Users,
  Heart,
  Clock,
  Envelope,
  ArrowUpRight,
  Plus,
  ArrowsCounterClockwiseIcon,
  FacebookLogo,
  InstagramLogo,
  XLogo,
} from "@phosphor-icons/react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
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
        borderRadius: 8,
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

  const platforms = [
    {
      name: "Facebook",
      icon: <FacebookLogo size={32} color="#3B82F6" weight="fill" />,
      description:
        "Track post performance, engagement trends, and follower growth.",
      color: "blue",
      connected: false,
    },
    {
      name: "Instagram",
      icon: <InstagramLogo size={32} color="#df4e4e" weight="fill" />,
      description:
        "Analyze post reach, story views, and optimal posting times. Don't miss",
      color: "purple",
      connected: false,
    },
    {
      name: "Twitter",
      icon: <XLogo size={32} color="#0a0a0a" weight="fill" />,
      description:
        "Monitor tweet engagement, follower changes, and hashtag performance.",
      color: "blue",
      connected: false,
    },
    {
      name: "Gmail",
      icon: "📧",
      description:
        "Analyze email patterns, frequent senders, and response times.",
      color: "red",
      connected: false,
    },
  ];

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

  const recommendations = [
    {
      title: "Posting Strategy",
      description:
        "Based on your audience activity, we recommend increasing your posting frequency to 3-4 times per week on Facebook and 5-7 times per week on Instagram.",
      priority: "MEDIUM",
      color: "blue",
      icon: "📅",
    },
    {
      title: "Optimal Posting Times",
      description:
        "Your audience is most active between 1:30-3:30 PM on weekdays. Schedule 70% of your posts during this window for maximum engagement.",
      priority: "HIGH",
      color: "purple",
      icon: "⏰",
    },
    {
      title: "Email Management",
      description:
        "87 unread emails detected. Consider setting up filters for frequent senders and allocating specific times for email management.",
      priority: "HIGH",
      color: "red",
      icon: "📧",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Account Connection Section */}
      <Card className="shadow-sm border border-gray-100">
        <CardBody className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <Typography variant="h5" className="text-gray-900 font-bold">
                Connect Your Accounts
              </Typography>
              <Typography variant="small" className="text-gray-600 mt-1">
                Start tracking your social media performance
              </Typography>
            </div>
            <Button
              variant="text"
              className="flex items-center gap-2 text-blue-600 rounded-lg"
            >
              <ArrowsCounterClockwiseIcon className="w-4 h-4" />
              Refresh Data
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <Card
                key={platform.name}
                className="border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <CardBody className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{platform.icon}</span>
                    <Typography variant="h6" className="text-gray-900">
                      {platform.name}
                    </Typography>
                  </div>
                  <Typography variant="small" className="text-gray-600 mb-4">
                    {platform.description}
                  </Typography>
                  <Button
                    className={`flex align-middle text-center justify-center w-full rounded-lg p-1 bg-${platform.color}-600 hover:bg-${platform.color}-700`}
                    size="sm"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Followers"
          value="24,589"
          change="12.5% from last week"
          changeType="positive"
          icon={Users}
          iconColor="bg-blue-500"
        />
        <StatCard
          title="Engagement Rate"
          value="4.8%"
          change="0.6% from last week"
          changeType="positive"
          icon={Heart}
          iconColor="bg-purple-500"
        />
        <StatCard
          title="Optimal Post Time"
          value="2:30 PM"
          change="Based on last 30 days"
          icon={Clock}
          iconColor="bg-green-500"
        />
        <StatCard
          title="Emails Received"
          value="1,248"
          change="8.3% from last week"
          changeType="negative"
          icon={Envelope}
          iconColor="bg-red-500"
        />
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
                  value="7 Days"
                  size="sm"
                  className="bg-blue-50 text-blue-600"
                />
                <Chip value="30 Days" size="sm" variant="outlined" />
                <Chip value="90 Days" size="sm" variant="outlined" />
              </div>
            </div>
            <div className="relative h-80">
              <Chart type="line" data={engagementData} />
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
                  className="bg-purple-50 text-purple-600"
                />
                <Chip value="Weekly" size="sm" variant="outlined" />
              </div>
            </div>
            <div className="relative h-80">
              <Chart type="bar" data={followerData} />
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Posts */}
        <Card className="shadow-sm border border-gray-100">
          <CardBody className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Typography variant="h6" className="text-gray-900 font-semibold">
                Top Performing Posts
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
              {topPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <Typography
                      variant="small"
                      className="font-medium text-gray-900"
                    >
                      {post.title}
                    </Typography>
                    <Typography variant="small" className="text-gray-600">
                      {post.reach.toLocaleString()} reach
                    </Typography>
                  </div>
                  <Chip
                    value={post.engagement.toLocaleString()}
                    size="sm"
                    className={
                      post.status === "high"
                        ? "bg-green-50 text-green-600"
                        : "bg-yellow-50 text-yellow-600"
                    }
                  />
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Email Senders Chart */}
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
            <div className="relative h-80">
              <Chart type="doughnut" data={emailSendersData} />
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Recommendations Section */}
      <Card className="shadow-sm border border-gray-100">
        <CardBody className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <Typography variant="h5" className="text-gray-900 font-bold">
                Personalized Recommendations
              </Typography>
              <Typography variant="small" className="text-gray-600 mt-1">
                AI-powered insights to boost your performance
              </Typography>
            </div>
            <Button
              variant="text"
              className="flex items-center gap-2 text-blue-600 rounded-lg"
            >
              <ArrowUpRight className="w-4 h-4" />
              Refresh
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((recommendation, index) => (
              <Card
                key={index}
                className={`border-l-4 border-l-${recommendation.color}-500 bg-${recommendation.color}-50/50 hover:shadow-md transition-all duration-300`}
              >
                <CardBody className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`bg-${recommendation.color}-100 p-3 rounded-xl mr-4`}
                    >
                      <span className="text-lg">{recommendation.icon}</span>
                    </div>
                    <div>
                      <Typography
                        variant="h6"
                        className="text-gray-900 font-semibold"
                      >
                        {recommendation.title}
                      </Typography>
                      <Chip
                        value={`${recommendation.priority} PRIORITY`}
                        size="sm"
                        className={`bg-${recommendation.color}-100 text-${recommendation.color}-600 mt-1`}
                      />
                    </div>
                  </div>
                  <Typography variant="small" className="text-gray-700 mb-4">
                    {recommendation.description}
                  </Typography>
                  <Button
                    size="sm"
                    className={`bg-${recommendation.color}-600 hover:bg-${recommendation.color}-700 rounded-lg`}
                  >
                    View Details
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Overview;
