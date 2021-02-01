import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mt slider">
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src="https://i.ibb.co/NnyXBMZ/700-height-banner.png"
          alt="First slide"
          width="100%"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src="https://i.ibb.co/Np423Gp/700-height-banner-2.png"
          alt="Third slide"
          width="100%"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
