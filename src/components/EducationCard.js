import React from "react";
import { Card } from "react-bootstrap";
import image from "../../static/images/education.png";

export default function EducationCard() {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Education</Card.Title>
        <Card.Text>"Education text"</Card.Text>
      </Card.Body>
    </Card>
  );
}
