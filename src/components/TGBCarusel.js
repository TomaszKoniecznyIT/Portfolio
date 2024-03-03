import React from "react";
import { Carousel, Image } from "react-bootstrap";
import tgb1 from "../../static/images/tgb1.png";
import tgb2 from "../../static/images/tgb2.png";
import tgb3 from "../../static/images/tgb3.png";
import tgb4 from "../../static/images/tgb4.png";

export default function TGBCarusel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Image src={tgb1} style={{ width: "12rem" }} />
        <div>Login to the application.</div>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={tgb2} style={{ width: "12rem" }} />
        <div>Reporting daily sales.</div>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={tgb3} style={{ width: "12rem" }} />
        <div>Sales information.</div>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={tgb4} style={{ width: "12rem" }} />
        <div>Sales analysis.</div>
      </Carousel.Item>
    </Carousel>
  );
}
