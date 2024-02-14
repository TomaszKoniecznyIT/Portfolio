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
          <Link
            to="/about/education"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card.Header>EDUCATION</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                University of Zielona Gora of Technology
              </ListGroup.Item>
              <ListGroup.Item> Electronics Technical School</ListGroup.Item>
            </ListGroup>
          </Link>
        </Card>
      </Card.Body>
    </Card>
  );
}
