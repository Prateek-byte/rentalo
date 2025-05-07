import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import VerifyOTP from "./pages/VerifyOTP";
import Home from "./pages/Home";
import BuyRentSell from "./pages/BuyRentSell";
import HireWorker from "./pages/HireWorker";
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<VerifyOTP />} />
          <Route path="/home" element={<Home />} />
          <Route path="/market" element={<BuyRentSell />} />
          <Route path="/workers" element={<HireWorker />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
