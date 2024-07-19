import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";

export default function MenuItem() {
  const [selectedItems, setSelectedItems] = useState([]); // Almaceno los items seleccionados para el carrito (ESTADO)
  const [totalPrice, setTotalPrice] = useState(0); // Almaceno el precio total de los items en el carrito (ESTADO)

  const handleAddToCart = (item) => {
    // Funcion para agregar un item al carrito, si ya esta, incrementa la cantidad del mismo
    setSelectedItems((prevItems) => {
      // Si el item no esta en el carrito, lo agrega con la cantidad en 1
      const existingItem = prevItems.find((i) => i.nombre === item.nombre); // Reviso si en el carrito esta el item
      if (existingItem) {
        return prevItems.map(
          (i) =>
            i.nombre === item.nombre ? { ...i, cantidad: i.cantidad + 1 } : i // Aumento la cantidad en 1 del item
        );
      } else {
        return [...prevItems, { ...item, cantidad: 1 }]; // Agrego el item al carrito con la cantidad en 1
      }
    });
  };

  const handleRemoveFromCart = (item) => {
    setSelectedItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.nombre === item.nombre);
      if (existingItem) {
        if (existingItem.cantidad === 1) {
          return prevItems.filter((i) => i.nombre !== item.nombre);
        } else {
          return prevItems.map((i) =>
            i.nombre === item.nombre ? { ...i, cantidad: i.cantidad - 1 } : i
          );
        }
      }
      return prevItems;
    });
  };

  const handleCalculateTotal = () => {
    const total = selectedItems.reduce((sum, item) => {
      const price = parseFloat(item.precio.replace("$", "")); // Tomo cada elemento del carrito, le quito el simbolo "$" y lo convierto a numero
      return sum + price * item.cantidad; // Multiplico el precio por la cantidad del item y luego se lo sumo a "sum" (la suma acumulada)
    }, 0);
    setTotalPrice(total); // Luego actualizo el precio total con el valor del total del carrito
  };

  const itemsMenu = [
    {
      nombre: "Cafe Negro",
      descripcion: "Esto es un Cafe Negro",
      precio: "$50",
      imagen:
        "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      nombre: "Latte",
      descripcion: "Esto es un Latte",
      precio: "$25",
      imagen:
        "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww",
    },
    {
      nombre: "Caramel Latte",
      descripcion: "Esto es un Caramel Latte",
      precio: "$15",
      imagen:
        "https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      nombre: "Cappuccino",
      descripcion: "Esto es un Cappuccino",
      precio: "$10",
      imagen:
        "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <Row xs={1} md={2} id="menu" className="g-4">
        {itemsMenu.map(
          (
            item,
            idx // Mapeo cada item de la lista y lo devuelvo como una card con el nombre, descipcion y precio del producto
          ) => (
            <Col key={idx}>
              <Card>
                <Card.Img
                  variant="top"
                  src={item.imagen}
                  className="small-img"
                />
                <Card.Body>
                  <Card.Title>{item.nombre}</Card.Title>
                  <Card.Text>{item.descripcion}</Card.Text>
                  <Card.Text>{item.precio}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleAddToCart(item)}
                  >
                    Agregar al Carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>

      <div>
        <h3>Items en el Carrito:</h3>
        <div>
          {selectedItems.map(
            (
              item,
              idx // Agrega el item al carrito junto con un botn "x" para eliminar una instancia del mimsmo
            ) => (
              <div key={idx} className="cart-item">
                {item.nombre} - Cantidad: {item.cantidad} - Precio:{" "}
                {item.precio}
                <button
                  variant="danger"
                  size="sm"
                  className="remove-btn"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  X
                </button>
              </div>
            )
          )}
        </div>
        <Button variant="success" onClick={handleCalculateTotal}>
          Calcular Precio Total
        </Button>
        <h3>Precio Total: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  ); // El carrito muestra cada item, su cantidad y el precio del mismo, al presionar el boton de calcular el precio total, me muestra la suma de todos los precios
}
