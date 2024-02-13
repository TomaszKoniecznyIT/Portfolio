import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import image from "../../static/images/work1.png";

export default function ProfessionalSkills() {
  return (
    <Card border="warning">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card bg="warning">
          <Card.Header>PROFESSIONAL SKILLS</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Hard Skills</ListGroup.Item>
            <ListGroup.Item>Soft Skills</ListGroup.Item>
          </ListGroup>
        </Card>
      </Card.Body>
    </Card>
  );
}
