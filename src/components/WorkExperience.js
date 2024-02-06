import React from "react";
import { Card } from "react-bootstrap";
import image from "../../static/images/work1.png";

export default function WorkExperience() {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Work Experience</Card.Title>
        <Card.Text>"Work Experience text"</Card.Text>
      </Card.Body>
    </Card>
  );
}
