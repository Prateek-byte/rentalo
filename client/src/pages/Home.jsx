import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "60vh" }}
    >
      <Card className="text-center p-4" style={{ width: "100%", maxWidth: "500px" }}>
        <Card.Body>
          <Card.Title>Welcome to Rentalo</Card.Title>
          <Row xs={1} md={3} className="mt-4 g-4">
            <Col>
              <Button variant="success" onClick={() => nav("/market")} className="w-100">
                Buy / Rent / Sell
              </Button>
            </Col>
            <Col>
              <Button variant="info" onClick={() => nav("/workers")} className="w-100">
                Hire Workers
              </Button>
            </Col>
            <Col>
              <Button variant="warning" onClick={() => nav("/rooms")} className="w-100">
                Rent / Get a Room
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
