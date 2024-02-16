import React from "react";
import { Card, CardGroup, CardText } from "react-bootstrap";
import { Link } from "gatsby";
import image1 from "../../static/images/university.png";
import image2 from "../../static/images/uz_logo.jpg";

export default function University() {
  return (
    <CardGroup className="my-5">
      <Card border="warning">
        <Card.Img src={image1} />
      </Card>
      <Card border="warning">
        <Link to="https://uz.zgora.pl/en/">
          <Card.Img variant="top" src={image2} />
        </Link>
        <CardText className="my-2 mx-3">
          I have obtained a Master's degree in Mathematics with a specialization
          in Mathematical and Computational Methods in Economics.
        </CardText>
        <CardText className="my-2 mx-3">
          For five years in our classes, we focused mainly on mathematical
          topics with a significant emphasis on algorithms. We also had numerous
          technical sessions involving the use of computers, enabling us to
          translate theoretical knowledge into practical skills.
        </CardText>
      </Card>
    </CardGroup>
  );
}
