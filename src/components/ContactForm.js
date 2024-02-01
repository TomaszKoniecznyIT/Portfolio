import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function ContactForm() {
  return (
    <Form className="mx-5 my-5 text-start">
      <Row className="mb-4">
        <Form.Group as={Col} md="6">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" className="shadow" />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" className="shadow" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-4">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} className="shadow" />
      </Form.Group>
      <Button type="submit" variant="secondary" className="shadow">
        Send a Message
      </Button>
    </Form>
  );
}
