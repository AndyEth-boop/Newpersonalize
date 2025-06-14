"use client";

import { useState } from "react";
import {
  Check,
  X,
  Info,
  Warning,
  CheckCircle,
  XCircle,
  Clock,
} from "@phosphor-icons/react";
import clsx from "clsx";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "success",
      title: "Facebook Account Connected",
      message:
        "Your Facebook account has been successfully connected and data sync is complete.",
      time: "2 minutes ago",
      read: false,
    },
    {
      id: 2,
      type: "warning",
      title: "Instagram API Rate Limit",
      message:
        "You are approaching the Instagram API rate limit. Consider upgrading your plan.",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      type: "info",
      title: "Weekly Report Ready",
      message: "Your weekly analytics report is ready for download.",
      time: "3 hours ago",
      read: true,
    },
    {
      id: 4,
      type: "error",
      title: "Gmail Sync Failed",
      message:
        "Failed to sync Gmail data. Please check your connection settings.",
      time: "5 hours ago",
      read: false,
    },
    {
      id: 5,
      type: "info",
      title: "New Feature Available",
      message: "Advanced analytics dashboard is now available in your account.",
      time: "1 day ago",
      read: true,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "warning":
        return <Warning className="w-5 h-5 text-yellow-500" />;
      case "error":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Notifications
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {unreadCount} unread notifications
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={markAllAsRead}
            className="btn-secondary flex items-center"
            disabled={unreadCount === 0}
          >
            <Check className="w-4 h-4 mr-2" />
            Mark All Read
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Notification Settings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 dark:text-white">
              Email Notifications
            </h4>
            {[
              "Weekly reports",
              "Account connections",
              "API rate limits",
              "System updates",
            ].map((item) => (
              <label key={item} className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  {item}
                </span>
              </label>
            ))}
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 dark:text-white">
              Push Notifications
            </h4>
            {[
              "Real-time alerts",
              "Engagement milestones",
              "Data sync status",
              "Security alerts",
            ].map((item) => (
              <label key={item} className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="card">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Notifications
          </h3>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={clsx(
                "p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",
                !notification.read && "bg-blue-50 dark:bg-blue-900/10"
              )}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                        {notification.title}
                      </h4>
                      {!notification.read && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {notification.message}
                    </p>
                    <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {notification.time}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      title="Mark as read"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="p-1 text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                    title="Delete notification"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
