import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import image from "../../static/images/education.png";

export default function EducationCard() {
  return (
    <Card border="warning">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card bg="warning">
          <Card.Header>EDUCATION</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              University of Zielona Gora of Technology
            </ListGroup.Item>
            <ListGroup.Item> Electronics Technical School</ListGroup.Item>
          </ListGroup>
        </Card>
      </Card.Body>
    </Card>
  );
}
