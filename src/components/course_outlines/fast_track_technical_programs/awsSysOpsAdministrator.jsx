import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Copyright from "../../common/copyright/copyright";

const AWSSysOpsAdministrator = () => {
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
        <h1 className="text-center fw-bold mx-3">AWS SysOps Administrator</h1>
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
                  The AWS Certified SysOps Administrator - Associate (SOA-C01)
                  examination is intended for individuals who have technical
                  expertise in deployment, management, and operations on AWS. It
                  validates an examinee’s ability to:
                </p>

                <ul>
                  <li>
                    Deploy, manage, and operate scalable, highly available, and
                    fault tolerant systems on AWS.
                  </li>
                  <li>
                    Implement and control the flow of data to and from AWS.
                  </li>
                  <li>
                    Select the appropriate AWS service based on compute, data,
                    or security requirements.
                  </li>
                  <li>
                    Identify appropriate use of AWS operational best practices.
                  </li>
                  <li>
                    Estimate AWS usage costs and identify operational cost
                    control mechanisms.
                  </li>
                  <li>Migrate on-premises workloads to AWS.</li>
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
                    Domain 1: Monitoring and Reporting
                    <ul className="fw-normal">
                      <li>
                        Create and maintain metrics and alarms utilizing AWS
                        monitoring services
                      </li>
                      <li>
                        Recognize and differentiate performance and availability
                        metrics
                      </li>
                      <li>
                        Perform the steps necessary to remediate based on
                        performance and availability metrics
                      </li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Domain 2: High Availability
                    <ul className="fw-normal">
                      <li>
                        Implement scalability and elasticity based on use case
                      </li>
                      <li>
                        Recognize and differentiate highly available and
                        resilient environments on AWS
                      </li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Domain 3: Deployment and Provisioning
                    <ul className="fw-normal">
                      <li>
                        Identify and execute steps required to provision cloud
                        resources
                      </li>
                      <li>Identify and remediate deployment issues</li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Domain 4: Storage and Data Management
                    <ul className="fw-normal">
                      <li>Create and manage data retention</li>
                      <li>
                        Identify and implement data protection, encryption, and
                        capacity planning needs
                      </li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Domain 5: Security and Compliance
                    <ul className="fw-normal">
                      <li>Implement and manage security policies on AWS</li>
                      <li>Implement access controls when using AWS</li>
                      <li>
                        Differentiate between the roles and responsibility
                        within the shared responsibility model Version 1.5
                        SOA-C01 3 | P a g e
                      </li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Domain 6: Networking
                    <ul className="fw-normal">
                      <li>Apply AWS networking features</li>
                      <li>Implement connectivity services of AWS</li>
                      <li>
                        Gather and interpret relevant information for network
                        troubleshooting
                      </li>
                    </ul>
                  </li>

                  <li className="mt-3">
                    Domain 7: Automation and Optimization
                    <ul className="fw-normal">
                      <li>
                        Use AWS services and features to manage and assess
                        resource utilization
                      </li>
                      <li>
                        Employ cost-optimization strategies for efficient
                        resource utilization
                      </li>
                      <li>
                        Automate manual or repeatable process to minimize
                        management overhead
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

export default AWSSysOpsAdministrator;
