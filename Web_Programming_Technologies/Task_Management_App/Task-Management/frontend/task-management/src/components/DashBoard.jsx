import { Container, Alert } from "react-bootstrap";
import CarouselFade from "./CarouselFade.jsx";



export function DashBoard(){
    return(
        <Container className="mt-4">
            <Alert class="alert alert-dark text-center">
                <h2>Welcome to Task Management Application</h2>
            </Alert>
            <p></p>
            <CarouselFade></CarouselFade>
        </Container>
    )
}