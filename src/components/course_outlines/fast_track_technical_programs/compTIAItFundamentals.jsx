import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";
import { useHistory } from "react-router-dom";

const CompTIAItFundamentals = () => {
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
        <h1 className="text-center fw-bold mx-3">CompTIA IT Fundamentals</h1>
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
                  CompTIA ITF+ helps professionals to decide if a career in IT
                  is right for them or to develop a broader understanding of IT.
                </p>
                <ul className="text-justify">
                  <li>
                    ITF+ is the only pre-career certification that helps
                    students or career changers determine if they have a
                    competency for information technology and if it is the right
                    career path for them.
                  </li>
                  <li>
                    ITF+ is the only single certification that covers all areas
                    of IT foundations, creating a broader understanding of IT
                    making it ideal for non-technical professionals.
                  </li>
                  <li>
                    ITF+ establishes an IT education framework for students in
                    middle school and high school.
                  </li>
                </ul>
                <p className="text-justify">
                  CompTIA ITF+ can serve as a springboard for various IT
                  careers, ensuring candidates are better prepared to understand
                  and grasp the building blocks of IT at an introductory,
                  foundational level. These individuals should consider pursing
                  CompTIA ITF+:
                </p>
                <ul className="text-justify">
                  <li>Students considering a career in IT</li>
                  <li>
                    Professionals working in fields that require a broad
                    understanding of IT
                  </li>
                  <li>
                    Marketing, sales and operations staff in IT-based
                    organizations
                  </li>
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
                <h6 className="fw-bold">IT CONCEPTS &amp; TERMINOLOGY</h6>
                <ul className="text-justify">
                  <li>
                    Comprehend notational systems, illustrate the basics of
                    computing and explain the value of data and troubleshooting
                  </li>
                </ul>

                <h6 className="fw-bold">INFRASTRUCTURE</h6>
                <ul className="text-justify">
                  <li>
                    Know how to set up and install common peripheral devices to
                    a laptop/PC or secure a basic wireless network
                  </li>
                </ul>

                <h6 className="fw-bold">APPLICATIONS &amp; SOFTWARE</h6>
                <ul className="text-justify">
                  <li>
                    Manage applications software, understand the various
                    components of an operating system and explain the purpose of
                    methods of application architecture
                  </li>
                </ul>

                <h6 className="fw-bold">SOFTWARE DEVELOPMENT</h6>
                <ul className="text-justify">
                  <li>
                    Comprehend programming language categories, interpret logic,
                    and understand the purpose of programming concepts
                  </li>
                </ul>

                <h6 className="fw-bold">DATABASE FUNDAMENTALS</h6>
                <ul className="text-justify">
                  <li>
                    Able to explain database concepts, structures, and purpose,
                    as well as understands methods used to interface
                  </li>
                </ul>

                <h6 className="fw-bold">SECURITY</h6>
                <ul className="text-justify">
                  <li>
                    Understand confidentiality, integrity, and availability
                    concerns of secure devices and best practice methods
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

export default CompTIAItFundamentals;
