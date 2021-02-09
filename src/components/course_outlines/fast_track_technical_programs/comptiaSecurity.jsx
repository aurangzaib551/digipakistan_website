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

const CompTIASecurity = ({ signOut }) => {
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
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">
          CompTIA Security + (SYO - 601)
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
                  CompTIA Security+ is a global certification that validates the
                  baseline skills necessary to perform core security functions
                  and pursue an IT security career.
                </p>

                <p className="text-justify">
                  Cybersecurity attacks continue to grow. Increasingly, more job
                  roles are tasked with baseline security readiness and response
                  to address today’s threats. Updates to Security+ reflect
                  skills relevant to these job roles and prepare candidates to
                  be more proactive in preventing the next attack. To combat
                  these emerging threats, IT Pros must be able to:
                </p>

                <ul>
                  <li>
                    Help identify attacks and vulnerabilities to mitigate them
                    before they infiltrate IS
                  </li>
                  <li>
                    Understand secure virtualization, secure application
                    deployment, and automation concepts
                  </li>
                  <li>
                    Identify and implement the best protocols and encryption
                  </li>
                  <li>Understand the importance of compliance</li>
                </ul>

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
                <h6 className="fw-bold">
                  Attacks, Threats and Vulnerabilities
                </h6>
                <ul>
                  <li>
                    Focusing on more threats, attacks, and vulnerabilities on
                    the Internet from newer custom devices that must be
                    mitigated, such as IoT and embedded devices, newer DDoS
                    attacks, and social engineering attacks based on current
                    events.
                  </li>
                </ul>

                <h6 className="fw-bold mt-2">Architecture and Design</h6>
                <ul>
                  <li>
                    Includes coverage of enterprise environments and reliance on
                    the cloud, which is growing quickly as organizations
                    transition to hybrid networks.
                  </li>
                </ul>

                <h6 className="fw-bold mt-2">Implementation</h6>
                <ul>
                  <li>
                    Expanded to focus on administering identity, access
                    management, PKI, basic cryptography, wireless, and
                    end-to-end security.
                  </li>
                </ul>

                <h6 className="fw-bold mt-2">
                  Operations and Incident Response
                </h6>
                <ul>
                  <li>
                    Covering organizational security assessment and incident
                    response procedures, such as basic threat detection, risk
                    mitigation techniques, security controls, and basic digital
                    forensics.
                  </li>
                </ul>

                <h6 className="fw-bold mt-2">
                  Governance, Risk and Compliance
                </h6>
                <ul>
                  <li>
                    Expanded to support organizational risk management and
                    compliance to regulations, such as PCI-DSS, SOX, HIPAA,
                    GDPR, FISMA, NIST, and CCPA.
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

export default connect(null, mapDispatchToProps)(CompTIASecurity);
