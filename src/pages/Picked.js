import React from "react";
import { Table, Card, Container, Button, Form, Badge } from "react-bootstrap";

const Picked = () => {
  const orders = [
    {
      id: "100148",
      date: "11 JUN 2023 03:24 PM",
      customer: "Jdjidj Dhdhd",
      phone: "+8********",
      restaurant: "Hungry Puppets",
      amount: "$129.75",
      payment: "Unpaid",
      status: "Out For Delivery",
      deliveryType: "Home Delivery",
    },
  ];

  return (
    <Container fluid className="p-4" style={{marginLeft: '100px'}}>
      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            🙵️ Food On The Way Orders{" "}
            <span className="badge bg-secondary ms-2">{orders.length}</span>
          </h5>
          <div className="d-flex gap-2">
            <Form.Control type="search" placeholder="Search your order..." size="sm" />
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
                <th>Order ID</th>
                <th>Order Date</th>
                <th>Customer Information</th>
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
                  <td>{order.id}</td>
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
                    <span className="text-danger small fw-bold">{order.payment}</span>
                  </td>
                  <td>
                    <Badge bg="warning" text="dark">{order.status}</Badge>
                    <br />
                    <span className="text-muted small">{order.deliveryType}</span>
                  </td>
                  <td className="text-nowrap">
                    <Button variant="outline-warning" size="sm" className="me-2">👁️</Button>
                    <Button variant="outline-primary" size="sm">📀</Button>
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

export default Picked;
