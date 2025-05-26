import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Card, { CardHeader } from '../../components/ui/Card';
import ChartContainer from '../../components/dashboard/ChartContainer';
import Button from '../../components/ui/Button';
import { Download, Calendar } from 'lucide-react';

interface ReportsProps {
  setPageTitle: () => void;
}

const Reports: React.FC<ReportsProps> = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle();
  }, [setPageTitle]);

  const navigate = useNavigate();

  const generateReport = (type: string) => {
    // In a real app, this would generate and download a report
    alert(`Generating ${type} report...`);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader 
          title="Analytics Reports" 
          action={
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="outline"
                icon={<Calendar size={16} />}
                onClick={() => navigate('/dashboard/reports/custom')}
              >
                Custom Range
              </Button>
              <Button
                size="sm"
                icon={<Download size={16} />}
                onClick={() => generateReport('current')}
              >
                Export Current
              </Button>
            </div>
          }
        />
        
        <Routes>
          <Route 
            path="/weekly" 
            element={
              <div className="space-y-6">
                <ChartContainer
                  title="Weekly Performance Overview"
                  type="line"
                  data={{
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                      label: 'Engagement',
                      data: [120, 190, 170, 210, 180, 150, 130],
                      borderColor: '#3B82F6',
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    }]
                  }}
                />
              </div>
            }
          />
          <Route 
            path="/monthly" 
            element={
              <div className="space-y-6">
                <ChartContainer
                  title="Monthly Performance Overview"
                  type="bar"
                  data={{
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                      label: 'Engagement',
                      data: [1200, 1900, 1700, 2100, 1800, 2300],
                      backgroundColor: 'rgba(99, 102, 241, 0.7)',
                    }]
                  }}
                />
              </div>
            }
          />
          <Route 
            path="/custom" 
            element={
              <div className="space-y-6">
                <div className="flex space-x-4 mb-6">
                  <input
                    type="date"
                    className="border rounded-lg px-3 py-2"
                  />
                  <input
                    type="date"
                    className="border rounded-lg px-3 py-2"
                  />
                  <Button onClick={() => generateReport('custom')}>
                    Generate Report
                  </Button>
                </div>
              </div>
            }
          />
        </Routes>
      </Card>
    </div>
  );
};

export default Reports;