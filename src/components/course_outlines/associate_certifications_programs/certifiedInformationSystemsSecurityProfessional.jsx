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

const CertifiedInformationSystemsSecurityProfessional = ({ signOut }) => {
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
        <title>
          Certified Information Systems Security Professional (CISSP)
        </title>
      </Helmet>
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">
          Certified Information Systems Security Professional (CISSP)
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
                  The Certified Information Systems Security Professional
                  (CISSP) is the most globally recognized certification in the
                  information security market. CISSP validates an information
                  security professional’s deep technical and managerial
                  knowledge and experience to effectively design, engineer, and
                  manage the overall security posture of an organization. The
                  broad spectrum of topics included in the CISSP Common Body of
                  Knowledge (CBK) ensure its relevancy across all disciplines in
                  the field of information security.
                </p>

                <h3 className="fw-bold">Certificate</h3>
                <p className="text-justify">
                  On successful completion of the course participants will be
                  awarded participation certificate from DigiPAKISTAN. Also
                  prepare for International Exam.
                </p>
                <h3 className="fw-bold">Duration &amp; Frequency</h3>
                <p className="mb-0">Total Duration of the course is 6 months</p>
              </div>
            )}
            {tabValue === 1 && (
              <div className="my-3">
                <ul className="list-unstyled fw-bold">
                  <li>
                    Security and Risk ManagementBasic Accounting
                    <ul className="fw-normal">
                      <li>
                        Confidentiality, Integrity, and Availability Concepts
                      </li>
                      <li>Security Governance Principles</li>
                      <li>Compliance</li>
                      <li>Legal and Regulatory Issues</li>
                      <li>Professional Ethics</li>
                      <li>
                        Security Policies, Standards, Procedures, and Guidelines
                      </li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Asset Security
                    <ul className="fw-normal">
                      <li>Information and Asset Classification</li>
                      <li>Ownership</li>
                      <li>Protect Privacy</li>
                      <li>Appropriate Retention</li>
                      <li>Data Security Controls</li>
                      <li>Handling Requirements</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Security Architecture and Engineering
                    <ul className="fw-normal">
                      <li>
                        Engineering Processes using Secure Design Principles
                      </li>
                      <li>Security Models Fundamental Concepts</li>
                      <li>Security Evaluation Models</li>
                      <li>Security Capabilities of Information Systems</li>
                      <li>
                        Security Architectures, Designs, and Solution Elements
                        Vulnerabilities
                      </li>
                      <li>Web-based Systems Vulnerabilities</li>
                      <li>Mobile Systems Vulnerabilities</li>
                      <li>
                        Embedded Devices and Cyber-Physical Systems
                        Vulnerabilities
                      </li>
                      <li>Cryptography</li>
                      <li>Site and Facility Design Secure Principles</li>
                      <li>Physical Security</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Communication and Network Security
                    <ul className="fw-normal">
                      <li>Secure Network Architecture Design</li>
                      <li>Secure Network Components</li>
                      <li>Secure Communication Channels</li>
                      <li>Network Attacks</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Identity and Access Management (IAM)
                    <ul className="fw-normal">
                      <li>Physical and Logical Assets Control</li>
                      <li>
                        Identification and Authentication of People and Devices
                      </li>
                      <li>Identity as a Service</li>
                      <li>Third-party Identity Services</li>
                      <li>Access Control Attacks</li>
                      <li>Identity and Access Provisioning Lifecycle</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Security Assessment and Testing
                    <ul className="fw-normal">
                      <li>Assessment and Test Strategies</li>
                      <li>Security Process Data</li>
                      <li>Security Control Testing</li>
                      <li>Test Outputs</li>
                      <li>Security Architectures Vulnerabilities</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Security Operations
                    <ul className="fw-normal">
                      <li>Investigations Support and Requirements</li>
                      <li>Logging and Monitoring Activities</li>
                      <li>Provisioning of Resources</li>
                      <li>Foundational Security Operations Concepts</li>
                      <li>Resource Protection Techniques</li>
                      <li>Incident Management</li>
                      <li>Preventative Measures</li>
                      <li>Patch and Vulnerability Management</li>
                      <li>Change Management Processes</li>
                      <li>Recovery Strategies</li>
                      <li>Disaster Recovery Processes and Plans</li>
                      <li>Business Continuity Planning and Exercises</li>
                      <li>Physical Security</li>
                      <li>Personnel Safety Concerns</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Software Development Security
                    <ul className="fw-normal">
                      <li>Security in the Software Development Lifecycle</li>
                      <li>Development Environment Security Controls</li>
                      <li>Software Security Effectiveness</li>
                      <li>Acquired Software Security Impact</li>
                    </ul>
                  </li>
                </ul>
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
                <span className="fw-normal">
                  Associate Certification Program
                </span>
              </h6>
              <h6 className="fw-bold mb-0 details text-center text-sm-start">
                Duration: <span className="fw-normal">6 Months</span>
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
)(CertifiedInformationSystemsSecurityProfessional);
