import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Dashboard.css';

const UserDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== 'USER') {
      toast.error("Unauthorized access");
      navigate('/signin');
    }
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>
      <div className="dashboard-cards">

        <div className="dashboard-card" onClick={() => navigate('/my-bookings')}>
          <h4>My Bookings</h4>
          <p>View and manage your service appointments.</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate('/feedback')}>
          <h4>Feedback</h4>
          <p>Submit feedback on the services you've used.</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate('/profile')}>
          <h4>Profile</h4>
          <p>Update your personal details and preferences.</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate('/services')}>
          <h4>Explore Services</h4>
          <p>Browse and book from available car services.</p>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;
