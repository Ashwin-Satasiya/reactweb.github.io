import React from "react";

import { Container, Row, Button, Form } from "react-bootstrap";

import "../css/ContactApp.css";

function ContactApp() {
  return (
    <Container fluid id="contact" className="mb-5">
      <h1 className="text-center mt-3 mb-3"> Contact us</h1>
      <Row className="justify-content-center mt-4">
        <div className="col-md-6 form-div">
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <br />
              <Form.Control type="text" placeholder="Name *"></Form.Control>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicLname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name *"
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email ID *"
              ></Form.Control>
            </Form.Group>
            <br />
            <Button
              className="btn btn-info text-white w-25 fs-5 d-block mx-auto"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </Row>
    </Container>
  );
}

export default ContactApp;
