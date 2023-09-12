import React from "react";

import "../css/AboutApp.css";

import { Container, Row } from "react-bootstrap";

import abt from "../images/About.jpg";

function AboutApp() {
  return (
    <>
      <Container fluid className="p-4 bg-info" id="about">
        <Row>
          <div className="col-md-6">
            <img className="w-100 d-block" src={abt} alt="about-img" />
          </div>
          <div className="col-md-6">
            <h1 className="text-center">About</h1>
            <p>
              As a frontend developer, my passion lies in crafting beautiful and
              user-friendly web experiences. With a strong foundation in HTML,
              CSS, and JavaScript, I create responsive and visually appealing
              websites that captivate and engage users. My expertise extends to
              modern front-end libraries and frameworks like React, Vue, and
              Angular, enabling me to build dynamic and interactive web
              applications.
              <br />
              <br />I have a keen eye for design and pay meticulous attention to
              detail, ensuring pixel-perfect layouts and seamless user
              interfaces. My commitment to clean and maintainable code makes
              projects scalable and easy to maintain. I am continuously learning
              and adapting to stay current with the ever-evolving web
              technologies, and I thrive on solving complex problems and
              delivering innovative solutions.
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default AboutApp;
