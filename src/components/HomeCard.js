import React from "react";
import { Button, Card } from "react-bootstrap";

export default function HomeCard() {
  return (
    <Card
      style={{
        backgroundColor: "transparent",
        position: "relative",
        top: "6vw",
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
          For me, the challenges are a source of energy and enthusiasm. Thanks
          to them, the world is a more exciting place.
        </Card.Text>
        <Card.Text>
          I invite you to familiarize yourself with the website and the
          projects.
        </Card.Text>
        <div className="my-5">
          <div className="my-2">
            <Button
              href="/skills"
              variant="warning"
              style={{ fontSize: "1.5vw", padding: "1% 3%" }}
            >
              my skills
            </Button>
          </div>
          <div>
            <Button
              href="/projects"
              variant="warning"
              style={{ fontSize: "1.5vw", padding: "1% 3%" }}
            >
              my projects
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
