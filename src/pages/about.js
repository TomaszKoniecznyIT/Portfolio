import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutCard from "../components/AboutCard";

export default function About() {
  return (
    <Container>
      <Row>
        <Col>
          <AboutCard />
        </Col>
      </Row>
      <Row>
        <Col>Education</Col>
        <Col>Work Experience</Col>
      </Row>
    </Container>
  );
}
