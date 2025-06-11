"use client";
import { Link, useLocation } from "react-router-dom";
import {
  House,
  Bell,
  Gear,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  Envelope,
  FileText,
  ChartLine,
  X,
} from "@phosphor-icons/react";
import clsx from "clsx";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navigation = [
    {
      name: "Dashboard",
      items: [
        { name: "Overview", href: "/", icon: House },
        { name: "Notifications", href: "/notifications", icon: Bell },
        { name: "Settings", href: "/settings", icon: Gear },
      ],
    },
    {
      name: "Analytics",
      items: [
        { name: "Facebook", href: "/facebook", icon: FacebookLogo },
        { name: "Instagram", href: "/instagram", icon: InstagramLogo },
        { name: "Twitter", href: "/twitter", icon: TwitterLogo },
        { name: "Gmail", href: "/gmail", icon: Envelope },
        { name: "Analytics", href: "/analytics", icon: ChartLine },
      ],
    },
    {
      name: "Reports",
      items: [
        { name: "Weekly Report", href: "/reports/weekly", icon: FileText },
        { name: "Monthly Report", href: "/reports/monthly", icon: FileText },
        { name: "Custom Report", href: "/reports/custom", icon: FileText },
      ],
    },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={clsx(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
              <ChartLine className="w-5 h-5 text-white" />
            </div>
            <h1 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
              SocialSync
            </h1>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-6">
          {navigation.map((section) => (
            <div key={section.name}>
              <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                {section.name}
              </h2>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;

                  return (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className={clsx("sidebar-link", isActive && "active")}
                      >
                        <Icon className="w-5 h-5 mr-3" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
