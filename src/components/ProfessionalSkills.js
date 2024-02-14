import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import image from "../../static/images/work1.png";
import { Link } from "gatsby";

export default function ProfessionalSkills() {
  return (
    <Card border="warning">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card bg="warning">
          <Link
            to="/skills"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card.Header>PROFESSIONAL SKILLS</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Hard Skills</ListGroup.Item>
              <ListGroup.Item>Soft Skills</ListGroup.Item>
            </ListGroup>
          </Link>
        </Card>
      </Card.Body>
    </Card>
  );
}
