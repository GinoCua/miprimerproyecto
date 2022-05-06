import { Navbar, Container, Nav } from "react-bootstrap"
import CartIcon from "./CartIcon/CartIcon"
export default function Header() {
    return (
        <Navbar bg="light" variant="lightblue">
            <Container>
                <Navbar.Brand href="#home">Inicio</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Productos</Nav.Link>
                    <Nav.Link href="#features">Contacto</Nav.Link>
                    <Nav.Link href="#pricing">Sobre nosotros</Nav.Link>
                </Nav>
            </Container>
            <CartIcon count={5}/>
        </Navbar>
    )
}