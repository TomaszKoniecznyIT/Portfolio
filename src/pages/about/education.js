import React from "react";
import { Container, Row } from "react-bootstrap";
import Technical from "../../components/Technical";
import University from "../../components/University";

export default function education() {
  return (
    <Container>
      <Row id="university">
        <University />
      </Row>
      <Row id="technical">
        <Technical />
      </Row>
    </Container>
  );
}
