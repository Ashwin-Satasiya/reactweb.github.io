import React from "react";

import "../css/HeaderApp.css";

import {
  Container,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  NavbarBrand,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

function HeaderApp() {
  return (
    <Navbar expand="md" className="navbar-main">
      <Container fluid>
        <Navbar.Brand className="fs-3  logo" href="#home">
          Forever
        </Navbar.Brand>
        <Navbar.Toggle
          className="navbar-toggle-custom"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="nav-link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderApp;
