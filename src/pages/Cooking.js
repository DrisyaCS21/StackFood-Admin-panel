import React from "react";
import { Table, Card, Container, Button, Form } from "react-bootstrap";

const Cooking = () => {
  const orders = [
    {
      id: "100130",
      date: "04 JUN 2023 09:33 AM",
      customer: "Jvjgjgjh Fjhkggh",
      phone: "+8********",
      restaurant: "Hungry Puppets",
      amount: "$129.75",
      paymentStatus: "Unpaid",
      orderStatus: "Handover",
    },
    {
      id: "100068",
      date: "11 JAN 2022 01:53 PM",
      customer: "Jane Cooper",
      phone: "+8********",
      restaurant: "Hungry Puppets",
      amount: "$99.75",
      paymentStatus: "Paid",
      orderStatus: "Confirmed",
    },
    {
      id: "100056",
      date: "15 NOV 2021 04:15 PM",
      customer: "Jane Doe",
      phone: "+8********",
      restaurant: "Cheese Burger",
      amount: "$81.60",
      paymentStatus: "Unpaid",
      orderStatus: "Confirmed",
    },
    {
      id: "100052",
      date: "17 OCT 2021 03:55 PM",
      customer: "Zubair Jamil",
      phone: "+9********",
      restaurant: "Cheese Burger",
      amount: "$1,266.84",
      paymentStatus: "Unpaid",
      orderStatus: "Confirmed",
    },
    {
      id: "100016",
      date: "22 AUG 2021 01:12 AM",
      customer: "Spencer Hastings",
      phone: "+8********",
      restaurant: "Vintage Kitchen",
      amount: "$4,393.20",
      paymentStatus: "Paid",
      orderStatus: "Confirmed",
    },
  ];

  return (
    <Container fluid className="p-4" style={{marginLeft: '100px'}}>
      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            🍳 Processing Orders <span className="badge bg-secondary ms-2">{orders.length}</span>
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
                    <span className={order.paymentStatus === "Paid" ? "text-success small fw-bold" : "text-danger small fw-bold"}>{order.paymentStatus}</span>
                  </td>
                  <td>
                    <span className={
                      order.orderStatus === "Confirmed" ? "text-primary" : "text-danger"
                    }>
                      {order.orderStatus}
                    </span>
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

export default Cooking;
