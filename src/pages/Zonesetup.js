import React, { useState } from "react";
import { Card, Form, Button, Table, Container, Row, Col, Dropdown } from "react-bootstrap";

const initialZones = [
  {
    id: 1,
    name: "All over the World",
    displayName: "All over the World",
    restaurants: 16,
    deliverymen: 8,
    status: true,
  },
];

const Zonesetup = () => {
  const [zones, setZones] = useState(initialZones);
  const [zoneName, setZoneName] = useState("");
  const [zoneDisplayName, setZoneDisplayName] = useState("");

  const handleSubmit = () => {
    const newZone = {
      id: zones.length + 1,
      name: zoneName,
      displayName: zoneDisplayName,
      restaurants: 0,
      deliverymen: 0,
      status: true,
    };
    setZones([...zones, newZone]);
    setZoneName("");
    setZoneDisplayName("");
  };

  const handleToggleStatus = (id) => {
    setZones(
      zones.map((zone) =>
        zone.id === id ? { ...zone, status: !zone.status } : zone
      )
    );
  };

  const handleDelete = (id) => {
    setZones(zones.filter((zone) => zone.id !== id));
  };

  return (
    <Container fluid className="p-4" 
    style={{ marginLeft: '80px' }}>
      <Card className="border-0 shadow-sm mb-4">
        <Card.Header className="bg-white">
          <h5 className="mb-0">🧭 Add New Business Zone</h5>
        </Card.Header>
        <Card.Body>
          <Row className="mb-4">
            <Col md={6}>
              <Card className="p-3 bg-light">
                <p className="fw-bold text-warning">Instructions</p>
                <ul className="mb-0">
                  <li>Use this 'Hand Tool' to find your target zone.</li>
                  <li>Use this 'Shape Tool' to connect at least 3 points.</li>
                </ul>
                <img
                  src="https://i.imgur.com/wtjM47M.png"
                  alt="map-guide"
                  className="img-fluid mt-2 border rounded"
                />
              </Card>
            </Col>
            <Col md={6}>
              <Form className="mb-3">
                <Row>
                  <Col>
                    <Form.Label><b>Business Zone Name (Default)</b></Form.Label>
                    <Form.Control
                      value={zoneName}
                      onChange={(e) => setZoneName(e.target.value)}
                      placeholder="Type new zone name here"
                    />
                  </Col>
                  <Col>
                    <Form.Label><b>Zone Display Name (Default)</b></Form.Label>
                    <Form.Control
                      value={zoneDisplayName}
                      onChange={(e) => setZoneDisplayName(e.target.value)}
                      placeholder="Write a New Display Zone Name"
                    />
                  </Col>
                </Row>
              </Form>
              <div className="mb-3">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3532.1086431647554!2d85.3123295744058!3d27.709031224537804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1718880000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="d-flex justify-content-end gap-2">
                <Button variant="secondary" onClick={() => { setZoneName(""); setZoneDisplayName(""); }}>Reset</Button>
                <Button onClick={handleSubmit}>Submit</Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">📍 Zone List <span className="badge bg-secondary ms-2">{zones.length}</span></h5>
          <div>
            <Form.Control size="sm" type="search" placeholder="Search by name" className="d-inline-block w-auto me-2" />
            <Dropdown>
              <Dropdown.Toggle variant="light" size="sm">Export</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>CSV</Dropdown.Item>
                <Dropdown.Item>Excel</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Card.Header>
        <Card.Body className="p-0">
          <Table hover responsive className="mb-0">
            <thead className="table-light">
              <tr>
                <th>Sl</th>
                <th>Zone Id</th>
                <th>Name</th>
                <th>Zone Display Name</th>
                <th>Restaurants</th>
                <th>Deliverymen</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {zones.map((zone, index) => (
                <tr key={zone.id}>
                  <td>{index + 1}</td>
                  <td>{zone.id}</td>
                  <td>{zone.name}</td>
                  <td>{zone.displayName}</td>
                  <td>{zone.restaurants}</td>
                  <td>{zone.deliverymen}</td>
                  <td>
                    <Form.Check
                      type="switch"
                      id={`status-${zone.id}`}
                      checked={zone.status}
                      onChange={() => handleToggleStatus(zone.id)}
                    />
                  </td>
                  <td>
                    <Button variant="outline-warning" size="sm" className="me-2">✏️</Button>
                    <Button variant="outline-danger" size="sm" onClick={() => handleDelete(zone.id)}>🗑️</Button>
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

export default Zonesetup;
