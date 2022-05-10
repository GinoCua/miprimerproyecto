import { Navbar, Container, Nav } from "react-bootstrap"
import BottomNav from "../BottomNav/BottomNavs.js"
import CartIcon from "../CartIcon/CartIcon.js"
export default function Header({ category1, category2 }) {
    const handleClick = () => {
        alert("Este boton fue clickeado")
    }
    const Button = ({ texto }) => {
        console.log(texto)
        return (
            <input type="button" value={texto} onClick={handleClick} />
        )
    }
    return (
        <>
            <Navbar bg="light" variant="lightblue">
                <Container>
                    <Navbar.Brand href="#home">Inicio</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Productos</Nav.Link>
                        <Nav.Link href="#features">Contacto</Nav.Link>
                        <Nav.Link href="#pricing">Sobre nosotros</Nav.Link>
                    </Nav>
                </Container>
                <CartIcon count={5} />
            </Navbar>
            <BottomNav />
        </>
    );
}