"use client";
import {
  List,
  MagnifyingGlass,
  Bell,
  Sun,
  Moon,
  User,
} from "@phosphor-icons/react";
import { useTheme } from "../contexts/ThemeContext";

const Header = ({ onMenuClick }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="glass-card border-b border-white/20 dark:border-gray-700/30 rounded-none">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl hover:bg-white/60 dark:hover:bg-gray-700/60 mr-4 transition-colors"
          >
            <List className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Dashboard Overview
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
              Welcome back! Here's what's happening with your social media.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlass className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search analytics..."
              className="input pl-10 pr-4 py-2 w-64 text-sm"
            />
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-xl glass-card hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-200"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button className="p-3 rounded-xl glass-card hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-200">
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                3
              </span>
            </button>
          </div>

          {/* Profile */}
          <div className="flex items-center">
            <div className="glass-card rounded-xl p-2 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-200 cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Sarah Johnson
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Marketing Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
