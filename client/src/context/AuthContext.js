import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [phone, setPhone] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const storedPhone = localStorage.getItem('phone');
    const storedVerified = localStorage.getItem('isVerified') === 'true';
    if (storedPhone) {
      setPhone(storedPhone);
      setIsVerified(storedVerified);
    }
  }, []);

  const login = (newPhone) => {
    setPhone(newPhone);
    localStorage.setItem('phone', newPhone);
  };

  const verify = () => {
    setIsVerified(true);
    localStorage.setItem('isVerified', 'true');
  };

  const logout = () => {
    setPhone(null);
    setIsVerified(false);
    localStorage.removeItem('phone');
    localStorage.removeItem('isVerified');
  };

  return (
    <AuthContext.Provider value={{ phone, isVerified, login, verify, logout }}>
      {children}
    </AuthContext.Provider>
  );
}