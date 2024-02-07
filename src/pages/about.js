import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutCard from "../components/AboutCard";
import EducationCard from "../components/EducationCard";
import WorkExperience from "../components/WorkExperience";

export default function About() {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1>About</h1>
          <AboutCard />
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <EducationCard />
        </Col>
        <Col>
          <WorkExperience />
        </Col>
      </Row>
    </Container>
  );
}
