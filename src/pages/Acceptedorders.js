import React from "react";
import { Table, Badge, Button } from "react-bootstrap";

const AcceptedOrders = () => {
  const orders = [
    {
      id: "100053",
      date: "17 OCT 2021",
      time: "03:56 PM",
      customer: "Zubair Jamil",
      phone: "+9**********",
      restaurant: "Hungry Puppets",
      total: "$99.75",
      paymentStatus: "Unpaid",
      deliveryType: "Home Delivery"
    },
    {
      id: "100030",
      date: "22 AUG 2021",
      time: "08:16 AM",
      customer: "Demo Demo",
      phone: "+2**********",
      restaurant: "Cafe Monarch",
      total: "$4,700.14",
      paymentStatus: "Unpaid",
      deliveryType: "Home Delivery"
    },
    {
      id: "100017",
      date: "22 AUG 2021",
      time: "01:13 AM",
      customer: "Spencer Hastings",
      phone: "+8**********",
      restaurant: "Vintage Kitchen",
      total: "$4,390.45",
      paymentStatus: "Paid",
      deliveryType: "Home Delivery"
    }
  ];

  return (
    <div className="p-4"
     style={{ marginLeft: '100px' }}>
      <h5 className="mb-3">📦 Accepted Orders</h5>

      <Table bordered hover responsive>
        <thead className="table-light">
          <tr>
            <th>SL</th>
            <th>Order ID</th>
            <th>Order Date</th>
            <th>Customer Info</th>
            <th>Restaurant</th>
            <th>Total Amount</th>
            <th>Order Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.id}</td>
              <td>
                {order.date}
                <br />
                {order.time}
              </td>
              <td>
                {order.customer}
                <br />
                {order.phone}
              </td>
              <td>{order.restaurant}</td>
              <td>
                {order.total}
                <br />
                <span className={order.paymentStatus === "Paid" ? "text-success" : "text-danger"}>{order.paymentStatus}</span>
              </td>
              <td>
                <Badge bg="success">Accepted</Badge>
                <br />
                <small>{order.deliveryType}</small>
              </td>
              <td>
                <Button size="sm" variant="outline-primary" className="me-2">
                  View
                </Button>
                <Button size="sm" variant="outline-danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AcceptedOrders;
