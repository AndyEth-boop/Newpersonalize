"use client";

import { useState } from "react";
import {
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Key,
  Download,
  Trash,
  Eye,
  EyeSlash,
} from "@phosphor-icons/react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  Switch,
  Select,
  Option,
  Avatar,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", name: "Profile", icon: User },
    { id: "notifications", name: "Notifications", icon: Bell },
    { id: "security", name: "Security", icon: Shield },
    { id: "appearance", name: "Appearance", icon: Palette },
    { id: "integrations", name: "Integrations", icon: Globe },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Typography variant="h4" className="text-gray-900 font-bold">
          Settings
        </Typography>
        <Typography variant="small" className="text-gray-600 mt-1">
          Manage your account settings and preferences
        </Typography>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-64">
          <Card className="shadow-sm border border-gray-100">
            <CardBody className="p-4">
              <Tabs value={activeTab} orientation="vertical" className="w-full">
                <TabsHeader className="w-full bg-transparent p-0">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <Tab
                        key={tab.id}
                        value={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full justify-start p-3 rounded-lg mb-2 ${
                          activeTab === tab.id
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5" />
                          <Typography variant="small" className="font-medium">
                            {tab.name}
                          </Typography>
                        </div>
                      </Tab>
                    );
                  })}
                </TabsHeader>
              </Tabs>
            </CardBody>
          </Card>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === "profile" && (
            <Card className="shadow-sm border border-gray-100">
              <CardBody className="p-6">
                <Typography
                  variant="h6"
                  className="text-gray-900 font-semibold mb-6"
                >
                  Profile Information
                </Typography>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <Avatar
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Profile"
                      size="xl"
                    />
                    <div>
                      <Button className="bg-blue-600 rounded-lg">
                        Change Photo
                      </Button>
                      <Typography
                        variant="small"
                        className="text-gray-500 mt-1"
                      >
                        JPG, GIF or PNG. 1MB max.
                      </Typography>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="First Name"
                      defaultValue="Sarah"
                      className="!border-gray-300 focus:!border-blue-500"
                    />
                    <Input
                      label="Last Name"
                      defaultValue="Johnson"
                      className="!border-gray-300 focus:!border-blue-500"
                    />
                    <Input
                      label="Email"
                      type="email"
                      defaultValue="sarah.johnson@example.com"
                      className="!border-gray-300 focus:!border-blue-500"
                    />
                    <Input
                      label="Phone"
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="!border-gray-300 focus:!border-blue-500"
                    />
                  </div>

                  <div>
                    <Typography
                      variant="small"
                      className="text-gray-700 mb-2 font-medium"
                    >
                      Bio
                    </Typography>
                    <textarea
                      rows={4}
                      defaultValue="Digital marketing specialist with 5+ years of experience in social media analytics and strategy."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-blue-600 rounded-lg">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          )}

          {activeTab === "notifications" && (
            <Card className="shadow-sm border border-gray-100">
              <CardBody className="p-6">
                <Typography
                  variant="h6"
                  className="text-gray-900 font-semibold mb-6"
                >
                  Notification Preferences
                </Typography>
                <div className="space-y-8">
                  <div>
                    <Typography
                      variant="h6"
                      className="text-gray-900 font-medium mb-4"
                    >
                      Email Notifications
                    </Typography>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Weekly reports",
                          description: "Get weekly analytics reports via email",
                        },
                        {
                          name: "Account activity",
                          description:
                            "Notifications about account connections and changes",
                        },
                        {
                          name: "Marketing updates",
                          description: "Product updates and marketing tips",
                        },
                        {
                          name: "Security alerts",
                          description: "Important security notifications",
                        },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                        >
                          <div>
                            <Typography
                              variant="small"
                              className="font-medium text-gray-900"
                            >
                              {item.name}
                            </Typography>
                            <Typography
                              variant="small"
                              className="text-gray-600"
                            >
                              {item.description}
                            </Typography>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Typography
                      variant="h6"
                      className="text-gray-900 font-medium mb-4"
                    >
                      Push Notifications
                    </Typography>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Real-time alerts",
                          description:
                            "Instant notifications for important events",
                        },
                        {
                          name: "Engagement milestones",
                          description: "When you reach engagement goals",
                        },
                        {
                          name: "Data sync status",
                          description: "Updates on data synchronization",
                        },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                        >
                          <div>
                            <Typography
                              variant="small"
                              className="font-medium text-gray-900"
                            >
                              {item.name}
                            </Typography>
                            <Typography
                              variant="small"
                              className="text-gray-600"
                            >
                              {item.description}
                            </Typography>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          )}

          {activeTab === "security" && (
            <div className="space-y-6">
              <Card className="shadow-sm border border-gray-100">
                <CardBody className="p-6">
                  <Typography
                    variant="h6"
                    className="text-gray-900 font-semibold mb-6"
                  >
                    Password & Security
                  </Typography>
                  <div className="space-y-6">
                    <Input
                      label="Current Password"
                      type={showPassword ? "text" : "password"}
                      className="!border-gray-300 focus:!border-blue-500"
                      icon={
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <EyeSlash className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      }
                    />

                    <Input
                      label="New Password"
                      type="password"
                      className="!border-gray-300 focus:!border-blue-500"
                    />

                    <Input
                      label="Confirm New Password"
                      type="password"
                      className="!border-gray-300 focus:!border-blue-500"
                    />

                    <Button className="bg-blue-600 rounded-lg">
                      Update Password
                    </Button>
                  </div>
                </CardBody>
              </Card>

              <Card className="shadow-sm border border-gray-100">
                <CardBody className="p-6">
                  <Typography
                    variant="h6"
                    className="text-gray-900 font-semibold mb-6"
                  >
                    Two-Factor Authentication
                  </Typography>
                  <div className="flex items-center justify-between">
                    <div>
                      <Typography
                        variant="small"
                        className="font-medium text-gray-900"
                      >
                        Two-factor authentication
                      </Typography>
                      <Typography variant="small" className="text-gray-600">
                        Add an extra layer of security to your account
                      </Typography>
                    </div>
                    <Button className="bg-blue-600 rounded-lg">
                      Enable 2FA
                    </Button>
                  </div>
                </CardBody>
              </Card>

              <Card className="shadow-sm border border-gray-100">
                <CardBody className="p-6">
                  <Typography
                    variant="h6"
                    className="text-gray-900 font-semibold mb-6"
                  >
                    API Keys
                  </Typography>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <Typography
                          variant="small"
                          className="font-medium text-gray-900"
                        >
                          Production API Key
                        </Typography>
                        <Typography
                          variant="small"
                          className="text-gray-600 font-mono"
                        >
                          sk_live_••••••••••••••••••••••••••••
                        </Typography>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outlined"
                          size="sm"
                          className="rounded-lg border-gray-300 flex items-center gap-2"
                        >
                          <Key className="w-4 h-4" />
                          Regenerate
                        </Button>
                        <Button
                          variant="text"
                          size="sm"
                          className="text-red-600 hover:text-red-700 rounded-lg"
                        >
                          <Trash className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <Button className="bg-blue-600 rounded-lg">
                      Generate New API Key
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          )}

          {activeTab === "appearance" && (
            <Card className="shadow-sm border border-gray-100">
              <CardBody className="p-6">
                <Typography
                  variant="h6"
                  className="text-gray-900 font-semibold mb-6"
                >
                  Appearance Settings
                </Typography>
                <div className="space-y-8">
                  <div>
                    <Typography
                      variant="h6"
                      className="text-gray-900 font-medium mb-4"
                    >
                      Theme
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          id: "light",
                          name: "Light",
                          preview: "bg-white border-gray-300",
                        },
                        {
                          id: "dark",
                          name: "Dark",
                          preview: "bg-gray-800 border-gray-600",
                        },
                        {
                          id: "system",
                          name: "System",
                          preview:
                            "bg-gradient-to-r from-white to-gray-800 border-gray-300",
                        },
                      ].map((theme) => (
                        <Card
                          key={theme.id}
                          className="cursor-pointer border-2 border-gray-200 hover:border-blue-500 transition-colors"
                        >
                          <CardBody className="p-4 text-center">
                            <div
                              className={`w-16 h-12 ${theme.preview} rounded mb-2 mx-auto border`}
                            ></div>
                            <Typography variant="small" className="font-medium">
                              {theme.name}
                            </Typography>
                          </CardBody>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Typography
                      variant="h6"
                      className="text-gray-900 font-medium mb-4"
                    >
                      Language
                    </Typography>
                    <div className="max-w-xs">
                      <Select label="Select Language">
                        <Option>English (US)</Option>
                        <Option>English (UK)</Option>
                        <Option>Spanish</Option>
                        <Option>French</Option>
                        <Option>German</Option>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Typography
                      variant="h6"
                      className="text-gray-900 font-medium mb-4"
                    >
                      Timezone
                    </Typography>
                    <div className="max-w-xs">
                      <Select label="Select Timezone">
                        <Option>Pacific Time (PT)</Option>
                        <Option>Mountain Time (MT)</Option>
                        <Option>Central Time (CT)</Option>
                        <Option>Eastern Time (ET)</Option>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          )}

          {activeTab === "integrations" && (
            <div className="space-y-6">
              <Card className="shadow-sm border border-gray-100">
                <CardBody className="p-6">
                  <Typography
                    variant="h6"
                    className="text-gray-900 font-semibold mb-6"
                  >
                    Connected Accounts
                  </Typography>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Facebook",
                        status: "connected",
                        icon: "📘",
                        lastSync: "2 minutes ago",
                      },
                      {
                        name: "Instagram",
                        status: "connected",
                        icon: "📷",
                        lastSync: "5 minutes ago",
                      },
                      {
                        name: "Twitter",
                        status: "disconnected",
                        icon: "🐦",
                        lastSync: "Never",
                      },
                      {
                        name: "Gmail",
                        status: "error",
                        icon: "📧",
                        lastSync: "2 hours ago",
                      },
                    ].map((account) => (
                      <div
                        key={account.name}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-xl"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{account.icon}</span>
                          <div>
                            <Typography
                              variant="small"
                              className="font-medium text-gray-900"
                            >
                              {account.name}
                            </Typography>
                            <Typography
                              variant="small"
                              className="text-gray-600"
                            >
                              Last sync: {account.lastSync}
                            </Typography>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              account.status === "connected"
                                ? "bg-green-100 text-green-800"
                                : account.status === "error"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {account.status}
                          </span>
                          <Button
                            size="sm"
                            variant={
                              account.status === "connected"
                                ? "outlined"
                                : "filled"
                            }
                            className={`rounded-lg ${
                              account.status === "connected"
                                ? "border-gray-300"
                                : "bg-blue-600"
                            }`}
                          >
                            {account.status === "connected"
                              ? "Disconnect"
                              : "Connect"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>

              <Card className="shadow-sm border border-gray-100">
                <CardBody className="p-6">
                  <Typography
                    variant="h6"
                    className="text-gray-900 font-semibold mb-6"
                  >
                    Data Export
                  </Typography>
                  <div className="space-y-4">
                    <Typography variant="small" className="text-gray-600">
                      Export your data in various formats for backup or analysis
                      purposes.
                    </Typography>
                    <div className="flex space-x-3">
                      <Button
                        variant="outlined"
                        className="rounded-lg border-gray-300 flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Export as CSV
                      </Button>
                      <Button
                        variant="outlined"
                        className="rounded-lg border-gray-300 flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Export as JSON
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="shadow-sm border border-red-200 bg-red-50">
                <CardBody className="p-6">
                  <Typography
                    variant="h6"
                    className="text-red-600 font-semibold mb-6"
                  >
                    Danger Zone
                  </Typography>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Typography
                          variant="small"
                          className="font-medium text-gray-900"
                        >
                          Delete Account
                        </Typography>
                        <Typography variant="small" className="text-gray-600">
                          Permanently delete your account and all associated
                          data
                        </Typography>
                      </div>
                      <Button className="bg-red-600 hover:bg-red-700 rounded-lg">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
