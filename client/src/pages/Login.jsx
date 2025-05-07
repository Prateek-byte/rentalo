import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

export default function Login() {
  const [phone, setPhone] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const formattedPhone = phone.startsWith("+") ? phone : `+91-${phone}`;
    await api.post("/auth/signup", { phone: formattedPhone });
    nav("/verify", { state: { phone: formattedPhone } });
  };

  return (
    <Card className="mx-auto" style={{ maxWidth: "400px" }}>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Form onSubmit={submit}>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Send OTP
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
