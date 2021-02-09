import React, { useEffect } from "react";
import Banner from "../components/faqs/banner";
import QuestionsAndAnswers from "../components/faqs/questionsAndAnswers";
import Copyright from "../components/common/copyright/copyright";
import Help from "../components/faqs/help";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";

const FAQs = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, [signOut]);
  return (
    <>
      <Banner />
      <Help />
      <QuestionsAndAnswers />
      <Copyright />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(FAQs);
