"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeSlash, Sparkle } from "@phosphor-icons/react";
import {
  Card,
  CardBody,
  Input,
  Button,
  Typography,
  Checkbox,
} from "@material-tailwind/react";

const SignIn = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const userData = {
        email: formData.email,
        firstName: "Sarah",
        lastName: "Johnson",
        role: "Marketing Manager",
      };

      onLogin(userData);
      setIsLoading(false);
      navigate("/");
    }, 1000);
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    // Simulate social login
    setTimeout(() => {
      const userData = {
        email: `user@${provider}.com`,
        firstName: "Sarah",
        lastName: "Johnson",
        role: "Marketing Manager",
      };

      onLogin(userData);
      setIsLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80"
          alt="Analytics Dashboard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center p-12">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Sparkle className="w-8 h-8" />
            </div>
            <Typography variant="h2" className="text-white font-bold mb-4">
              Welcome to SocialSync
            </Typography>
            <Typography variant="lead" className="text-white/90 mb-8">
              Unlock powerful insights from your social media data
            </Typography>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <Typography variant="h3" className="text-white font-bold">
                  24K+
                </Typography>
                <Typography variant="small" className="text-white/80">
                  Active Users
                </Typography>
              </div>
              <div>
                <Typography variant="h3" className="text-white font-bold">
                  150+
                </Typography>
                <Typography variant="small" className="text-white/80">
                  Integrations
                </Typography>
              </div>
              <div>
                <Typography variant="h3" className="text-white font-bold">
                  99.9%
                </Typography>
                <Typography variant="small" className="text-white/80">
                  Uptime
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6 lg:hidden">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkle className="w-6 h-6 text-white" />
              </div>
              <Typography
                variant="h5"
                className="ml-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                SocialSync
              </Typography>
            </div>
            <Typography variant="h3" className="text-gray-900 font-bold mb-2">
              Welcome back
            </Typography>
            <Typography variant="small" className="text-gray-600">
              Sign in to your account to continue
            </Typography>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <Button
              variant="outlined"
              className="w-full rounded-xl border-gray-300"
              onClick={() => handleSocialLogin("google")}
              disabled={isLoading}
            >
              Continue with Google
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outlined"
                className="rounded-xl border-gray-300"
                onClick={() => handleSocialLogin("facebook")}
                disabled={isLoading}
              >
                Facebook
              </Button>
              <Button
                variant="outlined"
                className="rounded-xl border-gray-300"
                onClick={() => handleSocialLogin("twitter")}
                disabled={isLoading}
              >
                Twitter
              </Button>
            </div>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">
                Or continue with email
              </span>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardBody className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    label="Email address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="!border-gray-300 focus:!border-blue-500"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <Input
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="!border-gray-300 focus:!border-blue-500"
                    required
                    disabled={isLoading}
                    icon={
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-600"
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeSlash className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Checkbox
                    label="Remember me"
                    checked={formData.rememberMe}
                    onChange={(e) =>
                      setFormData({ ...formData, rememberMe: e.target.checked })
                    }
                    disabled={isLoading}
                  />
                  <Link
                    to="/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-500"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
                  disabled={isLoading}
                  loading={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </form>
            </CardBody>
          </Card>

          <Typography
            variant="small"
            className="mt-8 text-center text-gray-600"
          >
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up for free
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
