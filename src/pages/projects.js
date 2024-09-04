import React from "react";
import { Container, Row } from "react-bootstrap";
import Connect5Game from "../components/Connect5Game";
import TGB from "../components/TGB";

export default function Projects() {
  return (
    <Container>
      <Row className="my-5">
        <Connect5Game />
      </Row>
      <Row className="my-5">
        <TGB />
      </Row>
    </Container>
  );
}
