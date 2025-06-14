"use client";

import { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
} from "chart.js";
import { Line, Bar, Doughnut, Pie, Radar } from "react-chartjs-2";
import { Card, CardBody } from "@material-tailwind/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale
);

const Chart = ({ type, data, options, className = "", title }) => {
  const chartRef = useRef();

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            family: "Inter",
            size: 12,
          },
          color: "#6B7280",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        cornerRadius: 12,
        padding: 12,
        titleFont: {
          family: "Inter",
          size: 14,
          weight: "600",
        },
        bodyFont: {
          family: "Inter",
          size: 13,
        },
      },
    },
    scales:
      type !== "doughnut" && type !== "pie" && type !== "radar"
        ? {
            x: {
              grid: {
                color: "rgba(0, 0, 0, 0.05)",
                drawBorder: false,
              },
              ticks: {
                font: {
                  family: "Inter",
                  size: 12,
                },
                color: "#6B7280",
              },
            },
            y: {
              grid: {
                color: "rgba(0, 0, 0, 0.05)",
                drawBorder: false,
              },
              ticks: {
                font: {
                  family: "Inter",
                  size: 12,
                },
                color: "#6B7280",
              },
              beginAtZero: true,
            },
          }
        : undefined,
    ...options,
  };

  const ChartComponent = {
    line: Line,
    bar: Bar,
    doughnut: Doughnut,
    pie: Pie,
    radar: Radar,
  }[type];

  if (!ChartComponent) {
    return <div>Unsupported chart type: {type}</div>;
  }

  return (
    <Card className={`shadow-sm border border-gray-100 ${className}`}>
      <CardBody className="p-6">
        <div className="relative h-80">
          <ChartComponent ref={chartRef} data={data} options={defaultOptions} />
        </div>
      </CardBody>
    </Card>
  );
};

export default Chart;
