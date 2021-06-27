import React, { useEffect } from "react";
import Banner from "../components/faqs/Banner";
import QuestionsAndAnswers from "../components/faqs/QuestionsAndAnswers";
import Copyright from "../components/common/copyright/Copyright";
import Help from "../components/faqs/Help";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";
import { Helmet } from "react-helmet";

const FAQs = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, [signOut]);
  return (
    <>
      <Helmet>
        <title>FAQ's</title>
      </Helmet>
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
