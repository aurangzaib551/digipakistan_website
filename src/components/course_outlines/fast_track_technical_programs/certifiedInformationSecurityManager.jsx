import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";
import { Helmet } from "react-helmet";

const CertifiedInformationSecurityManager = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, [signOut]);

  // State
  const [tabValue, setTabValue] = useState(0);

  // Object Destructuring
  const { push } = useHistory();

  const handleTab = (obj, ind) => {
    setTabValue(ind);
  };

  //   Media Query
  const isSmall = useMediaQuery({
    query: "(max-width: 400px)",
  });
  return (
    <>
      <Helmet>
        <title>Certified Information Security Manager (CISM)</title>
      </Helmet>
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">
          Certified Information Security Manager (CISM)
        </h1>
        <div className="row g-4 mb-5 pb-5">
          <div className="col-lg-8">
            <Paper square>
              <Tabs
                value={tabValue}
                variant={isSmall ? "scrollable" : "standard"}
                onChange={handleTab}
                scrollButtons={isSmall ? "on" : "off"}
                centered={isSmall ? false : true}
              >
                <Tab label="Overview" className="outline" />
                <Tab label="Curriculum" className="outline" />
                <Tab label="Instructor" className="outline" />
              </Tabs>
            </Paper>
            {tabValue === 0 && (
              <div className="my-3">
                <h3 className="fw-bold">Course Description</h3>
                <p className="text-justify">
                  ISACA’s Certified Information Security Manager (CISM)
                  certification indicates expertise in information security
                  governance, program development and management, incident
                  management and risk management. Take your career out of the
                  technical realm to management!
                </p>

                <p className="text-justify">
                  The Certified Information Security Manager (CISM) course helps
                  the candidates to achieve the CISM certification. The
                  certification is offered by the Information Systems Audit and
                  Control Association (ISACA) to validate the expertise and
                  knowledge of the candidates regarding the relationship between
                  an information security program and the broader business
                  targets. The certification also validates that the candidate
                  has the hands-on knowledge of developing, managing and
                  implementing an information security program for an
                  organization.
                </p>

                <p className="text-justify">
                  CISM certification is a certification by ISACA for experienced
                  Information security management professionals with work
                  experience in developing and managing information security
                  programs. The CISM course covers the four domains of the CISM
                  certification exam. The course is an ideal preparatory course
                  for the students seeking to gain CISM certification as well as
                  the IT security and information security professionals looking
                  to build on their practical experience.
                </p>

                <h3 className="fw-bold">Certificate</h3>
                <p className="text-justify">
                  On successful completion of the course participants will be
                  awarded participation certificate from DigiPAKISTAN. Also
                  prepare for International Exam.
                </p>
                <h3 className="fw-bold">Duration &amp; Frequency</h3>
                <p className="mb-0">Total Duration of the course is 3 months</p>
              </div>
            )}
            {tabValue === 1 && (
              <div className="my-3">
                <h6 className="fw-bold">Course Introduction</h6>

                <h6 className="fw-bold mt-3">
                  Domain 1:{" "}
                  <span className="fw-normal">
                    Information Security Governance
                  </span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Domain 2:{" "}
                  <span className="fw-normal">Information Risk Management</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Domain 3:{" "}
                  <span className="fw-normal">
                    Information Security Program Development
                  </span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Domain 4:{" "}
                  <span className="fw-normal">
                    Information Security Incident Management
                  </span>
                </h6>
              </div>
            )}
          </div>

          <div className="col-lg-4">
            <Paper elevation={10} className="p-3 border">
              <h6 className="fw-bold mb-0 details text-center text-sm-start">
                Total No. of Seats in Batch-01:{" "}
                <span className="text-success">1000 Students Only</span>
              </h6>
              <h6 className="fw-bold mb-0 details text-center text-sm-start">
                Course Type:{" "}
                <span className="fw-normal">Fast Track Technical Program</span>
              </h6>
              <h6 className="fw-bold mb-0 details text-center text-sm-start">
                Duration: <span className="fw-normal">3 Months</span>
              </h6>
              <h6 className="fw-bold mb-0 details text-center text-sm-start">
                Language: <span className="fw-normal">Urdu / English</span>
              </h6>
              <Button
                onClick={() => push("/apply-now")}
                variant="contained"
                fullWidth
                className="custom-button mt-3"
              >
                Apply Now
              </Button>
            </Paper>
          </div>
        </div>
      </Container>
      <div className="pt-5">
        <Copyright />
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CertifiedInformationSecurityManager);
