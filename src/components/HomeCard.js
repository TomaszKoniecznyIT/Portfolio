import React from "react";
import { Button, Card } from "react-bootstrap";

export default function HomeCard() {
  return (
    <Card
      style={{
        backgroundColor: "transparent",
        position: "relative",
        top: "15vw",
        border: "none",
        textAlign: "left",
        color: "white",
        fontSize: "2vw",
        width: "45vw",
      }}
    >
      <Card.Body>
        <Card.Title style={{ fontSize: "4vw" }}>Hello, I am Tom</Card.Title>
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
          <Button
            href="/skills"
            variant="warning"
            style={{ fontSize: "2vw", padding: "1% 3%" }}
          >
            Show me skills
          </Button>
        </div>
        <div>
          <Button
            href="/projects"
            variant="warning"
            style={{ fontSize: "2vw", padding: "1% 3%" }}
          >
            show me projects
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
