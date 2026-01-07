"use client"

import { useState, useEffect } from "react"
import { Card, Table, Form, Button, Badge, Pagination } from "react-bootstrap"
import { Search, Filter, Download, Eye, Edit, Trash2 } from "react-feather"
import { Link } from "react-router-dom"

// Mock data for orders
const mockOrders = [
  {
    id: "100023",
    date: "2025-04-08 09:15:23",
    customer: "John Smith",
    restaurant: "Hungry Puppets",
    total: "$24.50",
    orderStatus: "delivered",
    paymentStatus: "paid",
  },
  {
    id: "100022",
    date: "2025-04-08 08:45:10",
    customer: "Emily Johnson",
    restaurant: "Café Monarch",
    total: "$18.75",
    orderStatus: "processing",
    paymentStatus: "paid",
  },
  {
    id: "100021",
    date: "2025-04-08 07:30:45",
    customer: "Michael Brown",
    restaurant: "The Capital Grill",
    total: "$32.20",
    orderStatus: "pending",
    paymentStatus: "unpaid",
  },
  {
    id: "100020",
    date: "2025-04-07 19:22:15",
    customer: "Sarah Wilson",
    restaurant: "Cheese Burger",
    total: "$15.99",
    orderStatus: "delivered",
    paymentStatus: "paid",
  },
  {
    id: "100019",
    date: "2025-04-07 18:10:30",
    customer: "David Lee",
    restaurant: "Redcliff Cafe",
    total: "$27.80",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
  },
  {
    id: "100018",
    date: "2025-04-07 16:45:20",
    customer: "Jennifer Martinez",
    restaurant: "Vintage Kitchen",
    total: "$21.35",
    orderStatus: "delivered",
    paymentStatus: "paid",
  },
  {
    id: "100017",
    date: "2025-04-07 14:30:05",
    customer: "Robert Taylor",
    restaurant: "Mini Kebab",
    total: "$19.99",
    orderStatus: "delivered",
    paymentStatus: "paid",
  },
  {
    id: "100016",
    date: "2025-04-07 12:15:40",
    customer: "Lisa Anderson",
    restaurant: "Pizza restaurant",
    total: "$22.50",
    orderStatus: "processing",
    paymentStatus: "paid",
  },
  {
    id: "100015",
    date: "2025-04-07 10:05:15",
    customer: "James Thomas",
    restaurant: "Cheesy Restaurant",
    total: "$16.75",
    orderStatus: "pending",
    paymentStatus: "unpaid",
  },
  {
    id: "100014",
    date: "2025-04-06 21:30:25",
    customer: "Patricia White",
    restaurant: "Tasty Takeaways",
    total: "$29.99",
    orderStatus: "delivered",
    paymentStatus: "paid",
  },
]

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const ordersPerPage = 10

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setOrders(mockOrders)
      setLoading(false)
    }, 500)
  }, [])

  // Filter orders based on search term and status
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.restaurant.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || order.orderStatus === statusFilter

    return matchesSearch && matchesStatus
  })

  // Pagination
  const indexOfLastOrder = currentPage * ordersPerPage
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder)
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Status badge renderer
  const getStatusBadge = (status) => {
    switch (status) {
      case "delivered":
        return <Badge bg="success">Delivered</Badge>
      case "processing":
        return <Badge bg="primary">Processing</Badge>
      case "pending":
        return <Badge bg="warning">Pending</Badge>
      case "cancelled":
        return <Badge bg="danger">Cancelled</Badge>
      default:
        return <Badge bg="secondary">{status}</Badge>
    }
  }

  // Payment status badge renderer
  const getPaymentBadge = (status) => {
    switch (status) {
      case "paid":
        return <Badge bg="success">Paid</Badge>
      case "unpaid":
        return <Badge bg="warning">Unpaid</Badge>
      case "refunded":
        return <Badge bg="danger">Refunded</Badge>
      default:
        return <Badge bg="secondary">{status}</Badge>
    }
  }

  return (
    <> 
      {/* <div className="container" style={{ marginLeft: '100px' }}> */}
      <div className="main-content p-4 bg-light" 
       style={{marginLeft: '145px'}}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Orders</h2>
          <Button variant="success">
            <Download size={18} className="me-2" /> Export
          </Button>
        </div>

        <Card className="border-0 shadow-sm mb-4">
          <Card.Body>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
              <div className="d-flex mb-3 mb-md-0">
                <div className="position-relative me-2" style={{ width: "300px" }}>
                  <Form.Control
                    type="text"
                    placeholder="Search by Order ID, Customer, or Restaurant"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search
                    size={18}
                    className="position-absolute"
                    style={{ top: "10px", right: "10px", opacity: 0.5 }}
                  />
                </div>
                <Form.Select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  style={{ width: "150px" }}
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </Form.Select>
              </div>
              <div>
                <Button variant="outline-secondary" className="me-2">
                  <Filter size={18} className="me-1" /> Filter
                </Button>
                <Button variant="outline-secondary">Reset</Button>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading orders...</p>
              </div>
            ) : (
              <>
                <div className="table-responsive">
                  <Table hover className="align-middle">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Customer</th>
                        <th>Restaurant</th>
                        <th>Total</th>
                        <th>Order Status</th>
                        <th>Payment Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentOrders.length > 0 ? (
                        currentOrders.map((order) => (
                          <tr key={order.id}>
                            <td>#{order.id}</td>
                            <td>{order.date}</td>
                            <td>{order.customer}</td>
                            <td>{order.restaurant}</td>
                            <td>{order.total}</td>
                            <td>{getStatusBadge(order.orderStatus)}</td>
                            <td>{getPaymentBadge(order.paymentStatus)}</td>
                            <td>
                              <Button
                                as={Link}
                                to={`/orders/${order.id}`}
                                variant="light"
                                size="sm"
                                className="me-1"
                                title="View"
                              >
                                <Eye size={16} />
                              </Button>
                              <Button
                                as={Link}
                                to={`/orders/${order.id}/edit`}
                                variant="light"
                                size="sm"
                                className="me-1"
                                title="Edit"
                              >
                                <Edit size={16} />
                              </Button>
                              <Button variant="light" size="sm" className="text-danger" title="Delete">
                                <Trash2 size={16} />
                              </Button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="8" className="text-center py-4">
                            No orders found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>

                {filteredOrders.length > ordersPerPage && (
                  <div className="d-flex justify-content-center mt-4">
                    <Pagination>
                      <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                      {[...Array(totalPages).keys()].map((number) => (
                        <Pagination.Item
                          key={number + 1}
                          active={number + 1 === currentPage}
                          onClick={() => paginate(number + 1)}
                        >
                          {number + 1}
                        </Pagination.Item>
                      ))}
                      <Pagination.Next
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      />
                    </Pagination>
                  </div>
                )}
              </>
            )}
          </Card.Body>
        </Card>
      </div>
      {/* </div> */}
    </>
  )
}

export default Orders
