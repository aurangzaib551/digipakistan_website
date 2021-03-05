import React, { useEffect } from "react";
import Slider from "../components/home_page/slider";
import OurMission from "../components/home_page/ourMission";
import AvailablePrograms from "../components/home_page/availablePrograms";
import UpcomingPrograms from "../components/home_page/upcomingPrograms";
import YoutubeChannel from "../components/home_page/youtubeChannel";
import TrainerCertified from "../components/home_page/trainerCertified";
import FreelancingPlatforms from "../components/home_page/freelancingPlatforms";
import JoinDigiPAKISTAN from "../components/home_page/joinDigiPAKISTAN";
import Supporters from "../components/home_page/supporters";
import Footer from "../components/common/footer/footer";
import Copyright from "../components/common/copyright/copyright";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";
import Home1 from "../components/home_page/myDigi/myhomeDive/Home_1";

const HomePage = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, [signOut]);
  return (
    <>
      <Slider />
      <Home1 />
      <OurMission />
      <Home1 />
      <AvailablePrograms />
      <Home1 />
      <UpcomingPrograms />
      <Home1 />
      <YoutubeChannel />
      <Home1 />
      <TrainerCertified />
      <Home1 />
      <FreelancingPlatforms />
      <Home1 />
      <JoinDigiPAKISTAN />
      <Home1 />
      <Supporters />
      <Home1 />
      <Footer />
      <Copyright />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
