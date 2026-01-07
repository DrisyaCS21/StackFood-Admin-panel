"use client"

import { useState, useEffect } from "react"
import { Card, Table, Form, Button, Badge, Pagination } from "react-bootstrap"
import { Search, Filter, Download, Eye, Edit, Trash2, Plus } from "react-feather"
import { Link } from "react-router-dom"

// Mock data for categories
const mockCategories = [
  {
    id: 1,
    name: "Biriyani",
    image: "/placeholder.svg?height=50&width=50",
    totalItems: 24,
    status: "active",
    priority: 1,
  },
  {
    id: 2,
    name: "Fast Food",
    image: "/placeholder.svg?height=50&width=50",
    totalItems: 36,
    status: "active",
    priority: 2,
  },
  {
    id: 3,
    name: "Chinese",
    image: "/placeholder.svg?height=50&width=50",
    totalItems: 18,
    status: "active",
    priority: 3,
  },
  {
    id: 4,
    name: "Dessert",
    image: "/placeholder.svg?height=50&width=50",
    totalItems: 15,
    status: "active",
    priority: 4,
  },
  {
    id: 5,
    name: "Pizza",
    image: "/placeholder.svg?height=50&width=50",
    totalItems: 12,
    status: "active",
    priority: 5,
  },
  {
    id: 6,
    name: "Kebab",
    image: "/placeholder.svg?height=50&width=50",
    totalItems: 9,
    status: "inactive",
    priority: 6,
  },
  {
    id: 7,
    name: "Mediterranean",
    image: "/placeholder.svg?height=50&width=50",
    totalItems: 7,
    status: "active",
    priority: 7,
  },
  {
    id: 8,
    name: "Italian",
    image: "/placeholder.svg?height=50&width=50",
    totalItems: 14,
    status: "active",
    priority: 8,
  },
]

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const categoriesPerPage = 10

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCategories(mockCategories)
      setLoading(false)
    }, 500)
  }, [])

  // Filter categories based on search term and status
  const filteredCategories = categories.filter((category) => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || category.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Pagination
  const indexOfLastCategory = currentPage * categoriesPerPage
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage
  const currentCategories = filteredCategories.slice(indexOfFirstCategory, indexOfLastCategory)
  const totalPages = Math.ceil(filteredCategories.length / categoriesPerPage)

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
      <div className="main-content p-4 bg-light" style={{marginLeft: '100px'}} >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Categories</h2>
          <div>
            <Button variant="success" className="me-2">
              <Download size={18} className="me-2" /> Export
            </Button>
            <Button as={Link} to="/categories/add" variant="primary">
              <Plus size={18} className="me-2" /> Add Category
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
                    placeholder="Search by Category Name"
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
                <p className="mt-2">Loading categories...</p>
              </div>
            ) : (
              <>
                <div className="table-responsive">
                  <Table hover className="align-middle">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Total Items</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentCategories.length > 0 ? (
                        currentCategories.map((category) => (
                          <tr key={category.id}>
                            <td>#{category.id}</td>
                            <td>
                              <img
                                src={category.image || "/placeholder.svg"}
                                alt={category.name}
                                width="40"
                                height="40"
                                className="rounded"
                              />
                            </td>
                            <td>{category.name}</td>
                            <td>{category.totalItems}</td>
                            <td>{getStatusBadge(category.status)}</td>
                            <td>{category.priority}</td>
                            <td>
                              <Button
                                as={Link}
                                to={`/categories/${category.id}`}
                                variant="light"
                                size="sm"
                                className="me-1"
                                title="View"
                              >
                                <Eye size={16} />
                              </Button>
                              <Button
                                as={Link}
                                to={`/categories/${category.id}/edit`}
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
                          <td colSpan="7" className="text-center py-4">
                            No categories found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>

                {filteredCategories.length > categoriesPerPage && (
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

export default Categories
