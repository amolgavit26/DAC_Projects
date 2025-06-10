
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';


export function NavigationBar() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand >Task Management APP</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-left">
                        <LinkContainer to="/">
                            <Nav.Link>DashBoard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/task-add">
                            <Nav.Link>Add New Task</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/task-list">
                            <Nav.Link>All Task</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
