// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor'; // Import the custom cursor
import AuthLayout from './components/AuthLayout'; // Import the auth layout
import Resume from './pages/Resume'; 
import Home from './pages/Home'; // Import the home page
import Login from './pages/Login'; // Import the login page
import './styles/global.css'; // Import global styles
import Navbar from './components/Navbar';
const App = () => {
  const isAuthenticated = true; // Replace with actual authentication logic (e.g., check user session)

  return (
    <Router>
      {/* Add the CustomCursor component for a global custom cursor */}
      <CustomCursor />
<Navbar/>
      {/* Define routes for the application */}
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/resume" element={<Resume />} />

        {/* Protected Routes */}
        {isAuthenticated && (
          <>
            {/* Wrap dashboard-related routes with DashboardLayout */}
            <Route path="/" element={<Home />}>
              
              
            </Route>
          </>
        )}

        {/* Default Route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;