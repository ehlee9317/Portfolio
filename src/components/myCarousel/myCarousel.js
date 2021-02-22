import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";

import ScrollDown from "../scrollDown"



import "./myCarousel.css";

const MyCarousel = () => {
  return (
    <div>
      <Carousel
        controls={false}
        indicators
        interval={3000}
        pauseOnHover={false}
      >
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={slide2} alt="First slide" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        {/* <Carousel.Item>
          <img className="d-block w-100 custom-img" src={gif} alt="Second slide" /> */}

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        {/* </Carousel.Item> */}
        {/* <Carousel.Item>
          <img className="d-block w-100 custom-img" src={gif} alt="Third slide" /> */}

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        {/* </Carousel.Item> */}
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousel;
