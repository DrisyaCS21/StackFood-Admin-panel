"use client"

import { useState } from "react"
import { Row, Col, Card, Form, Button, Nav, Tab } from "react-bootstrap"
import { Save, Globe, Mail, Bell, CreditCard, Shield, Users } from "react-feather"
// import Dashboard from "../components/Dashboard"

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general")
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    siteName: "StackFood",
    siteTitle: "Food Delivery Service",
    footerText: "© StackFood. Copyright 2025",
    logo: null,
    favicon: null,
    currency: "USD",
    currencySymbol: "$",
    timeZone: "UTC",
    defaultLanguage: "en",

    // Email settings
    mailDriver: "smtp",
    mailHost: "smtp.example.com",
    mailPort: "587",
    mailUsername: "info@example.com",
    mailPassword: "********",
    mailEncryption: "tls",
    mailFromAddress: "info@example.com",
    mailFromName: "StackFood",

    // Notification settings
    enableEmailNotifications: true,
    enablePushNotifications: true,
    enableSmsNotifications: false,

    // Payment settings
    enableCashOnDelivery: true,
    enableCreditCard: true,
    enablePaypal: false,
    enableStripe: true,
    stripeKey: "pk_test_*****",
    stripeSecret: "sk_test_*****",
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === "file" && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0],
      })
    } else if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      alert("Settings saved successfully!")
    }, 1000)
  }

  return (
    <>
      {/* <Dashboard /> */}
      <div className="main-content p-4 bg-light"
       style={{marginLeft: '130px'}}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Settings</h2>
        </div>

        <Tab.Container id="settings-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Row>
            {/* <Col md={3} lg={2}>
              <Card className="border-0 shadow-sm mb-4">
                <Card.Body className="p-0">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="general" className="rounded-0 border-0">
                        <Globe size={18} className="me-2" /> General
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="email" className="rounded-0 border-0">
                        <Mail size={18} className="me-2" /> Email
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="notifications" className="rounded-0 border-0">
                        <Bell size={18} className="me-2" /> Notifications
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="payment" className="rounded-0 border-0">
                        <CreditCard size={18} className="me-2" /> Payment
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="security" className="rounded-0 border-0">
                        <Shield size={18} className="me-2" /> Security
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="users" className="rounded-0 border-0">
                        <Users size={18} className="me-2" /> Users
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Body>
              </Card>
            </Col> */}
            <Col md={9} lg={10}>
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <Tab.Content>
                    <Tab.Pane eventKey="general">
                      <h4 className="mb-4">General Settings</h4>
                      <Form onSubmit={handleSubmit}>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Site Name</Form.Label>
                              <Form.Control
                                type="text"
                                name="siteName"
                                value={formData.siteName}
                                onChange={handleInputChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Site Title</Form.Label>
                              <Form.Control
                                type="text"
                                name="siteTitle"
                                value={formData.siteTitle}
                                onChange={handleInputChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Footer Text</Form.Label>
                              <Form.Control
                                type="text"
                                name="footerText"
                                value={formData.footerText}
                                onChange={handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Default Language</Form.Label>
                              <Form.Select
                                name="defaultLanguage"
                                value={formData.defaultLanguage}
                                onChange={handleInputChange}
                              >
                                <option value="en">English</option>
                                <option value="es">Spanish</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                                <option value="ar">Arabic</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Currency</Form.Label>
                              <Form.Select name="currency" value={formData.currency} onChange={handleInputChange}>
                                <option value="USD">US Dollar (USD)</option>
                                <option value="EUR">Euro (EUR)</option>
                                <option value="GBP">British Pound (GBP)</option>
                                <option value="INR">Indian Rupee (INR)</option>
                                <option value="JPY">Japanese Yen (JPY)</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Currency Symbol</Form.Label>
                              <Form.Control
                                type="text"
                                name="currencySymbol"
                                value={formData.currencySymbol}
                                onChange={handleInputChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Time Zone</Form.Label>
                              <Form.Select name="timeZone" value={formData.timeZone} onChange={handleInputChange}>
                                <option value="UTC">UTC</option>
                                <option value="America/New_York">Eastern Time (ET)</option>
                                <option value="America/Chicago">Central Time (CT)</option>
                                <option value="America/Denver">Mountain Time (MT)</option>
                                <option value="America/Los_Angeles">Pacific Time (PT)</option>
                                <option value="Europe/London">London</option>
                                <option value="Asia/Tokyo">Tokyo</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Logo</Form.Label>
                              <Form.Control type="file" name="logo" onChange={handleInputChange} />
                              <Form.Text className="text-muted">Recommended size: 200x50 pixels</Form.Text>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Favicon</Form.Label>
                              <Form.Control type="file" name="favicon" onChange={handleInputChange} />
                              <Form.Text className="text-muted">Recommended size: 32x32 pixels</Form.Text>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Button variant="primary" type="submit" className="mt-3" disabled={loading}>
                          {loading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Saving...
                            </>
                          ) : (
                            <>
                              <Save size={18} className="me-2" /> Save Changes
                            </>
                          )}
                        </Button>
                      </Form>
                    </Tab.Pane>

                    <Tab.Pane eventKey="email">
                      <h4 className="mb-4">Email Settings</h4>
                      <Form onSubmit={handleSubmit}>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Mail Driver</Form.Label>
                              <Form.Select name="mailDriver" value={formData.mailDriver} onChange={handleInputChange}>
                                <option value="smtp">SMTP</option>
                                <option value="sendmail">Sendmail</option>
                                <option value="mailgun">Mailgun</option>
                                <option value="ses">Amazon SES</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Mail Host</Form.Label>
                              <Form.Control
                                type="text"
                                name="mailHost"
                                value={formData.mailHost}
                                onChange={handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Mail Port</Form.Label>
                              <Form.Control
                                type="text"
                                name="mailPort"
                                value={formData.mailPort}
                                onChange={handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Mail Encryption</Form.Label>
                              <Form.Select
                                name="mailEncryption"
                                value={formData.mailEncryption}
                                onChange={handleInputChange}
                              >
                                <option value="tls">TLS</option>
                                <option value="ssl">SSL</option>
                                <option value="none">None</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Mail Username</Form.Label>
                              <Form.Control
                                type="text"
                                name="mailUsername"
                                value={formData.mailUsername}
                                onChange={handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Mail Password</Form.Label>
                              <Form.Control
                                type="password"
                                name="mailPassword"
                                value={formData.mailPassword}
                                onChange={handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Mail From Address</Form.Label>
                              <Form.Control
                                type="email"
                                name="mailFromAddress"
                                value={formData.mailFromAddress}
                                onChange={handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Mail From Name</Form.Label>
                              <Form.Control
                                type="text"
                                name="mailFromName"
                                value={formData.mailFromName}
                                onChange={handleInputChange}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Button variant="primary" type="submit" className="mt-3" disabled={loading}>
                          {loading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Saving...
                            </>
                          ) : (
                            <>
                              <Save size={18} className="me-2" /> Save Changes
                            </>
                          )}
                        </Button>
                      </Form>
                    </Tab.Pane>

                    {/* Other tab panes would go here */}
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  )
}

export default Settings
