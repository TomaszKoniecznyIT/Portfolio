import React from "react";
import { Card, Container, Image, Row } from "react-bootstrap";

import pictureCommunication from "../../static/images/communication.png";
import pictureProblemSolving from "../../static/images/problem_solving.png";
import pictureTeamwork from "../../static/images/teamwork.png";
import pictureAdaptability from "../../static/images/adaptability.png";
import pictureTimeManagement from "../../static/images/time_management.png";
import pictureCriticalThinking from "../../static/images/critical_thinking.png";

const skillsData = [
  { id: 1, name: "Communication skills", picture: pictureCommunication },
  { id: 2, name: "Problem-solving", picture: pictureProblemSolving },
  { id: 3, name: "Teamwork", picture: pictureTeamwork },
  { id: 4, name: "Adaptability", picture: pictureAdaptability },
  { id: 5, name: "Time Management", picture: pictureTimeManagement },
  { id: 6, name: "Critical Thinking", picture: pictureCriticalThinking },
];

export default function SoftSkills() {
  return (
    <Container>
      <Row>
        {skillsData.map((skill) => (
          <Card
            key={skill.id}
            style={{ width: "18rem", margin: "10px" }}
            border="warning"
          >
            <Card.Title>{skill.name}</Card.Title>
            <Image src={skill.picture} />
          </Card>
        ))}
      </Row>
    </Container>
  );
}
