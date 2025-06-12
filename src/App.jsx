import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Overview from "./pages/Overview";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Facebook from "./pages/Facebook";
import Instagram from "./pages/Instagram";
import Twitter from "./pages/Twitter";
import Gmail from "./pages/Gmail";
import WeeklyReport from "./pages/WeeklyReport";
import MonthlyReport from "./pages/MonthlyReport";
import CustomReport from "./pages/CustomReport";
import Analytics from "./pages/Analytics";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem('authToken', 'dummy-token');
    localStorage.setItem('userData', JSON.stringify(userData));
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route 
            path="/signin" 
            element={
              isAuthenticated ? 
              <Navigate to="/" replace /> : 
              <SignIn onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/signup" 
            element={
              isAuthenticated ? 
              <Navigate to="/" replace /> : 
              <SignUp onSignUp={handleLogin} />
            } 
          />

          {/* Protected Routes */}
          <Route 
            path="/*" 
            element={
              isAuthenticated ? 
              <Layout onLogout={handleLogout}>
                <Routes>
                  <Route index element={<Overview />} />
                  <Route path="notifications" element={<Notifications />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="facebook" element={<Facebook />} />
                  <Route path="instagram" element={<Instagram />} />
                  <Route path="twitter" element={<Twitter />} />
                  <Route path="gmail" element={<Gmail />} />
                  <Route path="reports/weekly" element={<WeeklyReport />} />
                  <Route path="reports/monthly" element={<MonthlyReport />} />
                  <Route path="reports/custom" element={<CustomReport />} />
                  <Route path="analytics" element={<Analytics />} />
                </Routes>
              </Layout> : 
              <Navigate to="/signin" replace />
            } 
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;