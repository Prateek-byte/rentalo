import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [phone, setPhone] = useState("");
  const nav = useNavigate();

  const submit = async e => {
    e.preventDefault();
    const formattedPhone = phone.startsWith("+") ? phone : `+91-${phone}`;
    await api.post("/auth/signup", { phone: formattedPhone });
    nav("/verify", { state: { phone: formattedPhone } });
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Enter phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        required
      />
      <button type="submit">Send OTP</button>
    </form>
  );
}
