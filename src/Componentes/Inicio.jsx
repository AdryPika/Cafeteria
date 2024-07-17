import React from "react";
import { Card } from "react-bootstrap";

export default function Inicio() {
  return (
    <div>
      <Historia />
    </div>
  );
}

function Historia() {
  return (
    <div>
      <Card id="inicio">
        <section className="container">
          <Card>
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 text-center mb-7">
                <span className="badge rounded-pill bg-primary-soft mb-6">
                  <span className="h6 text-uppercase">¿Por qué Elegirnos?</span>
                </span>
                <h5>
                  En el corazón de una ciudad cosmopolita, donde el ritmo de
                  vida es frenético y las historias se cruzan sin cesar, se alza
                  "La Esquina de los Recuerdos", una cafetería peculiar con una
                  historia que se teje entre las risas de los jóvenes y los
                  susurros de los ancianos.{" "}
                </h5>
              </div>
            </div>
          </Card>
          <br />
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="d-flex">
                <div className="badge badge-lg badge-rounded-circle bg-primary-soft">
                  <span>1</span>
                </div>

                <div className="ms-5">
                  <h4>Nosotros</h4>
                  <p className="text-muted mb-6 mb-md-8">
                    Fundada hace más de medio siglo por Doña Rosa, una mujer que
                    llegó a la ciudad con poco más que una receta de café y un
                    sueño en el corazón. Originaria de un pequeño pueblo donde
                    el tiempo parecía detenerse entre campos de café, Doña Rosa
                    trajo consigo la pasión por la tradición y el calor de la
                    hospitalidad.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex">
                <div className="badge badge-lg badge-rounded-circle bg-primary-soft">
                  <span>2</span>
                </div>

                <div className="ms-5">
                  <h4>Nuestros Productos</h4>
                  <p className="text-muted mb-6 mb-md-8">
                    A través de los años nos encontramos mejorando y
                    actualizando los productos que ofrecemos a nuestros
                    clientes, destacamos los productos de Cafetería, Confitería
                    y Panadería.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex">
                <div className="badge badge-lg badge-rounded-circle bg-primary-soft">
                  <span>3</span>
                </div>

                <div className="ms-5">
                  <h4>Servicios</h4>
                  <p className="text-muted mb-6 mb-md-8">
                    A medida que el tiempo avanza, "La Esquina de los Recuerdos"
                    se adapta sin perder su esencia. La decoración vintage se
                    combina con tecnología moderna para ofrecer a los clientes
                    una experiencia cómoda y acogedora. Además, la cafetería se
                    compromete con prácticas sostenibles, utilizando productos
                    locales y promoviendo el reciclaje entre sus clientes y
                    empleados.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex">
                <div className="badge badge-lg badge-rounded-circle bg-primary-soft">
                  <span>4</span>
                </div>

                <div className="ms-5">
                  <h4>Horarios</h4>
                  <p className="text-muted mb-6 mb-md-8">
                    Nuestro local abre sus puertas de Lunes a Lunes de 07:00 a
                    21:00 hs, se pueden realizar reservas personalmente,
                    telefónicamente, o a través de nuestras redes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Card>
    </div>
  );
}

export { Historia };
