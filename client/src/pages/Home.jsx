import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiShoppingBag, FiTool, FiHome } from "react-icons/fi";

export default function Home() {
  const nav = useNavigate();
  const options = [
    {
      title: "Buy / Rent / Sell",
      path: "/market",
      variant: "success",
      Icon: FiShoppingBag,
    },
    { title: "Hire Workers", path: "/workers", variant: "info", Icon: FiTool },
    {
      title: "Rent / Get a Room",
      path: "/rooms",
      variant: "warning",
      Icon: FiHome,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Container
        fluid
        className="p-5 text-white text-center"
        style={{ background: "linear-gradient(135deg, #4f8bc9, #7bbfea)" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="display-4"
        >
          Welcome to Rentalo
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="lead"
        >
          Your one-stop rental marketplace for everything you need.
        </motion.p>
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4 d-flex justify-content-center"
        >
          <Form style={{ maxWidth: "600px", width: "100%" }}>
            <Form.Control
              type="search"
              placeholder="Search services, properties..."
            />
          </Form>
        </motion.div>
      </Container>

      {/* Options Section */}
      <Container className="my-5">
        <Row xs={1} md={3} className="g-4">
          {options.map(({ title, path, variant, Icon }) => (
            <Col key={title}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="h-100 text-center shadow border-0"
                  style={{ cursor: "pointer" }}
                  onClick={() => nav(path)}
                >
                  <Card.Body>
                    <Icon size={48} className={`text-${variant}`} />
                    <Card.Title className="mt-3">{title}</Card.Title>
                    <Button
                      variant={variant}
                      className="mt-3"
                      onClick={() => nav(path)}
                    >
                      Explore
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
