import React, { useLayoutEffect } from "react";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import NotApprovedIcon from "@material-ui/icons/HighlightOffRounded";
import { connect } from "react-redux";
import ApprovedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import Button from "@material-ui/core/Button";
import Loader from "../loader/loader";
import { Redirect, useHistory } from "react-router-dom";
import { statusOfAdmission } from "../store/actions/applicationFormActions";

const AdmissionStatus = ({
  status,
  profile,
  uid,
  emailVerified,
  applicationSubmitted,
  goingToApproveTheApplication,
}) => {
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
    <Container className="mt pt-4">
      <Alert severity="success" variant={status ? "filled" : "standard"}>
        {status ? (
          <p className="mb-0">
            Congratulations, Your application has been approved successfully
            &amp; we are happy to inform that you are eligible for the program.
            Follow the further Instructions to complete your admission process
            before the due date.
          </p>
        ) : (
          <p className="mb-0 h4">
            Your application has been submitted successfully to the DigiPAKISTAN
            National Skills Development Program. You have to wait for 24hrs for
            application status. Admission Department will evaluate your
            application &amp; update the Applicant Admission Status within next
            24hrs to this portal. Login again after 24hrs, in case your
            application approved you have to proceed further &amp; if not
            eligible try next time.
          </p>
        )}
      </Alert>
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
        Father Name: <span className="fw-normal">{profile.fatherName}</span>
      </h2>

      <h2 className="fw-bold">
        Roll #: <span className="fw-normal">{profile.rollNumber}</span>
      </h2>

      {status && (
        <>
          <h2 className="fw-bold">
            Complete Further Process before Due Date:{" "}
            <span className="fw-normal">{profile.lastDateOfFeeSubmission}</span>
          </h2>

          <div className="d-flex justify-content-center">
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
    </Container>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goingToApproveTheApplication: (uid) => dispatch(statusOfAdmission(uid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdmissionStatus);
