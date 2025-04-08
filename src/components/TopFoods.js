import { Card, Row, Col } from "react-bootstrap"
import { Star } from "react-feather"

const TopFoods = () => {
  const ratedFoods = [
    { name: "Mutton Biriyani", rating: 5, reviews: 1, image: "/placeholder.svg?height=80&width=80" },
    { name: "Burger Combo", rating: 5, reviews: 1, image: "/placeholder.svg?height=80&width=80" },
    { name: "Veg Momos", rating: 5, reviews: 1, image: "/placeholder.svg?height=80&width=80" },
    { name: "Toll House Pie", rating: 5, reviews: 1, image: "/placeholder.svg?height=80&width=80" },
    { name: "Meat Pizza", rating: 4.5, reviews: 3, image: "/placeholder.svg?height=80&width=80" },
    { name: "Hazelnut semifreddo", rating: 4, reviews: 1, image: "/placeholder.svg?height=80&width=80" },
  ]

  const sellingFoods = [
    { name: "Medu Vada", sold: 9, image: "/placeholder.svg?height=100&width=200" },
    { name: "Meat Pizza", sold: 5, image: "/placeholder.svg?height=100&width=200" },
    { name: "Hazelnut semifreddo", sold: 3, image: "/placeholder.svg?height=100&width=200" },
    { name: "Burger Combo", sold: 2, image: "/placeholder.svg?height=100&width=200" },
    { name: "Grilled lemon herb Mediterranean chicken", sold: 2, image: "/placeholder.svg?height=100&width=200" },
    { name: "Mutton Biriyani", sold: 2, image: "/placeholder.svg?height=100&width=200" },
  ]

  return (
    <>
      <Row className="mb-4">
        <Col md={6}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  <span className="me-2">🍽️</span>
                  <h5 className="mb-0">Top Rated Foods</h5>
                </div>
                <span className="badge bg-light text-primary">Zone : All</span>
              </div>

              <Row className="g-3">
                {ratedFoods.map((food, index) => (
                  <Col md={4} key={index}>
                    <div className="text-center">
                      <div className="mb-2 mx-auto" style={{ width: "80px", height: "80px" }}>
                        <img src={food.image || "/placeholder.svg"} alt={food.name} className="img-fluid rounded" />
                      </div>
                      <div className="fw-bold small">{food.name}</div>
                      <div className="d-flex align-items-center justify-content-center">
                        <Star size={14} className="text-warning" fill="#ffc107" />
                        <span className="small ms-1">
                          {food.rating} ({food.reviews} Reviews)
                        </span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  <span className="me-2">📈</span>
                  <h5 className="mb-0">Top Selling Foods</h5>
                </div>
                <span className="badge bg-light text-primary">Zone : All</span>
              </div>

              <Row className="g-3">
                {sellingFoods.map((food, index) => (
                  <Col md={4} key={index}>
                    <div className="position-relative">
                      <img src={food.image || "/placeholder.svg"} alt={food.name} className="img-fluid rounded" />
                      <div className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 small rounded-bottom-start">
                        Sold: {food.sold}
                      </div>
                      <div className="mt-1 text-center small fw-bold">{food.name}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default TopFoods;


