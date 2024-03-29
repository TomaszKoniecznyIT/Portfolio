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
          <Card.Header>PROFESSIONAL SKILLS</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Link
                to="/skills#hard_skills"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Hard Skills
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link
                to="/skills#soft_skills"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Soft Skills
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Card.Body>
    </Card>
  );
}
