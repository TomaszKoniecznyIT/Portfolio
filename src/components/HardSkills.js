import React from "react";
import { Card, Image } from "react-bootstrap";
import logo from "../../static/images/js.png";

export default function HardSkills() {
  return (
    <Card style={{ width: "8rem" }}>
      <Image src={logo} />
      <Card.Title>Java Script</Card.Title>
    </Card>
  );
}
