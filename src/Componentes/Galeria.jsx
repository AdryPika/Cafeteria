import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Galeria() {
  return (
    <div>
      <EjemploCarousel />
    </div>
  )
};



function EjemploCarousel() {
  return (
    <Carousel id='galeria' data-bs-theme="dark" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src = "https://www.serargentino.com/public/images/2020/10/cafe2-1603725694.jpg"
          alt="First slide"
        />
        <Carousel.Caption id='leyendas' >
          <h5 >Recuerdos de nuestros comienzos</h5>
          <p >Viaje en el tiempo...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.serargentino.com/public/images/2019/06/El-famoso-cafe-con-leche-773x458.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption id='leyendas'className="text-white">
          <h5 >Cafe con leche</h5>
          <p>Aromas que enamoran!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.serargentino.com/public/images/2018/04/cafes-in-buenos-aires-773x458.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption id='leyendas' className="text-white"> 
          <h5>Nuestro salón</h5>
          <p>Nos sentimos en casa...!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export {EjemploCarousel};