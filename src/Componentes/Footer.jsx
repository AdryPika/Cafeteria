import React from 'react'
import { CardFooter, Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <div>
      <Mapa />
      <Contacto />
    </div>
  )
};

function Mapa(){
  return(
    <section className="py-5">
      <div className="container">
        <h4>Nuestra ubicacion</h4>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            title="Mapa de Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4173877820986!2d-58.6367786!3d-34.61889119999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8d04e479ffb%3A0xfa3c83f72475e65!2sTte.%20Manuel%20Origone%20101%2C%20Villa%20Tesei%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1721225006232!5m2!1sen!2sar"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>



  )

}

function Contacto() {
  return (
    <CardFooter>
      <footer id='contacto' class="bg-light py-5">
        <div class="container px-4 px-lg-5">
          <div class="small text-center text-muted">
            <h4>Contacto</h4>
            <div class="footer-widget-content">
              <a href="mailto:sales@example.com" class="contact-link">      cafe@example.com     - </a>
              <a href="mailto:support@example.com" class="contact-link red">     infoCafe@example.com     - </a>
              <a href="tel:0121234" class="contact-link">     (123) 456-789    </a>
            </div>
          </div>
          <br />
          <div>
            <h4>Redes Sociales</h4>
            <div class="footer-widget-content">
              <a href="https://www.facebook.com/" class="contact-link">     Facebook     - </a>
              <a href="https://www.instagram.com/" class="contact-link">      Instagram     - </a>
              <a href="https://www.twitter.com/" class="contact-link">      Twitter     </a>
            </div>
            <br />
            <div class="container px-4 px-lg-5">
              <div class="small text-center text-muted">Integrantes: Sara - Lautaro - Adriana</div>
            </div>

          </div>
        </div>
      </footer>
    </CardFooter>
  )
}
export { Contacto, Mapa };

/* <footer class="bg-light py-5">
  <div class="container px-4 px-lg-5">
    <div class="small text-center text-muted">Copyright © 2024 - Unahur</div>
  </div>
</footer> */