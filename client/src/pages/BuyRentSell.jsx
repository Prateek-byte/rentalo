import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function BuyRentSell() {
  const nav = useNavigate();
  const actions = [
    { label: 'Buy',  path: '/market/buy' },
    { label: 'Rent', path: '/market/rent' },
    { label: 'Sell', path: '/market/sell' }
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Marketplace</h2>
      <Row xs={1} md={3} className="g-4">
        {actions.map(a => (
          <Col key={a.label}>
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>{a.label}</Card.Title>
                <Button variant="outline-success" onClick={() => nav(a.path)}>
                  {a.label}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}