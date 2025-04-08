"use client"

import { useRef, useEffect } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const SimpleChart = () => {
  const chartRef = useRef(null)

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Admin commission",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: "rgba(63, 131, 248, 1)",
        backgroundColor: "rgba(63, 131, 248, 0.5)",
        tension: 0.1,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: "Total sell",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: "rgba(34, 197, 94, 1)",
        backgroundColor: "rgba(34, 197, 94, 0.5)",
        tension: 0.1,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: "Subscription",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: "rgba(234, 179, 8, 1)",
        backgroundColor: "rgba(234, 179, 8, 0.5)",
        tension: 0.1,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 2.0,
        ticks: {
          stepSize: 0.4,
          callback: (value) => value.toFixed(1),
        },
        title: {
          display: true,
          text: "$ (USD)",
          position: "left",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: $${context.raw.toFixed(2)}`,
        },
      },
    },
  }

  // Clean up chart instance on unmount
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [])

  return (
    <div style={{ height: "300px", width: "100%" }}>
      <Line
        ref={chartRef}
        data={chartData}
        options={chartOptions}
        id="sales-chart" // Add a unique ID
      />
    </div>
  )
}

export default SimpleChart;
