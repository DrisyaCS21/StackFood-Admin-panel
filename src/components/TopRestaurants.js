import { Card } from "react-bootstrap"

const TopRestaurants = () => {
  const restaurants = [
    { name: "Hungry Puppets", orders: 15, icon: "🍲" },
    { name: "Café Monarch", orders: 8, icon: "☕" },
    { name: "The Capital Grill", orders: 2, icon: "🍖" },
    { name: "Cheese Burger", orders: 2, icon: "🍔" },
    { name: "Redcliff Cafe", orders: 1, icon: "🏔️" },
    { name: "Frying Nemo", orders: 2, icon: "🍤" },
  ]

  return (
    <Card className="border-0 shadow-sm mb-4">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <span className="me-2">🍽️</span>
            <h5 className="mb-0">Top Restaurants</h5>
          </div>
          <span className="badge bg-light text-primary">Zone : All</span>
        </div>

        <div className="row g-3">
          {restaurants.map((restaurant, index) => (
            <div className="col-md-4 col-lg-2" key={index}>
              <div className="d-flex flex-column align-items-center text-center p-3 rounded bg-light">
                <div
                  className="rounded-circle bg-white p-2 mb-2 d-flex align-items-center justify-content-center"
                  style={{ width: "50px", height: "50px" }}
                >
                  <span style={{ fontSize: "24px" }}>{restaurant.icon}</span>
                </div>
                <div className="fw-bold">{restaurant.name}</div>
                <div className="text-muted">{restaurant.orders} Orders</div>
              </div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}

export default TopRestaurants

