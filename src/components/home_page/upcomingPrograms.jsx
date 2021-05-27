import React from "react";
import Container from "@material-ui/core/Container";
import SlickSlider from "react-slick";
import { useMediaQuery } from "react-responsive";

const UpcomingPrograms = () => {
  // Media Query
  const isMobile = useMediaQuery({
    query: "(max-width: 576px)",
  });

  // Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Container className="mt-5 upcoming-programs">
      <h2 className="fw-bold h1 text-center mx-3">Upcoming Programs</h2>

      <SlickSlider
        {...settings}
        className="my-4 slick-width d-flex justify-content-center"
      >
        <div className="d-flex justify-content-center outline">
          <img
            src="https://i.ibb.co/613zHZb/Augmented-reality-final.png"
            alt="Augmented Reality"
            width="300"
            height={isMobile ? "100%" : "300"}
            className="upcomimg-course-img"
          />
        </div>
        <div className="d-flex justify-content-center outline">
          <img
            src="https://i.ibb.co/DkDhzbP/Robotics-final.png"
            alt="Robotics"
            width="300"
            height={isMobile ? "100%" : "300"}
            className="upcomimg-course-img"
          />
        </div>
        <div className="d-flex justify-content-center outline">
          <img
            src="https://i.ibb.co/tc4Xbpf/big-data-Final.png"
            alt="Big Data"
            width="300"
            height={isMobile ? "100%" : "300"}
            className="upcomimg-course-img"
          />
        </div>
        <div className="d-flex justify-content-center outline">
          <img
            src="https://i.ibb.co/16DjxBF/NEURO-TECH-FINAL.png"
            alt="Neuro Tech"
            width="300"
            height={isMobile ? "100%" : "300"}
            className="upcomimg-course-img"
          />
        </div>
        <div className="d-flex justify-content-center outline">
          <img
            src="https://i.ibb.co/Kyj7PQr/3d-printing-final.png"
            alt="3D Printing"
            width="300"
            height={isMobile ? "100%" : "300"}
            className="upcomimg-course-img"
          />
        </div>
        <div className="d-flex justify-content-center outline">
          <img
            src="https://i.ibb.co/KrWszvp/Shared-Economy-final.png"
            alt="Shared Economy"
            width="300"
            height={isMobile ? "100%" : "300"}
            className="upcomimg-course-img"
          />
        </div>
        <div className="d-flex justify-content-center outline">
          <img
            src="https://i.ibb.co/k58hVz3/cloud-final.png"
            alt="Cloud Infrastructure"
            width="300"
            height={isMobile ? "100%" : "300"}
            className="upcomimg-course-img"
          />
        </div>
        <div className="d-flex justify-content-center outline">
          <img
            src="https://i.ibb.co/nmZBVhr/hitech.png"
            alt="Hi-Tech"
            width="300"
            height={isMobile ? "100%" : "300"}
            className="upcomimg-course-img"
          />
        </div>
        <div className="d-flex justify-content-center outline">
          <img
            src="https://i.ibb.co/8KWjxFB/incubation-center-Final.png"
            alt="Incubation Center"
            width="300"
            height={isMobile ? "100%" : "300"}
            className="upcomimg-course-img"
          />
        </div>
        <div className="d-flex justify-content-center outline">
          <img
            src="https://i.ibb.co/pXwB6fV/Startup-Funding-final.png"
            alt="Startup Funding"
            width="300"
            height={isMobile ? "100%" : "300"}
            className="upcomimg-course-img"
          />
        </div>
      </SlickSlider>
    </Container>
  );
};

export default UpcomingPrograms;
