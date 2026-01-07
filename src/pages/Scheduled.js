import React, { useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";

const Scheduled = () => {
  // Extended dummy data
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "John Doe",
      time: "2:30 PM",
      items: ["Pizza", "Coke"],
      status: "Pending",
    },
    {
      id: 2,
      customer: "Jane Smith",
      time: "3:00 PM",
      items: ["Burger", "Fries", "Pepsi"],
      status: "Preparing",
    },
    {
      id: 3,
      customer: "Alex Giri",
      time: "3:30 PM",
      items: ["Paneer Tikka", "Lassi"],
      status: "Pending",
    },
    {
      id: 4,
      customer: "Suraj Karki",
      time: "3:46 PM",
      items: ["Chicken Chilli", "Burger", "Lassi"],
      status: "Preparing",
    },
    {
      id: 5,
      customer: "Sita Rana",
      time: "4:00 PM",
      items: ["Momo", "Sprite"],
      status: "Pending",
    },
    {
      id: 6,
      customer: "Bikash Thapa",
      time: "4:15 PM",
      items: ["Chowmein", "Tea"],
      status: "Preparing",
    },
    {
      id: 7,
      customer: "Niranjan Lama",
      time: "4:30 PM",
      items: ["Fried Rice", "Ice Cream"],
      status: "Pending",
    },
    {
      id: 8,
      customer: "Reema Shrestha",
      time: "4:45 PM",
      items: ["Samosa", "Chai"],
      status: "Preparing",
    },
    {
      id: 9,
      customer: "Amit Kharel",
      time: "5:00 PM",
      items: ["Thukpa", "Lemon Soda"],
      status: "Pending",
    },
    {
      id: 10,
      customer: "Kabita Joshi",
      time: "5:15 PM",
      items: ["Pizza", "Milkshake"],
      status: "Pending",
    }
  ]);

  const updateStatus = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="p-4" style={{ marginLeft: '145px' }}>
      <h3 className="mb-4">Scheduled Orders</h3>
      {orders.length === 0 ? (
        <p>No scheduled orders.</p>
      ) : (
        orders.map((order) => (
          <Card className="mb-3" key={order.id}>
            <Card.Body>
              <Card.Title>
                {order.customer}{" "}
                <Badge
                  bg={
                    order.status === "Pending"
                      ? "warning"
                      : order.status === "Preparing"
                      ? "info"
                      : "success"
                  }
                >
                  {order.status}
                </Badge>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Scheduled Time: {order.time}
              </Card.Subtitle>
              <Card.Text>
                <strong>Items:</strong> {order.items.join(", ")}
              </Card.Text>
              {order.status === "Pending" && (
                <Button
                  variant="outline-primary"
                  onClick={() => updateStatus(order.id, "Preparing")}
                >
                  Mark as Preparing
                </Button>
              )}
              {order.status === "Preparing" && (
                <Button
                  variant="success"
                  onClick={() => updateStatus(order.id, "Completed")}
                >
                  Mark as Completed
                </Button>
              )}
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default Scheduled;
