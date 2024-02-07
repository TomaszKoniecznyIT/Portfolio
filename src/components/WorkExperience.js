import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import image from "../../static/images/work1.png";

export default function WorkExperience() {
  return (
    <Card border="warning">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card bg="warning">
          <Card.Header>WORK EXPERIENCE</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Gold Brothers</ListGroup.Item>
            <ListGroup.Item>Jako Sp. z o.o.</ListGroup.Item>
            <ListGroup.Item>P.H.U. Tomsoj</ListGroup.Item>
          </ListGroup>
        </Card>
      </Card.Body>
    </Card>
  );
}
