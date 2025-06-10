import { useEffect, useState } from "react";
import { Container, Alert, Table, Button, Modal } from "react-bootstrap";
import { deleteTask, fetchAllTasks } from "../services/TaskService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



export function TaskList() {

    const [task, setTasks] = useState([]);

    const [dialogVisibility, setDialogVisibility] = useState(false);
    const [selectedTaskId, setselectedTaskId] = useState();

    const navigate = useNavigate();

    const getTask = async () => {
        try {
            const response = await fetchAllTasks();
            setTasks(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getTask();
    }, []);


    const closeDialog = () => {
        setDialogVisibility(false);
    }


    const handleTaskDelete = async () => {
        try {
            const response = await deleteTask(selectedTaskId);
            if (response.status === 200) {
                toast.success("Task Deleted Successfully..!!")
                closeDialog();
                // getTask();
                setTasks(task.filter((s) => s.id !== selectedTaskId));
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }
    }


    return (
        <Container className="mt-4">
            <Alert class="alert alert-dark text-center">
                <h3>List of All Tasks</h3>
            </Alert>
            <Container className="mt-3">
                {
                    task.length > 0 ? (
                        <Table striped bordered hover style={{ width: "100%", maxWidth: "100%" }}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Priority</th>
                                    <th>Due Date</th>
                                    <th>Complete</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    task.map((s) => {
                                        return (
                                            <tr key={s.id}>
                                                <td>{s.id}</td>
                                                <td>{s.title}</td>
                                                <td>{s.description}</td>
                                                <td>{s.priority}</td>
                                                <td>{new Date(s.due_date).toISOString().split("T")[0]}</td>
                                                <td>{s.complete ? "Yes" : "No"}</td>
                                                <td>
                                                    <Button variant="primary" className="btn-sm me-4" onClick={() => {
                                                        navigate(`/task-edit/${s.id}`);
                                                    }}>Edit</Button>
                                                    <Button variant="danger" className="btn-sm" onClick={() => {
                                                        setselectedTaskId(s.id);
                                                        setDialogVisibility(true);
                                                    }}>Delete</Button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table>
                    ) : <h2>No Record Found</h2>
                }

                {}
                <Modal show={dialogVisibility} onHide={closeDialog} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete task with ID: {selectedTaskId}?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleTaskDelete}>
                            Yes
                        </Button>
                        <Button variant="danger" onClick={closeDialog}>
                            No
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>


        </Container>
    )
}