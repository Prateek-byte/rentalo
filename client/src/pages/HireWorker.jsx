import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function HireWorker() {
  const nav = useNavigate();
  const categories = [
    { name: 'Electrician', path: '/workers/electrician' },
    { name: 'Plumber',     path: '/workers/plumber' },
    { name: 'Mechanic',    path: '/workers/mechanic' },
    // ...existing code... for additional categories
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Hire Workers</h2>
      <Row xs={1} md={3} className="g-4">
        {categories.map(cat => (
          <Col key={cat.name}>
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>{cat.name}</Card.Title>
                <Button variant="outline-primary" onClick={() => nav(cat.path)}>
                  View {cat.name}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}