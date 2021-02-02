import React from "react";
import Slider from "../components/home_page/slider";
import OurMission from "../components/home_page/ourMission";
import AvailablePrograms from "../components/home_page/availablePrograms";
import UpcomingPrograms from "../components/home_page/upcomingPrograms";
import YoutubeChannel from "../components/home_page/youtubeChannel";
import TrainerCertified from "../components/home_page/trainerCertified";
import FreelancingPlatforms from "../components/home_page/freelancingPlatforms";
import JoinDigiPAKISTAN from "../components/home_page/joinDigiPAKISTAN";

const HomePage = () => {
  return (
    <>
      <Slider />
      <OurMission />
      <AvailablePrograms />
      <UpcomingPrograms />
      <YoutubeChannel />
      <TrainerCertified />
      <FreelancingPlatforms />
      <JoinDigiPAKISTAN />
    </>
  );
};

export default HomePage;
