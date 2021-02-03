import React from "react";
import Banner from "../components/faqs/banner";
import QuestionsAndAnswers from "../components/faqs/questionsAndAnswers";
import Copyright from "../components/common/copyright/copyright";
import Help from "../components/faqs/help";

const FAQs = () => {
  return (
    <>
      <Banner />
      <Help />
      <QuestionsAndAnswers />
      <Copyright />
    </>
  );
};

export default FAQs;
