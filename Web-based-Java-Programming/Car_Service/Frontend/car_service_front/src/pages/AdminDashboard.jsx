import { useEffect, useState } from "react";
import axios from "axios";
import {
    Container,
    Row,
    Col,
    Card,
    Table,
    Button,
    Modal,
    Form,
} from "react-bootstrap";
import { toast } from "react-toastify";

const AdminDashboard = () => {
    const [workshops, setWorkshops] = useState([]);
    const [requests, setRequests] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        contactNumber: "",
        servicesOffered: "",
    });
    const [editingId, setEditingId] = useState(null);

    const token = localStorage.getItem("token");

    useEffect(() => {
        fetchWorkshops();
        fetchRequests();
    }, []);

    const fetchWorkshops = async () => {
        try {
            const res = await axios.get("http://localhost:8080/admin/workshops", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setWorkshops(res.data);
        } catch (err) {
            toast.error("Failed to fetch workshops.");
        }
    };

    const fetchRequests = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/service-requests/admin", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setRequests(res.data);
        } catch (err) {
            toast.error("Failed to fetch service requests.");
        }
    };

    const handleShow = () => {
        setEditingId(null);
        setFormData({
            name: "",
            address: "",
            contactNumber: "",
            servicesOffered: "",
        });
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        try {
            if (editingId) {
                await axios.put(
                    `http://localhost:8080/admin/workshops/${editingId}`,
                    formData,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                toast.success("Workshop updated successfully!");
            } else {
                await axios.post(
                    "http://localhost:8080/admin/workshops",
                    formData,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                toast.success("Workshop added successfully!");
            }
            fetchWorkshops();
            handleClose();
        } catch (err) {
            toast.error("Failed to save workshop.");
        }
    };

    const handleEdit = (ws) => {
        setEditingId(ws.id);
        setFormData({
            name: ws.name,
            address: ws.address,
            contactNumber: ws.contactNumber,
            servicesOffered: ws.servicesOffered || "",
        });
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this workshop?")) return;
        try {
            await axios.delete(`http://localhost:8080/admin/workshops/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            toast.success("Workshop deleted.");
            fetchWorkshops();
        } catch (err) {
            toast.error("Failed to delete workshop.");
        }
    };

    return (
        <Container fluid className="mt-5 custom-container">
            <h2 className="text-center mb-4">Admin Dashboard</h2>

            <Row className="mb-4">
                <Col md={12}>
                    <Card>
                        <Card.Header className="d-flex justify-content-between align-items-center">
                            <div className="text-center w-100">Available Workshops</div>
                            <Button
                                variant="dark"
                                size="sm"
                                className="position-absolute end-0 me-3"
                                onClick={handleShow}
                            >
                                + Add
                            </Button>
                        </Card.Header>

                        <Card.Body>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Contact</th>
                                        <th>Services Offered</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {workshops.map((ws) => (
                                        <tr key={ws.id}>
                                            <td>{ws.id}</td>
                                            <td>{ws.name}</td>
                                            <td>{ws.address}</td>
                                            <td>{ws.contactNumber}</td>
                                            <td>
                                                {ws.servicesOffered
                                                    ?.split(",")
                                                    .map((s, i) => (
                                                        <div key={i}>{s.trim()}</div>
                                                    ))}
                                            </td>
                                            <td>
                                                <Button
                                                    variant="primary"
                                                    size="sm"
                                                    onClick={() => handleEdit(ws)}
                                                    className="me-2"
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={() => handleDelete(ws.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            <Row>
                <Col md={12}>
                    <Card>
                        <Card.Header className="text-center">
                            Service Requests
                        </Card.Header>

                        <Card.Body>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Customer</th>
                                        <th>Car</th>
                                        <th>Issue</th>
                                        <th>Workshop</th>
                                        <th>Appointment Date</th>
                                        <th>Time Slot</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {requests.map((req) => (
                                        <tr key={req.id}>
                                            <td>{req.customerName}</td>
                                            <td>{req.carModel}</td>
                                            <td>{req.issueDescription}</td>
                                            <td>{req.workshopName}</td>
                                            <td>{req.appointmentDate}</td>
                                            <td>{req.timeSlot}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Modal for Add/Edit */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingId ? "Edit" : "Add"} Workshop</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Services Offered (comma-separated)</Form.Label>
                            <Form.Control
                                name="servicesOffered"
                                value={formData.servicesOffered}
                                onChange={handleChange}
                                placeholder="e.g. Engine Repair, Oil Change"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="dark" onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default AdminDashboard;
