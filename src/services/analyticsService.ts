import { AnalyticMetric, ChartData, PostPerformance, Recommendation, SocialPlatform } from '../types';

// Mock data service for analytics
// In a real application, this would fetch data from an API

export const getOverviewMetrics = (): AnalyticMetric[] => {
  return [
    {
      label: 'Total Followers',
      value: 24589,
      change: 12.5,
      isPositive: true,
    },
    {
      label: 'Engagement Rate',
      value: 4.8,
      change: 0.6,
      isPositive: true,
    },
    {
      label: 'Optimal Post Time',
      value: 14.5, // 2:30 PM
      change: 0,
      isPositive: true,
    },
    {
      label: 'Emails Received',
      value: 1248,
      change: -8.3,
      isPositive: false,
    },
  ];
};

export const getEngagementChartData = (): ChartData => {
  return {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Likes',
        data: [120, 190, 170, 210, 180, 150, 130],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
      },
      {
        label: 'Comments',
        data: [80, 110, 90, 120, 100, 70, 60],
        borderColor: '#8B5CF6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
      },
      {
        label: 'Shares',
        data: [40, 60, 50, 70, 55, 45, 35],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
      },
    ],
  };
};

export const getFollowerGrowthChartData = (): ChartData => {
  return {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Followers',
        data: [320, 450, 380, 520, 480, 560],
        backgroundColor: 'rgba(99, 102, 241, 0.7)',
      },
    ],
  };
};

export const getTopPerformingPosts = (): PostPerformance[] => {
  return [
    {
      id: '1',
      title: 'Summer Sale Announcement',
      platform: 'facebook',
      engagement: 4589,
      reach: 12456,
      date: new Date('2023-06-15T14:30:00'),
    },
    {
      id: '2',
      title: 'New Product Launch',
      platform: 'instagram',
      engagement: 3872,
      reach: 10987,
      date: new Date('2023-06-12T10:15:00'),
    },
    {
      id: '3',
      title: 'Customer Testimonial',
      platform: 'twitter',
      engagement: 2145,
      reach: 8765,
      date: new Date('2023-06-08T15:45:00'),
    },
  ];
};

export const getRecommendations = (): Recommendation[] => {
  return [
    {
      id: '1',
      title: 'Posting Strategy',
      description:
        'Based on your audience activity, we recommend increasing your posting frequency to 3-4 times per week on Facebook and 5-7 times per week on Instagram.',
      priority: 'MEDIUM',
      category: 'content',
      icon: 'calendar',
    },
    {
      id: '2',
      title: 'Optimal Posting Times',
      description:
        'Your audience is most active between 1:30-3:30 PM on weekdays. Schedule 70% of your posts during this window for maximum engagement.',
      priority: 'HIGH',
      category: 'timing',
      icon: 'clock',
    },
    {
      id: '3',
      title: 'Email Management',
      description:
        '87 unread emails detected. Consider setting up filters for frequent senders and allocating specific times for email management.',
      priority: 'HIGH',
      category: 'productivity',
      icon: 'mail',
    },
  ];
};

export const getPlatformMetrics = (platform: SocialPlatform): AnalyticMetric[] => {
  const metrics: Record<SocialPlatform, AnalyticMetric[]> = {
    facebook: [
      {
        label: 'Page Likes',
        value: 12456,
        change: 234,
        isPositive: true,
      },
      {
        label: 'Post Reach',
        value: 24789,
        change: 12,
        isPositive: true,
      },
      {
        label: 'Engagement Rate',
        value: 5.2,
        change: -0.3,
        isPositive: false,
      },
    ],
    instagram: [
      {
        label: 'Followers',
        value: 8932,
        change: 156,
        isPositive: true,
      },
      {
        label: 'Post Reach',
        value: 14567,
        change: 8,
        isPositive: true,
      },
      {
        label: 'Engagement Rate',
        value: 6.8,
        change: 1.2,
        isPositive: true,
      },
    ],
    twitter: [
      {
        label: 'Followers',
        value: 5678,
        change: 98,
        isPositive: true,
      },
      {
        label: 'Tweet Impressions',
        value: 18234,
        change: 5.7,
        isPositive: true,
      },
      {
        label: 'Engagement Rate',
        value: 3.4,
        change: -0.5,
        isPositive: false,
      },
    ],
    gmail: [
      {
        label: 'Emails Received',
        value: 1248,
        change: -8.3,
        isPositive: false,
      },
      {
        label: 'Avg. Response Time',
        value: 4.2, // hours
        change: -1.1,
        isPositive: true,
      },
      {
        label: 'Unread Emails',
        value: 87,
        change: 12,
        isPositive: false,
      },
    ],
  };

  return metrics[platform];
};