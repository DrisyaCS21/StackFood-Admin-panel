import React, { useState, useRef } from "react";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState("Jhon");
  const [lastName, setLastName] = useState("Doe");
  const [phone, setPhone] = useState("01700000000");
  const [email, setEmail] = useState("admin@admin.com");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInfoSave = () => {
    alert("Basic Information Updated!");
  };

  const handlePasswordSave = () => {
    if (newPassword.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    alert("Password Updated!");
  };

  return (
    <Container fluid className="p-4" style={{marginLeft: '100px'}}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Settings</h4>
        <Button variant="primary" onClick={() => navigate("/dashboard")}>📋 Dashboard</Button>
      </div>

      <Card className="mb-4 p-4 text-center">
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "#f1f1f1",
            overflow: "hidden",
            margin: "0 auto",
            cursor: "pointer",
          }}
          onClick={handleImageClick}
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div className="d-flex align-items-center justify-content-center h-100">
              <span style={{ fontSize: "2rem" }}>🙂</span>
            </div>
          )}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          className="d-none"
          accept="image/*"
          onChange={handleImageChange}
        />
        <div className="text-muted small mt-2">Click image to upload</div>
      </Card>

      <Card className="mb-4 p-4">
        <h5 className="mb-3">🧑 Basic Information</h5>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>First Name</Form.Label>
              <Form.Control value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </Col>
            <Col md={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Phone <span className="text-muted small">(Optional)</span></Form.Label>
              <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Col>
            <Col md={6}>
              <Form.Label>Email</Form.Label>
              <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} />
            </Col>
          </Row>
          <Button onClick={handleInfoSave}>Save</Button>
        </Form>
      </Card>

      <Card className="p-4">
        <h5 className="mb-3">🔒 Change Your Password</h5>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>New Password <span className="text-muted small">(length 8+)</span></Form.Label>
              <Form.Control type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </Col>
            <Col md={6}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </Col>
          </Row>
          <Button onClick={handlePasswordSave}>Save</Button>
        </Form>
      </Card>

      <footer className="text-center py-3 text-muted small mt-4">
        © StackFood. Copyright 2025
      </footer>
    </Container>
  );
};

export default Profile;
