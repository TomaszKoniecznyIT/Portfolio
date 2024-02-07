import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import image from "../../static/images/logo1.png";
import HomeCard from "../components/HomeCard";

export default function Home() {
  return (
    <Container>
      <Row className="my-5">
        <Col className="d-flex ">
          <HomeCard />
        </Col>
        <Col className="d-flex ">
          <Image src={image} width={512} rounded />
        </Col>
      </Row>
    </Container>
  );
}
