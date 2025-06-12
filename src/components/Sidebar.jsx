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
  Sparkle,
} from "@phosphor-icons/react";
import clsx from "clsx";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navigation = [
    {
      name: "Dashboard",
      items: [
        { name: "Overview", href: "/", icon: House },
        { name: "Analytics", href: "/analytics", icon: ChartLine },
        { name: "Notifications", href: "/notifications", icon: Bell },
      ],
    },
    {
      name: "Platforms",
      items: [
        { name: "Facebook", href: "/facebook", icon: FacebookLogo },
        { name: "Instagram", href: "/instagram", icon: InstagramLogo },
        { name: "Twitter", href: "/twitter", icon: TwitterLogo },
        { name: "Gmail", href: "/gmail", icon: Envelope },
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
    {
      name: "Settings",
      items: [{ name: "Settings", href: "/settings", icon: Gear }],
    },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={clsx(
          "fixed inset-y-0 left-0 z-50 w-72 glass-card transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 border-r-0 rounded-r-3xl lg:rounded-none",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 dark:border-gray-700/30">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkle className="w-6 h-6 text-white" />
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold gradient-text">SocialSync</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Analytics Hub
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-xl hover:bg-white/60 dark:hover:bg-gray-700/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-8 overflow-y-auto">
          {navigation.map((section) => (
            <div key={section.name} className="space-y-3">
              <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-4">
                {section.name}
              </h2>
              <ul className="space-y-2">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;

                  return (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className={clsx(
                          "sidebar-link group",
                          isActive && "active"
                        )}
                      >
                        <Icon className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" />
                        <span className="font-medium">{item.name}</span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 dark:border-gray-700/30">
          <div className="glass-card rounded-xl p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <div className="flex items-center mb-2">
              <Sparkle className="w-5 h-5 text-blue-500 mr-2" />
              <span className="font-medium text-sm">Upgrade to Pro</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
              Unlock advanced analytics and unlimited reports
            </p>
            <button className="w-full btn-primary text-sm py-2">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
