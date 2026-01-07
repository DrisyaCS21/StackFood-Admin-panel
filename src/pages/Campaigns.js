"use client"

import { useState, useEffect } from "react"
import { Card, Table, Form, Button, Badge, Pagination, Nav } from "react-bootstrap"
import { Search, Filter, Download, Eye, Edit, Trash2, Plus } from "react-feather"
import { Link, useLocation, useNavigate } from "react-router-dom"

// Mock data for campaigns
const mockCampaigns = [
  {
    id: 1,
    title: "Summer Special",
    image: "/placeholder.svg?height=50&width=50",
    startDate: "2025-06-01",
    endDate: "2025-08-31",
    discount: "20%",
    status: "active",
    type: "basic",
  },
  {
    id: 2,
    title: "Weekend Offer",
    image: "/placeholder.svg?height=50&width=50",
    startDate: "2025-04-15",
    endDate: "2025-12-31",
    discount: "15%",
    status: "active",
    type: "basic",
  },
  {
    id: 3,
    title: "Burger Fest",
    image: "/placeholder.svg?height=50&width=50",
    startDate: "2025-05-01",
    endDate: "2025-05-31",
    discount: "25%",
    status: "inactive",
    type: "food",
  },
  {
    id: 4,
    title: "Pizza Mania",
    image: "/placeholder.svg?height=50&width=50",
    startDate: "2025-07-01",
    endDate: "2025-07-15",
    discount: "30%",
    status: "upcoming",
    type: "food",
  },
  {
    id: 5,
    title: "Dessert Delight",
    image: "/placeholder.svg?height=50&width=50",
    startDate: "2025-06-15",
    endDate: "2025-07-15",
    discount: "10%",
    status: "active",
    type: "food",
  },
  {
    id: 6,
    title: "New Year Special",
    image: "/placeholder.svg?height=50&width=50",
    startDate: "2025-12-25",
    endDate: "2026-01-10",
    discount: "40%",
    status: "upcoming",
    type: "basic",
  },
]

const Campaigns = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [campaigns, setCampaigns] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("basic")

  const campaignsPerPage = 10

  useEffect(() => {
    // Set active tab based on URL
    const path = location.pathname
    if (path.includes("/campaigns/food")) {
      setActiveTab("food")
    } else {
      setActiveTab("basic")
    }

    // Simulate API call
    setTimeout(() => {
      setCampaigns(mockCampaigns)
      setLoading(false)
    }, 500)
  }, [location])

  // Filter campaigns based on search term, status, and type
  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || campaign.status === statusFilter

    const matchesType = campaign.type === activeTab

    return matchesSearch && matchesStatus && matchesType
  })

  // Pagination
  const indexOfLastCampaign = currentPage * campaignsPerPage
  const indexOfFirstCampaign = indexOfLastCampaign - campaignsPerPage
  const currentCampaigns = filteredCampaigns.slice(indexOfFirstCampaign, indexOfLastCampaign)
  const totalPages = Math.ceil(filteredCampaigns.length / campaignsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Status badge renderer
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge bg="success">Active</Badge>
      case "inactive":
        return <Badge bg="danger">Inactive</Badge>
      case "upcoming":
        return <Badge bg="warning">Upcoming</Badge>
      default:
        return <Badge bg="secondary">{status}</Badge>
    }
  }

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    navigate(`/campaigns/${tab}`)
    setCurrentPage(1)
  }

  return (
    <>
      <div className="main-content p-4 bg-light" style={{marginLeft: '100px'}}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Campaigns</h2>
          <div>
            <Button variant="success" className="me-2">
              <Download size={18} className="me-2" /> Export
            </Button>
            <Button as={Link} to={`/campaigns/${activeTab}/add`} variant="primary">
              <Plus size={18} className="me-2" /> Add Campaign
            </Button>
          </div>
        </div>

        <Card className="border-0 shadow-sm mb-4">
          <Card.Header className="bg-white">
            <Nav variant="tabs" className="border-bottom-0">
              <Nav.Item>
                <Nav.Link
                  active={activeTab === "basic"}
                  onClick={() => handleTabChange("basic")}
                  className={activeTab === "basic" ? "text-primary" : ""}
                >
                  Basic Campaigns
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTab === "food"}
                  onClick={() => handleTabChange("food")}
                  className={activeTab === "food" ? "text-primary" : ""}
                >
                  Food Campaigns
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
              <div className="d-flex mb-3 mb-md-0">
                <div className="position-relative me-2" style={{ width: "300px" }}>
                  <Form.Control
                    type="text"
                    placeholder="Search by Campaign Title"
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
                  <option value="upcoming">Upcoming</option>
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
                <p className="mt-2">Loading campaigns...</p>
              </div>
            ) : (
              <>
                <div className="table-responsive">
                  <Table hover className="align-middle">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Discount</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentCampaigns.length > 0 ? (
                        currentCampaigns.map((campaign) => (
                          <tr key={campaign.id}>
                            <td>#{campaign.id}</td>
                            <td>
                              <img
                                src={campaign.image || "/placeholder.svg"}
                                alt={campaign.title}
                                width="40"
                                height="40"
                                className="rounded"
                              />
                            </td>
                            <td>{campaign.title}</td>
                            <td>{campaign.startDate}</td>
                            <td>{campaign.endDate}</td>
                            <td>{campaign.discount}</td>
                            <td>{getStatusBadge(campaign.status)}</td>
                            <td>
                              <Button
                                as={Link}
                                to={`/campaigns/${activeTab}/${campaign.id}`}
                                variant="light"
                                size="sm"
                                className="me-1"
                                title="View"
                              >
                                <Eye size={16} />
                              </Button>
                              <Button
                                as={Link}
                                to={`/campaigns/${activeTab}/${campaign.id}/edit`}
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
                            No campaigns found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>

                {filteredCampaigns.length > campaignsPerPage && (
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

export default Campaigns
