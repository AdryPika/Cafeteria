import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";

export default function MenuItem() {
  return (
    <div>
      <MenuEjemplo />
    </div>
  );
}

let itemsMenu = [
  {
    nombre: "Cafe con Leche",
    descripcion: "Esto es un Cafe con Leche",
    precio: "$50",
  },
  {
    nombre: "Cholcolatada",
    descripcion: "Esto es una Chocolatada",
    precio: "$25",
  },
  {
    nombre: "Jugo de Naranja",
    descripcion: "Esto es un Jugo de Naranja",
    precio: "$15",
  },
  { nombre: "Agua", descripcion: "Esto es un Agua", precio: "$10" },
];

function MenuEjemplo() {
  return (
    <Row xs={1} md={2} id="menu" className="g-4">
      {itemsMenu.map(({ nombre, descripcion, precio }, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>{descripcion}</Card.Text>
              <Card.Text>{precio}</Card.Text>
              <Button variant="primary">Agregar al Carrito</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export { MenuEjemplo };
