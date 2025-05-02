import { useState } from 'react';
import api from '../api';
import { useLocation, useNavigate } from 'react-router-dom';

export default function VerifyOTP() {
  const [code, setCode] = useState('');
  const { state }       = useLocation();
  const nav             = useNavigate();

  const verify = async e => {
    e.preventDefault();
    await api.post('/auth/verify-otp', { phone: state.phone, code });
    nav('/home');
  };

  return (
    <form onSubmit={verify}>
      <input placeholder="OTP Code" onChange={e=>setCode(e.target.value)} required />
      <button type="submit">Verify</button>
    </form>
  );
}
