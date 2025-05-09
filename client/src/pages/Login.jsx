import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const formattedPhone = phone.startsWith("+") ? phone : `+91-${phone}`;
    await api.post("/auth/signup", {
      phone: formattedPhone,
      ...(isSignUp && { email })
    });
    nav("/verify", { state: { phone: formattedPhone, email: isSignUp ? email : undefined } });
  };

  return (
    <div className="mx-auto" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-3">{isSignUp ? "Sign Up" : "Login"}</h2>
      <form onSubmit={submit}>
        {isSignUp && (
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control mb-2"
          />
        )}
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary w-100">
          {isSignUp ? "Sign Up & Send OTP" : "Send OTP"}
        </button>
      </form>
      <p className="text-center mt-3">
        {isSignUp ? (
          <>Already have an account? <button onClick={() => setIsSignUp(false)} className="btn btn-link p-0">Login</button></>
        ) : (
          <>New user? <button onClick={() => setIsSignUp(true)} className="btn btn-link p-0">Sign Up</button></>
        )}
      </p>
    </div>
  );
}
