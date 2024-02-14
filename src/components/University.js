import React from "react";
import { Card, CardGroup, CardText } from "react-bootstrap";
import image1 from "../../static/images/university.png";
import image2 from "../../static/images/uz_logo.jpg";
import { Link } from "gatsby";

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
        <CardText>
          I have obtained a Master's degree in Mathematics with a specialization
          in Mathematical and Computational Methods in Economics.
        </CardText>
      </Card>
    </CardGroup>
  );
}
