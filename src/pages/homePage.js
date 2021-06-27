import React, { useEffect } from "react";
import Slider from "../components/home_page/Slider";
import OurMission from "../components/home_page/OurMission";
import AvailablePrograms from "../components/home_page/AvailablePrograms";
import UpcomingPrograms from "../components/home_page/UpcomingPrograms";
import YoutubeChannel from "../components/home_page/YoutubeChannel";
import TrainerCertified from "../components/home_page/TrainerCertified";
import FreelancingPlatforms from "../components/home_page/FreelancingPlatforms";
import JoinDigiPAKISTAN from "../components/home_page/JoinDigiPAKISTAN";
import Supporters from "../components/home_page/Supporters";
import Footer from "../components/common/footer/Footer";
import Copyright from "../components/common/copyright/Copyright";
import { connect } from "react-redux";
import { signOut } from "../store/actions/AuthActions";
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
