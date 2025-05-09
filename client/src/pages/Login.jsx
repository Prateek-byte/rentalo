import React, { useState, useContext } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const formattedPhone = phone.startsWith("+") ? phone : `+91${phone}`;
    try {
      // Request OTP (and register email if signing up)
      await api.post(
        "/auth/signup",
        isSignUp ? { phone: formattedPhone, email } : { phone: formattedPhone }
      );
      login(formattedPhone);
      nav("/verify", { state: { phone: formattedPhone, email: isSignUp ? email : undefined } });
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto" style={{ maxWidth: 400 }}>
      <h2 className="text-center mb-3">{isSignUp ? "Sign Up" : "Login"}</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={submit}>
        {isSignUp && (
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        )}
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 8960825931"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Sending OTP..." : isSignUp ? "Sign Up & Send OTP" : "Send OTP"}
        </button>
      </form>
      <div className="text-center mt-3">
        {isSignUp ? (
          <span>
            Already have an account?{' '}
            <button className="btn btn-link p-0" onClick={() => setIsSignUp(false)}>
              Login
            </button>
          </span>
        ) : (
          <span>
            New user?{' '}
            <button className="btn btn-link p-0" onClick={() => setIsSignUp(true)}>
              Sign Up
            </button>
          </span>
        )}
      </div>
    </div>
  );
}
