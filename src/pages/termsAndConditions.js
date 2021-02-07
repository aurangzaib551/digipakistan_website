import React, { useLayoutEffect } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { useHistory, Redirect } from "react-router-dom";
import Copyright from "../components/common/copyright/copyright";
import { connect } from "react-redux";
import { termsAndConditions } from "../store/actions/applicationFormActions";
import { signOut } from "../store/actions/authActions";
import Loader from "../loader/loader";

const TermsAndConditions = ({
  uid,
  emailVerified,
  termsAndConditions,
  applicationSubmitted,
  profile,
  signOut,
}) => {
  // Object Destructuring
  const { push } = useHistory();

  useLayoutEffect(() => {
    return () => {
      signOut();
    };
  }, [signOut]);

  // User is logged in or not
  if (!uid) return <Redirect to="/apply-now/login" />;
  // Checking email is verified or not
  if (!emailVerified) return <Redirect to="/apply-now/emailVerification" />;
  // Checking application is submitted or not
  if (applicationSubmitted) return <Redirect to="/apply-now/admissionStatus" />;

  // Going to another page
  const go = (link) => {
    setTimeout(() => {
      push(link);
    }, 400);
  };

  // sending agreement
  const handleAgree = () => {
    // agreement sent
    termsAndConditions(true);
    go("/apply-now/applicationForm");
  };
  return profile.fullName ? (
    <>
      <Container className="mt pt-4 mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">Terms &amp; Conditions</h1>
        <p>
          <span className="fw-bold">1)</span> If any forgery / discrepancy with
          respect to any information if found otherwise at any stage will result
          in cancellation of the application &amp; the fee will be
          non-refundable.
        </p>
        <p>
          <span className="fw-bold">2)</span> The DigiPAKISTAN Program is not
          offering any employment and also not associated with any future
          employment opportunity. The program aims only to provide training to
          the students.
        </p>
        <p>
          <span className="fw-bold">3)</span> Students at DigiPAKISTAN have to
          follow all the rules and the regulations otherwise the Organization
          have the right to take actions against particular candidates.
        </p>
        <p>
          <span className="fw-bold">4)</span> Students at DigiPAKISTAN have to
          follow all the rules and the regulations otherwise the Organization
          have the right to take actions against particular candidates.
        </p>
        <p>
          <span className="fw-bold">5)</span> The candidate training duration
          can increase depend on the content delivered to the students. However
          the management reserves the right to terminate the training of a
          candidate at any stage without any reason.
        </p>
        <p>
          <span className="fw-bold">6)</span> The selected candidate provided
          all information should be correct to the best of knowledge of the
          applicant and if found otherwise at any stage shall result in the
          cancellation of the application.
        </p>
        <p>
          <span className="fw-bold">7)</span> Selection / Rejection of a
          candidate is a purify decision by organization.
        </p>
        <p>
          <span className="fw-bold">8)</span> Registration charges will be
          non-refundable. Students will have to pay only minor registration
          charges before the due date for confirmed seat into the program.
        </p>
        <p>
          <span className="fw-bold">9)</span> Any decision by the management
          regarding training, posting, termination is not challengeable in any
          court / judiciary
        </p>
        <p>
          <span className="fw-bold">10)</span> No stipend will be paid to the
          candidate
        </p>
        <p>
          <span className="fw-bold">11)</span> You have to clear Quizes,
          Assignments &amp; Exams for each course
        </p>

        <div className="d-flex justify-content-center">
          <Button
            onClick={handleAgree}
            variant="contained"
            className="custom-button"
          >
            Agree with our terms &amp; conditions
          </Button>
        </div>
      </Container>
      <div className="mt-5 pt-5">
        <Copyright />
      </div>
    </>
  ) : (
    <Loader />
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
    emailVerified: state.firebase.auth.emailVerified,
    applicationSubmitted: state.firebase.profile.applicationSubmitted,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    termsAndConditions: (agree) => dispatch(termsAndConditions(agree)),
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TermsAndConditions);
