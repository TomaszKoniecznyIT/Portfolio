import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <Container>
      <Row>
        <Col>About</Col>
      </Row>
      <Row>
        <Col>Education</Col>
        <Col>Work Experience</Col>
      </Row>
    </Container>
  );
}
