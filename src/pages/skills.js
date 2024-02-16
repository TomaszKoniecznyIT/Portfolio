import React from "react";
import HardSkills from "../components/HardSkills";
import { Container, Card } from "react-bootstrap";

export default function skills() {
  return (
    <Container>
      <Card.Header>Hard Skills</Card.Header>
      <Card.Body>
        <HardSkills />
      </Card.Body>
    </Container>
  );
}
