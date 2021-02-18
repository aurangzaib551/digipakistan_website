import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from "@material-ui/core/Container";
// import Input from "@material-ui/core/TextField";
// import MenuItem from "@material-ui/core/MenuItem";

const PaymentVerification = (props) => {
  // Object Destructuring
  const { uid, emailVerified, applicationSubmitted, status } = props;

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
        <title>Payment Verification Portal</title>
      </Helmet>
      <div className="mt pt-4 payment-verification">
        <h1 className="text-center fw-bold mx-3">
          Payment Verification Portal
        </h1>
        <Container className="d-flex flex-column align-items-center">
          <h4 className="fw-bold">
            Name: <span className="fw-normal">{props.match.params.name}</span>
          </h4>
          <h4 className="fw-bold">
            Roll #:{" "}
            <span className="fw-normal">{props.match.params.fatherName}</span>
          </h4>
          <h4 className="fw-bold">
            Applicant:{" "}
            <span className="fw-normal">{props.match.params.applicant}</span>
          </h4>

          {/* <form className="form">
            <Input
              select
              className="mt-3"
              id="depositMethod"
              name="depositMethod"
              label="Select option by which you paid"
              fullWidth
            >
              <MenuItem value="HBL Challan Deposit">
                HBL Challan Deposit
              </MenuItem>
            </Input>

            <Input
              className="mt-3"
              id="challanNo"
              name="challanNo"
              label="Select option by which you paid"
              fullWidth
            />

            <div className="d-flex justify-content-end mt-3">
              <h5 className="fw-bold">
                Total Registeration You Paid:{" "}
                <span className="fw-normal"></span>
              </h5>
            </div>
          </form> */}
        </Container>
      </div>
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

export default connect(mapStateToProps)(PaymentVerification);
