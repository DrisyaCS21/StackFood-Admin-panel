// "use client"

import { useNavigate } from "react-router-dom"
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const SignIn = () => {
  const navigate = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault()
    navigate("/Dashboard")
  }

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center p-0">
      <Row className="w-100 h-100 m-0 shadow-lg rounded overflow-hidden d-flex align-items-center">
        {/* Left Side with Image and Overlay */}
        <Col md={6} className="d-none d-md-flex align-items-center justify-content-center position-relative">
          <img
            src="https://stackfood-admin.6amtech.com/public/assets/admin/css/images/auth-bg.png"
            alt="Food"
            className="w-100 h-100 object-fit-cover"
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 bg-orange d-flex flex-column align-items-center justify-content-center p-4 text-white text-center"
            style={{ backgroundColor: "rgba(243, 122, 16, 0.9)" }}
          >
            <h2 className="mb-4">WELCOME TO STACKFOOD</h2>
            <p className="lead">Manage your app & website easily</p>
          </div>
        </Col>

        {/* Right Side - Login Form */}
        <Col md={6} className="d-flex flex-column align-items-center justify-content-center p-4 bg-white">
          <div className="text-center mb-4">
            <img
              src="https://stackfood-admin.6amtech.com/storage/app/public/business/2022-04-17-625c012c3c07d.png"
              alt="StackFood"
              className="mb-2"
              width="150"
            />
            <h4>Sign in to Your Panel</h4>
          </div>

          <Form onSubmit={handleSignIn} className="w-100" style={{ maxWidth: "350px" }}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="admin@admin.com" defaultValue="admin@admin.com" required />
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" defaultValue="12345678" required />
            </Form.Group>

            <div className="d-flex justify-content-between mb-3">
              <Form.Check type="checkbox" label="Remember me" />
              <a href="forgot" className="text-decoration-none">
                Forgot Password?
              </a>
            </div>

            <Button variant="warning" className="w-100" type="submit">
              Sign in
            </Button>
          </Form>

          <Card className="mt-4 p-2 text-center bg-light w-100" style={{ maxWidth: "350px" }}>
            <small>Email: admin@admin.com | Password: 12345678</small>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default SignIn;

