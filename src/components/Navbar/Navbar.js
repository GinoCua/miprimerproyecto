import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import BottomNav from "../BottomNav/BottomNavs.js"
import CartIcon from "../CartIcon/CartIcon.js"
export default function Header({ category1, category2 }) {
    const [text, setText] = React.useState("Estos son nuestros productos disponibles")
    const [count, setCount] = React.useState(0)

    const handleRest = () => {
        console.log("Ejecuto funcion")
        if(count > 0) {
            setCount( count - 1)
        }
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
            {text}
            <input type="button" value="Cambiar" onClick={() => setText("Texto cambiado")}/>
            <input type="button" value="+" onClick={() => setCount(count + 1)}/>
            {count}
            <input type="button" value="-" onClick={handleRest}/>
        </>
    );
}