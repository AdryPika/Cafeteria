import React from 'react'
import { CardFooter, Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <div>
      <Contacto />
    </div>
  )
};

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
export { Contacto };

/* <footer class="bg-light py-5">
  <div class="container px-4 px-lg-5">
    <div class="small text-center text-muted">Copyright © 2024 - Unahur</div>
  </div>
</footer> */