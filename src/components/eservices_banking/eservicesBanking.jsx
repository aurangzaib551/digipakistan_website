import React from "react";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";

const EServicesBanking = ({
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
    <Container className="mt pt-4">
      <h1 className="fw-bold text-center mx-3">Description</h1>
      <p className="text-justify">
        <strong>International Banking</strong> is a type of banking that has
        presence across <strong>International borders</strong>. It is a
        financial entity that offers financial services like lending
        opportunities and payment accounts to <strong>foreign clients</strong>.
      </p>

      <h1 className="fw-bold text-center mx-3">Procedure</h1>

      <ul>
        <li>OPEN YOUR ACCOUNT APP / WEB FOR TRANSACTION</li>
        <li>
          BANK NAME: <strong>Habib Bank Limited (HBL)</strong>
        </li>
        <li>
          IBAN: <strong>PK98HABB0024747000465103</strong>
        </li>
        <li>
          SWIFT CODE: <strong>HABBPKKA</strong>
        </li>
        <li>
          BRACH CODE: <strong>2474</strong>
        </li>
        <li>
          ACCOUNT TITLE: <strong>DIGIPAKISTAN</strong>
          <ul>
            <li>
              If you applied for <strong>1 Program</strong>, add amount:{" "}
              <strong>50$</strong>
            </li>
            <li>
              If you applied for <strong>2 Programs</strong>, add amount{" "}
              <strong>100$</strong>
            </li>
            <li>
              If you applied for <strong>3 Programs</strong>, add amount{" "}
              <strong>150$</strong>
            </li>
          </ul>
        </li>
        <li>
          Pay the Fee Online Or via Bank &amp;{" "}
          <strong>Get a Picture of Transaction.</strong>
        </li>
        <li>
          After{" "}
          <strong>
            Fee Submission, You have to fill below Fee Verification Form.
          </strong>
        </li>
      </ul>

      <div className="d-flex justify-content-center">
        <Button variant="contained" className="custom-button mt-3">
          Verification Form
        </Button>
      </div>
      <p className="mb-0 mt-3 text-center">
        <span className="fw-bold">Note:</span> As you pay the registration
        charges you'll be able to access the Learning Management System in next
        48hrs
      </p>
    </Container>
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

export default connect(mapStateToProps)(EServicesBanking);
