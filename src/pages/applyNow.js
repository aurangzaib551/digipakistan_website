import React, { useEffect, useLayoutEffect } from "react";
import Container from "@material-ui/core/Container";
import Copyright from "../components/common/copyright/copyright";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";
import { Helmet } from "react-helmet";

const ApplyNow = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, [signOut]);

  // Object Destructuring
  const { push } = useHistory();

  useLayoutEffect(() => {
    return () => {};
  }, []);

  const go = (link) => {
    setTimeout(() => {
      push(link);
    }, 400);
  };
  return (
    <>
      <Helmet>
        <title>Apply Now</title>
      </Helmet>
      <div className="apply-now mt d-flex justify-content-center align-items-center">
        <Container
          component={Paper}
          elevation={10}
          className="d-flex flex-column align-items-center justify-content-center p-3 py-5 mx-3"
        >
          <img
            src="https://i.ibb.co/LYC7rpt/logoPNG.png"
            alt="DigiPAKISTAN"
            width="200"
            height="200"
          />
          <h1 className="text-center fw-bold mx-3">
            Online Application System
          </h1>
          <p className="mb-0 text-center mx-3 text-justify">
            <span className="text-danger">Register yourself</span> as a new
            applicant. After successfully registration, enter your login details
            (Type your email &amp; password which you have created during
            registration). You will be successfully logged into the Candidate
            Portal.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center mb-3">
            <Button
              onClick={() => go("/apply-now/signup")}
              variant="contained"
              size="large"
              className="custom-button mx-3 mt-3"
            >
              New Registeration
            </Button>
            <Button
              onClick={() => go("/apply-now/login")}
              size="large"
              variant="contained"
              className="custom-button mx-3 mt-3"
            >
              Log In
            </Button>
          </div>
        </Container>
      </div>
      <Copyright />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(ApplyNow);
