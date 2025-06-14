"use client";

import {
  List,
  MagnifyingGlass,
  Bell,
  Sun,
  Moon,
  User,
  SignOut,
} from "@phosphor-icons/react";
import { useState } from "react";
import {
  Button,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Badge,
  IconButton,
} from "@material-tailwind/react";

const Header = ({ onMenuClick, onLogout }) => {
  const [isDark, setIsDark] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Add theme toggle logic here
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-4 lg:px-8 py-4">
        <div className="flex items-center space-x-4">
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <List className="w-5 h-5" />
          </IconButton>

          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
              Dashboard Overview
            </h1>
            <p className="text-sm text-gray-500 hidden sm:block">
              Welcome back! Here's what's happening with your social media.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Search */}
          <div className="relative hidden md:block">
            <Input
              type="text"
              placeholder="Search analytics..."
              className="!border-gray-300 focus:!border-blue-500"
              labelProps={{
                className: "hidden",
              }}
              icon={<MagnifyingGlass className="h-5 w-5" />}
            />
          </div>

          {/* Theme toggle */}
          <IconButton
            variant="outlined"
            className="rounded-full border-gray-300"
            onClick={toggleTheme}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-600" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </IconButton>

          {/* Notifications */}
          <Badge content="3" className="bg-red-500">
            <IconButton
              variant="outlined"
              className="rounded-full border-gray-300"
            >
              <Bell className="w-5 h-5 text-gray-600" />
            </IconButton>
          </Badge>

          {/* Profile Menu */}
          <Menu>
            <MenuHandler>
              <Button
                variant="text"
                className="flex items-center space-x-2 rounded-full p-2"
              >
                <Avatar
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="profile"
                  size="sm"
                />
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-medium text-gray-700">
                    {userData.firstName || "Sarah"}{" "}
                    {userData.lastName || "Johnson"}
                  </p>
                  <p className="text-xs text-gray-500">Marketing Manager</p>
                </div>
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Profile
              </MenuItem>
              <MenuItem className="flex items-center gap-2" onClick={onLogout}>
                <SignOut className="w-4 h-4" />
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
