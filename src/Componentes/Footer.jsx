import React from "react";
import { Card } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <Mapa />
      <Contacto />
    </div>
  );
}

function Mapa() {
  return (
    <Card id="mapa" className="text-center">
      <Card.Title>Nuestra ubicación</Card.Title>
      <Card.Body>
        
          <div className="container">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                title="Mapa de Ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4173877820986!2d-58.6367786!3d-34.61889119999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8d04e479ffb%3A0xfa3c83f72475e65!2sTte.%20Manuel%20Origone%20101%2C%20Villa%20Tesei%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1721225006232!5m2!1sen!2sar"
                allowFullScreen=""
                loading="lazy">
              </iframe>
            </div>
          </div>
        
      </Card.Body>
    </Card>
  );
}

function Contacto() {
  return (
    <Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>Contacto</Card.Title>
        <div className="footer-widget-content">
          <a href="mailto:sales@example.com" className="contact-link">
            {" "}
            cafe@example.com -{" "}
          </a>
          <a href="mailto:support@example.com" className="contact-link red">
            {" "}
            infoCafe@example.com -{" "}
          </a>
          <a href="tel:0121234" className="contact-link">
            {" "}
            (123) 456-789{" "}
          </a>
        </div>
        <Card.Title>Redes Sociales</Card.Title>
        <div className="footer-widget-content">
          <a href="https://www.facebook.com/" className="contact-link">
            {" "}
            Facebook -{" "}
          </a>
          <a href="https://www.instagram.com/" className="contact-link">
            {" "}
            Instagram -{" "}
          </a>
          <a href="https://www.twitter.com/" className="contact-link">
            {" "}
            Twitter{" "}
          </a>
        </div>

      </Card.Body>
      <Card.Footer className="text-muted">Creado por:   Sara Sanchez - Lautaro Gomez  - Adriana Picallo</Card.Footer>
    </Card>
  );
}
export { Contacto, Mapa };

{/* <Card className="text-center">
  <Card.Header>Contacto</Card.Header>
  <Card.Body>
    <div className="footer-widget-content">
      <a href="mailto:sales@example.com" className="contact-link">
        {" "}
        cafe@example.com -{" "}
      </a>
      <a href="mailto:support@example.com" className="contact-link red">
        {" "}
        infoCafe@example.com -{" "}
      </a>
      <a href="tel:0121234" className="contact-link">
        {" "}
        (123) 456-789{" "}
      </a>
    </div>
    <Card.Title>Redes Sociales</Card.Title>
    <div className="footer-widget-content">
      <a href="https://www.facebook.com/" className="contact-link">
        {" "}
        Facebook -{" "}
      </a>
      <a href="https://www.instagram.com/" className="contact-link">
        {" "}
        Instagram -{" "}
      </a>
      <a href="https://www.twitter.com/" className="contact-link">
        {" "}
        Twitter{" "}
      </a>
    </div>

  </Card.Body>
  <Card.Footer className="text-muted">Creado por:   Sara Sanchez - Lautaro Gomez  - Adriana Picallo</Card.Footer>
</Card> */}
