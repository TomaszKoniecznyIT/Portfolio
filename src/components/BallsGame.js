import React from "react";
import { Card } from "react-bootstrap";
import BallsGameCarusel from "./BallsGameCarusel";

export default function BallsGame() {
  return (
    <Card border="warning">
      <Card.Title className="my-3">Balls Game</Card.Title>
      <BallsGameCarusel />
      <Card.Text className="my-3">
        I embarked on my coding journey with Python. Once I had mastered the
        fundamentals, I started tackling challenges on platforms like Codewars.
        To diversify my coding practice, I decided to create a fully functional
        application that could be used interactively. However, I was lacking
        inspiration. It was during a moment spent beside my wife, who was
        engrossed in a simple logic game on her laptop, that an idea struck me:
        could I, after just a few months of learning Python, create a duplicate
        of such a game? This sparked the inception of my first independent
        project.
      </Card.Text>
    </Card>
  );
}
