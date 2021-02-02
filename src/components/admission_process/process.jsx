import React from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const Process = () => {
  return (
    <>
      <div className="process-odd py-5">
        <Container>
          <div className="row g-0">
            <div className="col-lg-1">
              <h1 className="display-1 text-center fw-bold">(1)</h1>
            </div>
            <div className="col-lg-11 mt-3 mt-lg-0 ps-lg-5">
              <h6 className="fw-bold text-justify">
                To participate in DigiPAKISTAN National Skills Development
                Initiative, students have to adopt the following process.
              </h6>
              <p className="small text-justify">
                <span className="fw-bold">Note:</span> Minimum of 10 years
                education is a prerequisite to apply for any DigiPAKISTAN
                training program. Computer know-how and basic proficiency in
                English will be desirable.
              </p>
              <p className="small mt-3 mb-0 text-justify">
                <span className="fw-bold text-start d-inline-block">
                  Step 1:
                </span>{" "}
                Go to <Link to="/">Apply Now</Link> page. Register yourself as a
                new applicant.
              </p>
              <p className="small mb-0 text-justify">
                <span className="fw-bold text-start d-inline-block">
                  Step 2:
                </span>{" "}
                (Candidate Login): After successfully sign up. Go to candidate{" "}
                <Link to="/">login</Link> page. Enter your login details (Type
                your email &amp; password which you have enter during signing
                up). You will be successfully logged into the Candidate Portal.
              </p>
              <p className="small mb-0 text-justify">
                <span className="fw-bold text-start d-inline-block">
                  Step 3:
                </span>{" "}
                (Candidate Undertaking Terms): First of all Terms &amp;
                Conditions will appear, read carefully and click agree to
                continue further.
              </p>
              <p className="small mb-0 text-justify">
                <span className="fw-bold text-start d-inline-block">
                  Step 4:
                </span>{" "}
                (Application Form): Fill the application form carefully and
                accurately. Select your domain and submit the application form.
                You can enrol up to three programs at the same time.
              </p>
              <p className="small mb-0 text-justify">
                <span className="fw-bold text-start d-inline-block">
                  Step 5:
                </span>{" "}
                Your application will be examined against the eligibility
                criteria. The admission status will be updated through the
                portal within 24 hours of submitting the application on the
                candidate portal.
              </p>
              <p className="small mb-0 text-justify">
                <span className="fw-bold text-start d-inline-block">
                  Step 6:
                </span>{" "}
                On admission confirmation, registration challan will be
                generated with nominal registration fee for seat confirmation.
                Applicants have to follow further instructions given in the
                portal.
              </p>
              <p className="small mb-0 text-justify">
                <span className="fw-bold text-start d-inline-block">
                  Step 7:
                </span>{" "}
                As challan is paid. Fill Verification form at candidate portal
                and upload your CNIC &amp; last Degree documents online at
                portal.
              </p>
              <p className="small mb-0 text-justify">
                <span className="fw-bold text-start d-inline-block">
                  Step 8:
                </span>{" "}
                Applicant will now be enrolled in DigiPAKISTAN program.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="process-even py-5">
        <Container>
          <div className="row g-0">
            <div className="col-lg-1">
              <h1 className="display-1 text-center fw-bold">(2)</h1>
            </div>
            <div className="col-lg-11 mt-3 mt-lg-0 text-justify ps-lg-5 d-flex align-items-center">
              <p className="mb-0">
                There'll be limited seats in this program which will be on first
                come first serve basis. In the First Batch, DigiPAKISTAN have
                only 50,000 seats for students across all provinces of Pakistan
                &amp; for Overseas Pakistanis. Student with late registration
                challan submission i.e. after 1000 seats of his selected program
                will be accomodate in next Batch. On LMS all modules, videos and
                content you're enrolled in will be available. You can access it
                from anywhere, like from your home or office.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="process-odd py-5">
        <Container>
          <div className="row g-0">
            <div className="col-lg-1">
              <h1 className="display-1 text-center fw-bold">(3)</h1>
            </div>
            <div className="col-lg-11 mt-3 mt-lg-0 text-justify ps-lg-5 d-flex align-items-center">
              <p className="mb-0">
                This is a FREE Training Program to empower youth in IT Skills.
                There will be only nominal registration charges for seat
                confirmation in each program.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="process-even py-5">
        <Container>
          <div className="row g-0">
            <div className="col-lg-1">
              <h1 className="display-1 text-center fw-bold">(4)</h1>
            </div>
            <div className="col-lg-11 mt-3 mt-lg-0 text-justify ps-lg-5 d-flex flex-column justify-content-center">
              <h4 className="fw-bold">
                According to course completion criteria, trainees will need to
                secure 70% score to become eligible for a Certificate.
              </h4>
              <p className="mb-0">
                In case of queries you can dial{" "}
                <a href="tel:04235974881">042-35974881</a> |{" "}
                <a href="tel:04235974882">042-35974882</a> and can email at{" "}
                <a href="mailto:helpdesk@digipakistan.org">
                  helpdesk@digipakistan.org
                </a>
                . For technical questions related to coursework, you may contact
                us via the Contact Form.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Process;
