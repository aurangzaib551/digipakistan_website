import React, { useState } from "react";
import Nav from "../components/common/nav/nav";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { affiliate } from "../config/fbConfigAffiliate";
import { Helmet } from "react-helmet";
import Footer from "../components/common/footer/footer";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CancelIcon from "@material-ui/icons/Cancel";

const PaymentVerification = () => {
  const [cnic, setCNIC] = useState("");
  const [errors, setErrors] = useState({});
  const [btnLoading, setBtnLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  //   Validating the input field
  const validate = () => {
    const errors = {};

    // Regular Expression
    const cnicRegEx = /^[0-9]+$/;

    if (cnic.trim() === "") {
      errors.cnic = "CNIC mustn't be empty";
    } else if (!cnicRegEx.test(cnic)) {
      errors.cnic = "Invalid CNIC";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Checking Errors
    const errors = validate();
    setErrors(errors || {});
    if (errors) return;

    setBtnLoading(true);

    const allCoures = [];
    affiliate
      .database()
      .ref("OnlinePaymentVerification/" + cnic)
      .once("value", (snapshot) => {
        if (snapshot.exists()) {
          if (snapshot.val()) {
            setData(snapshot.val());
            if (snapshot.val().Course1) {
              allCoures.push(snapshot.val().Course1);
            }
            if (snapshot.val().Course2) {
              allCoures.push(snapshot.val().Course2);
            }
            if (snapshot.val().Course3) {
              allCoures.push(snapshot.val().Course3);
            }
            setShow(true);
            setBtnLoading(false);
            setCourses(allCoures);
          } else {
            setBtnLoading(false);
          }
        } else {
          setBtnLoading(false);
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Payment Verification</title>
      </Helmet>
      <Nav />
      <div className="mt">
        <div className="container" style={{ paddingTop: 70 }}>
          {show === false && (
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <img
                    src="https://i.ibb.co/LYC7rpt/logoPNG.png"
                    alt="DigiPAKISTAN"
                    width="200"
                    height="200"
                  />
                </div>
                <form onSubmit={handleSubmit}>
                  <TextField
                    id="cnic"
                    fullWidth
                    label="Enter your cnic"
                    value={cnic}
                    onChange={(e) => setCNIC(e.target.value)}
                  />
                  {errors.cnic && (
                    <Alert severity="error" variant="filled">
                      {errors.cnic}
                    </Alert>
                  )}
                  <div className="d-flex justify-content-center">
                    <Button
                      type="submit"
                      variant="contained"
                      className="custom-button mt-3"
                    >
                      {btnLoading && (
                        <CircularProgress className="loader me-2" />
                      )}{" "}
                      {btnLoading ? "Verifying" : "Verify"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Content */}

          {show && (
            <React.Fragment>
              {data.VerifiedAmount >= 2000 ? (
                <>
                  <p className="text-center display-3 mt-5">
                    <b>Registeration Verification</b>
                    <CheckCircleOutlineIcon
                      className="text-success"
                      style={{ fontSize: 50 }}
                    />
                  </p>
                  <h4 className="fw-bold">Dear Student,</h4>
                  <p className="mb-0">
                    We are pleased to inform that your registration request has
                    been verified and your seat has been confirmed for Batch-01
                    as under:
                  </p>
                  {/* <h4 className="fw-bold">
                    Roll No.{" "}
                    <span className="fw-normal">{profile.rollNumber}</span>
                  </h4> */}
                  <h4 className="fw-bold mt-1">
                    Name:{" "}
                    <span className="fw-norma text-capitalize">
                      {data["Full Name"]}
                    </span>
                  </h4>
                  <p className="mb-0">
                    Registration confirmed for {courses.length} courses as under
                  </p>
                  <h4 className="fw-bold">
                    Course 1: <span className="fw-normal">{data.Course1}</span>
                  </h4>

                  <h4 className="fw-bold">
                    Course 2: <span className="fw-normal">{data.Course2}</span>
                  </h4>

                  <h4 className="fw-bold">
                    Course 3: <span className="fw-normal">{data.Course3}</span>
                  </h4>

                  <p className="mb-0">
                    You will get access to the LMS portal before commencement of
                    the session. In case of any discrepancy in above
                    information, you may contact DigiPAKISTAN Accounts
                    Department ({" "}
                    <a
                      href="mailto:accounts@digipakistan.org"
                      className="text-primary"
                    >
                      accounts@digipakistan.org
                    </a>{" "}
                    ) for necessary corrections.
                  </p>
                  <p className="mb-0">
                    Best wishes for your future endeavours.
                  </p>
                  <p className="mb-0 my-2 fw-bold">
                    Dear Students, Your classes will be held on 1<sup>st</sup>{" "}
                    April, 2021
                  </p>
                  <p className="mb-0">Team DigiPAKISTAN</p>
                </>
              ) : (
                <>
                  <p className="text-center display-3 mt-5">
                    <b>Registeration Verification</b>
                    <CancelIcon
                      className="text-danger"
                      style={{ fontSize: 50 }}
                    />
                  </p>
                  <h4 className="fw-bold">
                    Dear Student:{" "}
                    <span className="fw-normal text-capitalize">
                      {data["Full Name"]}
                    </span>
                  </h4>
                  <p className="mb-0">
                    We are thankful for your interest in DigiPAKISTAN. You have
                    applied for courses but we regret to inform that your seat
                    confirmation is still pending for your courses due to
                    non-verification of your payment proofs. You are requested
                    to again contact DigiPAKISTAN (
                    <a
                      href="mailto:accounts@digipakistan.org"
                      className="text-primary"
                    >
                      accounts@digipakistan.org
                    </a>
                    ) with details of your proofs for verification and approval.
                  </p>
                  <p className="mb-0">
                    Best wishes for your future endeavours.
                  </p>
                  <p className="mb-0 my-2 fw-bold">
                    Dear Students, Your classes will be held on 1<sup>st</sup>{" "}
                    April, 2021
                  </p>
                  <p className="mb-0">Team DigiPAKISTAN</p>
                </>
              )}
            </React.Fragment>
          )}
        </div>
      </div>

      <div className="mt-5 pt-5">
        <Footer />
      </div>
    </>
  );
};

export default PaymentVerification;
