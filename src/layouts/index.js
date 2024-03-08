import React from "react";
import { Card, Image } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";
import github from "../../static/images/github.png";
import linkedIn from "../../static/images/linkedIn.png";
import codewars from "../../static/images/codewars.png";

export default function Layout({ children }) {
  return (
    <Card className="text-center">
      <CustomNavbar />
      {children}
      <Card.Footer>
        <small className="text-muted">Copyright 2024 Tomasz Konieczny</small>
        <Image src={linkedIn} style={{ width: "2rem" }} />
        <Image src={github} style={{ width: "2rem" }} />
        <Image src={codewars} style={{ width: "2rem" }} />
      </Card.Footer>
    </Card>
  );
}
