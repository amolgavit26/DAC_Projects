
import { useEffect, useState } from "react";
import { Container, Alert, Form, Row, Col, Button } from "react-bootstrap";
import { addTask, fetchTaskById } from "../services/TaskService";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { updateTask } from "../services/TaskService";

export function TaskEdit() {

    const params = useParams();
    const navigate = useNavigate();

    const [taskData, setTaskData] = useState({ id: "", title: "", description: "", priority: "", due_date: "", complete: false })


    const getTaskData = async () => {
        try {
            const response = await fetchTaskById(params.id);
            console.log("Fetched task data:", response.data);
            setTaskData(response.data[0]);
        } catch (error) {
            console.log(error);
            toast.error("Something went Wrong while fetching the task")
        }

    };

    useEffect(() => {
        getTaskData();
    }, []);


    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const finalValue = type === "checkbox" ? checked : value;
        setTaskData({ ...taskData, [name]: finalValue });
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateTask(taskData.id, taskData);
            toast.success("Task updated successfully");
            navigate("/task-list");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong while updating the task");
        }
    };

    if (!taskData.id) return <div>Loading...</div>;


    return (
        <Container className="mt-4">
            <Alert class="alert alert-dark text-center">
                <h3>Edit Task</h3>
            </Alert>
            <Container className="alert alert-dark text-center d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
    <Form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "600px" }}>
                    <Row>
                        <Col lg={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="text" placeholder="Enter your ID" name="id" onChange={handleChange} value={taskData.id} disabled />
                            </Form.Group>
                        </Col>
                        <Col lg={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={taskData.title} placeholder="Enter the taks title" name="title" onChange={handleChange} />
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" value={taskData.description} placeholder="Enter the description of task" name="description" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>priority</Form.Label>
                                <Form.Control type="text" value={taskData.priority} placeholder="low/medium/high" name="priority" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Due Date</Form.Label>
                                <Form.Control type="date" value={taskData.due_date} name="due_date" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={12}>
                            <Form.Check
                                type="checkbox"
                                label="Completed"
                                name="complete"
                                checked={taskData.complete === true || taskData.complete === "true" || taskData.complete === 1 || taskData.complete === "1"}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Button type="submit" variant="primary" className="mt-3">Update</Button>
                </Form>
            </Container>
        </Container>
    )
}