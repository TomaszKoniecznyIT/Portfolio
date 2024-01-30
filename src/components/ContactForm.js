import React from "react";
import { Form } from "react-bootstrap";

export default function ContactForm() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}
