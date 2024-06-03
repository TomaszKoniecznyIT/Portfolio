import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import image from "../../static/images/education.png";
import { Link } from "gatsby";

export default function EducationCard() {
  return (
    <Card border="warning">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card bg="warning">
          <Card.Header>EDUCATION</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Link
                to="/about/education"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                University of Zielona Gora of Technology
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link
                to="/about/education#technical"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Electronics Technical School
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Card.Body>
    </Card>
  );
}
