import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import image from "../../static/images/home_long.png";
import HomeCard from "../components/HomeCard";

export default function Home() {
  return (
    <div className="card border-0">
      <Image src={image} className="img-fluid" />
      <div class="card-img-overlay">
        <HomeCard />
      </div>
    </div>
  );
}
