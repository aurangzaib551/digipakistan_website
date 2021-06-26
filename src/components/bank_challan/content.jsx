import React, { useState, useLayoutEffect } from "react";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import font from "../../assets/fonts/Montserrat ExtraBold 800.ttf";
import fontSemi from "../../assets/fonts/Montserrat-SemiBold.ttf";
import fontLight from "../../assets/fonts/Montserrat-Light.ttf";
import { Font } from "@react-pdf/renderer";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import PDFChallan from "./pdfChallan";
import { challanNo } from "../../store/actions/authActions";
import CircularLoader from "@material-ui/core/CircularProgress";

Font.register({
  family: "Montserrat",
  fonts: [
    {
      src: font,
    },
  ],
});

Font.register({
  family: "Montserrat Semi",
  fonts: [
    {
      src: fontSemi,
    },
  ],
});

Font.register({
  family: "Montserrat light",
  fonts: [
    {
      src: fontLight,
    },
  ],
});

const Content = ({
  uid,
  emailVerified,
  applicationSubmitted,
  status,
  data,
  profile,
  saveChallanNo,
}) => {
  // State
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [showPDF, setShowPDF] = useState(false);

  useLayoutEffect(() => {
    const enrollment = [];

    let type = {};

    if (data["First Course"] === "Fast Track Technical Program") {
      type.titleOne = "Technical";
    } else if (data["First Course"] === "Fast Track Non-Technical Program") {
      type.titleOne = "Non-Technical";
    } else if (data["First Course"] === "Associate Certification Program") {
      type.titleOne = "Associate";
    }

    if (data["Second Course"] === "Fast Track Technical Program") {
      type.titleTwo = "Technical";
    } else if (data["Second Course"] === "Fast Track Non-Technical Program") {
      type.titleTwo = "Non-Technical";
    } else if (data["Second Course"] === "Associate Certification Program") {
      type.titleTwo = "Associate";
    }

    if (data["Third Course"] === "Fast Track Technical Program") {
      type.titleThree = "Technical";
    } else if (data["Third Course"] === "Fast Track Non-Technical Program") {
      type.titleThree = "Non-Technical";
    } else if (data["Third Course"] === "Associate Certification Program") {
      type.titleThree = "Associate";
    }

    if (data["First Course"]) {
      enrollment.push({
        title: data["First Course Category"],
        type: type.titleOne,
        challanNo: data.challanNoOne,
      });
    }

    if (data["Second Course"]) {
      enrollment.push({
        title: data["Second Course Category"],
        type: type.titleTwo,
        challanNo: data.challanNoTwo,
      });
    }

    if (data["Third Course"]) {
      enrollment.push({
        title: data["Third Course Category"],
        type: type.titleThree,
        challanNo: data.challanNoThree,
      });
    }

    setEnrolledCourses(enrollment);
  }, [data]);

  // User is logged in or not
  if (!uid) return <Redirect to="/apply-now/login" />;
  // Checking email is verified or not
  if (!emailVerified) return <Redirect to="/apply-now/emailVerification" />;
  // Checking application is submitted or not
  if (!applicationSubmitted)
    return <Redirect to="/apply-now/applicationForm" />;
  if (!status) return <Redirect to="/dashboard" />;

  const handleChallan = () => {
    setTimeout(() => {
      setShowPDF((prevValue) => !prevValue);
    }, 400);
    if (!data.challanNoOne) {
      saveChallanNo(uid);
    }
  };

  return (
    <Container className="mt pt-4">
      <h1 className="fw-bold text-center mx-3">Description</h1>
      <p>
        <strong>Bank Challan</strong> Method is an official form of paying
        DigiPAKISTAN Registration Fee. With this verified challan you can pay
        fee at any Habib Bank Limited (HBL) Branch in Pakistan. Simply you have
        to generate challan form, download &amp; print it and then visit the
        nearest branch of Habib Bank Limited (HBL) to pay challan.
      </p>

      <h1 className="fw-bold text-center mx-3">Procedure</h1>

      <ul>
        <li>Generate Challan, download &amp; print it</li>
        <li>
          Go to nearest branch of{" "}
          <span className="fw-bold">Habib Bank Limited (HBL)</span>
        </li>
        <li>
          Submit Challan at your nearest{" "}
          <span className="fw-bold">Habib Bank Limited (HBL)</span>
        </li>
        <li>
          Pay Registration Fee &amp;{" "}
          <span className="fw-bold">Get a Picture of Deposited Challan.</span>
        </li>
        <li>
          As the challan is paid,{" "}
          <span className="fw-bold">
            You have to fill Registeration Fee Verification Form given below.
          </span>
        </li>
        <li>You are now successfully enrolled.</li>
      </ul>

      <div className="d-flex flex-column align-items-center">
        <div className="d-flex mt-3 justify-content-center">
          {data["Full Name"] ? (
            <Button
              onClick={handleChallan}
              variant="contained"
              className="custom-button d-flex align-items-center"
            >
              Generated Challan {showPDF ? "-" : "+"}
            </Button>
          ) : (
            <CircularLoader style={{ color: "#02a39b", marginTop: 10 }} />
          )}
        </div>

        {enrolledCourses.map((course, index) => {
          return (
            <React.Fragment key={index}>
              {showPDF && (
                <div className="close">
                  <PDFChallan
                    challanNo={course.challanNo}
                    course={course}
                    issueDate={profile.issueDateOfFeeSubmission}
                    lastDate="Mar 18, 2021"
                    cnicChallan={data.CNIC || data["Overseas CNIC"]}
                    challanRollNumber={data["Roll Number"]}
                    name={data["Full Name"]}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}

        <Button
          href="https://forms.gle/d47KWyUXN5drvrn56"
          variant="contained"
          className="custom-button mt-3"
        >
          Verification Form
        </Button>
      </div>

      <p className="mb-0 mt-3 mb-5">
        <span className="fw-bold">Note:</span> Once admissions are closed, you
        will get your LMS Login Credentials
      </p>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.firebase.profile.admissionStatus,
    profile: state.firebase.profile,
    uid: state.firebase.auth.uid,
    emailVerified: state.firebase.auth.emailVerified,
    applicationSubmitted: state.firebase.profile.applicationSubmitted,
    data: state.firestore.data.Applications
      ? state.firestore.data.Applications[state.firebase.auth.uid]
      : "",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveChallanNo: (uid) => dispatch(challanNo(uid)),
  };
};

export default compose(
  firestoreConnect([{ collection: "Applications" }]),
  connect(mapStateToProps, mapDispatchToProps)
)(Content);
