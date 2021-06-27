import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Content from "../components/bank_challan/Content";
import { Helmet } from "react-helmet";

const BankChallan = ({ uid, emailVerified, applicationSubmitted, status }) => {
  // User is logged in or not
  if (!uid) return <Redirect to="/apply-now/login" />;
  // Checking email is verified or not
  if (!emailVerified) return <Redirect to="/apply-now/emailVerification" />;
  // Checking application is submitted or not
  if (!applicationSubmitted)
    return <Redirect to="/apply-now/applicationForm" />;
  if (!status) return <Redirect to="/dashboard" />;

  return (
    <>
      <Helmet>
        <title>Bank Challan</title>
      </Helmet>
      <Content />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.firebase.profile.admissionStatus,
    uid: state.firebase.auth.uid,
    emailVerified: state.firebase.auth.emailVerified,
    applicationSubmitted: state.firebase.profile.applicationSubmitted,
  };
};

export default connect(mapStateToProps)(BankChallan);
