import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Container, Col, Row } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Header category1={"Cervezas"} category2={"Vinos"}/>
      <main className="main-content">
        <Container>
          <Row className="my-5">
            <Col>
              <h1>Bienvenidos a nuestra tienda</h1>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer greeting={"Gracias por visitarnos"} />
    </div>
  );
}

export default App;
