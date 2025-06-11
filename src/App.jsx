import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import Layout from "./components/Layout"
import Overview from "./pages/Overview"
import Notifications from "./pages/Notifications"
import Settings from "./pages/Settings"
import Facebook from "./pages/Facebook"
import Instagram from "./pages/Instagram"
import Twitter from "./pages/Twitter"
import Gmail from "./pages/Gmail"
import WeeklyReport from "./pages/WeeklyReport"
import MonthlyReport from "./pages/MonthlyReport"
import CustomReport from "./pages/CustomReport"
import Analytics from "./pages/Analytics"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/facebook" element={<Facebook />} />
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/twitter" element={<Twitter />} />
            <Route path="/gmail" element={<Gmail />} />
            <Route path="/reports/weekly" element={<WeeklyReport />} />
            <Route path="/reports/monthly" element={<MonthlyReport />} />
            <Route path="/reports/custom" element={<CustomReport />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
