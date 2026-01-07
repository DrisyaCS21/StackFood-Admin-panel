import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup } from 'react-bootstrap';

const dummyCustomers = [
  { id: 1, name: 'Jane Doe' },
  { id: 2, name: 'Brooklyn Simmons' },
  { id: 3, name: 'John Smith' },
];

const dummyMessages = {
  1: [
    { sender: 'admin', text: 'Hello Jane, how can I help you?' },
    { sender: 'Jane Doe', text: 'I have a query about my last order.' },
  ],
  2: [
    { sender: 'admin', text: 'Hi Brooklyn!' },
    { sender: 'Brooklyn Simmons', text: 'Hello! I’m having trouble with checkout.' },
  ],
  3: [],
};

const Chatting = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [messages, setMessages] = useState(dummyMessages);
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, selectedCustomerId]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const updated = {
      ...messages,
      [selectedCustomerId]: [
        ...(messages[selectedCustomerId] || []),
        { sender: 'admin', text: inputText.trim() },
      ],
    };
    setMessages(updated);
    setInputText('');
  };

  return (
    <Container fluid className="p-4" style={{marginLeft: '100px'}}>
      <Row>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Header>Customers</Card.Header>
            <ListGroup variant="flush">
              {dummyCustomers.map(customer => (
                <ListGroup.Item
                  action
                  active={customer.id === selectedCustomerId}
                  onClick={() => setSelectedCustomerId(customer.id)}
                  key={customer.id}
                >
                  {customer.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Header>Chat Window</Card.Header>
            <Card.Body style={{ height: '400px', overflowY: 'auto' }}>
              {selectedCustomerId ? (
                messages[selectedCustomerId]?.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`mb-2 d-flex ${msg.sender === 'admin' ? 'justify-content-end' : 'justify-content-start'}`}
                  >
                    <div className={`p-2 rounded ${msg.sender === 'admin' ? 'bg-primary text-white' : 'bg-light'}`}
                         style={{ maxWidth: '75%' }}>
                      <small>{msg.sender === 'admin' ? 'You' : msg.sender}</small>
                      <div>{msg.text}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-muted">Select a customer to start chatting.</div>
              )}
              <div ref={chatEndRef} />
            </Card.Body>
            <Card.Footer>
              <Form className="d-flex" onSubmit={e => { e.preventDefault(); handleSend(); }}>
                <Form.Control
                  type="text"
                  placeholder="Type your message..."
                  value={inputText}
                  onChange={e => setInputText(e.target.value)}
                  disabled={!selectedCustomerId}
                />
                <Button variant="primary" className="ms-2" onClick={handleSend} disabled={!selectedCustomerId}>
                  Send
                </Button>
              </Form>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Chatting;
