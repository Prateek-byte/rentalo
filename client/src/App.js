import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Home from "./pages/Home";
import Login from "./pages/Login";
import VerifyOTP from "./pages/VerifyOTP";
import BuyRentSell from "./pages/BuyRentSell";
import HireWorker from "./pages/HireWorker";
// TODO: create Rooms page component

// Animation wrapper for pages
const pageTransition = { duration: 0.5 };
const AnimatedPage = ({ children, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={pageTransition}
    {...props}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          }
        />
        <Route
          path="/login"
          element={
            <AnimatedPage>
              <Login />
            </AnimatedPage>
          }
        />
        <Route
          path="/verify"
          element={
            <AnimatedPage>
              <VerifyOTP />
            </AnimatedPage>
          }
        />
        <Route
          path="/market"
          element={
            <AnimatedPage>
              <BuyRentSell />
            </AnimatedPage>
          }
        />
        <Route
          path="/workers"
          element={
            <AnimatedPage>
              <HireWorker />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Rentalo</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/market">Market</Nav.Link>
              <Nav.Link href="/workers">Workers</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* Hero Banner */}
        <Container fluid className="p-0">
          <div
            className="position-relative w-100"
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/random/1600x400?nature,rental")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          >
            <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="display-5"
              >
                Discover Your Next Rental
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="lead"
              >
                Browse properties, services, and more—all in one place.
              </motion.p>
            </div>
          </div>
        </Container>
        <Container className="flex-grow-1 mt-2">
          <AnimatedRoutes />
        </Container>
        {/* Footer Section */}
        <footer className="mt-auto">
          <Container fluid className="bg-dark text-light py-3">
            <Row>
              <Col md={4} className="mb-3">
                <h5>Rentalo</h5>
                <p>Your one-stop rental solution.</p>
              </Col>
              <Col md={4} className="mb-3">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="text-light">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/market" className="text-light">
                      Marketplace
                    </Link>
                  </li>
                  <li>
                    <Link to="/workers" className="text-light">
                      Workers
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={4} className="mb-3">
                <h5>Connect</h5>
                <a href="#" className="text-light me-3">
                  Facebook
                </a>
                <a href="#" className="text-light me-3">
                  Twitter
                </a>
                <a href="#" className="text-light">
                  Instagram
                </a>
              </Col>
            </Row>
            <hr className="bg-light" />
            <p className="text-center mb-0">
              &copy; 2025 Rentalo. All rights reserved.
            </p>
          </Container>
        </footer>
      </div>
    </BrowserRouter>
  );
}
