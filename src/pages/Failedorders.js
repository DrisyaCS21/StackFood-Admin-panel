import React from "react";
import { Table, Card, Badge, Button } from "react-bootstrap";

const Failedorders = () => {
  const failedorders = [
    {
      id: 100065,
      date: "11 JAN 2022",
      time: "01:11 PM",
      customer: "V V",
      phone: "+9**********",
      restaurant: "Pizza restaurant",
      total: 312.5,
      status: "Payment Failed",
      paymentStatus: "Unpaid",
      deliveryType: "Home Delivery",
    },
  ];

  return (
    <Card className="border-0 shadow-sm p-3" style={{marginLeft: '145px'}} >
      <div className="d-flex justify-content-between align-items-center mb-3" style={{marginLeft: '145px'}}>
        <h5 className="mb-0">
          <i className="bi bi-file-earmark-excel me-2"></i>Failed Orders{" "}
          <Badge bg="light" text="dark">
            {failedorders.length}
          </Badge>
        </h5>

        <div className="d-flex gap-2">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Ex: Search your order..."
            style={{ width: "220px" }}
          />
          <Button size="sm" variant="primary">
            Export
          </Button>
          <Button size="sm" variant="light">
            Filters
          </Button>
          <Button size="sm" variant="light">
            Columns
          </Button>
        </div>
      </div>

      <Table striped bordered hover responsive className="text-center">
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
          {failedorders.map((order, idx) => (
            <tr key={order.id}>
              <td>{idx + 1}</td>
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
                ${order.total.toFixed(2)}
                <br />
                <span className="text-danger fw-semibold">{order.paymentStatus}</span>
              </td>
              <td>
                <Badge bg="danger" className="mb-1">
                  {order.status}
                </Badge>
                <br />
                {order.deliveryType}
              </td>
              <td>
                <div className="d-flex justify-content-center gap-2">
                  <Button variant="warning" size="sm">
                    👁️
                  </Button>
                  <Button variant="primary" size="sm">
                   🗑️
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default Failedorders;
