import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"

const NotFound = () => {
  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="text-center">
        <Col md={12}>
          <h1 className="display-1 fw-bold">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="lead mb-4">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button as={Link} to="/dashboard" variant="warning" size="lg">
            Go to Dashboard
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
