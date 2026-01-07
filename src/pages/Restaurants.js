"use client"

import { useState, useEffect } from "react"
import { Card, Table, Form, Button, Badge, Pagination } from "react-bootstrap"
import { Search, Filter, Download, Eye, Edit, Trash2, Plus } from "react-feather"
import { Link } from "react-router-dom"
// import Dashboard from "../components/Dashboard"

// Mock data for restaurants
const mockRestaurants = [
  {
    id: 1,
    name: "Hungry Puppets",
    owner: "John Smith",
    email: "john@hungrypuppets.com",
    phone: "+1 234-567-8901",
    location: "New York, NY",
    joinDate: "2024-01-15",
    status: "active",
    orders: 156,
  },
  {
    id: 2,
    name: "Café Monarch",
    owner: "Emily Johnson",
    email: "emily@cafemonarch.com",
    phone: "+1 234-567-8902",
    location: "Los Angeles, CA",
    joinDate: "2024-02-10",
    status: "active",
    orders: 132,
  },
  {
    id: 3,
    name: "The Capital Grill",
    owner: "Michael Brown",
    email: "michael@capitalgrill.com",
    phone: "+1 234-567-8903",
    location: "Chicago, IL",
    joinDate: "2024-01-25",
    status: "inactive",
    orders: 89,
  },
  {
    id: 4,
    name: "Cheese Burger",
    owner: "Sarah Wilson",
    email: "sarah@cheeseburger.com",
    phone: "+1 234-567-8904",
    location: "Houston, TX",
    joinDate: "2024-03-05",
    status: "active",
    orders: 112,
  },
  {
    id: 5,
    name: "Redcliff Cafe",
    owner: "David Lee",
    email: "david@redcliffcafe.com",
    phone: "+1 234-567-8905",
    location: "Miami, FL",
    joinDate: "2024-02-18",
    status: "pending",
    orders: 45,
  },
  {
    id: 6,
    name: "Vintage Kitchen",
    owner: "Jennifer Martinez",
    email: "jennifer@vintagekitchen.com",
    phone: "+1 234-567-8906",
    location: "Seattle, WA",
    joinDate: "2024-01-30",
    status: "active",
    orders: 98,
  },
  {
    id: 7,
    name: "Mini Kebab",
    owner: "Robert Taylor",
    email: "robert@minikebab.com",
    phone: "+1 234-567-8907",
    location: "Boston, MA",
    joinDate: "2024-03-12",
    status: "active",
    orders: 76,
  },
  {
    id: 8,
    name: "Pizza Restaurant",
    owner: "Lisa Anderson",
    email: "lisa@pizzarestaurant.com",
    phone: "+1 234-567-8908",
    location: "Denver, CO",
    joinDate: "2024-02-25",
    status: "inactive",
    orders: 67,
  },
]

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const restaurantsPerPage = 10

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setRestaurants(mockRestaurants)
      setLoading(false)
    }, 500)
  }, [])

  // Filter restaurants based on search term and status
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || restaurant.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Pagination
  const indexOfLastRestaurant = currentPage * restaurantsPerPage
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage
  const currentRestaurants = filteredRestaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant)
  const totalPages = Math.ceil(filteredRestaurants.length / restaurantsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Status badge renderer
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge bg="success">Active</Badge>
      case "inactive":
        return <Badge bg="danger">Inactive</Badge>
      case "pending":
        return <Badge bg="warning">Pending</Badge>
      default:
        return <Badge bg="secondary">{status}</Badge>
    }
  }

  return (
    <>
      {/* <Dashboard /> */}
      <div className="main-content p-4 bg-light" style={{marginLeft: '100px'}}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Restaurants</h2>
          <div>
            <Button variant="success" className="me-2">
              <Download size={18} className="me-2" /> Export
            </Button>
            <Button as={Link} to="/restaurants/add" variant="primary">
              <Plus size={18} className="me-2" /> Add Restaurant
            </Button>
          </div>
        </div>

        <Card className="border-0 shadow-sm mb-4">
          <Card.Body>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
              <div className="d-flex mb-3 mb-md-0">
                <div className="position-relative me-2" style={{ width: "300px" }}>
                  <Form.Control
                    type="text"
                    placeholder="Search by Name, Owner, Email, or Location"
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
                  <option value="pending">Pending</option>
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
                <p className="mt-2">Loading restaurants...</p>
              </div>
            ) : (
              <>
                <div className="table-responsive">
                  <Table hover className="align-middle">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Owner</th>
                        <th>Email</th>
                        <th>Location</th>
                        <th>Join Date</th>
                        <th>Status</th>
                        <th>Orders</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentRestaurants.length > 0 ? (
                        currentRestaurants.map((restaurant) => (
                          <tr key={restaurant.id}>
                            <td>#{restaurant.id}</td>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.owner}</td>
                            <td>{restaurant.email}</td>
                            <td>{restaurant.location}</td>
                            <td>{restaurant.joinDate}</td>
                            <td>{getStatusBadge(restaurant.status)}</td>
                            <td>{restaurant.orders}</td>
                            <td>
                              <Button
                                as={Link}
                                to={`/restaurants/${restaurant.id}`}
                                variant="light"
                                size="sm"
                                className="me-1"
                                title="View"
                              >
                                <Eye size={16} />
                              </Button>
                              <Button
                                as={Link}
                                to={`/restaurants/${restaurant.id}/edit`}
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
                            No restaurants found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>

                {filteredRestaurants.length > restaurantsPerPage && (
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

export default Restaurants
