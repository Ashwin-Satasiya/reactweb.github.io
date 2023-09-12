import React from "react";

import "../css/Slider.css";

import { Carousel, CarouselItem } from "react-bootstrap";

import Img1 from "../images/Nature-1.jpeg";

import Img2 from "../images/Nature-2.jpeg";

import Img3 from "../images/Nature-3.jpeg";

import Img4 from "../images/Nature-4.jpeg";

function CarouselApp() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Img1} alt="First slide" />
        <Carousel.Caption>
          <h1 className="header1">First nature image</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="w-100 d-block" src={Img2} alt="Second slide" />
        <Carousel.Caption>
          <h1 className="header2">Second nature slide</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="w-100 d-block" src={Img3} alt="Third slide" />
        <Carousel.Caption>
          <h1 className="header3">Third nature slide </h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="w-100 d-block" src={Img4} alt="Fourth slide" />
        <Carousel.Caption>
          <h1 className="header4">Fourth nature slide</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselApp;
