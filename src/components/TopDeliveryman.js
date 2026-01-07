import { Card } from "react-bootstrap"

const TopDeliveryman = () => {
  const deliverymen = [
    { name: "Esther", orders: 4, avatar: "https://stackfood-admin.6amtech.com/storage/app/public/delivery-man/2024-03-10-65ee8b441f6a0.png" },
    { name: "Jane", orders: 4, avatar: "https://stackfood-admin.6amtech.com/storage/app/public/delivery-man/2024-03-10-65ee8e7318f6d.png" },
    { name: "Kathryn", orders: 3, avatar: "https://stackfood-admin.6amtech.com/storage/app/public/delivery-man/2024-03-10-65ee8d23a486a.png" },
    { name: "Robert", orders: 2, avatar: "https://stackfood-admin.6amtech.com/storage/app/public/delivery-man/2024-03-10-65ee8ad116781.png" },
    { name: "Jerome", orders: 2, avatar: "https://stackfood-admin.6amtech.com/storage/app/public/delivery-man/2024-03-10-65ee8de451f42.png" },
    { name: "Jhon", orders: 2, avatar: "https://stackfood-admin.6amtech.com/storage/app/public/delivery-man/2024-03-10-65ee8e2e9b524.png" },
  ]

  return (
    <Card className="border-0 shadow-sm mb-4">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <span className="me-2">🚚</span>
            <h5 className="mb-0">Top Deliveryman</h5>
          </div>
          <span className="badge bg-light text-primary">Zone : All</span>
        </div>

        <div className="row g-4 text-center">
          {deliverymen.map((person, index) => (
            <div className="col-md-4 col-lg-2" key={index}>
              {/* Small Card for each deliveryman */}
              <Card className="border-0 shadow-sm">
                <Card.Body className="d-flex flex-column align-items-center">
                  <div className="rounded-circle overflow-hidden mb-2" style={{ width: "60px", height: "95px" }}>
                    <img
                      src={person.avatar || "/placeholder.svg"}
                      alt={person.name}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div className="fw-bold">{person.name}</div>
                  <div className="text-warning">{person.orders} Orders</div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}

export default TopDeliveryman
