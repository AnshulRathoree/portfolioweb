// src/components/AuthLayout.js
import React from 'react';
import '../styles/AuthLayout.css'
const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;