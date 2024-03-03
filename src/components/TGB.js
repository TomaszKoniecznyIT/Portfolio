import React from "react";
import { Card } from "react-bootstrap";

export default function TGB() {
  return (
    <Card border="warning">
      <Card.Title className="my-3">TGB Project</Card.Title>
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
    </Card>
  );
}
