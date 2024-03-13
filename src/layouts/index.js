import React from "react";
import { Card, Image } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";
import github from "../../static/images/github.png";
import linkedIn from "../../static/images/linkedIn.png";
import codewars from "../../static/images/codewars.png";
import { Link } from "gatsby";

export default function Layout({ children }) {
  return (
    <Card className="text-center">
      <CustomNavbar />
      {children}
      <Card.Footer>
        <small className="text-muted mx-5">
          Copyright 2024 Tomasz Konieczny
        </small>
        <Link to="https://www.linkedin.com/in/tomasz-konieczny-176797289/">
          <Image
            src={linkedIn}
            style={{ width: "2rem", marginRight: "1rem" }}
          />
        </Link>
        <Link to="https://github.com/TomaszKoniecznyIT">
          <Image src={github} style={{ width: "2rem", marginRight: "1rem" }} />
        </Link>
        <Link to="https://www.codewars.com/users/mltk12">
          <Image src={codewars} style={{ width: "2rem" }} />
        </Link>
      </Card.Footer>
    </Card>
  );
}
