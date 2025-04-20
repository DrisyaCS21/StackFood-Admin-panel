import { Card, Row, Col } from "react-bootstrap"

const TopFoods = () => {
  const ratedFoods = [
    {
      name: "Mutton Biriyani",
      rating: 5,
      reviews: 1,
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-611ff39525320.png",
    },
    {
      name: "Burger Combo",
      rating: 5,
      reviews: 1,
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e7a4b7b2a.png",
    },
    {
      name: "Veg Momos",
      rating: 5,
      reviews: 1,
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-611ff39525320.png",
    },
    {
      name: "Toll House Pie",
      rating: 5,
      reviews: 1,
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-611ff39525320.png",
    },
    {
      name: "Meat Pizza",
      rating: 4.5,
      reviews: 3,
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e7a4b7b2a.png",
    },
    {
      name: "Hazelnut semifreddo",
      rating: 4,
      reviews: 1,
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-611ff39525320.png",
    },
  ]

  const sellingFoods = [
    {
      name: "Medu Vada",
      sold: 9,
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e7a4b7b2a.png",
    },
    {
      name: "Meat Pizza",
      sold: 5,
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e7a4b7b2a.png",
    },
    {
      name: "Hazelnut semifreddo",
      sold: 3,
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-611ff39525320.png",
    },
    {
      name: "Burger Combo",
      sold: 2,
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e7a4b7b2a.png",
    },
    {
      name: "Grilled lemon herb M...",
      sold: 2,
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-611ff39525320.png",
    },
    {
      name: "Mutton Biriyani",
      sold: 2,
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-611ff39525320.png",
    },
  ]

  return (
    <Row className="g-3 mb-4">
      <Col md={6}>
        <Card className="border-0 shadow-sm h-100">
          <Card.Header className="bg-white border-0 pt-3 pb-0 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/most-rated.png"
                alt="Top Rated"
                className="me-2"
                width="24"
              />
              <h5 className="mb-0">Top Rated Foods</h5>
            </div>
            <span className="text-info">Zone : All</span>
          </Card.Header>
          <Card.Body>
            <Row className="g-4">
              {ratedFoods.map((food, index) => (
                <Col xs={6} md={4} key={index} className="text-center">
                  <div className="d-flex flex-column align-items-center">
                    <div className="mb-2" style={{ width: "80px", height: "80px" }}>
                      <img
                        src={food.image || "/placeholder.svg"}
                        alt={food.name}
                        className="img-fluid rounded"
                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                      />
                    </div>
                    <div className="fw-bold small text-truncate" style={{ maxWidth: "100%" }}>
                      {food.name}
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="text-warning me-1">★</span>
                      <span className="small">
                        {food.rating} ({food.reviews} {food.reviews === 1 ? "Review" : "Reviews"})
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
          <Card.Header className="bg-white border-0 pt-3 pb-0 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src="https://stackfood-admin.6amtech.com/public/assets/admin/img/dashboard/top-selling.png"
                alt="Top Selling"
                className="me-2"
                width="24"
              />
              <h5 className="mb-0">Top Selling Foods</h5>
            </div>
            <span className="text-info">Zone : All</span>
          </Card.Header>
          <Card.Body>
            <Row className="g-4">
              {sellingFoods.map((food, index) => (
                <Col xs={6} md={4} key={index}>
                  <div className="d-flex flex-column">
                    <div className="position-relative mb-2">
                      <img
                        src={food.image || "/placeholder.svg"}
                        alt={food.name}
                        className="img-fluid rounded w-100"
                        style={{ height: "120px", objectFit: "cover" }}
                      />
                      <div
                        className="position-absolute bottom-0 end-0 bg-primary text-white px-2 py-1 small"
                        style={{ borderTopLeftRadius: "0.25rem" }}
                      >
                        Sold:{food.sold}
                      </div>
                    </div>
                    <div className="text-center small fw-bold text-truncate">{food.name}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default TopFoods
