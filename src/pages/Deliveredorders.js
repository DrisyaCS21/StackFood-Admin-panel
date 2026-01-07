import React from "react";
import { Table, Card, Container, Button, Form } from "react-bootstrap";

const Deliveredorders = () => {
  const orders = [
{
  id: "100151",
  date: "21 NOV 2023 03:43 PM",
  customer: "John Doe",
  phone: "+8********",
  restaurant: "Frying Nemo",
  amount: "$8,637.85",
  status: "Paid",
},
{
  id: "100152",
  date: "21 NOV 2023 03:49 PM",
  customer: "John Doe",
  phone: "+8********",
  restaurant: "The Great Impasta",
  amount: "$7,610.51",
  status: "Paid",
},
{
  id: "100153",
  date: "21 NOV 2023 03:57 PM",
  customer: "John Doe",
  phone: "+8********",
  restaurant: "The Capital Grill",
  amount: "$27,851.50",
  status: "Paid",
},
{
  id: "100150",
  date: "21 NOV 2023 03:36 PM",
  customer: "John Doe",
  phone: "+8********",
  restaurant: "Cheese Burger",
  amount: "$12,127.60",
  status: "Paid",
},
{
  id: "100156",
  date: "21 NOV 2023 04:21 PM",
  customer: "John Doe",
  phone: "+8********",
  restaurant: "Hungry Puppets",
  amount: "$6,316.64",
  status: "Paid",
},
{
  id: "100155",
  date: "21 NOV 2023 04:08 PM",
  customer: "John Doe",
  phone: "+8********",
  restaurant: "Hungry Puppets",
  amount: "$2,827.14",
  status: "Paid",
},
{
  id: "100129",
  date: "04 JUN 2023 07:03 AM",
  customer: "Jdjdidj Dhhdhd",
  phone: "+8********",
  restaurant: "Hungry Puppets",
  amount: "$129.75",
  status: "Paid",
},
{
  id: "100123",
  date: "04 JUN 2023 06:10 AM",
  customer: "Jdjdidj Dhhdhd",
  phone: "+8********",
  restaurant: "Café Monarch",
  amount: "$393.00",
  status: "Paid",
},
{
  id: "100096",
  date: "07 FEB 2023 05:52 PM",
  customer: "Marvin McKinney",
  phone: "+8********",
  restaurant: "Hungry Puppets",
  amount: "$4,458.75",
  status: "Paid",
},
{
  id: "100094",
  date: "07 FEB 2023 05:24 PM",
  customer: "Jane Doe",
  phone: "+8********",
  restaurant: "Hungry Puppets",
  amount: "$3,673.61",
  status: "Paid",
},
{
  id: "100159",
  date: "28 DEC 2024 11:07 PM",
  customer: "Jane Doe",
  phone: "+8********",
  restaurant: "Café Monarch",
  amount: "$2,762.72",
      status: "Paid",
    },
    {
      id: "100157",
      date: "02 JAN 2024 06:44 AM",
      customer: "Brooklyn Simmons",
      phone: "+8********",
      restaurant: "Hungry Puppets",
      amount: "$2,399.99",
      status: "Paid",
    },
    // Add more dummy data as needed...
  ];

  return (
    <Container fluid className="p-4" style={{marginLeft: '105px'}}>
      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            📦 Delivered Orders <span className="badge bg-secondary ms-2">{orders.length}</span>
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
                    <span className="text-success small fw-bold">{order.status}</span>
                  </td>
                  <td>
                    <span className="badge bg-success">Delivered</span>
                    <br />
                    <span className="text-muted small">Home Delivery</span>
                  </td>
                  <td className="text-nowrap">
                    <Button variant="outline-warning" size="sm" className="me-2">
                      👁️
                    </Button>
                    <Button variant="outline-primary" size="sm">
                      📦
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

export default Deliveredorders;
