"use client"

import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Navbar, Nav, Form, Button, Dropdown, InputGroup } from "react-bootstrap"
import {
  Search,
  ShoppingBag,
  FileText,
  Truck,
  RefreshCw,
  MapPin,
  Coffee,
  Grid,
  Package,
  PlusCircle,
  Settings,
  Bell,
  User,
  ChevronDown,
  ChevronRight,
  Gift,
  Tag,
  X,
  Menu,
  MessageSquare,
  Mail,
  Users,
  Star,
  DollarSign,
  CreditCard,
  BarChart2,
  Clipboard,
  Briefcase,
  Globe,
  Sliders,
  Database,
  Layers,
  Image,
  Lock,
  Share2,
  PlusSquare,
  Clock,
} from "react-feather"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Dashboard.css"
import SimpleChart from "./SimpleChart"
import UserStatistics from "./UserStatistics"
import PopularRestaurants from "./PopularRestaurants"
import TopDeliveryman from "./TopDeliveryman"
import TopRestaurants from "./TopRestaurants"
import TopFoods from "./TopFoods"

const Dashboard = () => {
  const [expandedSections, setExpandedSections] = useState({})
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // Constants for layout calculations
  const NAVBAR_HEIGHT = 60 // Approximate height of navbar
  const BANNER_HEIGHT = 40 // Approximate height of the demo banner
  const TOTAL_TOP_HEIGHT = NAVBAR_HEIGHT + BANNER_HEIGHT

  useEffect(() => {
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

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
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
        <Button variant="warning" className="ms-3 py-1 px-3">
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
            {/* <span className="ms-2 fw-bold text-secondary">STACK FOOD</span> */}
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
                    <div className="fw-bold">Jhon Doe</div>
                    <div className="small text-muted">a********@admin.com</div>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
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
        {/* Sidebar Toggle Button (Mobile Only) */}
        {windowWidth < 768 && (
          <Button
            variant="dark"
            className="position-fixed d-md-none"
            style={{
              zIndex: 1040,
              top: `${TOTAL_TOP_HEIGHT + 10}px`,
              left: "10px",
            }}
            onClick={toggleSidebar}
          >
            <Menu size={18} />
          </Button>
        )}

        {/* Sidebar */}
        <div
          className={`sidebar bg-dark text-white ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}
          style={{
            width: "260px",
            height: `calc(100vh - ${TOTAL_TOP_HEIGHT}px)`,
            position: "fixed",
            top: `${TOTAL_TOP_HEIGHT}px`,
            left: sidebarCollapsed ? "-260px" : "0",
            transition: "left 0.3s ease-in-out",
            zIndex: 1030,
            overflowY: "auto",
          }}
        >
          {windowWidth < 768 && (
            <div className="d-flex justify-content-end p-2">
              <Button variant="link" className="text-white p-0" onClick={toggleSidebar}>
                <X size={20} />
              </Button>
            </div>
          )}

          <div className="p-3">
            <InputGroup>
              <InputGroup.Text className="bg-transparent border-secondary text-white">
                <Search size={16} />
              </InputGroup.Text>
              <Form.Control placeholder="Search Menu..." className="bg-transparent border-secondary text-white" />
            </InputGroup>
          </div>

          <Nav className="flex-column">
            <Nav.Link href="#" className="text-white d-flex align-items-center">
              <ShoppingBag size={18} className="me-2" /> Point Of Sale
            </Nav.Link>

            {/* ORDER MANAGEMENT SECTION */}
            <div className="sidebar-section mt-3">
              <div className="sidebar-heading">ORDER MANAGEMENT</div>
              <Nav.Link
                href="#"
                className="text-white d-flex align-items-center justify-content-between"
                onClick={() => toggleSection("orders")}
              >
                <div>
                  <FileText size={18} className="me-2" /> Orders
                </div>
                {expandedSections["orders"] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </Nav.Link>
              {expandedSections["orders"] && (
                <div className="ms-4">
                  <Nav.Link href="#" className="text-white py-1">
                    All Orders
                  </Nav.Link>
                  <Nav.Link href="#" className="text-white py-1">
                    Pending Orders
                  </Nav.Link>
                  <Nav.Link href="#" className="text-white py-1">
                    Completed Orders
                  </Nav.Link>
                </div>
              )}

              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <FileText size={18} className="me-2" /> Subscription Orders
              </Nav.Link>

              <Nav.Link
                href="#"
                className="text-white d-flex align-items-center justify-content-between"
                onClick={() => toggleSection("dispatch")}
              >
                <div>
                  <Truck size={18} className="me-2" /> Dispatch Management
                </div>
                {expandedSections["dispatch"] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </Nav.Link>

              <Nav.Link
                href="#"
                className="text-white d-flex align-items-center justify-content-between"
                onClick={() => toggleSection("refunds")}
              >
                <div>
                  <RefreshCw size={18} className="me-2" /> Order Refunds
                </div>
                {expandedSections["refunds"] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </Nav.Link>
            </div>

            {/* RESTAURANT MANAGEMENT SECTION */}
            <div className="sidebar-section mt-3">
              <div className="sidebar-heading">RESTAURANT MANAGEMENT</div>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <MapPin size={18} className="me-2" /> Zone Setup
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Coffee size={18} className="me-2" /> Cuisine
              </Nav.Link>
              <Nav.Link
                href="#"
                className="text-white d-flex align-items-center justify-content-between"
                onClick={() => toggleSection("restaurants")}
              >
                <div>
                  <Grid size={18} className="me-2" /> Restaurants
                </div>
                {expandedSections["restaurants"] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </Nav.Link>
            </div>

            {/* FOOD MANAGEMENT SECTION */}
            <div className="sidebar-section mt-3">
              <div className="sidebar-heading">FOOD MANAGEMENT</div>
              <Nav.Link
                href="#"
                className="text-white d-flex align-items-center justify-content-between"
                onClick={() => toggleSection("categories")}
              >
                <div>
                  <Package size={18} className="me-2" /> Categories
                </div>
                {expandedSections["categories"] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </Nav.Link>
              <Nav.Link
                href="#"
                className="text-white d-flex align-items-center justify-content-between"
                onClick={() => toggleSection("addons")}
              >
                <div>
                  <PlusCircle size={18} className="me-2" /> Addons
                </div>
                {expandedSections["addons"] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </Nav.Link>
              <Nav.Link
                href="#"
                className="text-white d-flex align-items-center justify-content-between"
                onClick={() => toggleSection("foods")}
              >
                <div>
                  <Coffee size={18} className="me-2" /> Foods
                </div>
                {expandedSections["foods"] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </Nav.Link>
            </div>

            {/* PROMOTIONS MANAGEMENT SECTION */}
            <div className="sidebar-section mt-3">
              <div className="sidebar-heading">PROMOTIONS MANAGEMENT</div>
              <Nav.Link 
                href="#" 
                className="text-white d-flex align-items-center justify-content-between"
                onClick={() => toggleSection('promotions')}
              >
                <div>
                  <Gift size={18} className="me-2" /> Campaigns
                </div>
                {expandedSections['promotions'] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </Nav.Link>
              {expandedSections['promotions'] && (
                <div className="ms-4">
                  <Nav.Link href="#" className="text-white py-1">
                    <span className="me-2">•</span> Basic Campaign
                  </Nav.Link>
                  <Nav.Link href="#" className="text-white py-1">
                    <span className="me-2">•</span> Food Campaign
                  </Nav.Link>
                </div>
              )}
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Tag size={18} className="me-2" /> Coupons
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <DollarSign size={18} className="me-2" /> Cashback
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Image size={18} className="me-2" /> Banners
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Image size={18} className="me-2" /> Promotional Banner
              </Nav.Link>
              <Nav.Link 
                href="#" 
                className="text-white d-flex align-items-center justify-content-between"
                onClick={() => toggleSection('advertisement')}
              >
                <div>
                  <Image size={18} className="me-2" /> Advertisement
                </div>
                {expandedSections['advertisement'] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Bell size={18} className="me-2" /> Push Notification
              </Nav.Link>
            </div>

            {/* HELP & SUPPORT SECTION */}
            <div className="sidebar-section mt-3">
              <div className="sidebar-heading">HELP & SUPPORT</div>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <MessageSquare size={18} className="me-2" /> Chattings
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Mail size={18} className="me-2" /> Contact Messages
              </Nav.Link>
            </div>

            {/* CUSTOMER MANAGEMENT SECTION */}
            <div className="sidebar-section mt-3">
              <div className="sidebar-heading">CUSTOMER MANAGEMENT</div>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Users size={18} className="me-2" /> Customers
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <DollarSign size={18} className="me-2" /> Wallet
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Star size={18} className="me-2" /> Loyalty Point
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Mail size={18} className="me-2" /> Subscribed Mail List
              </Nav.Link>
            </div>

            {/* DELIVERYMAN MANAGEMENT SECTION */}
            <div className="sidebar-section mt-3">
              <div className="sidebar-heading">DELIVERYMAN MANAGEMENT</div>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Truck size={18} className="me-2" /> Vehicles Category Setup
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Clock size={18} className="me-2" /> Shift Setup
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <User size={18} className="me-2" /> Deliveryman
              </Nav.Link>
            </div>

            {/* DISBURSEMENT MANAGEMENT SECTION */}
            <div className="sidebar-section mt-3">
              <div className="sidebar-heading">DISBURSEMENT MANAGEMENT</div>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <CreditCard size={18} className="me-2" /> Restaurant Disbursement
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <CreditCard size={18} className="me-2" /> Deliveryman Disbursement
              </Nav.Link>
            </div>

            {/* REPORT MANAGEMENT SECTION */}
            <div className="sidebar-section mt-3">
              <div className="sidebar-heading">REPORT MANAGEMENT</div>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <BarChart2 size={18} className="me-2" /> Transaction Report
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <BarChart2 size={18} className="me-2" /> Expense Report
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <BarChart2 size={18} className="me-2" /> Disbursement Report
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <BarChart2 size={18} className="me-2" /> Food Report
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <BarChart2 size={18} className="me-2" /> Order Report
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <BarChart2 size={18} className="me-2" /> Restaurant Report
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <BarChart2 size={18} className="me-2" /> Customer Report
              </Nav.Link>
            </div>

            {/* TRANSACTION MANAGEMENT SECTION */}
            <div className="sidebar-section mt-3">
              <div className="sidebar-heading">TRANSACTION MANAGEMENT</div>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <DollarSign size={18} className="me-2" /> Collect Cash
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <DollarSign size={18} className="me-2" /> Restaurant Withdraws
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <DollarSign size={18} className="me-2" /> DeliveryMan Payments
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <DollarSign size={18} className="me-2" /> Withdraw Method
              </Nav.Link>
            </div>

            {/* EMPLOYEE MANAGEMENT SECTION */}
            <div className="sidebar-section mt-3">
              <div className="sidebar-heading">EMPLOYEE MANAGEMENT</div>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Briefcase size={18} className="me-2" /> Employee Role
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Users size={18} className="me-2" /> Employees
              </Nav.Link>
            </div>

            {/* BUSINESS SETTINGS SECTION */}
            <div className="sidebar-section mt-3">
              <div className="sidebar-heading">BUSINESS SETTINGS</div>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Settings size={18} className="me-2" /> Business Setup
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Clipboard size={18} className="me-2" /> Subscription Management
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Mail size={18} className="me-2" /> Email Template
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Sliders size={18} className="me-2" /> Theme Settings
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Image size={18} className="me-2" /> Gallery
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Lock size={18} className="me-2" /> Login Setup
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Share2 size={18} className="me-2" /> Pages & Social Media
              </Nav.Link>
            </div>

            {/* SYSTEM SETTINGS SECTION */}
            <div className="sidebar-section mt-3">
              <div className="sidebar-heading">SYSTEM SETTINGS</div>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Layers size={18} className="me-2" /> 3rd Party & Configurations
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Globe size={18} className="me-2" /> App & Web Settings
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Bell size={18} className="me-2" /> Notification Channels
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Globe size={18} className="me-2" /> Landing Page Settings
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Globe size={18} className="me-2" /> React Site
              </Nav.Link>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <Database size={18} className="me-2" /> Clean Database
              </Nav.Link>
            </div>

            {/* SYSTEM ADDONS SECTION */}
            <div className="sidebar-section mt-3">
              <div className="sidebar-heading">SYSTEM ADDONS</div>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <PlusSquare size={18} className="me-2" /> System Addons
              </Nav.Link>
            </div>
          </Nav>
        </div>

        {/* Main Content */}
        <div
          className="main-content p-4 bg-light flex-grow-1"
          style={{
            marginLeft: sidebarCollapsed ? "0" : windowWidth >= 768 ? "260px" : "0",
            transition: "margin-left 0.3s ease-in-out",
            minHeight: `calc(100vh - ${TOTAL_TOP_HEIGHT}px)`,
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="mb-1">Welcome, Jhon.</h2>
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

          <Card className="border-0 shadow-sm mb-4">
          <div>
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
                    {/* <Truck size={24} /> */}
                    <img src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/1.png" />
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
                    {/* <RefreshCw size={24} /> */}
                    <img src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/2.png"/>
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
                    <img src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/3.png"/>
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
                    <img src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/4.png"/>
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
                      {/* <FileText size={24} className="text-secondary" /> */}
                      <img src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/5.png"/>
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
                      <img src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/6.png" />
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
                      <img src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/7.png"/>
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
                      <img src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/8.png"/>
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
          </div>
          </Card>

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
        </div>
      </div>
    </div>
  )
}

export default Dashboard

