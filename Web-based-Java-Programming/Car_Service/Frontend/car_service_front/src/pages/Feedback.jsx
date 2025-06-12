import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for your feedback!');
    setFeedback({ name: '', email: '', message: '' });
  };

  return (
    <div className="feedback-wrapper">
      <ToastContainer />
      <div className="feedback-card">
        <h3>We Value Your Feedback</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={feedback.name}
            onChange={handleChange}
            required
            autoComplete="off"
          />

          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={feedback.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />

          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your feedback here..."
            value={feedback.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
