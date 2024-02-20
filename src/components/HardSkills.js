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
import logoMySQL from "../../static/images/mysql.png";
import logoSQLite from "../../static/images/sqlite.png";
import logoMongoDB from "../../static/images/mongodb.png";
import logoBootstrap from "../../static/images/bootstrap.png";
import logoReactBootstrap from "../../static/images/reactbootstrap.png";
import logoVSC from "../../static/images/vsc.png";
import logoPyCharm from "../../static/images/pycharm.jpg";
import logoAnaconda from "../../static/images/anaconda.png";
import logoJupyter from "../../static/images/jupyter.png";
import logoDBeaver from "../../static/images/dbeaver.png";
import logoNetlify from "../../static/images/netlify.png";
import logoDocker from "../../static/images/docker.png";

const skillsData = [
  { id: 1, name: "Java Script", logo: logoJS },
  { id: 2, name: "React", logo: logoReact },
  { id: 3, name: "HTML", logo: logoHTML },
  { id: 4, name: "CSS", logo: logoCSS },
  { id: 5, name: "Python", logo: logoPython },
  { id: 6, name: "", logo: logoFlask },
  { id: 7, name: "GitHub", logo: logoGitHub },
  { id: 8, name: "PostgreSQL", logo: logoPostgreSQL },
  { id: 9, name: "MySQL", logo: logoMySQL },
  { id: 10, name: "SQLite", logo: logoSQLite },
  { id: 11, name: "MongoDB", logo: logoMongoDB },
  { id: 12, name: "Bootstrap", logo: logoBootstrap },
  { id: 13, name: "React-Bootstrap", logo: logoReactBootstrap },
  { id: 14, name: "VSC", logo: logoVSC },
  { id: 15, name: "PyCharm", logo: logoPyCharm },
  { id: 16, name: "Anaconda", logo: logoAnaconda },
  { id: 17, name: "Jupyter", logo: logoJupyter },
  { id: 18, name: "DBeaver", logo: logoDBeaver },
  { id: 19, name: "Netlify", logo: logoNetlify },
  { id: 19, name: "Docker", logo: logoDocker },
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
