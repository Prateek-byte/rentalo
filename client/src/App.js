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
import PrivateRoute from "./components/PrivateRoute";
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
            <PrivateRoute>
              <AnimatedPage>
                <BuyRentSell />
              </AnimatedPage>
            </PrivateRoute>
          }
        />
        <Route
          path="/workers"
          element={
            <PrivateRoute>
              <AnimatedPage>
                <HireWorker />
              </AnimatedPage>
            </PrivateRoute>
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
