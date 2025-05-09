import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function PrivateRoute({ children }) {
  const { isVerified } = useContext(AuthContext);
  if (!isVerified) {
    return <Navigate to="/login" replace />;
  }
  return children;
}