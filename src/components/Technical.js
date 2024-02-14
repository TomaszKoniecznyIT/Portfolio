import React from "react";
import { Card, CardGroup, CardText } from "react-bootstrap";
import { Link } from "gatsby";
import image2 from "../../static/images/technical.png";

export default function Technical() {
  return (
    <CardGroup className="my-5">
      <Card border="warning">
        <CardText className="my-3 mx-3">
          I graduated from the Electronic Technical School in Wałbrzych,
          attaining the title of Electronics Technician with a specialization in
          Digital Systems. This school was a purely technical institution, where
          our education encompassed a comprehensive range of topics. Starting
          from the fundamentals of electronics, we progressed to the assembly of
          computers, gaining insights into their principles of operation, and
          delving into the programming of integrated circuits as well as
          computer software.
        </CardText>
        <CardText className="my-3 mx-3">
          The program at this five-year school was designed to provide a
          well-rounded education in electronic engineering. Throughout our
          studies, practical sessions played a significant role, allowing us to
          apply theoretical knowledge in hands-on settings. These practical
          experiences enriched our understanding and skills in working with
          electronic components, troubleshooting, and executing projects
          involving digital systems.{" "}
        </CardText>
        <CardText className="my-3 mx-3">
          The curriculum was not only diverse but also aligned with industry
          standards, ensuring that we were well-prepared for the dynamic field
          of electronics. The comprehensive nature of the program, from basic
          electronics to advanced programming, equipped me with a solid
          foundation and practical expertise in the electronic engineering
          domain.
        </CardText>
      </Card>
      <Card border="warning">
        <Link to="https://energetyk.walbrzych.pl/o-szkole-2/">
          <Card.Img variant="top" src={image2} />{" "}
        </Link>
      </Card>
    </CardGroup>
  );
}
