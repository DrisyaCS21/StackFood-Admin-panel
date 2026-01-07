import React from "react";
import { Table, Card, Container, Button, Form } from "react-bootstrap";

const Canceledorders = () => {
  const orders = [
    {
      id: "100146",
      date: "08 JUN 2023 05:46 PM",
      customer: "Munam ShahariEr Test",
      phone: "+8**********",
      restaurant: "Hungry Puppets",
      amount: "$786.58",
      status: "Unpaid",
      delivery: "Home Delivery",
    },
    {
      id: "100064",
      date: "11 JAN 2022 01:02 PM",
      customer: "Vijay Vijay",
      phone: "+9**********",
      restaurant: "Cheese Burger",
      amount: "$81.60",
      status: "Unpaid",
      delivery: "Home Delivery",
    },
    {
      id: "100063",
      date: "11 JAN 2022 12:59 PM",
      customer: "V H",
      phone: "+9**********",
      restaurant: "Hungry Puppets",
      amount: "$357.00",
      status: "Unpaid",
      delivery: "Home Delivery",
    },
    {
      id: "100062",
      date: "11 JAN 2022 12:54 PM",
      customer: "Vijay Vijay",
      phone: "+9**********",
      restaurant: "Hungry Puppets",
      amount: "$357.00",
      status: "Unpaid",
      delivery: "Home Delivery",
    },
    {
      id: "100031",
      date: "22 AUG 2021 09:20 AM",
      customer: "Hello Yes",
      phone: "+2**********",
      restaurant: "Vintage Kitchen",
      amount: "$4,832.80",
      status: "Unpaid",
      delivery: "Home Delivery",
    },
    {
      id: "100029",
      date: "22 AUG 2021 08:10 AM",
      customer: "Demo Demo",
      phone: "+2**********",
      restaurant: "Pizza restaurant",
      amount: "$1,542.50",
      status: "Unpaid",
      delivery: "Home Delivery",
    },
    {
      id: "100025",
      date: "22 AUG 2021 01:34 AM",
      customer: "Spencer Hastings",
      phone: "+8**********",
      restaurant: "Pizza restaurant",
      amount: "$28,358.75",
      status: "Unpaid",
      delivery: "Home Delivery",
    },
    {
      id: "100007",
      date: "21 AUG 2021 09:38 PM",
      customer: "Invalid Customer Data",
      phone: "",
      restaurant: "Hungry Puppets",
      amount: "$1,682.24",
      status: "Unpaid",
      delivery: "Home Delivery",
    },
    {
      id: "100006",
      date: "21 AUG 2021 05:27 PM",
      customer: "Invalid Customer Data",
      phone: "",
      restaurant: "Italian Fast Food",
      amount: "$2,761.77",
      status: "Unpaid",
      delivery: "Home Delivery",
    },
    {
      id: "100004",
      date: "21 AUG 2021 02:14 PM",
      customer: "Invalid Customer Data",
      phone: "",
      restaurant: "Café Monarch",
      amount: "$4,744.37",
      status: "Unpaid",
      delivery: "Home Delivery",
    },
    {
      id: "100003",
      date: "21 AUG 2021 02:03 PM",
      customer: "Invalid Customer Data",
      phone: "",
      restaurant: "Café Monarch",
      amount: "$143.00",
      status: "Unpaid",
      delivery: "Take Away",
    },
  ];

  return (
    <Container fluid className="p-4" style={{marginLeft: '100px'}} >
      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            ❌ Canceled Orders <span className="badge bg-secondary ms-2">{orders.length}</span>
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
                    {order.customer.includes("Invalid") ? (
                      <span className="badge bg-danger">{order.customer}</span>
                    ) : (
                      <>
                        {order.customer}
                        <br />
                        <span className="text-muted small">{order.phone}</span>
                      </>
                    )}
                  </td>
                  <td>{order.restaurant}</td>
                  <td>
                    {order.amount}
                    <br />
                    <span className="text-danger small fw-bold">{order.status}</span>
                  </td>
                  <td>
                    <span className="badge bg-danger">Canceled</span>
                    <br />
                    <span className="text-muted small">{order.delivery}</span>
                  </td>
                  <td className="text-nowrap">
                    <Button variant="outline-warning" size="sm" className="me-2">
                      👁️
                    </Button>
                    <Button variant="outline-primary" size="sm">
                      💾
                    </Button>
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

export default Canceledorders;
