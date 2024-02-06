import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutCard from "../components/AboutCard";
import EducationCard from "../components/EducationCard";

export default function About() {
  return (
    <Container>
      <Row>
        <Col className="my-5">
          <h1>About</h1>
          <AboutCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <EducationCard />
        </Col>
        <Col>Work Experience</Col>
      </Row>
    </Container>
  );
}
