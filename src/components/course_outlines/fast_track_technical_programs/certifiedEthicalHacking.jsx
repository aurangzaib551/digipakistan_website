import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";

const CertifiedEthicalHacking = () => {
  // State
  const [tabValue, setTabValue] = useState(0);

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
          Certified Ethical Hacking (CEH)
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
                  Ethical Hacker is the world’s most advanced hacking course
                  that covers 20 of the most current security domains any
                  individual will ever want to know when they are planning to
                  beef-up the information security posture of their
                  organization.
                </p>

                <p className="text-justify">
                  The accredited course provides the advanced hacking tools and
                  techniques used by hackers and information security
                  professionals.
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
                <h6 className="fw-bold">
                  Module 1:{" "}
                  <span className="fw-normal">
                    Introduction to Ethical Hacking
                  </span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 2:{" "}
                  <span className="fw-normal">
                    Footprinting and Reconnaissance
                  </span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 3: <span className="fw-normal">Scanning Networks</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 4: <span className="fw-normal">Enumeration</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 5:{" "}
                  <span className="fw-normal">Vulnerability Analysis</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 6: <span className="fw-normal">System Hacking</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 7: <span className="fw-normal">Malware Threats</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 8: <span className="fw-normal">Sniffing</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 9:{" "}
                  <span className="fw-normal">Social Engineering</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 10:{" "}
                  <span className="fw-normal">Denial-of-Service</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 11:{" "}
                  <span className="fw-normal">Session Hijacking</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 12:{" "}
                  <span className="fw-normal">
                    Evading IDS, Firewalls, and Honeypots
                  </span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 13:{" "}
                  <span className="fw-normal">Hacking Web Servers</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 14:{" "}
                  <span className="fw-normal">Hacking Web Applications</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 15: <span className="fw-normal">SQL Injection</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 16:{" "}
                  <span className="fw-normal">Hacking Wireless Networks</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 17:{" "}
                  <span className="fw-normal">Hacking Mobile Platforms</span>
                </h6>

                <h6 className="fw-bold mt-3">
                  Module 18: <span className="fw-normal">IoT Hacking</span>
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

export default CertifiedEthicalHacking;
