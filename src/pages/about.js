import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutCard from "../components/AboutCard";
import EducationCard from "../components/EducationCard";
import ProfessionalSkills from "../components/ProfessionalSkills";

export default function About() {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <AboutCard />
        </Col>
      </Row>
      <Row className="my-5">
        <Col className="d-flex ">
          <EducationCard />
        </Col>
        <Col className="d-flex ">
          <ProfessionalSkills />
        </Col>
      </Row>
    </Container>
  );
}
