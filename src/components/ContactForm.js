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
    } else {
      const formData = new FormData(form);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          console.log("Form successfully submitted");
        })
        .catch((error) => {
          console.error("Form submission error:", error);
        });

      setValidated(true);
    }
  };

  return (
    <Form
      className="mx-5 my-5 text-start"
      name="contact"
      data-netlify="true"
      method="POST"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Row className="mb-5">
        <Form.Group as={Col} md="6">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="name" name="name" className="shadow" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter your name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" name="email" className="shadow" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter a valid e-mail address.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-5">
        <Form.Label>Message</Form.Label>
        <Form.Control
          required
          as="textarea"
          name="message"
          rows={8}
          className="shadow"
        />
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
