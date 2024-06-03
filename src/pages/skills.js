import React from "react";
import { Card } from "react-bootstrap";
import HardSkills from "../components/HardSkills";
import SoftSkills from "../components/SoftSkills";

export default function skills() {
  return (
    <Card>
      <Card.Header id="hard_skills">
        <Card.Title>Hard Skills</Card.Title>
      </Card.Header>
      <Card.Title className="my-3">
        During my studies and while working on various projects, I have
        proficiency in a diverse set of programming languages, technologies, and
        tools at a basic level. Some of these include:
      </Card.Title>
      <Card.Body>
        <HardSkills />
      </Card.Body>
      <Card.Header id="soft_skills">
        <Card.Title>Soft Skills</Card.Title>
      </Card.Header>
      <Card.Title className="my-3">
        With a strong foundation in technical expertise, I bring to the table a
        set of valuable soft skills, including:
      </Card.Title>
      <Card.Body>
        <SoftSkills />
      </Card.Body>
    </Card>
  );
}
