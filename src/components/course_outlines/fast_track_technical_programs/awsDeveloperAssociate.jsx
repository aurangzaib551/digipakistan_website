import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";
import { useHistory } from "react-router-dom";

const AWSDeveloperAssociate = () => {
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
        <h1 className="text-center fw-bold mx-3">AWS Developer Associate</h1>
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
                  This AWS Certified Developer - Associate (DVA-C01) examination
                  is intended for individuals who perform a developer role.
                </p>

                <p className="text-justify">
                  It validates an examinee’s ability to:
                </p>

                <ul>
                  <li>
                    Demonstrate an understanding of core AWS services, uses, and
                    basic AWS architecture best practices.
                  </li>
                  <li>
                    Demonstrate proficiency in developing, deploying, and
                    debugging cloud-based applications using AWS.
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
                <ul className="fw-bold list-unstyled">
                  <li>
                    Domain 1: Deployment
                    <ul className="fw-normal">
                      <li>
                        Deploy written code in AWS using existing CI/CD
                        pipelines, processes, and patterns
                      </li>
                      <li>Deploy applications using Elastic Beanstalk</li>
                      <li>
                        Prepare the application deployment package to be
                        deployed to AWS
                      </li>
                      <li>Deploy serverless applications</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Domain 2: Security
                    <ul className="fw-normal">
                      <li>Make authenticated calls to AWS services</li>
                      <li>Implement encryption using AWS services</li>
                      <li>
                        Implement application authentication, and authorization
                      </li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Domain 3: Development with AWS Services
                    <ul className="fw-normal">
                      <li>Write code for serverless applications</li>
                      <li>
                        Translate functional requirements into application
                        design
                      </li>
                      <li>
                        Implement application design into application code
                      </li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Domain 4: Refactoring
                    <ul className="fw-normal">
                      <li>
                        Optimize application to best use AWS services and
                        features
                      </li>
                      <li>
                        Migrate existing application code to run on AWS Version
                        1.5 DVA-C01
                      </li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Domain 5: Monitoring and Troubleshooting
                    <ul className="fw-normal">
                      <li>Write code that can be monitored</li>
                      <li>
                        Perform root cause analysis on faults found in testing
                        or production
                      </li>
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

export default AWSDeveloperAssociate;
