import React from "react";
import { Card, Row, Col, Button, Table, Badge, ProgressBar, Image } from "react-bootstrap";

const Deliveryman = () => {
  return (
    <div className="p-4" style={{ marginLeft: '145px' }}>
      <h4 className="mb-4">Deliveryman Details</h4>

      {/* Stats Row */}
      <Row className="mb-4">
        <Col md={2}><Card body className="text-center"> <strong>4</strong> <br />Total orders</Card></Col>
        <Col md={2}><Card body className="text-center text-danger"> $2,117.39 <br /> Cash in hand </Card></Col>
        <Col md={2}><Card body className="text-center text-warning"> $2,117.39 <br /> Payable Balance </Card></Col>
        <Col md={2}><Card body className="text-center text-success"> $2,071.00 <br /> Total withdrawn </Card></Col>
        <Col md={2}><Card body className="text-center text-primary"> $4,071.00 <br /> Total earning </Card></Col>
        <Col md={2}><Card body className="text-center text-info"> $0.00 <br /> Pending withdraw </Card></Col>
      </Row>

      {/* Basic Info Section */}
      <Card className="mb-4">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={8}>
              <h5>Jane Doe ( All Over The World ) <Badge bg="success">Online</Badge></h5>
              <div className="mt-3">
                <p><strong>Vehicle Type:</strong> Motorcycle</p>
                <p><strong>Vehicle Extra Charges:</strong> 20</p>
                <p><strong>Vehicle minimum coverage area:</strong> 1</p>
                <p><strong>Vehicle maximum coverage area:</strong> 4000</p>
              </div>
            </Col>
            <Col md={2} className="text-center">
              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                roundedCircle
                width={80}
                height={80}
              />
              <h5 className="mt-2 text-primary">5.0/5</h5>
              <small>1 Reviews</small>
            </Col>
            <Col md={2} className="text-end">
              <Button variant="danger" size="sm" className="mb-2">Suspend This Delivery Man</Button>
              <select className="form-select">
                <option>Type (Freelancer)</option>
              </select>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Rating breakdown */}
      <Card className="mb-4">
        <Card.Body>
          <h6>Rating Breakdown</h6>
          <div>
            <p>Excellent <ProgressBar now={100} label="1" /></p>
            <p>Good <ProgressBar now={0} label="0" /></p>
            <p>Average <ProgressBar now={0} label="0" /></p>
            <p>Below Average <ProgressBar now={0} label="0" /></p>
            <p>Poor <ProgressBar now={0} label="0" /></p>
          </div>
        </Card.Body>
      </Card>

      {/* Identity Info */}
      <Card className="mb-4">
        <Card.Body>
          <h6>Identity Information</h6>
          <p><strong>Identity type:</strong> Passport</p>
          <p><strong>Identity number:</strong> 12345678</p>
          <Image
            src="https://randomuser.me/api/portraits/men/32.jpg"
            rounded
            width={100}
          />
        </Card.Body>
      </Card>

      {/* Review List */}
      <Card>
        <Card.Body>
          <h6>Review List</h6>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Reviewer</th>
                <th>Order ID</th>
                <th>Review</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Purno Test</strong><br />
                  <small>a*********@gmail.com</small>
                </td>
                <td className="text-primary">100113</td>
                <td>
                  ⭐ 5<br />
                  CVXYXVXYKXCV
                </td>
                <td>01 Jun 2023 11:55 am</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Deliveryman;
