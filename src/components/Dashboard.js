"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Row, Col, Card, Navbar, Form, Button, Dropdown } from "react-bootstrap"
import { Settings, Bell, User, ShoppingBag } from "react-feather"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Dashboard.css"
import SimpleChart from "./SimpleChart"
import UserStatistics from "./UserStatistics"
import PopularRestaurants from "./PopularRestaurants"
import TopDeliveryman from "./TopDeliveryman"
import TopRestaurants from "./TopRestaurants"
import TopFoods from "./TopFoods"
import Sidebar from "./Sidebar"

const Dashboard = ({ children }) => {
  const navigate = useNavigate()
  const [expandedSections, setExpandedSections] = useState({})
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [user, setUser] = useState(null)

  // Constants for layout calculations
  const NAVBAR_HEIGHT = 80 // Approximate height of navbar
  const BANNER_HEIGHT = 40 // Approximate height of the demo banner
  const TOTAL_TOP_HEIGHT = NAVBAR_HEIGHT + BANNER_HEIGHT

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true)
      } else {
        setSidebarCollapsed(false)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Initialize on component mount

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("user")
    navigate("/")
  }

  return (
    <div className="dashboard-container">
      {/* Top Banner - Fixed */}
      <div
        className="demo-banner bg-dark text-white py-2 px-3 d-flex justify-content-center align-items-center"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1040,
          height: `${BANNER_HEIGHT}px`,
        }}
      >
        <span>This is a Demo. Buy genuine StackFood from our official link.</span>
        <Button variant="warning" className="ms-3 py-2 px-3">
          Buy Now
        </Button>
      </div>

      {/* Header - Fixed */}
      <Navbar
        bg="white"
        expand="lg"
        className="border-bottom py-2 shadow-sm"
        style={{
          position: "fixed",
          top: `${BANNER_HEIGHT}px`,
          left: 0,
          right: 0,
          zIndex: 1030,
          height: `${NAVBAR_HEIGHT}px`,
        }}
      >
        <Container fluid>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src="https://stackfood-admin.6amtech.com/storage/app/public/business/2022-04-17-625c012c3c07d.png"
              alt="StackFood"
              height="40"
            />
            <span className="ms-2 fw-bold text-secondary">STACK FOOD</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center ms-auto">
            <Dropdown className="me-3">
              <Dropdown.Toggle variant="light" id="language-dropdown" className="border">
                <span className="me-2">🌐</span> En
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/en">English</Dropdown.Item>
                <Dropdown.Item href="#/es">Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Bell className="me-3 text-secondary" size={20} />

            <div className="position-relative me-2">
              <ShoppingBag className="text-secondary" size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                34
              </span>
            </div>

            <Dropdown>
              <Dropdown.Toggle variant="light" id="user-dropdown" className="border-0 bg-transparent">
                <div className="d-flex align-items-center">
                  <div className="avatar-circle bg-light me-2">
                    <User size={18} />
                  </div>
                  <div className="d-none d-md-block">
                    <div className="fw-bold">{user?.name || "Jhon Doe"}</div>
                    <div className="small text-muted">{user?.email || "admin@admin.com"}</div>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>

      {/* Content Container - Adjusted for fixed navbar */}
      <div
        className="content-wrapper"
        style={{
          paddingTop: `${TOTAL_TOP_HEIGHT}px`,
          minHeight: "100vh",
          display: "flex",
        }}
      >
        {/* Sidebar Component */}
        <Sidebar
          expandedSections={expandedSections}
          toggleSection={toggleSection}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
          windowWidth={windowWidth}
          TOTAL_TOP_HEIGHT={TOTAL_TOP_HEIGHT}
        />

        {/* Main Content */}
        <div
          className="main-content py-4 bg-light flex-grow-1"
          style={{
            marginLeft: sidebarCollapsed ? "0" : windowWidth >= 768 ? "260px" : "0",
            transition: "margin-left 0.3s ease-in-out",
            minHeight: `calc(100vh - ${TOTAL_TOP_HEIGHT}px)`,
            paddingLeft: "0",
            paddingRight: "15px",
          }}
        >
          {children ? (
            children
          ) : (
            <>
              <div className="d-flex justify-content-between align-items-center mb-4 ps-3">
                <div>
                  <h2 className="mb-1">Welcome, {user?.name?.split(" ")[0] || "Jhon"}.</h2>
                  <p className="text-muted">Hello here you can manage your orders by zone.</p>
                </div>

                <div className="d-flex align-items-center">
                  <Form.Select className="me-2" style={{ width: "200px" }}>
                    <option>All zones</option>
                  </Form.Select>
                  <Button variant="dark" className="rounded-circle p-2">
                    <Settings size={18} />
                  </Button>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h4 className="mb-0 d-inline-block">Order statistics</h4>
                  <span className="badge bg-light text-primary ms-2">Zone : All</span>
                </div>
                <Form.Select style={{ width: "150px" }}>
                  <option>Overall</option>
                </Form.Select>
              </div>

              {/* Order Statistics Cards */}
              <Row className="mb-4">
                <Col md={3}>
                  <Card className="h-100 border-0 shadow-sm bg-light-green">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <div>
                        <h2 className="text-success mb-0">47</h2>
                        <p className="mb-0">Delivered orders</p>
                      </div>
                      <div className="stat-icon bg-success-light text-success rounded-circle p-3">
                        <img
                          src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/1.png"
                          alt="Delivered orders"
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={3}>
                  <Card className="h-100 border-0 shadow-sm bg-light-danger">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <div>
                        <h2 className="text-danger mb-0">11</h2>
                        <p className="mb-0">Canceled orders</p>
                      </div>
                      <div className="stat-icon bg-danger-light text-danger rounded-circle p-3">
                        <img
                          src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/2.png"
                          alt="Canceled orders"
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={3}>
                  <Card className="h-100 border-0 shadow-sm bg-light-warning">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <div>
                        <h2 className="text-warning mb-0">0</h2>
                        <p className="mb-0">Refunded orders</p>
                      </div>
                      <div className="stat-icon bg-warning-light text-warning rounded-circle p-3">
                        <img
                          src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/3.png"
                          alt="Refunded orders"
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={3}>
                  <Card className="h-100 border-0 shadow-sm bg-light-danger">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <div>
                        <h2 className="text-danger mb-0">1</h2>
                        <p className="mb-0">Payment failed orders</p>
                      </div>
                      <div className="stat-icon bg-danger-light text-danger rounded-circle p-3">
                        <img
                          src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/4.png"
                          alt="Payment failed orders"
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Order Status Cards */}
              <Row className="mb-4">
                <Col md={3}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <img
                            src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/5.png"
                            alt="Unassigned Orders"
                          />
                        </div>
                        <div>
                          <p className="mb-0">Unassigned Orders</p>
                        </div>
                      </div>
                      <h3 className="text-primary mb-0">78</h3>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={3}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <img
                            src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/6.png"
                            alt="Accepted By Delivery Man"
                          />
                        </div>
                        <div>
                          <p className="mb-0">Accepted By Delivery Man</p>
                        </div>
                      </div>
                      <h3 className="text-purple mb-0">3</h3>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={3}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <img
                            src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/7.png"
                            alt="Cooking In Restaurant"
                          />
                        </div>
                        <div>
                          <p className="mb-0">Cooking In Restaurant</p>
                        </div>
                      </div>
                      <h3 className="text-success mb-0">5</h3>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={3}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <img
                            src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/8.png"
                            alt="Picked Up By Delivery Man"
                          />
                        </div>
                        <div>
                          <p className="mb-0">Picked Up By Delivery Man</p>
                        </div>
                      </div>
                      <h3 className="text-warning mb-0">1</h3>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Stats Legend */}
              <div className="d-flex justify-content-center mb-4">
                <div className="d-flex align-items-center me-4">
                  <div className="legend-dot bg-primary me-2"></div>
                  <span>Admin commission: $0.00</span>
                </div>
                <div className="d-flex align-items-center me-4">
                  <div className="legend-dot bg-success me-2"></div>
                  <span>Total sell: $0.00</span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="legend-dot bg-warning me-2"></div>
                  <span>Subscription: $0.00</span>
                </div>
              </div>

              {/* Chart Area */}
              <Card className="border-0 shadow-sm mb-4">
                <Card.Body>
                  <SimpleChart />
                  <div className="d-flex justify-content-end mt-2">
                    <span className="badge bg-light text-primary">Zone : All</span>
                  </div>
                </Card.Body>
              </Card>

              {/* User Statistics and Popular Restaurants */}
              <Row className="mb-4">
                <Col md={6}>
                  <UserStatistics />
                </Col>
                <Col md={6}>
                  <PopularRestaurants />
                </Col>
              </Row>

              {/* Top Deliveryman and Top Restaurants */}
              <Row className="mb-4">
                <Col md={6}>
                  <TopDeliveryman />
                </Col>
                <Col md={6}>
                  <TopRestaurants />
                </Col>
              </Row>

              {/* Top Foods */}
              <TopFoods />

              {/* Footer */}
              <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-center">
                <div className="text-muted small">© StackFood. Copyright 2025</div>
                <div className="d-flex align-items-center">
                  <Button variant="link" className="text-decoration-none">
                    Business setup
                  </Button>
                  <span className="mx-2">•</span>
                  <Button variant="link" className="text-decoration-none">
                    Profile
                  </Button>
                  <span className="mx-2">•</span>
                  <Button variant="link" className="text-decoration-none">
                    Dashboard
                  </Button>
                  <span className="mx-2">•</span>
                  <Button variant="link" className="text-decoration-none text-primary">
                    Software Version 8.0
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
