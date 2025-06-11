"use client"

import { useRef } from "react"
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
} from "chart.js"
import { Line, Bar, Doughnut, Pie, Radar } from "react-chartjs-2"

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
  RadialLinearScale,
)

const Chart = ({ type, data, options, className = "" }) => {
  const chartRef = useRef()

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
      },
    },
    scales:
      type !== "doughnut" && type !== "pie" && type !== "radar"
        ? {
            x: {
              grid: {
                color: "rgba(0, 0, 0, 0.1)",
              },
            },
            y: {
              grid: {
                color: "rgba(0, 0, 0, 0.1)",
              },
              beginAtZero: true,
            },
          }
        : undefined,
    ...options,
  }

  const ChartComponent = {
    line: Line,
    bar: Bar,
    doughnut: Doughnut,
    pie: Pie,
    radar: Radar,
  }[type]

  if (!ChartComponent) {
    return <div>Unsupported chart type: {type}</div>
  }

  return (
    <div className={`relative h-80 ${className}`}>
      <ChartComponent ref={chartRef} data={data} options={defaultOptions} />
    </div>
  )
}

export default Chart
