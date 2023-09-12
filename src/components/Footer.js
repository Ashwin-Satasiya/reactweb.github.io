import React from "react";

import "../css/FooterApp.css";

import "bootstrap-icons/font/bootstrap-icons.min.css";

import { Container, Row } from "react-bootstrap";

function FooterApp() {
  return (
    <>
      <Container fluid id="footer">
        <Row className="bg-dark p-4">
          <div className="col-md-6 mt-4 text-white fs-4">
            Copyright &copy; 2023 All right reserved.
          </div>

          <div className="col-md-6">
            <h3 className="media-head text-white">Follow us on</h3>
            <div className="media">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-twitter"></i>
              <i class="bi bi-whatsapp"></i>
              <i class="bi bi-instagram"></i>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default FooterApp;
