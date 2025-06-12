import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ role, children }) => {
  const token = localStorage.getItem("token");
  const storedRole = localStorage.getItem("role");

  if (!token) return <Navigate to="/signin" />;
  if (storedRole?.toUpperCase() !== role.toUpperCase()) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
