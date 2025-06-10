import { useState } from "react";
import { Container, Alert, Form, Row, Col, Button } from "react-bootstrap";
import { addTask } from "../services/TaskService";
import { toast } from "react-toastify";



export function AddNewTask() {

    const [taskData, setTaskData] = useState({ id: "", title: "", description: "", priority: "", due_date: "", complete: false })

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setTaskData({
            ...taskData,
            [name]: type === "checkbox" ? checked : value,
        });
    };



    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(taskData);
            const response = await addTask(taskData);
            console.log(response);

            if (response.status === 200) {
                toast.success("Task Add Succesfully.")
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went Wrong.")
        }

    }


    return (
        <Container className="mt-4">
            <Alert class="alert alert-dark text-center">
                <h3>Create New Task</h3>
            </Alert>
            <Container className="alert alert-dark text-center d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
                <Form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "600px" }}>
                    <Row>
                        <Col lg={12}>
                            <Form.Group className="mb-2">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="text" placeholder="Enter your ID" name="id" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={12}>
                            <Form.Group className="mb-2">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter the task title" name="title" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Form.Group className="mb-2">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter the description of task" name="description" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={12}>
                            <Form.Group className="mb-2">
                                <Form.Label>Priority</Form.Label>
                                <Form.Control type="text" placeholder="low/medium/high" name="priority" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Form.Group className="mb-2">
                                <Form.Label>Due Date</Form.Label>
                                <Form.Control type="date" name="due_date" onChange={handleChange} />
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
                    <Button type="submit" variant="primary" className="mt-3">Add Task</Button>
                </Form>
            </Container>

        </Container>
    )
}