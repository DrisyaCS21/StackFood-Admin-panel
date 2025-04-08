import { Card } from "react-bootstrap"

const TopDeliveryman = () => {
  const deliverymen = [
    { name: "Esther", orders: 4, avatar: "/placeholder.svg?height=60&width=60" },
    { name: "Jane", orders: 4, avatar: "/placeholder.svg?height=60&width=60" },
    { name: "Kathryn", orders: 3, avatar: "/placeholder.svg?height=60&width=60" },
    { name: "Robert", orders: 2, avatar: "/placeholder.svg?height=60&width=60" },
    { name: "Jerome", orders: 2, avatar: "/placeholder.svg?height=60&width=60" },
    { name: "Jhon", orders: 2, avatar: "/placeholder.svg?height=60&width=60" },
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
              <div className="d-flex flex-column align-items-center">
                <div className="rounded-circle overflow-hidden mb-2" style={{ width: "60px", height: "60px" }}>
                  <img
                    src={person.avatar || "/placeholder.svg"}
                    alt={person.name}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="fw-bold">{person.name}</div>
                <div className="text-warning">{person.orders} Orders</div>
              </div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}

export default TopDeliveryman

