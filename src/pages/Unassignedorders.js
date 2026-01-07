import React from "react";
import { Table, Card, Container, Button, Form } from "react-bootstrap";

const Unassignedorders = () => {
  const orders = [
    {
      id: "100160",
      date: "05 APR 2025 10:13 PM",
      customer: "Jane Doe",
      phone: "+8********",
      restaurant: "Hungry Puppets",
      amount: "$1,402.49",
      status: "Unpaid",
    },
    {
      id: "100158",
      date: "02 JAN 2024 06:48 AM",
      customer: "Brooklyn Simmons",
      phone: "+8********",
      restaurant: "The Great Impasta",
      amount: "$1,911.20",
      status: "Unpaid",
    },
    {
      id: "100149",
      date: "11 JUN 2023 03:24 PM",
      customer: "Jdjidj Dhhddd",
      phone: "+8********",
      restaurant: "Café Monarch",
      amount: "$275.41",
      status: "Unpaid",
    },
     {
      id: "100158",
      date: "02 JAN 2024 06:48 AM",
      customer: "Brooklyn Simmons",
      phone: "+8********",
      restaurant: "The Great Impasta",
      amount: "$1,911.20",
      status: "Unpaid",
    },
    {
      id: "100149",
      date: "11 JUN 2023 03:24 PM",
      customer: "Jdjidj Dhhddd",
      phone: "+8********",
      restaurant: "Café Monarch",
      amount: "$275.41",
      status: "Unpaid",
    },
     {
      id: "100158",
      date: "02 JAN 2024 06:48 AM",
      customer: "Brooklyn Simmons",
      phone: "+8********",
      restaurant: "The Great Impasta",
      amount: "$1,911.20",
      status: "Unpaid",
    },
    {
      id: "100149",
      date: "11 JUN 2023 03:24 PM",
      customer: "Jdjidj Dhhddd",
      phone: "+8********",
      restaurant: "Café Monarch",
      amount: "$275.41",
      status: "Unpaid",
    },
     {
      id: "100158",
      date: "02 JAN 2024 06:48 AM",
      customer: "Brooklyn Simmons",
      phone: "+8********",
      restaurant: "The Great Impasta",
      amount: "$1,911.20",
      status: "Unpaid",
    },
    {
      id: "100149",
      date: "11 JUN 2023 03:24 PM",
      customer: "Jdjidj Dhhddd",
      phone: "+8********",
      restaurant: "Café Monarch",
      amount: "$275.41",
      status: "Unpaid",
    },
     {
      id: "100158",
      date: "02 JAN 2024 06:48 AM",
      customer: "Brooklyn Simmons",
      phone: "+8********",
      restaurant: "The Great Impasta",
      amount: "$1,911.20",
      status: "Unpaid",
    },
    {
      id: "100149",
      date: "11 JUN 2023 03:24 PM",
      customer: "Jdjidj Dhhddd",
      phone: "+8********",
      restaurant: "Café Monarch",
      amount: "$275.41",
      status: "Unpaid",
    },
    // Add more dummy data as needed
  ];

  return (
    <Container fluid className="p-4" style={{marginLeft: '100px'}} >
      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            🚚 Searching For Deliverymen Orders <span className="badge bg-secondary ms-2">{orders.length}</span>
          </h5>
          <div className="d-flex gap-2">
            <Form.Control type="search" placeholder="Search by order id" size="sm" />
            <Button variant="light" size="sm">Export ⬇</Button>
            <Button variant="light" size="sm">Filters</Button>
            <Button variant="light" size="sm">Columns</Button>
          </div>
        </Card.Header>

        <Card.Body className="p-0">
          <Table hover responsive className="mb-0">
            <thead className="table-light">
              <tr>
                <th>Sl</th>
                <th>Order</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Restaurant</th>
                <th>Total Amount</th>
                <th>Order Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id}>
                  <td>{index + 1}</td>
                  <td className="text-primary text-decoration-underline">{order.id}</td>
                  <td>{order.date}</td>
                  <td>
                    {order.customer}
                    <br />
                    <span className="text-muted small">{order.phone}</span>
                  </td>
                  <td>{order.restaurant}</td>
                  <td>
                    {order.amount}
                    <br />
                    <span className="text-danger small fw-bold">{order.status}</span>
                  </td>
                  <td>
                    <span className="badge bg-info text-dark">Pending</span>
                    <br />
                    <span className="text-muted small">Home Delivery</span>
                  </td>
                  <td className="text-nowrap">
                    <Button variant="outline-warning" size="sm" className="me-2">👁️</Button>
                    <Button variant="outline-primary" size="sm">💾</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Unassignedorders;
