import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import './SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(
      "http://localhost:8080/auth/signin",
      credentials,
      {
        validateStatus: (status) => status < 500
      }
    );

    if (res.status !== 200) {
      const message = res.data.error;
      if (message === "Email not found") {
        toast.error("Email not registered. Please sign up.");
      } else if (message === "Incorrect password") {
        toast.error("Wrong password. Please try again.");
      } else {
        toast.error("Login failed. " + message);
      }
      return; // Prevent decoding invalid token
    }

    const { token } = res.data;
    const decoded = jwtDecode(token);
    const role = decoded.role;
    const userId = decoded.userId || decoded.id || decoded.sub;

    if (!userId || isNaN(userId)) {
      throw new Error("User ID not found in JWT token");
    }

    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("email", decoded.sub);
    localStorage.setItem("user", JSON.stringify({
      id: Number(userId),
      email: decoded.sub,
      role
    }));

    toast.success("Login successful!");
    navigate(role === "ADMIN" ? "/admin/dashboard" : "/services");

  } catch (err) {
    console.error("Login error:", err);
    toast.error("An unexpected error occurred.");
  }
};


  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <div className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
