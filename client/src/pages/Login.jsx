import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [aadhaar, setAadhaar] = useState('');
  const [email, setEmail]     = useState('');
  const [phone, setPhone]     = useState('');
  const nav = useNavigate();

  const submit = async e => {
    e.preventDefault();
    await api.post('/auth/signup', { aadhaar, email, phone });
    nav('/verify', { state: { phone } });
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Aadhaar" onChange={e=>setAadhaar(e.target.value)} required />
      <input placeholder="Email"   onChange={e=>setEmail(e.target.value)}   required />
      <input placeholder="Phone"   onChange={e=>setPhone(e.target.value)}   required />
      <button type="submit">Send OTP</button>
    </form>
  );
}
