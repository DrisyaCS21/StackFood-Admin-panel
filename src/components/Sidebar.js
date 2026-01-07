"use client"
import { useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { Nav, Form, Button, InputGroup } from "react-bootstrap"
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
  SkipBack,
  Bill,
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
  LogOut,
} from "react-feather"

const Sidebar = ({
  expandedSections,
  toggleSection,
  sidebarCollapsed,
  setSidebarCollapsed,
  windowWidth,
  TOTAL_TOP_HEIGHT,
}) => {
  const location = useLocation()

  // Toggle sidebar for mobile
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  // Helper function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`)
  }

  return (
    <>
      {/* Sidebar Toggle Button (Mobile Only) */}
      {windowWidth < 768 && (
        <Button
          variant=""
          className="position-fixed d-md-none"
          style={{
            zIndex: 1040,
            top: 0,
            left: "10px",
          }}
          onClick={toggleSidebar}
        >
          <SkipBack size={15} />
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
            <Form.Control placeholder="Search Menu..." className="border-secondary text-white" />
          </InputGroup>
        </div>

        <Nav className="flex-column">
          <Nav.Link
            as={Link}
            to="/dashboard"
            className={`text-white d-flex align-items-center ${isActive("/dashboard") ? "active bg-primary" : ""}`}
          >
            <ShoppingBag size={18} className="me-2" /> Dashboard
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/pointofsale"
            className={`text-white d-flex align-items-center ${isActive("/pointofsale") ? "active bg-primary" : "" }`}
          >
            <FileText size={18} className="me-2" /> Point of sale
          </Nav.Link>

          {/* ORDER MANAGEMENT SECTION */}
          <div className="sidebar-section mt-3">
            <div className="sidebar-heading">ORDER MANAGEMENT</div>
            <Nav.Link
              onClick={() => toggleSection("orders")}
              className="text-white d-flex align-items-center justify-content-between"
            >
              <div>
                <FileText size={18} className="me-2" /> Orders
              </div>
              {expandedSections["orders"] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </Nav.Link>
            {expandedSections["orders"] && (
              <div className="ms-4">
                <Nav.Link
                  as={Link}
                  to="/orders"
                  className={`text-white py-1 ${isActive("/orders") && !isActive("/orders/pending") && !isActive("/orders/completed") ? "active" : ""}`}
                >
                  All 
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/scheduled"
                  className={`text-white py-1 ${isActive("/orders/pending") ? "active" : ""}`}
                >
                  Scheduled
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/orders"
                  className={`text-white py-1 ${isActive("/orders/completed") ? "active" : ""}`}
                >
                  Pending
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/acceptedorders"
                  className={`text-white py-1 ${isActive("/orders/completed") ? "active" : ""}`}
                >
                  Accepted
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/cooking"
                  className={`text-white py-1 ${isActive("/orders/completed") ? "active" : ""}`}
                >
                  Processing
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/picked"
                  className={`text-white py-1 ${isActive("/orders/completed") ? "active" : ""}`}
                >
                  Food On The Way
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/deliveredorders"
                  className={`text-white py-1 ${isActive("/orders/completed") ? "active" : ""}`}
                >
                  Delivered
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/canceledorders"
                  className={`text-white py-1 ${isActive("/orders/completed") ? "active" : ""}`}
                >
                  Canceled
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/failedorders"
                  className={`text-white py-1 ${isActive("/orders/completed") ? "active" : ""}`}
                >
                  Payment Failed
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="refundedorders"
                  className={`text-white py-1 ${isActive("/orders/completed") ? "active" : ""}`}
                >
                  Refunded
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/orders/completed"
                  className={`text-white py-1 ${isActive("/orders/completed") ? "active" : ""}`}
                >
                  Dine In
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/orders/completed"
                  className={`text-white py-1 ${isActive("/orders/completed") ? "active" : ""}`}
                >
                  Offline Payments
                </Nav.Link>
              </div>
            )}

            <Nav.Link
              as={Link}
              to="/subscription-orders"
              className={`text-white d-flex align-items-center ${isActive("/subscription-orders") ? "active bg-primary" : ""}`}
            >
              <FileText size={18} className="me-2" /> Subscription Orders
            </Nav.Link>

            <Nav.Link
              onClick={() => toggleSection("dispatch")}
              className="text-white d-flex align-items-center justify-content-between"
            >
              <div>
                <Truck size={18} className="me-2" /> Dispatch Management
              </div>
              {expandedSections["dispatch"] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </Nav.Link>
            {expandedSections["dispatch"] && (
              <div className="ms-4">
                <Nav.Link as={Link} to="/unassignedorders" className="text-white py-1">
                  Searching DeliveryMan
                </Nav.Link>
                <Nav.Link as={Link} to="/dispatch/assign" className="text-white py-1">
                  Ongoing Orders
                </Nav.Link>
              </div>
            )}

            <Nav.Link
              onClick={() => toggleSection("refunds")}
              className="text-white d-flex align-items-center justify-content-between"
            >
              <div>
                <RefreshCw size={18} className="me-2" /> Order Refunds
              </div>
              {expandedSections["refunds"] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </Nav.Link>
            {expandedSections["refunds"] && (
              <div className="ms-4">
                <Nav.Link as={Link} to="/refunds/list" className="text-white py-1">
                  New Refund Requests
                </Nav.Link>
              </div>
            )}
          </div>

          {/* RESTAURANT MANAGEMENT SECTION */}
          <div className="sidebar-section mt-3">
            <div className="sidebar-heading">RESTAURANT MANAGEMENT</div>
            <Nav.Link
              as={Link}
              to="/zonesetup"
              className={`text-white d-flex align-items-center ${isActive("/zone-setup") ? "active bg-primary" : ""}`}
            >
              <MapPin size={18} className="me-2" /> Zone Setup
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/cuisine"
              className={`text-white d-flex align-items-center ${isActive("/cuisine") ? "active bg-primary" : ""}`}
            >
              <Coffee size={18} className="me-2" /> Cuisine
            </Nav.Link>
            <Nav.Link
              onClick={() => toggleSection("restaurants")}
              className="text-white d-flex align-items-center justify-content-between"
            >
              <div>
                <Grid size={18} className="me-2" /> Restaurants
              </div>
              {expandedSections["restaurants"] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </Nav.Link>
            {expandedSections["restaurants"] && (
              <div className="ms-4">
                <Nav.Link
                  as={Link}
                  to="/restaurants"
                  className={`text-white py-1 ${isActive("/restaurants") && !isActive("/restaurants/add") ? "active" : ""}`}
                >
                  Add Restaurant
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/restaurants/add"
                  className={`text-white py-1 ${isActive("/restaurants/add") ? "active" : ""}`}
                >
                 Restaurant List
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/restaurants/add"
                  className={`text-white py-1 ${isActive("/restaurants/add") ? "active" : ""}`}
                >
                 New Joining Request
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/restaurants/add"
                  className={`text-white py-1 ${isActive("/restaurants/add") ? "active" : ""}`}
                >
                 Bulk Import
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/restaurants/add"
                  className={`text-white py-1 ${isActive("/restaurants/add") ? "active" : ""}`}
                >
                 Bulk Export
                </Nav.Link>
              </div>
            )}
          </div>

          {/* FOOD MANAGEMENT SECTION */}
          <div className="sidebar-section mt-3">
            <div className="sidebar-heading">FOOD MANAGEMENT</div>
            <Nav.Link
              onClick={() => toggleSection("categories")}
              className="text-white d-flex align-items-center justify-content-between"
            >
              <div>
                <Package size={18} className="me-2" /> Categories
              </div>
              {expandedSections["categories"] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </Nav.Link>
            {expandedSections["categories"] && (
              <div className="ms-4">
                <Nav.Link
                  as={Link}
                  to="/Categories"
                  className={`text-white py-1 ${isActive("/categories") && !isActive("/categories/add") ? "active" : ""}`}
                >
                  Category
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/categories/add"
                  className={`text-white py-1 ${isActive("/categories/add") ? "active" : ""}`}
                >
                  Sub Category
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/categories/add"
                  className={`text-white py-1 ${isActive("/categories/add") ? "active" : ""}`}
                >
                  Bulk Import
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/categories/add"
                  className={`text-white py-1 ${isActive("/categories/add") ? "active" : ""}`}
                >
                  Bulk Export
                </Nav.Link>
              </div>
            )}

            <Nav.Link
              onClick={() => toggleSection("addons")}
              className="text-white d-flex align-items-center justify-content-between"
            >
              <div>
                <PlusCircle size={18} className="me-2" /> Addons
              </div>
              {expandedSections["addons"] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </Nav.Link>
            {expandedSections["addons"] && (
              <div className="ms-4">
                <Nav.Link
                  as={Link}
                  to="/addons"
                  className={`text-white py-1 ${isActive("/addons") && !isActive("/addons/add") ? "active" : ""}`}
                >
                  List
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/addons/add"
                  className={`text-white py-1 ${isActive("/addons/add") ? "active" : ""}`}
                >
                  Bulk Import
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/addons/add"
                  className={`text-white py-1 ${isActive("/addons/add") ? "active" : ""}`}
                >
                  Bulk Export
                </Nav.Link>
              </div>
            )}

            <Nav.Link
              onClick={() => toggleSection("foods")}
              className="text-white d-flex align-items-center justify-content-between"
            >
              <div>
                <Coffee size={18} className="me-2" /> Foods
              </div>
              {expandedSections["foods"] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </Nav.Link>
            {expandedSections["foods"] && (
              <div className="ms-4">
                <Nav.Link
                  as={Link}
                  to="/foods"
                  className={`text-white py-1 ${isActive("/foods") && !isActive("/foods/add") ? "active" : ""}`}
                >
                  Add New
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/foods/add"
                  className={`text-white py-1 ${isActive("/foods/add") ? "active" : ""}`}
                >
                  List
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/foods/add"
                  className={`text-white py-1 ${isActive("/foods/add") ? "active" : ""}`}
                >
                  Review
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/foods/add"
                  className={`text-white py-1 ${isActive("/foods/add") ? "active" : ""}`}
                >
                  Bulk Import
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/foods/add"
                  className={`text-white py-1 ${isActive("/foods/add") ? "active" : ""}`}
                >
                  Bulk Export
                </Nav.Link>
              </div>
            )}
          </div>

          {/* PROMOTIONS MANAGEMENT SECTION */}
          <div className="sidebar-section mt-3">
            <div className="sidebar-heading">PROMOTIONS MANAGEMENT</div>
            <Nav.Link
              onClick={() => toggleSection("promotions")}
              className="text-white d-flex align-items-center justify-content-between"
            >
              <div>
                <Gift size={18} className="me-2" /> Campaigns
              </div>
              {expandedSections["promotions"] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </Nav.Link>
            {expandedSections["promotions"] && (
              <div className="ms-4">
                <Nav.Link
                  as={Link}
                  to="/campaigns/basic"
                  className={`text-white py-1 ${isActive("/campaigns/basic") ? "active" : ""}`}
                >
                  <span className="me-2">•</span> Basic Campaign
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/campaigns/food"
                  className={`text-white py-1 ${isActive("/campaigns/food") ? "active" : ""}`}
                >
                  <span className="me-2">•</span> Food Campaign
                </Nav.Link>
              </div>
            )}

            <Nav.Link
              as={Link}
              to="/coupons"
              className={`text-white d-flex align-items-center ${isActive("/coupons") ? "active bg-primary" : ""}`}
            >
              <Tag size={18} className="me-2" /> Coupons
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/cashback"
              className={`text-white d-flex align-items-center ${isActive("/cashback") ? "active bg-primary" : ""}`}
            >
              <DollarSign size={18} className="me-2" /> Cashback
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/banners"
              className={`text-white d-flex align-items-center ${isActive("/banners") ? "active bg-primary" : ""}`}
            >
              <Image size={18} className="me-2" /> Banners
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/promotional-banner"
              className={`text-white d-flex align-items-center ${isActive("/promotional-banner") ? "active bg-primary" : ""}`}
            >
              <Image size={18} className="me-2" /> Promotional Banner
            </Nav.Link>

            <Nav.Link
              onClick={() => toggleSection("advertisement")}
              className="text-white d-flex align-items-center justify-content-between"
            >
              <div>
                <Image size={18} className="me-2" /> Advertisement
              </div>
              {expandedSections["advertisement"] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </Nav.Link>
            {expandedSections["advertisement"] && (
              <div className="ms-4">
                <Nav.Link as={Link} to="/advertisement/list" className="text-white py-1">
                  New Advertisement
                </Nav.Link>
                <Nav.Link as={Link} to="/advertisement/create" className="text-white py-1">
                  Ad Requests
                </Nav.Link>
                <Nav.Link as={Link} to="/advertisement/create" className="text-white py-1">
                  Ads List
                </Nav.Link>
              </div>
            )}

            <Nav.Link
              as={Link}
              to="/push-notification"
              className={`text-white d-flex align-items-center ${isActive("/push-notification") ? "active bg-primary" : ""}`}
            >
              <Bell size={18} className="me-2" /> Push Notification
            </Nav.Link>
          </div>

          {/* HELP & SUPPORT SECTION */}
          <div className="sidebar-section mt-3">
            <div className="sidebar-heading">HELP & SUPPORT</div>
            <Nav.Link
              as={Link}
              to="/chatting"
              className={`text-white d-flex align-items-center ${isActive("/chattings") ? "active bg-primary" : ""}`}
            >
              <MessageSquare size={18} className="me-2" /> Chattings
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact-messages"
              className={`text-white d-flex align-items-center ${isActive("/contact-messages") ? "active bg-primary" : ""}`}
            >
              <Mail size={18} className="me-2" /> Contact Messages
            </Nav.Link>
          </div>

          {/* CUSTOMER MANAGEMENT SECTION */}
          <div className="sidebar-section mt-3">
            <div className="sidebar-heading">CUSTOMER MANAGEMENT</div>
            <Nav.Link
              as={Link}
              to="/customers"
              className={`text-white d-flex align-items-center ${isActive("/customers") ? "active bg-primary" : ""}`}
            >
              <Users size={18} className="me-2" /> Customers
            </Nav.Link>
            
           <Nav.Link
            onClick={() => toggleSection("wallet")}
            className="text-white d-flex alighn-items-center justify-content-between" >
              <div>
                <Image size={18} className="me-2" /> Wallet
              </div>
              {expandedSections["wallet"]? <ChevronDown size={16} /> : <ChevronRight size={16} />}
           </Nav.Link>
            {expandedSections["wallet"] && (
              <div className="ms-4">
                <Nav.Link as={Link} to="/wallet/list" className="text-white py-1">
                 Add Fund
                </Nav.Link>
                <Nav.Link as={Link} to="/wallet/list" className="text-white py-1">
                 Bonus
                </Nav.Link>
              </div>
            )}
            <Nav.Link
              as={Link}
              to="/loyalty-point"
              className={`text-white d-flex align-items-center ${isActive("/loyalty-point") ? "active bg-primary" : ""}`}
            >
              <Star size={18} className="me-2" /> Loyalty Point
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/subscribed-mail-list"
              className={`text-white d-flex align-items-center ${isActive("/subscribed-mail-list") ? "active bg-primary" : ""}`}
            >
              <Mail size={18} className="me-2" /> Subscribed Mail List
            </Nav.Link>
          </div>

          {/* DELIVERYMAN MANAGEMENT SECTION */}
          <div className="sidebar-section mt-3">
            <div className="sidebar-heading">DELIVERYMAN MANAGEMENT</div>
            <Nav.Link
              as={Link}
              to="/vehicles-category"
              className={`text-white d-flex align-items-center ${isActive("/vehicles-category") ? "active bg-primary" : ""}`}
            >
              <Truck size={18} className="me-2" /> Vehicles Category Setup
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/shift-setup"
              className={`text-white d-flex align-items-center ${isActive("/shift-setup") ? "active bg-primary" : ""}`}
            >
              <Clock size={18} className="me-2" /> Shift Setup
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/deliveryman"
              className={`text-white d-flex align-items-center ${isActive("/deliveryman") ? "active bg-primary" : ""}`}
            >
              <User size={18} className="me-2" /> Deliveryman
            </Nav.Link>
          </div>

          {/* DISBURSEMENT MANAGEMENT SECTION */}
          <div className="sidebar-section mt-3">
            <div className="sidebar-heading">DISBURSEMENT MANAGEMENT</div>
            <Nav.Link
              as={Link}
              to="/restaurant-disbursement"
              className={`text-white d-flex align-items-center ${isActive("/restaurant-disbursement") ? "active bg-primary" : ""}`}
            >
              <CreditCard size={18} className="me-2" /> Restaurant Disbursement
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/deliveryman-disbursement"
              className={`text-white d-flex align-items-center ${isActive("/deliveryman-disbursement") ? "active bg-primary" : ""}`}
            >
              <CreditCard size={18} className="me-2" /> Deliveryman Disbursement
            </Nav.Link>
          </div>

          {/* REPORT MANAGEMENT SECTION */}
          <div className="sidebar-section mt-3">
            <div className="sidebar-heading">REPORT MANAGEMENT</div>
            <Nav.Link
              as={Link}
              to="/transaction-report"
              className={`text-white d-flex align-items-center ${isActive("/transaction-report") ? "active bg-primary" : ""}`}
            >
              <BarChart2 size={18} className="me-2" /> Transaction Report
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/expense-report"
              className={`text-white d-flex align-items-center ${isActive("/expense-report") ? "active bg-primary" : ""}`}
            >
              <BarChart2 size={18} className="me-2" /> Expense Report
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/disbursement-report"
              className={`text-white d-flex align-items-center ${isActive("/disbursement-report") ? "active bg-primary" : ""}`}
            >
              <BarChart2 size={18} className="me-2" /> Disbursement Report
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/food-report"
              className={`text-white d-flex align-items-center ${isActive("/food-report") ? "active bg-primary" : ""}`}
            >
              <BarChart2 size={18} className="me-2" /> Food Report
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/order-report"
              className={`text-white d-flex align-items-center ${isActive("/order-report") ? "active bg-primary" : ""}`}
            >
              <BarChart2 size={18} className="me-2" /> Order Report
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/restaurant-report"
              className={`text-white d-flex align-items-center ${isActive("/restaurant-report") ? "active bg-primary" : ""}`}
            >
              <BarChart2 size={18} className="me-2" /> Restaurant Report
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/customer-report"
              className={`text-white d-flex align-items-center ${isActive("/customer-report") ? "active bg-primary" : ""}`}
            >
              <BarChart2 size={18} className="me-2" /> Customer Report
            </Nav.Link>
          </div>

          {/* TRANSACTION MANAGEMENT SECTION */}
          <div className="sidebar-section mt-3">
            <div className="sidebar-heading">TRANSACTION MANAGEMENT</div>
            <Nav.Link
              as={Link}
              to="/collect-cash"
              className={`text-white d-flex align-items-center ${isActive("/collect-cash") ? "active bg-primary" : ""}`}
            >
              <DollarSign size={18} className="me-2" /> Collect Cash
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/restaurant-withdraws"
              className={`text-white d-flex align-items-center ${isActive("/restaurant-withdraws") ? "active bg-primary" : ""}`}
            >
              <DollarSign size={18} className="me-2" /> Restaurant Withdraws
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/deliveryman-payments"
              className={`text-white d-flex align-items-center ${isActive("/deliveryman-payments") ? "active bg-primary" : ""}`}
            >
              <DollarSign size={18} className="me-2" /> DeliveryMan Payments
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/withdraw-method"
              className={`text-white d-flex align-items-center ${isActive("/withdraw-method") ? "active bg-primary" : ""}`}
            >
              <DollarSign size={18} className="me-2" /> Withdraw Method
            </Nav.Link>
          </div>

          {/* EMPLOYEE MANAGEMENT SECTION */}
          <div className="sidebar-section mt-3">
            <div className="sidebar-heading">EMPLOYEE MANAGEMENT</div>
            <Nav.Link
              as={Link}
              to="/employee-role"
              className={`text-white d-flex align-items-center ${isActive("/employee-role") ? "active bg-primary" : ""}`}
            >
              <Briefcase size={18} className="me-2" /> Employee Role
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/employees"
              className={`text-white d-flex align-items-center ${isActive("/employees") ? "active bg-primary" : ""}`}
            >
              <Users size={18} className="me-2" /> Employees
            </Nav.Link>
          </div>

          {/* BUSINESS SETTINGS SECTION */}
          <div className="sidebar-section mt-3">
            <div className="sidebar-heading">BUSINESS SETTINGS</div>
            <Nav.Link
              as={Link}
              to="/settings"
              className={`text-white d-flex align-items-center ${isActive("/business-setup") ? "active bg-primary" : ""}`}
            >
              <Settings size={18} className="me-2" /> Business Setup
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/subscription-management"
              className={`text-white d-flex align-items-center ${isActive("/subscription-management") ? "active bg-primary" : ""}`}
            >
              <Clipboard size={18} className="me-2" /> Subscription Management
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/email-template"
              className={`text-white d-flex align-items-center ${isActive("/email-template") ? "active bg-primary" : ""}`}
            >
              <Mail size={18} className="me-2" /> Email Template
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/theme-settings"
              className={`text-white d-flex align-items-center ${isActive("/theme-settings") ? "active bg-primary" : ""}`}
            >
              <Sliders size={18} className="me-2" /> Theme Settings
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/gallery"
              className={`text-white d-flex align-items-center ${isActive("/gallery") ? "active bg-primary" : ""}`}
            >
              <Image size={18} className="me-2" /> Gallery
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/login-setup"
              className={`text-white d-flex align-items-center ${isActive("/login-setup") ? "active bg-primary" : ""}`}
            >
              <Lock size={18} className="me-2" /> Login Setup
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/pages-social-media"
              className={`text-white d-flex align-items-center ${isActive("/pages-social-media") ? "active bg-primary" : ""}`}
            >
              <Share2 size={18} className="me-2" /> Pages & Social Media
            </Nav.Link>
          </div>

          {/* SYSTEM SETTINGS SECTION */}
          <div className="sidebar-section mt-3">
            <div className="sidebar-heading">SYSTEM SETTINGS</div>
            <Nav.Link
              as={Link}
              to="/third-party-configs"
              className={`text-white d-flex align-items-center ${isActive("/third-party-configs") ? "active bg-primary" : ""}`}
            >
              <Layers size={18} className="me-2" /> 3rd Party & Configurations
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/app-web-settings"
              className={`text-white d-flex align-items-center ${isActive("/app-web-settings") ? "active bg-primary" : ""}`}
            >
              <Globe size={18} className="me-2" /> App & Web Settings
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/notification-channels"
              className={`text-white d-flex align-items-center ${isActive("/notification-channels") ? "active bg-primary" : ""}`}
            >
              <Bell size={18} className="me-2" /> Notification Channels
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/landing-page-settings"
              className={`text-white d-flex align-items-center ${isActive("/landing-page-settings") ? "active bg-primary" : ""}`}
            >
              <Globe size={18} className="me-2" /> Landing Page Settings
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/react-site"
              className={`text-white d-flex align-items-center ${isActive("/react-site") ? "active bg-primary" : ""}`}
            >
              <Globe size={18} className="me-2" /> React Site
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/clean-database"
              className={`text-white d-flex align-items-center ${isActive("/clean-database") ? "active bg-primary" : ""}`}
            >
              <Database size={18} className="me-2" /> Clean Database
            </Nav.Link>
          </div>

          {/* SYSTEM ADDONS SECTION */}
          <div className="sidebar-section mt-3">
            <div className="sidebar-heading">SYSTEM ADDONS</div>
            <Nav.Link
              as={Link}
              to="/system-addons"
              className={`text-white d-flex align-items-center ${isActive("/system-addons") ? "active bg-primary" : ""}`}
            >
              <PlusSquare size={18} className="me-2" /> System Addons
            </Nav.Link>
          </div>

          {/* LOGOUT */}
          <div className="sidebar-section mt-3 mb-4">
            <Nav.Link
              as={Link}
              to="/"
              className="text-white d-flex align-items-center"
              onClick={() => {
                localStorage.removeItem("isAuthenticated")
                localStorage.removeItem("user")
              }}
            >
              <LogOut size={18} className="me-2" /> Logout
            </Nav.Link>
          </div>
        </Nav>
      </div>
    </>
  )
}

export default Sidebar;