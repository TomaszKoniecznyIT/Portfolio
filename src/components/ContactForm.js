import React from "react";
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form
      className="mx-5 my-5 text-start"
      data-netlify="true"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Row className="mb-4">
        <Form.Group as={Col} md="6">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="name" className="shadow" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter your name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" className="shadow" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter a valid e-mail address.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-4">
        <Form.Label>Message</Form.Label>
        <Form.Control required as="textarea" rows={3} className="shadow" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please enter your message text.
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" variant="secondary" className="shadow">
        Send a Message
      </Button>
    </Form>
  );
}
