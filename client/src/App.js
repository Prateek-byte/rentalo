import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar, Nav, Container } from "react-bootstrap";
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
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/login" element={<AnimatedPage><Login /></AnimatedPage>} />
        <Route path="/verify" element={<AnimatedPage><VerifyOTP /></AnimatedPage>} />
        <Route path="/market" element={<AnimatedPage><BuyRentSell /></AnimatedPage>} />
        <Route path="/workers" element={<AnimatedPage><HireWorker /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
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
      <Container className="mt-4">
        <AnimatedRoutes />
      </Container>
      <Navbar fixed="bottom" bg="light" className="justify-content-center">
        <Nav>
          <Nav.Item className="text-muted">© 2025 Rentalo</Nav.Item>
        </Nav>
      </Navbar>
    </BrowserRouter>
  );
}
