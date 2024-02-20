import React from "react";
import { Card, Container, Image, Row } from "react-bootstrap";
import logoJS from "../../static/images/js.png";
import logoReact from "../../static/images/react.png";
import logoPython from "../../static/images/python.png";
import logoFlask from "../../static/images/flask.png";
import logoCSS from "../../static/images/css.png";
import logoHTML from "../../static/images/html.png";
import logoGitHub from "../../static/images/github.png";
import logoPostgreSQL from "../../static/images/postgresql.png";

const skillsData = [
  { id: 1, name: "Java Script", logo: logoJS },
  { id: 2, name: "React", logo: logoReact },
  { id: 3, name: "HTML", logo: logoHTML },
  { id: 4, name: "CSS", logo: logoCSS },
  { id: 5, name: "Python", logo: logoPython },
  { id: 6, name: "", logo: logoFlask },
  { id: 7, name: "GitHub", logo: logoGitHub },
  { id: 8, name: "PostgreSQL", logo: logoPostgreSQL },
];

export default function HardSkills() {
  return (
    <Container>
      <Row>
        {skillsData.map((skill) => (
          <Card key={skill.id} style={{ width: "9rem", margin: "10px" }}>
            <Image src={skill.logo} />
            <Card.Title>{skill.name}</Card.Title>
          </Card>
        ))}
      </Row>
    </Container>
  );
}
