import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <div>
      <Navegacion />
    </div>
  );
}

function Navegacion() {
  return (
    <Navbar id="navegacion" expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#home">"La Esquina de los Recuerdos"</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio"> Inicio </Nav.Link>

            <Nav.Link href="#galeria"> Galeria </Nav.Link>
            <Nav.Link href="#menu"> Menu </Nav.Link>
            <Nav.Link href="#contacto"> Contacto </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { Navegacion };
