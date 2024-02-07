import React from "react";
import { Button, Card } from "react-bootstrap";

export default function HomeCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Hello, I am Tom</Card.Title>
        <Card.Text>What are challenges for you?</Card.Text>
        <Card.Text>
          For me, the challenges are a source of energy and enthusiasm. thanks
          to them, the world is a more exciting place.
        </Card.Text>
        <Card.Text>
          I invite you to familiarize yourself with the website and the
          projects.
        </Card.Text>
        <div className="my-2">
          <Button variant="warning">Show me skills</Button>
        </div>
        <div>
          <Button variant="warning">show me projects</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
