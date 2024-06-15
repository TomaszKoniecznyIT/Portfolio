import React from "react";
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form);
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': "contact",
          ...form,
        }),
      })
        .then(() => alert("Success !!!"))
        .catch((error) => alert(error))
    }
  
      setValidated(true);
    }
  };

  return (
    <Form
      className="mx-5 my-5 text-start"
      name="contact"
      data-netlify="true"
      method="post"
      data-netlify-honeypot="bot-field"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
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
