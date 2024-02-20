import React from "react";
import HardSkills from "../components/HardSkills";
import { Card } from "react-bootstrap";

export default function skills() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Hard Skills</Card.Title>
      </Card.Header>
      <Card.Title className="my-3">
        During my studies and while working on various projects, I have
        proficiently utilized a diverse set of programming languages,
        technologies, and tools. Some of these include:
      </Card.Title>
      <Card.Body>
        <HardSkills />
      </Card.Body>
    </Card>
  );
}
