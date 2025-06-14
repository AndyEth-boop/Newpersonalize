import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Overview from "./pages/Overview";
import Analytics from "./pages/Analytics";
import Facebook from "./pages/Facebook";
import Instagram from "./pages/Instagram";
import Twitter from "./pages/Twitter";
import Gmail from "./pages/Gmail";
import Settings from "./pages/Settings";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem("authToken", "dummy-token");
    localStorage.setItem("userData", JSON.stringify(userData));
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/signin"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <SignIn onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <SignUp onSignUp={handleLogin} />
            )
          }
        />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <Layout onLogout={handleLogout}>
                <Routes>
                  <Route index element={<Overview />} />
                  <Route path="analytics" element={<Analytics />} />
                  <Route path="facebook" element={<Facebook />} />
                  <Route path="instagram" element={<Instagram />} />
                  <Route path="twitter" element={<Twitter />} />
                  <Route path="gmail" element={<Gmail />} />
                  <Route path="settings" element={<Settings />} />
                </Routes>
              </Layout>
            ) : (
              <Navigate to="/signin" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
