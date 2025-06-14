"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeSlash, Sparkle, Check } from "@phosphor-icons/react";
import {
  Card,
  CardBody,
  Input,
  Button,
  Typography,
  Checkbox,
} from "@material-tailwind/react";

const SignUp = ({ onSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions!");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const userData = {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        role: "Marketing Manager",
      };

      onSignUp(userData);
      setIsLoading(false);
      navigate("/");
    }, 1000);
  };

  const handleSocialSignUp = (provider) => {
    setIsLoading(true);
    // Simulate social signup
    setTimeout(() => {
      const userData = {
        email: `user@${provider}.com`,
        firstName: "Sarah",
        lastName: "Johnson",
        role: "Marketing Manager",
      };

      onSignUp(userData);
      setIsLoading(false);
      navigate("/");
    }, 1000);
  };

  const features = [
    "Real-time analytics dashboard",
    "Multi-platform integration",
    "Advanced reporting tools",
    "Team collaboration features",
    "24/7 customer support",
    "Custom branding options",
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-pink-600/90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          alt="Team Analytics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center p-12">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Sparkle className="w-8 h-8" />
            </div>
            <Typography variant="h2" className="text-white font-bold mb-4">
              Start Your Journey
            </Typography>
            <Typography variant="lead" className="text-white/90 mb-8">
              Join thousands of businesses growing with SocialSync
            </Typography>
            <div className="space-y-3 text-left">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <Check className="w-3 h-3" />
                  </div>
                  <Typography variant="small" className="text-white/90">
                    {feature}
                  </Typography>
                </div>
              ))}
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
              Create your account
            </Typography>
            <Typography variant="small" className="text-gray-600">
              Start your free trial today
            </Typography>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <Button
              variant="outlined"
              className="w-full rounded-xl border-gray-300"
              onClick={() => handleSocialSignUp("google")}
              disabled={isLoading}
            >
              Continue with Google
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outlined"
                className="rounded-xl border-gray-300"
                onClick={() => handleSocialSignUp("facebook")}
                disabled={isLoading}
              >
                Facebook
              </Button>
              <Button
                variant="outlined"
                className="rounded-xl border-gray-300"
                onClick={() => handleSocialSignUp("twitter")}
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
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="text"
                    label="First name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="!border-gray-300 focus:!border-blue-500"
                    required
                    disabled={isLoading}
                  />
                  <Input
                    type="text"
                    label="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="!border-gray-300 focus:!border-blue-500"
                    required
                    disabled={isLoading}
                  />
                </div>

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

                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  label="Confirm password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="!border-gray-300 focus:!border-blue-500"
                  required
                  disabled={isLoading}
                  icon={
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="text-gray-400 hover:text-gray-600"
                      disabled={isLoading}
                    >
                      {showConfirmPassword ? (
                        <EyeSlash className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  }
                />

                <Checkbox
                  label={
                    <Typography variant="small" className="text-gray-600">
                      I agree to the{" "}
                      <Link
                        to="/terms"
                        className="text-blue-600 hover:text-blue-500"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/privacy"
                        className="text-blue-600 hover:text-blue-500"
                      >
                        Privacy Policy
                      </Link>
                    </Typography>
                  }
                  checked={formData.agreeToTerms}
                  onChange={(e) =>
                    setFormData({ ...formData, agreeToTerms: e.target.checked })
                  }
                  disabled={isLoading}
                  required
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
                  disabled={isLoading}
                  loading={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
              </form>
            </CardBody>
          </Card>

          <Typography
            variant="small"
            className="mt-8 text-center text-gray-600"
          >
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
