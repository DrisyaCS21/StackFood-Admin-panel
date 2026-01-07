"use client"

import { useState, useEffect } from "react"
import { Card, Table, Form, Button, Badge, Pagination } from "react-bootstrap"
import { Search, Filter, Download, Eye, Edit, Trash2 } from "react-feather"
import { Link } from "react-router-dom"


// Mock data for customers
const mockCustomers = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    phone: "+1 234-567-8901",
    totalOrders: 24,
    totalSpent: "$456.75",
    joinDate: "2024-01-15",
    status: "active",
  },
  {
    id: 2,
    name: "Emily Johnson",
    email: "emily@example.com",
    phone: "+1 234-567-8902",
    totalOrders: 18,
    totalSpent: "$325.50",
    joinDate: "2024-02-10",
    status: "active",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    phone: "+1 234-567-8903",
    totalOrders: 12,
    totalSpent: "$198.25",
    joinDate: "2024-01-25",
    status: "inactive",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    phone: "+1 234-567-8904",
    totalOrders: 32,
    totalSpent: "$587.90",
    joinDate: "2024-03-05",
    status: "active",
  },
  {
    id: 5,
    name: "David Lee",
    email: "david@example.com",
    phone: "+1 234-567-8905",
    totalOrders: 8,
    totalSpent: "$145.75",
    joinDate: "2024-02-18",
    status: "active",
  },
  {
    id: 6,
    name: "Jennifer Martinez",
    email: "jennifer@example.com",
    phone: "+1 234-567-8906",
    totalOrders: 15,
    totalSpent: "$278.50",
    joinDate: "2024-01-30",
    status: "active",
  },
  {
    id: 7,
    name: "Robert Taylor",
    email: "robert@example.com",
    phone: "+1 234-567-8907",
    totalOrders: 21,
    totalSpent: "$412.30",
    joinDate: "2024-03-12",
    status: "active",
  },
  {
    id: 8,
    name: "Lisa Anderson",
    email: "lisa@example.com",
    phone: "+1 234-567-8908",
    totalOrders: 9,
    totalSpent: "$167.80",
    joinDate: "2024-02-25",
    status: "inactive",
  },
]

const Customers = () => {
  const [customers, setCustomers] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const customersPerPage = 10

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCustomers(mockCustomers)
      setLoading(false)
    }, 500)
  }, [])

  // Filter customers based on search term and status
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)

    const matchesStatus = statusFilter === "all" || customer.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Pagination
  const indexOfLastCustomer = currentPage * customersPerPage
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage
  const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer)
  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Status badge renderer
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge bg="success">Active</Badge>
      case "inactive":
        return <Badge bg="danger">Inactive</Badge>
      default:
        return <Badge bg="secondary">{status}</Badge>
    }
  }

  return (
    <>
      
      <div className="main-content p-4 bg-light" style={{marginLeft: '100px'}}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Customers</h2>
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
                    placeholder="Search by Name, Email, or Phone"
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
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
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
                <p className="mt-2">Loading customers...</p>
              </div>
            ) : (
              <>
                <div className="table-responsive">
                  <Table hover className="align-middle">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Total Orders</th>
                        <th>Total Spent</th>
                        <th>Join Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentCustomers.length > 0 ? (
                        currentCustomers.map((customer) => (
                          <tr key={customer.id}>
                            <td>#{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.totalOrders}</td>
                            <td>{customer.totalSpent}</td>
                            <td>{customer.joinDate}</td>
                            <td>{getStatusBadge(customer.status)}</td>
                            <td>
                              <Button
                                as={Link}
                                to={`/customers/${customer.id}`}
                                variant="light"
                                size="sm"
                                className="me-1"
                                title="View"
                              >
                                <Eye size={16} />
                              </Button>
                              <Button
                                as={Link}
                                to={`/customers/${customer.id}/edit`}
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
                          <td colSpan="9" className="text-center py-4">
                            No customers found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>

                {filteredCustomers.length > customersPerPage && (
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
    </>
  )
}

export default Customers
