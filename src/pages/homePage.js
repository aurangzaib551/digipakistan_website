import React from "react";
import Slider from "../components/home_page/slider";
import OurMission from "../components/home_page/ourMission";
import AvailablePrograms from "../components/home_page/availablePrograms";

const HomePage = () => {
  return (
    <>
      <Slider />
      <OurMission />
      <AvailablePrograms />
    </>
  );
};

export default HomePage;
