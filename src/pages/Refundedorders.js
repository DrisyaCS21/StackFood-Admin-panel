import React from "react";
import { Table, Badge } from "react-bootstrap";

const Refundedorders = () => {
  return (
    <div className="p-4" 
    style={{marginLeft: '135px'}}
    >
      <h5 className="mb-3">
        📄 Refunded Orders <Badge bg="secondary">0</Badge>
      </h5>

      <Table striped hover bordered className="align-middle text-center">
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
          <tr>
            <td colSpan="8" className="text-center py-5">
              <img src="/folder.png" alt="no-data" width="60" />
              <p className="mt-2 text-muted">No Data Found</p>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Refundedorders;
