import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Modal, Button, Form } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [formData, setFormData] = useState({
    customerName: '',
    carModel: '',
    issueDescription: '',
    timeSlot: '',
    appointmentDate: '',
  });

  const token = localStorage.getItem("token");

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:8080/public/workshops');
      setServices(response.data);
    } catch (error) {
      toast.error('Failed to load workshops');
    }
  };

  const handleApplyClick = (workshop) => {
    if (!token) {
      toast.warning("Please login to apply for service.");
      return;
    }

    const user = getUser();
    if (!user?.id) {
      toast.error("User information not found or invalid.");
      return;
    }

    setSelectedWorkshop(workshop);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setFormData({
      customerName: '',
      carModel: '',
      issueDescription: '',
      timeSlot: '',
      appointmentDate: '',
    });

    setSelectedWorkshop(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getUser = () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && typeof user.id === "number") {
        return user;
      }
    } catch (err) {
      console.error("Error parsing user from localStorage", err);
    }
    return null;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const user = getUser();
    const userId = user?.id;
    const workshopId = selectedWorkshop?.id;

    const payload = {
      customerName: formData.customerName,
      carModel: formData.carModel,
      issueDescription: formData.issueDescription,
      timeSlot: formData.timeSlot,
      appointmentDate: formData.appointmentDate,
      userId,
      workshopId,
    };


    if (!userId || !workshopId || !formData.timeSlot) {
      toast.error("All fields including time slot are required.");
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/service-requests/create', payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      toast.success("Service request submitted!");
      handleModalClose();
    } catch (error) {
      toast.error("Failed to submit request.");
      console.error("Error:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="services-wrapper">
      <ToastContainer />
      <div className="services-header">
        <h1>Available Workshops</h1>
        <p>Choose a workshop to apply for service</p>
      </div>

      <div className="services-grid">
        {services.length > 0 ? (
          services.map(service => (
            <div className="service-card" key={service.id}>
              <h3>{service.name}</h3>
              <p>{service.address}</p>
              <p><strong>Contact:</strong> {service.contactNumber}</p>
              <div>
                <strong>Services Offered:</strong>
                <ul>
                  {service.servicesOffered?.split(',').map((s, i) => (
                    <li key={i}>{s.trim()}</li>
                  ))}
                </ul>
              </div>
              <button
                className={`btn mt-3 ${token ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() =>
                  token
                    ? handleApplyClick(service)
                    : toast.warning("Please login to apply for service.")
                }
              >
                {token ? "Apply for Service" : "Login to Apply"}
              </button>
            </div>
          ))
        ) : (
          <p className="no-services">No workshops available.</p>
        )}
      </div>

      {/* Apply Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apply for Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Car Model</Form.Label>
              <Form.Control
                type="text"
                name="carModel"
                value={formData.carModel}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Issue Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="issueDescription"
                value={formData.issueDescription}
                onChange={handleInputChange}
                required
              />

            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Select Appointment Date</Form.Label>
              <Form.Control
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />

            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>Select Time Slot</Form.Label>
              <Form.Select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a time slot</option>
                <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
                <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
                <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
              </Form.Select>
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModalClose}>Cancel</Button>
              <Button variant="primary" type="submit">Submit Request</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Services;
