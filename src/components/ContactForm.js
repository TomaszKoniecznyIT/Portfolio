import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { navigate } from "gatsby"; // Zakładając, że używasz Gatsby

export default function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(false);
    } else {
      setValidated(true);

      const formData = new FormData(form);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => navigate("/thank-you/"))
        .catch((error) => alert(error));
    }
  };

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <Form className="mx-5 my-5 text-start" noValidate validated={validated}>
        <Row className="mb-5">
          <Form.Group as={Col} md="6">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" required type="text" className="shadow" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              required
              type="email"
              className="shadow"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter a valid e-mail address.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-5">
          <Form.Label>Message</Form.Label>
          <Form.Control
            name="message"
            required
            as="textarea"
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
    </form>
  );
}
