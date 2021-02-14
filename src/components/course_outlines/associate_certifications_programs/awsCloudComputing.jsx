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

const AWSCloudComputing = ({ signOut }) => {
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
        <title>AWS Cloud Computing</title>
      </Helmet>
      <Container className="mt overflow-hidden pt-4 course-outlines mb-5 pb-5">
        <h1 className="text-center fw-bold mx-3">AWS Cloud Computing</h1>
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
                  AWS Certification validates cloud expertise to help
                  professionals highlight in-demand skills and organizations
                  build effective, innovative teams for cloud initiatives using
                  AWS.
                </p>

                <p className="text-justify">
                  Cloud computing is the on-demand delivery of IT resources over
                  the Internet with pay-as-you-go pricing. Instead of buying,
                  owning, and maintaining physical data centers and servers, you
                  can access technology services, such as computing power,
                  storage, and databases, on an as-needed basis from a cloud
                  provider like Amazon Web Services (AWS).
                </p>

                <p className="text-justify">
                  AWS (Amazon Web Services) is a comprehensive, evolving cloud
                  computing platform provided by Amazon that includes a mixture
                  of infrastructure as a service (IaaS), platform as a service
                  (PaaS) and packaged software as a service (SaaS) offerings.
                  AWS services can offer an organization tools such as compute
                  power, database storage and content delivery services.
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
                <ul className="fw-bold list-unstyled">
                  <li>
                    Introduction to cloud Computing
                    <ul className="fw-normal">
                      <li>Buzz Words</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Section: Service Models
                    <ul className="fw-normal">
                      <li>Introduction</li>
                      <li>Infrastructure as a Service (IaaS)</li>
                      <li>Platform as a Service (PaaS)</li>
                      <li>Software as a Service (SaaS)</li>
                      <li>Model Comparison</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Essentials Characteristic
                    <ul className="fw-normal">
                      <li>Introduction</li>
                      <li>On-Demand Self-service</li>
                      <li>Broad Network access</li>
                      <li>Resource Pooling</li>
                      <li>Rapid Elasticity</li>
                      <li>Measure Service</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Deployment Models
                    <ul className="fw-normal">
                      <li>Deployment Models</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Cloud Models
                    <ul className="fw-normal">
                      <li>Public Cloud</li>
                      <li>Private Cloud</li>
                      <li>Hybrid Cloud</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Wrapping Up
                    <ul className="fw-normal">
                      <li>It’s a wrap</li>
                      <li>The Quiz</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    AWS Cloud Practitioner
                    <ul className="fw-normal">
                      <li>Before Cloud</li>
                      <li>What is Cloud Computing?</li>
                      <li>Cloud Computing Services</li>
                      <li>Cloud Model</li>
                      <li>Scalability</li>
                      <li>Reliability</li>
                      <li>Secure Data</li>
                      <li>Introduction to AWS Interface</li>
                      <li>Benefits</li>
                      <li>AWS IAM</li>
                      <li>AWS EC2</li>
                      <li>AWS S3</li>
                      <li>AWS Core Services</li>
                      <li>VPC</li>
                      <li>CloudFront</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    Global Infrastructure
                    <ul className="fw-normal">
                      <li>Cloud Watch</li>
                      <li>Route53</li>
                      <li>AWS SNS</li>
                      <li>Loadbalancer</li>
                      <li>Auto Scaling</li>
                      <li>Cloud Formation</li>
                      <li>Elastic BeanStalk</li>
                      <li>AWS Architecture</li>
                      <li>AWS Security</li>
                      <li>AWS Pricing &amp; Support</li>
                      <li>AWS Databases</li>
                      <li>AWS Analytic</li>
                      <li>Amazon Athena</li>
                      <li>Amazon EMR</li>
                      <li>and Other Services</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    AWS Solution Architect
                    <ul className="fw-normal">
                      <li>IAM</li>
                      <li>S3</li>
                      <li>EC2</li>
                      <li>Route53</li>
                      <li>RDS</li>
                      <li>VPC</li>
                      <li>Application Services</li>
                      <li>High Availability</li>
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

export default connect(null, mapDispatchToProps)(AWSCloudComputing);
