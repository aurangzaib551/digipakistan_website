import React, { useLayoutEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import NotApprovedIcon from "@material-ui/icons/HighlightOffRounded";
import { connect } from "react-redux";
import ApprovedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import Button from "@material-ui/core/Button";
import Loader from "../loader/loader";
import { Redirect, useHistory } from "react-router-dom";
import { statusOfAdmission } from "../store/actions/applicationFormActions";
import { Helmet } from "react-helmet";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import firebasePayment from "../config/fbConfig";
import OfflinePinIcon from "@material-ui/icons/OfflinePin";
import CancelIcon from "@material-ui/icons/Cancel";

const AdmissionStatus = ({
  status,
  profile,
  uid,
  emailVerified,
  applicationSubmitted,
  goingToApproveTheApplication,
  applicationData,
}) => {
  // State
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [show, setShow] = useState(false);

  // Object Destructuring
  const { push } = useHistory();

  // Date
  const date = new Date();

  const getDays = date.getDay();

  const daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const days = daysArray[getDays];

  const todayDate = date.getDate();

  const year = date.getFullYear();

  const getMonth = date.getMonth();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = monthNames[getMonth];

  useLayoutEffect(() => {
    setLoading(true);
    const allCoures = [];
    firebasePayment
      .database()
      .ref("/OnlinePaymentVerification")
      .once("value", (snapshot) => {
        if (snapshot.exists()) {
          if (snapshot.val()[applicationData.CNIC]) {
            setData(snapshot.val()[applicationData.CNIC]);
            if (snapshot.val()[applicationData.CNIC].Course1) {
              allCoures.push(snapshot.val()[applicationData.CNIC].Course1);
            }
            if (snapshot.val()[applicationData.CNIC].Course2) {
              allCoures.push(snapshot.val()[applicationData.CNIC].Course2);
            }
            if (snapshot.val()[applicationData.CNIC].Course3) {
              allCoures.push(snapshot.val()[applicationData.CNIC].Course3);
            }
            setShow(true);
            setLoading(false);
            setCourses(allCoures);
          } else {
            setShow(false);
            setData(false);
            setLoading(false);
          }
        } else {
          setShow(false);
          setData(false);
          setLoading(false);
        }
      });
  }, []);

  useLayoutEffect(() => {
    if (profile.admissionStatus === false) {
      if (`${days}, ${month} ${todayDate}, ${year}` !== profile.approvalDate) {
        // Setting status is approved when next day is come
        goingToApproveTheApplication(uid);
      }
    }
  }, [
    month,
    profile.admissionStatus,
    profile.approvalDate,
    todayDate,
    uid,
    year,
    days,
    goingToApproveTheApplication,
  ]);

  // User is logged in or not
  if (!uid) return <Redirect to="/apply-now/login" />;
  // Checking email is verified or not
  if (!emailVerified) return <Redirect to="/apply-now/emailVerification" />;
  // Checking application is submitted or not
  if (!applicationSubmitted)
    return <Redirect to="/apply-now/applicationForm" />;

  // Going to another page
  const go = (link) => {
    setTimeout(() => {
      push(link);
    }, 400);
  };

  return profile.fullName ? (
    <>
      <Helmet>
        <title>{data ? "Payment Verification" : "Admission Status"}</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container className="mt pt-4">
          {data.VerifiedAmount ? null : (
            <Alert severity="success" variant={status ? "filled" : "standard"}>
              <>
                {status ? (
                  <p className="mb-0">
                    Congratulations, Your application has been approved
                    successfully &amp; we are happy to inform that you are
                    eligible for the program. Follow the further Instructions to
                    complete your admission process before the due date.
                  </p>
                ) : (
                  <p className="mb-0 h4">
                    Your application has been submitted successfully to the
                    DigiPAKISTAN National Skills Development Program. You have
                    to wait for 24hrs for application status. Admission
                    Department will evaluate your application &amp; update the
                    Applicant Admission Status within next 24hrs to this portal.
                    Login again after 24hrs, in case your application approved
                    you have to proceed further &amp; if not eligible try next
                    time.
                  </p>
                )}
              </>
            </Alert>
          )}
          {data && (
            <>
              {data.VerifiedAmount && show && (
                <>
                  <p className="text-center display-3 mt-5">
                    <b>
                      Registeration Verification
                      <OfflinePinIcon
                        className="text-success ms-2"
                        style={{ fontSize: 40 }}
                      />
                    </b>
                  </p>
                  <h4 className="fw-bold ">Dear Student,</h4>
                  <p className="mb-0">
                    We are pleased to inform that your registration request has
                    been verified and your seat has been confirmed for Batch-01
                    as under:
                  </p>
                  <h4 className="fw-bold">
                    Roll No.{" "}
                    <span className="fw-normal">{profile.rollNumber}</span>
                  </h4>
                  <h4 className="fw-bold">
                    Name: <span className="fw-normal">{profile.fullName}</span>
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
                    information, you may contact DigiPAKISTAN ({" "}
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
                  <p className="mb-0">Team DigiPAKISTAN</p>
                </>
              )}
            </>
          )}
          {data && (
            <>
              {data.VerifiedAmount === 0 && show && (
                <>
                  <p className="text-center display-3 mt-5">
                    <b>
                      Registeration Verification
                      <CancelIcon
                        className="text-success ms-2"
                        style={{ fontSize: 40 }}
                      />
                    </b>
                  </p>
                  <h4 className="fw-bold">
                    Dear Student:{" "}
                    <span className="fw-normal">{profile.fullName}</span>
                  </h4>
                  <p className="mb-0">
                    We are thankful for your interest in DigiPAKISTAN. You have
                    applied for {courses.length} courses but we regret to inform
                    that your seat confirmation is still pending for{" "}
                    {courses.length} courses due to non-verification of your
                    payment proofs. You are requested to again contact
                    DigiPAKISTAN ({" "}
                    <a
                      href="mailto:accounts@digipakistan.org"
                      className="text-primary"
                    >
                      accounts@digipakistan.org
                    </a>{" "}
                    ) with details of your proofs for verification and approval.
                  </p>
                  <p className="mb-0">
                    Best wishes for your future endeavours.
                  </p>
                  <p className="mb-0">Team DigiPAKISTAN</p>
                </>
              )}
            </>
          )}

          {data && (
            <>
              {data.VerifiedAmount ? null : (
                <>
                  <div className="d-flex mt-5">
                    <h2 className="fw-bold">
                      Application Status:{" "}
                      <span className="fw-normal">
                        {status ? "Approved" : "Pending..."}
                      </span>
                    </h2>
                    {status ? (
                      <ApprovedIcon
                        className="text-success ms-2"
                        style={{ fontSize: 35 }}
                      />
                    ) : (
                      <NotApprovedIcon
                        className="text-danger ms-2"
                        style={{ fontSize: 35 }}
                      />
                    )}
                  </div>

                  <h2 className="fw-bold">
                    Name: <span className="fw-normal">{profile.fullName}</span>
                  </h2>

                  <h2 className="fw-bold">
                    Father Name:{" "}
                    <span className="fw-normal">{profile.fatherName}</span>
                  </h2>

                  <h2 className="fw-bold">
                    Roll #:{" "}
                    <span className="fw-normal">{profile.rollNumber}</span>
                  </h2>
                </>
              )}
            </>
          )}

          {data ? null : (
            <>
              <div className="d-flex mt-5">
                <h2 className="fw-bold">
                  Application Status:{" "}
                  <span className="fw-normal">
                    {status ? "Approved" : "Pending..."}
                  </span>
                </h2>
                {status ? (
                  <ApprovedIcon
                    className="text-success ms-2"
                    style={{ fontSize: 35 }}
                  />
                ) : (
                  <NotApprovedIcon
                    className="text-danger ms-2"
                    style={{ fontSize: 35 }}
                  />
                )}
              </div>

              <h2 className="fw-bold">
                Name: <span className="fw-normal">{profile.fullName}</span>
              </h2>

              <h2 className="fw-bold">
                Father Name:{" "}
                <span className="fw-normal">{profile.fatherName}</span>
              </h2>

              <h2 className="fw-bold">
                Roll #: <span className="fw-normal">{profile.rollNumber}</span>
              </h2>
            </>
          )}

          {status && (
            <>
              {data.VerifiedAmount ? null : (
                <>
                  <h2 className="fw-bold">
                    Complete Further Process before Due Date:{" "}
                    <span className="fw-normal">
                      {/* {profile.lastDateOfFeeSubmission} */}
                      Mar 2, 2021
                    </span>
                  </h2>

                  <div className="d-flex flex-column align-items-center">
                    <Button
                      onClick={() => go("/apply-now/generateChallan")}
                      variant="contained"
                      className="custom-button mt-3"
                    >
                      Next
                    </Button>
                  </div>
                </>
              )}
            </>
          )}
        </Container>
      )}
    </>
  ) : (
    <Loader />
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.firebase.profile.admissionStatus,
    profile: state.firebase.profile,
    uid: state.firebase.auth.uid,
    emailVerified: state.firebase.auth.emailVerified,
    applicationSubmitted: state.firebase.profile.applicationSubmitted,
    applicationData: state.firestore.data.Applications
      ? state.firestore.data.Applications[state.firebase.auth.uid]
      : "",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goingToApproveTheApplication: (uid) => dispatch(statusOfAdmission(uid)),
  };
};

export default compose(
  firestoreConnect([{ collection: "Applications" }]),
  connect(mapStateToProps, mapDispatchToProps)
)(AdmissionStatus);
