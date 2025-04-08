import { Card } from "react-bootstrap"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend)

const UserStatistics = () => {
  const data = {
    labels: ["Active Users", "New Users", "Inactive Users"],
    datasets: [
      {
        data: [75, 17, 8],
        backgroundColor: ["rgba(134, 239, 172, 0.8)", "rgba(147, 197, 253, 0.8)", "rgba(251, 146, 60, 0.8)"],
        borderColor: ["rgba(134, 239, 172, 1)", "rgba(147, 197, 253, 1)", "rgba(251, 146, 60, 1)"],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
    },
  }

  return (
    <Card className="border-0 shadow-sm mb-4">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <span className="me-2">👤</span>
            <h5 className="mb-0">User Statistics</h5>
          </div>
          <span className="badge bg-light text-primary">Zone : All</span>
        </div>

        <div className="position-relative" style={{ height: "240px" }}>
          <Doughnut data={data} options={options} />
          <div className="position-absolute top-50 start-50 translate-middle text-center" style={{ width: "100px" }}>
            <div className="fw-bold">Total</div>
            <div className="fs-4">88</div>
          </div>
        </div>

        <div className="d-flex justify-content-around mt-3">
          <div className="d-flex align-items-center">
            <div className="legend-dot bg-success me-2" style={{ opacity: 0.8 }}></div>
            <span>75.0%</span>
          </div>
          <div className="d-flex align-items-center">
            <div className="legend-dot bg-primary me-2" style={{ opacity: 0.8 }}></div>
            <span>17.0%</span>
          </div>
          <div className="d-flex align-items-center">
            <div className="legend-dot bg-warning me-2" style={{ opacity: 0.8 }}></div>
            <span>8.0%</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default UserStatistics

