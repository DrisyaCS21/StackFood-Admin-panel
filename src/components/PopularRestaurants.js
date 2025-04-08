import { Card } from "react-bootstrap"
import { Heart, Info } from "react-feather"

const PopularRestaurants = () => {
  const restaurants = [
    { name: "Café Monarch", likes: 7, icon: "☕" },
    { name: "Hungry Puppets", likes: 6, icon: "🍲" },
    { name: "Cheese Burger", likes: 5, icon: "🍔" },
    { name: "Redcliff Cafe", likes: 3, icon: "🏔️" },
    { name: "Vintage Kitchen", likes: 2, icon: "🍳" },
    { name: "The Capital Grill", likes: 2, icon: "🍖" },
    { name: "Mini Kebab", likes: 2, icon: "🔥" },
    { name: "Pizza restaurant", likes: 2, icon: "🍕" },
    { name: "Cheesy Restaurant", likes: 1, icon: "🧀" },
    { name: "Tasty Takeaways", likes: 1, icon: "🥡" },
    { name: "The Great Impasta", likes: 1, icon: "🍝" },
    { name: "Italian Fast Food", likes: 1, icon: "🇮🇹" },
  ]

  return (
    <Card className="border-0 shadow-sm mb-4">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <span className="me-2">❤️</span>
            <h5 className="mb-0">Most Popular Restaurants</h5>
            <Info size={16} className="ms-2 text-muted" />
          </div>
          <span className="badge bg-light text-primary">Zone : All</span>
        </div>

        <div className="row g-3">
          {restaurants.map((restaurant, index) => (
            <div className="col-md-6" key={index}>
              <div className="d-flex justify-content-between align-items-center p-2 rounded bg-light">
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle bg-white p-2 me-2 text-center"
                    style={{ width: "36px", height: "36px" }}
                  >
                    <span>{restaurant.icon}</span>
                  </div>
                  <span>{restaurant.name}</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-1">{restaurant.likes}</span>
                  <Heart size={16} className="text-danger" fill="#dc3545" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}

export default PopularRestaurants

