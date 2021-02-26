import React from "react";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Helmet } from "react-helmet";

const GenerateChallan = ({
  uid,
  emailVerified,
  applicationSubmitted,
  status,
  profile,
}) => {
  // Object Destructuring
  const { push } = useHistory();

  // User is logged in or not
  if (!uid) return <Redirect to="/apply-now/login" />;
  // Checking email is verified or not
  if (!emailVerified) return <Redirect to="/apply-now/emailVerification" />;
  // Checking application is submitted or not
  if (!applicationSubmitted)
    return <Redirect to="/apply-now/applicationForm" />;
  if (!status) return <Redirect to="/apply-now/admissionStatus" />;

  // Going to another page
  const go = (link) => {
    setTimeout(() => {
      push(link);
    }, 400);
  };

  return (
    <>
      <Helmet>
        <title>Further Process</title>
      </Helmet>
      <Container className="mt pt-4">
        <h1 className="fw-bold text-center mx-3">
          Follow Further Procedure for Seat Confirmation
        </h1>
        <p className="text-justify">
          Students who are approved will now have to follow further Instructions
          of Registration Charges submission for their seat confirmation. Late
          Registration charges Submission to the due date will result in
          cancellation of Admission. Students have to submit minor registration
          charges for admission into the selected program. The Registration
          Charges for all programs including Technical, Non Technical &amp;
          Associate Certification Programs will be
        </p>

        {/* For Pakistani */}
        <div className="d-flex flex-column align-items-center">
          <h4 className="fw-bold mx-3 text-center">
            Registration Charges for Pakistani Applicants
          </h4>
          <h6 className="fw-bold mx-3 text-center">
            Registration: <span className="fw-normal">2000/=</span>
          </h6>
          <h6 className="fw-bold mx-3 text-center">
            Course Fee: <span className="fw-normal">0</span>
          </h6>
        </div>

        {/* For Overseas */}
        <div className="d-flex flex-column align-items-center">
          <h4 className="fw-bold mx-3 text-center">For Overseas Applicants</h4>
          <h6 className="fw-bold mx-3 text-center">
            Registration: <span className="fw-normal">$50</span>
          </h6>
          <h6 className="fw-bold mx-3 text-center">
            Course Fee: <span className="fw-normal">0</span>
          </h6>
        </div>

        <p className="text-justify">
          Pakistani Students can submit their Registration Fee Voucher at any
          HBL Branch in Pakistan or can pay their registration charges via
          Online Banking. Overseas Students can submit their registration
          charges via Online Banking for Overseas Method.
        </p>

        {/* Payment Methods */}
        <div className="d-flex flex-column flex-lg-row justify-content-center flex-wrap">
          <Button
            onClick={() => go("/apply-now/generateChallan/bankChallan")}
            variant="contained"
            size="large"
            className="custom-button mt-3 mx-lg-3"
          >
            Bank Challan for Pakistani Applicants
          </Button>
          <Button
            onClick={() => go("/apply-now/generateChallan/onlineBanking")}
            variant="contained"
            size="large"
            className="custom-button mt-3 mx-lg-3"
          >
            Online Banking for Pakistani Applicants
          </Button>
          <Button
            onClick={() => go("/apply-now/generateChallan/eservicesBanking")}
            variant="contained"
            size="large"
            className="custom-button mt-3 mx-lg-3"
          >
            E-Services Banking for Overseas Applicants
          </Button>
        </div>

        <h4 className="fw-bold mt-3">
          Name: <span className="fw-normal">{profile.fullName}</span>
        </h4>
        <h4 className="fw-bold">
          Fee Submission Deadline:{" "}
          <span className="fw-normal">
            {/* {profile.lastDateOfFeeSubmission} */}
            Mar 2, 2021
          </span>
        </h4>

        <p className="text-justify mb-1">
          Dear Student submit your registration fee as soon as possible to
          complete your Admission Process.
        </p>
        <p className="text-justify mb-5">
          Once Registration Charges Paid, You'll be able to access Learning
          Management System
        </p>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.firebase.profile.admissionStatus,
    profile: state.firebase.profile,
    uid: state.firebase.auth.uid,
    emailVerified: state.firebase.auth.emailVerified,
    applicationSubmitted: state.firebase.profile.applicationSubmitted,
  };
};

export default connect(mapStateToProps)(GenerateChallan);
