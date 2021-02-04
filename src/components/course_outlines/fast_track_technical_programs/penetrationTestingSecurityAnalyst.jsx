import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";

const PenetrationTestingSecurityAnalyst = () => {
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
          Penetration Testing Security Analyst (ECSA)
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
                  ECSA is a globally accepted hacking and penetration testing
                  program that covers the testing of modern infrastructures,
                  operating systems, and application environments.
                </p>

                <p className="text-justify">
                  The EC-Council Certified Security Analyst Certification is an
                  advanced security certification that complements the Certified
                  Ethical Hacker (CEH) certification by validating the
                  analytical phase of ethical hacking. An ECSA is a step ahead
                  of a CEH by being able to analyze the outcome of hacking tools
                  and technologies.
                </p>

                <p className="text-justify">
                  Penetration testing, in simple terms is a simulation of a
                  process, a hacker would use to launch an attack on a business
                  network, attached devices, network applications, or a business
                  website. The purpose of training is to protect security issues
                  before hackers can locate them and perform an exploit.
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
                <ul>
                  <li>Introduction to Penetration Testing and Methodologies</li>
                  <li>
                    Penetration Testing Scoping and Engagement Methodology
                  </li>
                  <li>Open-Source Intelligence (OSINT) Methodology</li>
                  <li>Social Engineering Penetration Testing Methodology</li>
                  <li>Network Penetration Testing Methodology – External</li>
                  <li>Network Penetration Testing Methodology – Internal</li>
                  <li>
                    Network Penetration Testing Methodology – Perimeter Devices
                  </li>
                  <li>Web Application Penetration Testing Methodology</li>
                  <li>Database Penetration Testing Methodology</li>
                  <li>Wireless Penetration Testing Methodology</li>
                  <li>Cloud Penetration Testing Methodology</li>
                  <li>Report Writing and Post Testing Actions</li>
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

export default PenetrationTestingSecurityAnalyst;
