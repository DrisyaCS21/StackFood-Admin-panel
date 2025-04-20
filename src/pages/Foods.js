"use client"

import { useState, useEffect } from "react"
import { Card, Table, Form, Button, Badge, Pagination } from "react-bootstrap"
import { Search, Filter, Download, Eye, Edit, Trash2, Plus } from "react-feather"
import { Link } from "react-router-dom"
import Dashboard from "../components/Dashboard"

// Mock data for foods
const mockFoods = [
  {
    id: 1,
    name: "Mutton Biriyani",
    category: "Biriyani",
    restaurant: "Hungry Puppets",
    price: "$12.99",
    discount: "10%",
    status: "active",
    rating: 4.8,
    orders: 156,
  },
  {
    id: 2,
    name: "Burger Combo",
    category: "Fast Food",
    restaurant: "Cheese Burger",
    price: "$9.99",
    discount: "5%",
    status: "active",
    rating: 4.5,
    orders: 132,
  },
  {
    id: 3,
    name: "Veg Momos",
    category: "Chinese",
    restaurant: "The Capital Grill",
    price: "$7.99",
    discount: "0%",
    status: "active",
    rating: 4.2,
    orders: 89,
  },
  {
    id: 4,
    name: "Toll House Pie",
    category: "Dessert",
    restaurant: "Café Monarch",
    price: "$6.99",
    discount: "0%",
    status: "active",
    rating: 4.7,
    orders: 112,
  },
  {
    id: 5,
    name: "Meat Pizza",
    category: "Pizza",
    restaurant: "Pizza Restaurant",
    price: "$14.99",
    discount: "15%",
    status: "active",
    rating: 4.6,
    orders: 145,
  },
  {
    id: 6,
    name: "Hazelnut semifreddo",
    category: "Dessert",
    restaurant: "Vintage Kitchen",
    price: "$8.99",
    discount: "0%",
    status: "inactive",
    rating: 4.4,
    orders: 78,
  },
  {
    id: 7,
    name: "Chicken Kebab",
    category: "Kebab",
    restaurant: "Mini Kebab",
    price: "$11.99",
    discount: "8%",
    status: "active",
    rating: 4.3,
    orders: 96,
  },
  {
    id: 8,
    name: "Grilled lemon herb Mediterranean chicken",
    category: "Mediterranean",
    restaurant: "Redcliff Cafe",
    price: "$13.99",
    discount: "10%",
    status: "active",
    rating: 4.5,
    orders: 87,
  },
]

const Foods = () => {
  const [foods, setFoods] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const foodsPerPage = 10

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setFoods(mockFoods)
      setLoading(false)
    }, 500)
  }, [])

  // Get unique categories for filter
  const categories = ["all", ...new Set(mockFoods.map((food) => food.category))]

  // Filter foods based on search term, category and status
  const filteredFoods = foods.filter((food) => {
    const matchesSearch =
      food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      food.restaurant.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = categoryFilter === "all" || food.category === categoryFilter

    const matchesStatus = statusFilter === "all" || food.status === statusFilter

    return matchesSearch && matchesCategory && matchesStatus
  })

  // Pagination
  const indexOfLastFood = currentPage * foodsPerPage
  const indexOfFirstFood = indexOfLastFood - foodsPerPage
  const currentFoods = filteredFoods.slice(indexOfFirstFood, indexOfLastFood)
  const totalPages = Math.ceil(filteredFoods.length / foodsPerPage)

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
      <Dashboard />
      <div className="main-content p-4 bg-light">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Foods</h2>
          <div>
            <Button variant="success" className="me-2">
              <Download size={18} className="me-2" /> Export
            </Button>
            <Button as={Link} to="/foods/add" variant="primary">
              <Plus size={18} className="me-2" /> Add Food
            </Button>
          </div>
        </div>

        <Card className="border-0 shadow-sm mb-4">
          <Card.Body>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
              <div className="d-flex flex-wrap mb-3 mb-md-0">
                <div className="position-relative me-2 mb-2 mb-md-0" style={{ width: "250px" }}>
                  <Form.Control
                    type="text"
                    placeholder="Search by Name or Restaurant"
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
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="me-2 mb-2 mb-md-0"
                  style={{ width: "150px" }}
                >
                  <option value="all">All Categories</option>
                  {categories
                    .filter((cat) => cat !== "all")
                    .map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                </Form.Select>
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
                <p className="mt-2">Loading foods...</p>
              </div>
            ) : (
              <>
                <div className="table-responsive">
                  <Table hover className="align-middle">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Restaurant</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Status</th>
                        <th>Rating</th>
                        <th>Orders</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentFoods.length > 0 ? (
                        currentFoods.map((food) => (
                          <tr key={food.id}>
                            <td>#{food.id}</td>
                            <td>{food.name}</td>
                            <td>{food.category}</td>
                            <td>{food.restaurant}</td>
                            <td>{food.price}</td>
                            <td>{food.discount}</td>
                            <td>{getStatusBadge(food.status)}</td>
                            <td>⭐ {food.rating}</td>
                            <td>{food.orders}</td>
                            <td>
                              <Button
                                as={Link}
                                to={`/foods/${food.id}`}
                                variant="light"
                                size="sm"
                                className="me-1"
                                title="View"
                              >
                                <Eye size={16} />
                              </Button>
                              <Button
                                as={Link}
                                to={`/foods/${food.id}/edit`}
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
                          <td colSpan="10" className="text-center py-4">
                            No foods found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>

                {filteredFoods.length > foodsPerPage && (
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

export default Foods
