import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { ChartData } from '../../types';
import Card, { CardHeader } from '../ui/Card';

// Register Chart.js components
Chart.register(...registerables);

interface ChartContainerProps {
  title: string;
  action?: React.ReactNode;
  data: ChartData;
  type: 'line' | 'bar' | 'doughnut' | 'radar' | 'pie';
  height?: number;
}

const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  action,
  data,
  type,
  height = 300,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new chart
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type,
          data: {
            labels: data.labels,
            datasets: data.datasets.map(dataset => ({
              ...dataset,
              tension: 0.3,
              fill: type === 'line' ? dataset.backgroundColor ? true : false : undefined,
              borderWidth: type === 'line' ? 2 : 1,
            })),
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: type === 'doughnut' || type === 'pie' ? 'right' : 'top',
                labels: {
                  usePointStyle: true,
                  font: {
                    size: 12,
                  },
                },
              },
              tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(17, 24, 39, 0.8)',
                padding: 10,
                cornerRadius: 4,
                titleFont: {
                  size: 14,
                },
                bodyFont: {
                  size: 13,
                },
              },
            },
            scales: type !== 'doughnut' && type !== 'pie' && type !== 'radar' ? {
              y: {
                beginAtZero: true,
                ticks: {
                  font: {
                    size: 12,
                  },
                },
                grid: {
                  color: 'rgba(156, 163, 175, 0.1)',
                },
              },
              x: {
                ticks: {
                  font: {
                    size: 12,
                  },
                },
                grid: {
                  display: false,
                },
              },
            } : undefined,
          },
        });
      }
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, type]);

  return (
    <Card>
      <CardHeader title={title} action={action} />
      <div style={{ height: `${height}px` }} className="relative">
        <canvas ref={chartRef}></canvas>
      </div>
    </Card>
  );
};

export default ChartContainer;