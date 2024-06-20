import React from "react";
import { Card, Image, Button } from "react-bootstrap";
import TGBCarusel from "./TGBCarusel";
import github from "../../static/images/github.png";

export default function TGB() {
  return (
    <Card border="dark" bg="secondary" className="bg-gradient shadow">
      <Card.Title className="my-3">TGB Project</Card.Title>
      <TGBCarusel />
      <Card.Text className="my-3">
        The TGB Project is an application that I utilize in my professional
        capacity. It aids me in monitoring sales within the store for which I
        serve as a manager. My intention is to showcase proficiency in utilizing
        diverse technologies. The application comprises a frontend developed in
        React, and a backend consisting of a PostgreSQL database and a Python
        API implemented with Flask and SQLAlchemy. The functionality of the
        application includes the monitoring of sales against sales targets and
        the provision of straightforward analytical capabilities.
      </Card.Text>
      <div className="my-3 mx-2">
        <Button
          size="sm"
          href="https://github.com/TomaszKoniecznyIT/tgb"
          variant="dark"
        >
          <Image src={github} style={{ width: "2rem", marginRight: "1rem" }} />
          front-end
        </Button>{" "}
        <Button
          size="sm"
          href="https://github.com/TomaszKoniecznyIT/Python_TGB"
          variant="dark"
        >
          <Image src={github} style={{ width: "2rem", marginRight: "1rem" }} />
          back-end
        </Button>
      </div>
    </Card>
  );
}
