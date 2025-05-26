// Authentication Types
export interface User {
  id: string;
  email: string;
  name: string;
  profilePicture?: string;
  createdAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Connected Accounts Types
export type SocialPlatform = 'facebook' | 'instagram' | 'twitter' | 'gmail';

export interface ConnectedAccount {
  id: string;
  platform: SocialPlatform;
  username: string;
  profileUrl: string;
  isConnected: boolean;
  lastSync?: Date;
}

// Analytics Data Types
export interface AnalyticMetric {
  label: string;
  value: number;
  change: number;
  isPositive: boolean;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor?: string;
    backgroundColor?: string;
  }[];
}

export interface PostPerformance {
  id: string;
  title: string;
  platform: SocialPlatform;
  engagement: number;
  reach: number;
  date: Date;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  category: string;
  icon: string;
}