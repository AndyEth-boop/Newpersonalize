"use client";

import { Link, useLocation } from "react-router-dom";
import {
  House,
  ChartLine,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  Envelope,
  Gear,
  X,
  Sparkle,
  SignOut,
} from "@phosphor-icons/react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  IconButton,
  Button,
} from "@material-tailwind/react";
import clsx from "clsx";

const Sidebar = ({ isOpen, onClose, onLogout }) => {
  const location = useLocation();

  const navigation = [
    {
      name: "Dashboard",
      items: [
        { name: "Overview", href: "/", icon: House },
        { name: "Analytics", href: "/analytics", icon: ChartLine },
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
          "fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Card className="h-full w-full max-w-none rounded-none shadow-none border-0">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkle className="w-6 h-6 text-white" />
              </div>
              <div>
                <Typography
                  variant="h6"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  SocialSync
                </Typography>
                <Typography variant="small" className="text-gray-500">
                  Analytics Hub
                </Typography>
              </div>
            </div>
            <IconButton variant="text" className="lg:hidden" onClick={onClose}>
              <X className="w-5 h-5" />
            </IconButton>
          </div>

          {/* Navigation */}
          <div className="flex-1 p-6 space-y-8 overflow-y-auto">
            {navigation.map((section) => (
              <div key={section.name} className="space-y-3">
                <Typography
                  variant="small"
                  className="text-gray-500 uppercase tracking-wider font-semibold px-3"
                >
                  {section.name}
                </Typography>
                <List className="p-0">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.href;

                    return (
                      <Link key={item.name} to={item.href} onClick={onClose}>
                        <ListItem
                          className={clsx(
                            "rounded-xl mb-2 transition-all duration-200",
                            isActive
                              ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 shadow-sm"
                              : "text-gray-600 hover:bg-gray-50"
                          )}
                        >
                          <ListItemPrefix>
                            <Icon className="w-5 h-5" />
                          </ListItemPrefix>
                          <Typography variant="small" className="font-medium">
                            {item.name}
                          </Typography>
                          {isActive && (
                            <div className="ml-auto w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                          )}
                        </ListItem>
                      </Link>
                    );
                  })}
                </List>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 space-y-4">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <Sparkle className="w-5 h-5 text-blue-500 mr-2" />
                  <Typography variant="small" className="font-medium">
                    Upgrade to Pro
                  </Typography>
                </div>
                <Typography variant="small" className="text-gray-600 mb-3">
                  Unlock advanced analytics and unlimited reports
                </Typography>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
                >
                  Upgrade Now
                </Button>
              </div>
            </Card>

            <Button
              variant="text"
              className="w-full justify-start text-gray-600 rounded-lg"
              onClick={onLogout}
            >
              <SignOut className="w-4 h-4 mr-3" />
              Sign out
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Sidebar;
