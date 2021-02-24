import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import { firebasePayment } from "../config/fbConfigOnlineBanking";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useMediaQuery } from "react-responsive";

const PaymentVerification = (props) => {
  // Object Destructuring
  const { uid, emailVerified, applicationSubmitted, status } = props;

  // State
  const [formData, setFormData] = useState({
    cnic: "",
    payment: "",
  });
  const [data, setData] = useState(null);
  const [msg, setMsg] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [secBtnLoading, setSecBtnLoading] = useState(false);

  // Media Query
  const isMobile = useMediaQuery({
    query: "(max-width: 576px)",
  });

  // User is logged in or not
  if (!uid) return <Redirect to="/apply-now/login" />;
  // Checking email is verified or not
  if (!emailVerified) return <Redirect to="/apply-now/emailVerification" />;
  // Checking application is submitted or not
  if (!applicationSubmitted)
    return <Redirect to="/apply-now/applicationForm" />;
  if (!status) return <Redirect to="/apply-now/admissionStatus" />;

  // Getting values from input fields
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleHBL = () => {
    setBtnLoading(true);
    firebasePayment
      .database()
      .ref("/HBLPaymentVerification")
      .child(formData.cnic || 1)
      .once("value", (snapshot) => {
        if (snapshot.exists()) {
          setMsg("");
          setData(snapshot.val());
          setBtnLoading(false);
          // const message = "Your payment has been verified";

          // const encodeMessage = encodeURI(message);

          // if (snapshot.val().Verified === "Done") {
          //   axios.post(
          //     `https://secure.h3techs.com/sms/api/send?email=digipakistan.org@gmail.com&key=02813f09b8ea5a5be950bb7ec26e9ae986&mask=Digi Alert&to=${props.match.params.number}&message=${encodeMessage}`
          //   );
          // } else if (snapshot.val().Verified === "Pending") {
          //   const message = "Your payment is not verified";

          //   const encodeMessage = encodeURI(message);

          //   axios.post(
          //     `https://secure.h3techs.com/sms/api/send?email=digipakistan.org@gmail.com&key=02813f09b8ea5a5be950bb7ec26e9ae986&mask=Digi Alert&to=${props.match.params.number}&message=${encodeMessage}`
          //   );
          // }
        } else {
          setMsg("There is no record");
          setData(null);
          setBtnLoading(false);
        }
      });
  };

  const handleOnline = () => {
    setSecBtnLoading(true);
    setData(null);
    firebasePayment
      .database()
      .ref("/OnlinePaymentVerification")
      .child(formData.cnic || 1)
      .once("value", (snapshot) => {
        if (snapshot.exists()) {
          setMsg(null);
          setData(snapshot.val());
          setBtnLoading(false);
          // const message = "Your payment has been verified";

          // const encodeMessage = encodeURI(message);

          // if (snapshot.val().Verified === "Done") {
          //   axios.post(
          //     `https://secure.h3techs.com/sms/api/send?email=digipakistan.org@gmail.com&key=02813f09b8ea5a5be950bb7ec26e9ae986&mask=Digi Alert&to=${props.match.params.number}&message=${encodeMessage}`
          //   );
          // } else if (snapshot.val().Verified === "Pending") {
          //   const message = "Your payment is not verified";

          //   const encodeMessage = encodeURI(message);

          //   axios.post(
          //     `https://secure.h3techs.com/sms/api/send?email=digipakistan.org@gmail.com&key=02813f09b8ea5a5be950bb7ec26e9ae986&mask=Digi Alert&to=${props.match.params.number}&message=${encodeMessage}`
          //   );
          // }
        } else {
          setMsg("There is no record");
          setSecBtnLoading(false);
        }
      });
  };

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

          <Input
            className={`mt-3 ${isMobile ? "w-100" : "w-75"}`}
            id="cnic"
            label="CNIC *"
            value={formData.cnic}
            onChange={handleChange}
            fullWidth
          />

          {msg && (
            <Alert severity="error" variant="filled" className="mt-3">
              {msg}
            </Alert>
          )}

          {data && (
            <>
              <h4 className="fw-bold mt-3">
                Name: <span className="fw-normal">{data.FullName}</span>
              </h4>
              <h4 className="fw-bold">
                Payment Amount:{" "}
                <span className="fw-normal">
                  {data.VerifiedAmount ? data.VerifiedAmount : 0}
                </span>
              </h4>
              <h4 className="fw-bold">
                Verified:{" "}
                <span className="fw-normal">
                  {data.Verified === "Done" ? "Verified" : "Not Verified"}
                </span>
              </h4>
            </>
          )}

          <div className="d-flex flex-column flex-sm-row">
            <Button
              onClick={handleHBL}
              variant="contained"
              disabled={btnLoading}
              className="custom-button mt-3 me-sm-2"
            >
              {btnLoading && <CircularProgress className="loader me-2" />}
              {btnLoading ? "Verifying" : "Verify HBL Banking"}
            </Button>
            <Button
              onClick={handleOnline}
              disabled={secBtnLoading}
              variant="contained"
              className="custom-button mt-3"
            >
              {secBtnLoading && <CircularProgress className="loader me-2" />}
              {secBtnLoading ? "Verifying" : "Verify Online Banking"}
            </Button>
          </div>
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
