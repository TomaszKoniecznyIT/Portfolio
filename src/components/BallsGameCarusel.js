import React from "react";
import { Carousel, Image } from "react-bootstrap";
import game1 from "../../static/images/Game1.png";
import game2 from "../../static/images/Game2.png";
import game3 from "../../static/images/Game3.png";
import game4 from "../../static/images/Game4.png";

export default function BallsGameCarusel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Image src={game1} style={{ width: "12rem" }} />
        <div>Game after launch.</div>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={game2} style={{ width: "12rem" }} />
        <div>The game involves placing at least 5 balls in a line.</div>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={game3} style={{ width: "12rem" }} />
        <div>When we do this, we get points.</div>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={game4} style={{ width: "12rem" }} />
        <div>If not, another 3 balls appear on the board.</div>
      </Carousel.Item>
    </Carousel>
  );
}
