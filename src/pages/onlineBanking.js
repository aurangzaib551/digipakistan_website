import React from "react";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Helmet } from "react-helmet";

const OnlineBanking = ({
  uid,
  emailVerified,
  applicationSubmitted,
  status,
}) => {
  // User is logged in or not
  if (!uid) return <Redirect to="/apply-now/login" />;
  // Checking email is verified or not
  if (!emailVerified) return <Redirect to="/apply-now/emailVerification" />;
  // Checking application is submitted or not
  if (!applicationSubmitted)
    return <Redirect to="/apply-now/applicationForm" />;
  if (!status) return <Redirect to="/apply-now/admissionStatus" />;
  return (
    <>
      <Helmet>
        <title>Online Banking</title>
      </Helmet>
      <Container className="mt pt-4">
        <h1 className="fw-bold text-center mx-3">Description</h1>
        <p className="text-justify">
          <strong>Online Banking</strong> allows a user to conduct financial
          transactions via the Internet. Online banking is also known as
          Internet banking or web banking. Online banking offers customers
          almost every service traditionally available through a local branch
          including deposits, transfers, and online payments.
        </p>

        <h1 className="fw-bold text-center mx-3">Procedure</h1>

        <ul>
          <li>OPEN YOUR ACCOUNT APP / WEB FOR ONLINE TRANSACTION</li>
          <li>
            SELECT <strong>Habib Bank Limited (HBL)</strong>
          </li>
          <li>
            Fetch &amp; verify <strong>Account Title: DIGIPAKISTAN</strong>
          </li>
          <li>
            Enter Account #: <strong>24747000465103</strong>
            <ul>
              <li>
                If you applied for 1 Program, add amount:{" "}
                <strong>2000/=</strong>
              </li>
              <li>
                If you applied for 2 Programs, add amount:{" "}
                <strong>4000/=</strong>
              </li>
              <li>
                If you applied for 3 Programs, add amount:{" "}
                <strong>6000/=</strong>
              </li>
            </ul>
          </li>
          <li>
            Pay the Fee Online &amp; Get a{" "}
            <strong>Get a Picture of Transaction ID.</strong>
          </li>
          <li>
            After{" "}
            <strong>
              Fee Submission, You have to fill Fee Verification Form.
            </strong>
          </li>
        </ul>

        <div className="d-flex justify-content-center">
          <Button
            href="https://forms.gle/YSD8vLmkFkoTpYwM9"
            variant="contained"
            className="custom-button mt-3"
          >
            Verification Form
          </Button>
        </div>
        <p className="mb-0 mt-3 text-center">
          <span className="fw-bold">Note:</span> Once admissions are closed, you
          will get your LMS Login Credentials
        </p>
      </Container>
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

export default connect(mapStateToProps)(OnlineBanking);
