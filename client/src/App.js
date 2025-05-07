import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import VerifyOTP from "./pages/VerifyOTP";
import Home from "./pages/Home";
import BuyRentSell from "./pages/BuyRentSell";
import HireWorker from "./pages/HireWorker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<VerifyOTP />} />
        <Route path="/home" element={<Home />} />
        <Route path="/market" element={<BuyRentSell />} />
        <Route path="/workers" element={<HireWorker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
