import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";

export default function Galeria() {
  return (
    <div>
      <EjemploCarousel />
      <GaleriaInteractiva />
    </div>
  );
}

function EjemploCarousel() {
  return (
    <div>
      <Carousel id="galeria" data-bs-theme="dark">
        <Carousel.Item>
          <a href="https://www.youtube.com/watch?v=XVFle7ZsfHA">
            <img
              className="d-block w-100"
              src="https://www.serargentino.com/public/images/2020/10/cafe2-1603725694.jpg"
              alt="Imagen de un cafe antiguo de Buenos Aires"
            />
          </a>
          <Carousel.Caption id="leyendas">
            <a id="cartelito">
              <h5>
                <Badge bg="secondary">
                  {" "}
                  Recuerdos de nuestros comienzos ~ Viaje en el tiempo...
                </Badge>
              </h5>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.youtube.com/watch?v=OJHvHzOvGls">
            <img
              className="d-block w-100"
              src="https://www.serargentino.com/public/images/2019/06/El-famoso-cafe-con-leche-773x458.jpeg"
              alt="Imagen de cafe y leche virtiendose en una taza"
            />
          </a>
          <Carousel.Caption id="leyendas" className="text-white">
            <a id="cartelito">
              <h5>
                <Badge bg="secondary">
                  Cafe con leche ~ Aromas que enamoran!
                </Badge>
              </h5>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.youtube.com/watch?v=5pwIbG15Yzc">
            <img
              className="d-block w-100"
              src="https://www.serargentino.com/public/images/2018/04/cafes-in-buenos-aires-773x458.jpeg"
              alt="Cafe actual de Buenos Aires con estetica antigua"
            />
          </a>
          <Carousel.Caption id="leyendas" className="text-white">
            <a id="cartelito">
              <h5>
                <Badge bg="secondary">
                  Nuestro salón ~ Nos sentimos en casa...!
                </Badge>
              </h5>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h2>
        <Badge bg="secondary">
          Te mostramos un poquito de donde viene el cafe que tanto
          disfrutamos...
        </Badge>
      </h2>
      <br />
      <iframe
        width="866"
        height="487"
        src="https://www.youtube.com/embed/4w-jH_3_JfM"
        title="Cómo Se Hace El CAFÉ? (Proceso En Fábrica)"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function GaleriaInteractiva() {
  const [coffeeImages, setCoffeeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((data) => setCoffeeImages(data))
      .catch((error) => console.error("Error al buscar las imagenes:", error));
  }, []);

  return (
    <div>
      <section className="py-5">
        <div className="container">
          <h2>
            <Badge bg="secondary">Galería de Café</Badge>
          </h2>
          <div className="row">
            {coffeeImages
              .filter((e) => e.image != null && e.image != "image-1")
              .map((foto) => (
                <div className="col-md-4 mb-4" key={foto.id}>
                  <img
                    src={foto.image}
                    alt={`Una imagen de un ${foto.title}`}
                    className="img-fluid rounded"
                  />
                  <p className="mt-2">{foto.title}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export { EjemploCarousel, GaleriaInteractiva };
