import React from "react";
import { Card } from "react-bootstrap";
import image from "../../static/images/about2.png";

export default function AboutCard() {
  return (
    <Card border="warning">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-warning">Motto</Card.Title>
        <Card.Text>
          "Dreams are realized through the consistent dedication and resilience
          of hard work."
        </Card.Text>
        <Card.Title className="text-warning">Privately</Card.Title>
        <Card.Text>
          I am a husband and a proud father of one son, who is currently
          pursuing a degree in mathematics at the university, continuing a
          family tradition. I have a passion for cycling and a keen interest in
          both automotive and computer technologies.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
