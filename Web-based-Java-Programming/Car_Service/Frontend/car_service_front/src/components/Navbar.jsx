import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); // get role from localStorage

  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img
            src="src/assets/images/icon.png"
            alt="CarServiceHub Logo"
            className="me-2"
            style={{ height: "32px" }}
          />
          CarServiceHub
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/feedback">Feedback</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>

            {/* Show Admin Dashboard link only for admin */}
            {isLoggedIn && role === "ADMIN" && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin/dashboard">Admin Dashboard</Link>
              </li>
            )}

            {!isLoggedIn ? (
              <>
                <li className="nav-item"><Link className="btn btn-outline-light ms-2" to="/signin">Sign In</Link></li>
                <li className="nav-item"><Link className="btn btn-primary ms-2" to="/signup">Sign Up</Link></li>
              </>
            ) : (
              <li className="nav-item">
                <button className="btn btn-outline-light ms-3" onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
