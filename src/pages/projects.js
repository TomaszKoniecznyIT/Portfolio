import React from "react";
import { Container, Row } from "react-bootstrap";
import BallsGame from "../components/BallsGame";
import TGB from "../components/TGB";

export default function Projects() {
  return (
    <Container>
      <Row className="my-5">
        <BallsGame />
      </Row>
      <Row className="my-5">
        <TGB />
      </Row>
    </Container>
  );
}
